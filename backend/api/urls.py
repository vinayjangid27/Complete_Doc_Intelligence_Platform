from django.urls import path # type: ignore
from .views import upload_document, delete_document # type: ignore

urlpatterns = [
    path('upload/', upload_document, name='upload-document'),
    path('delete/<int:doc_id>/', delete_document, name='delete-document'),
]
