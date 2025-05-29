from django.contrib import admin # type: ignore
from django.urls import path, include # type: ignore
from django.conf import settings # type: ignore
from django.conf.urls.static import static # type: ignore

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),
]

# To serve uploaded files in development:
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
