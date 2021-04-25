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
conn = sqlite3.connect(db_path)
# cursor = conn.cursor()

# Route to render index.html template using data from Mongo
@app.route("/")
def home():
    myData = pd.read_sql('''SELECT * FROM demographic''', conn).to_json()
    print(myData)
    return render_template("text.index", myData=myData)

if __name__ == "__main__":
    app.run(debug=True)

