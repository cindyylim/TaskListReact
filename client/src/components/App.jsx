import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  async function getNotes() {
    const response = await fetch("http://localhost:3001/notes");
    const data = await response.text();
    setNotes(eval(data));
  }

  async function addNote(newNote) {
    const note = JSON.stringify(newNote);
    const response = await fetch("http://localhost:3001/newNote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: note,
    });
    await response.text();
    getNotes();
  }

  async function deleteNote(id) {
    const response = await fetch(`http://localhost:3001/note/${id}`, {
      method: "DELETE",
    });
    await response.text();
    getNotes();
  }

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem) => (
        <Note
          key={noteItem.id}
          id={noteItem.id}
          title={noteItem.title}
          content={noteItem.metadata}
          onDelete={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
