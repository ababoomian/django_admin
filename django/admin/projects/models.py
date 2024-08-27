import json
from django.db import models

class Project(models.Model):
    project_name = models.CharField(max_length=255)
    project_desc = models.TextField()
    tech_stack = models.TextField()  # Use TextField to store JSON as a string
    project_img = models.ImageField(upload_to='projects/')
    reverse = models.BooleanField(default=False)

    def get_tech_stack(self):
        """Returns tech_stack as a list of strings."""
        try:
            return json.loads(self.tech_stack)
        except json.JSONDecodeError:
            return []

    def set_tech_stack(self, tech_stack_list):
        """Sets tech_stack from a list of strings."""
        self.tech_stack = json.dumps(tech_stack_list)

    def __str__(self):
        return self.project_name
