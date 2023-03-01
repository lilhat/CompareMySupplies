import os
import csv
from fuzzywuzzy import fuzz, process
import re

# Set up the folder where the CSV files are located
data_folder = "data/"
csv_files = [f for f in os.listdir(data_folder) if f.endswith('.csv')]

# Define a regular expression pattern to match numbers in a string
number_pattern = r'(\d+(?:\.\d+)?)'

# Define a function to search for product names in a specific CSV file and return a list of aliases
def find_aliases(main_name, csv_file):
    aliases = []
    # Extract the numbers and the non-number parts of the main_name using regular expressions
    number_part = ''.join(re.findall(number_pattern, main_name))
    non_number_part = re.sub(number_pattern, '', main_name)
    with open(os.path.join(data_folder, csv_file), 'r', encoding='utf-8-sig') as f:
        reader = csv.DictReader(f)
        for row in reader:
            # Extract the numbers and the non-number parts of the row's product name
            row_number_part = ''.join(re.findall(number_pattern, row['product']))
            row_non_number_part = re.sub(number_pattern, '', row['product'])
            # Use fuzzywuzzy to compare the numbers and the non-number parts separately
            number_score = fuzz.ratio(number_part, row_number_part)
            non_number_score = fuzz.token_set_ratio(non_number_part, row_non_number_part)
            total_score = number_score * 0.5 + non_number_score * 0.5
            if total_score > 90:
                aliases.append(row['product'])
    return aliases

# Define the name of the input CSV file and the output CSV file
input_file = 'products.csv'
output_file = 'aliases.csv'

# Open the input and output CSV files
with open(input_file, newline='', encoding='utf-8-sig') as infile, open(output_file, 'w', newline='', encoding='utf-8-sig') as outfile:
    reader = csv.DictReader(infile)
    fieldnames = ['main_name', 'category', 'bq_name', 'tp_name', 'bradfords_name', 'builderdepot_name', 'homebase_name',
                  'jewson_name', 'screwfix_name',	'toolstation_name', 'wickes_name']
    writer = csv.DictWriter(outfile, fieldnames=fieldnames)
    writer.writeheader()
    for csv_file in csv_files:
        if "bq" in csv_file:
            bq_csv_file = csv_file
        elif "tp" in csv_file:
            tp_csv_file = csv_file
        elif "bradfords" in csv_file:
            bradfords_csv_file = csv_file
        elif "builderdepot" in csv_file:
            builderdepot_csv_file = csv_file
        elif "homebase" in csv_file:
            homebase_csv_file = csv_file
        elif "jewson" in csv_file:
            jewson_csv_file = csv_file
        elif "screwfix" in csv_file:
            screwfix_csv_file = csv_file
        elif "toolstation" in csv_file:
            toolstation_csv_file = csv_file
        elif "wickes" in csv_file:
            wickes_csv_file = csv_file

    for row in reader:
        main_name = row['product']
        category = row['category']
        bq_aliases = find_aliases(main_name, bq_csv_file)
        tp_aliases = find_aliases(main_name, tp_csv_file)
        bradfords_aliases = find_aliases(main_name, bradfords_csv_file)
        builderdepot_aliases = find_aliases(main_name, builderdepot_csv_file)
        homebase_aliases = find_aliases(main_name, homebase_csv_file)
        jewson_aliases = find_aliases(main_name, jewson_csv_file)
        screwfix_aliases = find_aliases(main_name, screwfix_csv_file)
        toolstation_aliases = find_aliases(main_name, toolstation_csv_file)
        wickes_aliases = find_aliases(main_name, wickes_csv_file)

        writer.writerow({
            'main_name': main_name,
            'category': category,
            'bq_name': bq_aliases[0] if len(bq_aliases) >= 1 else '',
            'tp_name': tp_aliases[0] if len(tp_aliases) >= 1 else '',
            'bradfords_name': bradfords_aliases[0] if len(bradfords_aliases) >= 1 else '',
            'builderdepot_name': builderdepot_aliases[0] if len(builderdepot_aliases) >= 1 else '',
            'homebase_name': homebase_aliases[0] if len(homebase_aliases) >= 1 else '',
            'jewson_name': jewson_aliases[0] if len(jewson_aliases) >= 1 else '',
            'screwfix_name': screwfix_aliases[0] if len(screwfix_aliases) >= 1 else '',
            'toolstation_name': toolstation_aliases[0] if len(toolstation_aliases) >= 1 else '',
            'wickes_name': wickes_aliases[0] if len(wickes_aliases) >= 1 else '',
        })
