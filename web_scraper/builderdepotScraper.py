import requests
from bs4 import BeautifulSoup
import re
import json
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
                'url': 'https://www.builderdepot.co.uk/',
                'extract_rules': '{"all_links":{"selector":"a","type":"list","output":"@href"}}',
                'render_js': 'false',
            },

        )
        if response.status_code == 200:
            body = response.text
            content_json = json.loads(body)
            # print(body)
            # Access the list from the JSON object
            links = content_json["all_links"]
            links = [item for item in links if item is not None]
            links = links[6:1724]
            department_links = [item for item in links if item != '#']
            print(department_links)

            for j in range(0, len(department_links)):
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
                'render_js': 'false',
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
                'render_js': 'false',
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
        product_titles = soup.find_all('strong', {'class': 'product name product-item-name'})
        product_prices = soup.find_all('div', {'class': 'price-box price-final_price'})
        category_title_html = soup.find('h1', {'class': 'page-title'})
        product_images = soup.find_all('img', {'class': 'product-image-photo responsively-lazy'})

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
            title = re.sub('^[\s]+|[\s]+$', '', product_titles[i].text)
            title_raw = product_titles[i].find('a')
            link = title_raw['href']
            link_list.append(link)
            desc_list.append(single_request(link))
            if title:
                product_list.append(title)

        for i in range(0, len(product_prices)):
            price = re.sub('^[\s]+|[\s]+$', '', product_prices[i].find('span', {'class': 'price'}).text)
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
        product_desc = soup.find('div', {'class': 'data item content first active'})
        if product_desc:
            description = re.sub('^[\s]+|[\s]+$', '', product_desc.text)
            description = description.replace('\n', ' ')
        else:
            description = "N/A"

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
df.to_csv('builderdepotProducts.csv', index=False)
