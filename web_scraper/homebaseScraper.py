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
                'url': 'https://www.homebase.co.uk/',
            },

        )
        # Check response success
        if response.status_code == 200:
            # Parse the content with BeautifulSoup
            body = response.content
            soup = BeautifulSoup(body, 'html.parser')
            # Target specific a elements
            product_elements = soup.find_all('a', {'class': 'responsiveFlyoutMenu_levelThreeLink'})
            links = []
            # Extract href of hyperlink elements
            for product_element in product_elements:
                links.append(product_element['href'])
            # Filter to remove full links
            department_links = [link for link in links if 'https' not in link]
            print(department_links)

            # Append to global urls list
            for j in range(0, len(department_links)):
                url_single = 'https://www.homebase.co.uk' + department_links[j]
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
        # Find each product component in the content
        product_titles = soup.find_all('div', {'class': 'productBlock_title'})
        product_prices = soup.find_all('span', {'class': 'productBlock_priceValue'})
        category_title_html = soup.find('h1', {'class': 'responsiveProductListHeader_title'})
        product_links = soup.find_all('div', {'class': 'productBlock_imageLinkWrapper'})
        product_images = soup.find_all('img', {'data-track': 'product-image'})
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
            title_element = product_title.find("h3")
            if title_element:
                stripped_title = re.sub('^[\s]+|[\s]+$', '', title_element.text)
                product_list.append(stripped_title)

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
            link_element = product_link.find("a")
            if link_element:
                full_url = 'https://www.homebase.co.uk' + link_element['href']
                link_list.append(full_url)
                # Call function to scrape deeper product page level and append to description list
                desc_list.append(single_request(full_url))

        # Extract image links of each product and append into list
        for product_image in product_images:
            image_link = product_image['src']
            image_list.append(image_link)


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
        product_desc = soup.find('div', {'id': 'product-description-content-2'})

        # Extract description text if exists
        if product_desc:
            # Format description using regex
            description = re.sub('^[\s]+|[\s]+$', '', product_desc.text)
            description = re.sub('[\n\t\r]+', ' ', description)
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
df.to_csv('homebaseProducts.csv', index=False)
