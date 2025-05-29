# 🧠 Doc Intelligence Platform

A smart document-based Q&A platform that lets users upload documents (PDF, DOCX, TXT) and interact with them through a chatbot powered by embeddings + OpenAI or LM Studio.

---

## 🚀 Features

- Upload PDF, DOCX, and TXT files
- See documents in a dashboard (with title, page count, upload date, etc.)
- Ask questions and get contextual answers based on the uploaded content
- Delete uploaded documents
- Backend: Django + DRF
- Frontend: React + Tailwind
- LLM: OpenAI / LM Studio
- Vector DB: ChromaDB

---

## 🛠️ Tech Stack

- **Frontend**: React, Tailwind CSS
- **Backend**: Django, Django REST Framework
- **Vector DB**: ChromaDB
- **Embeddings**: Sentence-Transformers
- **LLM**: OpenAI or LM Studio
- **Document Parsing**: PyPDF2, pdfplumber, python-docx

---

## ⚙️ Setup Instructions

### 🔧 Backend

```bash
cd backend
python -m venv venv
source venv/bin/activate  # or venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env  # Add your OpenAI API key if needed
python manage.py migrate
python manage.py runserver
# Document Intelligence Platform

Full setup instructions for backend and frontend.