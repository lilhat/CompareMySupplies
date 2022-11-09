import psycopg2


def to_database(*args):
    for i in args:
        insert_values = i

    hostname = 'localhost'
    database = 'products'
    username = 'postgres'
    pwd = 'Tahlil01!'
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
        cur.execute('DROP TABLE IF EXISTS bluecircle_cement_25')

        create_script = ''' CREATE TABLE IF NOT EXISTS bluecircle_cement_25 (
                                   id  BIGSERIAL NOT NULL PRIMARY KEY,
                                   supplier_name VARCHAR(50) NOT NULL,
                                   price   DECIMAL(10,2) NOT NULL,
                                   shipping    DECIMAL(10,2) NOT NULL,
                                   total   DECIMAL(10,2) NOT NULL) '''
        cur.execute(create_script)

        insert_script = '''INSERT INTO bluecircle_cement_25 (supplier_name, price, shipping, total) VALUES (%s, 
           %s, %s, %s) '''
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

