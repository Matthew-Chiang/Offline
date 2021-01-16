import vonage
import json

with open('./keys.json') as file:
  keys = json.load(file)

def send_sms(send_to_number, message):
    client = vonage.Client(key=keys["VONAGE_API_KEY"], secret=keys["VONAGE_API_SECRET"])
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
