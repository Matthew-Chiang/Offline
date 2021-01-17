import json
# from mapbox import Directions
# # from mapbox.services.directions import Directions

with open('../keys.json') as file:
    keys = json.load(file)

# directions = Directions(access_token=keys["MAPBOX_API_KEY"])
# Origin = {'type': 'Feature', 'properties': {'name': 'Portland, OR'},
#           'geometry': {'type': 'Point', 'coordinates': [-122.7282, 45.5801]}}
# destination = {'type': 'Feature', 'properties': {'name': 'Bend, OR'},
#                'geometry': {'type': 'Point', 'coordinates': [-121.3153, 44.0582]}}

# response = directions.directions(
#     [Origin, destination], 'mapbox.driving', steps=True, language="en")
# print(response.status_code)
# # print(response.json)
# print(response.geojson())

import requests

url = "https://api.mapbox.com/directions/v5/mapbox/driving/13.426579,52.508068;13.427292,52.506902?access_token=" + \
    keys["MAPBOX_API_KEY"]
# url = "https://api.mapbox.com/directions/v5/mapbox/cycling/-122.42,37.78;-77.03,38.91?access_token=pk.eyJ1IjoibWF0dGhldy1tYXAiLCJhIjoiY2trMDUyMGJmMDlvdDJwcWQ5aDRmaHo1aiJ9.J7Ve9OmQS4KKde5FhrZWoQ"

try:
    r = requests.get(url, params={'steps': 'true'})
    r.raise_for_status()
except requests.exceptions.HTTPError as err:
    raise SystemExit(err)

print(r.json())
