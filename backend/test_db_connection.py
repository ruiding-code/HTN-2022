import os
import psycopg2
import json

DB_CREDENTIALS_FILE = "db_secrets.json"
CUR_DIR = os.path.dirname(__file__)
CREDENTIALS_PATH = os.path.join(CUR_DIR, DB_CREDENTIALS_FILE)

with open(CREDENTIALS_PATH) as fp:
    credentials = json.loads(fp.read())

print(credentials)

user = credentials["DB_USERNAME"]
host = credentials['HOST']
cluster = credentials["CLUSTER"]
password = credentials["DB_PASSWORD"]

# Test Psycopg2
conn = psycopg2.connect(user=user,
                 host=host,
                 port=26257,
                 database=f'{cluster}.defaultdb',
                 password=password, sslmode='verify-full')
with conn.cursor() as cur:
    cur.execute("SELECT now()")
    res = cur.fetchall()
    conn.commit()
    print(res)
