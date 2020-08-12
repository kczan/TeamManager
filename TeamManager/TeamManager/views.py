from django.shortcuts import render


def about_view(request, *args, **kwargs):
    return render(request, 'about.html', {})
