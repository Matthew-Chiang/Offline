import urllib.request as urllib2

url = "https://en.wikipedia.org/wiki/George_Clooney"

page = urllib2.urlopen(url)

print(page.read())
