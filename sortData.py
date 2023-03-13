import csv

# Define the categories to keep
def sort_data(target_categories, filename):

    # define target categories as a list of lowercase strings


    # open the input file and create a new output file
    with open('database\\products.csv', 'r', newline='', encoding='utf-8-sig') as file:
        reader = csv.DictReader(file)
        rows_to_keep = []
        for row in reader:
            for category in target_categories:
                if category.lower() in row['category'].lower():
                    rows_to_keep.append(row)
                    break

    # Now you can do something with the filtered rows, e.g. write to another CSV file
    with open(f'database\\{filename}.csv', 'w', newline='', encoding='utf-8-sig') as file:
        writer = csv.DictWriter(file, fieldnames=reader.fieldnames)
        writer.writeheader()
        for row in rows_to_keep:
            writer.writerow(row)



building_supplies = [
    'Aggregates & sand',
    'Bricks & blocks',
    'Chemicals, concrete & cement',
    'Additives & chemicals',
    'Guttering & drainage',
    'Insulation & damp proofing',
    'Plasterboard',
    'Plastering supplies',
    'Cornices & coving',
    'Roofing supplies',
    "Builder's metalwork",
    'Sealants']

timber_sheet = [
    'Architrave',
    'Constructional Timber',
    'Decorate Mouldings',
    'Furniture Boards',
    'Scaffold Board',
    'Sheet Materials',
    'Stairs & Stair Parts']

sort_data(building_supplies, 'building_supplies')
sort_data(timber_sheet, 'timber_sheet')
