import csv
import os
import requests
import re

# Replace this with the path to your CSV file
csv_path = "database/products.csv"

# Create a folder to save the images
if not os.path.exists("images"):
    os.mkdir("images")

# Regular expression to match invalid characters in file names
invalid_chars = re.compile(r'[\\/*?:"<>|]')

with open('products2.csv', 'r', encoding='utf-8-sig') as infile, open('products3.csv', 'w', newline='', encoding='utf-8-sig') as outfile:
    reader = csv.DictReader(infile)
    writer = csv.DictWriter(outfile, fieldnames=reader.fieldnames)
    writer.writeheader()

    for row in reader:
        # Skip rows without an image URL
        if not row['image']:
            continue

        # Get the filename from the URL
        filename = row['image'].split("/")[-1]

        # Remove invalid characters from the filename
        filename = re.sub(invalid_chars, '_', filename)
        filename = filename.split("~")[0]

        # Download the image
        try:
            response = requests.get(row['image'])
            if response.status_code == 200:
                # Save the image to a file
                with open(f"images/products/{filename}.png", 'wb') as f:
                    f.write(response.content)
                    print(f"Saved {filename}")
            else:
                print(f"Failed to download {row['image']}")

            image = f"/images/products/{filename}.png"
        except Exception:
            image = row['image']




        row['image'] = image
        writer.writerow(row)