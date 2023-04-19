import csv

# Open tpProducts.csv file
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
