import requests

url = "https://google-search3.p.rapidapi.com/api/v1/search/q=weather toronto"

headers = {
    'x-rapidapi-key': "88ddfba855msh4c9bc623153c428p13a7bajsn647f19a89411",
    'x-rapidapi-host': "google-search3.p.rapidapi.com"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
