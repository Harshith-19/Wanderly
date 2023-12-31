from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_cart_alter_places_city_cuisine'),
    ]

    operations = [
        migrations.CreateModel(
            name='Unique',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('description', models.TextField()),
                ('image', models.ImageField(upload_to='places_to_visit/')),
                ('city', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.cities')),
            ],
        ),
    ]
