import { motion, AnimatePresence } from "framer-motion";

function NotesList({ notes, deleteNote }) {
  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        Your Notes
      </h2>

      {notes.length === 0 && (
        <p className="text-gray-500">No notes added yet.</p>
      )}

      <AnimatePresence>
        {notes.map((note) => (
          <motion.div
            key={note.id}
            initial={{ opacity: 0, y: 45 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6 }}
            className="bg-white shadow-md rounded-xl p-5 mb-5 border"
          >
            <h3 className="text-xl font-semibold">
              {note.title}
            </h3>

            <p className="text-sm text-gray-500 mb-2">
              Category: {note.category}
            </p>

            <p className="text-gray-700">
              {note.description}
            </p>

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => deleteNote(note.id)}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
            >
              Delete
            </motion.button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export default NotesList;