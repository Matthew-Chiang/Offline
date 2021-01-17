from flask import Flask, request, jsonify, make_response
from pprint import pprint
from flask.json import JSONEncoder
import simplejson
from send_sms import send_message
from google_search import search_google
# from web_scraping.generic_site import

app = Flask(__name__)


@app.route('/')
def hello_world():
    return 'Hello, World!'


@app.route('/search')
def search():
    return 'asdf'


@app.route('/webhooks/inbound-sms', methods=['GET', 'POST'])
def inbound_sms():
    number = ''
    text = ''
    if request.is_json:
        # print('JSON')
        data_json = request.get_json()
        pprint(data_json)
        if data_json['type'] == 'text':
            # print('TEXT')
            number = data_json['msisdn']
            text = data_json['text']
    else:
        # print('NOT JSON')
        print(type(request))
        pprint(request)
        data = request.get_json()#(force=True)
        # data = make_response(jsonify(request))
        print(data)
        print("TEST")
        # response = MyResponseClass.force_type(request)
        # print(JSONEncoder.default(request))
        # data = dict(request.form) or dict(request.args)
        # pprint(data)
        if data['type'] == 'text':
            number = data['msisdn']
            text = data['text']
    print('SEARCH TEXT ', text)
    # search_results = search_google(text)
    # print('SEARCH RESULTS',  search_results)
    # send_message(number, search_results)

    return ('', 204)
