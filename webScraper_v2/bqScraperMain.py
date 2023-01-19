import requests
from bs4 import BeautifulSoup
import pandas as pd
import concurrent.futures


# Loop through each response and scrape the first page of products into product dictionary
NUM_RETRIES = 5
NUM_THREADS = 5
products = []
urls = []


def get_categories():
    response = requests.get(
        url='https://app.scrapingbee.com/api/v1/',
        params={
            'api_key': 'N25JJBPDKWXCENSFCR66CALWK0CE0QHEUE2H82Y2S1RYM4RQGHC1LTMTCX7DIONSJFYSP2ONBX2L0SRI',
            'url': 'https://www.diy.com/',
            'render_js': 'false',
        },

    )
    body = response.content
    soup = BeautifulSoup(body, 'html.parser')
    product_elements = soup.find_all('li', {'class': '_43ba2ed1'})
    links = []
    for product_element in product_elements:
        link_element = product_element.find("a")
        if link_element:
            links.append(link_element['href'])

    department_links = [link for link in links if '/department' in link]
    print(department_links)

    # Variable i is the page number
    i = 1

    # To find pages do totalResults/pageSize and round up
    # Create a batch job with all the categories available
    for j in range(0, len(department_links)):
        url_single = 'https://www.diy.com' + department_links[j]
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


get_categories()


def scrape_url(body):
    try:
        soup = BeautifulSoup(body, 'html.parser')
        product_titles = soup.find_all('p', {'data-test-id': 'productTitle'})
        product_prices = soup.find_all('div', {'data-test-id': 'product-primary-price'})
        category_title_html = soup.find('h1', {'data-test-id': 'plp-title'})
        product_links = soup.find_all('a', {'data-test-id': 'product-panel-main-section'})
        product_images = soup.find_all('img', {'data-test-id': 'image'})
        if category_title_html is not None:
            category_title = category_title_html.text
        else:
            category_title = "N/A"

        product_list = []
        price_list = []
        link_list = []
        image_list = []
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

        for product_image in product_images:
            image_link = product_image['srcset']
            image_list.append(image_link[:-3])

        for product, price, link, image in zip(product_list, price_list, link_list, image_list):
            print({'product': product, 'price': price, 'category': category_title, 'link': link, 'image': image})
            products.append({'product': product, 'price': price, 'category': category_title, 'link': link, 'image': image})

    except KeyError:
        print("Key Error occurred")
        # print(urls[j])
    except:
        print("Error occurred")


with concurrent.futures.ThreadPoolExecutor(max_workers=NUM_THREADS) as executor:
    executor.map(send_request, urls)


# Write products into csv file
df = pd.DataFrame(products)
df.to_csv('bqProducts.csv', index=False)
