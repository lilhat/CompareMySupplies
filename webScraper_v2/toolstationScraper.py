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


def get_categories():
    for _ in range(NUM_RETRIES):
        response = requests.get(
            url='https://app.scrapingbee.com/api/v1/',
            params={
                'api_key': 'N25JJBPDKWXCENSFCR66CALWK0CE0QHEUE2H82Y2S1RYM4RQGHC1LTMTCX7DIONSJFYSP2ONBX2L0SRI',
                'url': 'https://www.toolstation.com/',
            },

        )
        if response.status_code == 200:
            body = response.content
            soup = BeautifulSoup(body, 'html.parser')
            product_elements = soup.find_all('ul', {'class': 'megamenu__sub-menu'})
            links = []
            for product_element in product_elements:
                a_element = product_element.find('a')
                if a_element is not None:
                    links.append(a_element['href'])

            department_links = [link for link in links if '/' in link]

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
            description, price = scrape_desc(response.content)
            return description, price
        else:
            print("Error: " + str(response.status_code))
            print("Url: " + url)


def scrape_url(body):
    try:
        soup = BeautifulSoup(body, 'html.parser')
        product_titles = soup.find_all('div', {'class': 'flex flex-col gap-0.5'})
        category_title_html = soup.find('h1', {'class': 'text-blue text-size-9 font-bold mb-4'})
        product_images = soup.find_all('div', {'class': 'relative'})
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
            title_raw = product_titles[i].find('a')
            link = title_raw['href']
            link_list.append(link)
            description, price = single_request(link)
            desc_list.append(description)
            price_list.append(price)
            title_element = re.sub('^[\s]+|[\s]+$', '', title_raw.text)
            if title_element:
                product_list.append(title_element)

        for i in range(0, len(product_images)):
            if product_images[i] is not None:
                img_tags = product_images[i].find_all('img')
                for img in img_tags:
                    if img.parent.name != "div":
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
        product_desc = soup.find_all('div', {'class': 'product-details'})
        product_prices = soup.find_all('span', {'class': 'main-price'})
        if product_desc:
            p_element = product_desc[0].find('p')
            description = re.sub('^[\s]+|[\s]+$', '', p_element.text)
            description = re.sub('[\n\t\r]+', '', description)
        else:
            description = "N/A"

        if product_prices:
            price = product_prices[0].text
        else:
            price = 'N/A'

        return description, price

    except KeyError:
        print("Key Error occurred")
    except:
        print("Error occurred")


get_categories()

with concurrent.futures.ThreadPoolExecutor(max_workers=NUM_THREADS) as executor:
    executor.map(send_request, urls)

# Write products into csv file
df = pd.DataFrame(products)
df.to_csv('toolstationProducts.csv', index=False)
