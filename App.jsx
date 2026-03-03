import { useState, useEffect } from "react";
import NotesForm from "./assets/components/NotesForm";
import NotesList from "./assets/components/NotesList";
import { motion } from "framer-motion";

function App() {
  const [notes, setNotes] = useState([]);

  // Load from localStorage
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes"));
    if (savedNotes) setNotes(savedNotes);
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = (note) => {
    setNotes((prev) => [...prev, note]);
  };

  const deleteNote = (id) => {
    setNotes((prev) => prev.filter((note) => note.id !== id));
  };

  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">

      {/* Left Section */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="w-1/2 p-10 bg-white shadow-md overflow-y-auto"
      >
        <NotesForm addNote={addNote} />
      </motion.div>

      {/* Right Section */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-1/2 p-10 overflow-y-auto"
      >
        <NotesList notes={notes} deleteNote={deleteNote} />
      </motion.div>

    </div>
  );
}

export default App;