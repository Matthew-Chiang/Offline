import requests
import json

with open('keys.json') as file:
    keys = json.load(file)
def search_google(search):
    url = "https://google-search3.p.rapidapi.com/api/v1/search/q=" + search

    headers = {
        'x-rapidapi-key': keys["RAPID_API_KEY"],
        'x-rapidapi-host': "google-search3.p.rapidapi.com"
    }

    response = requests.request("GET", url, headers=headers)
    return_data =  response.json()['results'][:8]
    # print(response.json()['results'][:8])
    return return_data

