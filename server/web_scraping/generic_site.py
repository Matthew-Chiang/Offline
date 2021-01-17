import urllib.request as urllib2
from bs4 import BeautifulSoup

url = "https://en.wikipedia.org/wiki/George_Clooney"

page = urllib2.urlopen(url).read()
soup = BeautifulSoup(page, 'html.parser')
text = soup.find_all(text=True)

output = ''
blacklist = [
    '[document]',

    'noscript',
    'header',
    'html',
    'meta',
    'head',
    'input',
    'script',
    # there may be more elements you don't want, such as "style", etc.
]

for t in text:
    if t.parent.name not in blacklist:
        output += '{} '.format(t)

print(output)
