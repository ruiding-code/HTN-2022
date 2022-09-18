from flask import Flask, render_template, request

from datetime import datetime
import math
import os
import json

import psycopg2
from psycopg2 import extras as psycopg2extras

app = Flask(__name__)

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

cursor = connection.cursor(cursor_factory=psycopg2extras.RealDictCursor)


def dbCreateListing(listingName: str, address: str, region: str, inPersonViewing: str, onlineViewing: str,
                        postingDate: str, leaseLength: str, price: str,
                        description: str, furnished: str, image: str):
    cursor.execute(
        "INSERT INTO listings ( \
            listing_name, \
            address, \
            region, \
            description, \
            in_person_viewing, \
            online_viewing, \
            furnished, \
            posting_date, \
            price, \
            image_address, \
            lease_lengths \
        ) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s) RETURNING listing_id",
        (listingName, address, region, description, inPersonViewing, onlineViewing, furnished,
                        postingDate, price, image, leaseLength))
    result = cursor.fetchall()
    return result

def dbGetBrowsingListings(filters: dict, maxPrice: int = 100000, minPrice: int = 0, numBeds: int = 0, numBaths: int = 0, \
    region: str = "", sortMethod: str = "popularity"):

    if "maxPrice" in filters:
        maxPrice = filters["maxPrice"]
    if "minPrice" in filters:
        minPrice = filters["minPrice"]
    if "region" in filters:
        minPrice = filters["region"]
    if "sortMethod" in filters:
        sortMethod = filters["sortMethod"]

    cursor.execute(
        'SELECT * FROM listings WHERE price <= %s AND price >= %s AND region = %s',
        (maxPrice, minPrice, region))

    unfiltered_listings = cursor.fetchall()

    listings = unfiltered_listings

    return listings


@app.route("/")
def home():
    return {}

@app.route("/browse", methods=["GET"])
def getListings():

    args = request.args

    params = {}

    if "maxPrice" in args:
        params["maxPrice"] = args.get("maxPrice")
    if "minPrice" in args:
        params["minPrice"] = args.get("minPrice")
    if "region" in args:
        params["region"] = args.get("region")
    if "sortMethod" in args:
        params["sortMethod"] = args.get("sortMethod")

    listings = dbGetBrowsingListings(params)

    return {'listings': listings}

@app.route("/signup", methods=["POST"])


@app.route("/addlisting", methods=["POST"])
def addListing():

    content_type = request.headers.get('Content-Type')

    print(content_type)


    body = request.get_json()

    listingName = body["listingName"]
    address = body["address"]
    region = body["region"]
    inPersonViewing = bool(body["inPersonViewing"])
    onlineViewing = bool(body["onlineViewing"])
    postingDate = datetime.strptime(body["postingDate"], '%Y-%m-%d').date()
    leaseLength = body["leaseLength"]
    price = float(body["price"])
    description = body["description"]
    furnished = bool(body["furnished"])
    image = body["image"]

    listing_id = dbCreateListing(listingName, address, region, inPersonViewing, onlineViewing, postingDate, leaseLength, price, description, furnished, image)

    return {"listing_id": listing_id}



if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True)