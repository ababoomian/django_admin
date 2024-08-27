from django.contrib import admin
from .models import Project
from .forms import ProjectAdminForm

class ProjectAdmin(admin.ModelAdmin):
    form = ProjectAdminForm

    def save_model(self, request, obj, form, change):
        obj.set_tech_stack(form.cleaned_data['tech_stack'])
        super().save_model(request, obj, form, change)

    def tech_stack_display(self, obj):
        return ', '.join(obj.get_tech_stack())

    tech_stack_display.short_description = 'Tech Stack'

    list_display = ('project_name', 'tech_stack_display', 'reverse')

admin.site.register(Project, ProjectAdmin)
