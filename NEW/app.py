from flask import Flask , jsonify, render_template
import pymongo
from bson.json_util import dumps

app = Flask(__name__)

# setup mongo connection
conn = "mongodb://localhost:27017"
client = pymongo.MongoClient(conn)

# connect to mongo db and collection
db = client.restaurant_db
collection = db.nyc_data


@app.route("/")
def index():
    # write a statement that finds all the items in the db and sets it to a variable
    restaurants = list(collection.find())
    print(restaurants)

    # render an index.html template and pass it the data you retrieved from the database
    return render_template("index23.html", restaurants = restaurants)
    # return jsonify(restaurants)

@app.route("/getData")
def getData():
    restaurants = list(collection.find())

    return jsonify(dumps(restaurants))

if __name__ == "__main__":
    app.run(debug=True)