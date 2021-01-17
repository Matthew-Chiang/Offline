from flask import Flask, request, jsonify, make_response
import requests
import json
import vonage
from pprint import pprint
# from flask.json import JSONEncoder
# import simplejson
# from send_sms import send_message
# from google_search import search_google
# from web_scraping.generic_site import

app = Flask(__name__)

with open('keys.json') as file:
    keys = json.load(file)


@app.route('/')
def hello_world():
    return 'Hello, World!'


@app.route('/search')
def search():
    return 'asdf'


@app.route('/webhooks/inbound-sms', methods=['GET', 'POST'])
def inbound_sms():
    data = request.args.get('text')
    number = request.args.get('msisdn')
    if "weather" in data:
        search_result = get_weather((data.replace("weather", "")).strip())
    else:
        search_result = search_google(data)
    print(str(search_result))
    message_sent = send_message(number, str(search_result))

    return ('', 204)


def search_google(search):
    url = "https://google-search3.p.rapidapi.com/api/v1/search/q=" + search

    headers = {
        'x-rapidapi-key': keys["RAPID_API_KEY"],
        'x-rapidapi-host': "google-search3.p.rapidapi.com"
    }

    response = requests.request("GET", url, headers=headers)
    return_data = response.json()['results'][:8]
    # print(response.json()['results'][:8])
    return return_data


def send_message(send_to_number, message):
    client = vonage.Client(
        key=keys["VONAGE_API_KEY"], secret=keys["VONAGE_API_SECRET"])
    sms = vonage.Sms(client)

    responseData = sms.send_message(
        {
            "from": keys["VONAGE_BRAND_NAME"],
            "to": send_to_number,
            "text": message,
        }
    )

    if responseData["messages"][0]["status"] == "0":
        return "ok"
    else:
        return f"Error: {responseData['messages'][0]['error-text']}"


def get_weather(city):

    url = "http://api.weatherbit.io/v2.0/current?city=" + \
        city + "&key=" + keys["WEATHER_API_KEY"]
    url_daily = "http://api.weatherbit.io/v2.0/forecast/daily?city=" + \
        city + "&days=1&key=" + keys["WEATHER_API_KEY"]
    response = requests.request("GET", url)
    response_data = response.json()
    response_daily = requests.request("GET", url_daily)
    response_data_daily = response_daily.json()

    title = search_google(city + ' weather')

    weather = {
        "title": title[0]['title'].split('-')[0],
        "today_temp": response_data['data'][0]['temp'],
        "today_des": response_data['data'][0]['weather']['description'],
        "tom_temp": response_data_daily['data'][0]['temp'],
        "tom_des": response_data_daily['data'][0]['weather']['description']

    }
    return (weather)
