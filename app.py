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
 
    myData = pd.read_sql('''SELECT y.year, c.county_id, c.county
                                   , d.population, d.income, d.station_count
                                   , cr.county_reg_count
                                   , v.make, v.model, r.reg_count
                                FROM county c
                                CROSS JOIN (SELECT 2018 AS year UNION SELECT 2019 AS year UNION SELECT 2020 AS year) y
                                LEFT JOIN demographic d on d.county_id = c.county_id and d.year = y.year
                                LEFT JOIN registration r on r.county_id = c.county_id and r.year = y.year
                                LEFT JOIN vehicle v on v.vehicle_id = r.vehicle_id
                                LEFT JOIN (SELECT county_id, year, sum(reg_count) as county_reg_count
                                                FROM registration
                                                GROUP BY county_id, year
                                            ) cr on cr.county_id = c.county_id and cr.year = y.year
                                ORDER BY y.year, c.county_id
                                ''', conn)
    return Response(myData.to_json(orient="records", date_format="iso"), mimetype="application/json")

    # myData = pd.read_sql('''SELECT * FROM demographic''', conn)
    # return Response(myData.to_json(orient="records", date_format="iso"), mimetype="application/json")


if __name__ == "__main__":
    app.run(debug=True)
