from bs4 import BeautifulSoup
import requests
from selenium import webdriver
from selenium.webdriver.chrome.options import Options

try:
    supplier = "CEF"
    options = Options()
    options.headless = True
    driver = webdriver.Chrome(options=options)
    driver.get('https://www.cef.co.uk/catalogue/products/4911245-8-way-flexible-dual-100a-rcd-metal-clad-consumer-unit-with-spd-and-8-x-mcbs')
    soup = BeautifulSoup(driver.page_source, 'lxml')
    product_name = soup.find('h1', class_="details_page").text.replace('\t', '').replace('\n', '')
    price_description = soup.find('div', class_='sub-value')
    primary_price = price_description.select_one('span').text
    primary_price = float(primary_price[1:])
    driver.quit()
    final_data = (product_name, supplier, primary_price)
except Exception as error:
    final_data = ("N/A", supplier, 0.00)
final_data = (product_name, supplier, primary_price)
print(final_data)
