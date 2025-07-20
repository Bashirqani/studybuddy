import React, { useEffect, useState } from "react";
import API from "../api";

export default function Notes() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [showWelcome, setShowWelcome] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    fetchNotes();
    handleWelcomeMessage();
  }, []);

  const handleWelcomeMessage = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setUsername(user.username);

      if (!sessionStorage.getItem("welcomeShown")) {
        setShowWelcome(true);
        sessionStorage.setItem("welcomeShown", "true");

        setTimeout(() => {
          setShowWelcome(false);
        }, 15000);  // 15 seconds
      }
    }
  };

  const fetchNotes = async () => {
    try {
      const res = await API.get("/notes");
      setNotes(res.data);
    } catch (err) {
      console.error("Error fetching notes:", err.message);
    }
  };

  const addNote = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    try {
      const res = await API.post("/notes", { title, content });
      setNotes([res.data, ...notes]);
      setTitle("");
      setContent("");
    } catch (err) {
      console.error("Error adding note:", err.message);
    }
  };

  const deleteNote = async (id) => {
    try {
      await API.delete(`/notes/${id}`);
      setNotes(notes.filter((note) => note._id !== id));
    } catch (err) {
      console.error("Error deleting note:", err.message);
    }
  };

  return (
    <div className="notes-container">
      {showWelcome && (
        <div className="welcome-popup fade-in">
          <h3>👋 Welcome back, {username}!</h3>
          <p>Here's how to use StudyBuddy:</p>
          <ul>
            <li>📝 Create and manage your study notes here.</li>
            <li>📚 View flashcards generated from your notes in the Flashcards tab.</li>
            <li>🌙 Use dark mode from the navbar to reduce eye strain.</li>
          </ul>
          <button onClick={() => setShowWelcome(false)}>Got it!</button>
        </div>
      )}

      <h2>📝 Your Notes</h2>

      <form className="note-form" onSubmit={addNote}>
        <input
          type="text"
          placeholder="Note title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Note content (optional)"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button type="submit">Add Note</button>
      </form>

      <div className="note-list">
        {notes.map((note) => (
          <div key={note._id} className="note-card">
            <h3>{note.title}</h3>
            <p>{note.content}</p>
            <button onClick={() => deleteNote(note._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}



