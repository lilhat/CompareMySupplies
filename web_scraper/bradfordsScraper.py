import requests
from bs4 import BeautifulSoup
import re
import json
import pandas as pd
import concurrent.futures

# Initialize variables
NUM_RETRIES = 5
NUM_THREADS = 50
products = []
urls = []

# Scrape categories
def get_categories():
    # Loop for number of retries
    for _ in range(NUM_RETRIES):
        # Make GET request to ScrapingBee API
        response = requests.get(
            url='https://app.scrapingbee.com/api/v1/',
            params={
                'api_key': 'FKCMAMEUOONCRQ0WE8DQ58KA2SRPC1ZHN6V7JRPI2PMEK2380VBCQQPKALY3NQC83KMG5AQI2BGHPSRZ',
                'url': 'https://www.bradfords.co.uk/',
                'render_js': 'false',
            },

        )
        # Check response success
        if response.status_code == 200:
            # Parse the content with BeautifulSoup
            body = response.content
            soup = BeautifulSoup(body, 'html.parser')
            # Target specific div element
            product_elements = soup.find('div', {'class': 'section-item-content'})
            links = []
            # Target script tag within div
            script = product_elements.find('script').text
            # Search for JSON object within script using regex
            json_string = re.search(r'{.*}]}', script).group()
            # Parse JSON string into dictionary
            content_json = json.loads(json_string)
            # Access the list from the JSON object
            for outer_list in content_json:
                link_list = content_json[outer_list]
                for item in link_list:
                    # Extract the bottom level category urls
                    if not item['children']:
                        url = item['url']
                        if '/shop-by-brand' not in url:
                            links.append(url)
            # Append to global urls list
            for i in range(0, len(links)):
                urls.append(links[i])

            print(urls)
            # Break out of retry loop if successful
            break
        else:
            print("Error: " + str(response.status_code))


# Send request for HTML content of provided URL
def send_request(url):
    # Loop for number of retries
    for _ in range(NUM_RETRIES):
        # Make GET request to ScrapingBee API
        response = requests.get(
            url='https://app.scrapingbee.com/api/v1/',
            params={
                'api_key': 'FKCMAMEUOONCRQ0WE8DQ58KA2SRPC1ZHN6V7JRPI2PMEK2380VBCQQPKALY3NQC83KMG5AQI2BGHPSRZ',
                'url': url,
                'render_js': 'false',
            },

        )
        # Check response success
        if response.status_code == 200:
            # Call function to extract data using response content
            scrape_url(response.content)
            break
        else:
            print("Error: " + str(response.status_code))
            print("Url: " + url)


# Send request for HTML content of provided URL
def single_request(url):
    # Loop for number of retries
    for _ in range(NUM_RETRIES):
        # Make GET request to ScrapingBee API
        response = requests.get(
            url='https://app.scrapingbee.com/api/v1/',
            params={
                'api_key': 'FKCMAMEUOONCRQ0WE8DQ58KA2SRPC1ZHN6V7JRPI2PMEK2380VBCQQPKALY3NQC83KMG5AQI2BGHPSRZ',
                'url': url,
                'render_js': 'false',
            },

        )
        # Check response success
        if response.status_code == 200:
            # Call function to extract description and image using response content
            description = scrape_desc(response.content)
            image = scrape_image(response.content)
            return description, image
        else:
            print("Error: " + str(response.status_code))
            print("Url: " + url)


# Extract relevant data from response content
def scrape_url(body):
    try:
        # Parse content with BeautifulSoup
        soup = BeautifulSoup(body, 'html.parser')
        # Find each product component in the content
        product_titles = soup.find_all('a', {'class': 'product-item-link'})
        product_prices = soup.find_all('span', {'data-label': 'Inc VAT'})
        category_title_html = soup.find('h1', {'id': 'page-title-heading'})
        product_links = soup.find_all('a', {'class': 'product photo product-item-photo'})
        product_images = soup.find_all('div', {'class': 'primary-image'})
        # Check if category title exists
        if category_title_html is not None:
            category_title = re.sub('^[\s]+|[\s]+$', '', category_title_html.text)
        else:
            category_title = "N/A"

        product_list = []
        price_list = []
        link_list = []
        image_list = []
        desc_list = []

        # Extract text of each product title and append into list
        for product_title in product_titles:
            title_element = product_title.text
            if title_element:
                product_list.append(title_element)

        # Extract text of each product price and append into list
        for product_price in product_prices:
            text = ""
            text += product_price.get_text(strip=True)
            if text.strip() == "":
                text = "N/A"
            else:
                price_list.append(text)

        # Extract links of each product and append into list
        for product_link in product_links:
            full_url = product_link['href']
            link_list.append(full_url)
            # Call function to scrape deeper product page level
            description, image = single_request(full_url)
            # Append returned description and image into lists
            desc_list.append(description)
            image_list.append(image)


        # Zip all lists together to create a list of dictionaries containing the information for a single product
        # Print each dictionary and add it to the products list
        for product, price, link, image, description in zip(product_list, price_list, link_list, image_list, desc_list):
            print({'product': product, 'price': price, 'category': category_title, 'link': link, 'image': image, 'description': description})
            products.append({'product': product, 'price': price, 'category': category_title, 'link': link, 'image': image, 'description': description})

    except KeyError:
        print("Key Error occurred")
    except:
        print("Error occurred")


# Extract description product level response content
def scrape_desc(body):
    try:
        # Parse content with BeautifulSoup
        soup = BeautifulSoup(body, 'html.parser')
        # Target product description in the content
        product_desc = soup.find('div', {'class': 'product attribute overview'})

        # Extract description text if exists
        if product_desc:
            description = re.sub('^[\s]+|[\s]+$', '', product_desc.text)
            description = re.sub('[\n\t]+', '', description)
        else:
            description = "N/A"

        # Return description
        return description

    except KeyError:
        print("Key Error occurred")
    except:
        print("Error occurred")


# Extract image from product level response content
def scrape_image(body):
    try:
        # Parse content with BeautifulSoup
        soup = BeautifulSoup(body, 'html.parser')
        # Target product image in the content
        product_images = soup.find_all('div', {'class': 'pdp__upper'})

        # Extract image link if exists
        if product_images:
            for product_image in product_images:
                image_tag = product_image.find('img', {'class': 'gallery-placeholder__image'})
                image = image_tag['src']
        else:
            image = "N/A"

        # Return image
        return image

    except KeyError:
        print("Key Error occurred")
    except:
        print("Error occurred")




# Call initial function to scrape categories
get_categories()

# Use categories inside urls list to concurrently send up to 50 requests at a time
with concurrent.futures.ThreadPoolExecutor(max_workers=NUM_THREADS) as executor:
    executor.map(send_request, urls)

# Write products into csv file
df = pd.DataFrame(products)
df.to_csv('bradfordsProducts.csv', index=False)
