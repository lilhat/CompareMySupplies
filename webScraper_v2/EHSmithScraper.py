import re
import requests
from bs4 import BeautifulSoup
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
                'url': 'https://ehsmith.co.uk/',
                'render_js': 'false',
            },

        )
        if response.status_code == 200:
            body = response.content
            soup = BeautifulSoup(body, 'html.parser')
            product_elements = soup.find_all('ul', {'class': 'eh-list'})
            links = []
            for product_element in product_elements:
                li_elements = product_element.find_all("li")
                for li_element in li_elements:
                    a_element = li_element.find("a")
                    if a_element:
                        links.append(a_element['href'])

            department_links = [link for link in links if '/product-category' in link]
            print(department_links)

            # Variable i is the page number
            i = 1

            for j in range(0, len(department_links)):
                url_single = department_links[j]
                urls.append(url_single)
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
            scrape_url(response.content, url)
            break
        else:
            print("Error: " + str(response.status_code))
            print("Url: " + url)


get_categories()


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


def scrape_url(body, url):
    try:
        soup = BeautifulSoup(body, 'html.parser')
        product_cards = soup.find_all('a', {'class': 'woocommerce-LoopProduct-link woocommerce-loop-product__link'})
        category_title = soup.find('h1')

        product_list = []
        price_list = []
        link_list = []
        image_list = []
        desc_list = []

        for product_card in product_cards:
            title = product_card.find('h2').text
            link = product_card['href']
            product_images = product_card.find('div')
            product_image = product_images.find('img')
            image = product_image['src']
            try:
                product_prices = product_card.find('p')
                product_price = product_prices.find('span', {'class': 'vat_price'}).text
                price = product_price.replace("inc VAT", "").strip()
            except:
                continue
            product_list.append(title)
            price_list.append(price)
            link_list.append(link)
            image_list.append(image)
            desc_list.append(single_request(link))

        if category_title is not None:
            category_title = category_title.text
        else:
            category_title = "N/A"

        for product, price, link, image, description in zip(product_list, price_list, link_list, image_list, desc_list):
            print({'product': product, 'price': price, 'category': category_title, 'link': link, 'image': image,
                   'description': description})
            products.append({'product': product, 'price': price, 'category': category_title, 'link': link, 'image': image,
                             'description': description})

    except KeyError:
        print("Key Error occurred")
    except Exception:
        print("Error occurred " + url)


def scrape_desc(body):
    try:
        soup = BeautifulSoup(body, 'html.parser')
        product_descriptions = soup.find('div', {'class': 'product-details'})
        if product_descriptions:
            product_desc = product_descriptions.find('p')
            description = re.sub('^[\s]+|[\s]+$', '', product_desc.text)
            description = description.replace('Product Details', '')
            description = re.sub('[\n\t]+', '', description)
        else:
            description = "N/A"
        return description

    except KeyError:
        print("Key Error occurred")
    except:
        print("Error occurred")


with concurrent.futures.ThreadPoolExecutor(max_workers=NUM_THREADS) as executor:
    executor.map(send_request, urls)


# Write products into csv file
df = pd.DataFrame(products)
df.to_csv('EHSmithProducts.csv', index=False)
