import requests
import json

with open('./scraping_keys.json') as file:
    keys = json.load(file)

url = "https://google-search3.p.rapidapi.com/api/v1/search/q=weather toronto"

headers = {
    'x-rapidapi-key': keys["key"],
    'x-rapidapi-host': "google-search3.p.rapidapi.com"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
