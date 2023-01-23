import requests
from bs4 import BeautifulSoup
import re
import json
from seleniumwire import webdriver
from selenium.webdriver import Proxy
from selenium.webdriver.common.by import By
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.proxy import ProxyType
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.wait import WebDriverWait
import selenium
import pandas as pd
import concurrent.futures


# Loop through each response and scrape the first page of products into product dictionary


NUM_RETRIES = 5
NUM_THREADS = 50
products = []
urls = []
cat_urls = []


def get_categories():
    for _ in range(NUM_RETRIES):
        response = requests.get(
            url='https://app.scrapingbee.com/api/v1/',
            params={
                'api_key': 'N25JJBPDKWXCENSFCR66CALWK0CE0QHEUE2H82Y2S1RYM4RQGHC1LTMTCX7DIONSJFYSP2ONBX2L0SRI',
                'url': 'https://www.screwfix.com/c/tools/cat830034',
                'extract_rules': '{"all_links":{"selector":"a","type":"list","output":"@href"}}',
            },

        )
        if response.status_code == 200:
            body = response.text
            content_json = json.loads(body)
            print(body)
            # Access the list from the JSON object
            links = content_json["all_links"]
            links = [item for item in links if item is not None]
            department_links = [link for link in links if '/c/' in link]
            department_links = [department_link for department_link in department_links if 'https' in department_link]
            print(department_links)

            # Variable i is the page number
            i = 1

            for j in range(0, 7):
                urls.append(department_links[j])
                print(department_links[j])
            break
        else:
            print("Error: " + str(response.status_code))


def send_request(url):
    for _ in range(NUM_RETRIES):
        response = requests.get(
            url='https://app.scrapingbee.com/api/v1/',
            params={
                'api_key': 'N25JJBPDKWXCENSFCR66CALWK0CE0QHEUE2H82Y2S1RYM4RQGHC1LTMTCX7DIONSJFYSP2ONBX2L0SRI',
                'url': url,
            },

        )
        if response.status_code == 200:
            scrape_url(response.content)
            break
        else:
            print("Error: " + str(response.status_code))
            print("Url: " + url)


def single_request(url):
    for _ in range(NUM_RETRIES):
        response = requests.get(
            url='https://app.scrapingbee.com/api/v1/',
            params={
                'api_key': 'N25JJBPDKWXCENSFCR66CALWK0CE0QHEUE2H82Y2S1RYM4RQGHC1LTMTCX7DIONSJFYSP2ONBX2L0SRI',
                'url': url,
            },

        )
        if response.status_code == 200:
            description = scrape_desc(response.content)
            return description
        else:
            print("Error: " + str(response.status_code))
            print("Url: " + url)


def scrape_url(body):
    try:
        soup = BeautifulSoup(body, 'html.parser')
        product_titles = soup.find_all('div', {'class': 'lii__r'})
        product_prices = soup.find_all('div', {'class': 'lii_price'})
        category_title_html = soup.find('h1', {'class': 'h1wrapper__h1-special'})
        product_images = soup.find_all('img', {'id': 'product_image'})

        if category_title_html is not None:
            category_title = re.sub('^[\s]+|[\s]+$', '', category_title_html.text)
        else:
            category_title = "N/A"

        product_list = []
        price_list = []
        link_list = []
        image_list = []
        desc_list = []
        for i in range(0, len(product_titles)):
            title_raw = product_titles[i].find('a', {'class': 'fh_product_click'})
            link = title_raw['href']
            link_list.append(link)
            desc_list.append(single_request(link))
            title_element = re.sub('^[\s]+|[\s]+$', '', title_raw.text)
            if title_element:
                product_list.append(title_element)

        for i in range(0, len(product_prices)):
            price = product_prices[i].find('h4').text
            price_list.append(price)

        for i in range(0, len(product_images)):
            if product_images[i] is not None:
                img = product_images[i]
                image_link = img['src']
                image_list.append(image_link)

        for product, price, link, image, description in zip(product_list, price_list, link_list, image_list, desc_list):
            print({'product': product, 'price': price, 'category': category_title, 'link': link, 'image': image,
                   'description': description})
            products.append({'product': product, 'price': price, 'category': category_title, 'link': link, 'image': image,
                             'description': description})

    except KeyError:
        print("Key Error occurred")
    except:
        print("Error occurred")

def scrape_desc(body):
    try:
        soup = BeautifulSoup(body, 'html.parser')
        product_desc = soup.find('p', {'id': 'product_long_description_container'})

        if product_desc:
            description = re.sub('^[\s]+|[\s]+$', '', product_desc.text)
        else:
            description = "N/A"

        product_desc2 = soup.find('ul', {'class': 'pr__spec-list'})

        if product_desc2:
            span_tags = product_desc2.find_all('li')
            for tag in span_tags:
                description += tag.text + ' '
        else:
            return description

        return description

    except KeyError:
        print("Key Error occurred")
    except:
        print("Error occurred")


get_categories()
with concurrent.futures.ThreadPoolExecutor(max_workers=NUM_THREADS) as executor:
    executor.map(send_request, urls)


# Write products into csv file
df = pd.DataFrame(products)
df.to_csv('screwfixProducts.csv', index=False)
