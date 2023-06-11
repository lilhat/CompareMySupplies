import os
import csv
import re

from rapidfuzz import fuzz
from fuzzywuzzy import process

# define the input file path
input_file = 'productsnew4.csv'

# define the data folder path
data_folder = 'data/'

# define the output file path
output_file = 'output.csv'

# read in the input file and create a list of products
products = []
with open(input_file, newline='', encoding='utf-8-sig') as csvfile:
    reader = csv.DictReader(csvfile)
    for row in reader:
        product = {
            'id': row['id'],
            'product': row['name'],
            'price': row['price'],
            'category': row['category'],
            'image': row['image'],
            'description': row['description']
        }
        products.append(product)

number_pattern = r'(\d+(?:\.\d+)?)'


def fuzzy_match(product_name, row_name, product_price, row_price):
    # extract the numbers from the product name and the row name
    product_number = ''.join(re.findall(number_pattern, product_name))
    row_number = ''.join(re.findall(number_pattern, row_name))
    product_value = ''.join(re.findall(number_pattern, row_name))
    row_value = ''.join(re.findall(number_pattern, row_name))
    # calculate the number-word weighting for matching
    num_ratio = 0
    num_weight = 0
    word_weight = 0.8
    price_weight = 0.2
    # calculate the token set ratio of the remaining parts of the names
    word_ratio = fuzz.token_set_ratio(product_name.replace(product_number, ''), row_name.replace(row_number, ''))

    # calculate the percentage difference of the numbers in the product name and the row name
    if product_number and row_number:
        try:
            num_ratio = (1 - (abs(float(product_number) - float(row_number)) / max(float(product_number),
                                                                                   float(row_number)))) * 100
            if num_ratio == 100:
                num_weight = 0.25
                word_weight = 0.60
                price_weight = 0.15
            else:
                word_ratio = 0
        except ValueError:
            num_ratio = 0
        except ZeroDivisionError:
            num_ratio = 0

    # preprocess the price values to remove non-numeric characters and convert to float
    product_prices = re.findall(number_pattern, product_price)
    if len(product_prices) == 2:
        # Convert values to float and calculate average
        product_value = (float(product_prices[0]) + float(product_prices[1])) / 2
    else:
        try:
            product_value = float(''.join(product_prices))
        except ValueError:
            product_value = 0.0

    row_prices = re.findall(number_pattern, row_price)
    if len(row_prices) == 2:
        # Convert values to float and calculate average
        row_value = (float(row_prices[0]) + float(row_prices[1])) / 2
    else:
        try:
            row_value = float(''.join(row_prices))
        except ValueError:
            row_value = 0.0

    # calculate the percentage difference between the prices
    if product_value and row_value:
        price_ratio = (1 - (abs(float(product_value) - float(row_value)) / max(float(product_value), float(row_value)))) * 100
    else:
        price_ratio = 0

    # calculate the overall ratio using the number-word weighting
    num_value = (num_ratio * num_weight)
    word_value = (word_ratio * word_weight)
    price_value = (price_ratio * price_weight)
    overall_ratio = num_value + word_value + price_value

    return overall_ratio >= 80, overall_ratio, num_value, word_value, price_value


# create a dictionary to keep track of which products have already been matched in each CSV file
matched_products = {}

# loop through the files in the data folder and look for matches
with open(output_file, 'w', newline='', encoding='utf-8-sig') as csvfile:
    fieldnames = ['id', 'name', 'price', 'link', 'source']
    writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
    writer.writeheader()

    for filename in os.listdir(data_folder):
        if filename.endswith('.csv'):
            with open(data_folder + filename, newline='', encoding='utf-8-sig') as csvfile:
                reader = csv.DictReader(csvfile)
                matched_products = {}
                for row in reader:
                    for product in products:
                        if product['product'] and row['product']:
                            product_name = product['product']
                            row_name = row['product']
                            product_price = product['price']
                            row_price = row['price']
                            match_found, score, num, word, price = fuzzy_match(product_name, row_name, product_price, row_price)

                            if match_found:
                                if product['id'] not in matched_products or score > matched_products[product['id']]['score']:
                                    match = {
                                        'id': product['id'],
                                        'name': row['product'],
                                        'price': row['price'],
                                        'link': row['link'],
                                        'source': filename
                                    }
                                    print(match)
                                    print('Comparing product:', product_name, 'Price:', product_price)
                                    print('To row:', row_name)
                                    print('Score:', score)
                                    print('Num:', num, 'Word:', word, 'Price:', price)
                                    matched_products[product['id']] = {'match': match, 'score': score}

                for product_id, product_data in matched_products.items():
                    match = product_data['match']
                    writer.writerow(match)



