# Generated by Django 4.0.3 on 2022-04-18 05:59

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('cards', '0002_rename_pack_id_flashcard_pack_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='pack',
            name='description',
        ),
    ]
