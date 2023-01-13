import requests
from bs4 import BeautifulSoup
import pandas as pd
import concurrent.futures


# print(driver.page_source)
payload = {'api_key': 'c77c0381435173c259ffb52574077993', 'url': 'https://www.travisperkins.co.uk/', 'render': 'true'}
r = requests.get('http://api.scraperapi.com', params=payload)
r_text = r.text
soup = BeautifulSoup(r_text, 'html.parser')
product_elements = soup.find_all('li',
                                 {'class': 'NavMenuListDesktop__NavMenuTableCategoryListItem-sc-1ypu5gb-2 gvVYHL'})
links = []
for product_element in product_elements:
    link_element = product_element.find("a")
    if link_element:
        links.append(link_element['href'])

department_links = [link for link in links if '/product' in link]
print(department_links)

# Variable i is the page number
i = 1
urls = []

# To find pages do totalResults/pageSize and round up
# Create a batch job with all the categories available
for j in range(0, len(department_links)):
    url_single = 'https://www.travisperkins.co.uk' + department_links[j]
    urls.append(url_single)


# Loop through each response and scrape the first page of products into product dictionary
NUM_RETRIES = 5
NUM_THREADS = 5
products = []

def scrape_url(url):
    for _ in range(NUM_RETRIES):
        try:
            payload = {'api_key': 'c77c0381435173c259ffb52574077993', 'url': url,
                       'render': 'true'}
            r = requests.get('http://api.scraperapi.com', params=payload)
            r_text = r.text
            if r.status_code in [200, 404]:
                ## escape for loop if the API returns a successful response
                break
        except requests.exceptions.ConnectionError:
            response = ''
    if r.status_code == 200:
        try:
            soup = BeautifulSoup(r_text, 'html.parser')
            product_titles = soup.find_all('div',
                                           {'class': 'ProductItemDesktopNewFlow__ProductName-sc-1uzlgcd-7 jrxgHl'})
            product_prices = soup.find_all('h2', {'class': 'sc-bczRLJ sc-dkzDqf nFQPz eZNacu'})
            category_title_html = soup.find('h1', {'data-test-id': 'listing-header-title'})
            product_links = soup.find_all('a',
                                          {'class': 'ProductItemDesktopNewFlow__ProductInfoLink-sc-1uzlgcd-4 fgClmn'})

            if category_title_html is not None:
                category_title = category_title_html.text
            else:
                category_title = "N/A"

            product_list = []
            price_list = []
            link_list = []

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
                link_list.append('https://www.travisperkins.co.uk' + product_link['href'])

            for product, price, link in zip(product_list, price_list, link_list):
                print({'product': product, 'price': price, 'category': category_title, 'link': link})
                products.append({'product': product, 'price': price, 'category': category_title, 'link': link})

        except KeyError:
            print("Key Error occurred")
            print(urls[j])
        except:
            print("Error occurred")


with concurrent.futures.ThreadPoolExecutor(max_workers=NUM_THREADS) as executor:
    executor.map(scrape_url, urls)
# Write products into csv file
df = pd.DataFrame(products)
df.to_csv('tpProducts.csv', index=False)
