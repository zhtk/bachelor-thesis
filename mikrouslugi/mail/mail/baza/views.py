from django.shortcuts import render

# Create your views here.
json_output = json.dumps([{
        "id": 1,
        "from": user_data.user_id,
        "to": "Urząd Skarbowy nr 2 w Radomiu",
        "date": "2017-01-01",
        "topic": "Dzień dobry",
        "content": "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    }])

def send(request):
	pass

def received(request):
	pass

def sent(request):
	pass
