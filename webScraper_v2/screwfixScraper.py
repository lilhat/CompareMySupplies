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

            # Variable i is the page number
            i = 1

            for j in range(0, len(department_links)):
                full_link = "https://www.screwfix.com" + department_links[j]
                urls.append(full_link)
                print(full_link)
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
    # try:
        soup = BeautifulSoup(body, 'html.parser')
        product_titles = soup.find_all('div', {'data-qaid': 'product-heading'})
        product_cards = soup.find_all('div', {'data-qaid': 'product-card'})
        category_title_html = soup.find('h1', {'data-qaid': 'h1-seo-heading'})

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
            title_raw = product_titles[i].find('a', {'data-qaid': 'product_description'})
            link = "https://www.screwfix.com" + title_raw['href']
            link_list.append(link)
            desc_list.append(single_request(link))
            title_element = re.sub('^[\s]+|[\s]+$', '', title_raw.text)
            if title_element:
                product_list.append(title_element)

        for i in range(0, len(product_cards)):
            if product_cards[i] is not None:
                price = product_cards[i].find('span', {'data-qaid': 'price'}).text
                price = price.replace("Inc Vat", "").strip()
                price_list.append(price)
                img = product_cards[i].find('img')
                image_link = img['src']
                image_list.append(image_link)

        for product, price, link, image, description in zip(product_list, price_list, link_list, image_list, desc_list):
            print({'product': product, 'price': price, 'category': category_title, 'link': link, 'image': image,
                   'description': description})
            products.append({'product': product, 'price': price, 'category': category_title, 'link': link, 'image': image,
                             'description': description})

    # except KeyError:
    #     print("Key Error occurred")
    # except:
    #     print("Error occurred")


def scrape_desc(body):
    try:
        soup = BeautifulSoup(body, 'html.parser')
        product_desc = soup.find('p', {'data-qaid': 'pdp-product-overview'})

        if product_desc:
            description = re.sub('^[\s]+|[\s]+$', '', product_desc.text)
        else:
            description = "N/A"

        product_desc2 = soup.find('ul', {'data-qaid': 'pdp-product-bullets'})

        if product_desc2:
            description += product_desc2.text
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
