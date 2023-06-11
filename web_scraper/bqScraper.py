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
                'url': 'https://www.diy.com/',
                'render_js': 'false',
            },

        )
        # Check response success
        if response.status_code == 200:
            # Parse the content with BeautifulSoup
            body = response.content
            soup = BeautifulSoup(body, 'html.parser')
            # Target specific li elements
            product_elements = soup.find_all('li', {'class': '_43ba2ed1'})
            links = []
            # Extract href of hyperlink elements within each li
            for product_element in product_elements:
                link_element = product_element.find("a")
                if link_element:
                    links.append(link_element['href'])
            # Filter to only contain department links
            department_links = [link for link in links if '/department' in link]
            print(department_links)
            # Append to global urls list
            for j in range(0, len(department_links)):
                url_single = 'https://www.diy.com' + department_links[j]
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
            # Call function to extract description and image using response content
            description, image = scrape_desc(response.content)
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
        product_titles = soup.find_all('p', {'data-test-id': 'productTitle'})
        product_prices = soup.find_all('div', {'data-test-id': 'product-primary-price'})
        category_title_html = soup.find('h1', {'data-test-id': 'plp-title'})
        product_links = soup.find_all('a', {'data-test-id': 'product-panel-main-section'})
        # Check if category title exists
        if category_title_html is not None:
            category_title = category_title_html.text
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
            full_url = 'https://www.diy.com' + product_link['href']
            link_list.append(full_url)
            # Call function to scrape deeper product page level
            desc, image = single_request(full_url)
            # Append returned description and image into lists
            desc_list.append(desc)
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


# Extract description and image from product level response content
def scrape_desc(body):
    try:
        # Parse content with BeautifulSoup
        soup = BeautifulSoup(body, 'html.parser')
        # Target product description and image in the content
        product_desc = soup.find('div', {'data-test-id': 'ProductDescText'})
        product_image = soup.find('picture', {'data-test-id': 'picture-wrapper'})

        # Extract description text if exists
        if product_desc:
            description = product_desc.text
        else:
            description = "N/A"

        # Extract image link if exists
        if product_image:
            image_tag = product_image.find('img', {'data-test-id': 'image'})
            image = image_tag['src']
        else:
            image = 'N/A'

        # Return description and image
        return description, image

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
df.to_csv('bqProducts.csv', index=False)
