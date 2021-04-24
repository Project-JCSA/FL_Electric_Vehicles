# Import modules needed
import pandas as pd
import sqlite3
from sqlite3 import Error
import os
import requests 

# Identify database path
db_path = os.path.abspath('./static/data/sqlite.db')


# ==== Clean Florida EV Registrations data =====
try:
    # Read csv file into dataframe
    evreg_path = "static/data/fl_ev_registrations_public.csv"
    evreg_df = pd.read_csv(evreg_path, encoding="utf-8")

    # Remove unnecessary columns
    evreg_df = evreg_df[['Registration Valid Date','County','Vehicle Name']]

    #Rename columns
    evreg_df = evreg_df.rename(columns={'Registration Valid Date':'report_date'
                            ,'County':'county'
                            ,'Vehicle Name':'vehicle_name'
                            })

    # ----- Seperate Vehicle Make and Model ----- #
    # Create list of unique vehicle makes & models
    vehicles_ls = evreg_df['vehicle_name'].unique()

    # Create placeholder dataframe
    vehicles_df = pd.DataFrame({})

    # Loop through list, seperating make and model
    for vehicle in vehicles_ls:        
        # Find Make of vehicle
        split_results = vehicle.split(' ')
        make = split_results[0]
        # fix makes with multimple words in the name
        if make == 'Land':
            make += ' '+split_results[1]
        # Find model of vehicle
        model = vehicle[len(make)+1:]
        # Append to vehicle dataframe
        vehicles_df = vehicles_df.append({'vehicle_name':vehicle,'make':make,'model':model}, ignore_index=True)


    # ----- Census Data ----- #
    # 2018 Census Population URL
    pop_2018_url = "https://api.census.gov/data/2018/pep/population?get=DATE_DESC,POP,GEONAME,STATE&for=county:*"

    #Request data in json and store variable
    pop_2018_response = requests.get(pop_2018_url)
    pop_2018_data = pop_2018_response.json()

    # Create list to store values for the census data
    date_desc = []
    pop = []
    name = []
    state = []
    county = []

    # Loop through data and append list
    for items in pop_2018_data:
        date_desc.append(items[0])
        pop.append(items[1])
        name.append(items[2])
        state.append(items[3])
        county.append(items[4])

    # Create dataframe from list
    pop_2018_df = pd.DataFrame({"year":date_desc, "population":pop, "County & State":name, 
                            "State ID":state, "County ID":county})

    # Clean up Date Column and Split the County and State
    pop_2018_df["year"] = pop_2018_df["year"].str[4:8]
    pop_2018_df["county"] = pop_2018_df["County & State"].str.split(' ').str[0]

    # Grab only Florida Counties and Drop unneccessary Columns
    fl_2018_pop = pop_2018_df[pop_2018_df["State ID"] == "12"]
    fl_2018_pop = fl_2018_pop.drop(columns=['County & State', 'State ID', 'County ID'])
    fl_2018_pop = fl_2018_pop.set_index(['county'])

    # Median Household Income
    mhi_2018_url = "https://api.census.gov/data/timeseries/poverty/saipe?get=NAME,SAEMHI_LB90,SAEMHI_MOE,SAEMHI_PT&for=county:*&YEAR=2018"

    #Request data in json and store variable
    mhi_2018_response = requests.get(mhi_2018_url)
    mhi_2018_data = mhi_2018_response.json()

    # Create list to store values for the census data
    county = []
    mhi_90 = [] #Median Household Income Lower Bound for 90% Confidence Interval
    # mhi_moe = [] #Median Household Income Margin of Error
    # mhi_est = [] #Median Household Income Estimate
    year = []
    state = []
    countyID = []

    # Loop through data and append list
    for items in mhi_2018_data:
        county.append(items[0])
        mhi_90.append(items[1])
        # mhi_moe.append(items[2])
        # mhi_est.append(items[3])
        year.append(items[4])
        state.append(items[5])
        countyID.append(items[6])

    # Create dataframe from list
    mhi_2018_df = pd.DataFrame({"county":county, "year":year, "income": mhi_90, "State ID":state})

    mhi_2018_df["county"] = mhi_2018_df["county"].str.split(' ').str[0]

    # Grab only Florida Counties and Drop unneccessary Columns
    fl_2018_mhi = mhi_2018_df[mhi_2018_df["State ID"] == "12"]
    fl_2018_mhi = fl_2018_mhi.drop(columns=['State ID'])
    fl_2018_mhi = fl_2018_mhi.set_index(['county'])
    income_2018 = fl_2018_mhi['income']

    # Combine 2018 Data
    fl_2018_demo = fl_2018_pop
    fl_2018_demo['income'] = income_2018

    # 2019 Census Population URL
    pop_2019_url = "https://api.census.gov/data/2019/pep/population?get=DATE_DESC,POP,NAME,STATE&for=county:*"

    #Request data in json and store variable
    pop_2019_response = requests.get(pop_2019_url)
    pop_2019_data = pop_2019_response.json()

    # Create list to store values for the census data
    date_desc = []
    pop = []
    name = []
    state = []
    county = []

    # Loop through data and append list
    for items in pop_2019_data:
        date_desc.append(items[0])
        pop.append(items[1])
        name.append(items[2])
        state.append(items[3])
        county.append(items[4])

    # Create dataframe from list
    pop_2019_df = pd.DataFrame({"year":date_desc, "population":pop, "County & State":name, 
                            "State ID":state, "County ID":county})

    # Clean up Date Column and Split the County and State
    pop_2019_df["year"] = pop_2019_df["year"].str[4:8]
    pop_2019_df["county"] = pop_2019_df["County & State"].str.split(' ').str[0]

    # Grab only Florida Counties and Drop unneccessary Columns
    fl_2019_pop = pop_2019_df[pop_2019_df["State ID"] == "12"]
    fl_2019_pop = fl_2019_pop.drop(columns=['County & State', 'State ID', 'County ID'])
    fl_2019_pop = fl_2019_pop.set_index(['county'])
    fl_2019_pop = fl_2019_pop.sort_index()

    # Median Household Income
    mhi_2019_url = "https://api.census.gov/data/timeseries/poverty/saipe?get=NAME,SAEMHI_LB90,SAEMHI_MOE,SAEMHI_PT&for=county:*&YEAR=2019"

    #Request data in json and store variable
    mhi_2019_response = requests.get(mhi_2019_url)
    mhi_2019_data = mhi_2019_response.json()

    # Create list to store values for the census data
    county = []
    mhi_90 = [] #Median Household Income Lower Bound for 90% Confidence Interval
    # mhi_moe = [] #Median Household Income Margin of Error
    # mhi_est = [] #Median Household Income Estimate
    year = []
    state = []
    countyID = []

    # Loop through data and append list
    for items in mhi_2019_data:
        county.append(items[0])
        mhi_90.append(items[1])
        # mhi_moe.append(items[2])
        # mhi_est.append(items[3])
        year.append(items[4])
        state.append(items[5])
        countyID.append(items[6])

    # Create dataframe from list
    mhi_2019_df = pd.DataFrame({"county":county, "year":year, "income": mhi_90, "State ID":state})
    mhi_2019_df["county"] = mhi_2019_df["county"].str.split(' ').str[0]

    # Grab only Florida Counties and Drop unneccessary Columns
    fl_2019_mhi = mhi_2019_df[mhi_2019_df["State ID"] == "12"]
    fl_2019_mhi = fl_2019_mhi.drop(columns=['State ID'])
    fl_2019_mhi = fl_2019_mhi.set_index(['county'])
    fl_2019_mhi = fl_2019_mhi.sort_index()
    income_2019 = fl_2019_mhi['income']

    # Combine 2019 Data
    fl_2019_demo = fl_2019_pop
    fl_2019_demo['income'] = income_2019

    # Read in CSV
    fl_2020_pop = pd.read_excel("static/data/fl_2020_pop_estimates-Revised-v2.xlsx", header=2)

    # Drop all rows with NA
    fl_2020_pop = fl_2020_pop.dropna()

    # Drop the city rows and keep just county totals
    fl_2020_pop = fl_2020_pop[fl_2020_pop.Area.str.contains('County')]

    # Create new Couty Column by spliting Area
    fl_2020_pop["county"] = fl_2020_pop["Area"].str.split(' ').str[0]

    # Drop unnecessary columns, rename Headers, set index to county
    fl_2020_pop = fl_2020_pop.drop(columns = ['Area','Total Change', 'Census', 'Inmates', 'Inmates.1'])
    fl_2020_pop = fl_2020_pop.rename(columns = {'Population Estimate':'population'})
    fl_2020_pop = fl_2020_pop.set_index(['county'])

    # Add year column and reorder columns
    fl_2020_pop['year'] = "2020"
    fl_2020_pop = fl_2020_pop[['year', 'population']]

    # Concatenate 2018, 2019, & 2020 data
    fl_combined_demo = pd.concat([fl_2018_demo, fl_2019_demo,fl_2020_pop])
    fl_combined_demo = fl_combined_demo.sort_index()
    fl_combined_demo = fl_combined_demo.reset_index()


    # ----- Charging Station Data ----- #
    #path to datafiles
    stat_url =  "static/data/fl_ev_stations.csv"
    stat_df = pd.read_csv(stat_url)

    #remove unecessary columns
    stat_df = stat_df[['Fuel Type Code', 'Station Name', 'Street Address','Latitude', 'Longitude', 'Open Date', 'ZIP']]

    #drop rows with empty Values (NaN)
    stat_df = stat_df.dropna()

    #change datatype on zip column & Open Date column
    stat_df['ZIP'] = stat_df['ZIP'].astype(int)
    stat_df['Open Date'] =pd.to_datetime(stat_df['Open Date'])

    #import Zip code to county Date to merge it with main DF
    zip_df = "static/data/ZIP-COUNTY-FIPS_2018-03.csv"
    zip_df = pd.read_csv(zip_df)

    #remove unecessary columns
    zip_df = zip_df[['ZIP', 'COUNTYNAME']]

    #combine Stations & counties Df into one 
    combined_df = pd.merge(stat_df, zip_df, on='ZIP')
    combined_df.sort_values('COUNTYNAME')

    #create a shorter datafram for the last two years of stations
    combined_df = combined_df[(combined_df['Open Date']>= "2018-01-01") & (combined_df['Open Date']<= "2020-12-31")]
    two_years_df = combined_df.sort_values('COUNTYNAME')
    two_years_df = two_years_df.rename(columns={'COUNTYNAME':'county'})

    # Find station count per year per county
    county_stations_df = pd.DataFrame()
    year_ls = [2018,2019,2020]
    for year in year_ls:
        start_date = f'{year}-01-01'
        end_date = f'{year}-12-31'

        df = two_years_df[(two_years_df['Open Date']>= start_date) & (two_years_df['Open Date']<= end_date)]
        df = df.groupby('county')['Station Name'].count().reset_index().rename(columns={'Station Name':'station_count'})
        df['year'] = year
        
        county_stations_df = county_stations_df.append(df, ignore_index=True)

    county_stations_df['county'] = county_stations_df['county'].map(lambda x: x.rstrip(' County'))


    # ----- Prepare data frames for SQLite database ----- #
    # County Table
    clean_county_df = pd.DataFrame(evreg_df['county'].unique(),columns=['county'])
    clean_county_df = clean_county_df.reset_index()
    clean_county_df = clean_county_df.rename(columns={'index':'county_id'})

    # Vehicle Table
    clean_vehicles_df = vehicles_df.reset_index()
    clean_vehicles_df = clean_vehicles_df.rename(columns={'index':'vehicle_id'})
    clean_vehicles_df = clean_vehicles_df[['vehicle_id','make','model','vehicle_name']]

    # Registration Table
    evreg_df2 = evreg_df.merge(clean_vehicles_df,left_on='vehicle_name', right_on='vehicle_name')
    evreg_df2 = evreg_df2[['vehicle_id','report_date','county']]
    evreg_df2 = evreg_df2.merge(clean_county_df,left_on='county', right_on='county')
    evreg_df2 = evreg_df2[['vehicle_id','county_id','report_date']]
    evreg_df2['reg_count'] = 1
    evreg_df3 = evreg_df2.groupby(['vehicle_id','county_id','report_date']).sum()
    clean_evreg_df = evreg_df3.reset_index()

    # Demographic Table
    clean_demo_df = fl_combined_demo.merge(clean_county_df, how='left', on='county')
    clean_demo_df = clean_demo_df.astype({'year': 'int','population':'int','income':'float'})
    clean_demo_df = clean_demo_df.merge(county_stations_df, on=['county','year'])
    clean_demo_df = clean_demo_df[['county_id','year','population','income','station_count']]

    clean_vehicles_df = clean_vehicles_df[['vehicle_id','make','model']]

except Error as e:
    print(e)



# ==== Create SQLite Database =====
conn = None
try:
    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()

    # Drop tables if they exist
    cursor.execute("DROP TABLE IF EXISTS county")
    cursor.execute("DROP TABLE IF EXISTS demographic")
    cursor.execute("DROP TABLE IF EXISTS vehicle")
    cursor.execute("DROP TABLE IF EXISTS registration")

    # Create tables
    clean_county_df.to_sql('county', conn, if_exists='replace', index=False)
    clean_vehicles_df.to_sql('vehicle', conn, if_exists='replace', index=False)
    clean_evreg_df.to_sql('registration', conn, if_exists='replace', index=False)
    clean_demo_df.to_sql('demographic', conn, if_exists='replace', index=False)

    # Commit the changes
    conn.commit()

    # print(pd.read_sql('''SELECT c.county, v.make, v.model, r.report_date, r.reg_count
    #                     FROM county c
    #                     INNER JOIN registration r ON c.county_id = r.county_id
    #                     INNER JOIN vehicle v ON v.vehicle_id = r.vehicle_id
    #                     ORDER BY r.reg_count DESC''', conn))

    # print(pd.read_sql('''SELECT * FROM demographic''', conn))
    # print(f'SQLite version: {sqlite3.version}')
    print(f'SQLite database created successfully.')
    
except Error as e:
    print(e)
finally:
    if conn:
        conn.close()


