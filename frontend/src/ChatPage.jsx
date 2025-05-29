// src/pages/ChatPage.jsx

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ChatPage = () => {
  const { docId } = useParams();
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const askQuestion = async () => {
    if (!question.trim()) return;

    setLoading(true);
    try {
      const res = await axios.post("/api/ask/", {
        document_id: docId,
        question,
        top_k: 3,
      });
      setAnswer(res.data.answer);
    } catch (err) {
      setAnswer("⚠️ Error getting answer.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow-lg">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Ask a Question</h1>
      <textarea
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Type your question..."
        rows="4"
        className="w-full border p-3 rounded mb-4"
      />
      <button
        onClick={askQuestion}
        className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded transition"
        disabled={loading}
      >
        {loading ? "Thinking..." : "Ask"}
      </button>

      {answer && (
        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-2 text-gray-700">Answer:</h2>
          <div className="bg-gray-100 p-4 rounded">{answer}</div>
        </div>
      )}
    </div>
  );
};

export default ChatPage;
