from flask import Flask, render_template
from datetime import datetime

app = Flask(__name__)

@app.route("/", methods=["GET"])
def hello():
    return render_template("index.html")

@app.route("/home", methods=["GET", "POST"])
def get_listings():

    """
    This app will show available rentals
    """

    return {'listings': ['listing1', 'listing2'], 'time': str(datetime.now().time())}


if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True)