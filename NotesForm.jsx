import { useState } from "react";
import { motion } from "framer-motion";

function NotesForm({ addNote }) {
  const [formData, setFormData] = useState({
    title: "",
    category: "study",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.title.trim() || !formData.description.trim()) return;

    addNote({
      ...formData,
      id: Date.now(),
    });

    setFormData({
      title: "",
      category: "study",
      description: "",
    });
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-5"
    >
      <h2 className="text-3xl font-bold text-gray-800">
        Add Note
      </h2>

      <input
        type="text"
        name="title"
        placeholder="Note Title"
        value={formData.title}
        onChange={handleChange}
        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
        required
      />

      <select
        name="category"
        value={formData.category}
        onChange={handleChange}
        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
      >
        <option value="study">Study</option>
        <option value="work">Work</option>
        <option value="personal">Personal</option>
        <option value="entertainment">Entertainment</option>
      </select>

      <textarea
        name="description"
        placeholder="Write your note..."
        value={formData.description}
        onChange={handleChange}
        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none h-32 resize-none"
        required
      />

      <motion.button
        type="submit"
        animate={{backgroundColor: ["#3b82f6", "#8b5cf6", "#ec4899", "#3b82f6"],}}
        transition={{duration: 4,repeat: Infinity,ease: "linear",}}
        // animate={{ scale: [1, 1.01, 1] }}
        // transition={{duration: 1.2 ,repeat: Infinity, repeatType: "loop", ease: "easeInOut",}}
        className="w-full bg-blue-500 text-white p-3 rounded-lg"
      >
        Add Note
      </motion.button>
    </motion.form>
  );
}

export default NotesForm;