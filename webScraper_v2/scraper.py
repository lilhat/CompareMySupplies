import requests
import json
from bs4 import BeautifulSoup
import pandas as pd
import csv
import time
import asyncio
import aiohttp


# r = requests.post(url='https://async.scraperapi.com/jobs', json={'apiKey': '37277f0e22d9948e62e5708337e51782', 'url': 'https://www.diy.com/'})


payload = {'api_key': '37277f0e22d9948e62e5708337e51782', 'url': 'https://www.diy.com/'}
r = requests.get('http://api.scraperapi.com', params=payload)
json_response = json.loads(r.text)
body = json_response['response']['body']
soup = BeautifulSoup(body, 'html.parser')
product_elements = soup.find_all('li', {'class': '_43ba2ed1'})
links = []
for product_element in product_elements:
    link_element = product_element.find("a")
    if link_element:
        links.append(link_element['href'])

department_links = [link for link in links if '/department' in link]
print(department_links)


# r = requests.post(url='https://async.scraperapi.com/jobs', json={'apiKey': '37277f0e22d9948e62e5708337e51782', 'url': 'https://www.diy.com'+department_links[0]})


i = 1
urls = []
# To find pages do totalResults/pageSize and round up
for j in range(0, len(department_links)):
    url_single = 'https://www.diy.com' + department_links[j] + '?page=' + str(i)
    urls.append(url_single)

r = requests.post(url='https://async.scraperapi.com/batchjobs',
                  json={'apiKey': '37277f0e22d9948e62e5708337e51782', 'urls': urls})

r_text = r.text
print(r_text)
json_response = json.loads(r.text)
statusUrl = None
statusUrls = []
status = None

for element in json_response:
    if isinstance(element, dict) and 'statusUrl' in element:
        statusUrl = element['statusUrl']
        statusUrls.append(statusUrl)

x = 0
finished_list = []
while len(finished_list) < len(statusUrls):
    status_list = []
    for j in range(0, len(statusUrls)):
        r = requests.get(statusUrls[j])
        json_response = json.loads(r.text)
        status = json_response['status']
        status_list.append(status)
    for j in range(0, len(status_list)):
        if status_list[j] == "running":
            break
        else:
            finished_list.append(status_list[j])


products = []

for j in range(0, len(statusUrls)):
    r = requests.get(statusUrls[j])
    r_text = r.text
    try:
        json_response = json.loads(r_text)
        body = json_response['response']['body']
        soup = BeautifulSoup(body, 'html.parser')
        product_titles = soup.find_all('p', {'data-test-id': 'productTitle'})
        product_prices = soup.find_all('div', {'data-test-id': 'product-primary-price'})
        category_title_html = soup.find('h1', {'data-test-id': 'plp-title'})
        product_links = soup.find_all('a', {'data-test-id': 'product-panel-main-section'})

        if category_title_html is not None:
            category_title = category_title_html.text
        else:
            category_title = "N/A"

        product_list = []
        price_list = []
        link_list = []

        for product_title in product_titles:
            title_element = product_title.text
            if title_element:
                product_list.append(title_element)

        for product_price in product_prices:
            text = ""
            text += product_price.get_text(strip=True)
            if text.strip() == "":
                text = "N/A"
            else:
                price_list.append(text)

        for product_link in product_links:
            link_list.append('https://www.diy.com' + product_link['href'])

        for product, price, link in zip(product_list, price_list, link_list):
            products.append({'product': product, 'price': price, 'category': category_title, 'link': link})

    except KeyError:
        print("Key Error occurred")
        print(statusUrls[j])
    except:
        print("Error occurred")

# r = requests.post(url='https://async.scraperapi.com/batchjobs',
#                   json={'apiKey': '37277f0e22d9948e62e5708337e51782',
#                         'urls': urls})

df = pd.DataFrame(products)
df.to_csv('products.csv', index=False)
