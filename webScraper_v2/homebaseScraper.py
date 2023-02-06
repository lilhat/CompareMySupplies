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
    for _ in range(NUM_RETRIES):
        response = requests.get(
            url='https://app.scrapingbee.com/api/v1/',
            params={
                'api_key': 'N25JJBPDKWXCENSFCR66CALWK0CE0QHEUE2H82Y2S1RYM4RQGHC1LTMTCX7DIONSJFYSP2ONBX2L0SRI',
                'url': 'https://www.homebase.co.uk/',
            },

        )
        if response.status_code == 200:
            body = response.content
            soup = BeautifulSoup(body, 'html.parser')
            product_elements = soup.find_all('a', {'class': 'responsiveFlyoutMenu_levelThreeLink'})
            links = []
            for product_element in product_elements:
                links.append(product_element['href'])

            department_links = [link for link in links if 'https' not in link]
            print(department_links)

            # Variable i is the page number
            i = 1

            for j in range(0, len(department_links)):
                url_single = 'https://www.homebase.co.uk' + department_links[j]
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
            scrape_url(response.content)
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


def scrape_url(body):
    try:
        soup = BeautifulSoup(body, 'html.parser')
        product_titles = soup.find_all('div', {'class': 'productBlock_title'})
        product_prices = soup.find_all('span', {'class': 'productBlock_priceValue'})
        category_title_html = soup.find('h1', {'class': 'responsiveProductListHeader_title'})
        product_links = soup.find_all('div', {'class': 'productBlock_imageLinkWrapper'})
        product_images = soup.find_all('img', {'data-track': 'product-image'})
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
            title_element = product_title.find("h3")
            if title_element:
                stripped_title = re.sub('^[\s]+|[\s]+$', '', title_element.text)
                product_list.append(stripped_title)

        for product_price in product_prices:
            text = ""
            text += product_price.get_text(strip=True)
            if text.strip() == "":
                text = "N/A"
            else:
                price_list.append(text)

        for product_link in product_links:
            link_element = product_link.find("a")
            if link_element:
                full_url = 'https://www.homebase.co.uk' + link_element['href']
                link_list.append(full_url)
                desc_list.append(single_request(full_url))

        for product_image in product_images:
            image_link = product_image['src']
            image_list.append(image_link)

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
        product_desc = soup.find('div', {'id': 'product-description-content-2'})

        if product_desc:
            description = re.sub('^[\s]+|[\s]+$', '', product_desc.text)
            description = re.sub('[\n\t\r]+', ' ', description)
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
df.to_csv('homebaseProducts.csv', index=False)
