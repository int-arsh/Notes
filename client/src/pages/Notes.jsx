import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import NotesList from '../components/NotesList';
import NoteEditor from '../components/NoteEditor';
import { Button } from '../components/ui/button';
import { PlusIcon } from 'lucide-react';

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }
    // TODO: Fetch notes from API
    // For now, using dummy data
    setNotes([
      {
        _id: '1',
        title: 'Welcome Note',
        content: 'Welcome to your notes app! Start creating notes...',
        updatedAt: new Date().toISOString(),
      },
    ]);
  }, [user, navigate]);

  const handleNoteSelect = (note) => {
    setSelectedNote(note);
    setIsEditing(true);
  };

  const handleNewNote = () => {
    setSelectedNote(null);
    setIsEditing(true);
  };

  const handleSaveNote = async (noteData) => {
    // TODO: Implement API call to save note
    if (selectedNote) {
      // Update existing note
      const updatedNotes = notes.map((note) =>
        note._id === selectedNote._id
          ? { ...note, ...noteData, updatedAt: new Date().toISOString() }
          : note
      );
      setNotes(updatedNotes);
    } else {
      // Create new note
      const newNote = {
        _id: Date.now().toString(),
        ...noteData,
        updatedAt: new Date().toISOString(),
      };
      setNotes([newNote, ...notes]);
    }
    setIsEditing(false);
    setSelectedNote(null);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setSelectedNote(null);
  };

  return (
    <div className="container max-w-7xl mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-semibold tracking-tight">
          {isEditing ? (selectedNote ? 'Edit Note' : 'New Note') : 'My Notes'}
        </h1>
        {!isEditing && (
          <Button onClick={handleNewNote} size="sm">
            <PlusIcon className="h-4 w-4 mr-2" />
            New Note
          </Button>
        )}
      </div>

      {isEditing ? (
        <NoteEditor
          note={selectedNote}
          onSave={handleSaveNote}
          onCancel={handleCancel}
        />
      ) : (
        <NotesList notes={notes} onNoteSelect={handleNoteSelect} />
      )}
    </div>
  );
};

export default Notes; 