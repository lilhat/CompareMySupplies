import requests
from bs4 import BeautifulSoup
import re
import pandas as pd
import concurrent.futures


# Loop through each response and scrape the first page of products into product dictionary
NUM_RETRIES = 5
NUM_THREADS = 50
products = []
urls = []


def get_categories():
    response = requests.get(
        url='https://app.scrapingbee.com/api/v1/',
        params={
            'api_key': 'N25JJBPDKWXCENSFCR66CALWK0CE0QHEUE2H82Y2S1RYM4RQGHC1LTMTCX7DIONSJFYSP2ONBX2L0SRI',
            'url': 'https://www.tippers.com/',
            'render_js': 'false',
        },

    )
    body = response.content
    soup = BeautifulSoup(body, 'html.parser')
    product_elements = soup.find_all('li', {'class': 'sub-sub-nav__item'})
    links = []
    for product_element in product_elements:
        li_elements = product_element.find_all('li')
        for li_element in li_elements:
            a_element = li_element.find('a')
            links.append(a_element['href'])

    department_links = [link for link in links if '/' in link]
    print(department_links)

    # Variable i is the page number
    i = 1

    for j in range(0, len(department_links)):
        url_single = 'https://www.tippers.com' + department_links[j]
        urls.append(url_single)


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
        product_cards = soup.find_all('li', {'class': 'products__item no-options'})
        category_title_html = soup.find('span', {'class': 'span8 offset3'})
        product_images = soup.find_all('div', {'class': 'image products__image'})
        if category_title_html is not None:
            category_title = re.sub('^[\s]+|[\s]+$', '', category_title_html.text)
        else:
            category_title = "N/A"

        product_list = []
        price_list = []
        link_list = []
        image_list = []
        desc_list = []
        for product_card in product_cards:
            link = product_card.find('a')
            full_url = "https://www.tippers.com" + link['href']
            new_url = full_url.split("[]")[0]
            link_list.append(new_url)
            desc_list.append(single_request(new_url))
            title = product_card.find('div', {'class', 'title products__title'})
            title_element = re.sub('^[\s]+|[\s]+$', '', title.text)
            price = product_card.find('span', {'class', 'local-price notranslate'}).text
            price = price.replace(" Incl. VAT", "").strip()
            price_list.append(price)
            image = product_card.find('img')
            image_url = image['data-src']
            image_list.append(image_url)
            if title_element:
                product_list.append(title_element)

        for product, price, link, image, description in zip(product_list, price_list, link_list, image_list, desc_list):
            print({'product': product, 'price': price, 'category': category_title, 'link': link, 'image': image, 'description': description})
            products.append({'product': product, 'price': price, 'category': category_title, 'link': link, 'image': image, 'description': description})

    except KeyError:
        print("Key Error occurred")
    except:
        print("Error occurred")


def scrape_desc(body):
    try:
        soup = BeautifulSoup(body, 'html.parser')
        product_desc = soup.find('div', {'class': 'accordion-inner'})

        if product_desc:
            description = re.sub('^[\s]+|[\s]+$', ' ', product_desc.text)
            description = re.sub('[\n\t]+', ' ', description)
            description = description.replace("\xa0", ' ')
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
df.to_csv('tippersProducts.csv', index=False)
