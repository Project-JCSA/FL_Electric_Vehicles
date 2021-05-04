# Dependancies
from flask import Flask, render_template, Response, redirect
import os
import sqlite3
import pandas as pd
import json

# Create an instance of Flask
app = Flask(__name__)

# Setup connection to SQLite DB
db_path = os.path.abspath('./static/data/sqlite.db')

@app.route("/")
def home():

    return render_template("index.html")

@app.route("/data")
def sqlquery():
    conn = sqlite3.connect(db_path)
 
    myData = pd.read_sql('''SELECT y.year, -1 as county_id, "All Counties" as county
                                , IFNULL(d.population,0) as population
                                , IFNULL(d.income,0) as income
                                , IFNULL(station_count,0) as station_count
                                , IFNULL(cr.county_reg_count,0) as county_reg_count
                                , IFNULL(v.make,"N/A") as make
                                , IFNULL(v.model,"N/A") as model
                                , IFNULL(r.reg_count,0) as reg_count
                            FROM (SELECT 2018 AS year UNION SELECT 2019 AS year UNION SELECT 2020 AS year) y
                            LEFT JOIN (SELECT year, SUM(population) AS population, AVG(income) AS income
                                            FROM demographic
                                            GROUP BY year
                                        ) d on y.year = d.year
                            LEFT JOIN (SELECT year, vehicle_id, SUM(reg_count) as reg_count
                                            FROM registration
                                            GROUP BY year, vehicle_id
                                        ) r on y.year = r.year
                            LEFT JOIN vehicle v on r.vehicle_id = v.vehicle_id
                            LEFT JOIN (SELECT year, SUM(reg_count) as county_reg_count
                                            FROM registration
                                            GROUP BY year
                                        ) cr on y.year = cr.year
                            LEFT JOIN (SELECT year, COUNT(station_id) as station_count
                                            FROM station
                                            GROUP BY year
                                        ) s on y.year = s.year
                        UNION
                        SELECT y.year, c.county_id, c.county
                                , IFNULL(d.population,0) as population
                                , IFNULL(d.income,0) as income
                                , IFNULL(station_count,0) as station_count
                                , IFNULL(cr.county_reg_count,0) as county_reg_count
                                , IFNULL(v.make,"N/A") as make
                                , IFNULL(v.model,"N/A") as model
                                , IFNULL(r.reg_count,0) as reg_count
                            FROM county c
                            CROSS JOIN (SELECT 2018 AS year UNION SELECT 2019 AS year UNION SELECT 2020 AS year) y
                            LEFT JOIN demographic d on c.county_id = d.county_id and y.year = d.year
                            LEFT JOIN registration r on c.county_id = r.county_id and y.year = r.year
                            LEFT JOIN vehicle v on r.vehicle_id = v.vehicle_id
                            LEFT JOIN (SELECT county_id, year, SUM(reg_count) as county_reg_count
                                            FROM registration
                                            GROUP BY county_id, year
                                        ) cr on c.county_id = cr.county_id and y.year = cr.year
                            LEFT JOIN (SELECT county_id, year, COUNT(station_id) as station_count
                                            FROM station
                                            GROUP BY county_id, year
                                        ) s on c.county_id = s.county_id and y.year = s.year
                            ORDER BY county_id
                        ''', conn)
    if conn:
        conn.close()

    return Response(myData.to_json(orient="records", date_format="iso"), mimetype="application/json")

@app.route("/stations")
def stations_sqlquery():
    conn = sqlite3.connect(db_path)

    myData = pd.read_sql('''SELECT s.year, c.county_id, c.county, s.station, s.latitude, s.longitude, s.street_address, s.open_date
                            FROM station s
                            LEFT JOIN county c on s.county_id = c.county_id
                            ORDER BY s.year, c.county_id
                            ''', conn)                            
    if conn:
        conn.close()

    return Response(myData.to_json(orient="records", date_format="iso"), mimetype="application/json")

if __name__ == "__main__":
    app.run(debug=True)
