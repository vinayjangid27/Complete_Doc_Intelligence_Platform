
# 📄 Complete Document Intelligence Platform

A full-stack Document Intelligence Platform that allows users to upload documents (PDF, DOCX, TXT) and ask questions using Natural Language. This system uses Retrieval Augmented Generation (RAG) to generate contextual answers from documents using local LLMs via LM Studio.

---

## 🔗 Project Demo

**GitHub Repository**: [Complete_Doc_Intelligence_Platform](https://github.com/vinayjangid27/Complete_Doc_Intelligence_Platform)

---

## 📸 UI Screenshots

### 1. 📂 Document Library Page
Displays a list of uploaded documents with metadata like file name, upload date, and processing status.

![Document Library UI](screenshots/document-library.png)

---

### 2. ⬆️ Upload Page
Drag-and-drop interface for uploading PDF, DOCX, and TXT files.

![Upload Page UI](screenshots/upload-page.png)

---

### 3. 💬 Document Chat Interface
Ask questions about the uploaded document using a chat-like UI.

![Chat Interface UI](screenshots/chat-interface.png)

---

## 🛠️ Tech Stack

### 🔧 Backend
- Python
- Django REST Framework
- MySQL (for metadata)
- ChromaDB (for vector storage)
- PyPDF2 / pdfplumber / python-docx
- Sentence Transformers
- LM Studio (for local LLM inference)

### 💻 Frontend
- ReactJS
- Tailwind CSS
- React Dropzone (for drag-and-drop uploads)

---

## ⚙️ Setup Instructions

### Prerequisites
- Python 3.8+
- Node.js 16+
- MySQL
- LM Studio (Download from [LM Studio](https://lmstudio.ai/))

### Backend Setup
```bash
cd backend
python -m venv env
source env/bin/activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

### Frontend Setup
```bash
cd frontend
npm install
npm start
```

---

## 📤 API Documentation

### 🔹 POST `/api/upload/`
Upload and process a document (PDF, DOCX, TXT)

### 🔹 GET `/api/documents/`
Retrieve all uploaded documents and their metadata

### 🔹 POST `/api/query/`
Submit a question for a specific document

### 🔹 DELETE `/api/document/{id}/`
Delete a document and its associated data

---

## 📘 Sample Questions & Answers

- **Q:** "What is the key finding in the document?"
  **A:** "The document highlights that..."

- **Q:** "Summarize the second section."
  **A:** "Section 2 discusses..."

---

## 🧠 RAG Implementation

- Smart chunking of documents
- Vector embedding using sentence transformers
- Similarity search using ChromaDB
- Contextual answer generation using LM Studio-hosted models

---

## 📦 Requirements

See `requirements.txt` for Python dependencies.

---

## 📁 Sample Documents

Test files are included in the `sample_documents/` folder:
- `invoice_sample.pdf`
- `contract_sample.docx`
- `notes_sample.txt`

---

## 📊 Database Schema

- `Documents`: metadata for uploaded files
- `Chunks`: text chunks with embeddings
- `Sessions`: chat session metadata
- `Messages`: question-answer pairs

---

## 🏆 Evaluation Criteria Checklist

- ✅ Full RAG pipeline implemented
- ✅ Functional React frontend with Tailwind UI
- ✅ Multiple document format support
- ✅ Clean, readable, and well-commented code
- ✅ Sample documents, screenshots, and Q&A examples

---

## 📅 Submission Info

**Deadline**: 31 May 2025, 11:55 PM  
**Submission Form**: [Google Form Link](https://forms.gle/ZT6VZ1iW3ah91Gxu5)

---

## 📧 Contact

If you have any queries:
`devgods99@gmail.com`

---

## 🌟 Acknowledgments

Built for the Ergosphere Internship Assignment.
