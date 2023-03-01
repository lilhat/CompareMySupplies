import os
import csv
from fuzzywuzzy import fuzz
from fuzzywuzzy import process

# define the input file path
input_file = 'bq_building.csv'

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
            'product': row['product'],
            'price': row['price'],
            'category': row['category'],
            'link': row['link'],
            'image': row['image'],
            'description': row['description']
        }
        products.append(product)


def fuzzy_match(product_name, row_name):
    # extract the numbers from the product name and the row name
    product_number = ''.join(filter(str.isdigit, product_name))
    row_number = ''.join(filter(str.isdigit, row_name))

    # calculate the number-word weighting for matching
    num_weight = 0.5
    word_weight = 0.5

    # calculate the partial ratio of the remaining parts of the names
    word_ratio = fuzz.partial_ratio(product_name.replace(product_number, ''), row_name.replace(row_number, ''))

    # calculate the ratio of the numbers in the product name and the row name
    if product_number and row_number:
        num_ratio = fuzz.ratio(product_number, row_number)
    else:
        num_ratio = 0

    # calculate the overall ratio using the number-word weighting
    overall_ratio = (num_ratio * num_weight) + (word_ratio * word_weight)

    return overall_ratio >= 80, overall_ratio


# create a dictionary to keep track of which products have already been matched in each CSV file
matched_products = {}

# loop through the files in the data folder and look for matches
with open(output_file, 'w', newline='', encoding='utf-8-sig') as csvfile:
    fieldnames = ['id', 'name', 'price', 'category', 'link', 'image', 'description', 'source']
    writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
    writer.writeheader()

    for filename in os.listdir(data_folder):
        if filename.endswith('.csv'):
            with open(data_folder + filename, newline='', encoding='utf-8-sig') as csvfile:
                reader = csv.DictReader(csvfile)
                for row in reader:
                    for product in products:
                        if product['id'] not in matched_products.get(filename, set()):
                            if product['product'] and row['product']:
                                product_name = product['product']
                                row_name = row['product']
                                match_found, score = fuzzy_match(product_name, row_name)
                                print('Comparing product:', product_name)
                                print('To row:', row_name)
                                print('Score:', score)
                                if match_found:
                                    match = {
                                        'id': product['id'],
                                        'name': row['product'],
                                        'price': row['price'],
                                        'category': product['category'],
                                        'link': row['link'],
                                        'image': row['image'],
                                        'description': row['description'],
                                        'source': filename
                                    }
                                    writer.writerow(match)
                                    matched_products.setdefault(filename, set()).add(product['id'])
                                print('-----------------------------------')
