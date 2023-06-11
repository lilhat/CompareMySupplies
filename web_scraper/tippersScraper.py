import requests
from bs4 import BeautifulSoup
import re
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
                'url': 'https://www.tippers.com/',
                'render_js': 'false',
            },

        )
        # Check response success
        if response.status_code == 200:
            # Parse the content with BeautifulSoup
            body = response.content
            soup = BeautifulSoup(body, 'html.parser')
            # Target specific li elements
            product_elements = soup.find_all('li', {'class': 'sub-sub-nav__item'})
            links = []
            # Extract href of hyperlink elements within each li
            for product_element in product_elements:
                li_elements = product_element.find_all('li')
                for li_element in li_elements:
                    a_element = li_element.find('a')
                    links.append(a_element['href'])
            # Filter to only contain links
            department_links = [link for link in links if '/' in link]
            print(department_links)
            # Append to global urls list
            for j in range(0, len(department_links)):
                url_single = 'https://www.tippers.com' + department_links[j]
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
        # Find each product card in the content
        product_cards = soup.find_all('li', {'class': 'products__item no-options'})
        category_title_html = soup.find('span', {'class': 'span8 offset3'})
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
        for product_card in product_cards:
            # Extract link of each product and append into list
            link = product_card.find('a')
            full_url = "https://www.tippers.com" + link['href']
            new_url = full_url.split("[]")[0]
            link_list.append(new_url)
            # Call function to scrape deeper product page level and append to description list
            desc_list.append(single_request(new_url))
            # Extract title of each product
            title = product_card.find('div', {'class', 'title products__title'})
            # Format title using regex
            title_element = re.sub('^[\s]+|[\s]+$', '', title.text)
            # Extract price of each product
            price = product_card.find('span', {'class', 'local-price notranslate'}).text
            # Remove extra text from price
            price = price.replace(" Incl. VAT", "").strip()
            # Append price to list
            price_list.append(price)
            # Extract image of each product and append to list
            image = product_card.find('img')
            image_url = image['data-src']
            image_list.append(image_url)
            # Append title to list if exists
            if title_element:
                product_list.append(title_element)

        # Zip all lists together to create a list of dictionaries containing the information for a single product
        # Print each dictionary and add it to the products list
        for product, price, link, image, description in zip(product_list, price_list, link_list, image_list, desc_list):
            print({'product': product, 'price': price, 'category': category_title, 'link': link, 'image': image, 'description': description})
            products.append({'product': product, 'price': price, 'category': category_title, 'link': link, 'image': image, 'description': description})

    except KeyError:
        print("Key Error occurred")
    except:
        print("Error occurred")


# Extract description from product level response content
def scrape_desc(body):
    try:
        # Parse content with BeautifulSoup
        soup = BeautifulSoup(body, 'html.parser')
        # Target product description and image in the content
        product_desc = soup.find('div', {'class': 'accordion-inner'})
        # Extract description text if exists
        if product_desc:
            # Format description using regex
            description = re.sub('^[\s]+|[\s]+$', ' ', product_desc.text)
            description = re.sub('[\n\t]+', ' ', description)
            description = description.replace("\xa0", ' ')
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
df.to_csv('tippersProducts.csv', index=False)
