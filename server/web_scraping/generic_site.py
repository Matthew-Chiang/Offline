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

set = 0
count = 0
last_type = None
for t in text:
    parent = t.parent.name
    if parent not in blacklist and count < 1000:
        if not (last_type == 'div' and last_type == parent):
            if (parent == 'h1' or parent == 'h2' or parent =='h3'
                    or parent == 'h4' or parent == 'h5' or parent == 'h6') and set == 0:
                output += (parent + ' ')
                set = 1
            elif parent == 'span' and set == 0:
                output += 'h6 '
                set = 1
            if t == '\n':
                set = 0
        output += '{} '.format(t)
        count += 1

print(output)
