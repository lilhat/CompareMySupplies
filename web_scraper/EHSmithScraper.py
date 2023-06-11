import re
import requests
from bs4 import BeautifulSoup
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
                'url': 'https://ehsmith.co.uk/',
                'render_js': 'false',
            },

        )
        # Check response success
        if response.status_code == 200:
            # Parse the content with BeautifulSoup
            body = response.content
            soup = BeautifulSoup(body, 'html.parser')
            # Target specific ul elements
            product_elements = soup.find_all('ul', {'class': 'eh-list'})
            links = []
            # Extract href of hyperlink elements within each li
            for product_element in product_elements:
                li_elements = product_element.find_all("li")
                for li_element in li_elements:
                    a_element = li_element.find("a")
                    if a_element:
                        links.append(a_element['href'])
            # Filter to only contain product category links
            department_links = [link for link in links if '/product-category' in link]
            print(department_links)
            # Append to global urls list
            for j in range(0, len(department_links)):
                url_single = department_links[j]
                urls.append(url_single)
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
            scrape_url(response.content, url)
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
            # Call function to extract description using response content
            description = scrape_desc(response.content)
            return description
        else:
            print("Error: " + str(response.status_code))
            print("Url: " + url)


# Extract relevant data from response content
def scrape_url(body):
    try:
        # Parse content with BeautifulSoup
        soup = BeautifulSoup(body, 'html.parser')
        # Find all product cards in the content
        product_cards = soup.find_all('a', {'class': 'woocommerce-LoopProduct-link woocommerce-loop-product__link'})
        category_title = soup.find('h1')

        product_list = []
        price_list = []
        link_list = []
        image_list = []
        desc_list = []

        # Find each product component in the product card
        for product_card in product_cards:
            # Extract text of product title
            title = product_card.find('h2').text
            # Extract product link
            link = product_card['href']
            product_images = product_card.find('div')
            product_image = product_images.find('img')
            # Extract image link
            image = product_image['src']
            try:
                # Extract price
                product_prices = product_card.find('p')
                product_price = product_prices.find('span', {'class': 'vat_price'}).text
                price = product_price.replace("inc VAT", "").strip()
            except:
                continue
            # Append all components to associated lists
            product_list.append(title)
            price_list.append(price)
            link_list.append(link)
            image_list.append(image)
            # Call function to scrape deeper product page level and append result to list
            desc_list.append(single_request(link))

        # Check if category title exists
        if category_title is not None:
            category_title = category_title.text
        else:
            category_title = "N/A"

        # Zip all lists together to create a list of dictionaries containing the information for a single product
        # Print each dictionary and add it to the products list
        for product, price, link, image, description in zip(product_list, price_list, link_list, image_list, desc_list):
            print({'product': product, 'price': price, 'category': category_title, 'link': link, 'image': image,
                   'description': description})
            products.append({'product': product, 'price': price, 'category': category_title, 'link': link, 'image': image,
                             'description': description})

    except KeyError:
        print("Key Error occurred")
    except Exception:
        print("Error occurred " + url)


# Extract description product level response content
def scrape_desc(body):
    try:
        # Parse content with BeautifulSoup
        soup = BeautifulSoup(body, 'html.parser')
        # Target product description in the content
        product_descriptions = soup.find('div', {'class': 'product-details'})
        # Extract description text if exists
        if product_descriptions:
            product_desc = product_descriptions.find('p')
            description = re.sub('^[\s]+|[\s]+$', '', product_desc.text)
            description = description.replace('Product Details', '')
            description = re.sub('[\n\t]+', '', description)
        else:
            description = "N/A"

        # Return description
        return description

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
df.to_csv('EHSmithProducts.csv', index=False)
