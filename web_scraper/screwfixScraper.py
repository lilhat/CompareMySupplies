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
        # Make GET request to ScrapingBee API using parameters to select all links on page
        response = requests.get(
            url='https://app.scrapingbee.com/api/v1/',
            params={
                'api_key': 'FKCMAMEUOONCRQ0WE8DQ58KA2SRPC1ZHN6V7JRPI2PMEK2380VBCQQPKALY3NQC83KMG5AQI2BGHPSRZ',
                'url': 'https://www.screwfix.com/c/tools/cat830034',
                'extract_rules': '{"all_links":{"selector":"a","type":"list","output":"@href"}}',
            },

        )
        # Check response success
        if response.status_code == 200:
            # Parse the content with BeautifulSoup
            body = response.text
            content_json = json.loads(body)
            # Access the list from the JSON object
            links = content_json["all_links"]
            links = [item for item in links if item is not None]
            # Filter to only contain category links
            department_links = [link for link in links if '/c/' in link]
            # Append to global urls list
            for j in range(0, len(department_links)):
                full_link = "https://www.screwfix.com" + department_links[j]
                urls.append(full_link)
                print(full_link)
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
        # Find each product component in the content
        product_titles = soup.find_all('div', {'data-qaid': 'product-heading'})
        product_cards = soup.find_all('div', {'data-qaid': 'product-card'})
        category_title_html = soup.find('h1', {'data-qaid': 'h1-seo-heading'})
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
        for i in range(0, len(product_titles)):
            title_raw = product_titles[i].find('a', {'data-qaid': 'product_description'})
            # Extract link of each product
            link = "https://www.screwfix.com" + title_raw['href']
            link_list.append(link)
            # Call function to scrape deeper product page level and append to description list
            desc_list.append(single_request(link))
            # Format title using regex
            title_element = re.sub('^[\s]+|[\s]+$', '', title_raw.text)
            if title_element:
                product_list.append(title_element)

        # Loop through product cards
        for i in range(0, len(product_cards)):
            if product_cards[i] is not None:
                # Extract text of each product price
                price = product_cards[i].find('span', {'data-qaid': 'price'}).text
                # Remove extra text from price
                price = price.replace("Inc Vat", "").strip()
                # Append price into list
                price_list.append(price)
                # Extract image link and append into list
                img = product_cards[i].find('img')
                image_link = img['src']
                image_list.append(image_link)

        # Zip all lists together to create a list of dictionaries containing the information for a single product
        # Print each dictionary and add it to the products list
        for product, price, link, image, description in zip(product_list, price_list, link_list, image_list, desc_list):
            print({'product': product, 'price': price, 'category': category_title, 'link': link, 'image': image,
                   'description': description})
            products.append({'product': product, 'price': price, 'category': category_title, 'link': link, 'image': image,
                             'description': description})

    except KeyError:
        print("Key Error occurred")
    except:
        print("Error occurred")


# Extract description from product level response content
def scrape_desc(body):
    try:
        # Parse content with BeautifulSoup
        soup = BeautifulSoup(body, 'html.parser')
        # Target product description
        product_desc = soup.find('p', {'data-qaid': 'pdp-product-overview'})

        # Extract description text if exists
        if product_desc:
            # Format description using regex
            description = re.sub('^[\s]+|[\s]+$', '', product_desc.text)
        else:
            description = "N/A"

        # Extract second description text if exists
        product_desc2 = soup.find('ul', {'data-qaid': 'pdp-product-bullets'})

        if product_desc2:
            # Add second description to end of first
            description += product_desc2.text
        else:
            return description

        # Return final description
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
df.to_csv('screwfixProducts.csv', index=False)
