import csv
import urllib.parse


# Open the input CSV file and create a new output file
def fix_price():
    with open('database/productsnew4.csv', 'r', newline='', encoding='utf-8-sig') as input_file, \
            open('database/productsnew5.csv', 'w', newline='', encoding='utf-8-sig') as output_file:
        # Create a CSV reader and writer
        reader = csv.reader(input_file)
        writer = csv.writer(output_file)

        # Find the index of the column containing prices
        header = next(reader)
        price_index = header.index('price')

        # Write the header row to the output file
        writer.writerow(header)

        # Iterate over the rows in the input file
        for row in reader:
            # Get the price value from the row
            price = row[price_index]

            # Remove any £, letters and % signs from the price
            price = price.replace('£', '').replace('%', '').replace(',', '').strip(
                'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ ')

            if '-' in price:
                # Handle price ranges
                price, y = price.split('-')

            try:
                price = price.strip()
                price = float(price)
                price = '{:.2f}'.format(price)

            except ValueError:
                pass

            # Replace the price value in the row with the cleaned-up value
            row[price_index] = price
            print(price)

            # Write the updated row to the output file
            writer.writerow(row)


def fix_source():
    with open('database/comparisons3.csv', 'r', newline='', encoding='utf-8-sig') as input_file, \
            open('database/comparisons4.csv', 'w', newline='', encoding='utf-8-sig') as output_file:
        # Create a CSV reader and writer
        reader = csv.reader(input_file)
        writer = csv.writer(output_file)

        # Find the index of the column containing the source value
        header = next(reader)
        source_index = header.index('source')

        # Write the header row to the output file
        writer.writerow(header)

        # Iterate over the rows in the input file
        for row in reader:
            # Get the source value from the row
            source = row[source_index]

            # Remove the 'products.csv' string from the source value
            source = source.replace('Products.csv', '').strip().capitalize()
            source = ' '.join(word.upper() if len(word) == 2 else word for word in source.split())
            # Replace the source value in the row with the cleaned-up value
            row[source_index] = source

            # Write the updated row to the output file
            writer.writerow(row)


def fix_image():
    with open('products.csv', 'r', newline='', encoding='utf-8-sig') as input_file, \
            open('products1.csv', 'w', newline='', encoding='utf-8-sig') as output_file:
        # Create a CSV reader and writer
        reader = csv.reader(input_file)
        writer = csv.writer(output_file)

        # Find the index of the column containing the source value
        header = next(reader)
        image_index = header.index('image')

        # Write the header row to the output file
        writer.writerow(header)
        rows = []
        # Iterate over the rows in the input file
        for row in reader:
            # Get the source value from the row
            image = row[image_index]
            url_parts = image.split("&")

            # loop through the parts and replace the width and height parameters
            for i in range(len(url_parts)):
                if "width" in url_parts[i]:
                    url_parts[i] = f"$width=500"
                elif "height" in url_parts[i]:
                    url_parts[i] = f"$height=500"

            # join the parts back together with '&' character
            new_url = "&".join(url_parts)
            row[image_index] = new_url
            rows.append(row)

            # Write the updated row to the output file
            writer.writerow(row)


def add_affiliate():
    with open('database/comparisons4.csv', 'r', encoding='utf-8-sig') as file:
        reader = csv.DictReader(file)
        rows = []
        for row in reader:
            if row['source'] == 'TP':
                row['link'] += '?awc=16300_1681378749_1cb50d302aa4bca1ead92b46b8458c6f'
            rows.append(row)

    with open('database/comparisons4.csv', 'w', newline='', encoding='utf-8-sig') as file:
        writer = csv.DictWriter(file, fieldnames=reader.fieldnames)
        writer.writeheader()
        writer.writerows(rows)

# fix_price()
# fix_source()
# fix_image()
# add_affiliate()