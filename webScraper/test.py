from bs4 import BeautifulSoup
import requests
from selenium import webdriver
from selenium.webdriver.chrome.options import Options

supplier = "Amazon"
options = Options()
options.headless = True
driver = webdriver.Chrome(options=options)
driver.get('https://www.amazon.co.uk/Blue-Circle-General-Purpose-Cement/dp/B088HH7DNL')
soup = BeautifulSoup(driver.page_source, 'lxml')
product_description = soup.find('h1', id='title')
product_name = product_description.find('span', id='productTitle').text.replace('\t', '').replace('\n', '').strip()
price_description = soup.find('span', class_='a-offscreen')
primary_price = price_description.text.replace('\t', '').replace('\n', '')
primary_price = float(primary_price[1:])
driver.quit()
final_data = (product_name, supplier, primary_price)
print(final_data)
