import pandas as pd

# Read in the first set of data
df1 = pd.read_csv("bqProducts.csv")

# Read in the second set of data
df2 = pd.read_csv("tpProducts.csv")

# Identify the unique keys to use for matching (in this case, product name, price and category)
key = ["product", "price", "category"]

# Perform the matching using the 'merge' function
merged_df = pd.merge(df1, df2, on=key, how="outer", suffixes=('_x', '_y'))

# Check for any mismatches in the matched data
mismatch_df = merged_df[(merged_df["product_x"] != merged_df["product_y"]) |
                        (merged_df["price_x"] != merged_df["price_y"]) |
                        (merged_df["category_x"] != merged_df["category_y"])]

# Handle the mismatches (for example, by manually verifying the mismatched products)

# Combine the data into a single dataset
final_df = merged_df.drop(columns=["product_y", "price_y", "category_y"])
final_df = final_df.rename(columns={"product_x": "product", "price_x": "price", "category_x": "category"})

# Save the combined data to a file
final_df.to_csv("combined_data.csv", index=False)