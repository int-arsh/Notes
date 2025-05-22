import { useState, useEffect } from 'react';
import { Card, CardContent, CardFooter } from './ui/card';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';

const NoteEditor = ({ note, onSave, onCancel }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (note) {
      setTitle(note.title || '');
      setContent(note.content || '');
    }
  }, [note]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ title, content });
  };

  return (
    <Card className="min-h-[70vh]">
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4 pt-6">
          <Textarea
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Untitled"
            className="text-4xl font-bold border-none resize-none p-0 focus-visible:ring-0 focus-visible:ring-offset-0"
            required
          />
          <Textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Start writing your note here..."
            className="min-h-[50vh] text-lg border-none resize-none p-0 focus-visible:ring-0 focus-visible:ring-offset-0"
            required
          />
        </CardContent>
        <CardFooter className="justify-end space-x-4">
          <Button
            type="button"
            variant="outline"
            onClick={onCancel}
          >
            Cancel
          </Button>
          <Button type="submit">
            Save
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default NoteEditor; 