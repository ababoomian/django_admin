from django import forms
from .models import Project

class ProjectAdminForm(forms.ModelForm):
    tech_stack = forms.CharField(
        widget=forms.Textarea(attrs={'rows': 3}),
        help_text="Enter tech stack items separated by commas.",
    )

    class Meta:
        model = Project
        fields = '__all__'

    def clean_tech_stack(self):
        tech_stack = self.cleaned_data.get('tech_stack', '')
        tech_stack_list = [item.strip() for item in tech_stack.split(',') if item.strip()]
        return tech_stack_list
