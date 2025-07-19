import React, { useState, useEffect } from "react";
import API from "../api";

export default function Flashcards() {
  const [notes, setNotes] = useState([]);
  const [flippedCards, setFlippedCards] = useState({});

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const res = await API.get("/notes");
      setNotes(res.data);
    } catch (err) {
      console.error("Error fetching notes:", err.message);
    }
  };

  const toggleFlip = (id) => {
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="flashcards-container">
      <h2>📚 Flashcards</h2>
      <div className="flashcard-grid">
        {notes.map((note) => (
          <div
            key={note._id}
            className={`flashcard ${flippedCards[note._id] ? 'flipped' : ''}`}
            onClick={() => toggleFlip(note._id)}
          >
            <div className="card-inner">
              <div className="card-front">{note.title}</div>
              <div className="card-back">{note.content}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}



