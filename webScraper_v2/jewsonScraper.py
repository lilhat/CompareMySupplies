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
            'url': 'https://jewson.co.uk/',
            'render_js': 'false',
        },

    )
    body = response.content
    soup = BeautifulSoup(body, 'html.parser')
    product_elements = soup.find_all('a', {'class': 'menu__link menu__sub-link'})
    links = []
    for product_element in product_elements:
        links.append(product_element['href'])

    department_links = [link for link in links if '/' in link]
    print(department_links)

    # Variable i is the page number
    i = 1

    for j in range(0, len(department_links)):
        url_single = 'https://jewson.co.uk' + department_links[j]
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
        product_titles = soup.find_all('p', {'class': 'product__name h3 mb-1 mb-md-0'})
        product_prices = soup.find_all('span', {'class': 'price__value'})
        category_title_html = soup.find('h1', {'class': 'plp__category-name'})
        product_links = soup.find_all('a', {'class': 'product__thumb flex-grow-1 justify-content-between justify-content-md-start mb-1 data-layer-click'})
        product_images = soup.find_all('picture', {'class': 'product__image mb-0 mb-md-2'})
        if category_title_html is not None:
            category_title = re.sub('^[\s]+|[\s]+$', '', category_title_html.text)
        else:
            category_title = "N/A"

        product_list = []
        price_list = []
        link_list = []
        image_list = []
        desc_list = []
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
            full_url = product_link['href']
            link_list.append(full_url)
            desc_list.append(single_request(full_url))

        for product_image in product_images:
            image_link = product_image.find('img')
            image_list.append(image_link['src'])

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
        product_desc = soup.find('div', {'class': 'd-none d-lg-block mb-4 product__description'})

        if product_desc:
            description = re.sub('^[\s]+|[\s]+$', '', product_desc.text)
            description = re.sub('[\n\t]+', '', description)
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
df.to_csv('jewsonProducts.csv', index=False)
