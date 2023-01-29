import csv
from fuzzywuzzy import fuzz


# function to match rows from two csv files
def match_rows(file1, file2):
    matches = []
    matches2 = []
    # read csv files
    with open(file1, 'r', encoding='utf-8') as f1, open(file2, 'r', encoding='utf-8') as f2:
        csv1 = csv.DictReader(f1)
        csv2 = csv.DictReader(f2)
        # compare rows from csv1 to csv2
        for row1 in csv1:
            f2.seek(0)
            for row2 in csv2:
                output = fuzz.token_set_ratio(row1['product'], row2['product'])
                print(output)
                bool = output > 75
                if bool:
                    matches.append(row1)
                    matches2.append(row2)
                    print(row1)
                    print(row2)
                    break

    return matches, matches2


# write matches to new csv file
def write_csv(matches, matches2, new_file):
    fieldnames = ['product', 'price', 'category', 'link', 'image', 'description']
    with open(new_file, 'w') as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(matches)
        writer.writerows(matches2)


# test function
matches, matches2 = match_rows('bqProducts.csv', 'bradfordsProducts.csv')
write_csv(matches, matches2, 'matched_rows.csv')

# string1 = "Blue Circle Multipurpose Ready mixed Concrete, 20kg Bag"
# string2 = "Blue Circle Multi Purpose Concrete Large"
# ratio = fuzz.token_set_ratio(string1, string2)
# print(ratio)