import React from "react";
import { useState } from "react";

const App = ({notes}) => {
  const [notes, setNotes] = useState(notes);
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)

  const addNote = (e) => {
    e.preventDefault()
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
      id: notes.length + 1
    }
    setNotes(notes.concat(noteObject))
    setNewNote('')
  };

  const notesToShow = showAll ? notes : notes.filter(note => note.important === true)

  const handleNoteChange = (e) => {
    setNewNote(e.target.value)
  };

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>{note}</li>
        ))}
      </ul>
      <form onSubmit={addNote}>
        <input 
          value={newNote}
          onChange={handleNoteChange}
        />
        <button type="submit">save</button>
      </form>
      <button onClick={notesToShow}>Show</button>
    </div>
  );
};

export default App;
