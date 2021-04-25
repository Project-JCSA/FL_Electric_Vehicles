# Dependancies
from flask import Flask, render_template, redirect
import os
import sqlite3
import pandas as pd
import json

# Create an instance of Flask
app = Flask(__name__)

# Use flask_pymongo to set up mongo connection
db_path = os.path.abspath('./static/data/sqlite.db')


# Code for testing database connection
conn = sqlite3.connect(db_path)
cursor = conn.cursor()
cursor.execute('SELECT * FROM demographic')
myData = cursor.fetchall()
conn.close()
print(myData)

# Route to render index.html template using data from Mongo
@app.route("/")
def home():
    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()
    # myData = pd.read_sql('''SELECT * FROM demographic''', conn).to_json()
    # myData = pd.read_sql('''SELECT * FROM demographic''', conn)
    cursor.execute('SELECT * FROM demographic')
    myData = cursor.fetchall()

    print(myData)

    if conn:
        conn.close()

    return render_template("index.html", myData=myData)

if __name__ == "__main__":
    app.run(debug=True)

