import vonage
import json

with open('keys.json') as file:
    keys = json.load(file)


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


# if __name__ == "__main__":
#     send_message = "{\"title\":\"Toronto, ON - Current Weather - The Weather Network\",\"link\":\"https://www.theweathernetwork.com/ca/weather/ontario/toronto\",\"description\":\"Get Toronto, ON current weather report with temperature, feels like, air quality, humidity, UV report and pollen forecast from TheWeatherNetwork.com.\"},\r\n\r\n{\"title\":\"Toronto, ON - Fourteen Day Weather - The Weather Network\",\"link\":\"https://www.theweathernetwork.com/ca/14-day-weather-trend/ontario/toronto\",\"description\":\"Toronto, ON temperature trend for the next 14 Days. Find daytime highs and nighttime lows from TheWeatherNetwork.com.\"},\r\n\r\n{\"title\":\"Toronto, ON - 7 Day Forecast - Environment Canada\",\"link\":\"https://weather.gc.ca/city/pages/on-143_metric_e.html\",\"description\":\"Current conditions and forecasts including 7 day outlook, daily high/low temperature, warnings, chance of precipitation, pressure, humidity/wind chill (when\u00A0...\"},{\r\n\r\n\"title\":\"Toronto, Ontario, Canada Today, Tonight & Tomorrow's ...\",\"link\":\"https://www.accuweather.com/en/ca/toronto/m5h/weather-forecast/55488\",\"description\":\"Get the forecast for today, tonight & tomorrow's weather for Toronto, Ontario, Canada. Hi/Low, RealFeel\u00AE, precip, radar, & everything you need to be ready for\u00A0...\"},\r\n\r\n{\"title\":\"Toronto - BBC Weather - BBC.com\",\"link\":\"https://www.bbc.com/weather/6167865\",\"description\":\"14-day weather forecast for Toronto.\"},{\"title\":\"Weather - Forecasts for Toronto and the GTA - CP24\",\"link\":\"https://www.cp24.com/weather\",\"description\":\"The most recent up-to-date weather forecasts and warnings for Toronto and the GTA, including 5 Day Forecasts, Wind Speeds and temperatures from across\u00A0...\"},{\r\n\r\n\"title\":\"Toronto, Ontario, Canada 10-Day Weather Forecast - The ...\",\"link\":\"https://weather.com/weather/tenday/l/Toronto+Ontario+Canada?canonicalCityId=4d9dd70a933d0d5d4c894283242ddf650e6b0903fedd76d42e55803cb628e1e7\",\"description\":\"Be prepared with the most accurate 10-day forecast for Toronto, Ontario, Canada with highs, lows, chance of precipitation from The Weather Channel and\u00A0...\"},{\r\n\r\n\"title\":\"Toronto, Ontario 10-Day Weather Forecast - The Weather ...\",\"link\":\"https://weather.com/en-CA/weather/tenday/l/Toronto+Ontario?canonicalCityId=4d9dd70a933d0d5d4c894283242ddf650e6b0903fedd76d42e55803cb628e1e7\",\"description\":\"Be prepared with the most accurate 10-day forecast for Toronto, Ontario with highs, lows, chance of precipitation from The Weather Channel and Weather.com.\"},{\r\n\r\n\"title\":\"Traditional winter weather set to return to Toronto with messy ...\",\"link\":\"https://www.blogto.com/city/2021/01/winter-weather-return-toronto-messy-snow/\",\"description\":\"20 hours ago \u2014 A forecast for \\\"widespread snow\\\" has been issued for across the GTA, bringing drizzle and wet snow into the area during the late afternoon and\u00A0...\"}],\r\n"
#     print(send_sms("16472687381", send_message))
