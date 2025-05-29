from rest_framework import status # type: ignore
from rest_framework.response import Response # type: ignore
from rest_framework.decorators import api_view, parser_classes # type: ignore
from rest_framework.parsers import MultiPartParser, FormParser # type: ignore
from .models import Document

# ----------- Upload Document -----------
@api_view(['POST'])
@parser_classes([MultiPartParser, FormParser])
def upload_document(request):
    uploaded_file = request.FILES.get('file')
    
    if not uploaded_file:
        return Response({'error': 'No file provided.'}, status=status.HTTP_400_BAD_REQUEST)
    
    # Save document to DB (you may want to handle duplicates or metadata)
    doc = Document.objects.create(file=uploaded_file)
    
    return Response({'message': 'Upload successful.', 'doc_id': doc.id}, status=status.HTTP_201_CREATED)

# ----------- Delete Document -----------
@api_view(['DELETE'])
def delete_document(request, doc_id):
    try:
        doc = Document.objects.get(id=doc_id)
        doc.delete()  # If related chunks exist, make sure on_delete=models.CASCADE is set
        return Response({'message': 'Document deleted successfully'}, status=status.HTTP_200_OK)
    except Document.DoesNotExist:
        return Response({'error': 'Document not found'}, status=status.HTTP_404_NOT_FOUND)
