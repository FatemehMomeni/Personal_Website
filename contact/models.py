from django.db import models

# Create your models here.

class React(models.Model):
    msgSubject = models.CharField(max_length=100)
    emailAddress = models.EmailField()
    messageText = models.TextField()
    class Meta():
        verbose_name = "message"
    def __str__(self):
        return self.msgSubject