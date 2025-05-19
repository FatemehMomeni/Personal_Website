from django.contrib import admin
from contact.models import React

# Register your models here.

class ReactAdmin(admin.ModelAdmin):
    empty_value_display = '-empty-'
    list_display = ('msgSubject', 'emailAddress', 'messageText')
    list_filter = ('emailAddress',)
    search_fields = ['msgSubject', 'emailAddress']
admin.site.register(React,ReactAdmin)