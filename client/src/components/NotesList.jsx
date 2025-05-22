import { Card, CardHeader, CardTitle, CardContent } from './ui/card';

const NotesList = ({ notes, onNoteSelect }) => {
  if (!notes || notes.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-muted-foreground">No notes yet. Create your first note!</p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {notes.map((note) => (
        <Card
          key={note._id}
          className="group cursor-pointer border-muted/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
          onClick={() => onNoteSelect(note)}
        >
          <CardHeader className="space-y-1">
            <CardTitle className="line-clamp-2 text-xl">{note.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="line-clamp-3 text-sm text-muted-foreground">
              {note.content}
            </p>
            <p className="mt-4 text-xs text-muted-foreground/60">
              {new Date(note.updatedAt).toLocaleDateString()}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default NotesList; 