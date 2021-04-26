# Dependancies
from flask import Flask, render_template, Response, redirect
import os
import sqlite3
import pandas as pd
import json

# Create an instance of Flask
app = Flask(__name__)

# Use flask_pymongo to set up mongo connection
db_path = os.path.abspath('./static/data/sqlite.db')

@app.route("/")
def home():

    return render_template("index.html")

@app.route("/data")
def sqlquery():
    conn = sqlite3.connect(db_path)
 
    myData = pd.read_sql('''SELECT year, county, population, income, station_count FROM demographic INNER JOIN county ON county.county_id=demographic.county_id''', conn)
    return Response(myData.to_json(orient="records", date_format="iso"), mimetype="application/json")

    # myData = pd.read_sql('''SELECT * FROM demographic''', conn)
    # return Response(myData.to_json(orient="records", date_format="iso"), mimetype="application/json")


if __name__ == "__main__":
    app.run(debug=True)
