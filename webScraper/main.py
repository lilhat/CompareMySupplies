from bs4 import BeautifulSoup
import requests
import time


# B&Q web scrape product and price
def scrape_bq():
    page = "B&Q"
    html_text = requests.get(
        'https://www.diy.com/departments/blue-circle-multipurpose-cement-25kg-bag/35715_BQ.prd').text
    soup = BeautifulSoup(html_text, 'lxml')
    product_name = soup.find(attrs={"data-test-id": "hero-info-title"}).text
    price = soup.find(attrs={"data-test-id": "product-primary-price"})
    pound_sign = price.find('span', class_='_69dddd23 _23ee746f _774163b8 notranslate').text
    primary_price = price.find('div', class_='_5d34bd7a').text
    with open(f'products/products.txt', 'a') as f:
        f.write("(" + page + ") " + product_name + ": " + pound_sign + primary_price + "\n")



# Travis Perkins web scrape product and price
def scrape_tp():
    page2 = "Travis Perkins"
    html_text2 = requests.get(
        'https://www.travisperkins.co.uk/cement/blue-circle-general-purpose-grey-cement-in-paper-bag-25kg/p/846581').text
    soup2 = BeautifulSoup(html_text2, 'lxml')
    product_name2 = soup2.find('h1', class_='sc-bczRLJ sc-gsnTZi bgIXvN ePZrKO').text
    price2 = soup2.find(attrs={"data-test-id": "main-price"})
    primary_price2 = price2.find('h1', class_='sc-bczRLJ sc-gsnTZi nFQPz ePZrKO').text
    with open(f'products/products.txt', 'a') as f:
        f.write("(" + page2 + ") " + product_name2 + ": " + primary_price2 + "\n")


# Wickes web scrape product and price
def scrape_wickes():
    page3 = "Wickes"
    html_text3 = requests.get('https://www.wickes.co.uk/Blue-Circle-General-Purpose-Cement---25kg/p/224661').text
    soup3 = BeautifulSoup(html_text3, 'lxml')
    product_name3 = soup3.find('h1', class_='pdp__heading').text
    price3 = soup3.find('div', class_="main-price")
    primary_price3 = soup3.find('div', class_='main-price__value pdp-price__new-price').text.replace('\t', '').replace(
        '\n', '')
    with open(f'products/products.txt', 'a') as f:
        f.write("(" + page3 + ") " + product_name3 + ": " + primary_price3 + "\n"   )


while True:
    scrape_bq()
    scrape_tp()
    scrape_wickes()
    time_wait = 10
    print(f'Waiting {time_wait} minutes...')
    time.sleep(time_wait * 60)
