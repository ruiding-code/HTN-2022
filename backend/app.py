from flask import Flask, render_template
from datetime import datetime
import math

app = Flask(__name__)

@app.route("/")
def home():
    return {}

@app.route("/browse", methods=["GET"])
def getBrowsingListings(maxPrice: int = math.inf, minPrice: int = 0, numBeds: int = None, numBaths: int = None, \
    region: str = None, sortMethod: str = "popularity"):

    

    """
    This app will show available rentals
    """

    return {'listings': ['listing1', 'listing2'], 'time': str(datetime.now().time())}


if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True)