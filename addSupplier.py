import csv
from rapidfuzz import fuzz,process


def add_supplier():
    # Open new supplier file
    with open('tpProducts.csv', 'r', encoding='utf-8-sig') as tp_file:

        # Read the file with csv reader
        file_reader = csv.DictReader(tp_file)

        # Open comparisons.csv file
        with open('comparisons.csv', 'r', encoding='utf-8-sig') as cmp_file:

            # Read the file with csv reader
            cmp_reader = csv.DictReader(cmp_file)

            # Get a set of product names in comparisons.csv
            cmp_products = set()
            for cmp_row in cmp_reader:
                cmp_products.add(cmp_row['name'])

            # Open productsnew.csv file for writing
            with open('productsnew.csv', 'a', newline='', encoding='utf-8-sig') as new_file:

                # Define the header row
                header = ['id', 'name', 'image', 'description', 'category', 'sub_category', 'main_category', 'top_seller', 'price']

                # Create the DictWriter object with the append mode
                new_writer = csv.DictWriter(new_file, fieldnames=header, quoting=csv.QUOTE_ALL)

                # If the file is empty, write the header row
                if new_file.tell() == 0:
                    new_writer.writeheader()

                # Loop through each row in tpProducts.csv file
                for file_row in file_reader:

                    # Check if the product name is in comparisons.csv
                    if file_row['product'] not in cmp_products:

                        # Write the row to productsnew.csv file
                        new_writer.writerow({'id': '',
                                              'name': file_row['product'],
                                              'image': file_row['image'],
                                              'description': file_row['description'],
                                              'category': file_row['category'],
                                              'sub_category': '',
                                              'main_category': '',
                                              'top_seller': '',
                                              'price': file_row['price']})


def label_categories():
    # Set the path to the input file
    input_file = 'productsnew.csv'

    # Define a minimum score for fuzzy matching
    min_name_score = 80
    min_category_score = 60

    # Open the input file for reading
    with open(input_file, 'r', newline='', encoding='utf-8-sig') as f:
        reader = csv.DictReader(f)
        rows = list(reader)

    # Create a list of rows that don't have a sub_category
    unmatched_rows = [row for row in rows if not row.get('sub_category')]

    # Create a list of rows that have a sub_category
    matched_rows = [row for row in rows if row.get('sub_category')]

    # Iterate through each unmatched row
    for unmatched_row in unmatched_rows:

        # Try to match the unmatched row by name
        name_matches = process.extract(unmatched_row['name'], [row['name'] for row in matched_rows], scorer=fuzz.token_set_ratio, score_cutoff=min_name_score, limit=None)

        # If there is at least one name match with a score above the minimum score
        if len(name_matches) > 0:

            # Get the highest scoring name match
            highest_name_match = name_matches[0]

            # Find the matched row that corresponds to the highest name match
            matched_row = next(row for row in matched_rows if row['name'] == highest_name_match[0])
            print(unmatched_row)
            print(matched_row)
            # Copy the category, sub_category and main_category from the matched row to the unmatched row
            unmatched_row['category'] = matched_row['category']
            unmatched_row['sub_category'] = matched_row['sub_category']
            unmatched_row['main_category'] = matched_row['main_category']
            unmatched_row['top_seller'] = matched_row['top_seller']

        # If no name match is found, try to match by category
        else:

            # Try to match the unmatched row by category
            category_matches = process.extract(unmatched_row['category'], [row['category'] for row in matched_rows], scorer=fuzz.token_set_ratio, score_cutoff=min_category_score, limit=None)

            # If there is at least one category match with a score above the minimum score
            if len(category_matches) > 0:

                # Get the highest scoring category match
                highest_category_match = category_matches[0]

                # Find the matched row that corresponds to the highest category match
                matched_row = next(row for row in matched_rows if row['category'] == highest_category_match[0])
                print(unmatched_row)
                print(matched_row)
                # Copy the category, sub_category and main_category from the matched row to the unmatched row
                unmatched_row['category'] = matched_row['category']
                unmatched_row['sub_category'] = matched_row['sub_category']
                unmatched_row['main_category'] = matched_row['main_category']
                unmatched_row['top_seller'] = matched_row['top_seller']

            # If no match is found by name or category, delete the unmatched row
            else:
                rows.remove(unmatched_row)

    # Write the updated rows back to the input file
    with open(input_file, 'w', newline='', encoding='utf-8-sig') as f:
        fieldnames = ['id', 'name', 'image', 'description', 'category', 'sub_category', 'main_category', 'top_seller', 'price']
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(rows)


# add_supplier()
# label_categories()