import csv
import os


def combine_data(folder):
    # Create a list of CSV files in the current directory
    csv_files = [f for f in os.listdir(f'{folder}') if f.endswith('.csv')]

    # Open the output file and write the header row
    with open(os.path.join(folder, f'{folder}.csv'), 'w', newline='', encoding='utf-8-sig') as outfile:
        writer = csv.writer(outfile)
        header_row = next(csv.reader(open(f'{folder}/{csv_files[0]}')))
        writer.writerow(header_row + ['source'])

        # Iterate over each CSV file
        for csv_file in csv_files:
            # Extract the sub_category from the filename
            sub_category = os.path.splitext(csv_file)[0]

            # Open the CSV file and append each row to the output file with the sub_category column added
            with open(f'{folder}/{csv_file}', 'r', newline='', encoding='utf-8-sig') as infile:
                reader = csv.reader(infile)
                next(reader)  # Skip header row

                # Check if the CSV file is not empty before trying to read from it
                try:
                    first_row = next(reader)
                except StopIteration:
                    continue

                writer.writerow(first_row + [sub_category])

                for row in reader:
                    writer.writerow(row + [sub_category])


# Call the function with the folder name
# combine_data('tools_equipment')
# combine_data('tiling_flooring')
# combine_data('painting_decorating')
# combine_data('outdoor_garden')
# combine_data('lighting_electrical')
# combine_data('kitchen_bathroom')
# combine_data('home_furniture')
# combine_data('heating_plumbing')
# combine_data('building_hardware')
combine_data('products')