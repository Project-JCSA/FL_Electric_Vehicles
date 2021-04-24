# Import modules needed
import pandas as pd
import sqlite3
from sqlite3 import Error
import os

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
    clean_evreg_df = evreg_df2[['vehicle_id','county_id','report_date']]
    clean_evreg_df = clean_evreg_df.drop_duplicates(ignore_index=True)
    clean_evreg_df['reg_count'] = 0

    # row = 0
    # while row <= len(clean_evreg_df):
    #     vehicle_id = clean_evreg_df['vehicle_id'][row]
    #     county_id = clean_evreg_df['county_id'][row]
    #     report_date = clean_evreg_df['report_date'][row]
    #     clean_evreg_df['reg_count'][row] = len(evreg_df2[(evreg_df2['vehicle_id']==vehicle_id)
    #                                         & (evreg_df2['county_id']==county_id)
    #                                         & (evreg_df2['report_date']==report_date)])
    #     row += 1

    clean_vehicles_df = clean_vehicles_df[['vehicle_id','make','model']]

except Error as e:
    print(e)



# ==== Create SQLite Database =====
conn = None
try:
    conn = sqlite3.connect(db_path)
    print(f'SQLite version: {sqlite3.version}')
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
    # clean_county_df.to_sql('demographic', conn, if_exists='replace', index=False)

    # Commit the changes
    conn.commit()

    print(pd.read_sql('''SELECT c.county, v.make, v.model, r.report_date, r.reg_count
                        FROM county c
                        INNER JOIN registration r ON c.county_id = r.county_id
                        INNER JOIN vehicle v ON v.vehicle_id = r.vehicle_id
                        ORDER BY r.reg_count DESC''', conn))

except Error as e:
    print(e)
finally:
    if conn:
        conn.close()


