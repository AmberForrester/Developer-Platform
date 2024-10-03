from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

from django.contrib.auth import views as auth_views



urlpatterns = [
    path('admin/', admin.site.urls),
    path('projects/', include('projects.urls')),
    path('', include('users.urls')),
    path('api/', include('api.urls')),
    
    path('reset_password/', auth_views.PasswordResetView.as_view(template_name="reset_password.html"), 
         name="reset_password"),
    
    path('password_rest_sent/', auth_views.PasswordResetDoneView.as_view(template_name="reset_password_sent.html"), 
         name="password_reset_done"),
    
    path('reset/<uidb64>/<token>/', auth_views.PasswordResetConfirmView.as_view(template_name="reset.html"),      
         name="password_reset_confirm"),
    
    path('reset_password_complete/', auth_views.PasswordResetCompleteView.as_view(template_name="reset_password_complete.html"),
         name="password_reset_complete"),
]



urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT) # - For production. 



# Django Built in Class Based Views - 

# 1 - User submits email for reset, and we give a simple link to the password reset page, to give user option to enter email:
# Path = 'reset_password/'
# auth.views.PasswordResetView.as_view()
# name='reset_password'
 


# 2 - Email sent message for the actual confirmation that an email has been sent to their account:
# Path = 'password_rest_sent/'
# auth.views.PasswordResetDoneView.as_view()        
# name='password_reset_done'



# 3 - Email with link and reset instructions that will allow them to reset their password:
# Path = 'reset/<uidb64>/<token>/'    * Encodes the users ID in a base 64 encryption, with an expiry date and ensures only the user can modify it. 
# auth.views.PasswordResetConfirmView()            
# name='password_reset_confirm'



# 4 - Password successfully reset message confirmation that the new password has be set, and they can now log in with the new password they created.
# Path = 'reset_password_complete/'       
# auth.views.PasswordResetCompleteView.as_view()   
# name='password_reset_complete'