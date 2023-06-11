import psycopg2


# Function that takes in a product name and all its comparisons as a tuple then enters it into a postgresql database
def to_database(name, *args):
    for i in args:
        insert_values = i

    hostname = 'localhost'
    database = 'products'
    username = 'postgres'
    pwd = 'admin123'
    port_id = 5432
    conn = None
    cur = None

    try:
        conn = psycopg2.connect(
            host=hostname,
            dbname=database,
            user=username,
            password=pwd,
            port=port_id)

        cur = conn.cursor()
        cur.execute('DROP TABLE IF EXISTS ' + name)

        create_script = ''' CREATE TABLE IF NOT EXISTS ''' + name + ''' (
                                   id  BIGSERIAL NOT NULL PRIMARY KEY,
                                   product_name VARCHAR(500) NOT NULL,
                                   supplier_name VARCHAR(50) NOT NULL,
                                   price DECIMAL(10,2) NOT NULL,
                                   link VARCHAR(5000) NOT NULL) '''
        cur.execute(create_script)

        insert_script = '''INSERT INTO ''' + name + ''' (product_name, supplier_name, price, link) VALUES (%s, %s,
                                                                                                            %s, %s) '''
        for record in insert_values:
            cur.execute(insert_script, record)

        conn.commit()

    except Exception as error:
        print(error)
    finally:
        if cur is not None:
            cur.close()
        if conn is not None:
            conn.close()


def to_product_database(name, *args):
    for i in args:
        insert_values = i

    hostname = 'localhost'
    database = 'products'
    username = 'postgres'
    pwd = 'admin123'
    port_id = 5432
    conn = None
    cur = None

    try:
        conn = psycopg2.connect(
            host=hostname,
            dbname=database,
            user=username,
            password=pwd,
            port=port_id)

        cur = conn.cursor()
        cur.execute('DROP TABLE IF EXISTS ' + name)

        create_script = ''' CREATE TABLE IF NOT EXISTS ''' + name + ''' (
                                   id  BIGSERIAL NOT NULL PRIMARY KEY,
                                   product_code VARCHAR(500) NOT NULL,
                                   product_name VARCHAR(500) NOT NULL,
                                   category VARCHAR(500) NOT NULL) '''
        cur.execute(create_script)

        insert_script = '''INSERT INTO ''' + name + ''' (product_code, product_name, category) VALUES (%s, %s, %s) '''
        for record in insert_values:
            cur.execute(insert_script, record)

        conn.commit()

    except Exception as error:
        print(error)
    finally:
        if cur is not None:
            cur.close()
        if conn is not None:
            conn.close()
