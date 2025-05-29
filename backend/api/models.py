from django.db import models # type: ignore

class Document(models.Model):
    file = models.FileField(upload_to='documents/')
    uploaded_at = models.DateTimeField(auto_now_add=True)
# Backend models (provided earlier)