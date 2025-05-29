

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DocumentCard from "./DocumentCard";



const DashboardPage = () => {
  const [documents, setDocuments] = useState([]);

  const fetchDocuments = async () => {
  try {
    const res = await axios.get('/api/documents/');
    console.log("Response from /api/documents/:", res.data); // ADD THIS LINE
   setDocuments(res.data.data); // or res.data.documents

  } catch (error) {
    console.error('Error fetching documents:', error);
  }
};

  useEffect(() => {
    fetchDocuments();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Your Uploaded Documents</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
          {Array.isArray(documents) && documents.length > 0 ? (
  documents.map((doc) => (
    <DocumentCard key={doc.id} doc={doc} refreshDocuments={fetchDocuments} />
  ))
) : (
  <p className="text-gray-500">No documents uploaded yet.</p>
)}

      </div>
    </div>
  );
};

export default DashboardPage;
