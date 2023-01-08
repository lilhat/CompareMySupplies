from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
import requests
import logging

# Log any errors into text file
logger = logging.getLogger('suppliers')
logger.setLevel(logging.INFO)

# Assign a file-handler to that instance
fh = logging.FileHandler("errors.log")
fh.setLevel(logging.INFO)

# Format logs
formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
fh.setFormatter(formatter)

# Add the handler to logging instance
logger.addHandler(fh)


# Web scrape any product from defined suppliers

# B&Q
def scrape_bq(link):
    supplier = "bq"
    try:
        html_text = requests.get(link).text
        soup = BeautifulSoup(html_text, 'lxml')
        product_name = soup.find(attrs={"data-test-id": "hero-info-title"}).text
        price = soup.find(attrs={"data-test-id": "product-primary-price"})
        primary_price = price.find('div', class_='_5d34bd7a').text
        primary_price = float(primary_price)
        final_data = (product_name, supplier, primary_price, link)
    except Exception as error:
        final_data = ("N/A", supplier, 0.00, link)
        logger.exception(error)
    return final_data


# Travis Perkins
def scrape_travisperkins(link):
    supplier = "travisperkins"
    try:
        html_text = requests.get(link).text
        soup = BeautifulSoup(html_text, 'lxml')
        product_name = soup.find('h1', class_='sc-bczRLJ sc-gsnTZi bgIXvN ePZrKO').text
        price = soup.find(attrs={"data-test-id": "main-price"})
        price_with_sign = price.find('h1', class_='sc-bczRLJ sc-gsnTZi nFQPz ePZrKO').text
        primary_price = float(price_with_sign[1:])
        final_data = (product_name, supplier, primary_price, link)

    except Exception as error:
        final_data = ("N/A", supplier, 0.00, link)
        logger.exception(error)
    return final_data


# Wickes
def scrape_wickes(link):
    supplier = "wickes"
    try:
        html_text = requests.get(link).text
        soup = BeautifulSoup(html_text, 'lxml')
        product_name = soup.find('h1', class_='pdp__heading').text
        price_with_sign = soup.find('div', class_='main-price__value pdp-price__new-price').text.replace('\t',
                                                                                                         '').replace(
            '\n', '')
        primary_price = float(price_with_sign[1:])
        final_data = (product_name, supplier, primary_price, link)

    except Exception as error:
        final_data = ("N/A", supplier, 0.00, link)
        logger.exception(error)
    return final_data


# Homebase
def scrape_homebase(link):
    supplier = "homebase"
    try:
        html_text = requests.get(link).text
        soup = BeautifulSoup(html_text, 'lxml')
        product_name = soup.find('h1', class_='productName_title').text
        price_with_sign = soup.find(attrs={"data-product-price": "price"}).text.replace('\t', '').replace('\n',
                                                                                                          '').replace(
            ' ', '')
        primary_price = float(price_with_sign[1:])
        final_data = (product_name, supplier, primary_price, link)

    except Exception as error:
        final_data = ("N/A", supplier, 0.00, link)
        logger.exception(error)
    return final_data


# Builders Merchant
def scrape_buildersmerchant(link):
    supplier = "buildersmerchant"
    try:
        html_text = requests.get(link).text
        soup = BeautifulSoup(html_text, 'lxml')
        product_name = soup.find('h2', class_='product_title entry-title show-product-nav').text
        price_with_sign = soup.find('span', class_='woocommerce-Price-amount amount').text
        primary_price = float(price_with_sign[1:])
        final_data = (product_name, supplier, primary_price, link)

    except Exception as error:
        final_data = ("N/A", supplier, 0.00, link)
        logger.exception(error)
    return final_data


# Bradfords
def scrape_bradfords(link):
    supplier = "bradfords"
    try:
        html_text = requests.get(link).text
        soup = BeautifulSoup(html_text, 'lxml')
        product_name = soup.find(attrs={"data-ui-id": "page-title-wrapper"}).text
        price_with_sign = soup.find('span', class_='price-wrapper price-including-tax').text.replace('\t', '').replace(
            '\n', '')
        primary_price = float(price_with_sign[1:])
        final_data = (product_name, supplier, primary_price, link)

    except Exception as error:
        final_data = ("N/A", supplier, 0.00, link)
        logger.exception(error)
    return final_data


# Toolstation
def scrape_toolstation(link):
    supplier = "toolstation"
    try:
        html_text = requests.get(link).text
        soup = BeautifulSoup(html_text, 'lxml')
        product_name = soup.find('h1', class_='product-header__title').text
        price_with_sign = soup.find('span', class_='main-price').text.replace('\t', '').replace('\n', '')
        primary_price = float(price_with_sign[1:])
        final_data = (product_name, supplier, primary_price, link)

    except Exception as error:
        final_data = ("N/A", supplier, 0.00, link)
        logger.exception(error)
    return final_data


# Screwfix
def scrape_screwfix(link):
    supplier = "screwfix"
    try:
        options = Options()
        options.headless = True
        driver = webdriver.Chrome(options=options)
        driver.get(link)
        soup = BeautifulSoup(driver.page_source, 'lxml')
        product_description = soup.find('h1', id='product_description')
        product_name = product_description.find('span', itemprop='name').text.replace('\t', '').replace('\n', '')
        price_description = soup.find('div', id='product_price')
        pound_sign = price_description.find('span', class_="pound")
        vat_tag = price_description.find('span', class_="incvat")
        price_extra = price_description.find('span', class_="price__extra")
        if price_extra is not None:
            price_extra.decompose()
        pound_sign.decompose()
        vat_tag.decompose()
        primary_price = price_description.text.replace('\t', '').replace('\n', '')
        primary_price = float(primary_price)
        driver.quit()
        final_data = (product_name, supplier, primary_price, link)

    except Exception as error:
        final_data = ("N/A", supplier, 0.00, link)
        logger.exception(error)
    return final_data


# Jewson
def scrape_jewson(link):
    supplier = "jewson"
    try:
        html_text = requests.get(link).text
        soup = BeautifulSoup(html_text, 'lxml')
        product_name = soup.find('h1', class_='product-title mb-1').text
        primary_price = soup.find('span', class_='js-price-value').text
        primary_price = float(primary_price)
        final_data = (product_name, supplier, primary_price, link)

    except Exception as error:
        final_data = ("N/A", supplier, 0.00, link)
        logger.exception(error)
    return final_data


# Materials Market
def scrape_materialsmarket(link):
    supplier = "materialsmarket"
    try:
        html_text = requests.get(link).text
        soup = BeautifulSoup(html_text, 'lxml')
        product_name = soup.find('h1', class_='c-product-information__heading col s12').text
        primary_price = soup.select_one('[data-product-price-all-units-inc-vat]')[
            'data-product-price-all-units-inc-vat']
        primary_price = float(primary_price)
        final_data = (product_name, supplier, primary_price, link)

    except Exception as error:
        final_data = ("N/A", supplier, 0.00, link)
        logger.exception(error)
    return final_data


# Builder Depot
def scrape_builderdepot(link):
    supplier = "builderdepot"
    try:
        html_text = requests.get(link).text
        soup = BeautifulSoup(html_text, 'lxml')
        product_name = soup.find('h1', class_="page-title").text.replace('\t', '').replace('\n', '')
        primary_price = soup.find('span', class_='price').text
        primary_price = float(primary_price[1:])
        final_data = (product_name, supplier, primary_price, link)

    except Exception as error:
        final_data = ("N/A", supplier, 0.00, link)
        logger.exception(error)
    return final_data


# Amazon
def scrape_amazon(link):
    supplier = "amazon"
    try:
        supplier = "Amazon"
        options = Options()
        options.headless = True
        driver = webdriver.Chrome(options=options)
        driver.get(link)
        soup = BeautifulSoup(driver.page_source, 'lxml')
        product_description = soup.find('h1', id='title')
        product_name = product_description.find('span', id='productTitle').text.replace('\t', '').replace('\n',
                                                                                                          '').strip()
        primary_price = soup.find('span', class_='a-offscreen').text.replace('\t', '').replace('\n', '')
        primary_price = float(primary_price[1:])
        driver.quit()
        final_data = (product_name, supplier, primary_price, link)
    except Exception as error:
        final_data = ("N/A", supplier, 0.00, link)
        logger.exception(error)
    return final_data


# CEF
def scrape_cef(link):
    supplier = "cef"
    try:
        options = Options()
        options.headless = True
        driver = webdriver.Chrome(options=options)
        driver.get(link)
        soup = BeautifulSoup(driver.page_source, 'lxml')
        product_name = soup.find('h1', class_="details_page").text.replace('\t', '').replace('\n', '')
        price_description = soup.find('div', class_='sub-value')
        primary_price = price_description.select_one('span').text
        primary_price = float(primary_price[1:])
        driver.quit()
        final_data = (product_name, supplier, primary_price, link)
    except Exception as error:
        final_data = ("N/A", supplier, 0.00, link)
        logger.exception(error)
    return final_data
