// src/pages/UploadPage.jsx

import React, { useState } from 'react';
import axios from 'axios';

const UploadPage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [status, setStatus] = useState("");

  const handleUpload = async () => {
    if (!selectedFile) return setStatus("Please select a file.");

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      setStatus("Uploading...");
      await axios.post("http://localhost:8000/api/upload/", formData, {
 
        headers: { "Content-Type": "multipart/form-data" },
      });
      setStatus("✅ Upload successful!");
      setSelectedFile(null);
    } catch {
      setStatus("❌ Upload failed. Try again.");
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-lg">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Upload Document</h1>
      <input
        type="file"
        accept=".pdf,.docx,.txt"
        onChange={(e) => setSelectedFile(e.target.files[0])}
        className="w-full mb-4 border border-gray-300 p-2 rounded"
      />
      <button
        onClick={handleUpload}
        className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded transition"
      >
        Upload
      </button>
      {status && <p className="mt-4 text-gray-600">{status}</p>}
    </div>
  );
};

export default UploadPage;
