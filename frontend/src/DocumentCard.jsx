// src/DocumentCard.jsx

import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const DocumentCard = ({ doc, refreshDocuments }) => {
  const navigate = useNavigate();  // ✅ Move this outside the function

  const handleDelete = async () => {
    if (!window.confirm("Delete this document?")) return;

    try {
      await axios.delete(`/api/documents/${doc.id}/`);
      alert("Deleted successfully");
      refreshDocuments(); // Refresh list
    } catch (err) {
      alert("Delete failed");
      console.error(err);
    }
  };

  return (
    <div className="border p-4 rounded-xl shadow bg-white">
      <h2 className="text-lg font-semibold">{doc.title}</h2>
      <p className="text-sm text-gray-600">
        Type: {doc.type} • Pages: {doc.pages} <br />
        Uploaded: {new Date(doc.upload_date).toLocaleDateString()}
      </p>

      <div className="flex gap-3 mt-3">
        <button
          className="bg-red-500 text-white px-3 py-1 rounded"
          onClick={handleDelete}
        >
          Delete
        </button>

        <button
          className="bg-green-600 text-white px-3 py-1 rounded"
          onClick={() => navigate(`/chat/${doc.id}`)}
        >
          Chat
        </button>
      </div>
    </div>
  );
};

export default DocumentCard;
