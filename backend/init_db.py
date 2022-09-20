import os
import json
import psycopg2


# Create a cursor and initialize psycopg
DB_CREDENTIALS_FILE = "db_secrets.json"
CUR_DIR = os.path.dirname(__file__)
CREDENTIALS_PATH = os.path.join(CUR_DIR, DB_CREDENTIALS_FILE)

with open(CREDENTIALS_PATH) as fp:
    credentials = json.loads(fp.read())

user = credentials["DB_USERNAME"]
host = credentials['HOST']
cluster = credentials["CLUSTER"]
password = credentials["DB_PASSWORD"]

connection = psycopg2.connect(user=user,
                              host=host,
                              port=26257,
                              database=f'{cluster}.defaultdb',
                              password=password,
                              sslmode='verify-full')

# Set to automatically commit each statement
connection.set_session(autocommit=True)

cursor = connection.cursor()

create_listings = """
CREATE TABLE listings2 (
    listing_id SERIAL PRIMARY KEY,
    listing_name STRING,
    address STRING,
    region STRING,
    description STRING,
    in_person_viewing STRING,
    online_viewing STRING,
    furnished STRING,
    posting_date STRING,
    price STRING,
    image_address STRING,
    lease_lengths STRING,
    poster_id STRING
)
"""

create_users = """
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    first_name STRING,
    last_name STRING,
    email STRING,
    password STRING,
    phone INT,
    region STRING
)
"""

create_likes = """
CREATE TABLE likes (
    user_id INT,
    listing_id INT,

    CONSTRAINT FK_user_id FOREIGN KEY(user_id)
        REFERENCES users(user_id),
    CONSTRAINT FK_listing_id FOREIGN KEY(listing_id)
        REFERENCES listings(listing_id)
)
"""


#cursor.execute(create_users)
cursor.execute(create_listings)
#cursor.execute(create_likes)