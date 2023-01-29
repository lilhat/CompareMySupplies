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
    response = requests.get(
        url='https://app.scrapingbee.com/api/v1/',
        params={
            'api_key': 'N25JJBPDKWXCENSFCR66CALWK0CE0QHEUE2H82Y2S1RYM4RQGHC1LTMTCX7DIONSJFYSP2ONBX2L0SRI',
            'url': 'https://www.bradfords.co.uk/',
            'render_js': 'false',
        },

    )
    body = response.content
    soup = BeautifulSoup(body, 'html.parser')
    product_elements = soup.find('div', {'class': 'section-item-content'})
    links = []
    script = product_elements.find('script').text

    # start = script.index("= {")
    # end = script.rindex("}]}")
    json_string = re.search(r'{.*}]}', script).group()
    content_json = json.loads(json_string)
    # Access the list from the JSON object
    for outer_list in content_json:
        link_list = content_json[outer_list]
        for item in link_list:
            if not item['children']:
                url = item['url']
                if '/shop-by-brand' not in url:
                    links.append(url)

    for i in range(0, len(links)):
        urls.append(links[i])

    print(urls)


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
            image = scrape_image(response.content)
            return description, image
        else:
            print("Error: " + str(response.status_code))
            print("Url: " + url)


def scrape_url(body):
    try:
        soup = BeautifulSoup(body, 'html.parser')
        product_titles = soup.find_all('a', {'class': 'product-item-link'})
        product_prices = soup.find_all('span', {'data-label': 'Inc VAT'})
        category_title_html = soup.find('h1', {'id': 'page-title-heading'})
        product_links = soup.find_all('a', {'class': 'product photo product-item-photo'})
        product_images = soup.find_all('div', {'class': 'primary-image'})
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
            description, image = single_request(full_url)
            desc_list.append(description)
            image_list.append(image)

        # for product_image in product_images:
        #     image_tag = product_image.find('img')
        #     image_link = image_tag['src']
        #     if image_link.startswith("data:"):
        #         image_list.append('N/A')
        #     else:
        #         image_list.append(image_link)

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
        product_desc = soup.find('div', {'class': 'product attribute overview'})

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


def scrape_image(body):
    try:
        soup = BeautifulSoup(body, 'html.parser')
        product_images = soup.find_all('div', {'class': 'pdp__upper'})
        if product_images:
            for product_image in product_images:
                image_tag = product_image.find('img', {'class': 'gallery-placeholder__image'})
                image = image_tag['src']
        else:
            image = "N/A"

        return image

    except KeyError:
        print("Key Error occurred")
    except:
        print("Error occurred")






get_categories()

with concurrent.futures.ThreadPoolExecutor(max_workers=NUM_THREADS) as executor:
    executor.map(send_request, urls)

# desc, img = single_request('https://www.bradfords.co.uk/hta929')
# print(desc)
# print(img)

# Write products into csv file
df = pd.DataFrame(products)
df.to_csv('bradfordsProducts.csv', index=False)
