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
                'url': 'https://www.toolstation.com/',
            },

        )
        # Check response success
        if response.status_code == 200:
            # Parse the content with BeautifulSoup
            body = response.content
            soup = BeautifulSoup(body, 'html.parser')
            # Target specific ul elements
            product_elements = soup.find_all('ul', {'class': 'megamenu__sub-menu'})
            links = []
            # Extract href of hyperlink elements within each ul
            for product_element in product_elements:
                a_element = product_element.find('a')
                if a_element is not None:
                    links.append(a_element['href'])

            # Filter to only contain links
            department_links = [link for link in links if '/' in link]

            # Append to global urls list
            for j in range(0, len(department_links)):
                urls.append(department_links[j])
                print(department_links[j])
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
            # Call function to extract description and price using response content
            description, price = scrape_desc(response.content)
            return description, price
        else:
            print("Error: " + str(response.status_code))
            print("Url: " + url)


# Extract relevant data from response content
def scrape_url(body):
    try:
        # Parse content with BeautifulSoup
        soup = BeautifulSoup(body, 'html.parser')
        # Find each product component in the content
        product_titles = soup.find_all('div', {'class': 'flex flex-col gap-0.5'})
        category_title_html = soup.find('h1', {'class': 'text-blue text-size-9 font-bold mb-4'})
        product_images = soup.find_all('div', {'class': 'relative'})
        # Check if category title exists
        if category_title_html is not None:
            # Format category title using regex
            category_title = re.sub('^[\s]+|[\s]+$', '', category_title_html.text)
        else:
            category_title = "N/A"

        product_list = []
        price_list = []
        link_list = []
        image_list = []
        desc_list = []

        for i in range(0, len(product_titles)):
            # Extract link from product and append to list
            title_raw = product_titles[i].find('a')
            link = title_raw['href']
            link_list.append(link)
            # Call function to scrape deeper product page level
            description, price = single_request(link)
            # Append returned description and price into lists
            desc_list.append(description)
            price_list.append(price)
            # Format title text
            title_element = re.sub('^[\s]+|[\s]+$', '', title_raw.text)
            # Append title to list if exists
            if title_element:
                product_list.append(title_element)

        # Extract image link for each product
        for i in range(0, len(product_images)):
            if product_images[i] is not None:
                img_tags = product_images[i].find_all('img')
                for img in img_tags:
                    if img.parent.name != "div":
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


# Extract description and price from product level response content
def scrape_desc(body):
    try:
        # Parse content with BeautifulSoup
        soup = BeautifulSoup(body, 'html.parser')
        # Target product description and price in the content
        product_desc = soup.find_all('div', {'class': 'product-details'})
        product_prices = soup.find_all('span', {'class': 'main-price'})
        # Extract description text if exists
        if product_desc:
            p_element = product_desc[0].find('p')
            # Format description using regex
            description = re.sub('^[\s]+|[\s]+$', '', p_element.text)
            description = re.sub('[\n\t\r]+', '', description)
        else:
            description = "N/A"

        # Extract price text if exists
        if product_prices:
            price = product_prices[0].text
        else:
            price = 'N/A'

        # Return description and price
        return description, price

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
df.to_csv('toolstationProducts.csv', index=False)
