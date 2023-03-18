import pandas as pd

def update_products():
    # Read the first CSV file and extract the relevant columns
    df1 = pd.read_csv('bq.csv')
    df1 = df1[['name', 'price', 'image']]

    # Read the second CSV file and extract the relevant columns
    df2 = pd.read_csv('products.csv')
    df3 = df2.copy()
    df2 = df2[['name', 'price', 'image']]

    # Remove duplicates from df1
    df1.drop_duplicates(subset=['name'], keep='first', inplace=True)

    # Merge the two dataframes on the link column
    merged_df = pd.merge(df2, df1, on='name', how='left')

    # Replace missing values in the price and image columns with the values from the first dataframe
    merged_df['price_x'] = merged_df['price_y'].fillna(merged_df['price_x'])
    merged_df['image_x'] = merged_df['image_y'].fillna(merged_df['image_x'])

    # Drop the price_y and image_y columns, which were duplicates of the price and image columns from the first dataframe
    merged_df.drop(['price_y', 'image_y'], axis=1, inplace=True)

    # Rename the price_x and image_x columns to price and image, respectively
    merged_df.rename(columns={'price_x': 'price', 'image_x': 'image'}, inplace=True)

    # Write the merged dataframe to a new CSV file
    df3.update(merged_df)
    df3.to_csv('updated.csv', index=False)

def update_comparisons():
    # Read the first CSV file and extract the link and price columns
    df1 = pd.read_csv('file1.csv')
    df1 = df1[['link', 'price']]
    # Read the second CSV file and extract the link and price columns
    df2 = pd.read_csv('file2.csv')
    df3 = df2.copy()
    df2 = df2[['link', 'price']]

    # Remove duplicates from df1
    df1.drop_duplicates(subset=['name'], keep='first', inplace=True)

    # Merge the two dataframes on the link column
    merged_df = pd.merge(df2, df1, on='link', how='left')

    # Replace missing values in the price column with the values from the first dataframe
    merged_df['price_x'] = merged_df['price_y'].fillna(merged_df['price_x'])

    # Drop the price_y column, which was a duplicate of the price column from the first dataframe
    merged_df.drop(['price_y'], axis=1, inplace=True)

    # Rename the price_x column to price
    merged_df.rename(columns={'price_x': 'price'}, inplace=True)

    # Write the merged dataframe to a new CSV file
    df3.update(merged_df)
    df3.to_csv('updated.csv', index=False)

# update_products()
# update_comparisons()