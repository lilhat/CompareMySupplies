# CompareMySupplies
A project consisting of a Python webscraper that gathers building supplies comparison data, runs this through a Python matching algorithm and some other scripts to sort/format the data, inputs it into a mySQL database, which is then displayed onto a full price comparison website created using HTML5, CSS, JavaScript and PHP.

# Installation
The execution is split into five sections, a guide to execute each of these can be seen below.

## Web Scraper
Located inside "\web_scraper" <br>
Please note that the API is currently limited to only 1000 credits, which is equivalent to 1000 regular requests or 200 js rendered requests. <br>
This is for testing purposes only, and the full data sets can be seen inside of the folder "\web_scraper\data"

### Prerequisites
Python libraries/modules:
- requests
- bs4
- re
- json
- pandas
- concurrent.futures

### Steps
1. Run callScrapers.py to call each supplier scraper serially (This may take up to 10 hours)
2. Verify each supplier CSV file has been created and filled
3. If any files are missing, run the relevant scraper again


## Product Matcher
Located inside ".\productMatcher.py" <br>
The product file used for input here should be created manually, using the headers from the scraping output (Note: product header changed to name). <br>
For logical reasons we have used the bqProducts.csv file as the baseline product list.

### Prerequisites
Python libraries/modules:
- os
- re
- csv
- rapidfuzz

### Steps
1. Manually define a products.csv file
2. Run productMatcher.py


## Data Manipulation
Located inside main directory <br>
Various files for formatting and fixing the data.

### Prerequisites
Python libraries/modules:
- requests
- re
- os
- csv
- spacy
- string
- heapq

spaCy pipeline "en_core_web_lg" must also be downloaded and installed

### Steps
1. Run fixData.py on both products.csv and comparisons.csv
2. Run sortData.py on products.csv
3. Run combineData.py on subcategory CSV files to create main category files
4. Place main category files into a folder called products
5. Run combineData.py on main category CSV files to create products.csv once again
6. Manually change products.csv headers to have sub_category and main_category.
6. Run summariseDescription.py on products.csv
7. Run downloadImages.py on products.csv


## Adding/Updating products
Located inside main directory <br>
Files to add new products and update current prices.

### Prerequisites
Python libraries/modules:
- csv
- pandas
- rapidfuzz


### Steps (Update Prices)
1. Once the updated prices are scraped from supplier, use this file as input into updateData.py 
2. Run updateData.py with functions to update products list and comparisons list

### Steps (Add Products)
1. Define which supplier file to add products from inside addSupplier.py
2. Run addSupplier.py with functions to add the supplier and label the categories
3. Run steps from Product Matcher and Data Manipulation again (excluding the sortData.py and combineData.py steps)


## Website
Located inside "\public" <br>
Uploading the data into database, and possibly running the website on a local server.

### Prerequisites
Libraries/Plugins:
- MDBootstrap 5 (Provided)
- Bootstrap 5 (Provided)
- Owl Carousel 2 (Provided)

Should have a mySQL database set up to store product files. <br>
If desired, can use xampp with Apache to run website locally.

### Steps (Database)
- Create products and comparisons table inside of mySQL database, using structure described in documentation (see Appendix J inside Dissertation.docx).
- Import products.csv and comparisons.csv into appropriate tables
- Adjust connection.php file to use own database configuration

### Steps (Website)
- Place public folder contents into "\xampp\htdocs"
- Start Apache server
- Go to localhost:3000/home to see website <br>
OR
- Visit https://comparemysupplies.com/ to see live website




