from bs4 import BeautifulSoup
import requests
import time
from python_to_postgres import *


# B&Q web scrape product and price
def scrape_bq(link):
    supplier = "B&Q"
    html_text = requests.get(link).text
    soup = BeautifulSoup(html_text, 'lxml')
    product_name = soup.find(attrs={"data-test-id": "hero-info-title"}).text
    price = soup.find(attrs={"data-test-id": "product-primary-price"})
    pound_sign = price.find('span', class_='_69dddd23 _23ee746f _774163b8 notranslate').text
    primary_price = price.find('div', class_='_5d34bd7a').text
    primary_price = float(primary_price)
    shipping_price = 0.00
    total = primary_price + shipping_price
    final_data = (supplier, primary_price, shipping_price, total)
    return final_data


# Travis Perkins web scrape product and price
def scrape_tp(link2):
    supplier2 = "Travis Perkins"
    html_text2 = requests.get(link2).text
    soup2 = BeautifulSoup(html_text2, 'lxml')
    product_name2 = soup2.find('h1', class_='sc-bczRLJ sc-gsnTZi bgIXvN ePZrKO').text
    price2 = soup2.find(attrs={"data-test-id": "main-price"})
    price_with_sign = price2.find('h1', class_='sc-bczRLJ sc-gsnTZi nFQPz ePZrKO').text
    primary_price2 = float(price_with_sign[1:])
    shipping_price2 = 0.00
    total2 = primary_price2 + shipping_price2
    final_data2 = (supplier2, primary_price2, shipping_price2, total2)
    return final_data2


# Wickes web scrape product and price
def scrape_wickes(link3):
    supplier3 = "Wickes"
    html_text3 = requests.get(link3).text
    soup3 = BeautifulSoup(html_text3, 'lxml')
    product_name3 = soup3.find('h1', class_='pdp__heading').text
    price_with_sign2 = soup3.find('div', class_='main-price__value pdp-price__new-price').text.replace('\t',
                                                                                                       '').replace(
        '\n', '')
    primary_price3 = float(price_with_sign2[1:])
    shipping_price3 = 0.00
    total3 = primary_price3 + shipping_price3
    final_data3 = (supplier3, primary_price3, shipping_price3, total3)
    return final_data3


while True:
    to_database([scrape_bq('https://www.diy.com/departments/blue-circle-multipurpose-cement-25kg-bag/35715_BQ.prd'),
                 scrape_tp('https://www.travisperkins.co.uk/cement/blue-circle-general-purpose-grey-cement-in-paper'
                           '-bag-25kg/p/846581'),
                 scrape_wickes('https://www.wickes.co.uk/Blue-Circle-General-Purpose-Cement---25kg/p/224661')])
    time_wait = 10
    print(f'Waiting {time_wait} minutes...')
    time.sleep(time_wait * 60)
