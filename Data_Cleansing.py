# Import modules needed
import pandas as pd
import sqlite3
from sqlite3 import Error
import os
import requests 

# Identify database path
db_path = os.path.abspath('./static/data/sqlite.db')

# Florida counties
county_ls = ['Alachua','Baker','Bay','Bradford','Brevard','Broward','Calhoun','Charlotte','Citrus','Clay'
            ,'Collier','Columbia','DeSoto','Dixie','Duval','Escambia','Flagler','Franklin','Gadsden'
            ,'Gilchrist','Glades','Gulf','Hamilton','Hardee','Hendry','Hernando','Highlands','Hillsborough'
            ,'Holmes','Indian River','Jackson','Jefferson','Lafayette','Lake','Lee','Leon','Levy','Liberty'
            ,'Madison','Manatee','Marion','Martin','Miami-Dade','Monroe','Nassau','Okaloosa','Okeechobee'
            ,'Orange','Osceola','Palm Beach','Pasco','Pinellas','Polk','Putnam','Santa Rosa','Sarasota'
            ,'Seminole','St. Johns','St. Lucie','Sumter','Suwannee','Taylor','Union','Volusia','Wakulla'
            ,'Walton','Washington','Unknown']
county_df = pd.DataFrame(county_ls)
county_df = county_df.reset_index()
county_df = county_df.rename(columns={'index':'county_id',0:'county'})


# ==== Clean Florida EV Registrations data =====
try:
    # Read csv file into dataframe
    evreg_path = "./static/data/fl_ev_registrations_public.csv"
    evreg_df = pd.read_csv(evreg_path, encoding="utf-8")

    #Rename columns
    evreg_df = evreg_df.rename(columns={'Registration Valid Date':'report_date'
                            ,'County':'county'
                            ,'Vehicle Name':'vehicle_name'
                            })

    evreg_df = evreg_df.astype({'report_date':'datetime64'})
    evreg_df['year'] = evreg_df['report_date'].dt.year
    
    # Clean county in preperation for merging county_df
    evreg_df.loc[evreg_df['county']=='Dade', 'county'] = 'Miami-Dade'
    evreg_df.loc[evreg_df['county']=='Desoto', 'county'] = 'DeSoto'
    evreg_df.loc[evreg_df['county']=='Gadsen', 'county'] = 'Gadsden'
    evreg_df.loc[evreg_df['county']=='Other', 'county'] = 'Unknown'

    # Check for unmatched counties
    for county in evreg_df['county'].unique():
        if county in county_ls:
            pass
        else:
            print(county)

    evreg_df = evreg_df.merge(county_df,on='county')
    evreg_df = evreg_df[['county_id','year','report_date','vehicle_name']]

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

    # Reset index to create vehicle_id
    vehicles_df = vehicles_df.reset_index()
    vehicles_df = vehicles_df.rename(columns={'index':'vehicle_id'})

    # Bring vehicle_id into evreg_df
    evreg_df = evreg_df.merge(vehicles_df,on='vehicle_name')
    evreg_df = evreg_df[['vehicle_id','county_id','year','report_date']]
    evreg_df['reg_count'] = 1
    evreg_df = evreg_df.groupby(['vehicle_id','county_id','year','report_date']).sum()
    evreg_df = evreg_df.reset_index()

    # Remove unnecessary columns
    vehicles_df = vehicles_df[['vehicle_id','make','model']]

except Error as e:
    print(e)

# ==== Clean Charging Station data =====
try:
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

    county_stations_df['county'] = county_stations_df['county'].map(lambda x: x.replace(' County',''))

     # Check for unmatched counties
    for county in county_stations_df['county'].unique():
        if county in county_ls:
            pass
        else:
            print(county)
    
except Error as e:
    print(e)

# ==== Clean Census data =====
try:
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
    pop_2018_df['county'] = pop_2018_df['County & State'].map(lambda x: x.replace(' County, Florida',''))

    # Grab only Florida Counties and Drop unneccessary Columns
    fl_2018_pop = pop_2018_df[pop_2018_df["State ID"] == "12"]
    fl_2018_pop = fl_2018_pop.drop(columns=['County & State', 'State ID', 'County ID'])

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
    mhi_2018_df['county'] = mhi_2018_df['county'].map(lambda x: x.replace(' County',''))

    # Grab only Florida Counties and Drop unneccessary Columns
    fl_2018_mhi = mhi_2018_df[mhi_2018_df["State ID"] == "12"]
    income_2018 = fl_2018_mhi[['county','income']]

    # Combine 2018 Data
    fl_2018_demo = fl_2018_pop.merge(income_2018, how='outer',on='county')

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
    pop_2019_df["county"] = pop_2019_df["County & State"].map(lambda x: x.replace(' County, Florida',''))

    # Grab only Florida Counties and Drop unneccessary Columns
    fl_2019_pop = pop_2019_df[pop_2019_df["State ID"] == "12"]
    fl_2019_pop = fl_2019_pop.drop(columns=['County & State', 'State ID', 'County ID'])

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
    mhi_2019_df["county"] = mhi_2019_df["county"].map(lambda x: x.replace(' County',''))

    # # Grab only Florida Counties and Drop unneccessary Columns
    fl_2019_mhi = mhi_2019_df[mhi_2019_df["State ID"] == "12"]
    fl_2019_mhi = fl_2019_mhi.drop(columns=['State ID'])
    # fl_2019_mhi = fl_2019_mhi.set_index(['county'])
    # fl_2019_mhi = fl_2019_mhi.sort_index()
    income_2019 = fl_2019_mhi[['income','county']]

    # # Combine 2019 Data
    fl_2019_demo = fl_2019_pop.merge(income_2019, how='outer',on='county')

    # Read in CSV
    fl_2020_pop = pd.read_excel("static/data/fl_2020_pop_estimates-Revised-v2.xlsx", header=2)

    # Drop all rows with NA
    fl_2020_pop = fl_2020_pop.dropna()

    # Drop the city rows and keep just county totals
    fl_2020_pop = fl_2020_pop[fl_2020_pop.Area.str.contains('County')]

    # Create new Couty Column by spliting Area
    fl_2020_pop["county"] = fl_2020_pop["Area"].map(lambda x: x.replace('County',''))
    fl_2020_pop["county"] = fl_2020_pop["county"].map(lambda x: x.encode('ascii', 'ignore'))
    fl_2020_pop["county"] = fl_2020_pop["county"].map(lambda x: x.decode())
    fl_2020_pop["county"] = fl_2020_pop["county"].map(lambda x: x.strip(' '))

    # Drop unnecessary columns, rename Headers, set index to county
    fl_2020_pop = fl_2020_pop.drop(columns = ['Area','Total Change', 'Census', 'Inmates', 'Inmates.1'])
    fl_2020_pop = fl_2020_pop.rename(columns = {'Population Estimate':'population'})
    # fl_2020_pop = fl_2020_pop.set_index(['county'])

    # Add year column and reorder columns
    fl_2020_pop['year'] = "2020"
    fl_2020_pop = fl_2020_pop[['year', 'population','county']]

    # Concatenate 2018, 2019, & 2020 data
    fl_combined_demo = pd.concat([fl_2018_demo, fl_2019_demo,fl_2020_pop])

    # Check for unmatched counties
    for county in fl_combined_demo['county'].unique():
        if county in county_ls:
            pass
        else:
            print(county)

    # Combine census & station data and bring in county id
    demo_df = pd.DataFrame()
    for year in year_ls:
        df = county_df
        df['year'] = year
        demo_df = demo_df.append(df,ignore_index=True)

    demo_df = demo_df.astype({'county': 'str','year':'str'})
    fl_combined_demo = fl_combined_demo.astype({'county': 'str','year':'str'})
    county_stations_df = county_stations_df.astype({'county': 'str','year':'str'})

    demo_df = demo_df.merge(fl_combined_demo, how='left', on=['county','year'], suffixes=('','_x'))
    demo_df = demo_df.merge(county_stations_df, how='left', on=['county','year'], suffixes=('','_y'))
    demo_df = demo_df[['county_id','year','population','income','station_count']]

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

    # Replace Nan with None
    demo_df['station_count'] = demo_df['station_count'].fillna(0)
    evreg_df['reg_count'] = evreg_df['reg_count'].fillna(0)
    demo_df = demo_df.astype('str')
    demo_df['population'] = demo_df['population'].replace('nan','0')
    demo_df = demo_df.astype({'population':'float'})
    demo_df['income'] = demo_df['income'].replace('nan','0')
    demo_df['station_count'] = demo_df['station_count'].replace('nan','0')
    # demo_df['station_count'] = evreg_df['station_count'].fillna(0)

    # Set data types
    county_df = county_df.astype({'county_id':'int','county':'str'})
    vehicles_df = vehicles_df.astype({'vehicle_id':'int','make':'str','model':'str'})
    evreg_df = evreg_df.astype({'county_id':'int','year':'int','vehicle_id':'int','reg_count':'int'})
    demo_df = demo_df.astype({'county_id':'int','year':'int','population':'int','income':'int','station_count':'float'})

    # Create tables
    county_df.to_sql('county', conn, if_exists='replace', index=False)
    vehicles_df.to_sql('vehicle', conn, if_exists='replace', index=False)
    evreg_df.to_sql('registration', conn, if_exists='replace', index=False)
    demo_df.to_sql('demographic', conn, if_exists='replace', index=False)

    # Commit the changes
    conn.commit()
    print(pd.read_sql('''SELECT c.county, r.*, v.*, d.*
                        FROM county c
                        LEFT JOIN registration r ON c.county_id = r.county_id
                        LEFT JOIN vehicle v ON v.vehicle_id = r.vehicle_id
                        LEFT JOIN demographic d ON c.county_id = r.county_id
                        WHERE r.county_id is null or d.county_id is null
                        ORDER BY c.county_id DESC''', conn))
    print(f'SQLite database created successfully.')

except Error as e:
    print(e)
finally:
    if conn:
        conn.close()



