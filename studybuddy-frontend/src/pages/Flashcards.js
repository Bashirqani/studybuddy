import React, { useState, useEffect } from "react";
import API from "../api";

export default function Flashcards() {
  const [notes, setNotes] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState("");
  const [flippedCards, setFlippedCards] = useState({});
  const [learnedCards, setLearnedCards] = useState([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const res = await API.get("/notes");
      setNotes(res.data);
      if (res.data.length === 1) {
        setSelectedTopic(res.data[0].title);
      }
    } catch (err) {
      console.error("Error fetching notes:", err.message);
    }
  };

  const handleTopicChange = (e) => {
    setSelectedTopic(e.target.value);
    setFlippedCards({});
    setLearnedCards([]); // reset learned when topic changes
  };

  const toggleFlip = (id) => {
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleMarkLearned = (e, id) => {
    e.stopPropagation(); // Prevent flipping when clicking button
    if (!learnedCards.includes(id)) {
      setLearnedCards((prev) => [...prev, id]);
    }
  };

  const filteredNotes = notes.filter(note => note.title === selectedTopic);
  const learnedCount = learnedCards.length;
  const totalCount = filteredNotes.length;

  return (
    <div className="flashcards-container">
      <h2>📚 Flashcards</h2>

      {notes.length > 1 && (
        <select value={selectedTopic} onChange={handleTopicChange} className="topic-selector">
          <option value="">Select a topic</option>
          {notes.map((note) => (
            <option key={note._id} value={note.title}>{note.title}</option>
          ))}
        </select>
      )}

      {totalCount > 0 && (
        <p>
          Progress: {learnedCount} / {totalCount} cards learned
        </p>
      )}

      <div className="flashcard-grid">
        {filteredNotes.map((note) => (
          <div
            key={note._id}
            className={`flashcard ${flippedCards[note._id] ? 'flipped' : ''} ${learnedCards.includes(note._id) ? 'learned' : ''}`}
            onClick={() => toggleFlip(note._id)}
          >
            <div className="card-inner">
              <div className="card-front">{note.title}</div>
              <div className="card-back">
                {note.content}
                <br />
                <button
                  className="learned-btn"
                  onClick={(e) => handleMarkLearned(e, note._id)}
                >
                  Mark as Learned
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}



