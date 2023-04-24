import csv

# Open comparisons.csv and comparisons4.csv files
with open('comparisons.csv', 'r', encoding='utf-8-sig') as comparisons_file, \
        open('comparisons4.csv', 'a', newline='', encoding='utf-8-sig') as comparisons4_file:

    # Create a CSV reader for comparisons.csv and a CSV writer for comparisons4.csv
    comparisons_reader = csv.reader(comparisons_file)
    comparisons4_writer = csv.writer(comparisons4_file)

    # Get the existing rows from comparisons4.csv
    existing_rows = set((row[0], row[4]) for row in csv.reader(open('comparisons4.csv', 'r', encoding='utf-8-sig')))

    # Loop through the rows in comparisons.csv and append new rows to comparisons4.csv
    for row in comparisons_reader:
        # Check if the row already exists in comparisons4.csv
        if (row[0], row[4]) not in existing_rows:
            # Append the new row to comparisons4.csv
            comparisons4_writer.writerow(row)