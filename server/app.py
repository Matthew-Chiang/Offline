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
    data = request.args.get('text')
    print(data)
    return ('', 204)
