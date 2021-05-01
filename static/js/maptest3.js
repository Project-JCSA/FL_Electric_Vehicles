function createMap(EVStations) {

  // Create the tile layer that will be the background of our map
  var lightmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "light-v10",
    accessToken: API_KEY
  });

      // Create the map object with options
      var map = L.map("map-id", {
        center: [28.0000, -83.7000],
        zoom: 7
});

var json = {
  "type": "FeatureCollection",
  "features": [
    {
      "StationName": "OUC RELIABLE 01",
      "StreetAddress": "100 W Anderson Street",
      "Latitude": 28.535975,
      "Longitude": -81.379663,
      "OpenDate": ""
    },
    {
      "StationName": "OUC OC BARNETT 1",
      "StreetAddress": "4801 W Colonial Dr",
      "Latitude": 28.560572,
      "Longitude": -81.441748,
      "OpenDate": ""
    },
    {
      "StationName": "OUC OC MARKS ST 01",
      "StreetAddress": "99 E Marks St",
      "Latitude": 28.556879,
      "Longitude": -81.377632,
      "OpenDate": ""
    },
    {
      "StationName": "OUC OUC OCCC 03",
      "StreetAddress": "9899 International Drive",
      "Latitude": 28.429015,
      "Longitude": -81.458938,
      "OpenDate": ""
    },
    {
      "StationName": "OUC OC W LIBRARY 01",
      "StreetAddress": "5151 Raleigh St",
      "Latitude": 28.528024,
      "Longitude": -81.44774,
      "OpenDate": ""
    },
    {
      "StationName": "OUC OC MED EXAM 01",
      "StreetAddress": "2350 E Michigan Street",
      "Latitude": 28.512494,
      "Longitude": -81.351919,
      "OpenDate": ""
    },
    {
      "StationName": "City of Delray Beach - Banker's Row Parking Lot",
      "StreetAddress": "200 NE 1st Ave",
      "Latitude": 26.465314,
      "Longitude": -80.07219,
      "OpenDate": "6/15/2011"
    },
    {
      "StationName": "GREEN MANGO GREEN MANGO 1",
      "StreetAddress": "1771 Airport Rd",
      "Latitude": 30.485141,
      "Longitude": -81.662098,
      "OpenDate": ""
    },
    {
      "StationName": "Firkins Nissan",
      "StreetAddress": "1611 Cortez Rd W",
      "Latitude": 27.462023,
      "Longitude": -82.578036,
      "OpenDate": "3/15/2011"
    },
    {
      "StationName": "Maus Nissan",
      "StreetAddress": "937 S Suncoast Blvd",
      "Latitude": 28.848733,
      "Longitude": -82.57947,
      "OpenDate": "3/15/2011"
    },
    {
      "StationName": "Deland Nissan",
      "StreetAddress": "2600 S Woodland Blvd",
      "Latitude": 28.983689,
      "Longitude": -81.300079,
      "OpenDate": "3/15/2011"
    },
    {
      "StationName": "Delray Nissan",
      "StreetAddress": "2200 S Federal Hwy",
      "Latitude": 26.435016,
      "Longitude": -80.072333,
      "OpenDate": "3/15/2011"
    },
    {
      "StationName": "Fort Lauderdale Nissan",
      "StreetAddress": "1051 S Federal Hwy",
      "Latitude": 26.109825,
      "Longitude": -80.137099,
      "OpenDate": "3/15/2011"
    },
    {
      "StationName": "Westside Nissan",
      "StreetAddress": "1726 Cassat Ave",
      "Latitude": 30.288306,
      "Longitude": -81.730832,
      "OpenDate": "3/15/2011"
    },
    {
      "StationName": "Fuccillo Nissan",
      "StreetAddress": "7447 Blanding Blvd",
      "Latitude": 30.212415,
      "Longitude": -81.736209,
      "OpenDate": "3/15/2011"
    },
    {
      "StationName": "Rountree-Moore Nissan",
      "StreetAddress": "4262 W US 90",
      "Latitude": 30.18082,
      "Longitude": -82.702224,
      "OpenDate": "3/15/2011"
    },
    {
      "StationName": "Bill Seidle's Nissan",
      "StreetAddress": "10500 NW 12th St",
      "Latitude": 25.783121,
      "Longitude": -80.366772,
      "OpenDate": "3/15/2011"
    },
    {
      "StationName": "Palmetto 57 Nissan",
      "StreetAddress": "16725 NW 57th Ave",
      "Latitude": 25.9262,
      "Longitude": -80.292105,
      "OpenDate": "3/15/2011"
    },
    {
      "StationName": "AutoNation Nissan - Miami",
      "StreetAddress": "3345 SW 8th St",
      "Latitude": 25.76506,
      "Longitude": -80.250516,
      "OpenDate": "3/15/2011"
    },
    {
      "StationName": "AutoNation Nissan - Kendall",
      "StreetAddress": "17305 S Dixie Hwy",
      "Latitude": 25.609391,
      "Longitude": -80.348241,
      "OpenDate": "3/15/2011"
    },
    {
      "StationName": "AutoNation Nissan - Pembroke Pines",
      "StreetAddress": "8890 Pines Blvd",
      "Latitude": 26.007358,
      "Longitude": -80.263072,
      "OpenDate": "3/15/2011"
    },
    {
      "StationName": "Alan Jay Nissan",
      "StreetAddress": "1700 Flare Rd",
      "Latitude": 27.485756,
      "Longitude": -81.481603,
      "OpenDate": "1/16/2017"
    },
    {
      "StationName": "Wallace Nissan",
      "StreetAddress": "4313 S Federal Hwy",
      "Latitude": 27.152729,
      "Longitude": -80.217708,
      "OpenDate": "3/15/2011"
    },
    {
      "StationName": "Courtesy Nissan - Tampa",
      "StreetAddress": "3800 W Hillsborough Ave",
      "Latitude": 27.995139,
      "Longitude": -82.506186,
      "OpenDate": "3/15/2011"
    },
    {
      "StationName": "Ferman Nissan - North Tampa",
      "StreetAddress": "11001 N Florida Ave",
      "Latitude": 28.049764,
      "Longitude": -82.458596,
      "OpenDate": "3/15/2011"
    },
    {
      "StationName": "Sutherlin Nissan",
      "StreetAddress": "946 S US Highway 1",
      "Latitude": 27.585356,
      "Longitude": -80.376442,
      "OpenDate": "3/15/2011"
    },
    {
      "StationName": "Hill Nissan",
      "StreetAddress": "6401 Cypress Gardens Blvd",
      "Latitude": 27.982961,
      "Longitude": -81.676059,
      "OpenDate": "3/15/2011"
    },
    {
      "StationName": "LEESBURG FL LIBRARY 01",
      "StreetAddress": "153-199 N Palmetto St",
      "Latitude": 28.811736,
      "Longitude": -81.875204,
      "OpenDate": ""
    },
    {
      "StationName": "Baptist Health - West Kendall",
      "StreetAddress": "9555 SW 162nd Ct",
      "Latitude": 25.67973328,
      "Longitude": -80.45629,
      "OpenDate": "7/1/2011"
    },
    {
      "StationName": "Jupiter Town Hall Complex",
      "StreetAddress": "210 Military Trail",
      "Latitude": 26.9322,
      "Longitude": -80.1027,
      "OpenDate": "7/14/2011"
    },
    {
      "StationName": "OUC CAY COMMONS 01",
      "StreetAddress": "4102 Breakview Dr",
      "Latitude": 28.424816,
      "Longitude": -81.445089,
      "OpenDate": ""
    },
    {
      "StationName": "OUC DOMINOS UNIT 01",
      "StreetAddress": "5944 S Orange Blossom Trail",
      "Latitude": 28.470548,
      "Longitude": -81.396861,
      "OpenDate": ""
    },
    {
      "StationName": "OUC VISTA CAY 01",
      "StreetAddress": "5012 Shoreway Loop",
      "Latitude": 28.429047,
      "Longitude": -81.44937,
      "OpenDate": ""
    },
    {
      "StationName": "OUC WINGATE 1",
      "StreetAddress": "5661 Windhover Dr",
      "Latitude": 28.485994,
      "Longitude": -81.457176,
      "OpenDate": ""
    },
    {
      "StationName": "LEE COUNTY GOV ADMIN EAST",
      "StreetAddress": "2201 2nd St",
      "Latitude": 26.642789,
      "Longitude": -81.869132,
      "OpenDate": ""
    },
    {
      "StationName": "OUC SHERATON UNIT 1",
      "StreetAddress": "5905 International Drive",
      "Latitude": 28.463514,
      "Longitude": -81.461419,
      "OpenDate": ""
    },
    {
      "StationName": "OUC OUC GARDENIA 01",
      "StreetAddress": "3800 Gardenia Ave",
      "Latitude": 28.503733,
      "Longitude": -81.422651,
      "OpenDate": ""
    },
    {
      "StationName": "CITY OF TAMPA TWIGGS GARAGE 1",
      "StreetAddress": "901 E Twiggs St",
      "Latitude": 27.951258,
      "Longitude": -82.451781,
      "OpenDate": ""
    },
    {
      "StationName": "CITY BRADENTON RIVERWALK",
      "StreetAddress": "808 3rd Ave W",
      "Latitude": 27.499076,
      "Longitude": -82.569442,
      "OpenDate": ""
    },
    {
      "StationName": "Orlando Health - Dr. P Phillips Hospital",
      "StreetAddress": "9400 Turkey Lake Rd",
      "Latitude": 28.429987,
      "Longitude": -81.475116,
      "OpenDate": "11/15/2011"
    },
    {
      "StationName": "OUC OUC PERSHING 01",
      "StreetAddress": "5971 Pershing Ave",
      "Latitude": 28.499373,
      "Longitude": -81.303897,
      "OpenDate": ""
    },
    {
      "StationName": "OUC OC HEALTH & FAM",
      "StreetAddress": "2100 E Michigan St",
      "Latitude": 28.512254,
      "Longitude": -81.353407,
      "OpenDate": ""
    },
    {
      "StationName": "OUC OC FAMILY SERV",
      "StreetAddress": "1718 E Michigan Street",
      "Latitude": 28.51288,
      "Longitude": -81.358702,
      "OpenDate": ""
    },
    {
      "StationName": "DON CESAR HOTEL EV CHARGER 01",
      "StreetAddress": "3400 Gulf Blvd",
      "Latitude": 27.709441,
      "Longitude": -82.736735,
      "OpenDate": ""
    },
    {
      "StationName": "CITY BRADENTON JUDICIALGARAGE2",
      "StreetAddress": "615 12th St W",
      "Latitude": 27.493279,
      "Longitude": -82.573234,
      "OpenDate": ""
    },
    {
      "StationName": "CITYOFKISSIMMEE CITY HALL",
      "StreetAddress": "101 N Church St",
      "Latitude": 28.294546,
      "Longitude": -81.406797,
      "OpenDate": ""
    },
    {
      "StationName": "CITYOFKISSIMMEE LAKEFRONT PARK",
      "StreetAddress": "300 E Monument Ave",
      "Latitude": 28.291415,
      "Longitude": -81.404105,
      "OpenDate": ""
    },
    {
      "StationName": "OUC INFUSION TEA 01",
      "StreetAddress": "1600 Edgewater Dr",
      "Latitude": 28.565738,
      "Longitude": -81.389771,
      "OpenDate": ""
    },
    {
      "StationName": "COL GARAGE EVSE 1",
      "StreetAddress": "314 E Main St",
      "Latitude": 28.04433,
      "Longitude": -81.954245,
      "OpenDate": ""
    },
    {
      "StationName": "ACCESS MAIL EVSE UNIT 01",
      "StreetAddress": "14240 62nd St N",
      "Latitude": 27.901732,
      "Longitude": -82.721249,
      "OpenDate": ""
    },
    {
      "StationName": "OUC HILTON UNIT 01",
      "StreetAddress": "6001 Destination Pkwy",
      "Latitude": 28.425298,
      "Longitude": -81.456277,
      "OpenDate": ""
    },
    {
      "StationName": "OUC STCL CITY HALL1",
      "StreetAddress": "1300 9th St",
      "Latitude": 28.249967,
      "Longitude": -81.28294,
      "OpenDate": ""
    },
    {
      "StationName": "OUC STCL SR CTR 1",
      "StreetAddress": "702 Indiana Ave",
      "Latitude": 28.250888,
      "Longitude": -81.279774,
      "OpenDate": ""
    },
    {
      "StationName": "Tampa Area Electrical JATC",
      "StreetAddress": "5625 Harney Rd",
      "Latitude": 27.988197,
      "Longitude": -82.392164,
      "OpenDate": "3/6/2012"
    },
    {
      "StationName": "Carmine's Coal Fired Pizza",
      "StreetAddress": "4575 Military Trail",
      "Latitude": 26.892152,
      "Longitude": -80.102668,
      "OpenDate": "2/15/2012"
    },
    {
      "StationName": "Weston Nissan",
      "StreetAddress": "3650 Weston Rd",
      "Latitude": 26.073774,
      "Longitude": -80.361864,
      "OpenDate": "11/30/2011"
    },
    {
      "StationName": "OUC AVALON PARK 1",
      "StreetAddress": "3680 Avalon Park E Blvd",
      "Latitude": 28.510519,
      "Longitude": -81.154682,
      "OpenDate": ""
    },
    {
      "StationName": "CITY OF ORLANDO GEICO UNIT 01",
      "StreetAddress": "400 W South St",
      "Latitude": 28.537663,
      "Longitude": -81.384224,
      "OpenDate": ""
    },
    {
      "StationName": "OUC COO CNL P4-02",
      "StreetAddress": "460 Boone Ave",
      "Latitude": 28.536837,
      "Longitude": -81.380623,
      "OpenDate": ""
    },
    {
      "StationName": "OUC STCL CIVIC CTR1",
      "StreetAddress": "3001 17th St",
      "Latitude": 28.241623,
      "Longitude": -81.307326,
      "OpenDate": ""
    },
    {
      "StationName": "EV by Harrimans",
      "StreetAddress": "140 James St",
      "Latitude": 27.083031,
      "Longitude": -82.42344,
      "OpenDate": "5/11/2012"
    },
    {
      "StationName": "Harbor Nissan",
      "StreetAddress": "4336 Tamiami Trail",
      "Latitude": 26.966836,
      "Longitude": -82.076851,
      "OpenDate": "1/31/2012"
    },
    {
      "StationName": "Fuccillo Nissan",
      "StreetAddress": "15299 US Highway 19 N",
      "Latitude": 27.911345,
      "Longitude": -82.728797,
      "OpenDate": "1/31/2012"
    },
    {
      "StationName": "Lokey Nissan",
      "StreetAddress": "27758 US Highway 19 N",
      "Latitude": 28.024503,
      "Longitude": -82.738817,
      "OpenDate": "1/31/2012"
    },
    {
      "StationName": "Coral Springs Nissan",
      "StreetAddress": "9350 W Atlantic Blvd",
      "Latitude": 26.23871,
      "Longitude": -80.251886,
      "OpenDate": "1/31/2012"
    },
    {
      "StationName": "Daytona Nissan",
      "StreetAddress": "950 N Tomoka Farms Rd",
      "Latitude": 29.215495,
      "Longitude": -81.10534,
      "OpenDate": "1/31/2012"
    },
    {
      "StationName": "Sutherlin Nissan",
      "StreetAddress": "13985 S Tamiami Trail",
      "Latitude": 26.539388,
      "Longitude": -81.870692,
      "OpenDate": "1/31/2012"
    },
    {
      "StationName": "Sutherlin Nissan",
      "StreetAddress": "4815 S US Highway 1",
      "Latitude": 27.377265,
      "Longitude": -80.326861,
      "OpenDate": "1/31/2012"
    },
    {
      "StationName": "Gainesville Nissan",
      "StreetAddress": "3915 N Main St",
      "Latitude": 29.689296,
      "Longitude": -82.318596,
      "OpenDate": "1/31/2012"
    },
    {
      "StationName": "Coggin Nissan",
      "StreetAddress": "10600 Atlantic Blvd",
      "Latitude": 30.324014,
      "Longitude": -81.524719,
      "OpenDate": "1/31/2012"
    },
    {
      "StationName": "Coggin Nissan at the Avenues",
      "StreetAddress": "10859 Philips Hwy",
      "Latitude": 30.172215,
      "Longitude": -81.544583,
      "OpenDate": "1/31/2012"
    },
    {
      "StationName": "Jenkins Nissan",
      "StreetAddress": "4401 State Rd 33 N",
      "Latitude": 28.09809,
      "Longitude": -81.949333,
      "OpenDate": "1/31/2012"
    },
    {
      "StationName": "Jenkins Nissan",
      "StreetAddress": "10234 US Highway 441",
      "Latitude": 28.822813,
      "Longitude": -81.787457,
      "OpenDate": "1/31/2012"
    },
    {
      "StationName": "Bill Ray Nissan",
      "StreetAddress": "2724 N Highway 17-92",
      "Latitude": 28.724709,
      "Longitude": -81.316556,
      "OpenDate": "1/31/2012"
    },
    {
      "StationName": "Miller & Miller Nissan",
      "StreetAddress": "4770 Highway 90",
      "Latitude": 30.782356,
      "Longitude": -85.245729,
      "OpenDate": "1/31/2012"
    },
    {
      "StationName": "Nissan of Melbourne",
      "StreetAddress": "440 S Harbor City Blvd",
      "Latitude": 28.101637,
      "Longitude": -80.614492,
      "OpenDate": "1/31/2012"
    },
    {
      "StationName": "Maus Nissan",
      "StreetAddress": "3923 US 19 N",
      "Latitude": 28.21583,
      "Longitude": -82.739071,
      "OpenDate": "1/31/2012"
    },
    {
      "StationName": "Pearson Nissan of Ocala",
      "StreetAddress": "2060 SW College Rd",
      "Latitude": 29.171608,
      "Longitude": -82.161506,
      "OpenDate": "1/31/2012"
    },
    {
      "StationName": "Marriott Grand Vista",
      "StreetAddress": "5935 Avenida Vista",
      "Latitude": 28.3984649,
      "Longitude": -81.4537093,
      "OpenDate": "8/9/2011"
    },
    {
      "StationName": "Reed Motors",
      "StreetAddress": "3776 W Colonial Dr",
      "Latitude": 28.551681,
      "Longitude": -81.424557,
      "OpenDate": "1/31/2012"
    },
    {
      "StationName": "Sutherlin Nissan - Orlando",
      "StreetAddress": "8125 E Colonial Dr",
      "Latitude": 28.5684,
      "Longitude": -81.27715,
      "OpenDate": "1/31/2012"
    },
    {
      "StationName": "Universal Nissan",
      "StreetAddress": "12785 S Orange Blossom Trail",
      "Latitude": 28.38053,
      "Longitude": -81.403658,
      "OpenDate": "1/31/2012"
    },
    {
      "StationName": "Beck Nissan",
      "StreetAddress": "252 N Highway 17",
      "Latitude": 29.663189,
      "Longitude": -81.656096,
      "OpenDate": "1/31/2012"
    },
    {
      "StationName": "John Lee Nissan",
      "StreetAddress": "120 E 23rd St",
      "Latitude": 30.188966,
      "Longitude": -85.656853,
      "OpenDate": "1/31/2012"
    },
    {
      "StationName": "Sandy Sansing Nissan",
      "StreetAddress": "5705 Pensacola Blvd",
      "Latitude": 30.47414,
      "Longitude": -87.249675,
      "OpenDate": "1/31/2012"
    },
    {
      "StationName": "Performance Nissan",
      "StreetAddress": "1345 S Federal Hwy",
      "Latitude": 26.21375,
      "Longitude": -80.10699,
      "OpenDate": "1/31/2012"
    },
    {
      "StationName": "Naples Nissan",
      "StreetAddress": "3640 Pine Ridge Rd",
      "Latitude": 26.211419,
      "Longitude": -81.744746,
      "OpenDate": "1/31/2012"
    },
    {
      "StationName": "West Palm Beach Nissan",
      "StreetAddress": "3870 Blue Heron Blvd",
      "Latitude": 26.782347,
      "Longitude": -80.09792,
      "OpenDate": "1/31/2012"
    },
    {
      "StationName": "Southern 441 Nissan",
      "StreetAddress": "9405 Southern Blvd",
      "Latitude": 26.680654,
      "Longitude": -80.198008,
      "OpenDate": "1/31/2012"
    },
    {
      "StationName": "Nissan of Saint Augustine",
      "StreetAddress": "2755 US 1 S",
      "Latitude": 29.844721,
      "Longitude": -81.323289,
      "OpenDate": "1/31/2012"
    },
    {
      "StationName": "Crown Nissan",
      "StreetAddress": "5151 34th St N",
      "Latitude": 27.818805,
      "Longitude": -82.678474,
      "OpenDate": "1/31/2012"
    },
    {
      "StationName": "Gettel Nissan - Sarasota",
      "StreetAddress": "3530 Bee Ridge Rd",
      "Latitude": 27.298292,
      "Longitude": -82.499125,
      "OpenDate": "1/31/2012"
    },
    {
      "StationName": "Kraft Nissan",
      "StreetAddress": "3277 Mahan Dr",
      "Latitude": 30.462438,
      "Longitude": -84.221215,
      "OpenDate": "1/31/2012"
    },
    {
      "StationName": "Pat Fischer Nissan",
      "StreetAddress": "1128 S Hopkins Ave",
      "Latitude": 28.602972,
      "Longitude": -80.808957,
      "OpenDate": "1/31/2012"
    },
    {
      "StationName": "Nissan of Venice",
      "StreetAddress": "700 US Highway 41 Bypass S",
      "Latitude": 27.090886,
      "Longitude": -82.433092,
      "OpenDate": "1/31/2012"
    },
    {
      "StationName": "Wesley Chapel Nissan",
      "StreetAddress": "28519 State Rd 54",
      "Latitude": 28.23835,
      "Longitude": -82.344239,
      "OpenDate": "1/31/2012"
    },
    {
      "StationName": "OUC VCC UNIT 04",
      "StreetAddress": "1800 S Kirkman Rd",
      "Latitude": 28.518951,
      "Longitude": -81.465449,
      "OpenDate": ""
    },
    {
      "StationName": "Altamonte Mall",
      "StreetAddress": "451 E Altamonte Dr",
      "Latitude": 28.666819,
      "Longitude": -81.377753,
      "OpenDate": "5/26/2012"
    },
    {
      "StationName": "City of Gulfport - Casino",
      "StreetAddress": "5500 Shore Blvd S",
      "Latitude": 27.737752,
      "Longitude": -82.707812,
      "OpenDate": "1/15/2018"
    },
    {
      "StationName": "City of Lake Mary - Trailhead Park",
      "StreetAddress": "3990 W Lake Mary Blvd",
      "Latitude": 28.75658,
      "Longitude": -81.3459,
      "OpenDate": "5/8/2012"
    },
    {
      "StationName": "Rosen Medical Plaza",
      "StreetAddress": "7676 International Dr",
      "Latitude": 28.450933,
      "Longitude": -81.473436,
      "OpenDate": "5/8/2012"
    },
    {
      "StationName": "St. Pete Beach - City Hall",
      "StreetAddress": "155 Cory Ave",
      "Latitude": 27.744,
      "Longitude": -82.7475,
      "OpenDate": "6/11/2012"
    },
    {
      "StationName": "FSU GARAGE 6 UNIT 2",
      "StreetAddress": "414 Walker St",
      "Latitude": 30.437908,
      "Longitude": -84.299634,
      "OpenDate": ""
    },
    {
      "StationName": "HILLS COUNTY KEEL LIBRARY",
      "StreetAddress": "2902 W Bearss Ave",
      "Latitude": 28.086753,
      "Longitude": -82.492624,
      "OpenDate": ""
    },
    {
      "StationName": "OUC ORMC UNDERWOOD1",
      "StreetAddress": "77 W Underwood St",
      "Latitude": 28.526999,
      "Longitude": -81.379386,
      "OpenDate": ""
    },
    {
      "StationName": "OUC CROWNE PLAZA 1",
      "StreetAddress": "304 W Colonial Drive",
      "Latitude": 28.551828,
      "Longitude": -81.383176,
      "OpenDate": ""
    },
    {
      "StationName": "HILLS COUNTY PLANT CITY 1",
      "StreetAddress": "301 N Michigan Ave",
      "Latitude": 28.017569,
      "Longitude": -82.12125,
      "OpenDate": ""
    },
    {
      "StationName": "Hampton Inn & Suites",
      "StreetAddress": "50 SW 12th St",
      "Latitude": 25.762239,
      "Longitude": -80.194224,
      "OpenDate": "5/31/2012"
    },
    {
      "StationName": "Hilton Orlando Bonnet Creek",
      "StreetAddress": "14100 Bonnet Creek Resort",
      "Latitude": 28.354641,
      "Longitude": -81.534004,
      "OpenDate": "10/29/2012"
    },
    {
      "StationName": "Orange County - Convention Center",
      "StreetAddress": "9800 International Dr",
      "Latitude": 28.426859,
      "Longitude": -81.469851,
      "OpenDate": "12/12/2012"
    },
    {
      "StationName": "Sheraton Vistana Resort",
      "StreetAddress": "8800 Vistana Centre Dr",
      "Latitude": 28.367465,
      "Longitude": -81.503816,
      "OpenDate": "11/11/2012"
    },
    {
      "StationName": "Applebee's",
      "StreetAddress": "4000 Park Blvd",
      "Latitude": 27.839184,
      "Longitude": -82.687838,
      "OpenDate": "10/25/2012"
    },
    {
      "StationName": "Pinellas Park Public Library",
      "StreetAddress": "7770 52nd St N",
      "Latitude": 27.842669,
      "Longitude": -82.704026,
      "OpenDate": "6/14/2012"
    },
    {
      "StationName": "Applebee's",
      "StreetAddress": "2901 66th St N",
      "Latitude": 27.798225,
      "Longitude": -82.728033,
      "OpenDate": "8/19/2012"
    },
    {
      "StationName": "Publix #1199",
      "StreetAddress": "1600 66th St N",
      "Latitude": 27.786556,
      "Longitude": -82.72972,
      "OpenDate": "6/14/2012"
    },
    {
      "StationName": "Publix #1394",
      "StreetAddress": "1700 34th St N",
      "Latitude": 27.789083,
      "Longitude": -82.68064,
      "OpenDate": "6/14/2012"
    },
    {
      "StationName": "City of Seminole - Recreation Center",
      "StreetAddress": "9100 113th St N",
      "Latitude": 27.856111,
      "Longitude": -82.79603,
      "OpenDate": "7/18/2012"
    },
    {
      "StationName": "City of Altamonte Springs - City Hall",
      "StreetAddress": "225 Newburyport Ave",
      "Latitude": 28.664583,
      "Longitude": -81.35819,
      "OpenDate": "9/23/2012"
    },
    {
      "StationName": "TECO MVC EVSE 01",
      "StreetAddress": "6998 Dickman Rd",
      "Latitude": 27.792288,
      "Longitude": -82.401256,
      "OpenDate": ""
    },
    {
      "StationName": "City of DeLand - City Hall",
      "StreetAddress": "120 S Florida Ave",
      "Latitude": 29.027639,
      "Longitude": -81.30658,
      "OpenDate": "7/7/2012"
    },
    {
      "StationName": "City of DeLand - Parking Lot 11",
      "StreetAddress": "121 W Rich Ave",
      "Latitude": 29.030056,
      "Longitude": -81.30456,
      "OpenDate": "6/12/2012"
    },
    {
      "StationName": "City of Inverness - Parking Lot",
      "StreetAddress": "212 W Main St",
      "Latitude": 28.8363417,
      "Longitude": -82.3343183,
      "OpenDate": "9/26/2012"
    },
    {
      "StationName": "Sheraton Vistana Village",
      "StreetAddress": "12401 International Dr",
      "Latitude": 28.386846,
      "Longitude": -81.476792,
      "OpenDate": "4/30/2013"
    },
    {
      "StationName": "Publix #1149",
      "StreetAddress": "111 104th Ave",
      "Latitude": 27.765635,
      "Longitude": -82.767246,
      "OpenDate": "5/3/2013"
    },
    {
      "StationName": "OUC OIA TA 02",
      "StreetAddress": "1 Jeff Fuqua Blvd",
      "Latitude": 28.432766,
      "Longitude": -81.309533,
      "OpenDate": ""
    },
    {
      "StationName": "Publix #850",
      "StreetAddress": "601 S Andrews Ave",
      "Latitude": 26.11424,
      "Longitude": -80.14382,
      "OpenDate": "3/1/2013"
    },
    {
      "StationName": "WHOLE FOODS MKT NORTHMIAMI ST 1",
      "StreetAddress": "12150 Biscayne Blvd",
      "Latitude": 25.888014,
      "Longitude": -80.165492,
      "OpenDate": ""
    },
    {
      "StationName": "City of Sarasota - Marina Jack's Bayfront Park",
      "StreetAddress": "Island Park Dr",
      "Latitude": 27.333244,
      "Longitude": -82.545767,
      "OpenDate": "9/23/2012"
    },
    {
      "StationName": "Grieco Chevrolet - Delray Beach",
      "StreetAddress": "1111 Linton Blvd",
      "Latitude": 26.440352,
      "Longitude": -80.085095,
      "OpenDate": "1/1/2012"
    },
    {
      "StationName": "Sarasota Ford",
      "StreetAddress": "707 S Washington Blvd",
      "Latitude": 27.329799,
      "Longitude": -82.529513,
      "OpenDate": "4/1/2013"
    },
    {
      "StationName": "Sawgrass Ford",
      "StreetAddress": "14501 W Sunrise Blvd",
      "Latitude": 26.148054,
      "Longitude": -80.339035,
      "OpenDate": "3/1/2013"
    },
    {
      "StationName": "Florida Mall Hotel",
      "StreetAddress": "1500 Sand Lake Rd",
      "Latitude": 28.450306,
      "Longitude": -81.398009,
      "OpenDate": "5/5/2013"
    },
    {
      "StationName": "Metro Ford",
      "StreetAddress": "9000 NW 7th Ave",
      "Latitude": 25.857351,
      "Longitude": -80.210401,
      "OpenDate": "6/1/2013"
    },
    {
      "StationName": "Palm Bay Ford",
      "StreetAddress": "1202 Malabar Rd SE",
      "Latitude": 27.996617,
      "Longitude": -80.627127,
      "OpenDate": "6/1/2013"
    },
    {
      "StationName": "DiamondHead Beach Resort",
      "StreetAddress": "2000 Estero Blvd",
      "Latitude": 26.449465,
      "Longitude": -81.946872,
      "OpenDate": "6/1/2011"
    },
    {
      "StationName": "Jarrett Ford",
      "StreetAddress": "1305 US 27 N",
      "Latitude": 27.610781,
      "Longitude": -81.515615,
      "OpenDate": "4/1/2013"
    },
    {
      "StationName": "Wayne Akers Ford",
      "StreetAddress": "2000 10th Ave N",
      "Latitude": 26.629628,
      "Longitude": -80.07295,
      "OpenDate": "4/1/2013"
    },
    {
      "StationName": "CITY BRADENTON CITY CENTER",
      "StreetAddress": "1000 1st Ave W",
      "Latitude": 27.499061,
      "Longitude": -82.573175,
      "OpenDate": ""
    },
    {
      "StationName": "Pinecrest Gardens",
      "StreetAddress": "11000 Red Rd",
      "Latitude": 25.669547,
      "Longitude": -80.285248,
      "OpenDate": "1/23/2014"
    },
    {
      "StationName": "AutoNation Nissan - Brandon",
      "StreetAddress": "9920 Adamo Dr",
      "Latitude": 27.947161,
      "Longitude": -82.340532,
      "OpenDate": "3/15/2011"
    },
    {
      "StationName": "BMW_PALM BEACH STATION 01",
      "StreetAddress": "2901 Okeechobee Blvd",
      "Latitude": 26.707125,
      "Longitude": -80.097972,
      "OpenDate": ""
    },
    {
      "StationName": "Village of Pinecrest Municipal Center",
      "StreetAddress": "12645 Pinecrest Pkwy",
      "Latitude": 25.653212,
      "Longitude": -80.328946,
      "OpenDate": "4/1/2014"
    },
    {
      "StationName": "OUC UCF MED EVSE 01",
      "StreetAddress": "6900 Laureate Blvd",
      "Latitude": 28.367555,
      "Longitude": -81.278734,
      "OpenDate": ""
    },
    {
      "StationName": "The Ritz-Carlton",
      "StreetAddress": "4012 Central Florida Pkwy",
      "Latitude": 28.405221,
      "Longitude": -81.427767,
      "OpenDate": "6/20/2014"
    },
    {
      "StationName": "Sunrise Ford",
      "StreetAddress": "5435 S US Highway 1",
      "Latitude": 27.36623,
      "Longitude": -80.327301,
      "OpenDate": "8/1/2015"
    },
    {
      "StationName": "Selby Public Library",
      "StreetAddress": "1331 1st St",
      "Latitude": 27.337678,
      "Longitude": -82.543681,
      "OpenDate": "10/1/2012"
    },
    {
      "StationName": "Moonspinner Condominiums",
      "StreetAddress": "4425 Thomas Dr",
      "Latitude": 30.138857,
      "Longitude": -85.749222,
      "OpenDate": "12/1/2014"
    },
    {
      "StationName": "Destin Commons Mall",
      "StreetAddress": "4300 Legendary Dr",
      "Latitude": 30.390254,
      "Longitude": -86.425908,
      "OpenDate": "9/24/2014"
    },
    {
      "StationName": "Magnolia Parke Square",
      "StreetAddress": "NW 39th Pl and NW 48 Terrace",
      "Latitude": 29.68955,
      "Longitude": -82.3951,
      "OpenDate": "3/1/2015"
    },
    {
      "StationName": "CAPITAL BMW CAPITAL BMW 02",
      "StreetAddress": "3701 W Tennessee St",
      "Latitude": 30.458639,
      "Longitude": -84.355314,
      "OpenDate": ""
    },
    {
      "StationName": "Westgate Vacation Villas Resort & Spa",
      "StreetAddress": "7700 Westgate Blvd",
      "Latitude": 28.329043,
      "Longitude": -81.597278,
      "OpenDate": "1/1/2015"
    },
    {
      "StationName": "Embry-Riddle Aeronautical University",
      "StreetAddress": "600 S Clyde Morris Blvd",
      "Latitude": 29.188649,
      "Longitude": -81.045488,
      "OpenDate": "1/1/2015"
    },
    {
      "StationName": "Sandpearl Resort",
      "StreetAddress": "500 Mandalay Ave",
      "Latitude": 27.9827858,
      "Longitude": -82.8273019,
      "OpenDate": "1/1/2015"
    },
    {
      "StationName": "Whole Foods Market",
      "StreetAddress": "27001 US Highway 19 N",
      "Latitude": 28.017407,
      "Longitude": -82.737485,
      "OpenDate": "1/1/2015"
    },
    {
      "StationName": "Pinellas County Courthouse",
      "StreetAddress": "315 Court St",
      "Latitude": 27.961653,
      "Longitude": -82.800841,
      "OpenDate": "1/1/2015"
    },
    {
      "StationName": "Vinoy Renaissance",
      "StreetAddress": "501 5th Ave NE",
      "Latitude": 27.7781601,
      "Longitude": -82.632299,
      "OpenDate": "1/15/2018"
    },
    {
      "StationName": "Publix #1182",
      "StreetAddress": "2401 W Azeele St",
      "Latitude": 27.941456,
      "Longitude": -82.48465,
      "OpenDate": "9/1/2011"
    },
    {
      "StationName": "The Alfond Inn",
      "StreetAddress": "300 E New England Ave",
      "Latitude": 28.595499,
      "Longitude": -81.347619,
      "OpenDate": "4/1/2015"
    },
    {
      "StationName": "DoubleTree by Hilton - St. Augustine Historic District",
      "StreetAddress": "116 San Marco Ave",
      "Latitude": 29.9043529,
      "Longitude": -81.3180944,
      "OpenDate": "10/1/2014"
    },
    {
      "StationName": "City of West Palm Beach - Clematis Garage",
      "StreetAddress": "500 Banyan St",
      "Latitude": 26.714169,
      "Longitude": -80.055572,
      "OpenDate": "5/20/2011"
    },
    {
      "StationName": "Porsche and BMW of Ocala",
      "StreetAddress": "5155 SW College Rd",
      "Latitude": 29.128832,
      "Longitude": -82.206937,
      "OpenDate": "9/1/2015"
    },
    {
      "StationName": "Reed Nissan Clermont",
      "StreetAddress": "16005 FL 50",
      "Latitude": 28.547344,
      "Longitude": -81.68937,
      "OpenDate": "3/5/2014"
    },
    {
      "StationName": "INTL PLAZA EV CHARGER 01",
      "StreetAddress": "2223 N Westshore Blvd",
      "Latitude": 27.96646,
      "Longitude": -82.52059,
      "OpenDate": ""
    },
    {
      "StationName": "Hyatt Regency",
      "StreetAddress": "9801 International Dr",
      "Latitude": 28.426947,
      "Longitude": -81.468171,
      "OpenDate": "3/1/2016"
    },
    {
      "StationName": "City of Delray Beach - City Hall",
      "StreetAddress": "100 NW 1st St",
      "Latitude": 26.463485,
      "Longitude": -80.075842,
      "OpenDate": "1/1/2019"
    },
    {
      "StationName": "Florida Power & Light - Manatee Lagoon",
      "StreetAddress": "6000 N Flagler Dr",
      "Latitude": 26.76284,
      "Longitude": -80.051305,
      "OpenDate": "12/20/2015"
    },
    {
      "StationName": "Tampa International Airport - Short Term Parking Lot",
      "StreetAddress": "4205 Bessie Coleman Blvd",
      "Latitude": 27.982585,
      "Longitude": -82.53687,
      "OpenDate": "9/1/2016"
    },
    {
      "StationName": "Tampa International Airport - Long Term Parking Lot",
      "StreetAddress": "4000 George Bean Pkwy",
      "Latitude": 27.971237,
      "Longitude": -82.539312,
      "OpenDate": "9/1/2016"
    },
    {
      "StationName": "Tampa International Airport - Economy Parking Lot",
      "StreetAddress": "5601 Airport Service Rd",
      "Latitude": 27.966583,
      "Longitude": -82.5359,
      "OpenDate": "9/1/2016"
    },
    {
      "StationName": "Lee Nissan",
      "StreetAddress": "235 Miracle Strip Pkwy SW",
      "Latitude": 30.406518,
      "Longitude": -86.62978,
      "OpenDate": "10/1/2011"
    },
    {
      "StationName": "Publix #1494",
      "StreetAddress": "1500 SW 57th Ave",
      "Latitude": 25.756598,
      "Longitude": -80.28836,
      "OpenDate": "5/5/2016"
    },
    {
      "StationName": "Publix #1531",
      "StreetAddress": "725 1st Ave S",
      "Latitude": 27.770293,
      "Longitude": -82.64363,
      "OpenDate": "3/2/2017"
    },
    {
      "StationName": "G1CHARGER TRUMP TOWER G2",
      "StreetAddress": "2711 S Ocean Dr",
      "Latitude": 25.99625,
      "Longitude": -80.117268,
      "OpenDate": ""
    },
    {
      "StationName": "Sawgrass Mills Mall Garage",
      "StreetAddress": "1780 Sawgrass Mills Cir",
      "Latitude": 26.148811,
      "Longitude": -80.317874,
      "OpenDate": "9/1/2016"
    },
    {
      "StationName": "FROST SCIENCE MUSEUM EVSE 01",
      "StreetAddress": "1101 Biscayne Blvd",
      "Latitude": 25.785611,
      "Longitude": -80.187497,
      "OpenDate": ""
    },
    {
      "StationName": "NCF HEISER BLDG 01",
      "StreetAddress": "500 College Drive",
      "Latitude": 27.385915,
      "Longitude": -82.560091,
      "OpenDate": ""
    },
    {
      "StationName": "CAMDEN PIER DIS AER APT 1ST FL",
      "StreetAddress": "330 3rd Street S",
      "Latitude": 27.76784,
      "Longitude": -82.636616,
      "OpenDate": ""
    },
    {
      "StationName": "BAPTIST HEALTH TAVERNIER FL 01",
      "StreetAddress": "91500 Overseas Hwy",
      "Latitude": 25.005617,
      "Longitude": -80.522139,
      "OpenDate": ""
    },
    {
      "StationName": "BANYAN STREET C EV CHARGER 01",
      "StreetAddress": "101 E Kennedy Blvd",
      "Latitude": 27.94634,
      "Longitude": -82.458478,
      "OpenDate": ""
    },
    {
      "StationName": "City of Delray Beach - Fairfield Inn",
      "StreetAddress": "910 W Atlantic Ave",
      "Latitude": 26.461119,
      "Longitude": -80.082512,
      "OpenDate": "5/15/2015"
    },
    {
      "StationName": "City of West Palm Beach - City Center Garage",
      "StreetAddress": "401 Clematis St",
      "Latitude": 26.713894,
      "Longitude": -80.05421,
      "OpenDate": "9/1/2015"
    },
    {
      "StationName": "OUC VCC UNIT 03",
      "StreetAddress": "1800 S Kirkman Rd",
      "Latitude": 28.523193,
      "Longitude": -81.464405,
      "OpenDate": ""
    },
    {
      "StationName": "OUC ORMC COPELAND 1",
      "StreetAddress": "1367 S Lucerne Terrace",
      "Latitude": 28.526254,
      "Longitude": -81.379977,
      "OpenDate": ""
    },
    {
      "StationName": "SOUTH MIAMI SOUTH MIAMI",
      "StreetAddress": "5800 SW 66th St",
      "Latitude": 25.709067,
      "Longitude": -80.287892,
      "OpenDate": ""
    },
    {
      "StationName": "HILLS COUNTY RP STEWART 1",
      "StreetAddress": "3629 Queen Palm Dr",
      "Latitude": 27.975466,
      "Longitude": -82.336008,
      "OpenDate": ""
    },
    {
      "StationName": "HILLS COUNTY BLOOMINGDALE 1",
      "StreetAddress": "1906 Bloomingdale Ave",
      "Latitude": 27.894561,
      "Longitude": -82.252211,
      "OpenDate": ""
    },
    {
      "StationName": "SARASOTA PARK PALM AVE UNIT 2",
      "StreetAddress": "1287 North Palm Avenue",
      "Latitude": 27.335992,
      "Longitude": -82.543713,
      "OpenDate": ""
    },
    {
      "StationName": "SARASOTA PARK ST ARMANDS 01",
      "StreetAddress": "407-415 Monroe Dr",
      "Latitude": 27.317781,
      "Longitude": -82.575703,
      "OpenDate": ""
    },
    {
      "StationName": "UNIV OF FLORIDA GARAGE 7 UNIT 1",
      "StreetAddress": "226 Gale Lemerand Dr.",
      "Latitude": 29.650684,
      "Longitude": -82.350977,
      "OpenDate": ""
    },
    {
      "StationName": "SARASOTA PARK CITY HALL 01",
      "StreetAddress": "1525 1st St",
      "Latitude": 27.337475,
      "Longitude": -82.540299,
      "OpenDate": ""
    },
    {
      "StationName": "HILLS COUNTY COUNTY GARAGE 1",
      "StreetAddress": "710 E Jackson Street",
      "Latitude": 27.948705,
      "Longitude": -82.454124,
      "OpenDate": ""
    },
    {
      "StationName": "OUC HARRIS UNIT 01",
      "StreetAddress": "1200 Hillcrest St",
      "Latitude": 28.552146,
      "Longitude": -81.363613,
      "OpenDate": ""
    },
    {
      "StationName": "OUC COO ROSA UNIT 1",
      "StreetAddress": "300 Liberty Ave",
      "Latitude": 28.538975,
      "Longitude": -81.375616,
      "OpenDate": ""
    },
    {
      "StationName": "UNIV OF FLORIDA GARAGE 11 #1",
      "StreetAddress": "Natural Area Dr",
      "Latitude": 29.636207,
      "Longitude": -82.368697,
      "OpenDate": ""
    },
    {
      "StationName": "UNIV OF FLORIDA GARAGE 4 #3",
      "StreetAddress": "759 Newell Dr",
      "Latitude": 29.645543,
      "Longitude": -82.343205,
      "OpenDate": ""
    },
    {
      "StationName": "UNIV OF FLORIDA LEVIN LAW 01",
      "StreetAddress": "450 Village Dr",
      "Latitude": 29.648467,
      "Longitude": -82.359446,
      "OpenDate": ""
    },
    {
      "StationName": "THE FLATS EV CHARGER 01",
      "StreetAddress": "8300 NW 36th St",
      "Latitude": 25.809712,
      "Longitude": -80.330942,
      "OpenDate": ""
    },
    {
      "StationName": "500 OCEAN APTS EV CHARGER 01",
      "StreetAddress": "101 N Federal Hwy",
      "Latitude": 26.526206,
      "Longitude": -80.058884,
      "OpenDate": ""
    },
    {
      "StationName": "UNIV OF FLORIDA EAST CAMPUS 1",
      "StreetAddress": "2046 NE Waldo Rd",
      "Latitude": 29.672391,
      "Longitude": -82.299321,
      "OpenDate": ""
    },
    {
      "StationName": "WINTER PARK CITY HALL",
      "StreetAddress": "401 S Park Ave",
      "Latitude": 28.594559,
      "Longitude": -81.352082,
      "OpenDate": ""
    },
    {
      "StationName": "OUC OC ADMIN BLDG 1",
      "StreetAddress": "201 S Rosalind Ave",
      "Latitude": 28.539245,
      "Longitude": -81.374459,
      "OpenDate": ""
    },
    {
      "StationName": "City of Doral - Government Center",
      "StreetAddress": "8401 NW 53rd Terrace",
      "Latitude": 25.822094,
      "Longitude": -80.334406,
      "OpenDate": "11/1/2017"
    },
    {
      "StationName": "City of Doral - Police Substation Facility",
      "StreetAddress": "3719 NW 97th Ave",
      "Latitude": 25.807534,
      "Longitude": -80.353312,
      "OpenDate": "1/1/2018"
    },
    {
      "StationName": "OUC AVALON PARK 4",
      "StreetAddress": "3885 Avalon Park E Blvd",
      "Latitude": 28.508671,
      "Longitude": -81.154541,
      "OpenDate": ""
    },
    {
      "StationName": "OUC AVALON PARK 5",
      "StreetAddress": "3843 Avalon Park E Blvd",
      "Latitude": 28.509219,
      "Longitude": -81.154162,
      "OpenDate": ""
    },
    {
      "StationName": "ORLANDO CBD EOLA EV1",
      "StreetAddress": "211 East Robinson St",
      "Latitude": 28.545901,
      "Longitude": -81.374985,
      "OpenDate": ""
    },
    {
      "StationName": "OUC OUC OCCC 01",
      "StreetAddress": "9837 International Dr",
      "Latitude": 28.426476,
      "Longitude": -81.463905,
      "OpenDate": ""
    },
    {
      "StationName": "MARLOWS MARLOWS",
      "StreetAddress": "Mike Roberto Way",
      "Latitude": 28.656679,
      "Longitude": -81.20352,
      "OpenDate": ""
    },
    {
      "StationName": "OUC STCL LAKESHORE1",
      "StreetAddress": "1100 E Lakeshore Blvd",
      "Latitude": 28.259075,
      "Longitude": -81.281173,
      "OpenDate": ""
    },
    {
      "StationName": "OBE POWER ICON LAS OLAS 1",
      "StreetAddress": "590 East Las Olas Blvd",
      "Latitude": 26.118774,
      "Longitude": -80.137847,
      "OpenDate": ""
    },
    {
      "StationName": "OUC HARMONY UNIT 2",
      "StreetAddress": "7251 5 Oaks Dr",
      "Latitude": 28.191152,
      "Longitude": -81.145697,
      "OpenDate": ""
    },
    {
      "StationName": "Edenson Dental",
      "StreetAddress": "109 W Bearss Ave",
      "Latitude": 28.088298,
      "Longitude": -82.460487,
      "OpenDate": "2/15/2018"
    },
    {
      "StationName": "WHOLE FOODS APS STATION 2",
      "StreetAddress": "305 E Altamonte Dr 1000",
      "Latitude": 28.664094,
      "Longitude": -81.380962,
      "OpenDate": ""
    },
    {
      "StationName": "UNIV OF FLORIDA GARAGE 8 UNIT 1",
      "StreetAddress": "Parking Garage 8 (Norman)",
      "Latitude": 29.645853,
      "Longitude": -82.337345,
      "OpenDate": ""
    },
    {
      "StationName": "CITY OF NPR REC CENTER EVSE",
      "StreetAddress": "6622-6698 Van Buren St",
      "Latitude": 28.254691,
      "Longitude": -82.711374,
      "OpenDate": ""
    },
    {
      "StationName": "SEACOAST BANK 250 ORANGE AVE",
      "StreetAddress": "250 N Orange Ave",
      "Latitude": 28.544973,
      "Longitude": -81.379263,
      "OpenDate": ""
    },
    {
      "StationName": "OUC COO JEFF 02",
      "StreetAddress": "62 W Washington St",
      "Latitude": 28.543732,
      "Longitude": -81.380525,
      "OpenDate": ""
    },
    {
      "StationName": "OUC OSC UNIT 1",
      "StreetAddress": "800 E Princeton St",
      "Latitude": 28.57111,
      "Longitude": -81.367993,
      "OpenDate": ""
    },
    {
      "StationName": "CHARGE WP WP GLASS KNIFE",
      "StreetAddress": "276 S Orlando Ave",
      "Latitude": 28.595905,
      "Longitude": -81.364487,
      "OpenDate": ""
    },
    {
      "StationName": "VALET EV WEST VALET",
      "StreetAddress": "3720 S Ocean Blvd",
      "Latitude": 26.40834,
      "Longitude": -80.066975,
      "OpenDate": ""
    },
    {
      "StationName": "VALET EV NORTH VALET",
      "StreetAddress": "3700 S Ocean Blvd",
      "Latitude": 26.409209,
      "Longitude": -80.065784,
      "OpenDate": ""
    },
    {
      "StationName": "VALET EV SOUTH VALET",
      "StreetAddress": "3740 S Ocean Blvd",
      "Latitude": 26.407119,
      "Longitude": -80.065444,
      "OpenDate": ""
    },
    {
      "StationName": "SHERATON ORL N EV CHARGER 01",
      "StreetAddress": "600 N Lake Destiny Rd",
      "Latitude": 28.632265,
      "Longitude": -81.391504,
      "OpenDate": ""
    },
    {
      "StationName": "WHOLE FOODS MKT SARASOTA ST1",
      "StreetAddress": "5245 University Pkwy",
      "Latitude": 27.387616,
      "Longitude": -82.464473,
      "OpenDate": ""
    },
    {
      "StationName": "WHOLE FOODS MKT SARASOTA ST2",
      "StreetAddress": "5280 University Pkwy",
      "Latitude": 27.387822,
      "Longitude": -82.464412,
      "OpenDate": ""
    },
    {
      "StationName": "WINTER PARK PUBLIC SAFETY",
      "StreetAddress": "500 N Virginia Ave",
      "Latitude": 28.600829,
      "Longitude": -81.354718,
      "OpenDate": ""
    },
    {
      "StationName": "ALLABOARDFLORID FT LAUDERDALE 3",
      "StreetAddress": "320 NW 2nd St",
      "Latitude": 26.1238,
      "Longitude": -80.146945,
      "OpenDate": ""
    },
    {
      "StationName": "Orlando International Premium Outlets",
      "StreetAddress": "4951 International Dr",
      "Latitude": 28.47446,
      "Longitude": -81.450252,
      "OpenDate": ""
    },
    {
      "StationName": "Lake Buena Vista Factory Stores",
      "StreetAddress": "15657 State Road 535",
      "Latitude": 28.350673,
      "Longitude": -81.487646,
      "OpenDate": ""
    },
    {
      "StationName": "Orlando Vineland Premium Outlets",
      "StreetAddress": "8200 Vineland Ave",
      "Latitude": 28.38891,
      "Longitude": -81.49063,
      "OpenDate": ""
    },
    {
      "StationName": "Dadeland Mall",
      "StreetAddress": "7535 N Kendall Dr",
      "Latitude": 25.691396,
      "Longitude": -80.312875,
      "OpenDate": ""
    },
    {
      "StationName": "The Falls",
      "StreetAddress": "8888 SW 136th St",
      "Latitude": 25.644627,
      "Longitude": -80.337651,
      "OpenDate": ""
    },
    {
      "StationName": "Dunlawton Square",
      "StreetAddress": "3817 S Nova Rd",
      "Latitude": 29.12656,
      "Longitude": -81.003488,
      "OpenDate": ""
    },
    {
      "StationName": "Shoppes at Winter Park",
      "StreetAddress": "495 N Semoran Blvd",
      "Latitude": 28.603686,
      "Longitude": -81.30682,
      "OpenDate": ""
    },
    {
      "StationName": "Indian River Village",
      "StreetAddress": "709 E 3rd Ave",
      "Latitude": 29.02792,
      "Longitude": -80.894808,
      "OpenDate": ""
    },
    {
      "StationName": "Coral Square",
      "StreetAddress": "9469 W Atlantic Blvd",
      "Latitude": 26.242426,
      "Longitude": -80.249158,
      "OpenDate": ""
    },
    {
      "StationName": "Miami International Mall",
      "StreetAddress": "1455 NW 107th Ave",
      "Latitude": 25.78782,
      "Longitude": -80.36607,
      "OpenDate": ""
    },
    {
      "StationName": "The Falls",
      "StreetAddress": "8888 SW 136th St",
      "Latitude": 25.642255,
      "Longitude": -80.335975,
      "OpenDate": ""
    },
    {
      "StationName": "Coral Gables City Hall",
      "StreetAddress": "405 Biltmore Way",
      "Latitude": 25.748977,
      "Longitude": -80.264467,
      "OpenDate": ""
    },
    {
      "StationName": "Marketplace at Seminole Towne Center",
      "StreetAddress": "1401 Wp Ball Blvd",
      "Latitude": 28.79934,
      "Longitude": -81.335641,
      "OpenDate": ""
    },
    {
      "StationName": "The Shops at Sunset Place",
      "StreetAddress": "5701 Sunset Dr",
      "Latitude": 25.705662,
      "Longitude": -80.286362,
      "OpenDate": ""
    },
    {
      "StationName": "Town Center at Boca Raton",
      "StreetAddress": "6000 Glades Rd",
      "Latitude": 26.362185,
      "Longitude": -80.13195,
      "OpenDate": ""
    },
    {
      "StationName": "Vizcaya Square Shopping Center",
      "StreetAddress": "975 N Nob Hill Rd",
      "Latitude": 26.134,
      "Longitude": -80.287955,
      "OpenDate": ""
    },
    {
      "StationName": "Sunrise Town Center",
      "StreetAddress": "3426 N University Dr",
      "Latitude": 26.169602,
      "Longitude": -80.254558,
      "OpenDate": ""
    },
    {
      "StationName": "Wilton Manors City Hall",
      "StreetAddress": "2020 Wilton Dr",
      "Latitude": 26.15428,
      "Longitude": -80.13988,
      "OpenDate": ""
    },
    {
      "StationName": "Florida Keys Outlet Center",
      "StreetAddress": "250 E Palm Dr",
      "Latitude": 25.453656,
      "Longitude": -80.473666,
      "OpenDate": ""
    },
    {
      "StationName": "Community First Credit Union",
      "StreetAddress": "13910 Village Lake Cir",
      "Latitude": 30.141035,
      "Longitude": -81.544914,
      "OpenDate": ""
    },
    {
      "StationName": "Dunkin' Donuts",
      "StreetAddress": "3108 US Highway 98 N",
      "Latitude": 28.080933,
      "Longitude": -81.966367,
      "OpenDate": ""
    },
    {
      "StationName": "Dunkin' Donuts",
      "StreetAddress": "1202 N Broadway Ave",
      "Latitude": 27.906758,
      "Longitude": -81.842889,
      "OpenDate": ""
    },
    {
      "StationName": "St. Augustine Outlets",
      "StreetAddress": "500 Outlet Mall Blvd",
      "Latitude": 29.924822,
      "Longitude": -81.411944,
      "OpenDate": ""
    },
    {
      "StationName": "Doubletree Jacksonville Airport",
      "StreetAddress": "2101 Dixie Clipper Dr",
      "Latitude": 30.489761,
      "Longitude": -81.67932,
      "OpenDate": ""
    },
    {
      "StationName": "River City Marketplace",
      "StreetAddress": "13000 City Station Dr",
      "Latitude": 30.478805,
      "Longitude": -81.641413,
      "OpenDate": ""
    },
    {
      "StationName": "Dunkin' Donuts",
      "StreetAddress": "3820 S Dale Mabry Hwy",
      "Latitude": 27.906575,
      "Longitude": -82.505459,
      "OpenDate": ""
    },
    {
      "StationName": "Dunkin' Donuts",
      "StreetAddress": "1346 W Brandon Blvd",
      "Latitude": 27.937947,
      "Longitude": -82.303718,
      "OpenDate": ""
    },
    {
      "StationName": "Dunkin' Donuts",
      "StreetAddress": "3720 Tampa Rd",
      "Latitude": 28.043597,
      "Longitude": -82.680138,
      "OpenDate": ""
    },
    {
      "StationName": "Dunkin' Donuts",
      "StreetAddress": "9009 20th St",
      "Latitude": 27.638616,
      "Longitude": -80.512841,
      "OpenDate": ""
    },
    {
      "StationName": "Dunkin' Donuts",
      "StreetAddress": "1622 W Kennedy Blvd",
      "Latitude": 27.94439,
      "Longitude": -82.476433,
      "OpenDate": ""
    },
    {
      "StationName": "Jacksonville Beach Public Parking",
      "StreetAddress": "55 N. 2nd St.",
      "Latitude": 30.289191,
      "Longitude": -81.390651,
      "OpenDate": ""
    },
    {
      "StationName": "ALLABOARDFLORID WPB 1",
      "StreetAddress": "501 Fern St",
      "Latitude": 26.710895,
      "Longitude": -80.055448,
      "OpenDate": ""
    },
    {
      "StationName": "Publix #1558",
      "StreetAddress": "2952 Aventura Blvd",
      "Latitude": 25.960264,
      "Longitude": -80.14118,
      "OpenDate": "11/9/2017"
    },
    {
      "StationName": "Publix #1562",
      "StreetAddress": "200 Island Way",
      "Latitude": 27.97886,
      "Longitude": -82.817276,
      "OpenDate": "12/7/2017"
    },
    {
      "StationName": "Publix #1559",
      "StreetAddress": "443 W County Rd 419",
      "Latitude": 28.646284,
      "Longitude": -81.13725,
      "OpenDate": "12/14/2017"
    },
    {
      "StationName": "Publix #1554",
      "StreetAddress": "1740 Polk St",
      "Latitude": 26.012901,
      "Longitude": -80.14141,
      "OpenDate": "2/22/2018"
    },
    {
      "StationName": "Publix #621",
      "StreetAddress": "1920 West Ave",
      "Latitude": 25.795124,
      "Longitude": -80.14327,
      "OpenDate": "3/1/2018"
    },
    {
      "StationName": "Publix #1571",
      "StreetAddress": "8455 NW 53rd Terrace",
      "Latitude": 25.823074,
      "Longitude": -80.334564,
      "OpenDate": "1/11/2018"
    },
    {
      "StationName": "CITY OF NPR PEACE HALL EV",
      "StreetAddress": "6509 Grand Blvd",
      "Latitude": 28.25198,
      "Longitude": -82.722491,
      "OpenDate": ""
    },
    {
      "StationName": "ANSON STATION TWO",
      "StreetAddress": "6261 Sawyer Loop Rd",
      "Latitude": 27.26578,
      "Longitude": -82.474273,
      "OpenDate": ""
    },
    {
      "StationName": "OBE POWER UM LIFE SCIENCE",
      "StreetAddress": "1953 NW 7th Ave",
      "Latitude": 25.794103,
      "Longitude": -80.206386,
      "OpenDate": ""
    },
    {
      "StationName": "LEE COUNTY GOV HEITMAN ST.",
      "StreetAddress": "2058 Cottage St",
      "Latitude": 26.639702,
      "Longitude": -81.870528,
      "OpenDate": ""
    },
    {
      "StationName": "WYNDHAM BONNET CREEK STATION 1",
      "StreetAddress": "9518 Via Encinas",
      "Latitude": 28.360518,
      "Longitude": -81.53642,
      "OpenDate": ""
    },
    {
      "StationName": "LAZ Parking - Pelican Garage",
      "StreetAddress": "1041 Collins Avenue",
      "Latitude": 25.78101,
      "Longitude": -80.131541,
      "OpenDate": ""
    },
    {
      "StationName": "The Loree",
      "StreetAddress": "8649 AC Skinner Parkway",
      "Latitude": 30.245446,
      "Longitude": -81.553216,
      "OpenDate": ""
    },
    {
      "StationName": "Grovenor House Condos",
      "StreetAddress": "2627 S  Bayshore Dr",
      "Latitude": 25.732395,
      "Longitude": -80.235084,
      "OpenDate": ""
    },
    {
      "StationName": "IKEA - Sunrise",
      "StreetAddress": "151 NW 136th Ave",
      "Latitude": 26.121522,
      "Longitude": -80.331787,
      "OpenDate": ""
    },
    {
      "StationName": "Key Colony No. 4 Condominium Association",
      "StreetAddress": "101 Crandon Boulevard, 164",
      "Latitude": 25.698295,
      "Longitude": -80.16113,
      "OpenDate": ""
    },
    {
      "StationName": "Ikea - Jacksonville",
      "StreetAddress": "7801 Gate Parkway",
      "Latitude": 30.237405,
      "Longitude": -81.516495,
      "OpenDate": ""
    },
    {
      "StationName": "Artech Residences at Aventura Condominium Association, Inc",
      "StreetAddress": "2950 NE 188th St",
      "Latitude": 25.949233,
      "Longitude": -80.140754,
      "OpenDate": ""
    },
    {
      "StationName": "Park Place at Maguire",
      "StreetAddress": "100 Maguire Park Street",
      "Latitude": 28.542975,
      "Longitude": -81.540744,
      "OpenDate": ""
    },
    {
      "StationName": "Juanas Pagodas",
      "StreetAddress": "1451 Navarre Beach Cswy",
      "Latitude": 30.383287,
      "Longitude": -86.862558,
      "OpenDate": ""
    },
    {
      "StationName": "WALGREENS #4554",
      "StreetAddress": "12279 Lake Underhill Rd",
      "Latitude": 28.54725,
      "Longitude": -81.204659,
      "OpenDate": ""
    },
    {
      "StationName": "Baptist Medical Center Jacksonville - Parking Garage 3rd Floor",
      "StreetAddress": "1051 Palm Avenue",
      "Latitude": 30.3152,
      "Longitude": -81.6615,
      "OpenDate": ""
    },
    {
      "StationName": "Legacy Parking - 701 Brickell Avenue",
      "StreetAddress": "701 Brickell Avenue",
      "Latitude": 25.767087,
      "Longitude": -80.189801,
      "OpenDate": ""
    },
    {
      "StationName": "Key Colony 2 Condominiums",
      "StreetAddress": "251 Crandon Boulevard",
      "Latitude": 25.697788,
      "Longitude": -80.157979,
      "OpenDate": ""
    },
    {
      "StationName": "City of Hollywood  - Radius Garage",
      "StreetAddress": "250 N 19th Ave",
      "Latitude": 26.012909,
      "Longitude": -80.145104,
      "OpenDate": ""
    },
    {
      "StationName": "City of Hollywood - Garfield Garage",
      "StreetAddress": "300 Connecticut St",
      "Latitude": 26.022405,
      "Longitude": -80.115339,
      "OpenDate": ""
    },
    {
      "StationName": "AVION PARK AVION PARK",
      "StreetAddress": "5315 Avion Park Dr",
      "Latitude": 27.958946,
      "Longitude": -82.532967,
      "OpenDate": ""
    },
    {
      "StationName": "12th Street & Drexel Avenue Garage",
      "StreetAddress": "512 12th Street",
      "Latitude": 25.7828,
      "Longitude": -80.133,
      "OpenDate": ""
    },
    {
      "StationName": "ANCORA APTS EV CHARGER 01",
      "StreetAddress": "11581 International Dr",
      "Latitude": 28.396222,
      "Longitude": -81.463011,
      "OpenDate": ""
    },
    {
      "StationName": "OBE POWER ROYAL CARIB 1",
      "StreetAddress": "1040 Caribbean Way",
      "Latitude": 25.776638,
      "Longitude": -80.179211,
      "OpenDate": ""
    },
    {
      "StationName": "ALLABOARDFLORID MIAMI 3",
      "StreetAddress": "160 NW 6th St",
      "Latitude": 25.78012,
      "Longitude": -80.197481,
      "OpenDate": ""
    },
    {
      "StationName": "ALLABOARDFLORID MIAMI 2",
      "StreetAddress": "161 NW 6th St",
      "Latitude": 25.780135,
      "Longitude": -80.197494,
      "OpenDate": ""
    },
    {
      "StationName": "ALLABOARDFLORID MIAMI 1",
      "StreetAddress": "736 NW 1st Ave.",
      "Latitude": 25.780166,
      "Longitude": -80.19753,
      "OpenDate": ""
    },
    {
      "StationName": "WHOLE FOODS MKT GAINESVILLE ST1",
      "StreetAddress": "3490 SW Archer Rd",
      "Latitude": 29.625561,
      "Longitude": -82.374357,
      "OpenDate": ""
    },
    {
      "StationName": "OUC OUC OCCC 04",
      "StreetAddress": "Convention Way",
      "Latitude": 28.431239,
      "Longitude": -81.463099,
      "OpenDate": ""
    },
    {
      "StationName": "CARCHARGING / SARASOTA VILL",
      "StreetAddress": "3690 Bee Ridge Rd",
      "Latitude": 27.298168,
      "Longitude": -82.496788,
      "OpenDate": ""
    },
    {
      "StationName": "OBE POWER NINE MARY BRICK",
      "StreetAddress": "999 SW 1st Avenue",
      "Latitude": 25.764709,
      "Longitude": -80.194999,
      "OpenDate": ""
    },
    {
      "StationName": "UNIV OF FLORIDA SHEPARD BROAD 1",
      "StreetAddress": "1300 Center Dr",
      "Latitude": 29.640344,
      "Longitude": -82.34679,
      "OpenDate": ""
    },
    {
      "StationName": "UNIV OF FLORIDA VET MED 01",
      "StreetAddress": "2015 SW 16th Ave",
      "Latitude": 29.633537,
      "Longitude": -82.347991,
      "OpenDate": ""
    },
    {
      "StationName": "Greenacres Nissan",
      "StreetAddress": "5353 Lake Worth Rd",
      "Latitude": 26.619472,
      "Longitude": -80.12756,
      "OpenDate": "5/29/2018"
    },
    {
      "StationName": "Hollybrook Golf and Tennis Club",
      "StreetAddress": "900 Hollybrook Drive",
      "Latitude": 26.0008,
      "Longitude": -80.266162,
      "OpenDate": ""
    },
    {
      "StationName": "17th Street Garage",
      "StreetAddress": "640 17th Street",
      "Latitude": 25.791987,
      "Longitude": -80.134977,
      "OpenDate": ""
    },
    {
      "StationName": "The Boathouse Fort Myers - Tiki Bar & Grill",
      "StreetAddress": "17051 SR 31",
      "Latitude": 26.71525,
      "Longitude": -81.760419,
      "OpenDate": ""
    },
    {
      "StationName": "BEXLEY BEXLEY",
      "StreetAddress": "16950 Vibrant Way Florida",
      "Latitude": 28.214554,
      "Longitude": -82.53653,
      "OpenDate": ""
    },
    {
      "StationName": "Comfort Inn and Suites  DCFC 2",
      "StreetAddress": "1224 S Main Street",
      "Latitude": 28.838697,
      "Longitude": -82.044182,
      "OpenDate": ""
    },
    {
      "StationName": "76SLAURA NEW STATION 1",
      "StreetAddress": "100-170 W Bay St",
      "Latitude": 30.326535,
      "Longitude": -81.660161,
      "OpenDate": ""
    },
    {
      "StationName": "ORANGETHEORY EV STATION 01",
      "StreetAddress": "6000 Broken Sound Pkwy NW",
      "Latitude": 26.403238,
      "Longitude": -80.114765,
      "OpenDate": ""
    },
    {
      "StationName": "MUSEUM STATIONS MUSEUM ST3",
      "StreetAddress": "90 NE 41st St",
      "Latitude": 25.813939,
      "Longitude": -80.193629,
      "OpenDate": ""
    },
    {
      "StationName": "STN1 ARI HQ 1",
      "StreetAddress": "1950 NW 22nd St",
      "Latitude": 26.154304,
      "Longitude": -80.169102,
      "OpenDate": ""
    },
    {
      "StationName": "SERVICE DRIVE DC FAST 01",
      "StreetAddress": "4821 Clark Rd",
      "Latitude": 27.269824,
      "Longitude": -82.472343,
      "OpenDate": ""
    },
    {
      "StationName": "MIAMI-DADE DOLPHIN SINGLE1",
      "StreetAddress": "11897 NW 12th St",
      "Latitude": 25.783267,
      "Longitude": -80.390085,
      "OpenDate": ""
    },
    {
      "StationName": "CITY OF NPR CITY HALL EVSE",
      "StreetAddress": "5915 Florida ave",
      "Latitude": 28.251521,
      "Longitude": -82.716684,
      "OpenDate": ""
    },
    {
      "StationName": "ELEC STATIONS STATION 01",
      "StreetAddress": "15875 S Tamiami Trail",
      "Latitude": 26.511947,
      "Longitude": -81.862048,
      "OpenDate": ""
    },
    {
      "StationName": "ROTO SOUTH TOWER 01",
      "StreetAddress": "6001 N Ocean Drive",
      "Latitude": 26.051498,
      "Longitude": -80.113195,
      "OpenDate": ""
    },
    {
      "StationName": "THE GREEN @ LWR WINNDIXIE 2",
      "StreetAddress": "11525 E State Rd 70",
      "Latitude": 27.433714,
      "Longitude": -82.42732,
      "OpenDate": ""
    },
    {
      "StationName": "THE GREEN @ LWR LA FITNESS 2",
      "StreetAddress": "11513 FL-70",
      "Latitude": 27.433643,
      "Longitude": -82.424651,
      "OpenDate": ""
    },
    {
      "StationName": "OBE POWER MYSTIC POINTE 1",
      "StreetAddress": "3560 Mystic Pointe Dr",
      "Latitude": 25.953362,
      "Longitude": -80.128856,
      "OpenDate": ""
    },
    {
      "StationName": "Renaissance Centre - Tesla Supercharger",
      "StreetAddress": "355 East Altamonte Drive",
      "Latitude": 28.6651,
      "Longitude": -81.3814,
      "OpenDate": "7/23/2018"
    },
    {
      "StationName": "Aventura Mall - Tesla Supercharger",
      "StreetAddress": "19501 Biscayne Boulevard",
      "Latitude": 25.9595,
      "Longitude": -80.143,
      "OpenDate": "7/23/2018"
    },
    {
      "StationName": "Regency Square - Tesla Supercharger",
      "StreetAddress": "2400 W Brandon Blvd",
      "Latitude": 27.9407,
      "Longitude": -82.3235,
      "OpenDate": "10/1/2014"
    },
    {
      "StationName": "Delray Marketplace - Tesla Supercharger",
      "StreetAddress": "14851 Lyons Road",
      "Latitude": 26.4556,
      "Longitude": -80.1904,
      "OpenDate": "7/23/2018"
    },
    {
      "StationName": "Sonny's BBQ - Tesla Supercharger",
      "StreetAddress": "33505 South Dixie Hwy",
      "Latitude": 25.4566,
      "Longitude": -80.4743,
      "OpenDate": "9/1/2017"
    },
    {
      "StationName": "Colonial Square - Tesla Supercharger",
      "StreetAddress": "9355 Six Mile Cypress Parkway",
      "Latitude": 26.6078,
      "Longitude": -81.8099,
      "OpenDate": "7/23/2018"
    },
    {
      "StationName": "Gulf Coast Town Center - Tesla Supercharger",
      "StreetAddress": "9903 Gulf Coast Main St.",
      "Latitude": 26.4856,
      "Longitude": -81.7871,
      "OpenDate": "6/1/2013"
    },
    {
      "StationName": "Florida Keys Marathon Airport - Tesla Supercharger",
      "StreetAddress": "9400 Overseas Hwy",
      "Latitude": 24.7261,
      "Longitude": -81.0479,
      "OpenDate": "3/1/2015"
    },
    {
      "StationName": "Museum Garage - Tesla Supercharger",
      "StreetAddress": "90 NE 41st Street",
      "Latitude": 25.8139,
      "Longitude": -80.1946,
      "OpenDate": "7/23/2018"
    },
    {
      "StationName": "Bayfront - Tesla Supercharger",
      "StreetAddress": "499 Bayfront Place",
      "Latitude": 26.1445,
      "Longitude": -81.7888,
      "OpenDate": "9/1/2017"
    },
    {
      "StationName": "Market Street at Heath Brook - Tesla Supercharger",
      "StreetAddress": "4414 SW College Road",
      "Latitude": 29.141,
      "Longitude": -82.1939,
      "OpenDate": "1/1/2015"
    },
    {
      "StationName": "Wawa - Tesla Supercharger",
      "StreetAddress": "6500 West Sand Lake Road",
      "Latitude": 28.4498,
      "Longitude": -81.4661,
      "OpenDate": "7/23/2018"
    },
    {
      "StationName": "Wawa - Tesla Supercharger",
      "StreetAddress": "3101 Gandy Blvd.",
      "Latitude": 27.8461,
      "Longitude": -82.6781,
      "OpenDate": "9/1/2017"
    },
    {
      "StationName": "The Fountains - Tesla Supercharger",
      "StreetAddress": "801 S. University Drive",
      "Latitude": 26.1086,
      "Longitude": -80.2524,
      "OpenDate": "12/31/2015"
    },
    {
      "StationName": "The Pavilion - Tesla Supercharger",
      "StreetAddress": "5302 South Williamson Blvd",
      "Latitude": 29.1086,
      "Longitude": -81.0346,
      "OpenDate": "10/1/2013"
    },
    {
      "StationName": "Town Center at St. Lucie West - Tesla Supercharger",
      "StreetAddress": "1701 NW Peacock Blvd",
      "Latitude": 27.3129,
      "Longitude": -80.4067,
      "OpenDate": "6/1/2013"
    },
    {
      "StationName": "University Station - Tesla Supercharger",
      "StreetAddress": "5903 Honore Ave",
      "Latitude": 27.3863,
      "Longitude": -82.4644,
      "OpenDate": "7/23/2018"
    },
    {
      "StationName": "St. Augustine Premium Outlets - Tesla Supercharger",
      "StreetAddress": "2700 Florida 16",
      "Latitude": 29.9243,
      "Longitude": -81.416,
      "OpenDate": "12/15/2013"
    },
    {
      "StationName": "Village Commons Shopping Center - Tesla Supercharger",
      "StreetAddress": "3528 Thomasville Rd",
      "Latitude": 30.5109,
      "Longitude": -84.2478,
      "OpenDate": "4/1/2015"
    },
    {
      "StationName": "Wawa - Tesla Supercharger",
      "StreetAddress": "2502 North 50th Street",
      "Latitude": 27.9653,
      "Longitude": -82.402,
      "OpenDate": "7/23/2018"
    },
    {
      "StationName": "Turkey Lake Service Plaza - Tesla Supercharger",
      "StreetAddress": "Mile Marker 263 Florida Turnpike",
      "Latitude": 28.5149,
      "Longitude": -81.5002,
      "OpenDate": "7/23/2018"
    },
    {
      "StationName": "Hammock Landing - Tesla Supercharger",
      "StreetAddress": "206 Palm Bay Road",
      "Latitude": 28.037,
      "Longitude": -80.6642,
      "OpenDate": "7/23/2018"
    },
    {
      "StationName": "FERNANDINABEACH CENTRAL LIBRARY",
      "StreetAddress": "25 N 4th St",
      "Latitude": 30.672074,
      "Longitude": -81.462386,
      "OpenDate": ""
    },
    {
      "StationName": "Big Cypress National Preserve - Oasis Visitor Center",
      "StreetAddress": "33100 Tamiami Trail E",
      "Latitude": 25.900807,
      "Longitude": -81.322125,
      "OpenDate": "5/30/2019"
    },
    {
      "StationName": "Everglades National Park - Ernest F. Coe Visitor Center",
      "StreetAddress": "40001 State Rd 9336",
      "Latitude": 25.39586,
      "Longitude": -80.584086,
      "OpenDate": "9/18/2018"
    },
    {
      "StationName": "Brickell City Center - North Block",
      "StreetAddress": "701 South Miami Ave",
      "Latitude": 25.768,
      "Longitude": -80.1928,
      "OpenDate": ""
    },
    {
      "StationName": "Brickell City Centre - East Block",
      "StreetAddress": "701 South Miami Ave",
      "Latitude": 25.76623,
      "Longitude": -80.19238,
      "OpenDate": ""
    },
    {
      "StationName": "Rise Brickell City Centre",
      "StreetAddress": "88 SE 7th Street",
      "Latitude": 25.767284,
      "Longitude": -80.194952,
      "OpenDate": ""
    },
    {
      "StationName": "Brickell City Centre - West Block",
      "StreetAddress": "701 South Miami Ave",
      "Latitude": 25.7675,
      "Longitude": -80.19323,
      "OpenDate": ""
    },
    {
      "StationName": "SEACOAST BANK CLERMONT FL 01",
      "StreetAddress": "1000 E Hwy 50",
      "Latitude": 28.547317,
      "Longitude": -81.739713,
      "OpenDate": ""
    },
    {
      "StationName": "TAMPA HOUSING ENCORE TEMPO 1",
      "StreetAddress": "1302 N Nebraska Ave",
      "Latitude": 27.95662,
      "Longitude": -82.45156,
      "OpenDate": ""
    },
    {
      "StationName": "WINTER GARDEN BOYD GARAGE 1",
      "StreetAddress": "160 S Boyd Street",
      "Latitude": 28.564492,
      "Longitude": -81.586963,
      "OpenDate": ""
    },
    {
      "StationName": "UF LAKE NONA EV CHARGER 01",
      "StreetAddress": "6500 Sanger Rd",
      "Latitude": 28.366094,
      "Longitude": -81.28992,
      "OpenDate": ""
    },
    {
      "StationName": "Tennis Court",
      "StreetAddress": "7911 Sailboat Key Blvd S",
      "Latitude": 27.750259,
      "Longitude": -82.748024,
      "OpenDate": ""
    },
    {
      "StationName": "CITY OF TAMPA PALM AVE GARAGE",
      "StreetAddress": "2010 N 13th St",
      "Latitude": 27.961339,
      "Longitude": -82.445909,
      "OpenDate": ""
    },
    {
      "StationName": "CITY OF TAMPA POE GARAGE 2",
      "StreetAddress": "120 N Ashley Dr",
      "Latitude": 27.950234,
      "Longitude": -82.462129,
      "OpenDate": ""
    },
    {
      "StationName": "SEACOAST BANK ALTAMONTE",
      "StreetAddress": "2695 W State Rd 434",
      "Latitude": 28.687159,
      "Longitude": -81.413971,
      "OpenDate": ""
    },
    {
      "StationName": "SEACOAST BANK WINTER PARK",
      "StreetAddress": "1031 W Morse Blvd",
      "Latitude": 28.597939,
      "Longitude": -81.362877,
      "OpenDate": ""
    },
    {
      "StationName": "ALLABOARDFLORID WPB 3",
      "StreetAddress": "591 Evernia St",
      "Latitude": 26.711601,
      "Longitude": -80.05657,
      "OpenDate": ""
    },
    {
      "StationName": "Lot P5 - Station 1",
      "StreetAddress": "140 7th Ave S",
      "Latitude": 27.763741,
      "Longitude": -82.634583,
      "OpenDate": ""
    },
    {
      "StationName": "Bayfront Tower - P4 - 1",
      "StreetAddress": "1 Beach Dr SE",
      "Latitude": 27.770802,
      "Longitude": -82.633652,
      "OpenDate": ""
    },
    {
      "StationName": "HSN - 1",
      "StreetAddress": "1 HSN Drive",
      "Latitude": 27.87999,
      "Longitude": -82.667665,
      "OpenDate": ""
    },
    {
      "StationName": "CITY OF TAMPA FT BROOKE 02",
      "StreetAddress": "Fort Brooke Parking Garage",
      "Latitude": 27.946059,
      "Longitude": -82.456987,
      "OpenDate": ""
    },
    {
      "StationName": "MASTER OFFICE HALLENDALE 1",
      "StreetAddress": "1850 S Ocean Dr",
      "Latitude": 25.984113,
      "Longitude": -80.118463,
      "OpenDate": ""
    },
    {
      "StationName": "MIAMI SPRINGS CHARGEPOINT 1",
      "StreetAddress": "650 Curtiss Pkwy",
      "Latitude": 25.81371,
      "Longitude": -80.28833,
      "OpenDate": ""
    },
    {
      "StationName": "CITY OF TAMPA CENTROYBOR",
      "StreetAddress": "1500 E 5th Ave",
      "Latitude": 27.9592,
      "Longitude": -82.441902,
      "OpenDate": ""
    },
    {
      "StationName": "OBE POWER ONE MIAMI 2",
      "StreetAddress": "325 S Biscayne Blvd",
      "Latitude": 25.771567,
      "Longitude": -80.186234,
      "OpenDate": ""
    },
    {
      "StationName": "KEYSTONEHEIGHTS TENNIS COURT PL",
      "StreetAddress": "195 SE Lakeview Dr",
      "Latitude": 29.78068,
      "Longitude": -82.029588,
      "OpenDate": ""
    },
    {
      "StationName": "REEF REEF ENV EDUCA",
      "StreetAddress": "98300 Overseas Highway",
      "Latitude": 25.081528,
      "Longitude": -80.454987,
      "OpenDate": ""
    },
    {
      "StationName": "OBE POWER GRAHAM 6621",
      "StreetAddress": "6621 Main St",
      "Latitude": 25.913271,
      "Longitude": -80.308001,
      "OpenDate": ""
    },
    {
      "StationName": "ELAN ROSEMARY ELAN ROSEMARY 1",
      "StreetAddress": "710 N Lemon Ave",
      "Latitude": 27.342298,
      "Longitude": -82.540221,
      "OpenDate": ""
    },
    {
      "StationName": "OBE POWER 2000 WILLIAMS",
      "StreetAddress": "2000 Island Blvd",
      "Latitude": 25.939359,
      "Longitude": -80.137065,
      "OpenDate": ""
    },
    {
      "StationName": "Largo Library",
      "StreetAddress": "105 Central Park Drive",
      "Latitude": 27.91296,
      "Longitude": -82.783012,
      "OpenDate": ""
    },
    {
      "StationName": "R0177 STATION 02",
      "StreetAddress": "199 S Lake Destiny Dr",
      "Latitude": 28.616691,
      "Longitude": -81.388158,
      "OpenDate": ""
    },
    {
      "StationName": "Fairbanks House, a Select Registry Property - Tesla Destination",
      "StreetAddress": "227 S 7th St",
      "Latitude": 30.667437,
      "Longitude": -81.460571,
      "OpenDate": "4/1/2015"
    },
    {
      "StationName": "Water Street Hotel & Marina - Tesla Destination",
      "StreetAddress": "329 Water St",
      "Latitude": 29.731734,
      "Longitude": -84.987921,
      "OpenDate": "2/1/2016"
    },
    {
      "StationName": "The Ritz-Carlton Bal Harbour, Miami - Tesla Destination",
      "StreetAddress": "10295 Collins Ave",
      "Latitude": 25.899172,
      "Longitude": -80.123083,
      "OpenDate": "7/15/2016"
    },
    {
      "StationName": "Bal Harbour Shops - Parking Garage - Tesla Destination",
      "StreetAddress": "9700 Collins Ave",
      "Latitude": 25.887275,
      "Longitude": -80.124902,
      "OpenDate": "2/1/2016"
    },
    {
      "StationName": "The St. Regis Bal Harbour Resort - Tesla Destination",
      "StreetAddress": "9703  Collins Ave",
      "Latitude": 25.88891,
      "Longitude": -80.122291,
      "OpenDate": "9/1/2017"
    },
    {
      "StationName": "Royal Palm Place - Tesla Destination",
      "StreetAddress": "194 SE 1st Ave",
      "Latitude": 26.347899,
      "Longitude": -80.085497,
      "OpenDate": "11/1/2018"
    },
    {
      "StationName": "Wyndham Deerfield Beach Resort - Tesla Destination",
      "StreetAddress": "2096 NE 2nd St",
      "Latitude": 26.316084,
      "Longitude": -80.075816,
      "OpenDate": "3/1/2017"
    },
    {
      "StationName": "Waldorf Astoria Boca Raton Resort & Club - Tesla Destination",
      "StreetAddress": "501 E Camino Real",
      "Latitude": 26.342284,
      "Longitude": -80.078495,
      "OpenDate": "4/1/2015"
    },
    {
      "StationName": "Boca Beach Club - Tesla Destination",
      "StreetAddress": "900 S Ocean Blvd",
      "Latitude": 26.338553,
      "Longitude": -80.071197,
      "OpenDate": "4/1/2015"
    },
    {
      "StationName": "Waterstone Resort & Marina Boca Raton - Tesla Destination",
      "StreetAddress": "999 E Camino Real",
      "Latitude": 26.338931,
      "Longitude": -80.073385,
      "OpenDate": "11/1/2018"
    },
    {
      "StationName": "Hyatt Regency Coconut Point Resort & Spa - Tesla Destination",
      "StreetAddress": "5001 Coconut Rd",
      "Latitude": 26.397757,
      "Longitude": -81.836773,
      "OpenDate": "4/1/2016"
    },
    {
      "StationName": "Holiday Inn Express Bonita Springs - Tesla Destination",
      "StreetAddress": "27891 Crown Lake Blvd",
      "Latitude": 26.332612,
      "Longitude": -81.803831,
      "OpenDate": "11/1/2016"
    },
    {
      "StationName": "Fairfield Inn and Suites Sarasota Lakewood Ranch - Tesla Destination",
      "StreetAddress": "6105 Exchange Wy",
      "Latitude": 27.390279,
      "Longitude": -82.446564,
      "OpenDate": "9/1/2017"
    },
    {
      "StationName": "Bridgewalk - A Landmark Resort - Tesla Destination",
      "StreetAddress": "100 Bridge St",
      "Latitude": 27.465453,
      "Longitude": -82.697995,
      "OpenDate": "3/1/2017"
    },
    {
      "StationName": "Silver Surf Gulf Beach Resort - Tesla Destination",
      "StreetAddress": "1301 Gulf Dr N",
      "Latitude": 27.472797,
      "Longitude": -82.700676,
      "OpenDate": "3/1/2017"
    },
    {
      "StationName": "Radisson Resort Port,Cape Canaveral/Cocoa Beach - Tesla Destination",
      "StreetAddress": "8701 Astronaut Blvd",
      "Latitude": 28.394939,
      "Longitude": -80.612884,
      "OpenDate": "3/1/2017"
    },
    {
      "StationName": "Residence Inn by Marriott Cape Canaveral Cocoa Beach - Tesla Destination",
      "StreetAddress": "8959 Astronaut Blvd",
      "Latitude": 28.399022,
      "Longitude": -80.614867,
      "OpenDate": "9/1/2017"
    },
    {
      "StationName": "Hampton Inn & Suites Cape Coral/Fort Myers - Tesla Destination",
      "StreetAddress": "619 SE 47th Ter",
      "Latitude": 26.563963,
      "Longitude": -81.960361,
      "OpenDate": "3/1/2017"
    },
    {
      "StationName": "South Seas Island Resort - Tesla Destination",
      "StreetAddress": "5400 Plantation Rd",
      "Latitude": 26.5254,
      "Longitude": -82.1915,
      "OpenDate": "4/1/2015"
    },
    {
      "StationName": "Bohemian Hotel Celebration - Tesla Destination",
      "StreetAddress": "700 Bloom St",
      "Latitude": 28.316948,
      "Longitude": -81.541607,
      "OpenDate": "3/1/2017"
    },
    {
      "StationName": "Dimmitt Automotive Group Collision Center - Tesla Destination",
      "StreetAddress": "25191  US Highway 19 N",
      "Latitude": 28.001146,
      "Longitude": -82.728807,
      "OpenDate": "4/1/2015"
    },
    {
      "StationName": "Surf Style - Tesla Destination",
      "StreetAddress": "311 S Gulfview Blvd",
      "Latitude": 27.973108,
      "Longitude": -82.828822,
      "OpenDate": "8/15/2016"
    },
    {
      "StationName": "Hilton Clearwater Beach Resort and Spa - Tesla Destination",
      "StreetAddress": "400 Mandalay Ave",
      "Latitude": 27.978651,
      "Longitude": -82.827662,
      "OpenDate": "11/1/2018"
    },
    {
      "StationName": "Hilton Cocoa Beach Oceanfront - Tesla Destination",
      "StreetAddress": "1550 N Atlantic Ave",
      "Latitude": 28.338704,
      "Longitude": -80.608454,
      "OpenDate": "5/1/2016"
    },
    {
      "StationName": "Hampton Inn Cocoa Beach - Tesla Destination",
      "StreetAddress": "3425  N Atlantic Ave",
      "Latitude": 28.350402,
      "Longitude": -80.608785,
      "OpenDate": "1/1/2016"
    },
    {
      "StationName": "Westgate Cocoa Beach Pier - Tesla Destination",
      "StreetAddress": "401 Meade Ave",
      "Latitude": 28.367788,
      "Longitude": -80.602839,
      "OpenDate": "11/1/2018"
    },
    {
      "StationName": "Hyatt Regency Coral Gables Miami - Tesla Destination",
      "StreetAddress": "50 Alhambra Plaza",
      "Latitude": 25.752069,
      "Longitude": -80.255789,
      "OpenDate": "4/1/2016"
    },
    {
      "StationName": "City of Coral Springs - Tesla Destination",
      "StreetAddress": "2501 Coral Springs Dr",
      "Latitude": 26.26189,
      "Longitude": -80.265841,
      "OpenDate": "9/1/2017"
    },
    {
      "StationName": "Hampton Inn Crystal River - Tesla Destination",
      "StreetAddress": "1103 N Suncoast Blvd",
      "Latitude": 28.878049,
      "Longitude": -82.579839,
      "OpenDate": "5/1/2016"
    },
    {
      "StationName": "Hyatt Place Ft. Lauderdale Airport & Cruise Port - Tesla Destination",
      "StreetAddress": "91 SW 18th Ave",
      "Latitude": 26.049096,
      "Longitude": -80.160077,
      "OpenDate": "3/1/2017"
    },
    {
      "StationName": "Bahama Bay Resort - Tesla Destination",
      "StreetAddress": "400 Gran Bahama Blvd",
      "Latitude": 28.32129,
      "Longitude": -81.658401,
      "OpenDate": "1/1/2015"
    },
    {
      "StationName": "Hilton Garden Inn Daytona Beach Airport - Tesla Destination",
      "StreetAddress": "189 Midway Ave",
      "Latitude": 29.192937,
      "Longitude": -81.062283,
      "OpenDate": "11/1/2018"
    },
    {
      "StationName": "Bahama House - Tesla Destination",
      "StreetAddress": "2001 S Atlantic Ave",
      "Latitude": 29.202842,
      "Longitude": -80.995687,
      "OpenDate": "3/1/2017"
    },
    {
      "StationName": "El Caribe Resort & Conference Center - Tesla Destination",
      "StreetAddress": "2125 S Atlantic Ave",
      "Latitude": 29.197705,
      "Longitude": -80.993159,
      "OpenDate": "9/1/2017"
    },
    {
      "StationName": "The Shores Resort & Spa - Tesla Destination",
      "StreetAddress": "2637 S Atlantic Ave",
      "Latitude": 29.18104,
      "Longitude": -80.985036,
      "OpenDate": "11/1/2018"
    },
    {
      "StationName": "Royal Blues Hotel - Tesla Destination",
      "StreetAddress": "45  NE 21st Ave",
      "Latitude": 26.314926,
      "Longitude": -80.075989,
      "OpenDate": "8/15/2016"
    },
    {
      "StationName": "Hyatt Place Delray Beach - Tesla Destination",
      "StreetAddress": "104 NE 2nd Ave",
      "Latitude": 26.463896,
      "Longitude": -80.071407,
      "OpenDate": "11/1/2018"
    },
    {
      "StationName": "The Seagate Hotel And Spa - Tesla Destination",
      "StreetAddress": "1000 E Atlantic Ave",
      "Latitude": 26.461228,
      "Longitude": -80.061312,
      "OpenDate": "11/1/2016"
    },
    {
      "StationName": "Emerald Grande at HarborWalk Village - Tesla Destination",
      "StreetAddress": "10 Harbor Blvd",
      "Latitude": 30.394877,
      "Longitude": -86.512414,
      "OpenDate": "11/1/2018"
    },
    {
      "StationName": "Fairfield Inn & Suites Destin - Tesla Destination",
      "StreetAddress": "19001 Emerald Coast Pkwy",
      "Latitude": 30.387886,
      "Longitude": -86.446111,
      "OpenDate": "3/1/2017"
    },
    {
      "StationName": "Henderson Beach Resort - Tesla Destination",
      "StreetAddress": "200 Henderson Resort Wy",
      "Latitude": 30.384807,
      "Longitude": -86.431563,
      "OpenDate": "11/1/2018"
    },
    {
      "StationName": "TOPS'L Beach and Racquet Resort - Tesla Destination",
      "StreetAddress": "9011 Highway 98 W",
      "Latitude": 30.378144,
      "Longitude": -86.326865,
      "OpenDate": "2/1/2016"
    },
    {
      "StationName": "Comfort Suites near Rainbow Springs - Tesla Destination",
      "StreetAddress": "20052 Brooks St",
      "Latitude": 29.058805,
      "Longitude": -82.453223,
      "OpenDate": "11/1/2018"
    },
    {
      "StationName": "Amelia Island Williams House Bed and Breakfast - Tesla Destination",
      "StreetAddress": "103 S 9th St",
      "Latitude": 30.669186,
      "Longitude": -81.458511,
      "OpenDate": "9/1/2016"
    },
    {
      "StationName": "Hampton Inn & Suites Amelia Island Harbor Front - Tesla Destination",
      "StreetAddress": "19 S 2nd St",
      "Latitude": 30.670534,
      "Longitude": -81.464462,
      "OpenDate": "9/1/2017"
    },
    {
      "StationName": "Omni Amelia Island Plantation Resort - Tesla Destination",
      "StreetAddress": "39 Beach Lagoon Rd",
      "Latitude": 30.55553,
      "Longitude": -81.443994,
      "OpenDate": "11/1/2018"
    },
    {
      "StationName": "The Ritz-Carlton, Amelia Island - Tesla Destination",
      "StreetAddress": "4750 Amelia Island Pkwy",
      "Latitude": 30.593866,
      "Longitude": -81.444603,
      "OpenDate": "4/1/2015"
    },
    {
      "StationName": "The Hoyt House, a Select Registry Property - Tesla Destination",
      "StreetAddress": "804 Atlantic Ave",
      "Latitude": 30.670276,
      "Longitude": -81.458504,
      "OpenDate": "7/15/2016"
    },
    {
      "StationName": "Townies Pizzeria - Tesla Destination",
      "StreetAddress": "819 TJ Courson Rd",
      "Latitude": 30.645892,
      "Longitude": -81.458293,
      "OpenDate": "3/1/2017"
    },
    {
      "StationName": "A1A Motel - Tesla Destination",
      "StreetAddress": "1204 S Oceanshore Blvd",
      "Latitude": 29.473766,
      "Longitude": -81.124179,
      "OpenDate": "1/1/2016"
    },
    {
      "StationName": "The Ritz-Carlton, Fort Lauderdale - Tesla Destination",
      "StreetAddress": "1 N Ft Lauderdale Beach Blvd",
      "Latitude": 26.123223,
      "Longitude": -80.104499,
      "OpenDate": "5/1/2016"
    },
    {
      "StationName": "Hilton Fort Lauderdale Marina - Tesla Destination",
      "StreetAddress": "1881 SE 17th St",
      "Latitude": 26.100989,
      "Longitude": -80.122343,
      "OpenDate": "2/1/2016"
    },
    {
      "StationName": "Hyatt Regency Pier Sixty Six - Tesla Destination",
      "StreetAddress": "2301 SE 17th St",
      "Latitude": 26.101031,
      "Longitude": -80.114539,
      "OpenDate": "2/1/2016"
    },
    {
      "StationName": "The Galleria at Fort Lauderdale - Tesla Destination",
      "StreetAddress": "2414 E Sunrise Blvd",
      "Latitude": 26.136555,
      "Longitude": -80.113579,
      "OpenDate": "11/1/2018"
    },
    {
      "StationName": "W Fort Lauderdale - Tesla Destination",
      "StreetAddress": "401 N Fort Lauderdale Beach Blvd",
      "Latitude": 26.128544,
      "Longitude": -80.104411,
      "OpenDate": "3/1/2016"
    },
    {
      "StationName": "Hilton Fort Lauderdale Beach Resort - Tesla Destination",
      "StreetAddress": "505 N Fort Lauderdale Beach Blvd",
      "Latitude": 26.129421,
      "Longitude": -80.104108,
      "OpenDate": "4/1/2015"
    },
    {
      "StationName": "Banyan Air Service - Tesla Destination",
      "StreetAddress": "5360 NW 20th Terrace",
      "Latitude": 26.193046,
      "Longitude": -80.16963,
      "OpenDate": "4/1/2015"
    },
    {
      "StationName": "The Atlantic Hotel and Spa - Tesla Destination",
      "StreetAddress": "601 N Fort Lauderdale Beach Blvd",
      "Latitude": 26.131543,
      "Longitude": -80.103751,
      "OpenDate": "9/1/2017"
    },
    {
      "StationName": "Fort Lauderdale Hollywood International Airport - Tesla Destination",
      "StreetAddress": "400 Terminal Dr",
      "Latitude": 26.0704,
      "Longitude": -80.14312,
      "OpenDate": "9/1/2017"
    },
    {
      "StationName": "Culver's of Fort Meyers - Tesla Destination",
      "StreetAddress": "9340 Six Mile Cypress Pkwy",
      "Latitude": 26.606269,
      "Longitude": -81.813187,
      "OpenDate": "7/15/2016"
    },
    {
      "StationName": "Sanibel Harbour Marriott Resort & Spa - Tesla Destination",
      "StreetAddress": "17260 Harbour Pointe Dr",
      "Latitude": 26.489317,
      "Longitude": -82.011195,
      "OpenDate": "11/1/2018"
    },
    {
      "StationName": "Hampton Inn & Suites Fort Myers-Colonial Blvd. - Tesla Destination",
      "StreetAddress": "4350 Executive Cir",
      "Latitude": 26.598866,
      "Longitude": -81.843023,
      "OpenDate": "5/1/2016"
    },
    {
      "StationName": "The Yucatan Beach Stand - Tesla Destination",
      "StreetAddress": "250  Old San Carlos Blvd",
      "Latitude": 26.454398,
      "Longitude": -81.955169,
      "OpenDate": "11/1/2018"
    },
    {
      "StationName": "The Gulf Okaloosa Island - Tesla Destination",
      "StreetAddress": "1284 Marler Ave",
      "Latitude": 30.4004,
      "Longitude": -86.596909,
      "OpenDate": "11/1/2016"
    },
    {
      "StationName": "Hilton Garden Inn Fort Walton Beach - Tesla Destination",
      "StreetAddress": "1297 Miracle Strip Pkwy SE",
      "Latitude": 30.395194,
      "Longitude": -86.597456,
      "OpenDate": "11/1/2018"
    },
    {
      "StationName": "Four Points by Sheraton - Destin / Fort Walton Beach - Tesla Destination",
      "StreetAddress": "1325 Miracle Strip Pkwy SE",
      "Latitude": 30.395786,
      "Longitude": -86.595433,
      "OpenDate": "7/15/2016"
    },
    {
      "StationName": "Holiday Inn Express Fort Walton Beach - Tesla Destination",
      "StreetAddress": "522 Maryesther Cutoff NW",
      "Latitude": 30.423077,
      "Longitude": -86.649484,
      "OpenDate": "11/1/2016"
    },
    {
      "StationName": "Sonny's BBQ - Greenacres - Tesla Destination",
      "StreetAddress": "6120 Lake Worth Rd",
      "Latitude": 26.618533,
      "Longitude": -80.139679,
      "OpenDate": "9/1/2017"
    },
    {
      "StationName": "Red Fish Blue Fish - Tesla Destination",
      "StreetAddress": "5 Via De Luna Dr",
      "Latitude": 30.334399,
      "Longitude": -87.137233,
      "OpenDate": "3/1/2016"
    },
    {
      "StationName": "Historic Peninsula Inn - Tesla Destination",
      "StreetAddress": "2937 Beach Blvd S",
      "Latitude": 27.740376,
      "Longitude": -82.708181,
      "OpenDate": "11/1/2018"
    },
    {
      "StationName": "Harry and the Natives - Tesla Destination",
      "StreetAddress": "11910 SE Federal Hwy",
      "Latitude": 27.058897,
      "Longitude": -80.137009,
      "OpenDate": "9/1/2017"
    },
    {
      "StationName": "River Lily Inn Bed and Breakfast - Tesla Destination",
      "StreetAddress": "558  Riverside Dr",
      "Latitude": 29.237244,
      "Longitude": -81.032405,
      "OpenDate": "9/1/2017"
    },
    {
      "StationName": "Copper Bottom Craft Distillery - Tesla Destination",
      "StreetAddress": "998 N Beach St",
      "Latitude": 29.229301,
      "Longitude": -81.027765,
      "OpenDate": "9/1/2017"
    },
    {
      "StationName": "Seminole Hard Rock Hotel & Casino - Tesla Destination",
      "StreetAddress": "1 Seminole Wy",
      "Latitude": 26.051,
      "Longitude": -80.210599,
      "OpenDate": "11/1/2018"
    },
    {
      "StationName": "Margaritaville Hollywood Beach Resort - Tesla Destination",
      "StreetAddress": "1111 N Ocean Dr",
      "Latitude": 26.01837,
      "Longitude": -80.116889,
      "OpenDate": "3/1/2016"
    },
    {
      "StationName": "Windemere Inn by the Sea - Tesla Destination",
      "StreetAddress": "815 S Miramar Ave",
      "Latitude": 28.086314,
      "Longitude": -80.564663,
      "OpenDate": "4/1/2015"
    },
    {
      "StationName": "Legacy Vacation Club Indian Shores - Tesla Destination",
      "StreetAddress": "19607 Gulf Blvd",
      "Latitude": 27.855203,
      "Longitude": -82.844796,
      "OpenDate": "9/1/2017"
    },
    {
      "StationName": "The Caribbean Resort - Tesla Destination",
      "StreetAddress": "117 S Carroll St",
      "Latitude": 24.918756,
      "Longitude": -80.631116,
      "OpenDate": "7/15/2016"
    },
    {
      "StationName": "The Moorings Village and Spa - Tesla Destination",
      "StreetAddress": "123 Beach Rd",
      "Latitude": 24.914847,
      "Longitude": -80.636075,
      "OpenDate": "4/1/2016"
    },
    {
      "StationName": "Casa Morada Hotel - Tesla Destination",
      "StreetAddress": "136 Madeira Rd",
      "Latitude": 24.924262,
      "Longitude": -80.631147,
      "OpenDate": "9/1/2017"
    },
    {
      "StationName": "Pierre's Restaurant & Lounge Morada Bay Beach Cafe - Tesla Destination",
      "StreetAddress": "81600 Overseas Hwy",
      "Latitude": 24.915998,
      "Longitude": -80.638685,
      "OpenDate": "5/1/2016"
    },
    {
      "StationName": "Cheeca Lodge & Spa - Tesla Destination",
      "StreetAddress": "81801 Overseas Hwy",
      "Latitude": 24.918009,
      "Longitude": -80.635333,
      "OpenDate": "4/1/2015"
    },
    {
      "StationName": "Marker 88 Restaurant - Tesla Destination",
      "StreetAddress": "88000  Overseas Hwy",
      "Latitude": 24.971523,
      "Longitude": -80.55795,
      "OpenDate": "2/1/2016"
    },
    {
      "StationName": "Sheraton Jacksonville Hotel - Tesla Destination",
      "StreetAddress": "10605 Deerwood Park Blvd",
      "Latitude": 30.247877,
      "Longitude": -81.538947,
      "OpenDate": "1/1/2016"
    },
    {
      "StationName": "Hilton Garden Inn Jacksonville Airport - Tesla Destination",
      "StreetAddress": "13503 Ranch Rd",
      "Latitude": 30.480916,
      "Longitude": -81.651252,
      "OpenDate": "11/1/2018"
    },
    {
      "StationName": "Courtyard Jacksonville Mayo Clinic/Beaches - Tesla Destination",
      "StreetAddress": "14390 Mayo Blvd",
      "Latitude": 30.261363,
      "Longitude": -81.44042,
      "OpenDate": "11/1/2018"
    },
    {
      "StationName": "The Riverdale Inn - Tesla Destination",
      "StreetAddress": "1521 Riverside Ave",
      "Latitude": 30.312228,
      "Longitude": -81.678161,
      "OpenDate": "11/1/2018"
    },
    {
      "StationName": "Best Western Southside Hotel & Suites - Tesla Destination",
      "StreetAddress": "4580 Collins Rd",
      "Latitude": 30.192593,
      "Longitude": -81.707354,
      "OpenDate": "11/1/2018"
    },
    {
      "StationName": "Hampton Inn Jacksonville South/I-95 at JTB - Tesla Destination",
      "StreetAddress": "4681 Lenoir Ave E",
      "Latitude": 30.249284,
      "Longitude": -81.598086,
      "OpenDate": "9/1/2017"
    },
    {
      "StationName": "Aloft Jacksonville Tapestry Park - Tesla Destination",
      "StreetAddress": "4812 West Deer Lake Dr",
      "Latitude": 30.259887,
      "Longitude": -81.555021,
      "OpenDate": "11/1/2018"
    },
    {
      "StationName": "Fairfield Inn & Suites Jacksonville Butler Boulevard - Tesla Destination",
      "StreetAddress": "4888 Lenoir Ave",
      "Latitude": 30.248925,
      "Longitude": -81.599475,
      "OpenDate": "9/1/2017"
    },
    {
      "StationName": "Four Points by Sheraton Jacksonville Beachfront - Tesla Destination",
      "StreetAddress": "11 1st St N",
      "Latitude": 30.289467,
      "Longitude": -81.389363,
      "OpenDate": "2/5/2015"
    },
    {
      "StationName": "Holiday Inn Express Jacksonville Beach - Tesla Destination",
      "StreetAddress": "1101 Beach Blvd",
      "Latitude": 30.288445,
      "Longitude": -81.400789,
      "OpenDate": "2/1/2016"
    },
    {
      "StationName": "Hutchinson Shores Resort & Spa - Tesla Destination",
      "StreetAddress": "3793 NE Ocean Blvd",
      "Latitude": 27.251388,
      "Longitude": -80.194833,
      "OpenDate": "11/1/2018"
    },
    {
      "StationName": "Ocean Key Resort and Spa - Tesla Destination",
      "StreetAddress": "0 Duval St",
      "Latitude": 24.56072968,
      "Longitude": -81.80660646,
      "OpenDate": "4/1/2015"
    },
    {
      "StationName": "Pier House Resort & Spa - Tesla Destination",
      "StreetAddress": "1 Duval St",
      "Latitude": 24.561138,
      "Longitude": -81.806112,
      "OpenDate": "4/1/2015"
    },
    {
      "StationName": "Orchid Key Inn - Tesla Destination",
      "StreetAddress": "1004 Duval St",
      "Latitude": 24.550549,
      "Longitude": -81.799435,
      "OpenDate": "3/1/2017"
    },
    {
      "StationName": "The Marker Resort - Tesla Destination",
      "StreetAddress": "200 William St",
      "Latitude": 24.560402,
      "Longitude": -81.801832,
      "OpenDate": "3/1/2017"
    },
    {
      "StationName": "24 North Hotel - Tesla Destination",
      "StreetAddress": "3820 N Roosevelt Blvd",
      "Latitude": 24.571469,
      "Longitude": -81.75518,
      "OpenDate": "2/1/2016"
    },
    {
      "StationName": "The Gates Hotel - Tesla Destination",
      "StreetAddress": "3824 N Roosevelt Blvd",
      "Latitude": 24.571234,
      "Longitude": -81.754543,
      "OpenDate": "2/1/2016"
    },
    {
      "StationName": "Key West Marriott Beachside Hotel - Tesla Destination",
      "StreetAddress": "3841 North Roosevelt Blvd",
      "Latitude": 24.571045,
      "Longitude": -81.752814,
      "OpenDate": "11/1/2018"
    },
    {
      "StationName": "Hilton Garden Inn Key West / The Keys Collection - Tesla Destination",
      "StreetAddress": "3850  N Roosevelt Blvd",
      "Latitude": 24.57042,
      "Longitude": -81.752925,
      "OpenDate": "9/1/2017"
    },
    {
      "StationName": "Fairfield Inn & Suites Key West - Tesla Destination",
      "StreetAddress": "3852 N Roosevelt Blvd",
      "Latitude": 24.568794,
      "Longitude": -81.75253,
      "OpenDate": "3/1/2017"
    },
    {
      "StationName": "The Gardens Hotel - Tesla Destination",
      "StreetAddress": "526 Angela St",
      "Latitude": 24.554141,
      "Longitude": -81.800062,
      "OpenDate": "3/1/2016"
    },
    {
      "StationName": "Hyatt Centric Key West Resort & Spa - Tesla Destination",
      "StreetAddress": "601 Front St",
      "Latitude": 24.561217,
      "Longitude": -81.804847,
      "OpenDate": "11/1/2018"
    },
    {
      "StationName": "The Conch House Heritage Inn - Tesla Destination",
      "StreetAddress": "625 Truman Ave",
      "Latitude": 24.552607,
      "Longitude": -81.797137,
      "OpenDate": "4/1/2016"
    },
    {
      "StationName": "The Mermaid & The Alligator - Tesla Destination",
      "StreetAddress": "729 Truman Ave",
      "Latitude": 24.553515,
      "Longitude": -81.795727,
      "OpenDate": "1/1/2016"
    },
    {
      "StationName": "Silver Palms Inn - Tesla Destination",
      "StreetAddress": "830 Truman Ave",
      "Latitude": 24.553534,
      "Longitude": -81.794655,
      "OpenDate": "4/1/2015"
    },
    {
      "StationName": "Legacy Vacation Club Kissimmee - Tesla Destination",
      "StreetAddress": "2800 N. Poinciana Blvd",
      "Latitude": 28.329517,
      "Longitude": -81.490579,
      "OpenDate": "9/1/2017"
    },
    {
      "StationName": "Park Inn by Radisson Resort & Conference Orlando - Tesla Destination",
      "StreetAddress": "3011 Maingate Ln",
      "Latitude": 28.336865,
      "Longitude": -81.588055,
      "OpenDate": "9/1/2017"
    },
    {
      "StationName": "Embassy Suites Orlando LBVS - Tesla Destination",
      "StreetAddress": "4955 Kyngs Heath Rd",
      "Latitude": 28.336232,
      "Longitude": -81.481239,
      "OpenDate": "11/1/2018"
    },
    {
      "StationName": "Hampton Inn & Suites Lady Lake/The Villages - Tesla Destination",
      "StreetAddress": "11727 NE 63rd Dr",
      "Latitude": 28.926305,
      "Longitude": -81.998564,
      "OpenDate": "9/1/2016"
    },
    {
      "StationName": "Sea Lord Hotel and Beachclub - Tesla Destination",
      "StreetAddress": "4140 El Mar Dr",
      "Latitude": 26.185312,
      "Longitude": -80.095894,
      "OpenDate": "11/1/2018"
    },
    {
      "StationName": "Little Palm Island Resort and Spa - Tesla Destination",
      "StreetAddress": "28500 Overseas Hwy",
      "Latitude": 24.6656,
      "Longitude": -81.386344,
      "OpenDate": "4/1/2016"
    },
    {
      "StationName": "Wekiva Island - Tesla Destination",
      "StreetAddress": "1014 Miami Springs Dr",
      "Latitude": 28.713514,
      "Longitude": -81.44362,
      "OpenDate": "4/1/2015"
    },
    {
      "StationName": "Sheraton Orlando North - Tesla Destination",
      "StreetAddress": "600 N Lake Destiny Rd",
      "Latitude": 28.632754,
      "Longitude": -81.391112,
      "OpenDate": "11/1/2018"
    },
    {
      "StationName": "Thurston House - Tesla Destination",
      "StreetAddress": "851 Lake Ave",
      "Latitude": 28.6189,
      "Longitude": -81.373759,
      "OpenDate": "2/1/2016"
    },
    {
      "StationName": "Eau Palm Beach Resort and Spa - Tesla Destination",
      "StreetAddress": "100 S Ocean Blvd",
      "Latitude": 26.582798,
      "Longitude": -80.038229,
      "OpenDate": "9/1/2017"
    },
    {
      "StationName": "Hyatt Place / Faro Blanco Resort & Yacht Club - Tesla Destination",
      "StreetAddress": "1996  Overseas Hwy",
      "Latitude": 24.71098,
      "Longitude": -81.10521,
      "OpenDate": "9/1/2017"
    },
    {
      "StationName": "Marco Island Marriott Resort, Golf Club, & Spa - Tesla Destination",
      "StreetAddress": "400 S Collier Blvd",
      "Latitude": 25.92839,
      "Longitude": -81.728379,
      "OpenDate": "7/15/2016"
    },
    {
      "StationName": "Marriott's Crystal Shores - Tesla Destination",
      "StreetAddress": "600 S Collier Blvd",
      "Latitude": 25.920498,
      "Longitude": -81.728437,
      "OpenDate": "9/1/2017"
    },
    {
      "StationName": "Hampton Inn & Suites Mary Esther - Fort Walton Beach - Tesla Destination",
      "StreetAddress": "301 Hollywood Blvd E",
      "Latitude": 30.414022,
      "Longitude": -86.65711,
      "OpenDate": "3/1/2017"
    },
    {
      "StationName": "Apex Jet Center - Tesla Destination",
      "StreetAddress": "150 S Apollo Blvd",
      "Latitude": 28.105634,
      "Longitude": -80.629259,
      "OpenDate": "4/1/2015"
    },
    {
      "StationName": "Brevard Medical City - Tesla Destination",
      "StreetAddress": "6619 N Wickham Rd",
      "Latitude": 28.218611,
      "Longitude": -80.675377,
      "OpenDate": "9/1/2017"
    },
    {
      "StationName": "Holiday Inn Melbourne-Viera Conference Center - Tesla Destination",
      "StreetAddress": "8298  N Wickham Rd",
      "Latitude": 28.231653,
      "Longitude": -80.71666,
      "OpenDate": "4/1/2015"
    },
    {
      "StationName": "Port d'Hiver Bed & Breakfast - Tesla Destination",
      "StreetAddress": "201  Ocean Ave",
      "Latitude": 28.067912,
      "Longitude": -80.557619,
      "OpenDate": "11/1/2018"
    },
    {
      "StationName": "Sea View Inn - Tesla Destination",
      "StreetAddress": "4215 S Hwy A1A",
      "Latitude": 28.005563,
      "Longitude": -80.527748,
      "OpenDate": "11/1/2018"
    },
    {
      "StationName": "InterContinental Miami - Tesla Destination",
      "StreetAddress": "100 Chopin Plaza",
      "Latitude": 25.772324,
      "Longitude": -80.185489,
      "OpenDate": "4/1/2015"
    },
    {
      "StationName": "JW Marriott Miami - Tesla Destination",
      "StreetAddress": "1109 Brickell Ave",
      "Latitude": 25.762533,
      "Longitude": -80.191164,
      "OpenDate": "11/1/2018"
    },
    {
      "StationName": "DoubleTree by Hilton Grand Hotel Biscayne Bay - Tesla Destination",
      "StreetAddress": "1717 North Bayshore Dr",
      "Latitude": 25.79158,
      "Longitude": -80.186174,
      "OpenDate": "3/1/2017"
    },
    {
      "StationName": "Met 3 Garage - Tesla Destination",
      "StreetAddress": "250 SE 3rd Ave",
      "Latitude": 25.77214,
      "Longitude": -80.189124,
      "OpenDate": "11/1/2018"
    },
    {
      "StationName": "Element Miami International Airport - Tesla Destination",
      "StreetAddress": "3525 NW 25th St",
      "Latitude": 25.799594,
      "Longitude": -80.254003,
      "OpenDate": "11/1/2018"
    },
    {
      "StationName": "Hilton Garden Inn Miami Airport West - Tesla Destination",
      "StreetAddress": "3550 NW 74th Ave",
      "Latitude": 25.80822,
      "Longitude": -80.317797,
      "OpenDate": "11/1/2018"
    },
    {
      "StationName": "Four Points by Sheraton Miami Airport - Tesla Destination",
      "StreetAddress": "3570 NW 74th Ave",
      "Latitude": 25.808416,
      "Longitude": -80.317605,
      "OpenDate": "11/1/2018"
    },
    {
      "StationName": "Homewood Suites Miami Airport West - Tesla Destination",
      "StreetAddress": "3590 NW 74th Ave",
      "Latitude": 25.80796,
      "Longitude": -80.319448,
      "OpenDate": "11/1/2018"
    },
    {
      "StationName": "Embassy Suites by Hilton Miami International Airport - Tesla Destination",
      "StreetAddress": "3974 NW S River Dr",
      "Latitude": 25.806719,
      "Longitude": -80.261898,
      "OpenDate": "3/1/2016"
    },
    {
      "StationName": "Trump National Doral - Tesla Destination",
      "StreetAddress": "4400 NW 87th Ave",
      "Latitude": 25.818835,
      "Longitude": -80.343834,
      "OpenDate": "1/1/2016"
    },
    {
      "StationName": "Hampton Inn & Suites Miami Brickell Downtown - Tesla Destination",
      "StreetAddress": "50 SW 12th St",
      "Latitude": 25.762239,
      "Longitude": -80.194224,
      "OpenDate": "5/31/2012"
    },
    {
      "StationName": "Mandarin Oriental, Miami - Tesla Destination",
      "StreetAddress": "500 Brickell Key Dr",
      "Latitude": 25.76533,
      "Longitude": -80.185302,
      "OpenDate": "4/1/2015"
    },
    {
      "StationName": "South Gate Towers - Tesla Destination",
      "StreetAddress": "900 West Ave",
      "Latitude": 25.779229,
      "Longitude": -80.14229,
      "OpenDate": "11/1/2018"
    },
    {
      "StationName": "The Ritz-Carlton, South Beach - Tesla Destination",
      "StreetAddress": "1 Lincoln Rd",
      "Latitude": 25.790993,
      "Longitude": -80.128912,
      "OpenDate": "4/1/2015"
    },
    {
      "StationName": "Mondrian South Beach - Tesla Destination",
      "StreetAddress": "1100 West Ave",
      "Latitude": 25.781987,
      "Longitude": -80.142869,
      "OpenDate": "9/1/2017"
    },
    {
      "StationName": "1 Hotel South Beach - Tesla Destination",
      "StreetAddress": "2341 Collins Ave",
      "Latitude": 25.798888,
      "Longitude": -80.127144,
      "OpenDate": "3/1/2016"
    },
    {
      "StationName": "JATC GARAGE - Miami Beach - Tesla Destination",
      "StreetAddress": "237 20th St",
      "Latitude": 25.796119,
      "Longitude": -80.129778,
      "OpenDate": "11/1/2018"
    },
    {
      "StationName": "The Standard Spa, Miami Beach - Tesla Destination",
      "StreetAddress": "40  Island Ave",
      "Latitude": 25.792368,
      "Longitude": -80.149397,
      "OpenDate": "3/1/2017"
    },
    {
      "StationName": "Thompson Miami Beach - Tesla Destination",
      "StreetAddress": "4041 Collins Ave",
      "Latitude": 25.812838,
      "Longitude": -80.122522,
      "OpenDate": "4/1/2015"
    },
    {
      "StationName": "Eden Roc Miami Beach - Tesla Destination",
      "StreetAddress": "4525 Collins Ave",
      "Latitude": 25.819441,
      "Longitude": -80.122638,
      "OpenDate": "4/1/2015"
    },
    {
      "StationName": "Grand Beach Hotel - Tesla Destination",
      "StreetAddress": "4835 Collins Ave",
      "Latitude": 25.824683,
      "Longitude": -80.121254,
      "OpenDate": "9/1/2016"
    },
    {
      "StationName": "Carillon Miami Wellness Resort - Tesla Destination",
      "StreetAddress": "6801  Collins Ave",
      "Latitude": 25.853361,
      "Longitude": -80.119993,
      "OpenDate": "11/1/2018"
    },
    {
      "StationName": "Courtyard by Marriott Sandestin at Grand Boulevard - Tesla Destination",
      "StreetAddress": "100 Grand Blvd",
      "Latitude": 30.379965,
      "Longitude": -86.321444,
      "OpenDate": "9/1/2017"
    },
    {
      "StationName": "Residence Inn Marriott Sandestin at Grand Boulevard - Tesla Destination",
      "StreetAddress": "300 Grand Blvd",
      "Latitude": 30.379551,
      "Longitude": -86.318439,
      "OpenDate": "9/1/2017"
    },
    {
      "StationName": "TOPS'L Commercial Center - Tesla Destination",
      "StreetAddress": "8955 Emerald Coast Pkwy",
      "Latitude": 30.377886,
      "Longitude": -86.325616,
      "OpenDate": "1/1/2016"
    },
    {
      "StationName": "DoubleTree Suites by Hilton Naples - Tesla Destination",
      "StreetAddress": "12200 Tamiami Trl N",
      "Latitude": 26.281759,
      "Longitude": -81.801488,
      "OpenDate": "3/1/2016"
    },
    {
      "StationName": "Hyatt House Naples/5th Avenue - Tesla Destination",
      "StreetAddress": "1345 5th Ave S",
      "Latitude": 26.141521,
      "Longitude": -81.787758,
      "OpenDate": "9/1/2017"
    },
    {
      "StationName": "Conservancy of Southwest Florida - Tesla Destination",
      "StreetAddress": "1495 Smith Preserve Wy",
      "Latitude": 26.166281,
      "Longitude": -81.78798,
      "OpenDate": "11/1/2018"
    },
    {
      "StationName": "Creekside Corners - Tesla Destination",
      "StreetAddress": "1514 Immokalee Rd",
      "Latitude": 26.270831,
      "Longitude": -81.788074,
      "OpenDate": "11/1/2018"
    },
    {
      "StationName": "Holiday Inn Express Naples Downtown - 5th Avenue - Tesla Destination",
      "StreetAddress": "1785  5th Ave S",
      "Latitude": 26.138487,
      "Longitude": -81.782773,
      "OpenDate": "9/1/2017"
    },
    {
      "StationName": "The Ritz Carlton Golf Resort, Naples - Tesla Destination",
      "StreetAddress": "2600 Tiburon Dr",
      "Latitude": 26.248832,
      "Longitude": -81.766168,
      "OpenDate": "4/1/2015"
    },
    {
      "StationName": "The Ritz-Carlton, Naples Beach Resort - Tesla Destination",
      "StreetAddress": "280 Vanderbilt Beach Rd",
      "Latitude": 26.251956,
      "Longitude": -81.821565,
      "OpenDate": "4/1/2015"
    },
    {
      "StationName": "Hawthorn Suites by Wyndham Naples - Tesla Destination",
      "StreetAddress": "3557  Pine Ridge Rd",
      "Latitude": 26.212748,
      "Longitude": -81.746621,
      "OpenDate": "9/1/2017"
    },
    {
      "StationName": "Holiday Inn Express Naples South I-75 - Tesla Destination",
      "StreetAddress": "3837 Tollgate Blvd",
      "Latitude": 26.156365,
      "Longitude": -81.684824,
      "OpenDate": "9/1/2017"
    },
    {
      "StationName": "City of Naples - North Garage - Tesla Destination",
      "StreetAddress": "400 8th St S",
      "Latitude": 26.142413,
      "Longitude": -81.796764,
      "OpenDate": "9/1/2017"
    },
    {
      "StationName": "Naples Grande Beach Resort - Tesla Destination",
      "StreetAddress": "475 Seagate Dr",
      "Latitude": 26.212023,
      "Longitude": -81.810284,
      "OpenDate": "11/1/2018"
    },
    {
      "StationName": "Hilton Naples - Tesla Destination",
      "StreetAddress": "5111 Tamiami Trl N",
      "Latitude": 26.209138,
      "Longitude": -81.800688,
      "OpenDate": "11/1/2018"
    },
    {
      "StationName": "Artis-Naples - Tesla Destination",
      "StreetAddress": "5833 Pelican Bay Blvd",
      "Latitude": 26.216069,
      "Longitude": -81.803899,
      "OpenDate": "3/1/2017"
    },
    {
      "StationName": "Inn on Fifth - Tesla Destination",
      "StreetAddress": "699 5th Ave S",
      "Latitude": 26.141837,
      "Longitude": -81.797866,
      "OpenDate": "11/1/2016"
    },
    {
      "StationName": "City of Naples - South Garage - Tesla Destination",
      "StreetAddress": "801 8th St S",
      "Latitude": 26.137925,
      "Longitude": -81.795434,
      "OpenDate": "9/1/2017"
    },
    {
      "StationName": "Naples Beach Hotel & Golf - Tesla Destination",
      "StreetAddress": "851 Gulfshore Blvd N",
      "Latitude": 26.156755,
      "Longitude": -81.807631,
      "OpenDate": "3/1/2016"
    },
    {
      "StationName": "Black Dolphin Inn - Tesla Destination",
      "StreetAddress": "916 S Riverside Dr",
      "Latitude": 29.01724,
      "Longitude": -80.918015,
      "OpenDate": "9/1/2016"
    },
    {
      "StationName": "Adena Golf and Country Club - Tesla Destination",
      "StreetAddress": "950 NW 75th St",
      "Latitude": 29.265058,
      "Longitude": -82.146803,
      "OpenDate": "7/15/2016"
    },
    {
      "StationName": "Okeechobee Shooting Sports - Tesla Destination",
      "StreetAddress": "7055 NE 48th St",
      "Latitude": 27.289693,
      "Longitude": -80.751573,
      "OpenDate": "1/1/2016"
    },
    {
      "StationName": "OK Corral Gun Club - Tesla Destination",
      "StreetAddress": "9449 NE 48th St",
      "Latitude": 27.28835,
      "Longitude": -80.742137,
      "OpenDate": "4/1/2015"
    },
    {
      "StationName": "Holiday Inn Express & Suites Tampa Northwest-Oldsmar - Tesla Destination",
      "StreetAddress": "3990 Tampa Rd",
      "Latitude": 28.036854,
      "Longitude": -82.658772,
      "OpenDate": "11/1/2018"
    },
    {
      "StationName": "Four Seasons Resort Orlando at Walt Disney World - Tesla Destination",
      "StreetAddress": "10100 Dream Tree Blvd",
      "Latitude": 28.402442,
      "Longitude": -81.545119,
      "OpenDate": "9/1/2017"
    },
    {
      "StationName": "Marriott Cypress Harbour Villas - Tesla Destination",
      "StreetAddress": "11251 Harbour Villa Rd",
      "Latitude": 28.404328,
      "Longitude": -81.472212,
      "OpenDate": "9/1/2017"
    },
    {
      "StationName": "Floridays Resort Orlando - Tesla Destination",
      "StreetAddress": "12562 International Dr",
      "Latitude": 28.386577,
      "Longitude": -81.481582,
      "OpenDate": "11/1/2016"
    },
    {
      "StationName": "Waldorf Astoria Orlando - Tesla Destination",
      "StreetAddress": "14200 Bonnet Creek Resort Ln",
      "Latitude": 28.352848,
      "Longitude": -81.533724,
      "OpenDate": "11/1/2016"
    },
    {
      "StationName": "Grand Bohemian Hotel Orlando - Tesla Destination",
      "StreetAddress": "325 S Orange Ave",
      "Latitude": 28.538882,
      "Longitude": -81.378789,
      "OpenDate": "11/1/2016"
    },
    {
      "StationName": "The Mall at Millenia - Tesla Destination",
      "StreetAddress": "4200 Conroy Rd",
      "Latitude": 28.485379,
      "Longitude": -81.431189,
      "OpenDate": "3/1/2017"
    },
    {
      "StationName": "Loews Portofino Bay Hotel at Universal Orlando - Tesla Destination",
      "StreetAddress": "5601 Universal Blvd",
      "Latitude": 28.480961,
      "Longitude": -81.464226,
      "OpenDate": "9/1/2017"
    },
    {
      "StationName": "DoubleTree at the Entrance to Universal Orlando - Tesla Destination",
      "StreetAddress": "5780 Major Blvd",
      "Latitude": 28.480085,
      "Longitude": -81.457414,
      "OpenDate": "9/1/2017"
    },
    {
      "StationName": "Hard Rock Hotel at Universal Orlando - Tesla Destination",
      "StreetAddress": "5800 Universal Blvd",
      "Latitude": 28.478247,
      "Longitude": -81.463501,
      "OpenDate": "9/1/2017"
    },
    {
      "StationName": "Loews Royal Pacific Resort at Universal Orlando - Tesla Destination",
      "StreetAddress": "6300 Hollywood Wy",
      "Latitude": 28.467586,
      "Longitude": -81.467294,
      "OpenDate": "9/1/2017"
    },
    {
      "StationName": "CityWalk at Universal Orlando Resort - Tesla Destination",
      "StreetAddress": "6300 Universal Blvd",
      "Latitude": 28.464275,
      "Longitude": -81.464581,
      "OpenDate": "1/1/2016"
    },
    {
      "StationName": "Universal's Cabana Bay Beach Resort - Tesla Destination",
      "StreetAddress": "6550 Adventure Wy",
      "Latitude": 28.465579,
      "Longitude": -81.473205,
      "OpenDate": "11/1/2018"
    },
    {
      "StationName": "Loews Sapphire Falls Resort at Universal Orlando - Tesla Destination",
      "StreetAddress": "6601 Adventure Wy",
      "Latitude": 28.466638,
      "Longitude": -81.472743,
      "OpenDate": "9/1/2017"
    },
    {
      "StationName": "Renaissance Orlando at SeaWorld - Tesla Destination",
      "StreetAddress": "6677 Sea Harbor Dr",
      "Latitude": 28.411804,
      "Longitude": -81.46727,
      "OpenDate": "11/1/2018"
    },
    {
      "StationName": "Lake Nona Town Center - Tesla Destination",
      "StreetAddress": "6955 Lake Nona Blvd",
      "Latitude": 28.371499,
      "Longitude": -81.278773,
      "OpenDate": "5/1/2016"
    },
    {
      "StationName": "Courtyard Orlando Downtown - Tesla Destination",
      "StreetAddress": "730 N Magnolia Ave",
      "Latitude": 28.554268,
      "Longitude": -81.377741,
      "OpenDate": "10/1/2016"
    },
    {
      "StationName": "The Point Orlando Resort - Tesla Destination",
      "StreetAddress": "7389 Universal Blvd",
      "Latitude": 28.456616,
      "Longitude": -81.462615,
      "OpenDate": "11/1/2016"
    },
    {
      "StationName": "Comfort Inn International Drive - Tesla Destination",
      "StreetAddress": "8134 International Dr",
      "Latitude": 28.448199,
      "Longitude": -81.473039,
      "OpenDate": "9/1/2017"
    },
    {
      "StationName": "Best Western International Drive - Orlando - Tesla Destination",
      "StreetAddress": "8222 Jamaican Ct",
      "Latitude": 28.447301,
      "Longitude": -81.471782,
      "OpenDate": "9/1/2017"
    },
    {
      "StationName": "Legacy Vacation Club Lake Buena Vista - Tesla Destination",
      "StreetAddress": "8451 Palm Pkwy",
      "Latitude": 28.38674,
      "Longitude": -81.500635,
      "OpenDate": "9/1/2017"
    },
    {
      "StationName": "The Castle Hotel - Tesla Destination",
      "StreetAddress": "8629 International Dr",
      "Latitude": 28.440275,
      "Longitude": -81.470452,
      "OpenDate": "3/1/2017"
    },
    {
      "StationName": "Avanti Resort Orlando - Tesla Destination",
      "StreetAddress": "8738 International Dr",
      "Latitude": 28.439723,
      "Longitude": -81.472735,
      "OpenDate": "11/1/2016"
    },
    {
      "StationName": "Hyatt Regency Orlando - Tesla Destination",
      "StreetAddress": "9801 International Dr",
      "Latitude": 28.426947,
      "Longitude": -81.468171,
      "OpenDate": "3/1/2016"
    },
    {
      "StationName": "Kennedy Space Center Visitor Complex - Tesla Destination",
      "StreetAddress": "Kennedy Pkwy N",
      "Latitude": 28.52361169,
      "Longitude": -80.68127308,
      "OpenDate": "11/1/2018"
    },
    {
      "StationName": "Hampton Inn Daytona/Ormond Beach - Tesla Destination",
      "StreetAddress": "155 Interchange Blvd",
      "Latitude": 29.254639,
      "Longitude": -81.117864,
      "OpenDate": "3/1/2017"
    },
    {
      "StationName": "Whispering Oaks Winery and Steakhouse - Tesla Destination",
      "StreetAddress": "10934 N County Rd 475",
      "Latitude": 28.914544,
      "Longitude": -82.124175,
      "OpenDate": "11/1/2018"
    },
    {
      "StationName": "The Breakers - Tesla Destination",
      "StreetAddress": "1 S County Rd",
      "Latitude": 26.714903,
      "Longitude": -80.033985,
      "OpenDate": "4/1/2015"
    },
    {
      "StationName": "Best Western Plus Palm Beach Gardens Hotel & Suites - Tesla Destination",
      "StreetAddress": "11360 US Hwy 1",
      "Latitude": 26.841802,
      "Longitude": -80.061403,
      "OpenDate": "9/1/2017"
    },
    {
      "StationName": "Hilton Garden Inn Palm Beach Gardens - Tesla Destination",
      "StreetAddress": "3505 Kyoto Garden Dr",
      "Latitude": 26.847877,
      "Longitude": -80.089771,
      "OpenDate": "1/1/2016"
    },
    {
      "StationName": "PGA National Resort & Spa - Tesla Destination",
      "StreetAddress": "400 Avenue of the Champions",
      "Latitude": 26.83195,
      "Longitude": -80.13962,
      "OpenDate": "11/1/2018"
    },
    {
      "StationName": "Legacy Vacation Club Palm Coast - Tesla Destination",
      "StreetAddress": "98  Palm Coast Resort Blvd",
      "Latitude": 29.57563,
      "Longitude": -81.19313,
      "OpenDate": "9/1/2017"
    },
    {
      "StationName": "Hilton Garden Inn Panama City - Tesla Destination",
      "StreetAddress": "1101 US-231",
      "Latitude": 30.187894,
      "Longitude": -85.643416,
      "OpenDate": "9/1/2017"
    },
    {
      "StationName": "Holiday Inn Express & Suites Panama City-Tyndall - Tesla Destination",
      "StreetAddress": "5627 East Highway 22",
      "Latitude": 30.153923,
      "Longitude": -85.589479,
      "OpenDate": "3/1/2016"
    },
    {
      "StationName": "Edgewater Beach & Golf Resort - Tesla Destination",
      "StreetAddress": "11212 Front Beach Rd",
      "Latitude": 30.186836,
      "Longitude": -85.818694,
      "OpenDate": "1/1/2016"
    },
    {
      "StationName": "Hampton Inn Panama City Beach - Tesla Destination",
      "StreetAddress": "2909 Thomas Dr",
      "Latitude": 30.153512,
      "Longitude": -85.750325,
      "OpenDate": "9/1/2017"
    },
    {
      "StationName": "Hilton Pensacola Beach - Tesla Destination",
      "StreetAddress": "12 Via De Luna Dr",
      "Latitude": 30.333564,
      "Longitude": -87.137273,
      "OpenDate": "4/1/2016"
    },
    {
      "StationName": "Hampton Inn Pensacola Beach - Tesla Destination",
      "StreetAddress": "2 Via De Luna Dr",
      "Latitude": 30.333292,
      "Longitude": -87.139076,
      "OpenDate": "4/1/2016"
    },
    {
      "StationName": "Holiday Inn Express & Suites Perry - Tesla Destination",
      "StreetAddress": "601 Everett Wy",
      "Latitude": 30.088529,
      "Longitude": -83.571694,
      "OpenDate": "3/1/2017"
    },
    {
      "StationName": "Village of Pinecrest Municipal Center - Tesla Destination",
      "StreetAddress": "12645 Pinecrest Pkwy",
      "Latitude": 25.653212,
      "Longitude": -80.328946,
      "OpenDate": "4/1/2014"
    },
    {
      "StationName": "Hampton Inn Plant City - Tesla Destination",
      "StreetAddress": "2702 Thonotosassa Rd",
      "Latitude": 28.026342,
      "Longitude": -82.150705,
      "OpenDate": "9/1/2017"
    },
    {
      "StationName": "Hampton Inn & Suites Port St. Lucie, West - Tesla Destination",
      "StreetAddress": "155  SW Peacock Blvd",
      "Latitude": 27.309679,
      "Longitude": -80.407413,
      "OpenDate": "3/1/2017"
    },
    {
      "StationName": "Summerfield Crossings Golf Club - Tesla Destination",
      "StreetAddress": "13050 Summerfield Blvd",
      "Latitude": 27.795939,
      "Longitude": -82.31147,
      "OpenDate": "11/1/2018"
    },
    {
      "StationName": "Hilton Garden Inn Tampa/Riverview/Brandon - Tesla Destination",
      "StreetAddress": "4328 Garden Vista Dr",
      "Latitude": 27.908969,
      "Longitude": -82.345753,
      "OpenDate": "9/1/2017"
    },
    {
      "StationName": "Embarc-Sandestin by Diamond Resorts - Tesla Destination",
      "StreetAddress": "8626 Baytowne Ave W",
      "Latitude": 30.385181,
      "Longitude": -86.324285,
      "OpenDate": "3/1/2017"
    },
    {
      "StationName": "ReMax of the Islands - Tesla Destination",
      "StreetAddress": "2400 Palm Ridge Rd",
      "Latitude": 26.438596,
      "Longitude": -82.077655,
      "OpenDate": "4/1/2015"
    },
    {
      "StationName": "Seaside, FL - Tesla Destination",
      "StreetAddress": "25 Central Square",
      "Latitude": 30.320398,
      "Longitude": -86.138387,
      "OpenDate": "2/1/2016"
    },
    {
      "StationName": "Sarasota Yacht Club - Tesla Destination",
      "StreetAddress": "1100 John Ringling Blvd",
      "Latitude": 27.322099,
      "Longitude": -82.568537,
      "OpenDate": "9/1/2017"
    },
    {
      "StationName": "Hotel Indigo Sarasota - Tesla Destination",
      "StreetAddress": "1223 Boulevard of the Arts",
      "Latitude": 27.34155,
      "Longitude": -82.546183,
      "OpenDate": "3/1/2017"
    },
    {
      "StationName": "Mote Marine Laboratory & Aquarium - Tesla Destination",
      "StreetAddress": "1600 Ken Thompson Pkwy",
      "Latitude": 27.332155,
      "Longitude": -82.577741,
      "OpenDate": "11/1/2018"
    },
    {
      "StationName": "Comfort Suites Sarasota - Tesla Destination",
      "StreetAddress": "5690 Honore Ave",
      "Latitude": 27.270833,
      "Longitude": -82.465113,
      "OpenDate": "9/1/2017"
    },
    {
      "StationName": "Holiday Inn Sarasota-Lakewood Ranch - Tesla Destination",
      "StreetAddress": "6231 Lake Osprey Dr",
      "Latitude": 27.386483,
      "Longitude": -82.445701,
      "OpenDate": "9/1/2017"
    },
    {
      "StationName": "Lido Beach Resort - Tesla Destination",
      "StreetAddress": "700 Ben Franklin Dr",
      "Latitude": 27.31096,
      "Longitude": -82.575103,
      "OpenDate": "9/1/2017"
    },
    {
      "StationName": "Rectrix Aviation Inc. - Tesla Destination",
      "StreetAddress": "8250 15th St E",
      "Latitude": 27.393669,
      "Longitude": -82.547339,
      "OpenDate": "3/1/2016"
    },
    {
      "StationName": "Hyatt Place Sarasota Bradenton Int'l Airport - Tesla Destination",
      "StreetAddress": "950 University Pkwy",
      "Latitude": 27.381658,
      "Longitude": -82.552424,
      "OpenDate": "11/1/2018"
    },
    {
      "StationName": "Dunes of Seagrove - Tesla Destination",
      "StreetAddress": "396 Lakewood Dr",
      "Latitude": 30.306475,
      "Longitude": -86.088699,
      "OpenDate": "11/1/2018"
    },
    {
      "StationName": "Sebring Airport Authority - Tesla Destination",
      "StreetAddress": "128 Authority Ln",
      "Latitude": 27.455559,
      "Longitude": -81.345669,
      "OpenDate": "10/1/2016"
    },
    {
      "StationName": "La Quinta Inn & Suites Sebring - Tesla Destination",
      "StreetAddress": "4115 US 27 S",
      "Latitude": 27.460502,
      "Longitude": -81.431419,
      "OpenDate": "11/1/2018"
    },
    {
      "StationName": "Chateau Elan Hotel & Conference Center - Tesla Destination",
      "StreetAddress": "150 Midway Dr",
      "Latitude": 27.451099,
      "Longitude": -81.358154,
      "OpenDate": "12/15/2016"
    },
    {
      "StationName": "Hampton Inn Tampa East/Seffner - Tesla Destination",
      "StreetAddress": "11740 Tampa Gateway Blvd",
      "Latitude": 28.007823,
      "Longitude": -82.30097,
      "OpenDate": "11/1/2016"
    },
    {
      "StationName": "St Francis Inn, a Select Registry Property - Tesla Destination",
      "StreetAddress": "279 St George St",
      "Latitude": 29.888016,
      "Longitude": -81.311175,
      "OpenDate": "4/1/2015"
    },
    {
      "StationName": "Columbia Restaurant - Tesla Destination",
      "StreetAddress": "98 St George St",
      "Latitude": 29.894789,
      "Longitude": -81.313143,
      "OpenDate": "9/1/2017"
    },
    {
      "StationName": "Courtyard by Marriott St. Augustine Beach - Tesla Destination",
      "StreetAddress": "605 A1A Beach Blvd",
      "Latitude": 29.848388,
      "Longitude": -81.267606,
      "OpenDate": "11/1/2018"
    },
    {
      "StationName": "The Kimpton Hotel Zamora - Tesla Destination",
      "StreetAddress": "3701 Gulf Blvd",
      "Latitude": 27.713448,
      "Longitude": -82.737235,
      "OpenDate": "3/1/2017"
    },
    {
      "StationName": "Bayview Plaza Waterfront Resort/Hotel- St Pete Beach - Tesla Destination",
      "StreetAddress": "4321 Gulf Blvd",
      "Latitude": 27.718108,
      "Longitude": -82.738812,
      "OpenDate": "9/1/2017"
    },
    {
      "StationName": "Holiday Inn St. Augustine - Historic - Tesla Destination",
      "StreetAddress": "1302 N Ponce de Leon Blvd",
      "Latitude": 29.904539,
      "Longitude": -81.32072,
      "OpenDate": "11/1/2018"
    },
    {
      "StationName": "Best Western Historical Inn - Tesla Destination",
      "StreetAddress": "2010 N Ponce De Leon Blvd",
      "Latitude": 29.911401,
      "Longitude": -81.321693,
      "OpenDate": "9/1/2017"
    },
    {
      "StationName": "Hampton Inn St. Augustine-Historic District - Tesla Destination",
      "StreetAddress": "2050 N Ponce De Leon Blvd",
      "Latitude": 29.911351,
      "Longitude": -81.322142,
      "OpenDate": "9/1/2017"
    },
    {
      "StationName": "Hilton St. Augustine Historic Bayfront - Tesla Destination",
      "StreetAddress": "32  Avenida Menendez",
      "Latitude": 29.894021,
      "Longitude": -81.311283,
      "OpenDate": "9/1/2017"
    },
    {
      "StationName": "TRYP by Wyndham Sebastian St. Augustine - Tesla Destination",
      "StreetAddress": "333 S Ponce de Leon Blvd",
      "Latitude": 29.888156,
      "Longitude": -81.323659,
      "OpenDate": "9/1/2017"
    },
    {
      "StationName": "Best Western St. Augustine Beach Inn - Tesla Destination",
      "StreetAddress": "541 A1A Beach Blvd",
      "Latitude": 29.850445,
      "Longitude": -81.267667,
      "OpenDate": "9/1/2017"
    },
    {
      "StationName": "Casa Monica Resort & Spa - Tesla Destination",
      "StreetAddress": "95 Cordova St",
      "Latitude": 29.891775,
      "Longitude": -81.313391,
      "OpenDate": "9/1/2017"
    },
    {
      "StationName": "Bay Palms Waterfront Resort - Hotel & Marina - Tesla Destination",
      "StreetAddress": "4237 Gulf Blvd",
      "Latitude": 27.717792,
      "Longitude": -82.738711,
      "OpenDate": "11/1/2018"
    },
    {
      "StationName": "Hyatt Place St Petersburg - Tesla Destination",
      "StreetAddress": "25 2nd St N",
      "Latitude": 27.771813,
      "Longitude": -82.63519,
      "OpenDate": "11/1/2018"
    },
    {
      "StationName": "400 Beach Seafood & Tap House - Tesla Destination",
      "StreetAddress": "400  Beach Dr NE",
      "Latitude": 27.777063,
      "Longitude": -82.631942,
      "OpenDate": "9/1/2017"
    },
    {
      "StationName": "Streamsong Resort Golf & Spa - Tesla Destination",
      "StreetAddress": "1000 Streamsong Dr",
      "Latitude": 27.693302,
      "Longitude": -81.936386,
      "OpenDate": "4/1/2016"
    },
    {
      "StationName": "Sole on the Ocean - Tesla Destination",
      "StreetAddress": "17315 Collins Ave",
      "Latitude": 25.936584,
      "Longitude": -80.120845,
      "OpenDate": "11/1/2016"
    },
    {
      "StationName": "Doubletree By Hilton Sunrise- Sawgrass Mills - Tesla Destination",
      "StreetAddress": "13400 W Sunrise Blvd",
      "Latitude": 26.144475,
      "Longitude": -80.323989,
      "OpenDate": "2/1/2016"
    },
    {
      "StationName": "Home2 Suites by Hilton, Tallahassee - Tesla Destination",
      "StreetAddress": "210 S Magnolia Dr",
      "Latitude": 30.440657,
      "Longitude": -84.263442,
      "OpenDate": "5/1/2016"
    },
    {
      "StationName": "Four Points by Sheraton Tallahassee Downtown - Tesla Destination",
      "StreetAddress": "316 W Tennessee St",
      "Latitude": 30.444902,
      "Longitude": -84.284576,
      "OpenDate": "4/1/2015"
    },
    {
      "StationName": "Tallahassee Airport - Short Term Parking - Tesla Destination",
      "StreetAddress": "3300 Capital Cir SW",
      "Latitude": 30.397577,
      "Longitude": -84.347788,
      "OpenDate": "4/1/2016"
    },
    {
      "StationName": "Hotel Duval - Tesla Destination",
      "StreetAddress": "415 N Monroe St",
      "Latitude": 30.446239,
      "Longitude": -84.280121,
      "OpenDate": "1/1/2016"
    },
    {
      "StationName": "Hampton Inn & Suites Ft. Lauderdale West Tamarac - Tesla Destination",
      "StreetAddress": "5701 Madison Ave",
      "Latitude": 26.194295,
      "Longitude": -80.291859,
      "OpenDate": "9/1/2017"
    },
    {
      "StationName": "Courtyard by Marriott Tampa Brandon - Tesla Destination",
      "StreetAddress": "10152 Palm River Rd",
      "Latitude": 27.941215,
      "Longitude": -82.33335,
      "OpenDate": "9/1/2017"
    },
    {
      "StationName": "Epicurean Hotel - Tesla Destination",
      "StreetAddress": "1207 S Howard Ave",
      "Latitude": 27.930635,
      "Longitude": -82.483337,
      "OpenDate": "4/1/2015"
    },
    {
      "StationName": "Courtyard Tampa Northwest/Veterans Expressway - Tesla Destination",
      "StreetAddress": "12730 Citrus Park Ln",
      "Latitude": 28.06493,
      "Longitude": -82.570448,
      "OpenDate": "11/1/2018"
    },
    {
      "StationName": "Hampton Inn & Suites Tampa/Ybor City/Downtown - Tesla Destination",
      "StreetAddress": "1301 E 7th Ave",
      "Latitude": 27.960084,
      "Longitude": -82.445217,
      "OpenDate": "3/1/2017"
    },
    {
      "StationName": "Columbia Restaurant - Tesla Destination",
      "StreetAddress": "2117 E 7th Ave",
      "Latitude": 27.959882,
      "Longitude": -82.43515,
      "OpenDate": "7/15/2016"
    },
    {
      "StationName": "West Wing Boutique Hotel - Tesla Destination",
      "StreetAddress": "2501 E Fowler Ave",
      "Latitude": 28.05362,
      "Longitude": -82.43124,
      "OpenDate": "9/1/2017"
    },
    {
      "StationName": "Tampa Airport Marriott - Tesla Destination",
      "StreetAddress": "4200 George J Bean Pkwy",
      "Latitude": 27.981957,
      "Longitude": -82.534859,
      "OpenDate": "11/1/2018"
    },
    {
      "StationName": "Eddie V's Prime Seafood - Tesla Destination",
      "StreetAddress": "4400 W Boy Scout Blvd",
      "Latitude": 27.960322,
      "Longitude": -82.51828,
      "OpenDate": "4/1/2015"
    },
    {
      "StationName": "The Westin Tampa Bay - Tesla Destination",
      "StreetAddress": "7627 W Courtney Campbell Cswy",
      "Latitude": 27.968176,
      "Longitude": -82.565938,
      "OpenDate": "11/1/2018"
    },
    {
      "StationName": "Hampton Inn Titusville - Tesla Destination",
      "StreetAddress": "4760 Helen Hauser Blvd",
      "Latitude": 28.552792,
      "Longitude": -80.854496,
      "OpenDate": "3/1/2016"
    },
    {
      "StationName": "Costa d'Este Beach Resort & Spa - Tesla Destination",
      "StreetAddress": "3244 Ocean Dr",
      "Latitude": 27.652062,
      "Longitude": -80.355521,
      "OpenDate": "4/1/2015"
    },
    {
      "StationName": "Vero Beach Hotel & Spa - Tesla Destination",
      "StreetAddress": "3500  Ocean Dr",
      "Latitude": 27.656133,
      "Longitude": -80.356705,
      "OpenDate": "4/1/2016"
    },
    {
      "StationName": "Palm Beach Airport - Short Term Parking - Tesla Destination",
      "StreetAddress": "1000 James L Turnage Blvd",
      "Latitude": 26.687963,
      "Longitude": -80.090429,
      "OpenDate": "4/1/2016"
    },
    {
      "StationName": "Casa Grandview Historic Luxury Inn Cottages - Tesla Destination",
      "StreetAddress": "1410 Georgia Avenue",
      "Latitude": 26.700322,
      "Longitude": -80.057742,
      "OpenDate": "4/1/2015"
    },
    {
      "StationName": "Hyatt Place West Palm Beach/Downtown - Tesla Destination",
      "StreetAddress": "295 Lakeview Ave",
      "Latitude": 26.706428,
      "Longitude": -80.052002,
      "OpenDate": "9/1/2017"
    },
    {
      "StationName": "Hilton West Palm Beach - Tesla Destination",
      "StreetAddress": "600 Okeechobee Blvd",
      "Latitude": 26.705976,
      "Longitude": -80.058054,
      "OpenDate": "1/1/2016"
    },
    {
      "StationName": "CityPlace - Tesla Destination",
      "StreetAddress": "700 S Rosemary Ave",
      "Latitude": 26.707611,
      "Longitude": -80.056052,
      "OpenDate": "11/1/2018"
    },
    {
      "StationName": "Comfort Inn, Jacksonville - Tesla Destination",
      "StreetAddress": "76043 Sidney Pl",
      "Latitude": 30.619049,
      "Longitude": -81.64566,
      "OpenDate": "11/1/2018"
    },
    {
      "StationName": "Holiday Inn Express & Suites Jacksonville North - Tesla Destination",
      "StreetAddress": "76071 Sidney Pl",
      "Latitude": 30.619446,
      "Longitude": -81.646425,
      "OpenDate": "11/1/2018"
    },
    {
      "StationName": "Town Center and Gate - Tesla Supercharger",
      "StreetAddress": "4866 Gate Parkway",
      "Latitude": 30.2534,
      "Longitude": -81.5369,
      "OpenDate": "12/1/2018"
    },
    {
      "StationName": "St. Johns Commons - Tesla Supercharger",
      "StreetAddress": "2220 County Road 210",
      "Latitude": 30.0603,
      "Longitude": -81.5141,
      "OpenDate": "12/1/2018"
    },
    {
      "StationName": "Winn-Dixie - Tesla Supercharger",
      "StreetAddress": "2100 West Swann Avenue",
      "Latitude": 27.9371,
      "Longitude": -82.4811,
      "OpenDate": "12/1/2018"
    },
    {
      "StationName": "Wawa - Tesla Supercharger",
      "StreetAddress": "7289 Garden Road",
      "Latitude": 26.7819,
      "Longitude": -80.0928,
      "OpenDate": "12/1/2018"
    },
    {
      "StationName": "THE MARK STATION 1",
      "StreetAddress": "1155 Brickell Bay Dr",
      "Latitude": 25.762259,
      "Longitude": -80.18941,
      "OpenDate": ""
    },
    {
      "StationName": "WALGREENS #7726",
      "StreetAddress": "2050 E Osceola Pkwy",
      "Latitude": 28.344276,
      "Longitude": -81.361875,
      "OpenDate": ""
    },
    {
      "StationName": "USF CEDAR DR 01",
      "StreetAddress": "4103 USF Cedar Dr",
      "Latitude": 28.064069,
      "Longitude": -82.41242,
      "OpenDate": ""
    },
    {
      "StationName": "TOM BUSH BMW SIDE LEVEL 3",
      "StreetAddress": "9875 Atlantic Blvd",
      "Latitude": 30.323139,
      "Longitude": -81.542775,
      "OpenDate": ""
    },
    {
      "StationName": "SIMON FLORIDA MALL",
      "StreetAddress": "8001 S Orange Blossom Trail",
      "Latitude": 28.447274,
      "Longitude": -81.395839,
      "OpenDate": ""
    },
    {
      "StationName": "SIMON TAMPA OULETS 2",
      "StreetAddress": "2230 Grand Cypress Dr",
      "Latitude": 28.190309,
      "Longitude": -82.391051,
      "OpenDate": ""
    },
    {
      "StationName": "OBE POWER 151 BISCAYNE WM",
      "StreetAddress": "15051 Royal Oak Ln",
      "Latitude": 25.914206,
      "Longitude": -80.15204,
      "OpenDate": ""
    },
    {
      "StationName": "OBE POWER NOVA LIBRARY WM",
      "StreetAddress": "5 SW 75th Ave",
      "Latitude": 26.081257,
      "Longitude": -80.243493,
      "OpenDate": ""
    },
    {
      "StationName": "OBE POWER NOVA HPD WM",
      "StreetAddress": "44 Frontage Rd",
      "Latitude": 26.081224,
      "Longitude": -80.247825,
      "OpenDate": ""
    },
    {
      "StationName": "OBE POWER NOVA HPD BO",
      "StreetAddress": "3321 College Ave",
      "Latitude": 26.081426,
      "Longitude": -80.248723,
      "OpenDate": ""
    },
    {
      "StationName": "OBE POWER PFR DORAL",
      "StreetAddress": "3105 NW 107th Ave",
      "Latitude": 25.803066,
      "Longitude": -80.367325,
      "OpenDate": ""
    },
    {
      "StationName": "HOLIDAY_INN HOLIDAY INN EXP",
      "StreetAddress": "8310 Galbraith Rd",
      "Latitude": 28.133439,
      "Longitude": -82.369474,
      "OpenDate": ""
    },
    {
      "StationName": "SIMON ST JOHNS TOWN 1",
      "StreetAddress": "4663 River City Dr",
      "Latitude": 30.257201,
      "Longitude": -81.52652,
      "OpenDate": ""
    },
    {
      "StationName": "OS MANAGED 1ST ST WELCOME",
      "StreetAddress": "230 E 1st St",
      "Latitude": 28.811787,
      "Longitude": -81.266341,
      "OpenDate": ""
    },
    {
      "StationName": "OS MANAGED N PARK AVE",
      "StreetAddress": "N Park Ave",
      "Latitude": 28.81194,
      "Longitude": -81.267932,
      "OpenDate": ""
    },
    {
      "StationName": "OS MANAGED N PALMETTO AVE",
      "StreetAddress": "N Palmetto Ave",
      "Latitude": 28.811997,
      "Longitude": -81.265882,
      "OpenDate": ""
    },
    {
      "StationName": "VENETIAN 3745 GW1",
      "StreetAddress": "4251 Winkler Ave Regata Way",
      "Latitude": 26.611943,
      "Longitude": -81.826952,
      "OpenDate": ""
    },
    {
      "StationName": "VENETIAN 3745 GW2",
      "StreetAddress": "4151 Winkler Ave 3745 Pizza Drive",
      "Latitude": 26.611159,
      "Longitude": -81.829189,
      "OpenDate": ""
    },
    {
      "StationName": "Walgreens #3743",
      "StreetAddress": "4651 W Kennedy Blvd",
      "Latitude": 27.945463,
      "Longitude": -82.523861,
      "OpenDate": ""
    },
    {
      "StationName": "SARASOTA PARK SARASOTA 2",
      "StreetAddress": "47 N Adams Dr",
      "Latitude": 27.319989,
      "Longitude": -82.5766,
      "OpenDate": ""
    },
    {
      "StationName": "DCFC Unit 1",
      "StreetAddress": "250 5th Ave S",
      "Latitude": 27.765362,
      "Longitude": -82.63633,
      "OpenDate": ""
    },
    {
      "StationName": "Dr P Phillips Hospital - 1",
      "StreetAddress": "9401 Turkey Lake Rd",
      "Latitude": 28.427916,
      "Longitude": -81.480553,
      "OpenDate": ""
    },
    {
      "StationName": "City Hall",
      "StreetAddress": "410 N Ring Ave",
      "Latitude": 28.150021,
      "Longitude": -82.753365,
      "OpenDate": ""
    },
    {
      "StationName": "Splash Park",
      "StreetAddress": "508 Live Oak Street",
      "Latitude": 28.154554,
      "Longitude": -82.753601,
      "OpenDate": ""
    },
    {
      "StationName": "Library 1",
      "StreetAddress": "138 E Lemon Street",
      "Latitude": 28.145491,
      "Longitude": -82.75502,
      "OpenDate": ""
    },
    {
      "StationName": "GHON CHARGER STATION01",
      "StreetAddress": "3295 Pine Ridge Road",
      "Latitude": 26.212585,
      "Longitude": -81.751907,
      "OpenDate": ""
    },
    {
      "StationName": "AVENTURA FOUNDERS PARK",
      "StreetAddress": "3105 NE 190th St",
      "Latitude": 25.951931,
      "Longitude": -80.137404,
      "OpenDate": ""
    },
    {
      "StationName": "NFRA EV CHARGER 01",
      "StreetAddress": "4900 US-1",
      "Latitude": 29.955149,
      "Longitude": -81.343027,
      "OpenDate": ""
    },
    {
      "StationName": "WINTER PARK HOWELL BRANCH 1",
      "StreetAddress": "1205 Howell Branch Rd",
      "Latitude": 28.624591,
      "Longitude": -81.339148,
      "OpenDate": ""
    },
    {
      "StationName": "WINTER PARK LAKE BALDWIN 01",
      "StreetAddress": "2000 S Lakemont Ave",
      "Latitude": 28.576441,
      "Longitude": -81.326875,
      "OpenDate": ""
    },
    {
      "StationName": "Winn-Dixie - Tesla Supercharger",
      "StreetAddress": "10665 Big Bend Road",
      "Latitude": 27.7914,
      "Longitude": -82.3328,
      "OpenDate": "2/1/2019"
    },
    {
      "StationName": "Waterford Lakes Town Center - Tesla Supercharger",
      "StreetAddress": "413 North Alafaya Trail",
      "Latitude": 28.5553,
      "Longitude": -81.199,
      "OpenDate": "2/1/2019"
    },
    {
      "StationName": "STETSON UNIV. GRIFFITH HALL 1",
      "StreetAddress": "500 Woodland Ct",
      "Latitude": 29.037305,
      "Longitude": -81.302613,
      "OpenDate": ""
    },
    {
      "StationName": "STETSON UNIV. RINKER CTR 1",
      "StreetAddress": "503 N Woodland Blvd",
      "Latitude": 29.035677,
      "Longitude": -81.302811,
      "OpenDate": ""
    },
    {
      "StationName": "NCH STATION 3",
      "StreetAddress": "3100 SW 62nd Ave",
      "Latitude": 25.742461,
      "Longitude": -80.295415,
      "OpenDate": ""
    },
    {
      "StationName": "Largo Police Station",
      "StreetAddress": "201 N Highland Ave",
      "Latitude": 27.920834,
      "Longitude": -82.775406,
      "OpenDate": ""
    },
    {
      "StationName": "WALGREENS #7074",
      "StreetAddress": "7767 W Irlo Bronson Memorial Hwy",
      "Latitude": 28.340155,
      "Longitude": -81.595909,
      "OpenDate": ""
    },
    {
      "StationName": "City Hall - 1",
      "StreetAddress": "201 Highland Ave N",
      "Latitude": 27.918882,
      "Longitude": -82.776165,
      "OpenDate": ""
    },
    {
      "StationName": "Belcher Soccer Complex - 1",
      "StreetAddress": "1779 S Belcher Rd",
      "Latitude": 27.898202,
      "Longitude": -82.744408,
      "OpenDate": ""
    },
    {
      "StationName": "PUBLIC CHARGING STATION 01",
      "StreetAddress": "5515 14th Street West",
      "Latitude": 27.443608,
      "Longitude": -82.574602,
      "OpenDate": ""
    },
    {
      "StationName": "JAG DC FAST 01",
      "StreetAddress": "200 Bird Road",
      "Latitude": 25.734449,
      "Longitude": -80.2592,
      "OpenDate": ""
    },
    {
      "StationName": "Surface Parking Lot - 1",
      "StreetAddress": "2025 Indian Rocks Rd",
      "Latitude": 27.899,
      "Longitude": -82.824204,
      "OpenDate": ""
    },
    {
      "StationName": "ZUMBA PARKING 1 GULFSTREAM PARK",
      "StreetAddress": "S Federal Hwy",
      "Latitude": 25.977462,
      "Longitude": -80.141208,
      "OpenDate": ""
    },
    {
      "StationName": "HOLLYWOOD PLAZA PORT 1 2",
      "StreetAddress": "8050 International Dr",
      "Latitude": 28.448766,
      "Longitude": -81.472061,
      "OpenDate": ""
    },
    {
      "StationName": "HOLLYWOOD PLAZA PORT 3 4",
      "StreetAddress": "8050 International Dr Floor 1",
      "Latitude": 28.44871,
      "Longitude": -81.472061,
      "OpenDate": ""
    },
    {
      "StationName": "COQUINA COVE COQUINA COVE",
      "StreetAddress": "3902 SW Coquina Cove Way",
      "Latitude": 27.166244,
      "Longitude": -80.304993,
      "OpenDate": ""
    },
    {
      "StationName": "HYATT GRAND GRAND CYPRESS 1",
      "StreetAddress": "1 Grand Cypress Blvd",
      "Latitude": 28.382387,
      "Longitude": -81.509554,
      "OpenDate": ""
    },
    {
      "StationName": "THE JAXON EV CHARGER 01",
      "StreetAddress": "4450 tropea way",
      "Latitude": 30.263446,
      "Longitude": -81.530071,
      "OpenDate": ""
    },
    {
      "StationName": "Mastrys Brewing Co - 1",
      "StreetAddress": "7701 Blind Pass Rd",
      "Latitude": 27.744547,
      "Longitude": -82.751166,
      "OpenDate": ""
    },
    {
      "StationName": "SW Recreation Center - 1",
      "StreetAddress": "13120 Vonn Rd",
      "Latitude": 27.891548,
      "Longitude": -82.819036,
      "OpenDate": ""
    },
    {
      "StationName": "MSC Garage 2nd Floor Unit 1",
      "StreetAddress": "1 4th Street N",
      "Latitude": 27.771352,
      "Longitude": -82.637293,
      "OpenDate": ""
    },
    {
      "StationName": "FLA TURNPIKE SNAPPER CREEK 1",
      "StreetAddress": "19 Ronald Reagan Turnpike",
      "Latitude": 25.66156,
      "Longitude": -80.387067,
      "OpenDate": ""
    },
    {
      "StationName": "REEDY CREEK GRAPEFRUIT 02",
      "StreetAddress": "1515 Buena Vista Dr",
      "Latitude": 28.369214,
      "Longitude": -81.513541,
      "OpenDate": ""
    },
    {
      "StationName": "GreenWise Market on Gaines",
      "StreetAddress": "625 W Gaines St",
      "Latitude": 30.435073,
      "Longitude": -84.291554,
      "OpenDate": "10/4/2018"
    },
    {
      "StationName": "Coconut Creek",
      "StreetAddress": "4900 W Copans Rd",
      "Latitude": 26.2581,
      "Longitude": -80.1897,
      "OpenDate": ""
    },
    {
      "StationName": "Pensacola Square",
      "StreetAddress": "6235 North Davis Highway",
      "Latitude": 30.488128,
      "Longitude": -87.224111,
      "OpenDate": ""
    },
    {
      "StationName": "Coquina Plaza",
      "StreetAddress": "15701 Sheridan Street",
      "Latitude": 26.030369,
      "Longitude": -80.357867,
      "OpenDate": ""
    },
    {
      "StationName": "USA DEERFIELD GARAGE",
      "StreetAddress": "123 NE 20th Avenue",
      "Latitude": 26.315919,
      "Longitude": -80.078166,
      "OpenDate": ""
    },
    {
      "StationName": "ST AUGUSTINE FL MALAGA STREET 1",
      "StreetAddress": "150 Malaga St",
      "Latitude": 29.892878,
      "Longitude": -81.320888,
      "OpenDate": ""
    },
    {
      "StationName": "10th Street - Tesla Supercharger",
      "StreetAddress": "Corner of Baldwin Ave. & 10th Street",
      "Latitude": 30.7207,
      "Longitude": -86.1167,
      "OpenDate": "3/1/2019"
    },
    {
      "StationName": "Busy Bee - Tesla Supercharger",
      "StreetAddress": "6458 US-129",
      "Latitude": 30.3314,
      "Longitude": -82.9614,
      "OpenDate": "3/1/2019"
    },
    {
      "StationName": "Cobblestone Plaza - Tesla Supercharger",
      "StreetAddress": "14804-14954 Pines Boulevard",
      "Latitude": 26.0073,
      "Longitude": -80.3488,
      "OpenDate": "3/1/2019"
    },
    {
      "StationName": "Fort Drum Service Plaza - Tesla Supercharger",
      "StreetAddress": "184 Florida's Turnpike",
      "Latitude": 27.6009,
      "Longitude": -80.8229,
      "OpenDate": "3/1/2019"
    },
    {
      "StationName": "Village Square - Tesla Supercharger",
      "StreetAddress": "2941 W US Hwy 90",
      "Latitude": 30.1814,
      "Longitude": -82.6796,
      "OpenDate": "3/1/2019"
    },
    {
      "StationName": "Nexus Shooting - Tesla Destination",
      "StreetAddress": "2600 Davie Rd",
      "Latitude": 26.089289,
      "Longitude": -80.227438,
      "OpenDate": "3/1/2019"
    },
    {
      "StationName": "The Henderson Park Inn - Tesla Destination",
      "StreetAddress": "2700 Scenic Hwy 98",
      "Latitude": 30.382881,
      "Longitude": -86.432398,
      "OpenDate": "3/1/2019"
    },
    {
      "StationName": "Fairfield Inn & Suites Gainesville - Tesla Destination",
      "StreetAddress": "3877 SW 37th Blvd",
      "Latitude": 29.618709,
      "Longitude": -82.378398,
      "OpenDate": "3/1/2019"
    },
    {
      "StationName": "Hampton Inn Hallandale Beach Aventura - Tesla Destination",
      "StreetAddress": "1000 S Federal Hwy",
      "Latitude": 25.974962,
      "Longitude": -80.142455,
      "OpenDate": "3/1/2019"
    },
    {
      "StationName": "Palm Cove Marina - Tesla Destination",
      "StreetAddress": "14603 Beach Blvd Suite 100",
      "Latitude": 30.290113,
      "Longitude": -81.429302,
      "OpenDate": "3/1/2019"
    },
    {
      "StationName": "Hampton Inn Jupiter/Juno Beach - Tesla Destination",
      "StreetAddress": "13801  U.S. Hwy 1",
      "Latitude": 26.878373,
      "Longitude": -80.055763,
      "OpenDate": "3/1/2019"
    },
    {
      "StationName": "Shades of Green on Walt Disney Resort - Tesla Destination",
      "StreetAddress": "1950 W Magnolia Palm D",
      "Latitude": 28.402621,
      "Longitude": -81.591529,
      "OpenDate": "3/1/2019"
    },
    {
      "StationName": "Hilton Garden Inn Tampa Suncoast Parkway - Tesla Destination",
      "StreetAddress": "2155 Norhtpointe Pkwy",
      "Latitude": 28.189293,
      "Longitude": -82.540081,
      "OpenDate": "3/1/2019"
    },
    {
      "StationName": "Miami Design District - Paradise Plaza - Tesla Destination",
      "StreetAddress": "3841 NE 2nd Ave",
      "Latitude": 25.81255,
      "Longitude": -80.191003,
      "OpenDate": "3/1/2019"
    },
    {
      "StationName": "Portofino Island Resort - Central Reception - Tesla Destination",
      "StreetAddress": "10 Portofino Dr",
      "Latitude": 30.34382,
      "Longitude": -87.079254,
      "OpenDate": "3/1/2019"
    },
    {
      "StationName": "Portofino Island Resort - Lifestyle Center - Tesla Destination",
      "StreetAddress": "10 Portofino Dr",
      "Latitude": 30.34382,
      "Longitude": -87.079254,
      "OpenDate": "3/1/2019"
    },
    {
      "StationName": "TownePlace Suites by Marriott Tampa Westshore - Tesla Destination",
      "StreetAddress": "4505 S Dale Mabry Hwy",
      "Latitude": 27.902554,
      "Longitude": -82.507138,
      "OpenDate": "3/1/2019"
    },
    {
      "StationName": "City Hall 1",
      "StreetAddress": "400 Alexandria Blvd",
      "Latitude": 28.653265,
      "Longitude": -81.201388,
      "OpenDate": ""
    },
    {
      "StationName": "Courthouse 1",
      "StreetAddress": "545 First Ave N",
      "Latitude": 27.772651,
      "Longitude": -82.641419,
      "OpenDate": ""
    },
    {
      "StationName": "Manhattan Casino",
      "StreetAddress": "642 22nd Street S",
      "Latitude": 27.763705,
      "Longitude": -82.66251,
      "OpenDate": ""
    },
    {
      "StationName": "JAA HOURLY GARAGE 1",
      "StreetAddress": "2400 Dixie Clipper Dr",
      "Latitude": 30.491595,
      "Longitude": -81.682728,
      "OpenDate": ""
    },
    {
      "StationName": "JAA SURFACE LOT 2",
      "StreetAddress": "2400 Yankee Clipper Dr",
      "Latitude": 30.490875,
      "Longitude": -81.68067,
      "OpenDate": ""
    },
    {
      "StationName": "JAA CELL PHONE LOT",
      "StreetAddress": "Yankee Clipper Dr",
      "Latitude": 30.490215,
      "Longitude": -81.674613,
      "OpenDate": ""
    },
    {
      "StationName": "FOUR SEASONS",
      "StreetAddress": "1435 Brickell Avenue",
      "Latitude": 25.7587986,
      "Longitude": -80.19244385,
      "OpenDate": ""
    },
    {
      "StationName": "CB PARKING CB GARAGE",
      "StreetAddress": "25 S Orlando Ave",
      "Latitude": 28.317759,
      "Longitude": -80.610014,
      "OpenDate": ""
    },
    {
      "StationName": "HOLLYWOOD STUDIO 2",
      "StreetAddress": "351 S Studio Dr",
      "Latitude": 28.356856,
      "Longitude": -81.557054,
      "OpenDate": ""
    },
    {
      "StationName": "South Core Garage - 1",
      "StreetAddress": "101 1st Ave S",
      "Latitude": 27.770576,
      "Longitude": -82.635369,
      "OpenDate": ""
    },
    {
      "StationName": "Sundial Garage - 1",
      "StreetAddress": "117 2nd St N",
      "Latitude": 27.772775,
      "Longitude": -82.634525,
      "OpenDate": ""
    },
    {
      "StationName": "Tao Sawgras (CHM)",
      "StreetAddress": "2743-2849 N Flamingo Rd",
      "Latitude": 26.157408,
      "Longitude": -80.31489,
      "OpenDate": ""
    },
    {
      "StationName": "Courtyard by Marriott - Marathon Florida Keys",
      "StreetAddress": "2146 Overseas Hwy",
      "Latitude": 24.710321,
      "Longitude": -81.103387,
      "OpenDate": "10/1/2016"
    },
    {
      "StationName": "THE WHITNEY EV STATION 02",
      "StreetAddress": "120 NE 4th St",
      "Latitude": 26.125952,
      "Longitude": -80.141924,
      "OpenDate": ""
    },
    {
      "StationName": "Tampa Rays Lot 1 - Unit 1",
      "StreetAddress": "One Tropicana Drive",
      "Latitude": 27.766732,
      "Longitude": -82.655269,
      "OpenDate": ""
    },
    {
      "StationName": "Tampa International Airport - Cell Phone Waiting Lot",
      "StreetAddress": "Economy Parking Rd & Airport Service Rd",
      "Latitude": 27.96612625,
      "Longitude": -82.53723113,
      "OpenDate": "5/1/2019"
    },
    {
      "StationName": "Home2 Suites",
      "StreetAddress": "1450 Champions Way",
      "Latitude": 28.589844,
      "Longitude": -81.778903,
      "OpenDate": "4/1/2019"
    },
    {
      "StationName": "HILTON ORLANDO HILTON HOME2",
      "StreetAddress": "2800 Destination Pkwy",
      "Latitude": 28.437293,
      "Longitude": -81.427589,
      "OpenDate": ""
    },
    {
      "StationName": "Auberge Beach Resort",
      "StreetAddress": "2200 North Ocean Blvd",
      "Latitude": 26.1577,
      "Longitude": -80.1005,
      "OpenDate": ""
    },
    {
      "StationName": "OS MANAGED OPTIMUS EV 1",
      "StreetAddress": "1107 Robie Ave",
      "Latitude": 28.789668,
      "Longitude": -81.633456,
      "OpenDate": ""
    },
    {
      "StationName": "Center Lake Level 2 - 1",
      "StreetAddress": "357 Center Lake Ln",
      "Latitude": 28.659679,
      "Longitude": -81.202028,
      "OpenDate": ""
    },
    {
      "StationName": "Cooperative Extension - 1",
      "StreetAddress": "12520 Ulmerton Rd",
      "Latitude": 27.883794,
      "Longitude": -82.809967,
      "OpenDate": ""
    },
    {
      "StationName": "24 Avenue F - Unit 1",
      "StreetAddress": "24 Avenue F",
      "Latitude": 29.728549,
      "Longitude": -84.985449,
      "OpenDate": ""
    },
    {
      "StationName": "Davenport - 1",
      "StreetAddress": "101 Champions Vue Loop",
      "Latitude": 28.27191,
      "Longitude": -81.658588,
      "OpenDate": ""
    },
    {
      "StationName": "City Hall Complex - 1",
      "StreetAddress": "2345 Providence Blvd",
      "Latitude": 28.926722,
      "Longitude": -81.221325,
      "OpenDate": ""
    },
    {
      "StationName": "Kimco Village Commons",
      "StreetAddress": "1300 Village Square",
      "Latitude": 30.51117,
      "Longitude": -84.248324,
      "OpenDate": ""
    },
    {
      "StationName": "Walmart 3235 N Miami",
      "StreetAddress": "1425 NE 163rd. St.",
      "Latitude": 25.927116,
      "Longitude": -80.170418,
      "OpenDate": ""
    },
    {
      "StationName": "TC at Boca Raton",
      "StreetAddress": "6000 Glades Rd",
      "Latitude": 26.362774,
      "Longitude": -80.131922,
      "OpenDate": ""
    },
    {
      "StationName": "Hale Activity Center - 1",
      "StreetAddress": "330 Douglas Ave",
      "Latitude": 28.003179,
      "Longitude": -82.788225,
      "OpenDate": ""
    },
    {
      "StationName": "Fine Arts Center - 1",
      "StreetAddress": "1143 Michigan Blvd",
      "Latitude": 28.037266,
      "Longitude": -82.774679,
      "OpenDate": ""
    },
    {
      "StationName": "Tavares Wooton Park - 1",
      "StreetAddress": "100 S Rockingham Ave",
      "Latitude": 28.801783,
      "Longitude": -81.727004,
      "OpenDate": ""
    },
    {
      "StationName": "Bay Harbor Islands Municipal Parking",
      "StreetAddress": "1165 95th St",
      "Latitude": 25.885801,
      "Longitude": -80.131956,
      "OpenDate": ""
    },
    {
      "StationName": "44 Avenue D - Unit 1",
      "StreetAddress": "44 Avenue D",
      "Latitude": 29.726698,
      "Longitude": -84.984102,
      "OpenDate": ""
    },
    {
      "StationName": "NeoCity Academy High School",
      "StreetAddress": "195 NeoCity Way",
      "Latitude": 28.290192,
      "Longitude": -81.371609,
      "OpenDate": ""
    },
    {
      "StationName": "City Hall - 1",
      "StreetAddress": "685 W Montrose Street",
      "Latitude": 28.554832,
      "Longitude": -81.766598,
      "OpenDate": ""
    },
    {
      "StationName": "Apalachicola DCFC",
      "StreetAddress": "116 Commerce Street",
      "Latitude": 29.728386,
      "Longitude": -84.984438,
      "OpenDate": ""
    },
    {
      "StationName": "OBE POWER MPA COLLEGE STA",
      "StreetAddress": "190 NE 3rd St",
      "Latitude": 25.776974,
      "Longitude": -80.190956,
      "OpenDate": ""
    },
    {
      "StationName": "TCHD DCFAST HOG",
      "StreetAddress": "4967 SE Federal Hwy",
      "Latitude": 27.144936,
      "Longitude": -80.21274,
      "OpenDate": ""
    },
    {
      "StationName": "PALMBEACHHD DCFAST HOG",
      "StreetAddress": "2955 45th St",
      "Latitude": 26.759964,
      "Longitude": -80.094795,
      "OpenDate": ""
    },
    {
      "StationName": "ROCKSTAR DCFAST HOG",
      "StreetAddress": "9501 Thunder Rd",
      "Latitude": 26.541245,
      "Longitude": -81.79331,
      "OpenDate": ""
    },
    {
      "StationName": "JAA CECIL AIRPORT 1",
      "StreetAddress": "13365 Simpson Way",
      "Latitude": 30.22206,
      "Longitude": -81.88102,
      "OpenDate": ""
    },
    {
      "StationName": "OBE POWER NOVA CLEARWATER",
      "StreetAddress": "3400 Gulf to Bay Blvd",
      "Latitude": 27.964064,
      "Longitude": -82.69796,
      "OpenDate": ""
    },
    {
      "StationName": "ADAMEC JACKSONVILLE DC",
      "StreetAddress": "8909 Baymeadows Rd",
      "Latitude": 30.22175,
      "Longitude": -81.57384,
      "OpenDate": ""
    },
    {
      "StationName": "CITYOFPALMETTO PALMETTO 1",
      "StreetAddress": "516 8th Ave W",
      "Latitude": 27.516006,
      "Longitude": -82.572526,
      "OpenDate": ""
    },
    {
      "StationName": "TOWER 10 VALET EV STATION 2",
      "StreetAddress": "8400 NW 53rd St",
      "Latitude": 25.819374,
      "Longitude": -80.334722,
      "OpenDate": ""
    },
    {
      "StationName": "OUTSIDE SERVICE DCFAST HOG",
      "StreetAddress": "1637 US-1",
      "Latitude": 29.339443,
      "Longitude": -81.13271,
      "OpenDate": ""
    },
    {
      "StationName": "INTOWN SUITES RIVERVIEW",
      "StreetAddress": "9321 Everhart Rd",
      "Latitude": 27.912198,
      "Longitude": -82.350008,
      "OpenDate": ""
    },
    {
      "StationName": "CITY OF EUSTIS CITYOFEUSTIS01",
      "StreetAddress": "15 S Eustis St",
      "Latitude": 28.852395,
      "Longitude": -81.684574,
      "OpenDate": ""
    },
    {
      "StationName": "CITY OF EUSTIS CITYOFEUSTIS03",
      "StreetAddress": "128 N Eustis St",
      "Latitude": 28.854243,
      "Longitude": -81.684694,
      "OpenDate": ""
    },
    {
      "StationName": "CITY OF EUSTIS CITYOFEUSTIS02",
      "StreetAddress": "120 N Bay St",
      "Latitude": 28.854094,
      "Longitude": -81.686137,
      "OpenDate": ""
    },
    {
      "StationName": "OBE POWER BISCAYNE BEACH2",
      "StreetAddress": "2900 NE 7th Avenue",
      "Latitude": 25.804712,
      "Longitude": -80.18618,
      "OpenDate": ""
    },
    {
      "StationName": "SEAGLASS AT BB SECOND FLOOR",
      "StreetAddress": "4971 Bonita Bay Blvd",
      "Latitude": 26.362835,
      "Longitude": -81.8349,
      "OpenDate": ""
    },
    {
      "StationName": "KUA HERITAGE PARK 1",
      "StreetAddress": "1901 Chief Osceola Trail",
      "Latitude": 28.29635,
      "Longitude": -81.367631,
      "OpenDate": ""
    },
    {
      "StationName": "FIELDS JAX STATION 02",
      "StreetAddress": "11217 Atlantic Blvd",
      "Latitude": 30.324979,
      "Longitude": -81.508292,
      "OpenDate": ""
    },
    {
      "StationName": "SEMINOLEHD DCFAST HOG",
      "StreetAddress": "620 Hickman Cir",
      "Latitude": 28.818108,
      "Longitude": -81.33205,
      "OpenDate": ""
    },
    {
      "StationName": "CAFE RIO RETAIL MITCHELL HAMM0C",
      "StreetAddress": "174A E Mitchell Hammock Rd",
      "Latitude": 28.655104,
      "Longitude": -81.206724,
      "OpenDate": ""
    },
    {
      "StationName": "OBE POWER TURNBERRY W OUT",
      "StreetAddress": "Turnberry Towers 19355 Turnberry Way",
      "Latitude": 25.955269,
      "Longitude": -80.127106,
      "OpenDate": ""
    },
    {
      "StationName": "THE DAYTONA LOT THE DAYTONA",
      "StreetAddress": "1870 Victory Circle",
      "Latitude": 29.194193,
      "Longitude": -81.073306,
      "OpenDate": ""
    },
    {
      "StationName": "H-D OF PCB DCFAST HOG",
      "StreetAddress": "14700 Panama City Beach Pkwy",
      "Latitude": 30.21448,
      "Longitude": -85.85414,
      "OpenDate": ""
    },
    {
      "StationName": "HD NPR DCFAST HOG",
      "StreetAddress": "5817 FL-54",
      "Latitude": 28.217413,
      "Longitude": -82.71773,
      "OpenDate": ""
    },
    {
      "StationName": "BRANDON DCFAST HOG",
      "StreetAddress": "9841 E Adamo Dr",
      "Latitude": 27.945358,
      "Longitude": -82.343445,
      "OpenDate": ""
    },
    {
      "StationName": "JAXCHAMBER CHAMBER 1",
      "StreetAddress": "3 Independent Dr",
      "Latitude": 30.325534,
      "Longitude": -81.657478,
      "OpenDate": ""
    },
    {
      "StationName": "PPM CURIA",
      "StreetAddress": "2031 NW 6th St",
      "Latitude": 29.671943,
      "Longitude": -82.330285,
      "OpenDate": ""
    },
    {
      "StationName": "OBE POWER MPA KNIGHT CENT",
      "StreetAddress": "200 SE 2nd Ave",
      "Latitude": 25.772024,
      "Longitude": -80.190636,
      "OpenDate": ""
    },
    {
      "StationName": "AAHDEV1 DCFAST HOG",
      "StreetAddress": "201 International Pkwy",
      "Latitude": 26.123085,
      "Longitude": -80.340706,
      "OpenDate": ""
    },
    {
      "StationName": "OBE POWER ATLANTIC IIINGW",
      "StreetAddress": "21050 ne 38th ave",
      "Latitude": 25.971527,
      "Longitude": -80.12457,
      "OpenDate": ""
    },
    {
      "StationName": "Nordstrom's Garage / Aventura Mall #2",
      "StreetAddress": "19501 Biscayne Blvd",
      "Latitude": 25.958276,
      "Longitude": -80.14483,
      "OpenDate": ""
    },
    {
      "StationName": "OBE POWER MPA MARLINS 3B",
      "StreetAddress": "658 NW 14th Avenue",
      "Latitude": 25.779198,
      "Longitude": -80.21896,
      "OpenDate": ""
    },
    {
      "StationName": "RCS STATION 7",
      "StreetAddress": "6651 Gate Pkwy",
      "Latitude": 30.247786,
      "Longitude": -81.52039,
      "OpenDate": ""
    },
    {
      "StationName": "RCS STATION 8",
      "StreetAddress": "6651 Gate Pkwy N",
      "Latitude": 30.24901,
      "Longitude": -81.52055,
      "OpenDate": ""
    },
    {
      "StationName": "LAKELAND HARLEY DCFAST HOG",
      "StreetAddress": "4202 Lakeland Hills Blvd",
      "Latitude": 28.095829,
      "Longitude": -81.9527,
      "OpenDate": ""
    },
    {
      "StationName": "EVFRONTENTRANCE DCFAST HOG",
      "StreetAddress": "1440 Sportsman Ln NE",
      "Latitude": 28.032452,
      "Longitude": -80.65259,
      "OpenDate": ""
    },
    {
      "StationName": "OBE POWER MPA MARLINS HB",
      "StreetAddress": "1497 NW 7th Street",
      "Latitude": 25.779364,
      "Longitude": -80.21994,
      "OpenDate": ""
    },
    {
      "StationName": "STORMYHILLHD DCFAST HOG",
      "StreetAddress": "2480 US-27",
      "Latitude": 28.536367,
      "Longitude": -81.73812,
      "OpenDate": ""
    },
    {
      "StationName": "HD SOUTH DCFAST HOG",
      "StreetAddress": "19825 S Dixie Hwy",
      "Latitude": 25.584173,
      "Longitude": -80.36372,
      "OpenDate": ""
    },
    {
      "StationName": "RCS STATTION 2",
      "StreetAddress": "6131 Gate Pkwy N",
      "Latitude": 30.248747,
      "Longitude": -81.52087,
      "OpenDate": ""
    },
    {
      "StationName": "RCS STATION 1",
      "StreetAddress": "Gate Pkwy",
      "Latitude": 30.247578,
      "Longitude": -81.52183,
      "OpenDate": ""
    },
    {
      "StationName": "WINTER PARK WARD PARK 01",
      "StreetAddress": "2206 Cady Way",
      "Latitude": 28.594581,
      "Longitude": -81.322485,
      "OpenDate": ""
    },
    {
      "StationName": "OBE POWER PLAZA LAS OLAS2",
      "StreetAddress": "301 East Las Olas Blvd",
      "Latitude": 26.119911,
      "Longitude": -80.13959,
      "OpenDate": ""
    },
    {
      "StationName": "OBE POWER MPA MARLINS 1B",
      "StreetAddress": "1502 NW 4th Street",
      "Latitude": 25.776846,
      "Longitude": -80.22071,
      "OpenDate": ""
    },
    {
      "StationName": "USF LOT 36 EVSE 01",
      "StreetAddress": "USF Sago Drive",
      "Latitude": 28.05861,
      "Longitude": -82.41066,
      "OpenDate": ""
    },
    {
      "StationName": "USF LOT 21 EVSE 01",
      "StreetAddress": "USF Genshaft Drive",
      "Latitude": 28.061815,
      "Longitude": -82.40834,
      "OpenDate": ""
    },
    {
      "StationName": "USF LOT 9A EVSE 01",
      "StreetAddress": "USF Laurel Drive",
      "Latitude": 28.063143,
      "Longitude": -82.41879,
      "OpenDate": ""
    },
    {
      "StationName": "USF LOT 38F EVSE 01",
      "StreetAddress": "USF Banyan Circle Drive",
      "Latitude": 28.066261,
      "Longitude": -82.424446,
      "OpenDate": ""
    },
    {
      "StationName": "USF COLLINS EVSE 02",
      "StreetAddress": "12075 Leroy Collins Blvd",
      "Latitude": 28.061333,
      "Longitude": -82.4126,
      "OpenDate": ""
    },
    {
      "StationName": "USF LAUREL GARAGE 1",
      "StreetAddress": "13325 USF Laurel Dr",
      "Latitude": 28.066648,
      "Longitude": -82.41842,
      "OpenDate": ""
    },
    {
      "StationName": "USF BEARD GARAGE 03",
      "StreetAddress": "3800 USF Alumni Drive",
      "Latitude": 28.058798,
      "Longitude": -82.4168,
      "OpenDate": ""
    },
    {
      "StationName": "ADAMEC AUGUSTINE DC",
      "StreetAddress": "380 Outlet Mall Blvd",
      "Latitude": 29.923492,
      "Longitude": -81.41256,
      "OpenDate": ""
    },
    {
      "StationName": "STADIUM ENCLAVE STATION 4",
      "StreetAddress": "901 Mosley St",
      "Latitude": 30.434274,
      "Longitude": -84.299512,
      "OpenDate": ""
    },
    {
      "StationName": "OBE POWER ICON BAY NGW",
      "StreetAddress": "430 NE 28th St",
      "Latitude": 25.803623,
      "Longitude": -80.18744,
      "OpenDate": ""
    },
    {
      "StationName": "OBE POWER ICON BAY GW",
      "StreetAddress": "460 NE 28th St",
      "Latitude": 25.803604,
      "Longitude": -80.187256,
      "OpenDate": ""
    },
    {
      "StationName": "NEPTUNE BEACH EV CHARGER 01",
      "StreetAddress": "150 2nd Street",
      "Latitude": 30.324142,
      "Longitude": -81.397316,
      "OpenDate": ""
    },
    {
      "StationName": "Bok Tower Gardens - 1",
      "StreetAddress": "1151 Tower Blvd",
      "Latitude": 27.936481,
      "Longitude": -81.575654,
      "OpenDate": ""
    },
    {
      "StationName": "Circuit Court North - 1",
      "StreetAddress": "29582 US Highway 19 N",
      "Latitude": 28.041351,
      "Longitude": -82.739967,
      "OpenDate": ""
    },
    {
      "StationName": "776 6th Ave S - 1",
      "StreetAddress": "776 6th Ave S",
      "Latitude": 27.764305,
      "Longitude": -82.64455,
      "OpenDate": ""
    },
    {
      "StationName": "Palm Harbor Library - 1",
      "StreetAddress": "2330 Nebraska Ave",
      "Latitude": 28.078122,
      "Longitude": -82.742729,
      "OpenDate": ""
    },
    {
      "StationName": "Orlando - 1",
      "StreetAddress": "9301 Summit Centre Way",
      "Latitude": 28.639529,
      "Longitude": -81.411498,
      "OpenDate": ""
    },
    {
      "StationName": "W Orange Trail - 1",
      "StreetAddress": "220 N Tubb Street",
      "Latitude": 28.557368,
      "Longitude": -81.627986,
      "OpenDate": ""
    },
    {
      "StationName": "Nature Preserve - 1",
      "StreetAddress": "747 Machete Trail",
      "Latitude": 28.555322,
      "Longitude": -81.639528,
      "OpenDate": ""
    },
    {
      "StationName": "UNIONWEST EV STATION 01",
      "StreetAddress": "600 W Amelia St",
      "Latitude": 28.54876,
      "Longitude": -81.387656,
      "OpenDate": ""
    },
    {
      "StationName": "13TH ST GARAGE1",
      "StreetAddress": "1301 Collins Ave",
      "Latitude": 25.784362,
      "Longitude": -80.130661,
      "OpenDate": ""
    },
    {
      "StationName": "ROLLINS COLLEGE RC UNIT 001",
      "StreetAddress": "131 E Comstock Ave",
      "Latitude": 28.594432,
      "Longitude": -81.349714,
      "OpenDate": ""
    },
    {
      "StationName": "OBE POWER WYNWOOD GAR NGW",
      "StreetAddress": "321 NW 26th St",
      "Latitude": 25.801647,
      "Longitude": -80.201805,
      "OpenDate": ""
    },
    {
      "StationName": "WALGREENS #7125",
      "StreetAddress": "1680 SE 17th St",
      "Latitude": 26.100077,
      "Longitude": -80.124947,
      "OpenDate": ""
    },
    {
      "StationName": "Coastal Powersports",
      "StreetAddress": "507 Mary Esther Cut Off NW",
      "Latitude": 30.424237,
      "Longitude": -86.648308,
      "OpenDate": ""
    },
    {
      "StationName": "CORONADO SPRING CS3",
      "StreetAddress": "Avenida Del Centro",
      "Latitude": 28.362757,
      "Longitude": -81.571689,
      "OpenDate": ""
    },
    {
      "StationName": "Walmart 4303 - Miami, FL",
      "StreetAddress": "3200 NW 79th St.",
      "Latitude": 25.844272,
      "Longitude": -80.250044,
      "OpenDate": ""
    },
    {
      "StationName": "I-4 CPE100",
      "StreetAddress": "3770 37th St",
      "Latitude": 28.503736,
      "Longitude": -81.425064,
      "OpenDate": ""
    },
    {
      "StationName": "ALTON TOWN CENT EAST 1",
      "StreetAddress": "5320 Donald Ross Rd",
      "Latitude": 26.881691,
      "Longitude": -80.115645,
      "OpenDate": ""
    },
    {
      "StationName": "ALTON TOWN CENT WEST 1",
      "StreetAddress": "5380 Donald Ross Rd",
      "Latitude": 26.881748,
      "Longitude": -80.117066,
      "OpenDate": ""
    },
    {
      "StationName": "JR Dunn Jewelers",
      "StreetAddress": "4210 N Federal Hwy",
      "Latitude": 26.282881,
      "Longitude": -80.095619,
      "OpenDate": "10/15/2019"
    },
    {
      "StationName": "Eastside Branch Leon County Library",
      "StreetAddress": "1583 Pedrick Road",
      "Latitude": 30.4736841,
      "Longitude": -84.1820039,
      "OpenDate": ""
    },
    {
      "StationName": "Leroy Collins Leon County Public Library",
      "StreetAddress": "200 West Park Avenue",
      "Latitude": 30.4426561,
      "Longitude": -84.2837558,
      "OpenDate": ""
    },
    {
      "StationName": "St Johns Town Center",
      "StreetAddress": "4663 River City Dr",
      "Latitude": 30.2595099,
      "Longitude": -81.5250505,
      "OpenDate": ""
    },
    {
      "StationName": "Celebration Pointe Parking",
      "StreetAddress": "3510 Southwest 45th Street",
      "Latitude": 29.6154821,
      "Longitude": -82.392243,
      "OpenDate": ""
    },
    {
      "StationName": "Creekside At Grand Haven",
      "StreetAddress": "4 Concorde Ln",
      "Latitude": 29.55424835,
      "Longitude": -81.1827419,
      "OpenDate": ""
    },
    {
      "StationName": "Royal Floridian Resort Association, Inc.",
      "StreetAddress": "51 South Atlantic Avenue",
      "Latitude": 29.2913753,
      "Longitude": -81.039232,
      "OpenDate": ""
    },
    {
      "StationName": "Tomoka Pointe",
      "StreetAddress": "1317 Tomoka Town Center Drive",
      "Latitude": 29.2157488,
      "Longitude": -81.0917041,
      "OpenDate": ""
    },
    {
      "StationName": "Piedmont Office Realty Trust - 400 TownPark, LLC",
      "StreetAddress": "400 Colonial Center Parkway",
      "Latitude": 28.7911396,
      "Longitude": -81.352918,
      "OpenDate": ""
    },
    {
      "StationName": "Sole at Casselberry",
      "StreetAddress": "3851 Grandpine Way",
      "Latitude": 28.6627602,
      "Longitude": -81.3392957,
      "OpenDate": ""
    },
    {
      "StationName": "Broadstone Winter Park",
      "StreetAddress": "1305 Morgan Stanley Ave",
      "Latitude": 28.6076266,
      "Longitude": -81.366536,
      "OpenDate": ""
    },
    {
      "StationName": "UCF Visitor and Parking Information Center",
      "StreetAddress": "4000 Central Florida Blvd., building 153, room 109",
      "Latitude": 28.6068897,
      "Longitude": -81.1972747,
      "OpenDate": ""
    },
    {
      "StationName": "UCF Parking Lot D-1",
      "StreetAddress": "UCF - Parking Lot D-1\n4000 Central Florida Boulevard",
      "Latitude": 28.5969358,
      "Longitude": -81.2033461,
      "OpenDate": ""
    },
    {
      "StationName": "UCF B1 Station #1 and B1 Station #2",
      "StreetAddress": "UCF-Parking Lot B-1\n4000 Central Florida Boulevard",
      "Latitude": 28.5968774,
      "Longitude": -81.2033083,
      "OpenDate": ""
    },
    {
      "StationName": "Garage A",
      "StreetAddress": "4000 Central Florida Boulevard",
      "Latitude": 28.5968774,
      "Longitude": -81.2033083,
      "OpenDate": ""
    },
    {
      "StationName": "Innovative Center",
      "StreetAddress": "3280 Progress Drive",
      "Latitude": 28.5897681,
      "Longitude": -81.1997506,
      "OpenDate": ""
    },
    {
      "StationName": "Orlando Tech Center 100-400",
      "StreetAddress": "12443 Research Parkway",
      "Latitude": 28.5887618,
      "Longitude": -81.1953179,
      "OpenDate": ""
    },
    {
      "StationName": "University Tower",
      "StreetAddress": "12201 Research Parkway",
      "Latitude": 28.5878819,
      "Longitude": -81.1993483,
      "OpenDate": ""
    },
    {
      "StationName": "Research Pavilion",
      "StreetAddress": "12424 Research Parkway\n#160",
      "Latitude": 28.5864019,
      "Longitude": -81.195939,
      "OpenDate": ""
    },
    {
      "StationName": "AGPM",
      "StreetAddress": "501 N. Magnolia Ave.",
      "Latitude": 28.5496368,
      "Longitude": -81.3764722,
      "OpenDate": ""
    },
    {
      "StationName": "Parramore Station",
      "StreetAddress": "323 North Parramore Avenue",
      "Latitude": 28.5472872,
      "Longitude": -81.3886567,
      "OpenDate": ""
    },
    {
      "StationName": "Camden Thornton Park",
      "StreetAddress": "420 East Church Street",
      "Latitude": 28.5401691,
      "Longitude": -81.3720781,
      "OpenDate": ""
    },
    {
      "StationName": "Cabana Bay Universal",
      "StreetAddress": "6723 Adventure Way",
      "Latitude": 28.4661731,
      "Longitude": -81.4719685,
      "OpenDate": ""
    },
    {
      "StationName": "Rialto Shopping Center",
      "StreetAddress": "7335 W. Sand Lake Road",
      "Latitude": 28.4500738,
      "Longitude": -81.4788199,
      "OpenDate": ""
    },
    {
      "StationName": "Eight at East Charging Station",
      "StreetAddress": "3200 Innovation Walk Loop",
      "Latitude": 28.4951399,
      "Longitude": -81.1755172,
      "OpenDate": ""
    },
    {
      "StationName": "Days Inn Titusville Kennedy Space Center",
      "StreetAddress": "3755 Cheney Hwy",
      "Latitude": 28.549293,
      "Longitude": -80.854428,
      "OpenDate": ""
    },
    {
      "StationName": "Westgate (Lakes)",
      "StreetAddress": "10000 Turkey Lake Road",
      "Latitude": 28.4256161,
      "Longitude": -81.4766649,
      "OpenDate": ""
    },
    {
      "StationName": "Lake Vue Apartments",
      "StreetAddress": "7119 Sand Lake Reserve Drive",
      "Latitude": 28.41605,
      "Longitude": -81.4777892,
      "OpenDate": ""
    },
    {
      "StationName": "Grande Pines",
      "StreetAddress": "11128 Grande Pines Circle",
      "Latitude": 28.3953931,
      "Longitude": -81.4714288,
      "OpenDate": ""
    },
    {
      "StationName": "Clubhouse",
      "StreetAddress": "12530 Innovation East Drive",
      "Latitude": 28.4420373,
      "Longitude": -81.1669049,
      "OpenDate": ""
    },
    {
      "StationName": "Westgate (Villas)",
      "StreetAddress": "2770 Old Lake Wilson Road",
      "Latitude": 28.3283343,
      "Longitude": -81.5916639,
      "OpenDate": ""
    },
    {
      "StationName": "Wyndham Cypress Palms",
      "StreetAddress": "5324 Fairfield Lake DR",
      "Latitude": 28.3298139,
      "Longitude": -81.4974813,
      "OpenDate": ""
    },
    {
      "StationName": "Oasis at Highwoods Preserve",
      "StreetAddress": "18311 Highwoods Preserve Parkway",
      "Latitude": 28.1366663,
      "Longitude": -82.3729523,
      "OpenDate": ""
    },
    {
      "StationName": "P2 Garage",
      "StreetAddress": "430 S Gulfview Blvd.",
      "Latitude": 27.9696567,
      "Longitude": -82.8301376,
      "OpenDate": ""
    },
    {
      "StationName": "Grady Square Garage",
      "StreetAddress": "2625 North Grady Avenue",
      "Latitude": 27.9652945,
      "Longitude": -82.5098227,
      "OpenDate": ""
    },
    {
      "StationName": "Urban Center II",
      "StreetAddress": "4890 West Kennedy Blvd.",
      "Latitude": 27.9438302,
      "Longitude": -82.5255128,
      "OpenDate": ""
    },
    {
      "StationName": "Urban Center I",
      "StreetAddress": "4830 West Kennedy Blvd., Suite 100",
      "Latitude": 27.943595,
      "Longitude": -82.5250048,
      "OpenDate": ""
    },
    {
      "StationName": "Lakeland City Hall",
      "StreetAddress": "228 South Massachusetts Avenue",
      "Latitude": 28.0422026,
      "Longitude": -81.9536431,
      "OpenDate": ""
    },
    {
      "StationName": "The Fitzgerald",
      "StreetAddress": "1211 E Kennedy Blvd.",
      "Latitude": 27.9505591,
      "Longitude": -82.4465196,
      "OpenDate": ""
    },
    {
      "StationName": "West Parking Garage",
      "StreetAddress": "514 North Boulevard",
      "Latitude": 27.9465306,
      "Longitude": -82.4685369,
      "OpenDate": ""
    },
    {
      "StationName": "Thomas Parking Garage",
      "StreetAddress": "810 W. North B Street",
      "Latitude": 27.94601235,
      "Longitude": -82.46795891,
      "OpenDate": ""
    },
    {
      "StationName": "Aurora Garage",
      "StreetAddress": "111 South Jefferson Street",
      "Latitude": 27.9468068,
      "Longitude": -82.4527171,
      "OpenDate": ""
    },
    {
      "StationName": "Pierhouse Channelside",
      "StreetAddress": "1226 E. Cumberland Ave.",
      "Latitude": 27.9454043,
      "Longitude": -82.4474516,
      "OpenDate": ""
    },
    {
      "StationName": "2 Bayshore",
      "StreetAddress": "101 W Beach Place",
      "Latitude": 27.9405889,
      "Longitude": -82.46091,
      "OpenDate": ""
    },
    {
      "StationName": "Satellite Beach City Hall",
      "StreetAddress": "565 Cassia Boulevard",
      "Latitude": 28.1716674,
      "Longitude": -80.6044805,
      "OpenDate": ""
    },
    {
      "StationName": "Pelican Beach Park",
      "StreetAddress": "1525 Highway A1A",
      "Latitude": 28.16801861,
      "Longitude": -80.58769676,
      "OpenDate": ""
    },
    {
      "StationName": "930 Central Flats location",
      "StreetAddress": "930 Central Avenue",
      "Latitude": 27.7708489,
      "Longitude": -82.6477694,
      "OpenDate": ""
    },
    {
      "StationName": "Oasis at Sarasota",
      "StreetAddress": "Telluride Loop",
      "Latitude": 27.3909501,
      "Longitude": -82.5281359,
      "OpenDate": ""
    },
    {
      "StationName": "Lido Beach Resort",
      "StreetAddress": "700 Benjamin Franklin Dr",
      "Latitude": 27.3101343,
      "Longitude": -82.5751188,
      "OpenDate": ""
    },
    {
      "StationName": "City of Fort Pierce, FL",
      "StreetAddress": "100 North U.S. 1",
      "Latitude": 27.447326,
      "Longitude": -80.326548,
      "OpenDate": ""
    },
    {
      "StationName": "Jupiter Beach Resort",
      "StreetAddress": "5 North A1A",
      "Latitude": 26.9339885,
      "Longitude": -80.0724779,
      "OpenDate": ""
    },
    {
      "StationName": "530708 : West Palm Beach Professional Center",
      "StreetAddress": "5601 Corporate Way",
      "Latitude": 26.7603082,
      "Longitude": -80.089809,
      "OpenDate": ""
    },
    {
      "StationName": "530705 : Northbridge Centre",
      "StreetAddress": "515 North Flagler Drive",
      "Latitude": 26.7175988,
      "Longitude": -80.0515277,
      "OpenDate": ""
    },
    {
      "StationName": "500 Clearlake Plaza",
      "StreetAddress": "500 South Australian Avenue",
      "Latitude": 26.7092979,
      "Longitude": -80.0637078,
      "OpenDate": ""
    },
    {
      "StationName": "City Place",
      "StreetAddress": "700 S. Rosemary Ave",
      "Latitude": 26.7073666,
      "Longitude": -80.0569964,
      "OpenDate": ""
    },
    {
      "StationName": "Tennis Center",
      "StreetAddress": "3100 Lyons Road",
      "Latitude": 26.6236577,
      "Longitude": -80.1897036,
      "OpenDate": ""
    },
    {
      "StationName": "El Bodegon Grocery",
      "StreetAddress": "4481 Lake Worth Road",
      "Latitude": 26.619532,
      "Longitude": -80.112607,
      "OpenDate": ""
    },
    {
      "StationName": "Aura Seaside Resort West Side",
      "StreetAddress": "1402 South Dixie Highway",
      "Latitude": 26.5738939,
      "Longitude": -80.0534799,
      "OpenDate": ""
    },
    {
      "StationName": "Aura Seaside Resort SouthEast",
      "StreetAddress": "1404 South Dixie Highway",
      "Latitude": 26.5737934,
      "Longitude": -80.0534706,
      "OpenDate": ""
    },
    {
      "StationName": "Clubhouse",
      "StreetAddress": "3609 High Ridge Way",
      "Latitude": 26.559172,
      "Longitude": -80.0758021,
      "OpenDate": ""
    },
    {
      "StationName": "FC Atlantic Commons Ph. I",
      "StreetAddress": "8085 Tumblestone Ct.",
      "Latitude": 26.4460317,
      "Longitude": -80.1763467,
      "OpenDate": ""
    },
    {
      "StationName": "Allure by Windsor",
      "StreetAddress": "6750 Congress Avenue",
      "Latitude": 26.40748096,
      "Longitude": -80.10119005,
      "OpenDate": ""
    },
    {
      "StationName": "School of Business #1",
      "StreetAddress": "3601 N Military Trail",
      "Latitude": 26.3845609,
      "Longitude": -80.125528,
      "OpenDate": ""
    },
    {
      "StationName": "530712 : Fountain Square",
      "StreetAddress": "2700 North Military Trail",
      "Latitude": 26.3754388,
      "Longitude": -80.1202638,
      "OpenDate": ""
    },
    {
      "StationName": "Town Center Boca Raton",
      "StreetAddress": "6000 Glades Road",
      "Latitude": 26.3659037,
      "Longitude": -80.1343444,
      "OpenDate": ""
    },
    {
      "StationName": "Florida Atlantic University",
      "StreetAddress": "777  Glades Road",
      "Latitude": 26.3655442,
      "Longitude": -80.1023478,
      "OpenDate": ""
    },
    {
      "StationName": "Camden Boca Raton",
      "StreetAddress": "131 South Federal Highway",
      "Latitude": 26.3484892,
      "Longitude": -80.0864256,
      "OpenDate": ""
    },
    {
      "StationName": "BCW #1, BCW #2, BCW #3, BCW #4",
      "StreetAddress": "33 SE 8th St",
      "Latitude": 26.3430777,
      "Longitude": -80.0873209,
      "OpenDate": ""
    },
    {
      "StationName": "One Thousand Ocean",
      "StreetAddress": "1000 S Ocean Blvd.",
      "Latitude": 26.3366616,
      "Longitude": -80.0714822,
      "OpenDate": ""
    },
    {
      "StationName": "Casa Palma",
      "StreetAddress": "6112 Florida 7",
      "Latitude": 26.3052257,
      "Longitude": -80.202068,
      "OpenDate": ""
    },
    {
      "StationName": "Plaza at Oceanside",
      "StreetAddress": "1 North Ocean Boulevard",
      "Latitude": 26.2323143,
      "Longitude": -80.0916413,
      "OpenDate": ""
    },
    {
      "StationName": "Lauderdale One Condominium Association",
      "StreetAddress": "2401 NE 65 Street",
      "Latitude": 26.208949,
      "Longitude": -80.1096624,
      "OpenDate": ""
    },
    {
      "StationName": "530714 - 3250 West Commercial Boulevard",
      "StreetAddress": "3250 West Commercial Boulevard",
      "Latitude": 26.1849712,
      "Longitude": -80.1908194,
      "OpenDate": ""
    },
    {
      "StationName": "Sunrise Town Center",
      "StreetAddress": "3426 North University Drive",
      "Latitude": 26.1696327,
      "Longitude": -80.2558573,
      "OpenDate": ""
    },
    {
      "StationName": "Viscaya Square Shopping Center",
      "StreetAddress": "975 North Nob Hill Road",
      "Latitude": 26.1351822,
      "Longitude": -80.2875434,
      "OpenDate": ""
    },
    {
      "StationName": "Mickel Park",
      "StreetAddress": "2675 Northwest 7th Avenue",
      "Latitude": 26.1605794,
      "Longitude": -80.1531805,
      "OpenDate": ""
    },
    {
      "StationName": "Metropolitan Luxury Community",
      "StreetAddress": "1220  NE 24th Street",
      "Latitude": 26.1574395,
      "Longitude": -80.1312991,
      "OpenDate": ""
    },
    {
      "StationName": "Shops 13",
      "StreetAddress": "815 13th Street NE",
      "Latitude": 26.14258481,
      "Longitude": -80.13513383,
      "OpenDate": ""
    },
    {
      "StationName": "Riva Fort Lauderdale Condominium Association",
      "StreetAddress": "1180 N Federal Hwy",
      "Latitude": 26.1391672,
      "Longitude": -80.1198279,
      "OpenDate": ""
    },
    {
      "StationName": "Sunrise Harbor Apartments",
      "StreetAddress": "1030 Seminole Dr.",
      "Latitude": 26.138652,
      "Longitude": -80.110014,
      "OpenDate": ""
    },
    {
      "StationName": "430703 : Pearl Flagler Village Apartments",
      "StreetAddress": "400 NE 3rd Ave",
      "Latitude": 26.1264097,
      "Longitude": -80.1403942,
      "OpenDate": ""
    },
    {
      "StationName": "City Hall Garage",
      "StreetAddress": "100 North Andrews Avenue",
      "Latitude": 26.1236856,
      "Longitude": -80.1433347,
      "OpenDate": ""
    },
    {
      "StationName": "Performing Arts & Science Garage",
      "StreetAddress": "101 SW 5th Ave.",
      "Latitude": 26.1215874,
      "Longitude": -80.1485639,
      "OpenDate": ""
    },
    {
      "StationName": "City Park Garage",
      "StreetAddress": "150 SE 2nd St.",
      "Latitude": 26.1204958,
      "Longitude": -80.1418789,
      "OpenDate": ""
    },
    {
      "StationName": "Amaray Las Olas",
      "StreetAddress": "215 SE 8th Avenue",
      "Latitude": 26.120206,
      "Longitude": -80.135664,
      "OpenDate": ""
    },
    {
      "StationName": "Las Olas Garage",
      "StreetAddress": "200 Las Olas Circle",
      "Latitude": 26.1204639,
      "Longitude": -80.1078834,
      "OpenDate": ""
    },
    {
      "StationName": "The Queue",
      "StreetAddress": "817  SE  2nd Avenue",
      "Latitude": 26.1116451,
      "Longitude": -80.1417679,
      "OpenDate": ""
    },
    {
      "StationName": "Elan Maison",
      "StreetAddress": "6220 Reese Road",
      "Latitude": 26.09155,
      "Longitude": -80.2253679,
      "OpenDate": ""
    },
    {
      "StationName": "The Avenue Apartments",
      "StreetAddress": "6220 Reese Rd",
      "Latitude": 26.09155,
      "Longitude": -80.2253679,
      "OpenDate": ""
    },
    {
      "StationName": "Beach Parking Lot",
      "StreetAddress": "700 Seabreeze Blvd.",
      "Latitude": 26.1125822,
      "Longitude": -80.1055477,
      "OpenDate": ""
    },
    {
      "StationName": "Broward Campus Police Dept.",
      "StreetAddress": "3200 College Avenue",
      "Latitude": 26.0816483,
      "Longitude": -80.236675,
      "OpenDate": ""
    },
    {
      "StationName": "Sheltair Aviation",
      "StreetAddress": "1100 Lee Wagener Boulevard",
      "Latitude": 26.0693956,
      "Longitude": -80.1558704,
      "OpenDate": ""
    },
    {
      "StationName": "Memorial Hospital West",
      "StreetAddress": "703 North Flamingo Road",
      "Latitude": 26.0139964,
      "Longitude": -80.309559,
      "OpenDate": ""
    },
    {
      "StationName": "The Shops Pembroke Gardens - 1000",
      "StreetAddress": "527 SW 145 Terrace",
      "Latitude": 26.00309267,
      "Longitude": -80.33653547,
      "OpenDate": ""
    },
    {
      "StationName": "Big Cypress National Preserve Oasis Visitor Center",
      "StreetAddress": "52105 Tamiami Trail East",
      "Latitude": 25.857406,
      "Longitude": -81.0335436,
      "OpenDate": ""
    },
    {
      "StationName": "Modera Town Center",
      "StreetAddress": "11575 City Hall Promenade, Suite 100",
      "Latitude": 25.9857053,
      "Longitude": -80.2989093,
      "OpenDate": ""
    },
    {
      "StationName": "Atlantico at Miramar",
      "StreetAddress": "12121 Southwest 43rd Street",
      "Latitude": 25.9691348,
      "Longitude": -80.3075325,
      "OpenDate": ""
    },
    {
      "StationName": "Meadow Condominiums",
      "StreetAddress": "1000 NE 12 Ave, Building 7#505",
      "Latitude": 25.99624,
      "Longitude": -80.136081,
      "OpenDate": ""
    },
    {
      "StationName": "Diplomat Landings Public garage",
      "StreetAddress": "3555 S Ocean DR",
      "Latitude": 25.992033,
      "Longitude": -80.118683,
      "OpenDate": ""
    },
    {
      "StationName": "Echo Aventura",
      "StreetAddress": "3250 NE 188 Street",
      "Latitude": 25.949131,
      "Longitude": -80.1354575,
      "OpenDate": ""
    },
    {
      "StationName": "Echo Condo Association, Inc.",
      "StreetAddress": "3300 NE 188th ST\nSuite 111",
      "Latitude": 25.9490105,
      "Longitude": -80.1359089,
      "OpenDate": ""
    },
    {
      "StationName": "Prive Condominium",
      "StreetAddress": "5000 Island Estates Dr",
      "Latitude": 25.9477622,
      "Longitude": -80.1304512,
      "OpenDate": ""
    },
    {
      "StationName": "Sunny Isles Beach Government Center",
      "StreetAddress": "18070 Collins Avenue",
      "Latitude": 25.9426796,
      "Longitude": -80.1220584,
      "OpenDate": ""
    },
    {
      "StationName": "The Shoreline at SoLeMia",
      "StreetAddress": "2321 Laguna Circle",
      "Latitude": 25.9113722,
      "Longitude": -80.1519746,
      "OpenDate": ""
    },
    {
      "StationName": "BBC - Bayview Lot",
      "StreetAddress": "3000 Northeast 151st Street",
      "Latitude": 25.9100931,
      "Longitude": -80.139622,
      "OpenDate": ""
    },
    {
      "StationName": "Town of Bay Harbor Islands",
      "StreetAddress": "1165 95th St",
      "Latitude": 25.8859405,
      "Longitude": -80.1322453,
      "OpenDate": ""
    },
    {
      "StationName": "Town of Surfside",
      "StreetAddress": "9293 Harding Avenue",
      "Latitude": 25.8813229,
      "Longitude": -80.1227819,
      "OpenDate": ""
    },
    {
      "StationName": "Shark Valley Visitor Center",
      "StreetAddress": "36000 Southwest 8th Street",
      "Latitude": 25.7569606,
      "Longitude": -80.7653558,
      "OpenDate": ""
    },
    {
      "StationName": "Four Seasons The Surf Club",
      "StreetAddress": "9011 Collins Ave",
      "Latitude": 25.8777288,
      "Longitude": -80.121414,
      "OpenDate": ""
    },
    {
      "StationName": "8333 At Downtown Doral",
      "StreetAddress": "8333 Northwest 53rd Street",
      "Latitude": 25.82206339,
      "Longitude": -80.33227612,
      "OpenDate": ""
    },
    {
      "StationName": "8300 at Downtown Doral",
      "StreetAddress": "8300 Northwest 53rd Street",
      "Latitude": 25.8205067,
      "Longitude": -80.3317117,
      "OpenDate": ""
    },
    {
      "StationName": "530703 : 8350 at Downtown Doral",
      "StreetAddress": "8350 Northwest 52nd Terrace",
      "Latitude": 25.81930015,
      "Longitude": -80.3323665,
      "OpenDate": ""
    },
    {
      "StationName": "Wingate Miami Airport",
      "StreetAddress": "3755 NW 78th Ave",
      "Latitude": 25.8082762,
      "Longitude": -80.3231392,
      "OpenDate": ""
    },
    {
      "StationName": "Hyde Midtown Condominium",
      "StreetAddress": "121 NE 34th Street\nSuite 700",
      "Latitude": 25.8082614,
      "Longitude": -80.1938407,
      "OpenDate": ""
    },
    {
      "StationName": "430706 : Midtown 29",
      "StreetAddress": "180 Northeast 29th Street",
      "Latitude": 25.8039791,
      "Longitude": -80.1916568,
      "OpenDate": ""
    },
    {
      "StationName": "FIU Engineering & Computing Campus",
      "StreetAddress": "10555 West Flagler Street",
      "Latitude": 25.7697694,
      "Longitude": -80.3675222,
      "OpenDate": ""
    },
    {
      "StationName": "Midtown 29",
      "StreetAddress": "180 NE 29th St",
      "Latitude": 25.8036849,
      "Longitude": -80.1918219,
      "OpenDate": ""
    },
    {
      "StationName": "Tech Station (PG6) 2nd Fl",
      "StreetAddress": "11200 SW 8 Street",
      "Latitude": 25.7601013,
      "Longitude": -80.3743058,
      "OpenDate": ""
    },
    {
      "StationName": "Red Garage (PG4) 1st Fl",
      "StreetAddress": "11200 SW 8 Street",
      "Latitude": 25.76019793,
      "Longitude": -80.37291105,
      "OpenDate": ""
    },
    {
      "StationName": "Market Station (PG5) 2nd Fl",
      "StreetAddress": "11200 SW 8 Street",
      "Latitude": 25.76021726,
      "Longitude": -80.37194545,
      "OpenDate": ""
    },
    {
      "StationName": "Panther Garage (PG3) 1st Fl",
      "StreetAddress": "11200 SW 8 Street",
      "Latitude": 25.7584787,
      "Longitude": -80.37958345,
      "OpenDate": ""
    },
    {
      "StationName": "Gold Garage (PG1) 1st Fl",
      "StreetAddress": "11200 SW 8 Street",
      "Latitude": 25.75488337,
      "Longitude": -80.37190254,
      "OpenDate": ""
    },
    {
      "StationName": "Blue Garage (PG2) 1st Fl",
      "StreetAddress": "11200 SW 8 Street",
      "Latitude": 25.75383976,
      "Longitude": -80.371924,
      "OpenDate": ""
    },
    {
      "StationName": "900 Biscayne Bay 14-01",
      "StreetAddress": "900 Biscayne Bay",
      "Latitude": 25.7834633,
      "Longitude": -80.1900112,
      "OpenDate": ""
    },
    {
      "StationName": "900 Biscayne Bay 14-02",
      "StreetAddress": "900 Biscayne Bay",
      "Latitude": 25.7834633,
      "Longitude": -80.1900112,
      "OpenDate": ""
    },
    {
      "StationName": "American Airlines Arena",
      "StreetAddress": "601 Biscayne Boulevard",
      "Latitude": 25.7813496,
      "Longitude": -80.1874406,
      "OpenDate": ""
    },
    {
      "StationName": "X Miami",
      "StreetAddress": "230 Northeast 4th Street",
      "Latitude": 25.7778649,
      "Longitude": -80.189625,
      "OpenDate": ""
    },
    {
      "StationName": "999 Ponce",
      "StreetAddress": "999 Ponce De Leon Blvd., Suite 101 c/o JLL",
      "Latitude": 25.7625,
      "Longitude": -80.258647,
      "OpenDate": ""
    },
    {
      "StationName": "SunTrust International Center",
      "StreetAddress": "1 SE 3rd Ave",
      "Latitude": 25.773902,
      "Longitude": -80.188557,
      "OpenDate": ""
    },
    {
      "StationName": "Southeast Financial Center",
      "StreetAddress": "200 Biscayne Blvd, Suite 350",
      "Latitude": 25.772545,
      "Longitude": -80.1883265,
      "OpenDate": ""
    },
    {
      "StationName": "530716 : Citigroup Center",
      "StreetAddress": "201 South Biscayne Boulevard",
      "Latitude": 25.7720951,
      "Longitude": -80.1867219,
      "OpenDate": ""
    },
    {
      "StationName": "Wells Fargo Center-Miami",
      "StreetAddress": "333 SE  2nd Ave., #3300",
      "Latitude": 25.7712942,
      "Longitude": -80.1894492,
      "OpenDate": ""
    },
    {
      "StationName": "530709 : 777 Brickell",
      "StreetAddress": "777 Brickell Avenue",
      "Latitude": 25.766409,
      "Longitude": -80.189904,
      "OpenDate": ""
    },
    {
      "StationName": "355 Alhambra",
      "StreetAddress": "355 Alhambra Circle",
      "Latitude": 25.7523052,
      "Longitude": -80.2617674,
      "OpenDate": ""
    },
    {
      "StationName": "MG Investment",
      "StreetAddress": "201 Alhambra Circle\n#514",
      "Latitude": 25.7525939,
      "Longitude": -80.2597939,
      "OpenDate": ""
    },
    {
      "StationName": "530710 : 396 Alhambra",
      "StreetAddress": "396 Alhambra Circle",
      "Latitude": 25.7514463,
      "Longitude": -80.262316,
      "OpenDate": ""
    },
    {
      "StationName": "801 Brickell 2",
      "StreetAddress": "801 Brickell Avenue",
      "Latitude": 25.7651246,
      "Longitude": -80.1902828,
      "OpenDate": ""
    },
    {
      "StationName": "BAC Colonade Garage",
      "StreetAddress": "180 Aragon Avenue",
      "Latitude": 25.7504193,
      "Longitude": -80.2582703,
      "OpenDate": ""
    },
    {
      "StationName": "Panorama 1 and 2",
      "StreetAddress": "1100 Brickell Bay Drive",
      "Latitude": 25.7626714,
      "Longitude": -80.1902294,
      "OpenDate": ""
    },
    {
      "StationName": "Miami Beach Marina",
      "StreetAddress": "300 Alton Road, #303",
      "Latitude": 25.7715615,
      "Longitude": -80.1399232,
      "OpenDate": ""
    },
    {
      "StationName": "ICON Condominium Association",
      "StreetAddress": "450 Alton Rd",
      "Latitude": 25.771909,
      "Longitude": -80.1380329,
      "OpenDate": ""
    },
    {
      "StationName": "2525 Ponce Garage",
      "StreetAddress": "2525 Ponce de Leon Blvd",
      "Latitude": 25.7484754,
      "Longitude": -80.2580467,
      "OpenDate": ""
    },
    {
      "StationName": "1221 Brickell",
      "StreetAddress": "1221 Brickell Ave",
      "Latitude": 25.7612034,
      "Longitude": -80.1909801,
      "OpenDate": ""
    },
    {
      "StationName": "Le Parc at Brickell",
      "StreetAddress": "1600 SW 1st Ave Suite 300",
      "Latitude": 25.759242,
      "Longitude": -80.1975753,
      "OpenDate": ""
    },
    {
      "StationName": "Echo  Brickell",
      "StreetAddress": "1451 Brickell Ave\n#500",
      "Latitude": 25.7581064,
      "Longitude": -80.1924028,
      "OpenDate": ""
    },
    {
      "StationName": "Echo Brickell",
      "StreetAddress": "1451 Brickell Ave",
      "Latitude": 25.758008,
      "Longitude": -80.192409,
      "OpenDate": ""
    },
    {
      "StationName": "Villa Regina Association",
      "StreetAddress": "1581 Brickell Avenue",
      "Latitude": 25.7563377,
      "Longitude": -80.1934818,
      "OpenDate": ""
    },
    {
      "StationName": "430702 : Gables Ponce",
      "StreetAddress": "310 Granello Avenue",
      "Latitude": 25.7293987,
      "Longitude": -80.2608221,
      "OpenDate": ""
    },
    {
      "StationName": "530711 : Biscayne Bank Tower Parking Garage",
      "StreetAddress": "2601 South Bayshore Drive",
      "Latitude": 25.7326404,
      "Longitude": -80.2342902,
      "OpenDate": ""
    },
    {
      "StationName": "GH1",
      "StreetAddress": "2627 South Bayshore Drive",
      "Latitude": 25.7322255,
      "Longitude": -80.2349188,
      "OpenDate": ""
    },
    {
      "StationName": "Dinner Key Marina",
      "StreetAddress": "3400 Pan American Dr",
      "Latitude": 25.7267146,
      "Longitude": -80.2352899,
      "OpenDate": ""
    },
    {
      "StationName": "Merrick Garage EV Stations",
      "StreetAddress": "5600 Merrick Street",
      "Latitude": 25.71774835,
      "Longitude": -80.2767965,
      "OpenDate": ""
    },
    {
      "StationName": "The Shops at Sunset Place",
      "StreetAddress": "5701 Sunset Drive",
      "Latitude": 25.705662,
      "Longitude": -80.286362,
      "OpenDate": ""
    },
    {
      "StationName": "Motion at Dadeland",
      "StreetAddress": "8400 South Dixie Highway",
      "Latitude": 25.6919969,
      "Longitude": -80.3048106,
      "OpenDate": ""
    },
    {
      "StationName": "Pinecrest Plaza",
      "StreetAddress": "11701 South Dixie Highway",
      "Latitude": 25.6623151,
      "Longitude": -80.3247206,
      "OpenDate": ""
    },
    {
      "StationName": "Best Western Plus Kendall Airport Hotel & Suites",
      "StreetAddress": "13700 SW 139th Court",
      "Latitude": 25.6398949,
      "Longitude": -80.419846,
      "OpenDate": ""
    },
    {
      "StationName": "The Landings at Coral Town Park",
      "StreetAddress": "14361 Southwest 268th Street",
      "Latitude": 25.5193187,
      "Longitude": -80.4232634,
      "OpenDate": ""
    },
    {
      "StationName": "Florida Keys Outlet Center",
      "StreetAddress": "250 East Palm Drive",
      "Latitude": 25.4525812,
      "Longitude": -80.4737557,
      "OpenDate": ""
    },
    {
      "StationName": "Biscayne National Park Visitor Center",
      "StreetAddress": "9700 Southwest 328th Street",
      "Latitude": 25.464423,
      "Longitude": -80.3347407,
      "OpenDate": ""
    },
    {
      "StationName": "COE Visitor Center",
      "StreetAddress": "40001 State Highway 9336",
      "Latitude": 25.3953272,
      "Longitude": -80.5831307,
      "OpenDate": ""
    },
    {
      "StationName": "Flamingo Marina",
      "StreetAddress": "Flamingo Lodge Highway",
      "Latitude": 25.1392636,
      "Longitude": -80.930705,
      "OpenDate": ""
    },
    {
      "StationName": "WINTER PARK TENNIS CTR 01",
      "StreetAddress": "1045 Azalea Ln",
      "Latitude": 28.589293,
      "Longitude": -81.35878,
      "OpenDate": ""
    },
    {
      "StationName": "Marina Palms Yacht Club & Residences Master",
      "StreetAddress": "17301 Biscayne Blvd",
      "Latitude": 25.9342456,
      "Longitude": -80.1495771,
      "OpenDate": ""
    },
    {
      "StationName": "Brickel on the River",
      "StreetAddress": "31 SE 5th St",
      "Latitude": 25.769623,
      "Longitude": -80.191636,
      "OpenDate": ""
    },
    {
      "StationName": "Shoppes at Celebration Place - Tesla Supercharger",
      "StreetAddress": "6210 W Irlo Bronson Memorial Hwy",
      "Latitude": 28.3313,
      "Longitude": -81.5325,
      "OpenDate": "9/30/2019"
    },
    {
      "StationName": "Butler Town Center - Tesla Supercharger",
      "StreetAddress": "3217 Southwest 35th Boulevard",
      "Latitude": 29.6244,
      "Longitude": -82.3768,
      "OpenDate": "9/30/2019"
    },
    {
      "StationName": "Mary Brickell Village - Tesla Supercharger",
      "StreetAddress": "900 S Miami Ave",
      "Latitude": 25.7647,
      "Longitude": -80.1943,
      "OpenDate": "9/30/2019"
    },
    {
      "StationName": "Brickell City Centre - Tesla Supercharger",
      "StreetAddress": "701 South Miami Avenue",
      "Latitude": 25.7677,
      "Longitude": -80.1925,
      "OpenDate": "9/30/2019"
    },
    {
      "StationName": "Brickell City Centre - Tesla Supercharger",
      "StreetAddress": "701 South Miami Avenue",
      "Latitude": 25.7669,
      "Longitude": -80.1945,
      "OpenDate": "9/30/2019"
    },
    {
      "StationName": "Sunset Harbor Parking Garage",
      "StreetAddress": "1900 Bay Road",
      "Latitude": 25.79459,
      "Longitude": -80.14409,
      "OpenDate": ""
    },
    {
      "StationName": "Mike Erdman Nissan",
      "StreetAddress": "4640 Highway 520",
      "Latitude": 28.3622374,
      "Longitude": -80.7994187,
      "OpenDate": "5/1/2019"
    },
    {
      "StationName": "THEGATE BR GATE LEASCO",
      "StreetAddress": "1550 Calder Blvd",
      "Latitude": 28.260306,
      "Longitude": -81.618209,
      "OpenDate": ""
    },
    {
      "StationName": "The Center DCFC - 1",
      "StreetAddress": "1640 Doctor MLK Blvd",
      "Latitude": 28.944092,
      "Longitude": -81.233555,
      "OpenDate": ""
    },
    {
      "StationName": "Apopka - 3",
      "StreetAddress": "1595 Marden Ridge Loop",
      "Latitude": 28.6556,
      "Longitude": -81.528078,
      "OpenDate": ""
    },
    {
      "StationName": "Tavares Chamber of Commerce  1",
      "StreetAddress": "300 E Main Street",
      "Latitude": 28.802115,
      "Longitude": -81.725471,
      "OpenDate": ""
    },
    {
      "StationName": "Tavares City Hall - 1",
      "StreetAddress": "201 E Main Street",
      "Latitude": 28.802546,
      "Longitude": -81.727047,
      "OpenDate": ""
    },
    {
      "StationName": "Dunedin City Hall - 1",
      "StreetAddress": "542 Main Street",
      "Latitude": 28.013026,
      "Longitude": -82.78574,
      "OpenDate": ""
    },
    {
      "StationName": "IAAPA - 1",
      "StreetAddress": "4155 Taft Vineland Rd",
      "Latitude": 28.416355,
      "Longitude": -81.427761,
      "OpenDate": ""
    },
    {
      "StationName": "Inverness Govt Center W - 1",
      "StreetAddress": "212 Main Street W",
      "Latitude": 28.836812,
      "Longitude": -82.331755,
      "OpenDate": ""
    },
    {
      "StationName": "Inverness Govt Center - 1",
      "StreetAddress": "200 N Pine Ave",
      "Latitude": 28.838237,
      "Longitude": -82.331346,
      "OpenDate": ""
    },
    {
      "StationName": "Dunedin Monroe Parking Garage",
      "StreetAddress": "356 Monroe Street",
      "Latitude": 28.013713,
      "Longitude": -82.788515,
      "OpenDate": ""
    },
    {
      "StationName": "St Pete Beach Suites - 1",
      "StreetAddress": "6801 Sunset Way",
      "Latitude": 27.737048,
      "Longitude": -82.750395,
      "OpenDate": ""
    },
    {
      "StationName": "Haines City Library - 1",
      "StreetAddress": "144 N 7th Street",
      "Latitude": 28.108614,
      "Longitude": -81.625869,
      "OpenDate": ""
    },
    {
      "StationName": "Indian Rocks Museum - 1",
      "StreetAddress": "203 4th Ave",
      "Latitude": 27.882497,
      "Longitude": -82.849502,
      "OpenDate": ""
    },
    {
      "StationName": "Tavares Parking Garage DCFC",
      "StreetAddress": "200 N Sinclair Ave",
      "Latitude": 28.802767,
      "Longitude": -81.730939,
      "OpenDate": ""
    },
    {
      "StationName": "TBBCC - 1",
      "StreetAddress": "6990 Gulf Blvd",
      "Latitude": 27.73867,
      "Longitude": -82.749664,
      "OpenDate": ""
    },
    {
      "StationName": "Fort Desoto Park - 1",
      "StreetAddress": "3500 Pinellas Bayway S",
      "Latitude": 27.613454,
      "Longitude": -82.735926,
      "OpenDate": ""
    },
    {
      "StationName": "King Financial Svcs - 1",
      "StreetAddress": "3354 E Gulf to Lake Hwy",
      "Latitude": 28.85016,
      "Longitude": -82.378226,
      "OpenDate": ""
    },
    {
      "StationName": "Walton Ave Rec Center - 1",
      "StreetAddress": "400 S Walton Ave",
      "Latitude": 28.143071,
      "Longitude": -82.746693,
      "OpenDate": ""
    },
    {
      "StationName": "BMW-NA RDC JVILLE GW1",
      "StreetAddress": "6255 Imeson Rd",
      "Latitude": 30.386889,
      "Longitude": -81.773495,
      "OpenDate": ""
    },
    {
      "StationName": "Miami Beach Convention Center - Loading Dock",
      "StreetAddress": "1701 Convention Center Drive",
      "Latitude": 25.796827,
      "Longitude": -80.133267,
      "OpenDate": ""
    },
    {
      "StationName": "PARAMOUNT MIAMI 4M ONE",
      "StreetAddress": "111 NE 9th St",
      "Latitude": 25.783052,
      "Longitude": -80.1919,
      "OpenDate": ""
    },
    {
      "StationName": "DECORUM STATION 4",
      "StreetAddress": "5122 Skipjack Ln",
      "Latitude": 26.600027,
      "Longitude": -81.80902,
      "OpenDate": ""
    },
    {
      "StationName": "DECORUM STATION 3",
      "StreetAddress": "Palm Drive",
      "Latitude": 26.599659,
      "Longitude": -81.80668,
      "OpenDate": ""
    },
    {
      "StationName": "DECORUM STATION 1",
      "StreetAddress": "5166 Pimlico Dr",
      "Latitude": 26.600042,
      "Longitude": -81.807594,
      "OpenDate": ""
    },
    {
      "StationName": "DECORUM STATION 5",
      "StreetAddress": "9993 Stella Palm Way",
      "Latitude": 26.599218,
      "Longitude": -81.807434,
      "OpenDate": ""
    },
    {
      "StationName": "EXPRESS SHOP 02",
      "StreetAddress": "11051 S Orange Blossom Trail",
      "Latitude": 28.406147,
      "Longitude": -81.403646,
      "OpenDate": ""
    },
    {
      "StationName": "CENTURY 21 Ocean location",
      "StreetAddress": "117 N Orlando Ave",
      "Latitude": 28.3206881,
      "Longitude": -80.60973,
      "OpenDate": ""
    },
    {
      "StationName": "Peace River Campgrounds",
      "StreetAddress": "2998 NW Highway 70",
      "Latitude": 27.229927,
      "Longitude": -81.889621,
      "OpenDate": "12/9/2019"
    },
    {
      "StationName": "CLAY COUNTY BCC FLEMING LIBRARY",
      "StreetAddress": "1895 Town Center Blvd",
      "Latitude": 30.093037,
      "Longitude": -81.71107,
      "OpenDate": ""
    },
    {
      "StationName": "Mosaic Westshore #1 NE",
      "StreetAddress": "5340 W Kennedy Blvd.",
      "Latitude": 27.9442101,
      "Longitude": -82.5336529,
      "OpenDate": ""
    },
    {
      "StationName": "CITY OF DBS COMMUNITY CTR",
      "StreetAddress": "3000 S Atlantic Ave",
      "Latitude": 29.168917,
      "Longitude": -80.980095,
      "OpenDate": ""
    },
    {
      "StationName": "AHS CHARGE OVIEDO ER",
      "StreetAddress": "8100 Red Bug Lake Rd",
      "Latitude": 28.656725,
      "Longitude": -81.238914,
      "OpenDate": ""
    },
    {
      "StationName": "Beach House Restaurant - Tesla Destination",
      "StreetAddress": "200  Gulf Dr N",
      "Latitude": 27.467243,
      "Longitude": -82.699675,
      "OpenDate": "9/30/2019"
    },
    {
      "StationName": "Hyatt House Ft. Lauderdale Airport & Cruise Port - Tesla Destination",
      "StreetAddress": "90 SW 18th Ave",
      "Latitude": 26.049096,
      "Longitude": -80.160077,
      "OpenDate": "9/30/2019"
    },
    {
      "StationName": "La Quinta Inn by Wyndham Gainesville - Tesla Destination",
      "StreetAddress": "920 NW 69th Ter",
      "Latitude": 29.661692,
      "Longitude": -82.417592,
      "OpenDate": "9/30/2019"
    },
    {
      "StationName": "Gaylord Palms Resort & Convention Center - Tesla Destination",
      "StreetAddress": "6000 W Osceola Pkwy",
      "Latitude": 28.345007,
      "Longitude": -81.525749,
      "OpenDate": "9/30/2019"
    },
    {
      "StationName": "Diamonds By Raymond Lee - Tesla Destination",
      "StreetAddress": "2801 N Federal Hwy",
      "Latitude": 26.375974,
      "Longitude": -80.076866,
      "OpenDate": "9/30/2019"
    },
    {
      "StationName": "Hampton/Home 2 Tampa Downtown Garage - Tesla Destination",
      "StreetAddress": "1155 E Kennedy Blvd",
      "Latitude": 27.950406,
      "Longitude": -82.449072,
      "OpenDate": "9/30/2019"
    },
    {
      "StationName": "Home2 Suites Tampa USF near Busch Gardens - Tesla Destination",
      "StreetAddress": "11606 N McKinley Dr",
      "Latitude": 28.053327,
      "Longitude": -82.417066,
      "OpenDate": "9/30/2019"
    },
    {
      "StationName": "Clematis Garage - Tesla Destination",
      "StreetAddress": "500 Banyan Blvd",
      "Latitude": 26.714169,
      "Longitude": -80.055572,
      "OpenDate": "9/30/2019"
    },
    {
      "StationName": "City Center Garage - Tesla Destination",
      "StreetAddress": "125 N Dixie Hwy",
      "Latitude": 26.713966,
      "Longitude": -80.053785,
      "OpenDate": "9/30/2019"
    },
    {
      "StationName": "Sleep Inn & Suites Tampa - Tesla Destination",
      "StreetAddress": "6231 S Dale Mabry Hwy",
      "Latitude": 27.876641,
      "Longitude": -82.50685,
      "OpenDate": "9/30/2019"
    },
    {
      "StationName": "Braden River Business Center - Tesla Destination",
      "StreetAddress": "4740 State Rd 64 E",
      "Latitude": 27.495908,
      "Longitude": -82.504374,
      "OpenDate": "9/30/2019"
    },
    {
      "StationName": "Seafarer Resort and Beach - Tesla Destination",
      "StreetAddress": "97684 Overseas Hwy",
      "Latitude": 25.077001,
      "Longitude": -80.46167,
      "OpenDate": "9/30/2019"
    },
    {
      "StationName": "225 Self Park Garage - Tesla Destination",
      "StreetAddress": "225 SE 2nd St",
      "Latitude": 25.772888,
      "Longitude": -80.189794,
      "OpenDate": "9/30/2019"
    },
    {
      "StationName": "Hyatt Place Wesley Chapel - Tesla Destination",
      "StreetAddress": "26000 Sierra Center Blvd",
      "Latitude": 28.195992,
      "Longitude": -82.388496,
      "OpenDate": "9/30/2019"
    },
    {
      "StationName": "The Ritz Carlton Orlando Grande Lakes - Tesla Destination",
      "StreetAddress": "4012 Central Florida Pkwy",
      "Latitude": 28.410029,
      "Longitude": -81.429681,
      "OpenDate": "9/30/2019"
    },
    {
      "StationName": "Miami Shores Village",
      "StreetAddress": "10050 NE 2 Ave",
      "Latitude": 25.8697199,
      "Longitude": -80.2267724,
      "OpenDate": ""
    },
    {
      "StationName": "AAA National",
      "StreetAddress": "1000 AAA Drive",
      "Latitude": 28.769634,
      "Longitude": -81.361617,
      "OpenDate": ""
    },
    {
      "StationName": "HIGHWOODS OHP",
      "StreetAddress": "777 S Harbour Island Blvd",
      "Latitude": 27.937634,
      "Longitude": -82.453936,
      "OpenDate": ""
    },
    {
      "StationName": "WINTER PARK CADY WAY PARK",
      "StreetAddress": "2525 Cady Way",
      "Latitude": 28.595381,
      "Longitude": -81.317053,
      "OpenDate": ""
    },
    {
      "StationName": "Brevard Medical City",
      "StreetAddress": "6619 N. Wickham Rd",
      "Latitude": 28.220518,
      "Longitude": -80.674573,
      "OpenDate": ""
    },
    {
      "StationName": "LAKE SQUARE MAL LSM CHARGE 2",
      "StreetAddress": "10401 NW US Hwy 441",
      "Latitude": 28.824212,
      "Longitude": -81.784065,
      "OpenDate": ""
    },
    {
      "StationName": "RP Funding Center",
      "StreetAddress": "701 W Lime Street",
      "Latitude": 28.041408,
      "Longitude": -81.96353,
      "OpenDate": ""
    },
    {
      "StationName": "Bob Heilman Beachcomber - 1",
      "StreetAddress": "447 Mandalay Ave",
      "Latitude": 27.980169,
      "Longitude": -82.82669,
      "OpenDate": ""
    },
    {
      "StationName": "Indian Rocks City Hall - 1",
      "StreetAddress": "1507 Bay Palm Blvd",
      "Latitude": 27.897738,
      "Longitude": -82.846042,
      "OpenDate": ""
    },
    {
      "StationName": "Self-Help Credit Union - 1",
      "StreetAddress": "667 W Orange Blossom Trail",
      "Latitude": 28.681649,
      "Longitude": -81.523913,
      "OpenDate": ""
    },
    {
      "StationName": "Beach Parking Sand Key - 1",
      "StreetAddress": "1060 Gulf Blvd",
      "Latitude": 27.960598,
      "Longitude": -82.829639,
      "OpenDate": ""
    },
    {
      "StationName": "GATOR HARLEY DCFAST HOG",
      "StreetAddress": "1745 US-441",
      "Latitude": 28.816729,
      "Longitude": -81.845856,
      "OpenDate": ""
    },
    {
      "StationName": "Hutchinson Shores",
      "StreetAddress": "3793 NE Ocean Blvd.",
      "Latitude": 27.2512337,
      "Longitude": -80.1949166,
      "OpenDate": ""
    },
    {
      "StationName": "Kelly Recreation Complex",
      "StreetAddress": "404 Imperial Blvd",
      "Latitude": 28.001572,
      "Longitude": -81.960788,
      "OpenDate": ""
    },
    {
      "StationName": "SIMON ST JOHNS TOWN 2",
      "StreetAddress": "4720 Town Crossing Dr",
      "Latitude": 30.257019,
      "Longitude": -81.527319,
      "OpenDate": ""
    },
    {
      "StationName": "801 HEATHROW EV CHARGER 02",
      "StreetAddress": "801 International Pkwy",
      "Latitude": 28.776426,
      "Longitude": -81.35667,
      "OpenDate": ""
    },
    {
      "StationName": "Wawa - Tesla Supercharger",
      "StreetAddress": "7940 West Irlo Bronson Memorial Highway",
      "Latitude": 28.3456,
      "Longitude": -81.6048,
      "OpenDate": "1/20/2020"
    },
    {
      "StationName": "Dania Beach Public Parking",
      "StreetAddress": "49 Park Ave E",
      "Latitude": 26.0517,
      "Longitude": -80.1446,
      "OpenDate": ""
    },
    {
      "StationName": "Omni CG Self Park - 1",
      "StreetAddress": "1500 Masters Blvd",
      "Latitude": 28.261618,
      "Longitude": -81.62595,
      "OpenDate": ""
    },
    {
      "StationName": "GreenWise Market at Lakeside Centre",
      "StreetAddress": "8210 Glades Rd",
      "Latitude": 26.366934,
      "Longitude": -80.172134,
      "OpenDate": "12/12/2019"
    },
    {
      "StationName": "Publix #1659",
      "StreetAddress": "4747 S Florida Ave Ste 110",
      "Latitude": 27.978539,
      "Longitude": -81.95939,
      "OpenDate": "12/12/2019"
    },
    {
      "StationName": "Rodeway Inn & Suites",
      "StreetAddress": "2440 State Road 84",
      "Latitude": 26.0868,
      "Longitude": -80.1737,
      "OpenDate": ""
    },
    {
      "StationName": "42nd Street Garage",
      "StreetAddress": "4166 Royal Palm Avenue",
      "Latitude": 25.8144,
      "Longitude": -80.1287,
      "OpenDate": ""
    },
    {
      "StationName": "Bainbridge Winter Park location",
      "StreetAddress": "Morgan Stanley Ave",
      "Latitude": 28.607677,
      "Longitude": -81.3673109,
      "OpenDate": ""
    },
    {
      "StationName": "Artsquare Hallandale location",
      "StreetAddress": "401 N Federal Hwy",
      "Latitude": 25.9894641,
      "Longitude": -80.143934,
      "OpenDate": ""
    },
    {
      "StationName": "Walmart - Marketplace, Pine Island",
      "StreetAddress": "4000 NW 88th Ave",
      "Latitude": 26.043528,
      "Longitude": -80.258975,
      "OpenDate": ""
    },
    {
      "StationName": "The Standard GNV",
      "StreetAddress": "1360 West University Avenue",
      "Latitude": 29.6526104,
      "Longitude": -82.339802,
      "OpenDate": ""
    },
    {
      "StationName": "UNIV OF FLORIDA GARAGE 14 LVL 6",
      "StreetAddress": "1104 Gale Lemerand Dr Garage 14",
      "Latitude": 29.642027,
      "Longitude": -82.35076,
      "OpenDate": ""
    },
    {
      "StationName": "DECORUM STATION 7",
      "StreetAddress": "9851 6 Mile Cypress Pkwy",
      "Latitude": 26.599981,
      "Longitude": -81.809456,
      "OpenDate": ""
    },
    {
      "StationName": "195 Beach Dr NE DCFC",
      "StreetAddress": "195 Beach Dr NE",
      "Latitude": 27.77332,
      "Longitude": -82.63275,
      "OpenDate": ""
    },
    {
      "StationName": "Baptist Medical Center Jacksonville - Visitors Garage",
      "StreetAddress": "14550 St Augustine Rd",
      "Latitude": 30.139456,
      "Longitude": -81.534162,
      "OpenDate": ""
    },
    {
      "StationName": "Wawa - Tesla Supercharger",
      "StreetAddress": "6971 SW 24th Street",
      "Latitude": 25.7485,
      "Longitude": -80.308,
      "OpenDate": "1/20/2020"
    },
    {
      "StationName": "Dunedin Public Library DCFC",
      "StreetAddress": "223 Douglas Ave",
      "Latitude": 28.002439,
      "Longitude": -82.78724,
      "OpenDate": ""
    },
    {
      "StationName": "Diamonds By Raymond Lee",
      "StreetAddress": "2801 N Federal Hwy",
      "Latitude": 26.375974,
      "Longitude": -80.076866,
      "OpenDate": "9/30/2019"
    },
    {
      "StationName": "WHOLE FOODS MKT DELRAY BEACH 1",
      "StreetAddress": "660 Linton Blvd",
      "Latitude": 26.439084,
      "Longitude": -80.079892,
      "OpenDate": ""
    },
    {
      "StationName": "WHOLE FOODS MKT DELRAY BEACH 2",
      "StreetAddress": "680 Linton Blvd",
      "Latitude": 26.438887,
      "Longitude": -80.079619,
      "OpenDate": ""
    },
    {
      "StationName": "HIE APOPKA STATION 1",
      "StreetAddress": "238 S Line Dr",
      "Latitude": 28.674099,
      "Longitude": -81.460263,
      "OpenDate": ""
    },
    {
      "StationName": "City Hall Garage",
      "StreetAddress": "1755 Meridian Avenue",
      "Latitude": 25.792776,
      "Longitude": -80.135758,
      "OpenDate": ""
    },
    {
      "StationName": "LARGO STATION WATERCHASE APT1",
      "StreetAddress": "401 Rosery Rd NE",
      "Latitude": 27.926783,
      "Longitude": -82.781769,
      "OpenDate": ""
    },
    {
      "StationName": "UPOINTE UP 3",
      "StreetAddress": "6325 Robert Ln",
      "Latitude": 26.063953,
      "Longitude": -80.230636,
      "OpenDate": ""
    },
    {
      "StationName": "Cite Condo",
      "StreetAddress": "2000 North Bayshore Drive",
      "Latitude": 25.795709,
      "Longitude": -80.18842,
      "OpenDate": ""
    },
    {
      "StationName": "Beaches Dermatology location",
      "StreetAddress": "614 East Twincourt Trail",
      "Latitude": 29.9870958,
      "Longitude": -81.4534139,
      "OpenDate": ""
    },
    {
      "StationName": "Miccosukee Service Plaza - Tesla Supercharger",
      "StreetAddress": "47801 West State Road 84",
      "Latitude": 26.174345,
      "Longitude": -80.8557,
      "OpenDate": "2/21/2020"
    },
    {
      "StationName": "Wawa - Tesla Supercharger",
      "StreetAddress": "26508 US Highway 19 North",
      "Latitude": 28.012997,
      "Longitude": -82.7362,
      "OpenDate": "2/21/2020"
    },
    {
      "StationName": "Corp Office DCFC",
      "StreetAddress": "7007 Sea Harbor Dr",
      "Latitude": 28.414821,
      "Longitude": -81.46285,
      "OpenDate": ""
    },
    {
      "StationName": "Third Floor Stations",
      "StreetAddress": "848 Brickell Key Drive\nSuite 503",
      "Latitude": 25.7692838,
      "Longitude": -80.1837141,
      "OpenDate": ""
    },
    {
      "StationName": "Schmidt Parking Garage First Floor",
      "StreetAddress": "800 Meadows Road",
      "Latitude": 26.3585783,
      "Longitude": -80.1022013,
      "OpenDate": ""
    },
    {
      "StationName": "DMS KNOTT BUILDING",
      "StreetAddress": "111 West St. Augustine Road",
      "Latitude": 30.436964,
      "Longitude": -84.28231,
      "OpenDate": ""
    },
    {
      "StationName": "SARASOTA PARK SAINTARMDCFAST",
      "StreetAddress": "57 N Adams Dr",
      "Latitude": 27.31996,
      "Longitude": -82.576558,
      "OpenDate": ""
    },
    {
      "StationName": "CITY OF TAMPA CONV CENTER 1",
      "StreetAddress": "200 S Ashley Street",
      "Latitude": 27.942638,
      "Longitude": -82.456822,
      "OpenDate": ""
    },
    {
      "StationName": "CITY OF TAMPA S REGIONAL 1",
      "StreetAddress": "301 Channelside Dr",
      "Latitude": 27.9425,
      "Longitude": -82.454176,
      "OpenDate": ""
    },
    {
      "StationName": "KUA Minh Son Charger",
      "StreetAddress": "1701 W Carroll Street",
      "Latitude": 28.329088,
      "Longitude": -81.421134,
      "OpenDate": ""
    },
    {
      "StationName": "Schmidt Parking Garage Second Floor",
      "StreetAddress": "800 Meadows Road",
      "Latitude": 26.3585783,
      "Longitude": -80.1022013,
      "OpenDate": ""
    },
    {
      "StationName": "Schmidt Parking Garage Third Floor",
      "StreetAddress": "800 Meadows Road",
      "Latitude": 26.3585783,
      "Longitude": -80.1022013,
      "OpenDate": ""
    },
    {
      "StationName": "Schmidt Parking Garage Fourth Floor",
      "StreetAddress": "800 Meadows Road",
      "Latitude": 26.3585783,
      "Longitude": -80.1022013,
      "OpenDate": ""
    },
    {
      "StationName": "ACTIVITY CENTER CVE ACTIVITY",
      "StreetAddress": "3501 West Drive",
      "Latitude": 26.31116,
      "Longitude": -80.1524,
      "OpenDate": ""
    },
    {
      "StationName": "NORTH TOWER STATION 5",
      "StreetAddress": "100 NW 6 St",
      "Latitude": 25.779761,
      "Longitude": -80.195521,
      "OpenDate": ""
    },
    {
      "StationName": "Wawa - Tesla Supercharger",
      "StreetAddress": "20 SW 12th Avenue",
      "Latitude": 26.317576,
      "Longitude": -80.1194,
      "OpenDate": "2/28/2020"
    },
    {
      "StationName": "Residences by Armani Casa",
      "StreetAddress": "18975 Collins Ave",
      "Latitude": 25.9517,
      "Longitude": -80.12,
      "OpenDate": ""
    },
    {
      "StationName": "501 Magnolia",
      "StreetAddress": "501 North Magnolia Avenue",
      "Latitude": 28.5495879,
      "Longitude": -81.3764593,
      "OpenDate": ""
    },
    {
      "StationName": "SEFC LEGACY SEFC",
      "StreetAddress": "200 S Biscayne Blvd",
      "Latitude": 25.772173,
      "Longitude": -80.188143,
      "OpenDate": ""
    },
    {
      "StationName": "WHOLE FOODS MKT DADE ST1",
      "StreetAddress": "7856 SW 104th St",
      "Latitude": 25.673642,
      "Longitude": -80.322938,
      "OpenDate": ""
    },
    {
      "StationName": "OBE POWER HYDE BEACH HOUS",
      "StreetAddress": "4010 S Ocean Dr",
      "Latitude": 25.986968,
      "Longitude": -80.120627,
      "OpenDate": ""
    },
    {
      "StationName": "Blue Heron Living",
      "StreetAddress": "Salt Meadow Circle",
      "Latitude": 27.4999692,
      "Longitude": -82.5002836,
      "OpenDate": ""
    },
    {
      "StationName": "Wawa - Tesla Supercharger",
      "StreetAddress": "9050 20th Street",
      "Latitude": 27.640197,
      "Longitude": -80.5135,
      "OpenDate": "3/20/2020"
    },
    {
      "StationName": "CHARGERPOINT1 STATION 1",
      "StreetAddress": "9100 N Kendall Dr",
      "Latitude": 25.687086,
      "Longitude": -80.342515,
      "OpenDate": ""
    },
    {
      "StationName": "THE HENRY STATION 2",
      "StreetAddress": "4135 Laguna St",
      "Latitude": 25.733434,
      "Longitude": -80.261019,
      "OpenDate": ""
    },
    {
      "StationName": "THEGROVE THEGROVE",
      "StreetAddress": "12280 Miramar Blvd",
      "Latitude": 25.981674,
      "Longitude": -80.310311,
      "OpenDate": ""
    },
    {
      "StationName": "THE HENRY STATION 1",
      "StreetAddress": "4061 Laguna St",
      "Latitude": 25.734036,
      "Longitude": -80.261056,
      "OpenDate": ""
    },
    {
      "StationName": "Jarrett-Scott Ford",
      "StreetAddress": "2000 E Baker St",
      "Latitude": 28.018998,
      "Longitude": -82.105424,
      "OpenDate": "12/1/2018"
    },
    {
      "StationName": "Integra Cove",
      "StreetAddress": "6801 Integra Cove Blvd",
      "Latitude": 28.407818,
      "Longitude": -81.473306,
      "OpenDate": ""
    },
    {
      "StationName": "Lakeshore Mall DCFC - 1",
      "StreetAddress": "901 US Highway 27 N",
      "Latitude": 27.488794,
      "Longitude": -81.487342,
      "OpenDate": ""
    },
    {
      "StationName": "LEE COUNTY GOV LIBRARY",
      "StreetAddress": "Lee Str - Second Str",
      "Latitude": 26.643811,
      "Longitude": -81.867009,
      "OpenDate": ""
    },
    {
      "StationName": "Wawa - Tesla Supercharger",
      "StreetAddress": "2620 West Broward Boulevard",
      "Latitude": 26.120873,
      "Longitude": -80.1772,
      "OpenDate": "4/10/2020"
    },
    {
      "StationName": "DRAKE MIDTOWN DRAKE MIDTOWN",
      "StreetAddress": "242 Wheelhouse Ln",
      "Latitude": 28.754169,
      "Longitude": -81.335891,
      "OpenDate": ""
    },
    {
      "StationName": "CITY BRADENTON S FL MUSEUM",
      "StreetAddress": "100 10th St W",
      "Latitude": 27.498787,
      "Longitude": -82.571854,
      "OpenDate": ""
    },
    {
      "StationName": "CITY BRADENTON CITY CTR GAR 01",
      "StreetAddress": "1000 3rd Ave W",
      "Latitude": 27.497741,
      "Longitude": -82.572238,
      "OpenDate": ""
    },
    {
      "StationName": "CITY BRADENTON MARINA EVSE 01",
      "StreetAddress": "1450 1st Ave W",
      "Latitude": 27.499223,
      "Longitude": -82.575603,
      "OpenDate": ""
    },
    {
      "StationName": "Osceola County Courthouse - 1",
      "StreetAddress": "2 Courthouse Square",
      "Latitude": 28.290752,
      "Longitude": -81.410099,
      "OpenDate": ""
    },
    {
      "StationName": "Cagans Crossing Library DCFC 1",
      "StreetAddress": "16729 Cagan Oaks",
      "Latitude": 28.356461,
      "Longitude": -81.678472,
      "OpenDate": ""
    },
    {
      "StationName": "Home 2 Suites - Stuart",
      "StreetAddress": "1440 NW Federal Highway",
      "Latitude": 27.223285,
      "Longitude": -80.264461,
      "OpenDate": ""
    },
    {
      "StationName": "SAGE ON PALMER STATION 4",
      "StreetAddress": "12521 Honore Ave",
      "Latitude": 27.196712,
      "Longitude": -82.44372,
      "OpenDate": ""
    },
    {
      "StationName": "SAGE ON PALMER STATION 2",
      "StreetAddress": "12501 Honore Ave",
      "Latitude": 27.198051,
      "Longitude": -82.44326,
      "OpenDate": ""
    },
    {
      "StationName": "CITY OF OLDSMAR CITY HALL 01",
      "StreetAddress": "101 State St W",
      "Latitude": 28.037424,
      "Longitude": -82.66364,
      "OpenDate": ""
    },
    {
      "StationName": "JTA 1111 WFORSYTH 2",
      "StreetAddress": "1111 W Forsyth Street",
      "Latitude": 30.330084,
      "Longitude": -81.673134,
      "OpenDate": ""
    },
    {
      "StationName": "The Oasis at Town Center location",
      "StreetAddress": "10667 Brightman Boulevard",
      "Latitude": 30.2590564,
      "Longitude": -81.5210618,
      "OpenDate": ""
    },
    {
      "StationName": "Wawa - Tesla Supercharger",
      "StreetAddress": "3400 Howland Blvd",
      "Latitude": 28.95,
      "Longitude": -81.25,
      "OpenDate": "5/1/2020"
    },
    {
      "StationName": "Piedmont 500 TownPark, LLC",
      "StreetAddress": "500 Colonial Center Parkway",
      "Latitude": 28.7932199,
      "Longitude": -81.3516345,
      "OpenDate": ""
    },
    {
      "StationName": "Cabana Auto Wash location",
      "StreetAddress": "12194 Florida A1A Alternate",
      "Latitude": 26.8561991,
      "Longitude": -80.0957215,
      "OpenDate": ""
    },
    {
      "StationName": "Nevada Street Parking Garage",
      "StreetAddress": "327 Nebraska St",
      "Latitude": 26.025623,
      "Longitude": -80.116068,
      "OpenDate": ""
    },
    {
      "StationName": "200 South Orange Avenue",
      "StreetAddress": "200 South Orange Avenue",
      "Latitude": 28.5399696,
      "Longitude": -81.3794377,
      "OpenDate": ""
    },
    {
      "StationName": "JTA ARMSDALE 01",
      "StreetAddress": "3191 Armsdale Rd",
      "Latitude": 30.453594,
      "Longitude": -81.70246,
      "OpenDate": ""
    },
    {
      "StationName": "OOTP-01 OOTP RETAIL 1",
      "StreetAddress": "7733 Center Lake Ln",
      "Latitude": 28.65774,
      "Longitude": -81.201903,
      "OpenDate": ""
    },
    {
      "StationName": "Vinoy Park - 1",
      "StreetAddress": "600 5th Ave NE",
      "Latitude": 27.777566,
      "Longitude": -82.628504,
      "OpenDate": ""
    },
    {
      "StationName": "JTA AVENUES WALK 1",
      "StreetAddress": "10508 Avenues Walk Blvd",
      "Latitude": 30.17671,
      "Longitude": -81.5532,
      "OpenDate": ""
    },
    {
      "StationName": "7-Eleven Mobil - DCFC",
      "StreetAddress": "1400 E Osceola Pkwy",
      "Latitude": 28.340275,
      "Longitude": -81.387428,
      "OpenDate": ""
    },
    {
      "StationName": "DeFuniak Springs/ Mossy Head Sleep Inn & Suites",
      "StreetAddress": "17834 Florida 285",
      "Latitude": 30.7347704,
      "Longitude": -86.3490373,
      "OpenDate": ""
    },
    {
      "StationName": "AVENUE VIERA AVENUE VIERA",
      "StreetAddress": "2230 Town Center Ave",
      "Latitude": 28.242099,
      "Longitude": -80.726799,
      "OpenDate": ""
    },
    {
      "StationName": "OBE POWER BTH",
      "StreetAddress": "2451 Brickell Ave",
      "Latitude": 25.749992,
      "Longitude": -80.201126,
      "OpenDate": ""
    },
    {
      "StationName": "WJCT EV CHARGER 01",
      "StreetAddress": "100 Festival Park Ave",
      "Latitude": 30.32014,
      "Longitude": -81.6364,
      "OpenDate": ""
    },
    {
      "StationName": "QUADRO STATION 1",
      "StreetAddress": "3900 Biscayne Blvd",
      "Latitude": 25.813602,
      "Longitude": -80.18929,
      "OpenDate": ""
    },
    {
      "StationName": "Sarasota County - Pioneer Parking Lot",
      "StreetAddress": "345 W Green St",
      "Latitude": 26.9611387,
      "Longitude": -82.3593362,
      "OpenDate": "3/22/2018"
    },
    {
      "StationName": "Sarasota County - Dearborn St Parking",
      "StreetAddress": "452 W Dearborn St",
      "Latitude": 26.9627743,
      "Longitude": -82.3623325,
      "OpenDate": "3/22/2018"
    },
    {
      "StationName": "North Port City Hall",
      "StreetAddress": "4970 City Hall Blvd",
      "Latitude": 27.0753062,
      "Longitude": -82.2051135,
      "OpenDate": "2/11/2017"
    },
    {
      "StationName": "Sarasota County Government Complex",
      "StreetAddress": "1001 Sarasota Center Blvd",
      "Latitude": 27.350064,
      "Longitude": -82.402763,
      "OpenDate": "2/10/2017"
    },
    {
      "StationName": "Sarasota County Development Services Center",
      "StreetAddress": "1451 Cattlemen Rd",
      "Latitude": 27.3209953,
      "Longitude": -82.4510319,
      "OpenDate": "2/10/2017"
    },
    {
      "StationName": "Sarasota County Administration Building Employee and Visitor Parking Lot",
      "StreetAddress": "1660 Ringling Blvd",
      "Latitude": 27.333497,
      "Longitude": -82.5372038,
      "OpenDate": "2/10/2017"
    },
    {
      "StationName": "Ken Thompson Park",
      "StreetAddress": "1798 Ken Thompson Pkwy",
      "Latitude": 27.3353582,
      "Longitude": -82.5735633,
      "OpenDate": "2/10/2017"
    },
    {
      "StationName": "Longwood Park",
      "StreetAddress": "4341 Callista Ln",
      "Latitude": 27.3860431,
      "Longitude": -82.4819231,
      "OpenDate": "2/10/2017"
    },
    {
      "StationName": "Gulf Gate Public Library",
      "StreetAddress": "7112 Curtiss Ave",
      "Latitude": 27.253082,
      "Longitude": -82.49973,
      "OpenDate": "2/24/2017"
    },
    {
      "StationName": "Apopka City Hall - 1",
      "StreetAddress": "120 E Main Street",
      "Latitude": 28.672153,
      "Longitude": -81.508709,
      "OpenDate": ""
    },
    {
      "StationName": "Zephyrhills City Hall - 1",
      "StreetAddress": "5335 8th Street",
      "Latitude": 28.235167,
      "Longitude": -82.18131,
      "OpenDate": ""
    },
    {
      "StationName": "LT LOT STATIONS STATION 2",
      "StreetAddress": "4294 Airport Pkwy Dr",
      "Latitude": 27.906123,
      "Longitude": -82.692104,
      "OpenDate": ""
    },
    {
      "StationName": "LT LOT STATIONS STATION 4",
      "StreetAddress": "14700 Terminal Blvd",
      "Latitude": 27.906213,
      "Longitude": -82.692031,
      "OpenDate": ""
    },
    {
      "StationName": "LT LOT STATIONS STATION 3",
      "StreetAddress": "14625 Airport Pkwy",
      "Latitude": 27.905746,
      "Longitude": -82.691339,
      "OpenDate": ""
    },
    {
      "StationName": "Steele Creek Apartments",
      "StreetAddress": "8599 AC Skinner Parkway",
      "Latitude": 30.24731,
      "Longitude": -81.560077,
      "OpenDate": ""
    },
    {
      "StationName": "City of Hollywood - City Hall",
      "StreetAddress": "2600 Hollywood Blvd",
      "Latitude": 26.011832,
      "Longitude": -80.159761,
      "OpenDate": ""
    },
    {
      "StationName": "MARY STREET EVCS KR #3",
      "StreetAddress": "3310 Mary St",
      "Latitude": 25.729699,
      "Longitude": -80.239613,
      "OpenDate": ""
    },
    {
      "StationName": "MARY STREET EVCS KR #4",
      "StreetAddress": "3310 A Mary St",
      "Latitude": 25.729679,
      "Longitude": -80.239719,
      "OpenDate": ""
    },
    {
      "StationName": "ST AUGUSTINE FL CITY HALL 01",
      "StreetAddress": "36 Granada St",
      "Latitude": 29.889847,
      "Longitude": -81.313976,
      "OpenDate": ""
    },
    {
      "StationName": "MINI PARKING STATION 1",
      "StreetAddress": "2125 S. Federal Hwy",
      "Latitude": 26.095329,
      "Longitude": -80.136952,
      "OpenDate": ""
    },
    {
      "StationName": "RIDGELAKE EV CHARGER 03",
      "StreetAddress": "5671 Mauna Loa Blvd",
      "Latitude": 27.304255,
      "Longitude": -82.44296,
      "OpenDate": ""
    },
    {
      "StationName": "TC INT AIRPORT STATION 1",
      "StreetAddress": "2990 Curtis King Blvd",
      "Latitude": 27.487852,
      "Longitude": -80.366196,
      "OpenDate": ""
    },
    {
      "StationName": "Lake Nona Town Center",
      "StreetAddress": "6955 Lake Nona Blvd",
      "Latitude": 28.372469,
      "Longitude": -81.28014,
      "OpenDate": "6/5/2020"
    },
    {
      "StationName": "Lake Nona Town Center - Tesla",
      "StreetAddress": "6955 Lake Nona Blvd",
      "Latitude": 28.372469,
      "Longitude": -81.28014,
      "OpenDate": "6/5/2020"
    },
    {
      "StationName": "FROST SCIENCE MUSEUM EVSE 03",
      "StreetAddress": "1101 Biscayne Blvd",
      "Latitude": 25.785548,
      "Longitude": -80.18765,
      "OpenDate": ""
    },
    {
      "StationName": "MCD-GREENWOOD SNAPPER CREEK 1",
      "StreetAddress": "12198 SW 117th Ave",
      "Latitude": 25.65559,
      "Longitude": -80.383959,
      "OpenDate": ""
    },
    {
      "StationName": "OBE POWER CARNIVAL #4",
      "StreetAddress": "3655 NW 87th Avenue",
      "Latitude": 25.807046,
      "Longitude": -80.334974,
      "OpenDate": ""
    },
    {
      "StationName": "VI LIVING - NAP STATION 2",
      "StreetAddress": "701 Retreat Dr",
      "Latitude": 26.306542,
      "Longitude": -81.810952,
      "OpenDate": ""
    },
    {
      "StationName": "OBE POWER AVENTURAOPTIMA2",
      "StreetAddress": "21500 Biscayne Blvd",
      "Latitude": 25.974525,
      "Longitude": -80.142562,
      "OpenDate": ""
    },
    {
      "StationName": "TANGERDAYB DAYTONA 2",
      "StreetAddress": "I-95",
      "Latitude": 29.211677,
      "Longitude": -81.098624,
      "OpenDate": ""
    },
    {
      "StationName": "OBE POWER AVENTURAOPTIMA1",
      "StreetAddress": "21550 Biscayne Blvd",
      "Latitude": 25.974513,
      "Longitude": -80.142565,
      "OpenDate": ""
    },
    {
      "StationName": "DANIA BEACH PLACE AT DANIA",
      "StreetAddress": "180 E Dania Beach Blvd",
      "Latitude": 26.051979,
      "Longitude": -80.142371,
      "OpenDate": ""
    },
    {
      "StationName": "CITYSIDE APTS EV CHARGER 01",
      "StreetAddress": "700 Cocoanut Ave",
      "Latitude": 27.341465,
      "Longitude": -82.544156,
      "OpenDate": ""
    },
    {
      "StationName": "ORLANDO CBD CAPITAL EV2",
      "StreetAddress": "301 E Pine St",
      "Latitude": 28.541191,
      "Longitude": -81.374065,
      "OpenDate": ""
    },
    {
      "StationName": "EW & WW EASTWOODS EV2",
      "StreetAddress": "2405 Lucien Way",
      "Latitude": 28.623436,
      "Longitude": -81.393745,
      "OpenDate": ""
    },
    {
      "StationName": "ONECLEARLAKECTR EV CHARGER 01",
      "StreetAddress": "250 N Australian Ave",
      "Latitude": 26.713276,
      "Longitude": -80.064224,
      "OpenDate": ""
    },
    {
      "StationName": "ORLANDO CBD LANDMARK2 EV1",
      "StreetAddress": "209-295 E Ridgewood St",
      "Latitude": 28.547034,
      "Longitude": -81.374687,
      "OpenDate": ""
    },
    {
      "StationName": "ORLANDO CBD LINCOLN EV",
      "StreetAddress": "300 S Orange Ave",
      "Latitude": 28.538868,
      "Longitude": -81.379227,
      "OpenDate": ""
    },
    {
      "StationName": "ORLANDO CBD SEASIDE EV",
      "StreetAddress": "228 S Magnolia Ave",
      "Latitude": 28.540114,
      "Longitude": -81.37769,
      "OpenDate": ""
    },
    {
      "StationName": "ORLANDO CBD LANDMARK1 EV1",
      "StreetAddress": "323 E Ridgewood St",
      "Latitude": 28.547058,
      "Longitude": -81.374132,
      "OpenDate": ""
    },
    {
      "StationName": "TAMPA JCC GLAZER CENTER 1",
      "StreetAddress": "522 N Howard Ave",
      "Latitude": 27.949359,
      "Longitude": -82.484461,
      "OpenDate": ""
    },
    {
      "StationName": "BROOKDALE REGENCY OAKS A",
      "StreetAddress": "2770 Regency Oaks Blvd Regency Oaks",
      "Latitude": 27.996173,
      "Longitude": -82.724324,
      "OpenDate": ""
    },
    {
      "StationName": "CITYOFKISSIMMEE PARKING GARAGE1",
      "StreetAddress": "205 E Dakin Ave",
      "Latitude": 28.293793,
      "Longitude": -81.403525,
      "OpenDate": ""
    },
    {
      "StationName": "EW & WW WESTWOODS 3V1",
      "StreetAddress": "2599 Lucien Way",
      "Latitude": 28.623003,
      "Longitude": -81.397688,
      "OpenDate": ""
    },
    {
      "StationName": "CITYOFKISSIMMEE PARKING GARAGE2",
      "StreetAddress": "205 E Dakin Ave",
      "Latitude": 28.293958,
      "Longitude": -81.403412,
      "OpenDate": ""
    },
    {
      "StationName": "BEST WESTERN FAST CHARGER 1",
      "StreetAddress": "2329 9th Street North",
      "Latitude": 26.174904,
      "Longitude": -81.800919,
      "OpenDate": ""
    },
    {
      "StationName": "NEW GARAGE STATION 1",
      "StreetAddress": "19501 Biscayne Blvd",
      "Latitude": 25.957877,
      "Longitude": -80.146517,
      "OpenDate": ""
    },
    {
      "StationName": "HERMITAGE HERMITAGE2",
      "StreetAddress": "151 7th St S",
      "Latitude": 27.769703,
      "Longitude": -82.643336,
      "OpenDate": ""
    },
    {
      "StationName": "CITY HALL STATION 1",
      "StreetAddress": "160 Lake Ave",
      "Latitude": 29.485825,
      "Longitude": -81.208507,
      "OpenDate": ""
    },
    {
      "StationName": "OAKLAND PARK FL PROSPECT E 1",
      "StreetAddress": "25 NE 44th St",
      "Latitude": 26.181479,
      "Longitude": -80.146595,
      "OpenDate": ""
    },
    {
      "StationName": "PARKOCALA GARAGE 1 SOUTH",
      "StreetAddress": "296 SE Broadway St",
      "Latitude": 29.186141,
      "Longitude": -82.134114,
      "OpenDate": ""
    },
    {
      "StationName": "OAKLAND PARK FL PROSPECT W 1",
      "StreetAddress": "67 W Prospect Rd",
      "Latitude": 26.181488,
      "Longitude": -80.147259,
      "OpenDate": ""
    },
    {
      "StationName": "LEGOLAND FL RESORT EVSE 01",
      "StreetAddress": "1 Legoland Way",
      "Latitude": 27.987495,
      "Longitude": -81.691518,
      "OpenDate": ""
    },
    {
      "StationName": "BEACH POMPANO 2",
      "StreetAddress": "20-98 N Pompano Beach Blvd",
      "Latitude": 26.232343,
      "Longitude": -80.089755,
      "OpenDate": ""
    },
    {
      "StationName": "BROOKS REHAB EV CHARGER 01",
      "StreetAddress": "1842 Hickman Rd",
      "Latitude": 30.290752,
      "Longitude": -81.600365,
      "OpenDate": ""
    },
    {
      "StationName": "SAN MARCO EVSE 001",
      "StreetAddress": "1398 Belmont Terrace",
      "Latitude": 30.305306,
      "Longitude": -81.655263,
      "OpenDate": ""
    },
    {
      "StationName": "BEACH HARBOR VILLAGE1",
      "StreetAddress": "2709 E Atlantic Blvd",
      "Latitude": 26.232004,
      "Longitude": -80.096194,
      "OpenDate": ""
    },
    {
      "StationName": "REEDY CREEK LIME GARAGE 2",
      "StreetAddress": "1652 Buena Vista Dr",
      "Latitude": 28.370017,
      "Longitude": -81.515812,
      "OpenDate": ""
    },
    {
      "StationName": "RGPT PARKWAY EV CHARGER 01",
      "StreetAddress": "14964 Max Leggett Pkwy",
      "Latitude": 30.481861,
      "Longitude": -81.640616,
      "OpenDate": ""
    },
    {
      "StationName": "UNF HICKS HALL 01",
      "StreetAddress": "4850 1st Coast Tech Pkwy",
      "Latitude": 30.261484,
      "Longitude": -81.494747,
      "OpenDate": ""
    },
    {
      "StationName": "SUNTRUST STFC #2",
      "StreetAddress": "401 E Jackson St",
      "Latitude": 27.946995,
      "Longitude": -82.456148,
      "OpenDate": ""
    },
    {
      "StationName": "FNF EV CHARGER 01",
      "StreetAddress": "601 Riverside Ave",
      "Latitude": 30.319348,
      "Longitude": -81.675032,
      "OpenDate": ""
    },
    {
      "StationName": "USF PATEL CGS",
      "StreetAddress": "11810 USF Alumni Drive",
      "Latitude": 28.055817,
      "Longitude": -82.408233,
      "OpenDate": ""
    },
    {
      "StationName": "5260 PASEO PKG 5252 PASEO",
      "StreetAddress": "5252 paseo blvd",
      "Latitude": 25.819378,
      "Longitude": -80.336336,
      "OpenDate": ""
    },
    {
      "StationName": "JAX ZOO EV CHARGER 01",
      "StreetAddress": "370 Zoo Parkway",
      "Latitude": 30.404379,
      "Longitude": -81.643559,
      "OpenDate": ""
    },
    {
      "StationName": "JTA KINGS AVE GAR 1",
      "StreetAddress": "1003 Kings Avenue",
      "Latitude": 30.312813,
      "Longitude": -81.652582,
      "OpenDate": ""
    },
    {
      "StationName": "STETSON UNIV. WELCOME CTR 01",
      "StreetAddress": "421 N Woodland Blvd",
      "Latitude": 29.03593,
      "Longitude": -81.302925,
      "OpenDate": ""
    },
    {
      "StationName": "OUC CITRUS BOWL 01",
      "StreetAddress": "1 Citrus Bowl Place",
      "Latitude": 28.537672,
      "Longitude": -81.401766,
      "OpenDate": ""
    },
    {
      "StationName": "MOSH EV CHARGER 01",
      "StreetAddress": "1025 Museum Cir",
      "Latitude": 30.3189,
      "Longitude": -81.659343,
      "OpenDate": ""
    },
    {
      "StationName": "900 BLDG EV CHARGER 01",
      "StreetAddress": "900 University Blvd N",
      "Latitude": 30.329309,
      "Longitude": -81.605483,
      "OpenDate": ""
    },
    {
      "StationName": "LARRYS SUBS EV CHARGER 01",
      "StreetAddress": "4479 Deerwood Lake Pkwy",
      "Latitude": 30.264621,
      "Longitude": -81.558673,
      "OpenDate": ""
    },
    {
      "StationName": "ORANGE PARK, FL EV CHARGER 01",
      "StreetAddress": "2042 Park Ave",
      "Latitude": 30.164389,
      "Longitude": -81.701332,
      "OpenDate": ""
    },
    {
      "StationName": "JACKSONVILLE FL LIBRARY GAR. 01",
      "StreetAddress": "33 W Duval St",
      "Latitude": 30.329791,
      "Longitude": -81.65785,
      "OpenDate": ""
    },
    {
      "StationName": "JACKSONVILLE FL YATES GARAGE 01",
      "StreetAddress": "200 E Adams Street",
      "Latitude": 30.326767,
      "Longitude": -81.654967,
      "OpenDate": ""
    },
    {
      "StationName": "NORTHFLORIDATPO EV CHARGER 01",
      "StreetAddress": "980 N Jefferson St",
      "Latitude": 30.336324,
      "Longitude": -81.665054,
      "OpenDate": ""
    },
    {
      "StationName": "FLORIDA   TECH CHARGER 2",
      "StreetAddress": "3217 Psychology Pl",
      "Latitude": 28.060924,
      "Longitude": -80.624331,
      "OpenDate": ""
    },
    {
      "StationName": "TOWER SHOP STATION 1",
      "StreetAddress": "1902-2380 S. University Driver",
      "Latitude": 26.093405,
      "Longitude": -80.249353,
      "OpenDate": ""
    },
    {
      "StationName": "NATIVE SUN NFM MANDARIN EVSE 1",
      "StreetAddress": "10000 San Jose Blvd",
      "Latitude": 30.196633,
      "Longitude": -81.622939,
      "OpenDate": ""
    },
    {
      "StationName": "NATIVE SUN NFM BYMDWS EVSE 01",
      "StreetAddress": "11030 Baymeadows Rd",
      "Latitude": 30.214747,
      "Longitude": -81.515554,
      "OpenDate": ""
    },
    {
      "StationName": "A1A EV EV CHARGER 01",
      "StreetAddress": "10418 New Berlin Rd Unit 223/224",
      "Latitude": 30.423401,
      "Longitude": -81.565119,
      "OpenDate": ""
    },
    {
      "StationName": "ANIMAL KINGDOM STATION 2A",
      "StreetAddress": "2901 Osceola Pkwy",
      "Latitude": 28.352205,
      "Longitude": -81.589308,
      "OpenDate": ""
    },
    {
      "StationName": "VALENCIACOLLEGE EV CHARGER 01",
      "StreetAddress": "419 N Econlockhatchee Trail",
      "Latitude": 28.549593,
      "Longitude": -81.250633,
      "OpenDate": ""
    },
    {
      "StationName": "WHOLE FOODS MKT SOUTH BEACH 1",
      "StreetAddress": "1020 Alton Rd",
      "Latitude": 25.781048,
      "Longitude": -80.141222,
      "OpenDate": ""
    },
    {
      "StationName": "UNIV OF FLORIDA GARAGE 13 #2",
      "StreetAddress": "1273 Gale Lemerand Dr",
      "Latitude": 29.640589,
      "Longitude": -82.349726,
      "OpenDate": ""
    },
    {
      "StationName": "BOLD CITY EV CHARGER 01",
      "StreetAddress": "2670 Rosselle St",
      "Latitude": 30.319123,
      "Longitude": -81.695422,
      "OpenDate": ""
    },
    {
      "StationName": "NAPLES HOTEL FAIRFIELD INN 1",
      "StreetAddress": "1300 Airport Rd",
      "Latitude": 30.481603,
      "Longitude": -81.651773,
      "OpenDate": ""
    },
    {
      "StationName": "ACP MONTESSORI EVCHARGER 01",
      "StreetAddress": "3718 Salisbury Rd",
      "Latitude": 30.260737,
      "Longitude": -81.59735,
      "OpenDate": ""
    },
    {
      "StationName": "OCEAN CITY PROP MEISNER ELEC",
      "StreetAddress": "1-99 Bourque's Way",
      "Latitude": 26.462777,
      "Longitude": -80.070286,
      "OpenDate": ""
    },
    {
      "StationName": "CORAL GABLES G2-220 ARAGON1",
      "StreetAddress": "220 Aragon Ave",
      "Latitude": 25.750232,
      "Longitude": -80.259233,
      "OpenDate": ""
    },
    {
      "StationName": "WHOLE FOODS MKT CORAL GABLES2",
      "StreetAddress": "6701 Red Rd",
      "Latitude": 25.706358,
      "Longitude": -80.284683,
      "OpenDate": ""
    },
    {
      "StationName": "WEST PALM BEACH CITY CTR GAR 01",
      "StreetAddress": "125 N Dixie Hwy",
      "Latitude": 26.714142,
      "Longitude": -80.053821,
      "OpenDate": ""
    },
    {
      "StationName": "FL DOT 4 FDOT",
      "StreetAddress": "3400 W Commercial Blvd",
      "Latitude": 26.185372,
      "Longitude": -80.195089,
      "OpenDate": ""
    },
    {
      "StationName": "BAPTIST HEALTH BHM GARAGE 04",
      "StreetAddress": "8900 N Kendall Dr",
      "Latitude": 25.683106,
      "Longitude": -80.340384,
      "OpenDate": ""
    },
    {
      "StationName": "ORANGE COUNTY OC IFAS EVSE 01",
      "StreetAddress": "6021 S Conway Rd",
      "Latitude": 28.468728,
      "Longitude": -81.329075,
      "OpenDate": ""
    },
    {
      "StationName": "WILDERNESS LODG STATION 1R",
      "StreetAddress": "Unnamed Road",
      "Latitude": 28.40767,
      "Longitude": -81.573779,
      "OpenDate": ""
    },
    {
      "StationName": "USF BEARD GARAGE 02",
      "StreetAddress": "3800 USF Beard Drive",
      "Latitude": 28.058941,
      "Longitude": -82.417357,
      "OpenDate": ""
    },
    {
      "StationName": "CHATEAU BEACH EV CHARGER 03",
      "StreetAddress": "17475 Collins Ave",
      "Latitude": 25.93783,
      "Longitude": -80.120991,
      "OpenDate": ""
    },
    {
      "StationName": "OUC CITY HALL 1",
      "StreetAddress": "400 S Orange Ave",
      "Latitude": 28.537909,
      "Longitude": -81.378809,
      "OpenDate": ""
    },
    {
      "StationName": "STATION 1 GUEST PARKING 2",
      "StreetAddress": "43520 US Hwy 19 N",
      "Latitude": 28.168091,
      "Longitude": -82.741674,
      "OpenDate": ""
    },
    {
      "StationName": "ELAN 16FORTY ELAN 16FORTY 1",
      "StreetAddress": "1640 E Sunrise Blvd",
      "Latitude": 26.13691,
      "Longitude": -80.126564,
      "OpenDate": ""
    },
    {
      "StationName": "WHOLE FOODS MKT PALM BEACH ST 2",
      "StreetAddress": "1857-1875 Palm Beach Lakes Blvd",
      "Latitude": 26.720481,
      "Longitude": -80.08874,
      "OpenDate": ""
    },
    {
      "StationName": "SARASOTA PARK EV 2",
      "StreetAddress": "1538 State St",
      "Latitude": 27.335475,
      "Longitude": -82.540201,
      "OpenDate": ""
    },
    {
      "StationName": "MARCO EAST",
      "StreetAddress": "400 S Collier",
      "Latitude": 25.928601,
      "Longitude": -81.727714,
      "OpenDate": ""
    },
    {
      "StationName": "OBE POWER MPA COURTHOUSE2",
      "StreetAddress": "40 NW 3rd St",
      "Latitude": 25.776879,
      "Longitude": -80.194281,
      "OpenDate": ""
    },
    {
      "StationName": "ZRSMGMT BALDWINHARBOR 3",
      "StreetAddress": "1915 Lakemont Avenue",
      "Latitude": 28.568875,
      "Longitude": -81.327065,
      "OpenDate": ""
    },
    {
      "StationName": "EASTGROUP PROP HORIZON COMM 02",
      "StreetAddress": "236 Outlook Point Dr",
      "Latitude": 28.448911,
      "Longitude": -81.383716,
      "OpenDate": ""
    },
    {
      "StationName": "PNSLW HAMPTON PENSA 1",
      "StreetAddress": "8021 Lavelle Way",
      "Latitude": 30.521328,
      "Longitude": -87.315713,
      "OpenDate": ""
    },
    {
      "StationName": "PARKWAY#1 PARKWAY# 2",
      "StreetAddress": "3123 Arabian Nights Blvd",
      "Latitude": 28.33945,
      "Longitude": -81.531664,
      "OpenDate": ""
    },
    {
      "StationName": "CYPRESS PARK CPW 1",
      "StreetAddress": "6700 N Andrews Ave",
      "Latitude": 26.209397,
      "Longitude": -80.141946,
      "OpenDate": ""
    },
    {
      "StationName": "ELEMENT MIAMI DORAL",
      "StreetAddress": "3285 NW 107th Ave",
      "Latitude": 25.803612,
      "Longitude": -80.36905,
      "OpenDate": ""
    },
    {
      "StationName": "WHOLE FOODS MKT DAVIE1",
      "StreetAddress": "1903 S University Dr",
      "Latitude": 26.097355,
      "Longitude": -80.251448,
      "OpenDate": ""
    },
    {
      "StationName": "WHOLE FOODS MKT PALM BEACH ST 1",
      "StreetAddress": "1845 Palm Beach Lakes Blvd BLDG C",
      "Latitude": 26.721337,
      "Longitude": -80.08929,
      "OpenDate": ""
    },
    {
      "StationName": "BMW-NA FAST CHARGER 08",
      "StreetAddress": "8558 Westside Industrial Dr",
      "Latitude": 30.373286,
      "Longitude": -81.796081,
      "OpenDate": ""
    },
    {
      "StationName": "WHOLE FOODS MKT MIAMI STAT 2",
      "StreetAddress": "299 SE 3rd Ave",
      "Latitude": 25.771976,
      "Longitude": -80.188886,
      "OpenDate": ""
    },
    {
      "StationName": "WHOLE FOODS MKT MIAMI STAT 1",
      "StreetAddress": "200-227 FL-5",
      "Latitude": 25.772386,
      "Longitude": -80.189444,
      "OpenDate": ""
    },
    {
      "StationName": "TAUBMAN UTC WEST LOT 04",
      "StreetAddress": "81 N Cattlemen Rd",
      "Latitude": 27.384591,
      "Longitude": -82.45421,
      "OpenDate": ""
    },
    {
      "StationName": "BMW SARASOTA STATION SA02",
      "StreetAddress": "5151 Clark Rd",
      "Latitude": 27.270186,
      "Longitude": -82.467227,
      "OpenDate": ""
    },
    {
      "StationName": "EPCOT STATION 2",
      "StreetAddress": "200 Epcot Center Drive",
      "Latitude": 28.377996,
      "Longitude": -81.549691,
      "OpenDate": ""
    },
    {
      "StationName": "OUC OH PAVILION",
      "StreetAddress": "818 Main Ln",
      "Latitude": 28.531693,
      "Longitude": -81.378003,
      "OpenDate": ""
    },
    {
      "StationName": "ACH EV CHARGER 01",
      "StreetAddress": "400-498 8th Ave S",
      "Latitude": 27.762017,
      "Longitude": -82.639617,
      "OpenDate": ""
    },
    {
      "StationName": "REEDY CREEK ORANGE GAR. 1",
      "StreetAddress": "1590 E Buena Vista Dr",
      "Latitude": 28.36883,
      "Longitude": -81.519785,
      "OpenDate": ""
    },
    {
      "StationName": "BMW OF OCALA STATION 01",
      "StreetAddress": "5145 SW College Rd",
      "Latitude": 29.130319,
      "Longitude": -82.205444,
      "OpenDate": ""
    },
    {
      "StationName": "BMW ORANGE PARK STATION 01",
      "StreetAddress": "6914 Blanding Blvd",
      "Latitude": 30.224614,
      "Longitude": -81.739022,
      "OpenDate": ""
    },
    {
      "StationName": "HIGHWOODS LAKEPOINTE 2-2",
      "StreetAddress": "3109 W Doctor M.L.K. Jr Blvd",
      "Latitude": 27.983626,
      "Longitude": -82.496125,
      "OpenDate": ""
    },
    {
      "StationName": "DAYTONA NISSAN QUICK CHARGER1",
      "StreetAddress": "950 N Tomoka Farms Rd",
      "Latitude": 29.214701,
      "Longitude": -81.104413,
      "OpenDate": ""
    },
    {
      "StationName": "MARCO WEST",
      "StreetAddress": "400s S Collier Blvd",
      "Latitude": 25.928591,
      "Longitude": -81.727776,
      "OpenDate": ""
    },
    {
      "StationName": "JACKSONVILLE FL WATER STREET 02",
      "StreetAddress": "541 Water St",
      "Latitude": 30.326931,
      "Longitude": -81.665204,
      "OpenDate": ""
    },
    {
      "StationName": "BMW SARASOTA STATION 01",
      "StreetAddress": "5680-5776 Rosin Way",
      "Latitude": 27.270097,
      "Longitude": -82.466963,
      "OpenDate": ""
    },
    {
      "StationName": "NISSAN-PEMBROKE QUICK CHARGER 1",
      "StreetAddress": "8890 Pines Blvd",
      "Latitude": 26.007626,
      "Longitude": -80.262739,
      "OpenDate": ""
    },
    {
      "StationName": "FSEC CHARGER 01",
      "StreetAddress": "1679 Clearlake Rd",
      "Latitude": 28.387688,
      "Longitude": -80.756049,
      "OpenDate": ""
    },
    {
      "StationName": "MELBOURNE FL CITY HALL 01",
      "StreetAddress": "900 E Strawbridge Ave",
      "Latitude": 28.079665,
      "Longitude": -80.605988,
      "OpenDate": ""
    },
    {
      "StationName": "BMW GAINESVILLE STATION 01",
      "StreetAddress": "2810 N Main St",
      "Latitude": 29.678424,
      "Longitude": -82.320777,
      "OpenDate": ""
    },
    {
      "StationName": "BMW LAKELAND STATION 01",
      "StreetAddress": "4285 Lakeland Park Dr",
      "Latitude": 28.096456,
      "Longitude": -81.954615,
      "OpenDate": ""
    },
    {
      "StationName": "IBIS WALK IBIS STATION 01",
      "StreetAddress": "871 Ibis Walk Place N.",
      "Latitude": 27.865666,
      "Longitude": -82.645241,
      "OpenDate": ""
    },
    {
      "StationName": "VISTA BMW STATION 01",
      "StreetAddress": "4401 W Sample Rd",
      "Latitude": 26.274942,
      "Longitude": -80.18413,
      "OpenDate": ""
    },
    {
      "StationName": "LAUDERDALE BMW STATION 02",
      "StreetAddress": "14800 Sheridan St",
      "Latitude": 26.02864,
      "Longitude": -80.345688,
      "OpenDate": ""
    },
    {
      "StationName": "PBO STATION 1A",
      "StreetAddress": "1771 Executive Center Dr",
      "Latitude": 26.723853,
      "Longitude": -80.087629,
      "OpenDate": ""
    },
    {
      "StationName": "PBO STATION 2A",
      "StreetAddress": "Executive Center DrPalm Beach Mall",
      "Latitude": 26.724217,
      "Longitude": -80.086634,
      "OpenDate": ""
    },
    {
      "StationName": "BMW OF DAYTONA STATION 01",
      "StreetAddress": "1220 N Tomoka Farms Rd",
      "Latitude": 29.206993,
      "Longitude": -81.100192,
      "OpenDate": ""
    },
    {
      "StationName": "PBO STATION 3A",
      "StreetAddress": "1751 Presidential Way",
      "Latitude": 26.726171,
      "Longitude": -80.086397,
      "OpenDate": ""
    },
    {
      "StationName": "PBO EAST 1",
      "StreetAddress": "1865 Palm Beach Lakes Blvd",
      "Latitude": 26.723562,
      "Longitude": -80.089951,
      "OpenDate": ""
    },
    {
      "StationName": "BMW STATION STATION 01",
      "StreetAddress": "15235-15245 FL-45",
      "Latitude": 26.519302,
      "Longitude": -81.867246,
      "OpenDate": ""
    },
    {
      "StationName": "BERT SMITH BMW STATION 01",
      "StreetAddress": "3800 34th St N",
      "Latitude": 27.806948,
      "Longitude": -82.679984,
      "OpenDate": ""
    },
    {
      "StationName": "GERMAIN BMW STATION 01",
      "StreetAddress": "11286 Tamiami Trail N",
      "Latitude": 26.276635,
      "Longitude": -81.80116,
      "OpenDate": ""
    },
    {
      "StationName": "FERMAN BMW STATION 01",
      "StreetAddress": "FL-55",
      "Latitude": 28.057498,
      "Longitude": -82.739557,
      "OpenDate": ""
    },
    {
      "StationName": "TOM BUSH BMW MAZDA PUBLIC L2",
      "StreetAddress": "9876 Atlantic Blvd",
      "Latitude": 30.321943,
      "Longitude": -81.542699,
      "OpenDate": ""
    },
    {
      "StationName": "BMW_PALM BEACH STATION 02",
      "StreetAddress": "2911-2999 FL-704",
      "Latitude": 26.707286,
      "Longitude": -80.098796,
      "OpenDate": ""
    },
    {
      "StationName": "BMW SOUTH ORL STATION 01",
      "StreetAddress": "9750 S Orange Blossom Trail",
      "Latitude": 28.41453,
      "Longitude": -81.405163,
      "OpenDate": ""
    },
    {
      "StationName": "MELBOURNE BMW STATION 01",
      "StreetAddress": "1432 S Harbor City Blvd",
      "Latitude": 28.0863,
      "Longitude": -80.607434,
      "OpenDate": ""
    },
    {
      "StationName": "DRESI CVC 1",
      "StreetAddress": "12046 Collegiate Way",
      "Latitude": 28.59667,
      "Longitude": -81.211972,
      "OpenDate": ""
    },
    {
      "StationName": "COGGIN BMW STATION 01",
      "StreetAddress": "4429 S US Highway 1",
      "Latitude": 27.381724,
      "Longitude": -80.326502,
      "OpenDate": ""
    },
    {
      "StationName": "DRESI WINTERGATE SQ",
      "StreetAddress": "1350 N Orange Ave",
      "Latitude": 28.586396,
      "Longitude": -81.364059,
      "OpenDate": ""
    },
    {
      "StationName": "DRESI 2600 DOUGLAS",
      "StreetAddress": "23-31 Almeria Ave",
      "Latitude": 25.74772,
      "Longitude": -80.255172,
      "OpenDate": ""
    },
    {
      "StationName": "DRESI 2103 CORAL WAY",
      "StreetAddress": "2103 Coral Way",
      "Latitude": 25.750853,
      "Longitude": -80.228569,
      "OpenDate": ""
    },
    {
      "StationName": "DRESI 1221 COLONIAL",
      "StreetAddress": "1221 W Colonial Dr",
      "Latitude": 28.553438,
      "Longitude": -81.396013,
      "OpenDate": ""
    },
    {
      "StationName": "DRESI CVC 2",
      "StreetAddress": "11816-11846 Collegiate Way",
      "Latitude": 28.596477,
      "Longitude": -81.214943,
      "OpenDate": ""
    },
    {
      "StationName": "PASCO COUNTY DATA CENTER 04",
      "StreetAddress": "38425 McDonald St",
      "Latitude": 28.338308,
      "Longitude": -82.182488,
      "OpenDate": ""
    },
    {
      "StationName": "MELIA ORLANDO EV CHARGER 01",
      "StreetAddress": "225 Celebration Pl",
      "Latitude": 28.331646,
      "Longitude": -81.537628,
      "OpenDate": ""
    },
    {
      "StationName": "222 ESPERANTE ESPERANTE 01",
      "StreetAddress": "222 Lakeview Ave",
      "Latitude": 26.706016,
      "Longitude": -80.051961,
      "OpenDate": ""
    },
    {
      "StationName": "FLORIDA   TECH CHARGER 1",
      "StreetAddress": "3115 Panther Place",
      "Latitude": 28.062423,
      "Longitude": -80.621881,
      "OpenDate": ""
    },
    {
      "StationName": "PALM LAKE JAEB CENTER 01",
      "StreetAddress": "15310 Amberly Dr",
      "Latitude": 28.09169,
      "Longitude": -82.403516,
      "OpenDate": ""
    },
    {
      "StationName": "SEACOAST BANK ORMOND BEACH 1",
      "StreetAddress": "175 W Granada Blvd",
      "Latitude": 29.284094,
      "Longitude": -81.06082,
      "OpenDate": ""
    },
    {
      "StationName": "CITY OF ST PETE MAHAFFEY GAR 1",
      "StreetAddress": "5th Ave SE",
      "Latitude": 27.765846,
      "Longitude": -82.633377,
      "OpenDate": ""
    },
    {
      "StationName": "CITY OF ST PETE S CORE GAR LVL7",
      "StreetAddress": "101 1st Ave S",
      "Latitude": 27.770502,
      "Longitude": -82.635239,
      "OpenDate": ""
    },
    {
      "StationName": "CARCHARGING WALGREENS #4124",
      "StreetAddress": "33670 Us Highway 19 N",
      "Latitude": 28.078295,
      "Longitude": -82.739761,
      "OpenDate": ""
    },
    {
      "StationName": "CITY OF ST PETE CITY HALL 01",
      "StreetAddress": "175 5th St N",
      "Latitude": 27.773109,
      "Longitude": -82.640099,
      "OpenDate": ""
    },
    {
      "StationName": "CITY OF ORLANDO LEU GARDENS 02",
      "StreetAddress": "1920 N Forest Ave",
      "Latitude": 28.569885,
      "Longitude": -81.355881,
      "OpenDate": ""
    },
    {
      "StationName": "CITY OF ST PETE MSC GARAGE 1",
      "StreetAddress": "325 Central Ave",
      "Latitude": 27.771334,
      "Longitude": -82.637779,
      "OpenDate": ""
    },
    {
      "StationName": "OUC OC PUBLIC WORKS",
      "StreetAddress": "4200 S John Young Pkwy",
      "Latitude": 28.499966,
      "Longitude": -81.418327,
      "OpenDate": ""
    },
    {
      "StationName": "WINTER PARK W PARK AVE 01",
      "StreetAddress": "231 W Park Ave",
      "Latitude": 28.596482,
      "Longitude": -81.352424,
      "OpenDate": ""
    },
    {
      "StationName": "PALMER-ELECTRIC PALMER HQ 01",
      "StreetAddress": "875 Jackson Ave",
      "Latitude": 28.590525,
      "Longitude": -81.370895,
      "OpenDate": ""
    },
    {
      "StationName": "WHOLE FOODS MKT PEMBROKEPINES 1",
      "StreetAddress": "14956 Pines Blvd",
      "Latitude": 26.006396,
      "Longitude": -80.349202,
      "OpenDate": ""
    },
    {
      "StationName": "EV SOURCE  SS UNIT 01",
      "StreetAddress": "10840 Endeavour Way",
      "Latitude": 27.869955,
      "Longitude": -82.735229,
      "OpenDate": ""
    },
    {
      "StationName": "Dadeland Station - Tesla Supercharger",
      "StreetAddress": "8312 South Dixie Highway",
      "Latitude": 25.69,
      "Longitude": -80.3,
      "OpenDate": "6/12/2020"
    },
    {
      "StationName": "Best Western - Beachside Resort",
      "StreetAddress": "16 Via De Luna Dr",
      "Latitude": 30.333469,
      "Longitude": -87.135719,
      "OpenDate": "6/12/2020"
    },
    {
      "StationName": "SPT DOLPHIN MAGNOLIA POINT station location",
      "StreetAddress": "1701 Mercy Drive",
      "Latitude": 28.56521,
      "Longitude": -81.428279,
      "OpenDate": ""
    },
    {
      "StationName": "AGPM BEACH CLUB  station location",
      "StreetAddress": "4458 South Texas Avenue",
      "Latitude": 28.4969998,
      "Longitude": -81.409335,
      "OpenDate": ""
    },
    {
      "StationName": "MISSION INN HOTEL AND CONF",
      "StreetAddress": "10400 County Rd 48",
      "Latitude": 28.725521,
      "Longitude": -81.782322,
      "OpenDate": ""
    },
    {
      "StationName": "Fairfield Station Location",
      "StreetAddress": "14082 Cortez Blvd.",
      "Latitude": 28.53336,
      "Longitude": -82.49548,
      "OpenDate": ""
    },
    {
      "StationName": "WALGREENS #5178",
      "StreetAddress": "5205 Red Bug Lake Rd",
      "Latitude": 28.646973,
      "Longitude": -81.278816,
      "OpenDate": ""
    },
    {
      "StationName": "Perry L2 - 1",
      "StreetAddress": "110 N Washington Street",
      "Latitude": 30.117416,
      "Longitude": -83.5809,
      "OpenDate": ""
    },
    {
      "StationName": "Buccaneer Inn - 1",
      "StreetAddress": "160 W Gorrie Dr",
      "Latitude": 29.661044,
      "Longitude": -84.865306,
      "OpenDate": ""
    },
    {
      "StationName": "Town of Surfside",
      "StreetAddress": "9293 Harding Avenue",
      "Latitude": 25.882087,
      "Longitude": -80.122856,
      "OpenDate": ""
    },
    {
      "StationName": "FPL EVOLUTION FORTDRUM 2",
      "StreetAddress": "184 Florida's Turnpike",
      "Latitude": 27.600759,
      "Longitude": -80.82271,
      "OpenDate": ""
    },
    {
      "StationName": "Safety Harbor Library - 1",
      "StreetAddress": "101 2nd Street N",
      "Latitude": 27.991895,
      "Longitude": -82.689033,
      "OpenDate": ""
    },
    {
      "StationName": "Clive Daniel Station Location",
      "StreetAddress": "1351 NW Boca Raton Blvd",
      "Latitude": 26.3623181,
      "Longitude": -80.0906021,
      "OpenDate": ""
    },
    {
      "StationName": "OBE POWER PASEO RIV P4#1",
      "StreetAddress": "1350 S Dixie Hwy",
      "Latitude": 25.712707,
      "Longitude": -80.278639,
      "OpenDate": ""
    },
    {
      "StationName": "OBE POWER PASEO RIV P3#3",
      "StreetAddress": "1340 S Dixie Hwy",
      "Latitude": 25.712827,
      "Longitude": -80.278394,
      "OpenDate": ""
    },
    {
      "StationName": "ZANIBONI EV 1",
      "StreetAddress": "101 N Garden Ave",
      "Latitude": 27.967347,
      "Longitude": -82.798406,
      "OpenDate": ""
    },
    {
      "StationName": "City of St Pete Pier - 1",
      "StreetAddress": "335 2nd Ave NE",
      "Latitude": 27.773355,
      "Longitude": -82.626423,
      "OpenDate": ""
    },
    {
      "StationName": "Fontainebleau",
      "StreetAddress": "4441 Collins Avenue",
      "Latitude": 25.817579,
      "Longitude": -80.122978,
      "OpenDate": ""
    },
    {
      "StationName": "OBE POWER SOCIETY LA L3",
      "StreetAddress": "301 SW 1st Ave",
      "Latitude": 26.119595,
      "Longitude": -80.14489,
      "OpenDate": ""
    },
    {
      "StationName": "Schoolfield Properties DCFC",
      "StreetAddress": "2252 E Irlo Bronson Memorial Hwy",
      "Latitude": 28.284654,
      "Longitude": -81.352777,
      "OpenDate": ""
    },
    {
      "StationName": "The Beck at Hidden River",
      "StreetAddress": "8801 Hidden River Pkwy",
      "Latitude": 28.071289,
      "Longitude": -82.359019,
      "OpenDate": ""
    },
    {
      "StationName": "WHOLE FOODS MKT GAINESVILLE ST2",
      "StreetAddress": "3598 SW Archer Rd",
      "Latitude": 29.625431,
      "Longitude": -82.375531,
      "OpenDate": ""
    },
    {
      "StationName": "Hampton Inn Davenport - 1",
      "StreetAddress": "44117 US-27",
      "Latitude": 28.236361,
      "Longitude": -81.650117,
      "OpenDate": ""
    },
    {
      "StationName": "K&C FARM WINERY TASTING ROOM",
      "StreetAddress": "5202 Thonotosassa Rd",
      "Latitude": 28.047462,
      "Longitude": -82.18787,
      "OpenDate": ""
    },
    {
      "StationName": "Miami Beach Convention Center - 5th Floor",
      "StreetAddress": "1701 Convention Center Drive",
      "Latitude": 25.796552,
      "Longitude": -80.133463,
      "OpenDate": ""
    },
    {
      "StationName": "Miami Beach Convention Center - 4th Floor",
      "StreetAddress": "1701 Convention Center Drive",
      "Latitude": 25.795858,
      "Longitude": -80.134577,
      "OpenDate": ""
    },
    {
      "StationName": "A1A LOT N COMM STATION 1",
      "StreetAddress": "4424 Bougainvilla Dr",
      "Latitude": 26.190926,
      "Longitude": -80.097015,
      "OpenDate": ""
    },
    {
      "StationName": "OBE POWER MB STATION",
      "StreetAddress": "3170 SW 22nd Street",
      "Latitude": 25.749851,
      "Longitude": -80.24497,
      "OpenDate": ""
    },
    {
      "StationName": "Love's 627 (Davenport, FL)",
      "StreetAddress": "45000 US 27",
      "Latitude": 28.243657,
      "Longitude": -81.657244,
      "OpenDate": ""
    },
    {
      "StationName": "WALGREENS #9475",
      "StreetAddress": "10624 Gibsonton Dr",
      "Latitude": 27.857819,
      "Longitude": -82.327175,
      "OpenDate": ""
    },
    {
      "StationName": "Chick-Fil-A - Coconut Creek",
      "StreetAddress": "4670 North State Road 7",
      "Latitude": 26.287118,
      "Longitude": -80.201131,
      "OpenDate": ""
    },
    {
      "StationName": "Brisa Residences",
      "StreetAddress": "Brisa, 40 Brisa Ave",
      "Latitude": 29.855695,
      "Longitude": -81.354309,
      "OpenDate": ""
    },
    {
      "StationName": "PALMETTO BUILDING C",
      "StreetAddress": "413 E Palmetto Park Rd",
      "Latitude": 26.35069,
      "Longitude": -80.079317,
      "OpenDate": ""
    },
    {
      "StationName": "POINTE ORLANDO",
      "StreetAddress": "9101 International Dr",
      "Latitude": 28.433643,
      "Longitude": -81.470833,
      "OpenDate": ""
    },
    {
      "StationName": "Ocean Two Condominium",
      "StreetAddress": "19111 Collins Ave",
      "Latitude": 25.953428,
      "Longitude": -80.11983,
      "OpenDate": ""
    },
    {
      "StationName": "McDonald's - Harbor Blvd - Destin FL",
      "StreetAddress": "895 Harbor Blvd",
      "Latitude": 30.389641,
      "Longitude": -86.483613,
      "OpenDate": ""
    },
    {
      "StationName": "Brickell Bay Tower",
      "StreetAddress": "1001 Brickell Bay Drive, Suite 130",
      "Latitude": 25.763679,
      "Longitude": -80.189569,
      "OpenDate": ""
    },
    {
      "StationName": "City of Hollywood - Van Buren Garage",
      "StreetAddress": "251 South 20th Ave",
      "Latitude": 26.00981,
      "Longitude": -80.146171,
      "OpenDate": ""
    },
    {
      "StationName": "4 West Las Olas",
      "StreetAddress": "4 West Las Olas Blvd",
      "Latitude": 26.1192726,
      "Longitude": -80.14372,
      "OpenDate": ""
    },
    {
      "StationName": "IKEA - Miami",
      "StreetAddress": "1801 NW 117th Ave",
      "Latitude": 25.791734,
      "Longitude": -80.3838569,
      "OpenDate": ""
    },
    {
      "StationName": "Best Western - Orlando Gateway Hotel",
      "StreetAddress": "7299 Universal Blvd",
      "Latitude": 28.45818,
      "Longitude": -81.463373,
      "OpenDate": "8/3/2020"
    },
    {
      "StationName": "Marriott Cypress Harbour",
      "StreetAddress": "11251 Harbour Villa Rd",
      "Latitude": 28.403626,
      "Longitude": -81.469491,
      "OpenDate": "8/3/2020"
    },
    {
      "StationName": "EPRE - 1",
      "StreetAddress": "2435 US Highway 19",
      "Latitude": 28.194652,
      "Longitude": -82.741048,
      "OpenDate": ""
    },
    {
      "StationName": "Bainbridge Town Center East station location",
      "StreetAddress": "5000 Kernan Blvd S.",
      "Latitude": 30.254735,
      "Longitude": -81.4995298,
      "OpenDate": ""
    },
    {
      "StationName": "OBE POWER TWO MIDTOWN",
      "StreetAddress": "3470 East Coast Avenue",
      "Latitude": 25.809685,
      "Longitude": -80.191605,
      "OpenDate": ""
    },
    {
      "StationName": "Universalâ€™s Endless Summer Resort â€“ Surfside Inn and Suites",
      "StreetAddress": "7000 universal Blvd",
      "Latitude": 28.4563701,
      "Longitude": -81.4756136,
      "OpenDate": ""
    },
    {
      "StationName": "Erdman Automotive station location",
      "StreetAddress": "4650 Highway 520",
      "Latitude": 28.3601465,
      "Longitude": -80.7979861,
      "OpenDate": ""
    },
    {
      "StationName": "HARBOURW BLDG 3",
      "StreetAddress": "5342 S West Shore Blvd",
      "Latitude": 27.887089,
      "Longitude": -82.526856,
      "OpenDate": ""
    },
    {
      "StationName": "Mahaffey Theater - 1",
      "StreetAddress": "400 1st Street S",
      "Latitude": 27.765893,
      "Longitude": -82.633241,
      "OpenDate": ""
    },
    {
      "StationName": "City of Winter Park Garfield",
      "StreetAddress": "121 Garfield Ave",
      "Latitude": 28.599793,
      "Longitude": -81.3515,
      "OpenDate": ""
    },
    {
      "StationName": "Clean Energy Demo Center",
      "StreetAddress": "6990 Dickman Rd",
      "Latitude": 27.785273,
      "Longitude": -82.40219,
      "OpenDate": ""
    },
    {
      "StationName": "CITY OF OLDSMAR STATE STREET",
      "StreetAddress": "207 State St E",
      "Latitude": 28.035901,
      "Longitude": -82.660263,
      "OpenDate": ""
    },
    {
      "StationName": "LAKE HOUSE ORL LAKE HOUSE #1",
      "StreetAddress": "7600 Majorca Pl",
      "Latitude": 28.452401,
      "Longitude": -81.479011,
      "OpenDate": ""
    },
    {
      "StationName": "GOVERNMENT CENT PD SINGLE",
      "StreetAddress": "3719 NW 97th Ave",
      "Latitude": 25.80743,
      "Longitude": -80.351546,
      "OpenDate": ""
    },
    {
      "StationName": "The Galleon Condominiums",
      "StreetAddress": "4100 Galt Ocean Dr",
      "Latitude": 26.1790303,
      "Longitude": -80.0970088,
      "OpenDate": "5/1/2019"
    },
    {
      "StationName": "OBE Power",
      "StreetAddress": "671 NW 1st St",
      "Latitude": 25.7750169,
      "Longitude": -80.2058363,
      "OpenDate": "7/11/2019"
    },
    {
      "StationName": "Busy Bee - Tesla Supercharger",
      "StreetAddress": "14100 Panama City Beach Pkwy",
      "Latitude": 30.211432,
      "Longitude": -85.849367,
      "OpenDate": "8/31/2020"
    },
    {
      "StationName": "Wawa - Tesla Supercharger",
      "StreetAddress": "4320 US Highway 98",
      "Latitude": 28.097782,
      "Longitude": -81.974745,
      "OpenDate": "8/31/2020"
    },
    {
      "StationName": "Wawa - Tesla Supercharger",
      "StreetAddress": "116 N Highway 27/441",
      "Latitude": 28.916686,
      "Longitude": -81.922512,
      "OpenDate": "9/10/2020"
    },
    {
      "StationName": "ROLLINS COLLEGE WELLNESS CENTER",
      "StreetAddress": "118 W Fairbanks Ave",
      "Latitude": 28.592798,
      "Longitude": -81.35131,
      "OpenDate": ""
    },
    {
      "StationName": "Integra Village at Lake Forest",
      "StreetAddress": "101 Integra Village Trail",
      "Latitude": 28.812489,
      "Longitude": -81.355398,
      "OpenDate": ""
    },
    {
      "StationName": "5201 Waterford",
      "StreetAddress": "5201 Blue Lagoon Drive",
      "Latitude": 25.7833715,
      "Longitude": -80.2813919,
      "OpenDate": ""
    },
    {
      "StationName": "1000 Waterford",
      "StreetAddress": "1000 Northwest 57th Court",
      "Latitude": 25.7806724,
      "Longitude": -80.2923203,
      "OpenDate": ""
    },
    {
      "StationName": "800 Waterford",
      "StreetAddress": "800 Waterford Way",
      "Latitude": 25.779223,
      "Longitude": -80.2993729,
      "OpenDate": ""
    },
    {
      "StationName": "5301 Waterford",
      "StreetAddress": "5301 Blue Lagoon Drive",
      "Latitude": 25.7823143,
      "Longitude": -80.2820015,
      "OpenDate": ""
    },
    {
      "StationName": "701 Waterford",
      "StreetAddress": "701 Waterford Way",
      "Latitude": 25.7791454,
      "Longitude": -80.2968479,
      "OpenDate": ""
    },
    {
      "StationName": "703 Waterford",
      "StreetAddress": "703 Waterford Way",
      "Latitude": 25.779152,
      "Longitude": -80.2958543,
      "OpenDate": ""
    },
    {
      "StationName": "5200 Waterford",
      "StreetAddress": "5200 Blue Lagoon Drive",
      "Latitude": 25.7817691,
      "Longitude": -80.2806952,
      "OpenDate": ""
    },
    {
      "StationName": "LOTIS CLUBHOUSE",
      "StreetAddress": "9141 W Commercial Blvd",
      "Latitude": 26.194527,
      "Longitude": -80.274091,
      "OpenDate": ""
    },
    {
      "StationName": "FPL EVOLUTION MIDTOWN PGA DC4",
      "StreetAddress": "4801 PGA Boulevard",
      "Latitude": 26.83983,
      "Longitude": -80.108271,
      "OpenDate": ""
    },
    {
      "StationName": "OBE POWER JACKSON MH LEFT",
      "StreetAddress": "1611 NW 12th Avenue",
      "Latitude": 25.789322,
      "Longitude": -80.213455,
      "OpenDate": ""
    },
    {
      "StationName": "Winn-Dixie - Tesla Supercharger",
      "StreetAddress": "703 Chaffee Rd S",
      "Latitude": 30.307225,
      "Longitude": -81.847874,
      "OpenDate": "9/21/2020"
    },
    {
      "StationName": "ACQUALINA ACQUALINA RESOR",
      "StreetAddress": "17875 Collins Ave",
      "Latitude": 25.941229,
      "Longitude": -80.12073,
      "OpenDate": ""
    },
    {
      "StationName": "STADIUM ENCLAVE UE STATION 1",
      "StreetAddress": "1001 Stearns Street",
      "Latitude": 30.433708,
      "Longitude": -84.297314,
      "OpenDate": ""
    },
    {
      "StationName": "Lexington Park",
      "StreetAddress": "12201 Lexington Park Dr",
      "Latitude": 28.059034,
      "Longitude": -82.6234,
      "OpenDate": ""
    },
    {
      "StationName": "The Florida Mall",
      "StreetAddress": "8001 S. Orange Blossom Trail",
      "Latitude": 28.448321,
      "Longitude": -81.395052,
      "OpenDate": ""
    },
    {
      "StationName": "Dadeland Mall",
      "StreetAddress": "7535 N. Kendall Dr.",
      "Latitude": 25.689126,
      "Longitude": -80.310694,
      "OpenDate": ""
    },
    {
      "StationName": "430704 : Berkshire Coral Gables",
      "StreetAddress": "3880 Bird Road",
      "Latitude": 25.734697,
      "Longitude": -80.25771,
      "OpenDate": ""
    },
    {
      "StationName": "WINTERPARK WINTER PARK",
      "StreetAddress": "862 Orlando Ave",
      "Latitude": 28.589691,
      "Longitude": -81.36465,
      "OpenDate": ""
    },
    {
      "StationName": "The Beacon Residences",
      "StreetAddress": "The Beacon Residences, 2500 SR-44",
      "Latitude": 29.011953,
      "Longitude": -80.970904,
      "OpenDate": ""
    },
    {
      "StationName": "CORPORATE SMALL PARK LOT",
      "StreetAddress": "501 N Magnolia Ave",
      "Latitude": 28.549522,
      "Longitude": -81.37623,
      "OpenDate": ""
    },
    {
      "StationName": "TOWER 101 TOWER 101",
      "StreetAddress": "101 NE 3rd Ave",
      "Latitude": 26.123335,
      "Longitude": -80.141335,
      "OpenDate": ""
    },
    {
      "StationName": "VITTURE",
      "StreetAddress": "1680 Fruitville Rd, Suite 399",
      "Latitude": 27.338652,
      "Longitude": -82.536756,
      "OpenDate": ""
    },
    {
      "StationName": "The Avenues Simon JAX",
      "StreetAddress": "10300 Southside Blvd, Jacksonville, FL 32256",
      "Latitude": 30.183374,
      "Longitude": -81.552272,
      "OpenDate": ""
    },
    {
      "StationName": "Apalach Inn - 1",
      "StreetAddress": "249 US-98",
      "Latitude": 29.715729,
      "Longitude": -84.998018,
      "OpenDate": ""
    },
    {
      "StationName": "Treasure Island City Hall - 1",
      "StreetAddress": "10451 Gulf Blvd",
      "Latitude": 27.766578,
      "Longitude": -82.767723,
      "OpenDate": ""
    },
    {
      "StationName": "OBE POWER PELORO CONDO",
      "StreetAddress": "6610-6620 Indian Creek Drive",
      "Latitude": 25.84997,
      "Longitude": -80.12183,
      "OpenDate": ""
    },
    {
      "StationName": "Northwest Florida ENT - Tesla Destination",
      "StreetAddress": "310 Racetrack Rd NW",
      "Latitude": 30.449917,
      "Longitude": -86.62845,
      "OpenDate": "9/28/2020"
    },
    {
      "StationName": "Miracle Plaza - Whole Foods Market",
      "StreetAddress": "1817 Thomasville Rd",
      "Latitude": 30.463368,
      "Longitude": -84.269894,
      "OpenDate": "9/28/2020"
    },
    {
      "StationName": "FPL ST LUCIE 03",
      "StreetAddress": "6501 S Ocean Dr",
      "Latitude": 27.347677,
      "Longitude": -80.242921,
      "OpenDate": ""
    },
    {
      "StationName": "Lake Mary Creative - 4",
      "StreetAddress": "744 Primera Blvd",
      "Latitude": 28.766435,
      "Longitude": -81.352945,
      "OpenDate": ""
    },
    {
      "StationName": "Giralda Place Residences",
      "StreetAddress": "275 Giralda Ave.",
      "Latitude": 25.751374,
      "Longitude": -80.260313,
      "OpenDate": ""
    },
    {
      "StationName": "SHS LAKELAND LAKELAND 1",
      "StreetAddress": "511 W Lime St",
      "Latitude": 28.040713,
      "Longitude": -81.961557,
      "OpenDate": ""
    },
    {
      "StationName": "Integra Lakes",
      "StreetAddress": "3160 Integra Lakes Lane",
      "Latitude": 28.670321,
      "Longitude": -81.336858,
      "OpenDate": ""
    },
    {
      "StationName": "Wawa - Tesla Supercharger",
      "StreetAddress": "5575 Okeechobee Rd",
      "Latitude": 27.416742,
      "Longitude": -80.382,
      "OpenDate": "10/5/2020"
    },
    {
      "StationName": "Toscana at Bay Colony",
      "StreetAddress": "8960 Bay Colony Dr",
      "Latitude": 26.247921,
      "Longitude": -81.817532,
      "OpenDate": ""
    },
    {
      "StationName": "City of Kissimmee DCFC-KUA",
      "StreetAddress": "205 E Dakin Ave",
      "Latitude": 28.293127,
      "Longitude": -81.403045,
      "OpenDate": ""
    },
    {
      "StationName": "Target T2022 - Davie, FL",
      "StreetAddress": "5800 S University Drive",
      "Latitude": 26.047407,
      "Longitude": -80.250477,
      "OpenDate": ""
    },
    {
      "StationName": "5 Thousand Town",
      "StreetAddress": "5000 Big Island Dr",
      "Latitude": 30.252079,
      "Longitude": -81.528047,
      "OpenDate": ""
    },
    {
      "StationName": "ESSEX LUXE STATION 1",
      "StreetAddress": "Essex road",
      "Latitude": 28.438228,
      "Longitude": -81.459767,
      "OpenDate": ""
    },
    {
      "StationName": "OBE POWER NOVA RESIDENCE",
      "StreetAddress": "7271 Nova Rd",
      "Latitude": 26.074598,
      "Longitude": -80.24289,
      "OpenDate": ""
    },
    {
      "StationName": "OBE POWER SKYLINE",
      "StreetAddress": "2101 Brickell Ave",
      "Latitude": 25.752644,
      "Longitude": -80.1992,
      "OpenDate": ""
    },
    {
      "StationName": "AHS CHARGE CELEBRATION 3",
      "StreetAddress": "380 Celebration Pl",
      "Latitude": 28.327561,
      "Longitude": -81.538654,
      "OpenDate": ""
    },
    {
      "StationName": "Monticello FL - 1",
      "StreetAddress": "175 S Cherry Street",
      "Latitude": 30.544635,
      "Longitude": -83.869404,
      "OpenDate": ""
    },
    {
      "StationName": "Target T0687 - Gainesville , FL",
      "StreetAddress": "3970 SW Acher Road",
      "Latitude": 29.620632,
      "Longitude": -82.38437,
      "OpenDate": ""
    },
    {
      "StationName": "DANIA POINTE RODIZIO",
      "StreetAddress": "11 S Pointe Dr",
      "Latitude": 26.05432,
      "Longitude": -80.161294,
      "OpenDate": ""
    },
    {
      "StationName": "CH PARKING CHARGER #2",
      "StreetAddress": "10500 N Military Trl",
      "Latitude": 26.832083,
      "Longitude": -80.10441,
      "OpenDate": ""
    },
    {
      "StationName": "DANIA POINTE WAY POINT BLU 2",
      "StreetAddress": "1763 S Pointe Dr",
      "Latitude": 26.05418,
      "Longitude": -80.159757,
      "OpenDate": ""
    },
    {
      "StationName": "DANIA POINTE BURGERFI",
      "StreetAddress": "11 S Pointe Dr",
      "Latitude": 26.051785,
      "Longitude": -80.160661,
      "OpenDate": ""
    },
    {
      "StationName": "DANIA POINTE WAY POINT BLUE",
      "StreetAddress": "139 S Compass Way",
      "Latitude": 26.054299,
      "Longitude": -80.159752,
      "OpenDate": ""
    },
    {
      "StationName": "DANIA POINTE S BEARING RED 2",
      "StreetAddress": "1801 NW 1st St",
      "Latitude": 26.052884,
      "Longitude": -80.15929,
      "OpenDate": ""
    },
    {
      "StationName": "Target - Tesla Supercharger",
      "StreetAddress": "3055 Columbia Blvd",
      "Latitude": 28.552882,
      "Longitude": -80.840688,
      "OpenDate": "10/19/2020"
    },
    {
      "StationName": "Florida Power & Light - EVolution - West Palm Beach Turnpike Service Plaza",
      "StreetAddress": "94 Florida's Turnpike",
      "Latitude": 26.63446482,
      "Longitude": -80.17505563,
      "OpenDate": "9/14/2020"
    },
    {
      "StationName": "Florida Power & Light - EVolution - Fort Pierce Turnpike Service Plaza",
      "StreetAddress": "144 Florida's Turnpike",
      "Latitude": 27.3029544,
      "Longitude": -80.3730905,
      "OpenDate": "9/24/2020"
    },
    {
      "StationName": "1111 CENTRAL WEST LOT",
      "StreetAddress": "1101 Central Ave",
      "Latitude": 26.147978,
      "Longitude": -81.79312,
      "OpenDate": ""
    },
    {
      "StationName": "1111 CENTRAL EAST LOT",
      "StreetAddress": "1111 Central Ave",
      "Latitude": 26.147863,
      "Longitude": -81.79238,
      "OpenDate": ""
    },
    {
      "StationName": "1111 CENTRAL GARAGE WEST",
      "StreetAddress": "10 Central Ave",
      "Latitude": 26.148237,
      "Longitude": -81.793304,
      "OpenDate": ""
    },
    {
      "StationName": "1111 CENTRAL GARAGE EAST",
      "StreetAddress": "91 12th St N",
      "Latitude": 26.14855,
      "Longitude": -81.79226,
      "OpenDate": ""
    },
    {
      "StationName": "Holiday Inn Express & Suites - Fleming Island",
      "StreetAddress": "1815 E West Pkwy",
      "Latitude": 30.096148,
      "Longitude": -81.70783,
      "OpenDate": "8/1/2019"
    },
    {
      "StationName": "Target - Tesla Supercharger",
      "StreetAddress": "2380 W International Speedway Blvd",
      "Latitude": 29.183395,
      "Longitude": -81.078829,
      "OpenDate": "10/26/2020"
    },
    {
      "StationName": "Miami International Mall",
      "StreetAddress": "1455 NW 107th Ave",
      "Latitude": 25.785124,
      "Longitude": -80.365997,
      "OpenDate": ""
    },
    {
      "StationName": "Walmart 2946 - Fort Lauderdale",
      "StreetAddress": "2500 W Broward Blvd",
      "Latitude": 26.120028,
      "Longitude": -80.174234,
      "OpenDate": ""
    },
    {
      "StationName": "OBE POWER BLUE LAGOON CON",
      "StreetAddress": "5085 NW 7th St",
      "Latitude": 25.780033,
      "Longitude": -80.27671,
      "OpenDate": ""
    },
    {
      "StationName": "Cinemark Palace 20",
      "StreetAddress": "3200 Airport Rd",
      "Latitude": 26.376812,
      "Longitude": -80.113425,
      "OpenDate": "11/2/2020"
    },
    {
      "StationName": "Hampton Inn & Suites - Middleburg",
      "StreetAddress": "1735 Jeremiah St",
      "Latitude": 30.110474,
      "Longitude": -81.829844,
      "OpenDate": "11/13/2020"
    },
    {
      "StationName": "Hampton Inn - Gainesville",
      "StreetAddress": "4225 SW 40th Blvd",
      "Latitude": 29.614982,
      "Longitude": -82.382567,
      "OpenDate": "11/13/2020"
    },
    {
      "StationName": "Best Western - Niceville",
      "StreetAddress": "106 Bayshore Dr",
      "Latitude": 30.520782,
      "Longitude": -86.490488,
      "OpenDate": "11/13/2020"
    },
    {
      "StationName": "Holiday Inn Express & Suites - Niceville",
      "StreetAddress": "410 W John Sims Pkwy",
      "Latitude": 30.522455,
      "Longitude": -86.501382,
      "OpenDate": "11/17/2020"
    },
    {
      "StationName": "Bay Park Towers",
      "StreetAddress": "3301 NE 5th Ave",
      "Latitude": 25.808021,
      "Longitude": -80.186286,
      "OpenDate": ""
    },
    {
      "StationName": "Walmart 3349 - Port Charlotte, FL",
      "StreetAddress": "375 Kings Hwy",
      "Latitude": 27.02385,
      "Longitude": -82.046871,
      "OpenDate": ""
    },
    {
      "StationName": "8450 GB1 N BUILDING #1",
      "StreetAddress": "N.W. 102 2nd Ave",
      "Latitude": 26.133013,
      "Longitude": -80.259487,
      "OpenDate": ""
    },
    {
      "StationName": "2672 Autumn Creek - Tesla Destination",
      "StreetAddress": "2672 Autumn Creek Circle",
      "Latitude": 28.32346,
      "Longitude": -81.6108,
      "OpenDate": "11/3/2020"
    },
    {
      "StationName": "30 Avenue - Tesla Destination",
      "StreetAddress": "12805 U.S. 98",
      "Latitude": 30.280113,
      "Longitude": -86.009869,
      "OpenDate": "11/3/2020"
    },
    {
      "StationName": "Alys Beach - Tesla Destination",
      "StreetAddress": "9581 E County Highway 30A",
      "Latitude": 30.285365,
      "Longitude": -86.030091,
      "OpenDate": "11/3/2020"
    },
    {
      "StationName": "BallenIsles Country Club - Tesla Destination",
      "StreetAddress": "100 Ballenisles Dr",
      "Latitude": 26.837345,
      "Longitude": -80.126723,
      "OpenDate": "11/3/2020"
    },
    {
      "StationName": "Bonaventure Resort & Spa - Tesla Destination",
      "StreetAddress": "250 Racquet Club Road",
      "Latitude": 26.125585,
      "Longitude": -80.378274,
      "OpenDate": "11/3/2020"
    },
    {
      "StationName": "Broken Sound Club - Tesla Destination",
      "StreetAddress": "2401 Willow Springs Dr",
      "Latitude": 26.396942,
      "Longitude": -80.134616,
      "OpenDate": "11/3/2020"
    },
    {
      "StationName": "BUILDING.co Miami - Tesla Destination",
      "StreetAddress": "120 SW 8th St",
      "Latitude": 25.766056,
      "Longitude": -80.196192,
      "OpenDate": "11/3/2020"
    },
    {
      "StationName": "Casa Coquina Del Mar Bed & Breakfast - Tesla Destination",
      "StreetAddress": "4010 Coquina Ave",
      "Latitude": 28.56334,
      "Longitude": -80.799741,
      "OpenDate": "11/3/2020"
    },
    {
      "StationName": "Conrad Fort Lauderdale Beach - Tesla Destination",
      "StreetAddress": "551 N Fort Lauderdale Beach Blvd",
      "Latitude": 26.130904,
      "Longitude": -80.104354,
      "OpenDate": "11/3/2020"
    },
    {
      "StationName": "Costa dEste Beach Resort & Spa - Tesla Destination",
      "StreetAddress": "3244 Ocean Dr",
      "Latitude": 27.652062,
      "Longitude": -80.355521,
      "OpenDate": "11/3/2020"
    },
    {
      "StationName": "Courtyard by Marriott Cocoa Beach - Tesla Destination",
      "StreetAddress": "3435 N Atlantic Ave",
      "Latitude": 28.350193,
      "Longitude": -80.607912,
      "OpenDate": "11/3/2020"
    },
    {
      "StationName": "Culvers of Fort Meyers - Tesla Destination",
      "StreetAddress": "9340 Six Mile Cypress Pkwy",
      "Latitude": 26.60752,
      "Longitude": -81.81174,
      "OpenDate": "11/3/2020"
    },
    {
      "StationName": "Cypress Lakes Professional Center - Tesla Destination",
      "StreetAddress": "180 Pine Avenue N",
      "Latitude": 28.043732,
      "Longitude": -82.671781,
      "OpenDate": "11/3/2020"
    },
    {
      "StationName": "Days Inn by Wyndham Miami International Airport - Tesla Destination",
      "StreetAddress": "7250 NW 11th St",
      "Latitude": 25.780744,
      "Longitude": -80.313652,
      "OpenDate": "11/3/2020"
    },
    {
      "StationName": "Eddie Vs Prime Seafood - Tesla Destination",
      "StreetAddress": "4400 W Boy Scout Blvd",
      "Latitude": 27.960322,
      "Longitude": -82.51828,
      "OpenDate": "11/3/2020"
    },
    {
      "StationName": "Edenson Dental - Tesla Destination",
      "StreetAddress": "109 W Bearss Avenue",
      "Latitude": 28.088312,
      "Longitude": -82.46057,
      "OpenDate": "11/3/2020"
    },
    {
      "StationName": "Evernia Garage - Tesla Destination",
      "StreetAddress": "333 Evernia St",
      "Latitude": 26.711605,
      "Longitude": -80.052909,
      "OpenDate": "11/3/2020"
    },
    {
      "StationName": "Fisher Island - Tesla Destination",
      "StreetAddress": "5972 NE 4th Ave",
      "Latitude": 25.831176,
      "Longitude": -80.188338,
      "OpenDate": "11/3/2020"
    },
    {
      "StationName": "Gateway Center - Tesla Destination",
      "StreetAddress": "1000 Legions Pl Ste 710",
      "Latitude": 28.558839,
      "Longitude": -81.379421,
      "OpenDate": "11/3/2020"
    },
    {
      "StationName": "Grand Hyatt Tampa Bay - Tesla Destination",
      "StreetAddress": "2900 Bayport Dr",
      "Latitude": 27.966403,
      "Longitude": -82.55001,
      "OpenDate": "11/3/2020"
    },
    {
      "StationName": "Hampton Inn & Suites Sarasota/Bradenton Airport - Tesla Destination",
      "StreetAddress": "975 University Pkwy",
      "Latitude": 27.382229,
      "Longitude": -82.55049,
      "OpenDate": "11/3/2020"
    },
    {
      "StationName": "Hampton Inn Vero Beach - Tesla Destination",
      "StreetAddress": "9350 19th Ln",
      "Latitude": 27.637738,
      "Longitude": -80.519221,
      "OpenDate": "11/3/2020"
    },
    {
      "StationName": "Holiday Inn Club Vacations Contact Center - Tesla Destination",
      "StreetAddress": "9395 S John Young Pkwy",
      "Latitude": 28.431984,
      "Longitude": -81.422252,
      "OpenDate": "11/3/2020"
    },
    {
      "StationName": "Hyatt Place Boca Raton/Downtown - Tesla Destination",
      "StreetAddress": "100 E. Palmetto Park Rd",
      "Latitude": 26.350045,
      "Longitude": -80.085993,
      "OpenDate": "11/3/2020"
    },
    {
      "StationName": "Hyatt Place Sarasota Bradenton Intl Airport - Tesla Destination",
      "StreetAddress": "950 University Pkwy",
      "Latitude": 27.381658,
      "Longitude": -82.552424,
      "OpenDate": "11/3/2020"
    },
    {
      "StationName": "Hyatt Residence Club Key West, Windward Pointe - Tesla Destination",
      "StreetAddress": "3675 S Roosevelt Blvd",
      "Latitude": 24.5535,
      "Longitude": -81.750827,
      "OpenDate": "11/3/2020"
    },
    {
      "StationName": "Innisbrook Resort - Tesla Destination",
      "StreetAddress": "36750 US Hwy 19 N",
      "Latitude": 28.106344,
      "Longitude": -82.740134,
      "OpenDate": "11/3/2020"
    },
    {
      "StationName": "Johnson & Johnson Human Performance Institute - Tesla Destination",
      "StreetAddress": "9757 Lake Nona Club Dr",
      "Latitude": 28.423038,
      "Longitude": -81.252272,
      "OpenDate": "11/3/2020"
    },
    {
      "StationName": "Juanas Pagodas and Sailors Grill - Tesla Destination",
      "StreetAddress": "1451 Navarre Beach Cswy",
      "Latitude": 30.382261,
      "Longitude": -86.864327,
      "OpenDate": "11/3/2020"
    },
    {
      "StationName": "Kennedy Space Center (SpaceX) - Tesla Destination",
      "StreetAddress": "Saturn Causeway, Bldg J8-2009",
      "Latitude": 28.524604,
      "Longitude": -80.681483,
      "OpenDate": "11/3/2020"
    },
    {
      "StationName": "Kiwanis Youth Park - Tesla Destination",
      "StreetAddress": "99 SE 5th St",
      "Latitude": 27.196033,
      "Longitude": -80.251659,
      "OpenDate": "11/3/2020"
    },
    {
      "StationName": "Marco Beach Ocean Resort - Tesla Destination",
      "StreetAddress": "480 S Collier Blvd",
      "Latitude": 25.925468,
      "Longitude": -81.728497,
      "OpenDate": "11/3/2020"
    },
    {
      "StationName": "Marriotts Crystal Shores - Tesla Destination",
      "StreetAddress": "600 S Collier Blvd",
      "Latitude": 25.920498,
      "Longitude": -81.728437,
      "OpenDate": "11/3/2020"
    },
    {
      "StationName": "McArthur Golf Club - Tesla Destination",
      "StreetAddress": "6550 SE Osprey St",
      "Latitude": 27.094118,
      "Longitude": -80.167708,
      "OpenDate": "11/3/2020"
    },
    {
      "StationName": "Miami-Dade Fire Rescue Headquaters - Tesla Destination",
      "StreetAddress": "9300 NW 41st Street",
      "Latitude": 25.811321,
      "Longitude": -80.348674,
      "OpenDate": "11/3/2020"
    },
    {
      "StationName": "Northshore Plaza - Tesla Destination",
      "StreetAddress": "15923 N Florida Ave",
      "Latitude": 28.096712,
      "Longitude": -82.461064,
      "OpenDate": "11/3/2020"
    },
    {
      "StationName": "Ocean Five Hotel - Tesla Destination",
      "StreetAddress": "436 Ocean Dr",
      "Latitude": 25.774005,
      "Longitude": -80.132355,
      "OpenDate": "11/3/2020"
    },
    {
      "StationName": "One Park Square - Tesla Destination",
      "StreetAddress": "3470 NW 82nd Ave",
      "Latitude": 25.807171,
      "Longitude": -80.329975,
      "OpenDate": "11/3/2020"
    },
    {
      "StationName": "One Park Square Visitor Lot - Tesla Destination",
      "StreetAddress": "3470 NW 82nd Ave",
      "Latitude": 25.807171,
      "Longitude": -80.329975,
      "OpenDate": "11/3/2020"
    },
    {
      "StationName": "Pepin Distributing Company - Tesla Destination",
      "StreetAddress": "4121 N 50th St",
      "Latitude": 27.983395,
      "Longitude": -82.398435,
      "OpenDate": "11/3/2020"
    },
    {
      "StationName": "Pierres Restaurant & Lounge Morada Bay Beach Cafe - Tesla Destination",
      "StreetAddress": "81600 Overseas Hwy",
      "Latitude": 24.915998,
      "Longitude": -80.638685,
      "OpenDate": "11/3/2020"
    },
    {
      "StationName": "Pinecrest Gardens - Tesla Destination",
      "StreetAddress": "11000 Red Rd",
      "Latitude": 25.669582,
      "Longitude": -80.285243,
      "OpenDate": "11/3/2020"
    },
    {
      "StationName": "Port dHiver Bed & Breakfast - Tesla Destination",
      "StreetAddress": "201 Ocean Ave",
      "Latitude": 28.067912,
      "Longitude": -80.557619,
      "OpenDate": "11/3/2020"
    },
    {
      "StationName": "Qgiv, Inc - Tesla Destination",
      "StreetAddress": "207 Bartow Rd",
      "Latitude": 28.042482,
      "Longitude": -81.945565,
      "OpenDate": "11/3/2020"
    },
    {
      "StationName": "Residence Inn Port St. Lucie - Tesla Destination",
      "StreetAddress": "1920 SW Fountainview Blvd",
      "Latitude": 27.306864,
      "Longitude": -80.41143,
      "OpenDate": "11/3/2020"
    },
    {
      "StationName": "Rosemary Pointe Resort - Tesla Destination",
      "StreetAddress": "10711 E 30A",
      "Latitude": 30.279853,
      "Longitude": -86.011021,
      "OpenDate": "11/3/2020"
    },
    {
      "StationName": "Sleep Inn Sarasota - Tesla Destination",
      "StreetAddress": "5965 Brookhill Blvd",
      "Latitude": 27.337488,
      "Longitude": -82.45032,
      "OpenDate": "11/3/2020"
    },
    {
      "StationName": "Sonnys BBQ - Greenacres - Tesla Destination",
      "StreetAddress": "6120 Lake Worth Rd",
      "Latitude": 26.618533,
      "Longitude": -80.139679,
      "OpenDate": "11/3/2020"
    },
    {
      "StationName": "SpringHill Suites Tallahassee Central - Tesla Destination",
      "StreetAddress": "1300 Executive Center Dr",
      "Latitude": 30.426697,
      "Longitude": -84.236237,
      "OpenDate": "11/3/2020"
    },
    {
      "StationName": "Summerlin Jakes Seafood & Steaks - Tesla Destination",
      "StreetAddress": "17501 Harbour Pointe Dr",
      "Latitude": 26.485814,
      "Longitude": -82.008664,
      "OpenDate": "11/3/2020"
    },
    {
      "StationName": "Surf Club - Tesla Destination",
      "StreetAddress": "9011 Collins Avenue",
      "Latitude": 25.877576,
      "Longitude": -80.121295,
      "OpenDate": "11/3/2020"
    },
    {
      "StationName": "The Delaney Hotel - Tesla Destination",
      "StreetAddress": "1315 S Orange Ave",
      "Latitude": 28.526038,
      "Longitude": -81.376091,
      "OpenDate": "11/3/2020"
    },
    {
      "StationName": "The Ritz Carlton Orlando Grande Lakes Employee Lot - Tesla Destination",
      "StreetAddress": "4012 Central Florida Pkwy",
      "Latitude": 28.410029,
      "Longitude": -81.429681,
      "OpenDate": "11/3/2020"
    },
    {
      "StationName": "The Ritz Carlton Residences, Singer Island - Tesla Destination",
      "StreetAddress": "2700 N Ocean Dr",
      "Latitude": 26.785117,
      "Longitude": -80.033251,
      "OpenDate": "11/3/2020"
    },
    {
      "StationName": "The Ritz-Carlton Coconut Grove, Miami - Tesla Destination",
      "StreetAddress": "3300 SW 27th Ave",
      "Latitude": 25.730142,
      "Longitude": -80.238218,
      "OpenDate": "11/3/2020"
    },
    {
      "StationName": "The Ritz-Carlton Sarasota - Tesla Destination",
      "StreetAddress": "1111 Ritz Carlton Dr",
      "Latitude": 27.337844,
      "Longitude": -82.548429,
      "OpenDate": "11/3/2020"
    },
    {
      "StationName": "TOPSL Beach and Racquet Resort - Tesla Destination",
      "StreetAddress": "9011 Highway 98 W",
      "Latitude": 30.378144,
      "Longitude": -86.326865,
      "OpenDate": "11/3/2020"
    },
    {
      "StationName": "TOPSL Commercial Center - Tesla Destination",
      "StreetAddress": "8955 Emerald Coast Pkwy",
      "Latitude": 30.377886,
      "Longitude": -86.325616,
      "OpenDate": "11/3/2020"
    },
    {
      "StationName": "Tours in the Glades - Tesla Destination",
      "StreetAddress": "20 Southwest 2nd Avenue",
      "Latitude": 25.4475,
      "Longitude": -80.47987,
      "OpenDate": "11/3/2020"
    },
    {
      "StationName": "Town Center One - Tesla Destination",
      "StreetAddress": "5555 Gate Pkwy",
      "Latitude": 30.248158,
      "Longitude": -81.524366,
      "OpenDate": "11/3/2020"
    },
    {
      "StationName": "TracFone Wireless HQ - Tesla Destination",
      "StreetAddress": "9700 NW 112th Ave",
      "Latitude": 25.862664,
      "Longitude": -80.380447,
      "OpenDate": "11/3/2020"
    },
    {
      "StationName": "Universals Cabana Bay Beach Resort - Tesla Destination",
      "StreetAddress": "6550 Adventure Wy",
      "Latitude": 28.465579,
      "Longitude": -81.473205,
      "OpenDate": "11/3/2020"
    },
    {
      "StationName": "Victoria Park Hotel - Tesla Destination",
      "StreetAddress": "855 Northeast 20th Ave",
      "Latitude": 26.135874,
      "Longitude": -80.119949,
      "OpenDate": "11/3/2020"
    },
    {
      "StationName": "Vology - Tesla Destination",
      "StreetAddress": "15950 Bay Vista Dr",
      "Latitude": 27.918227,
      "Longitude": -82.709978,
      "OpenDate": "11/3/2020"
    },
    {
      "StationName": "Waverly South Beach - Tesla Destination",
      "StreetAddress": "1330 West Ave",
      "Latitude": 25.784721,
      "Longitude": -80.14323,
      "OpenDate": "11/3/2020"
    },
    {
      "StationName": "Web.com HQ - Tesla Destination",
      "StreetAddress": "5555 Gate Pkwy",
      "Latitude": 30.248158,
      "Longitude": -81.524366,
      "OpenDate": "11/3/2020"
    },
    {
      "StationName": "Weston Park at Longwood Station - Tesla Destination",
      "StreetAddress": "100 Myrtle St",
      "Latitude": 28.700964,
      "Longitude": -81.34446,
      "OpenDate": "11/3/2020"
    },
    {
      "StationName": "Comfort Suites Fernandina Beach At Amelia Island",
      "StreetAddress": "2801 Atlantic Ave",
      "Latitude": 30.667963,
      "Longitude": -81.43261,
      "OpenDate": "11/9/2020"
    },
    {
      "StationName": "The Daytona",
      "StreetAddress": "1870 Victory Cir",
      "Latitude": 29.194224,
      "Longitude": -81.073386,
      "OpenDate": "11/9/2020"
    },
    {
      "StationName": "Fairfield Inn & Suites by Marriott Daytona Beach Speedway/Airport",
      "StreetAddress": "1820 Checkered Flag Blvd",
      "Latitude": 29.194192,
      "Longitude": -81.070758,
      "OpenDate": "11/9/2020"
    },
    {
      "StationName": "Hampton Inn Debary/Deltona",
      "StreetAddress": "308 Sunrise Blvd",
      "Latitude": 28.872255,
      "Longitude": -81.28616,
      "OpenDate": "11/9/2020"
    },
    {
      "StationName": "Seminole State College - Sanford/Lake Mary Campus",
      "StreetAddress": "100 Weldon Blvd",
      "Latitude": 28.746757,
      "Longitude": -81.307763,
      "OpenDate": "11/9/2020"
    },
    {
      "StationName": "Samâ€™s Club 4991 â€“ Cocoa,Fl",
      "StreetAddress": "450 Townsend Rd.",
      "Latitude": 28.361391,
      "Longitude": -80.793137,
      "OpenDate": ""
    },
    {
      "StationName": "Bloomingdale's Garage - Aventura Mall",
      "StreetAddress": "19501 Biscayne Blvd",
      "Latitude": 25.955432,
      "Longitude": -80.140544,
      "OpenDate": ""
    },
    {
      "StationName": "Milagro Coral Gables",
      "StreetAddress": "2263 SW 37th Ave",
      "Latitude": 25.7485263,
      "Longitude": -80.2565204,
      "OpenDate": ""
    },
    {
      "StationName": "CITY OF NPR GLORIA SWANSON",
      "StreetAddress": "6327 Bank St",
      "Latitude": 28.250535,
      "Longitude": -82.720694,
      "OpenDate": ""
    },
    {
      "StationName": "Wawa - Tesla Supercharger",
      "StreetAddress": "5600 FL-100 East",
      "Latitude": 29.476633,
      "Longitude": -81.206325,
      "OpenDate": "11/16/2020"
    },
    {
      "StationName": "Walmart 959 Bushnell",
      "StreetAddress": "2163 W County Road 48",
      "Latitude": 28.666797,
      "Longitude": -82.138585,
      "OpenDate": ""
    },
    {
      "StationName": "The Slade CHM",
      "StreetAddress": "1190 E Washington St",
      "Latitude": 27.94954,
      "Longitude": -82.447829,
      "OpenDate": ""
    },
    {
      "StationName": "Econolodge Inn & Suites Maingate Central",
      "StreetAddress": "4669 W Irlo Bronson Memorial Hwy",
      "Latitude": 28.3170451,
      "Longitude": -81.4686981,
      "OpenDate": ""
    },
    {
      "StationName": "Station Location",
      "StreetAddress": "7125 Universal Boulevard",
      "Latitude": 28.4602394,
      "Longitude": -81.4634846,
      "OpenDate": ""
    },
    {
      "StationName": "FPL EVOLUTION BOCARATONCITY2",
      "StreetAddress": "1700 NW 2nd Ave",
      "Latitude": 26.35195,
      "Longitude": -80.089974,
      "OpenDate": ""
    },
    {
      "StationName": "FPL EVOLUTION BOCARATONCITY1",
      "StreetAddress": "Spanish River Blvd",
      "Latitude": 26.387376,
      "Longitude": -80.113585,
      "OpenDate": ""
    },
    {
      "StationName": "FPL EVOLUTION BOCARATONCITY4",
      "StreetAddress": "201 W Palmetto Park Rd",
      "Latitude": 26.351574,
      "Longitude": -80.090751,
      "OpenDate": ""
    },
    {
      "StationName": "FPL EVOLUTION BOCARATONCITY3",
      "StreetAddress": "568 NW Crane Terrace",
      "Latitude": 26.354818,
      "Longitude": -80.088955,
      "OpenDate": ""
    },
    {
      "StationName": "HIEX DELAND STATION 1",
      "StreetAddress": "180 Fenway dr",
      "Latitude": 28.988595,
      "Longitude": -81.298928,
      "OpenDate": ""
    },
    {
      "StationName": "FOREST STATION 004",
      "StreetAddress": "800 Forest Street",
      "Latitude": 30.321346,
      "Longitude": -81.676818,
      "OpenDate": ""
    },
    {
      "StationName": "Hannibal Square",
      "StreetAddress": "602 W New England Ave",
      "Latitude": 28.595779,
      "Longitude": -81.35737,
      "OpenDate": "11/30/2020"
    },
    {
      "StationName": "TANGERDAYB DAYTONA 1",
      "StreetAddress": "1100 Cornerstone Blvd",
      "Latitude": 29.213434,
      "Longitude": -81.09837,
      "OpenDate": ""
    },
    {
      "StationName": "Tradewinds SC",
      "StreetAddress": "101499 Overseas Hwy",
      "Latitude": 25.113635,
      "Longitude": -80.421658,
      "OpenDate": ""
    },
    {
      "StationName": "FPL EVOLUTION OKEECHOBEE DC4",
      "StreetAddress": "55 US-98",
      "Latitude": 27.243322,
      "Longitude": -80.829457,
      "OpenDate": ""
    },
    {
      "StationName": "FRBMIAMI EV1",
      "StreetAddress": "9100 NW 36th St",
      "Latitude": 25.808663,
      "Longitude": -80.345159,
      "OpenDate": ""
    },
    {
      "StationName": "JAX STATION LAKE GRAY",
      "StreetAddress": "6500 Lake Gray Blvd",
      "Latitude": 30.201983,
      "Longitude": -81.747994,
      "OpenDate": ""
    },
    {
      "StationName": "Shops at Merrick Park Garage South Deck",
      "StreetAddress": "246 Altara Ave",
      "Latitude": 25.730988,
      "Longitude": -80.260187,
      "OpenDate": "12/7/2020"
    },
    {
      "StationName": "SO#21539",
      "StreetAddress": "3300 International Parkway",
      "Latitude": 28.794449,
      "Longitude": -81.356578,
      "OpenDate": ""
    },
    {
      "StationName": "Palmetto Station",
      "StreetAddress": "17945 Southwest 97th Avenue",
      "Latitude": 25.6030192,
      "Longitude": -80.3479663,
      "OpenDate": ""
    },
    {
      "StationName": "VI LIVING - NAP STATION 1",
      "StreetAddress": "701 Retreat Dr",
      "Latitude": 26.306555,
      "Longitude": -81.810862,
      "OpenDate": ""
    },
    {
      "StationName": "Walmart 613 Ormond Beach",
      "StreetAddress": "1521 W Granada Blvd",
      "Latitude": 29.258148,
      "Longitude": -81.113662,
      "OpenDate": ""
    },
    {
      "StationName": "Walmart 3527 Port St Lucie",
      "StreetAddress": "1675 NW St Lucie West Blvd",
      "Latitude": 27.313993,
      "Longitude": -80.403126,
      "OpenDate": ""
    },
    {
      "StationName": "Walmart 5055 Naples",
      "StreetAddress": "9885 Collier Blvd",
      "Latitude": 26.149076,
      "Longitude": -81.687503,
      "OpenDate": ""
    },
    {
      "StationName": "BoA (Key West, FL)",
      "StreetAddress": "3200 FLAGLER AVENUE",
      "Latitude": 24.561189,
      "Longitude": -81.763638,
      "OpenDate": ""
    },
    {
      "StationName": "Walmart 2963 (Coral Springs, FL)",
      "StreetAddress": "6001 Coral Ridge Dr",
      "Latitude": 26.304822,
      "Longitude": -80.277752,
      "OpenDate": ""
    },
    {
      "StationName": "Ellenton Premium Outlets (Ellenton, FL)",
      "StreetAddress": "5461 Factory Shops Blvd",
      "Latitude": 27.537479,
      "Longitude": -82.507392,
      "OpenDate": ""
    },
    {
      "StationName": "Walmart 2114 Chipley",
      "StreetAddress": "1619 Main St",
      "Latitude": 30.753393,
      "Longitude": -85.548257,
      "OpenDate": ""
    },
    {
      "StationName": "MOTEL6PENSACOLA CHARGER",
      "StreetAddress": "5 N New Warrington Rd Motel 6 Pensacola N.A.S",
      "Latitude": 30.408214,
      "Longitude": -87.277455,
      "OpenDate": ""
    },
    {
      "StationName": "S&S Food Store (Lake City)",
      "StreetAddress": "3519 US Highway 441",
      "Latitude": 30.238616,
      "Longitude": -82.63821,
      "OpenDate": ""
    },
    {
      "StationName": "OBE POWER CITY N MIAMI",
      "StreetAddress": "738 NE 125th St",
      "Latitude": 25.889738,
      "Longitude": -80.18399,
      "OpenDate": ""
    },
    {
      "StationName": "AFFINITY TAMPA BUILDING 8713",
      "StreetAddress": "8711 Serene Retreat Ln",
      "Latitude": 27.891991,
      "Longitude": -82.360124,
      "OpenDate": ""
    },
    {
      "StationName": "AFFINITY TAMPA BUILDING 8720",
      "StreetAddress": "8720 Serene Retreat Ln",
      "Latitude": 27.892584,
      "Longitude": -82.359965,
      "OpenDate": ""
    },
    {
      "StationName": "OBE POWER RIVLANDING L2WM",
      "StreetAddress": "1480 NW N River Dr",
      "Latitude": 25.785364,
      "Longitude": -80.22024,
      "OpenDate": ""
    },
    {
      "StationName": "FPL EVOLUTION CITY OF COCOA 1",
      "StreetAddress": "4 Harrison St",
      "Latitude": 28.354823,
      "Longitude": -80.724905,
      "OpenDate": ""
    },
    {
      "StationName": "FPL EVOLUTION CITY OF COCOA 3",
      "StreetAddress": "17 Oleander St",
      "Latitude": 28.355131,
      "Longitude": -80.726841,
      "OpenDate": ""
    },
    {
      "StationName": "FIELDS MOTORCAR STATION ONE",
      "StreetAddress": "4141 N Florida Ave",
      "Latitude": 28.094006,
      "Longitude": -81.954708,
      "OpenDate": ""
    },
    {
      "StationName": "Wawa - Tesla Supercharger",
      "StreetAddress": "13501 W Colonial Dr",
      "Latitude": 28.552192,
      "Longitude": -81.58409,
      "OpenDate": "12/21/2020"
    },
    {
      "StationName": "FPL ST LUCIE 04",
      "StreetAddress": "7462 Florida A1A",
      "Latitude": 27.34712,
      "Longitude": -80.24274,
      "OpenDate": ""
    },
    {
      "StationName": "FPL ST LUCIE 05",
      "StreetAddress": "7461 Florida A1A",
      "Latitude": 27.347142,
      "Longitude": -80.242752,
      "OpenDate": ""
    },
    {
      "StationName": "FPL ST LUCIE 07",
      "StreetAddress": "7459 Florida A1A",
      "Latitude": 27.347257,
      "Longitude": -80.24282,
      "OpenDate": ""
    },
    {
      "StationName": "FPL ST LUCIE 06",
      "StreetAddress": "7460 Florida A1A",
      "Latitude": 27.347221,
      "Longitude": -80.242806,
      "OpenDate": ""
    },
    {
      "StationName": "AFFINITY TAMPA BUILDING 8812",
      "StreetAddress": "8812 Serene Retreat Ln",
      "Latitude": 27.892798,
      "Longitude": -82.358719,
      "OpenDate": ""
    },
    {
      "StationName": "AFFINITY TAMPA BUILDING 8713 2",
      "StreetAddress": "8731 Serene Retreat Ln",
      "Latitude": 27.891978,
      "Longitude": -82.359248,
      "OpenDate": ""
    },
    {
      "StationName": "AFFINITY TAMPA NORTH GARAGES",
      "StreetAddress": "8813 Serene Retreat Ln",
      "Latitude": 27.893047,
      "Longitude": -82.357731,
      "OpenDate": ""
    },
    {
      "StationName": "Walk at Highwoods Preserve",
      "StreetAddress": "18001 Highwoods Preserve Parkway",
      "Latitude": 28.13091,
      "Longitude": -82.36635,
      "OpenDate": ""
    },
    {
      "StationName": "Slapsticks Cue & Brew",
      "StreetAddress": "1508 Calhoun Ave",
      "Latitude": 30.176096,
      "Longitude": -85.694115,
      "OpenDate": ""
    },
    {
      "StationName": "Hyatt Place - Boca Raton Hotel station location",
      "StreetAddress": "100 East Palmetto Park Road",
      "Latitude": 26.3500209,
      "Longitude": -80.086099,
      "OpenDate": ""
    },
    {
      "StationName": "OBE POWER THE MAIN L3WMGW",
      "StreetAddress": "201 E Las Olas Blvd",
      "Latitude": 26.11947,
      "Longitude": -80.141235,
      "OpenDate": ""
    },
    {
      "StationName": "Lot P5 - Station 2",
      "StreetAddress": "140 7th Ave S",
      "Latitude": 27.763716,
      "Longitude": -82.634584,
      "OpenDate": ""
    },
    {
      "StationName": "DCFC Unit 2",
      "StreetAddress": "250 5th Ave S",
      "Latitude": 27.765381,
      "Longitude": -82.636368,
      "OpenDate": ""
    },
    {
      "StationName": "Lakefront",
      "StreetAddress": "7911 Sailboat Key Blvd S",
      "Latitude": 27.749951,
      "Longitude": -82.747493,
      "OpenDate": ""
    },
    {
      "StationName": "Library 2",
      "StreetAddress": "138 E Lemon Street",
      "Latitude": 28.145466,
      "Longitude": -82.755028,
      "OpenDate": ""
    },
    {
      "StationName": "Dr P Phillips Hospital - 2",
      "StreetAddress": "9401 Turkey Lake Rd",
      "Latitude": 28.427972,
      "Longitude": -81.480244,
      "OpenDate": ""
    },
    {
      "StationName": "Bayfront Tower - P4 - 2",
      "StreetAddress": "1 Beach Dr SE",
      "Latitude": 27.770908,
      "Longitude": -82.633574,
      "OpenDate": ""
    },
    {
      "StationName": "MSC Garage 2nd Floor Unit 2",
      "StreetAddress": "1 4th Street N",
      "Latitude": 27.771345,
      "Longitude": -82.637332,
      "OpenDate": ""
    },
    {
      "StationName": "Performing Arts Center - DCFC",
      "StreetAddress": "105 Central Park Dr",
      "Latitude": 27.914488,
      "Longitude": -82.785601,
      "OpenDate": ""
    },
    {
      "StationName": "City Hall 2",
      "StreetAddress": "400 Alexandria Blvd",
      "Latitude": 28.653285,
      "Longitude": -81.201413,
      "OpenDate": ""
    },
    {
      "StationName": "Courthouse 2",
      "StreetAddress": "545 First Ave N",
      "Latitude": 27.772628,
      "Longitude": -82.641417,
      "OpenDate": ""
    },
    {
      "StationName": "Vinoy Park - 2",
      "StreetAddress": "600 5th Ave NE",
      "Latitude": 27.777566,
      "Longitude": -82.628466,
      "OpenDate": ""
    },
    {
      "StationName": "Comfort Inn and Suites DCFC 1",
      "StreetAddress": "1224 S Main Street",
      "Latitude": 28.838696,
      "Longitude": -82.044262,
      "OpenDate": ""
    },
    {
      "StationName": "South Core Garage - 2",
      "StreetAddress": "101 1st Ave S",
      "Latitude": 27.770606,
      "Longitude": -82.635375,
      "OpenDate": ""
    },
    {
      "StationName": "South Core Garage - 4",
      "StreetAddress": "101 1st Ave S",
      "Latitude": 27.770665,
      "Longitude": -82.635375,
      "OpenDate": ""
    },
    {
      "StationName": "Sundial Garage - 2",
      "StreetAddress": "117 2nd Street N",
      "Latitude": 27.772779,
      "Longitude": -82.634499,
      "OpenDate": ""
    },
    {
      "StationName": "Sundial Garage - 3",
      "StreetAddress": "117 2nd Street N",
      "Latitude": 27.77278,
      "Longitude": -82.634472,
      "OpenDate": ""
    },
    {
      "StationName": "Sundial Garage - 4",
      "StreetAddress": "117 2nd Street N",
      "Latitude": 27.772779,
      "Longitude": -82.634446,
      "OpenDate": ""
    },
    {
      "StationName": "Sundial Garage - 5",
      "StreetAddress": "117 2nd Street N",
      "Latitude": 27.772778,
      "Longitude": -82.634419,
      "OpenDate": ""
    },
    {
      "StationName": "Sundial Garage - 6",
      "StreetAddress": "117 2nd Street N",
      "Latitude": 27.772778,
      "Longitude": -82.634392,
      "OpenDate": ""
    },
    {
      "StationName": "Tampa Rays Lot 1 - Unit 2",
      "StreetAddress": "One Tropicana Drive",
      "Latitude": 27.766732,
      "Longitude": -82.655309,
      "OpenDate": ""
    },
    {
      "StationName": "Tampa Rays Lot 7 - Unit 1",
      "StreetAddress": "One Tropicana Drive",
      "Latitude": 27.768394,
      "Longitude": -82.649784,
      "OpenDate": ""
    },
    {
      "StationName": "Tampa Rays Lot 7 - Unit 2",
      "StreetAddress": "One Tropicana Drive",
      "Latitude": 27.768375,
      "Longitude": -82.649813,
      "OpenDate": ""
    },
    {
      "StationName": "Tampa Rays Lot 7 - Unit 3",
      "StreetAddress": "One Tropicana Drive",
      "Latitude": 27.768358,
      "Longitude": -82.649787,
      "OpenDate": ""
    },
    {
      "StationName": "Tampa Rays Lot 7 - Unit 4",
      "StreetAddress": "One Tropicana Drive",
      "Latitude": 27.768349,
      "Longitude": -82.649807,
      "OpenDate": ""
    },
    {
      "StationName": "Bok Tower Gardens - 2",
      "StreetAddress": "1151 Tower Blvd",
      "Latitude": 27.936462,
      "Longitude": -81.575682,
      "OpenDate": ""
    },
    {
      "StationName": "Bok Tower Gardens - 3",
      "StreetAddress": "1151 Tower Blvd",
      "Latitude": 27.936443,
      "Longitude": -81.575712,
      "OpenDate": ""
    },
    {
      "StationName": "Bok Tower Gardens - 4",
      "StreetAddress": "1151 Tower Blvd",
      "Latitude": 27.936415,
      "Longitude": -81.575737,
      "OpenDate": ""
    },
    {
      "StationName": "The Center DCFC - 2",
      "StreetAddress": "1640 Doctor MLK Blvd",
      "Latitude": 28.944022,
      "Longitude": -81.233555,
      "OpenDate": ""
    },
    {
      "StationName": "Center Lake Level 2 - 2",
      "StreetAddress": "357 Center Lake Ln",
      "Latitude": 28.659671,
      "Longitude": -81.202055,
      "OpenDate": ""
    },
    {
      "StationName": "Cooperative Extension - 2",
      "StreetAddress": "12520 Ulmerton Rd",
      "Latitude": 27.88378,
      "Longitude": -82.809961,
      "OpenDate": ""
    },
    {
      "StationName": "24 Avenue F - Unit 2",
      "StreetAddress": "24 Avenue F",
      "Latitude": 29.728569,
      "Longitude": -84.985432,
      "OpenDate": ""
    },
    {
      "StationName": "44 Avenue D - Unit 2",
      "StreetAddress": "44 Avenue D",
      "Latitude": 29.726709,
      "Longitude": -84.984902,
      "OpenDate": ""
    },
    {
      "StationName": "Center Lake DCFC",
      "StreetAddress": "357 Center Lake Lane",
      "Latitude": 28.659683,
      "Longitude": -81.202133,
      "OpenDate": ""
    },
    {
      "StationName": "Davenport - 2",
      "StreetAddress": "101 Champions Vue Loop",
      "Latitude": 28.271901,
      "Longitude": -81.658395,
      "OpenDate": ""
    },
    {
      "StationName": "Davenport - 3",
      "StreetAddress": "101 Champions Vue Loop",
      "Latitude": 28.270819,
      "Longitude": -81.659479,
      "OpenDate": ""
    },
    {
      "StationName": "Davenport - 4",
      "StreetAddress": "101 Champions Vue Loop",
      "Latitude": 28.270825,
      "Longitude": -81.659449,
      "OpenDate": ""
    },
    {
      "StationName": "City Hall Complex - 3",
      "StreetAddress": "2345 Providence Blvd",
      "Latitude": 28.92671,
      "Longitude": -81.221383,
      "OpenDate": ""
    },
    {
      "StationName": "City Hall Complex - 4",
      "StreetAddress": "2345 Providence Blvd",
      "Latitude": 28.926707,
      "Longitude": -81.221409,
      "OpenDate": ""
    },
    {
      "StationName": "Dr P Phillips Hospital - 3",
      "StreetAddress": "9401 Turkey Lake Rd",
      "Latitude": 28.427973,
      "Longitude": -81.480247,
      "OpenDate": ""
    },
    {
      "StationName": "Hale Activity Center - 2",
      "StreetAddress": "330 Douglas Ave",
      "Latitude": 28.003204,
      "Longitude": -82.788225,
      "OpenDate": ""
    },
    {
      "StationName": "Fine Arts Center - 2",
      "StreetAddress": "1143 Michigan Blvd",
      "Latitude": 28.037239,
      "Longitude": -82.774679,
      "OpenDate": ""
    },
    {
      "StationName": "Tavares Chamber of Commerce 2",
      "StreetAddress": "300 E Main Street",
      "Latitude": 28.802115,
      "Longitude": -81.725432,
      "OpenDate": ""
    },
    {
      "StationName": "City Hall - 2",
      "StreetAddress": "685 W Montrose Street",
      "Latitude": 28.554832,
      "Longitude": -81.766569,
      "OpenDate": ""
    },
    {
      "StationName": "City Hall - 3",
      "StreetAddress": "685 W Montrose Street",
      "Latitude": 28.554832,
      "Longitude": -81.76654,
      "OpenDate": ""
    },
    {
      "StationName": "City Hall - 4",
      "StreetAddress": "685 W Montrose Street",
      "Latitude": 28.554832,
      "Longitude": -81.766508,
      "OpenDate": ""
    },
    {
      "StationName": "Circuit Court North - 2",
      "StreetAddress": "29582 US Highway 19 N",
      "Latitude": 28.041332,
      "Longitude": -82.739967,
      "OpenDate": ""
    },
    {
      "StationName": "776 6th Ave S - 2",
      "StreetAddress": "776 6th Ave S",
      "Latitude": 27.764305,
      "Longitude": -82.644492,
      "OpenDate": ""
    },
    {
      "StationName": "Palm Harbor Library - 2",
      "StreetAddress": "2330 Nebraska Ave",
      "Latitude": 28.078122,
      "Longitude": -82.742759,
      "OpenDate": ""
    },
    {
      "StationName": "Orlando - 2",
      "StreetAddress": "9301 Summit Centre Way",
      "Latitude": 28.639504,
      "Longitude": -81.411498,
      "OpenDate": ""
    },
    {
      "StationName": "Orlando - 3",
      "StreetAddress": "9301 Summit Centre Way",
      "Latitude": 28.639479,
      "Longitude": -81.411498,
      "OpenDate": ""
    },
    {
      "StationName": "Orlando - 4",
      "StreetAddress": "9301 Summit Centre Way",
      "Latitude": 28.639454,
      "Longitude": -81.411498,
      "OpenDate": ""
    },
    {
      "StationName": "W Orange Trail - 2",
      "StreetAddress": "220 N Tubb Street",
      "Latitude": 28.55733,
      "Longitude": -81.627986,
      "OpenDate": ""
    },
    {
      "StationName": "Dunedin City Hall - 2",
      "StreetAddress": "542 Main Street",
      "Latitude": 28.013026,
      "Longitude": -82.78571,
      "OpenDate": ""
    },
    {
      "StationName": "Dunedin City Hall - 3",
      "StreetAddress": "542 Main Street",
      "Latitude": 28.013026,
      "Longitude": -82.78568,
      "OpenDate": ""
    },
    {
      "StationName": "Dunedin City Hall - 4",
      "StreetAddress": "542 Main Street",
      "Latitude": 28.013026,
      "Longitude": -82.78565,
      "OpenDate": ""
    },
    {
      "StationName": "IAAPA - 2",
      "StreetAddress": "4155 Taft Vineland Rd",
      "Latitude": 28.416302,
      "Longitude": -81.427736,
      "OpenDate": ""
    },
    {
      "StationName": "IAAPA - 3",
      "StreetAddress": "4155 Taft Vineland Rd",
      "Latitude": 28.41625,
      "Longitude": -81.427717,
      "OpenDate": ""
    },
    {
      "StationName": "IAAPA - 4",
      "StreetAddress": "4155 Taft Vineland Rd",
      "Latitude": 28.416229,
      "Longitude": -81.427771,
      "OpenDate": ""
    },
    {
      "StationName": "Inverness Govt Center - 2",
      "StreetAddress": "200 N Pine Ave",
      "Latitude": 28.838237,
      "Longitude": -82.331346,
      "OpenDate": ""
    },
    {
      "StationName": "St Pete Beach Suites - 2",
      "StreetAddress": "6801 Sunset Way",
      "Latitude": 27.737033,
      "Longitude": -82.75037,
      "OpenDate": ""
    },
    {
      "StationName": "St Pete Beach Suites - 3",
      "StreetAddress": "6801 Sunset Way",
      "Latitude": 27.737018,
      "Longitude": -82.750345,
      "OpenDate": ""
    },
    {
      "StationName": "St Pete Beach Suites - 4",
      "StreetAddress": "6801 Sunset Way",
      "Latitude": 27.737003,
      "Longitude": -82.75032,
      "OpenDate": ""
    },
    {
      "StationName": "Haines City Library - 2",
      "StreetAddress": "144 N 7th Street",
      "Latitude": 28.108642,
      "Longitude": -81.625869,
      "OpenDate": ""
    },
    {
      "StationName": "Fort Desoto Park - 2",
      "StreetAddress": "3500 Pinellas Bayway S",
      "Latitude": 27.613439,
      "Longitude": -82.735965,
      "OpenDate": ""
    },
    {
      "StationName": "Inverness Govt Center W - 2",
      "StreetAddress": "212 Main Street W",
      "Latitude": 28.836772,
      "Longitude": -82.331755,
      "OpenDate": ""
    },
    {
      "StationName": "Inverness Pine Ave Lot - 1",
      "StreetAddress": "200 N Pine Ave",
      "Latitude": 28.838114,
      "Longitude": -82.331335,
      "OpenDate": ""
    },
    {
      "StationName": "Inverness Pine Ave Lot - 2",
      "StreetAddress": "200 N Pine Ave",
      "Latitude": 28.838077,
      "Longitude": -82.331335,
      "OpenDate": ""
    },
    {
      "StationName": "Walton Ave Rec Center - 2",
      "StreetAddress": "400 S Walton Ave",
      "Latitude": 28.143071,
      "Longitude": -82.746669,
      "OpenDate": ""
    },
    {
      "StationName": "Bob Heilman Beachcomber - 2",
      "StreetAddress": "447 Mandalay Ave",
      "Latitude": 27.980148,
      "Longitude": -82.82669,
      "OpenDate": ""
    },
    {
      "StationName": "Indian Rocks City Hall - 2",
      "StreetAddress": "1507 Bay Palm Blvd",
      "Latitude": 27.897716,
      "Longitude": -82.846042,
      "OpenDate": ""
    },
    {
      "StationName": "Self-Help Credit Union - 2",
      "StreetAddress": "667 W Orange Blossom Trail",
      "Latitude": 28.681633,
      "Longitude": -81.523892,
      "OpenDate": ""
    },
    {
      "StationName": "Beach Parking Sand Key - 2",
      "StreetAddress": "1060 Gulf Blvd",
      "Latitude": 27.960573,
      "Longitude": -82.829639,
      "OpenDate": ""
    },
    {
      "StationName": "Omni CG Self Park - 2",
      "StreetAddress": "1500 Masters Blvd",
      "Latitude": 28.261644,
      "Longitude": -81.625946,
      "OpenDate": ""
    },
    {
      "StationName": "City of St Pete Pier - 2",
      "StreetAddress": "335 2nd Ave NE",
      "Latitude": 27.773355,
      "Longitude": -82.626369,
      "OpenDate": ""
    },
    {
      "StationName": "City of St Pete Pier - 3",
      "StreetAddress": "335 2nd Ave NE",
      "Latitude": 27.773258,
      "Longitude": -82.626423,
      "OpenDate": ""
    },
    {
      "StationName": "City of St Pete Pier - 4",
      "StreetAddress": "335 2nd Ave NE",
      "Latitude": 27.773258,
      "Longitude": -82.626369,
      "OpenDate": ""
    },
    {
      "StationName": "City of St Pete Pier - DCFC 1",
      "StreetAddress": "335 2nd Ave NE",
      "Latitude": 27.773355,
      "Longitude": -82.626315,
      "OpenDate": ""
    },
    {
      "StationName": "City of St Pete Pier - DCFC 2",
      "StreetAddress": "335 2nd Ave NE",
      "Latitude": 27.773355,
      "Longitude": -82.626261,
      "OpenDate": ""
    },
    {
      "StationName": "Omni CG Valet - 4",
      "StreetAddress": "1500 Masters Blvd",
      "Latitude": 28.260257,
      "Longitude": -81.627136,
      "OpenDate": ""
    },
    {
      "StationName": "Lakeshore Mall DCFC - 2",
      "StreetAddress": "901 US Highway 27 N",
      "Latitude": 27.488755,
      "Longitude": -81.487375,
      "OpenDate": ""
    },
    {
      "StationName": "Lakeshore Mall L2 - 1",
      "StreetAddress": "901 US Highway 27 N",
      "Latitude": 27.488715,
      "Longitude": -81.487402,
      "OpenDate": ""
    },
    {
      "StationName": "Lakeshore Mall L2 - 2",
      "StreetAddress": "901 US Highway 27 N",
      "Latitude": 27.488689,
      "Longitude": -81.487422,
      "OpenDate": ""
    },
    {
      "StationName": "Lakeshore Mall L2 - 3",
      "StreetAddress": "901 US Highway 27 N",
      "Latitude": 27.488667,
      "Longitude": -81.487438,
      "OpenDate": ""
    },
    {
      "StationName": "Lakeshore Mall L2 - 4",
      "StreetAddress": "901 US Highway 27 N",
      "Latitude": 27.488645,
      "Longitude": -81.487455,
      "OpenDate": ""
    },
    {
      "StationName": "Osceola County Courthouse - 3",
      "StreetAddress": "2 Courthouse Square",
      "Latitude": 28.289998,
      "Longitude": -81.409632,
      "OpenDate": ""
    },
    {
      "StationName": "Courthouse - DCFC",
      "StreetAddress": "2 Courthouse Square",
      "Latitude": 28.289969,
      "Longitude": -81.409665,
      "OpenDate": ""
    },
    {
      "StationName": "Cagans Crossing Library DCFC 2",
      "StreetAddress": "16729 Cagan Oaks",
      "Latitude": 28.356484,
      "Longitude": -81.678482,
      "OpenDate": ""
    },
    {
      "StationName": "Cagans Crossing Library L2 - 1",
      "StreetAddress": "16729 Cagan Oaks",
      "Latitude": 28.356507,
      "Longitude": -81.678493,
      "OpenDate": ""
    },
    {
      "StationName": "Cagans Crossing Library L2 - 2",
      "StreetAddress": "16729 Cagan Oaks",
      "Latitude": 28.356532,
      "Longitude": -81.678503,
      "OpenDate": ""
    },
    {
      "StationName": "Apopka City Hall - 2",
      "StreetAddress": "120 E Main Street",
      "Latitude": 28.672123,
      "Longitude": -81.508709,
      "OpenDate": ""
    },
    {
      "StationName": "Zephyrhills City Hall - 2",
      "StreetAddress": "5335 8th Street",
      "Latitude": 28.235143,
      "Longitude": -82.181296,
      "OpenDate": ""
    },
    {
      "StationName": "Zephyrhills City Hall - 3",
      "StreetAddress": "5335 8th Street",
      "Latitude": 28.235369,
      "Longitude": -82.181192,
      "OpenDate": ""
    },
    {
      "StationName": "Zephyrhills City Hall DCFC - 1",
      "StreetAddress": "5335 8th Street",
      "Latitude": 28.235228,
      "Longitude": -82.181299,
      "OpenDate": ""
    },
    {
      "StationName": "Zephyrhills City Hall DCFC - 2",
      "StreetAddress": "5335 8th Street",
      "Latitude": 28.235192,
      "Longitude": -82.18128,
      "OpenDate": ""
    },
    {
      "StationName": "Omni ChampionsGate DCFC - 1",
      "StreetAddress": "1500 Masters Blvd",
      "Latitude": 28.262657,
      "Longitude": -81.624985,
      "OpenDate": ""
    },
    {
      "StationName": "Omni ChampionsGate DCFC - 2",
      "StreetAddress": "1500 Masters Blvd",
      "Latitude": 28.262704,
      "Longitude": -81.624995,
      "OpenDate": ""
    },
    {
      "StationName": "Omni ChampionsGate DCFC - 3",
      "StreetAddress": "1500 Masters Blvd",
      "Latitude": 28.26275,
      "Longitude": -81.625003,
      "OpenDate": ""
    },
    {
      "StationName": "Perry L2 - 2",
      "StreetAddress": "110 N Washington Street",
      "Latitude": 30.117416,
      "Longitude": -83.580872,
      "OpenDate": ""
    },
    {
      "StationName": "EPRE - 2",
      "StreetAddress": "2435 US Highway 19",
      "Latitude": 28.19469,
      "Longitude": -82.741048,
      "OpenDate": ""
    },
    {
      "StationName": "Buccaneer Inn - 2",
      "StreetAddress": "160 W Gorrie Dr",
      "Latitude": 29.661072,
      "Longitude": -84.865321,
      "OpenDate": ""
    },
    {
      "StationName": "Hampton Inn Davenport - 2",
      "StreetAddress": "44117 US-27",
      "Latitude": 28.236377,
      "Longitude": -81.650087,
      "OpenDate": ""
    },
    {
      "StationName": "Hampton Inn Davenport DCFC - 1",
      "StreetAddress": "44117 US-27",
      "Latitude": 28.236391,
      "Longitude": -81.650058,
      "OpenDate": ""
    },
    {
      "StationName": "Hampton Inn Davenport DCFC - 2",
      "StreetAddress": "44117 US-27",
      "Latitude": 28.236407,
      "Longitude": -81.650027,
      "OpenDate": ""
    },
    {
      "StationName": "KUA HQ Public Parking - 1",
      "StreetAddress": "1701 W Carroll Street",
      "Latitude": 28.328274,
      "Longitude": -81.420544,
      "OpenDate": ""
    },
    {
      "StationName": "KARS Petro - 1",
      "StreetAddress": "590 US Highway 27",
      "Latitude": 27.601758,
      "Longitude": -81.513877,
      "OpenDate": ""
    },
    {
      "StationName": "KARS Petro - 2",
      "StreetAddress": "590 US Highway 27",
      "Latitude": 27.601728,
      "Longitude": -81.513877,
      "OpenDate": ""
    },
    {
      "StationName": "Mahaffey Theater - 2",
      "StreetAddress": "400 1st Street S",
      "Latitude": 27.765904,
      "Longitude": -82.633216,
      "OpenDate": ""
    },
    {
      "StationName": "Treasure Island City Hall - 2",
      "StreetAddress": "10451 Gulf Blvd",
      "Latitude": 27.766555,
      "Longitude": -82.767713,
      "OpenDate": ""
    },
    {
      "StationName": "Mahaffey Theater - 3",
      "StreetAddress": "400 1st Street S",
      "Latitude": 27.765784,
      "Longitude": -82.633092,
      "OpenDate": ""
    },
    {
      "StationName": "Mahaffey Theater - 4",
      "StreetAddress": "400 1st Street S",
      "Latitude": 27.765799,
      "Longitude": -82.633071,
      "OpenDate": ""
    },
    {
      "StationName": "Mahaffey Theater - 5",
      "StreetAddress": "400 1st Street S",
      "Latitude": 27.765812,
      "Longitude": -82.63305,
      "OpenDate": ""
    },
    {
      "StationName": "Mahaffey Theater - 6",
      "StreetAddress": "400 1st Street S",
      "Latitude": 27.765824,
      "Longitude": -82.633026,
      "OpenDate": ""
    },
    {
      "StationName": "Mahaffey Theater - 7",
      "StreetAddress": "400 1st Street S",
      "Latitude": 27.765837,
      "Longitude": -82.633005,
      "OpenDate": ""
    },
    {
      "StationName": "Crystal River VC DCFC - 1",
      "StreetAddress": "915 N Suncoast Blvd",
      "Latitude": 28.874954,
      "Longitude": -82.579351,
      "OpenDate": ""
    },
    {
      "StationName": "Crystal River VC DCFC - 2",
      "StreetAddress": "915 N Suncoast Blvd",
      "Latitude": 28.874924,
      "Longitude": -82.579351,
      "OpenDate": ""
    },
    {
      "StationName": "Crystal River VC L2 - 1",
      "StreetAddress": "915 N Suncoast Blvd",
      "Latitude": 28.874894,
      "Longitude": -82.579351,
      "OpenDate": ""
    },
    {
      "StationName": "Crystal River VC L2 - 2",
      "StreetAddress": "915 N Suncoast Blvd",
      "Latitude": 28.874864,
      "Longitude": -82.579351,
      "OpenDate": ""
    },
    {
      "StationName": "Monticello FL - 2",
      "StreetAddress": "175 S Cherry St",
      "Latitude": 30.544605,
      "Longitude": -83.869404,
      "OpenDate": ""
    },
    {
      "StationName": "Monticello FL - 3",
      "StreetAddress": "175 S Cherry St",
      "Latitude": 30.544575,
      "Longitude": -83.869404,
      "OpenDate": ""
    },
    {
      "StationName": "Monticello FL - 4",
      "StreetAddress": "175 S Cherry St",
      "Latitude": 30.544545,
      "Longitude": -83.869404,
      "OpenDate": ""
    },
    {
      "StationName": "Redington Shores - 1",
      "StreetAddress": "17425 Gulf Blvd",
      "Latitude": 27.822741,
      "Longitude": -82.826876,
      "OpenDate": ""
    },
    {
      "StationName": "Redington Shores - 2",
      "StreetAddress": "17425 Gulf Blvd",
      "Latitude": 27.822766,
      "Longitude": -82.826876,
      "OpenDate": ""
    },
    {
      "StationName": "DMS CCOC CEP",
      "StreetAddress": "4055 Esplanade Way",
      "Latitude": 30.388613,
      "Longitude": -84.230976,
      "OpenDate": ""
    },
    {
      "StationName": "PASCO COUNTY HISTORIC OFFICE",
      "StreetAddress": "37918 Meridian Ave",
      "Latitude": 28.363895,
      "Longitude": -82.188897,
      "OpenDate": ""
    },
    {
      "StationName": "PASCO COUNTY PASCO COURTHOUS",
      "StreetAddress": "38053 Live Oak Ave",
      "Latitude": 28.366756,
      "Longitude": -82.186,
      "OpenDate": ""
    },
    {
      "StationName": "TWIN BLDGS EV STATION 2",
      "StreetAddress": "Unnamed Road",
      "Latitude": 26.371708,
      "Longitude": -80.122362,
      "OpenDate": ""
    },
    {
      "StationName": "Osceola County Association of Realtors, Inc. station location",
      "StreetAddress": "Cross Prairie Parkway",
      "Latitude": 28.2562585,
      "Longitude": -81.3412127,
      "OpenDate": ""
    },
    {
      "StationName": "HS Beach Shop station location",
      "StreetAddress": "9128 Southeast Bridge Road",
      "Latitude": 27.06116361,
      "Longitude": -80.13102533,
      "OpenDate": ""
    },
    {
      "StationName": "FPL EVOLUTION SUNCOASTBANKDC3",
      "StreetAddress": "231 E Hickpochee Ave",
      "Latitude": 26.76121,
      "Longitude": -81.434707,
      "OpenDate": ""
    },
    {
      "StationName": "FPL EVOLUTION SUNCOASTBANKDC4",
      "StreetAddress": "21 S Lee St",
      "Latitude": 26.76104,
      "Longitude": -81.434872,
      "OpenDate": ""
    },
    {
      "StationName": "UNIV OF FLORIDA BASEBALL STAD",
      "StreetAddress": "2800 Hull Rd",
      "Latitude": 29.636355,
      "Longitude": -82.364469,
      "OpenDate": ""
    },
    {
      "StationName": "Gables 37 Grand",
      "StreetAddress": "987 Southwest 37th Avenue",
      "Latitude": 25.7625658,
      "Longitude": -80.2548182,
      "OpenDate": ""
    },
    {
      "StationName": "FPL EVOLUTION BOCARATONCITY7",
      "StreetAddress": "461 N Ocean Blvd",
      "Latitude": 26.354939,
      "Longitude": -80.070101,
      "OpenDate": ""
    },
    {
      "StationName": "FPL EVOLUTION BOCARATONCITY6",
      "StreetAddress": "1801 N Ocean Blvd",
      "Latitude": 26.365425,
      "Longitude": -80.069057,
      "OpenDate": ""
    },
    {
      "StationName": "LAKE WORTH BCH 12 N J ST",
      "StreetAddress": "12 N J St",
      "Latitude": 26.616259,
      "Longitude": -80.05601,
      "OpenDate": ""
    },
    {
      "StationName": "LAKE WORTH BCH GOLF COURSE",
      "StreetAddress": "1 7th AVE North",
      "Latitude": 26.623842,
      "Longitude": -80.0479,
      "OpenDate": ""
    },
    {
      "StationName": "COMMUNITY EV SURFACE PARKING",
      "StreetAddress": "8475 Baymeadows Rd E",
      "Latitude": 30.223628,
      "Longitude": -81.505446,
      "OpenDate": ""
    },
    {
      "StationName": "Soleste Twenty2",
      "StreetAddress": "2201 SW 67th Ave",
      "Latitude": 25.749836,
      "Longitude": -80.303537,
      "OpenDate": ""
    },
    {
      "StationName": "SARASOTA_USFFCU FLETCHER",
      "StreetAddress": "7037 E Fletcher Ave",
      "Latitude": 28.068415,
      "Longitude": -82.371719,
      "OpenDate": ""
    },
    {
      "StationName": "SARASOTA_USFFCU SARASOTA",
      "StreetAddress": "3487 Clark Rd",
      "Latitude": 27.269895,
      "Longitude": -82.499762,
      "OpenDate": ""
    },
    {
      "StationName": "FLORIDA HOUSE STATION 1",
      "StreetAddress": "4454 S Beneva Rd",
      "Latitude": 27.288536,
      "Longitude": -82.497911,
      "OpenDate": ""
    },
    {
      "StationName": "FPL EVOLUTION MIRAMAR 4",
      "StreetAddress": "16805 Miramar Pkwy",
      "Latitude": 25.978673,
      "Longitude": -80.36729,
      "OpenDate": ""
    },
    {
      "StationName": "FPL EVOLUTION MIRAMAR 3",
      "StreetAddress": "6900 Miramar Pkwy",
      "Latitude": 25.981942,
      "Longitude": -80.225619,
      "OpenDate": ""
    },
    {
      "StationName": "FLORIDA   TECH CHARGER 3",
      "StreetAddress": "2600 Country Club Rd",
      "Latitude": 28.069594,
      "Longitude": -80.625116,
      "OpenDate": ""
    },
    {
      "StationName": "OBE POWER ICON LAS OLAS 2",
      "StreetAddress": "590 East Las Olas Blvd",
      "Latitude": 26.118853,
      "Longitude": -80.137699,
      "OpenDate": ""
    },
    {
      "StationName": "DON CESAR HOTEL EV CHARGER 2",
      "StreetAddress": "3400 Gulf Blvd",
      "Latitude": 27.709349,
      "Longitude": -82.736722,
      "OpenDate": ""
    },
    {
      "StationName": "OUC COO CNL P3-01",
      "StreetAddress": "460 Boone Ave",
      "Latitude": 28.536886,
      "Longitude": -81.380557,
      "OpenDate": ""
    },
    {
      "StationName": "OUC COO CNL P4-01",
      "StreetAddress": "460 Boone Ave",
      "Latitude": 28.536834,
      "Longitude": -81.380604,
      "OpenDate": ""
    },
    {
      "StationName": "OUC COO CNL P3-02",
      "StreetAddress": "460 Boone Ave",
      "Latitude": 28.536846,
      "Longitude": -81.380432,
      "OpenDate": ""
    },
    {
      "StationName": "OUC OIA TA 03",
      "StreetAddress": "1 Jeff Fuqua Blvd",
      "Latitude": 28.432794,
      "Longitude": -81.309525,
      "OpenDate": ""
    },
    {
      "StationName": "OUC OIA TB 01",
      "StreetAddress": "1 Jeff Fuqua Blvd",
      "Latitude": 28.429469,
      "Longitude": -81.309499,
      "OpenDate": ""
    },
    {
      "StationName": "OUC OIA TB 03",
      "StreetAddress": "1 Jeff Fuqua Blvd",
      "Latitude": 28.429338,
      "Longitude": -81.309452,
      "OpenDate": ""
    },
    {
      "StationName": "OUC OIA TB 04",
      "StreetAddress": "1 Jeff Fuqua Blvd",
      "Latitude": 28.429365,
      "Longitude": -81.309466,
      "OpenDate": ""
    },
    {
      "StationName": "OUC OIA TA 04",
      "StreetAddress": "1 Jeff Fuqua Blvd",
      "Latitude": 28.432631,
      "Longitude": -81.309323,
      "OpenDate": ""
    },
    {
      "StationName": "OUC OIA TA 05",
      "StreetAddress": "1 Jeff Fuqua Blvd",
      "Latitude": 28.432817,
      "Longitude": -81.309524,
      "OpenDate": ""
    },
    {
      "StationName": "OUC OIA TB 02",
      "StreetAddress": "1 Jeff Fuqua Blvd",
      "Latitude": 28.429504,
      "Longitude": -81.309504,
      "OpenDate": ""
    },
    {
      "StationName": "OUC OIA TA 01",
      "StreetAddress": "1 Jeff Fuqua Blvd",
      "Latitude": 28.432771,
      "Longitude": -81.30967,
      "OpenDate": ""
    },
    {
      "StationName": "FSU GARAGE 6 UNIT 1",
      "StreetAddress": "414 Walker St",
      "Latitude": 30.437906,
      "Longitude": -84.299587,
      "OpenDate": ""
    },
    {
      "StationName": "BMW PALM BEACH CPF25NGW",
      "StreetAddress": "2901 Okeechobee Blvd",
      "Latitude": 26.70744,
      "Longitude": -80.09818,
      "OpenDate": ""
    },
    {
      "StationName": "GREEN MANGO GREEN MANGO 2",
      "StreetAddress": "1771 Airport Rd",
      "Latitude": 30.485305,
      "Longitude": -81.662096,
      "OpenDate": ""
    },
    {
      "StationName": "CAPITAL BMW CAPITAL BMW 01",
      "StreetAddress": "3701 W Tennessee St",
      "Latitude": 30.458683,
      "Longitude": -84.355572,
      "OpenDate": ""
    },
    {
      "StationName": "G1CHARGER TRUMP HOLLYWOOD",
      "StreetAddress": "2711 S Ocean Dr",
      "Latitude": 25.996027,
      "Longitude": -80.117353,
      "OpenDate": ""
    },
    {
      "StationName": "HILLS COUNTY COUNTY GARAGE 2",
      "StreetAddress": "710 E Jackson Street",
      "Latitude": 27.948631,
      "Longitude": -82.454094,
      "OpenDate": ""
    },
    {
      "StationName": "OUC VCC UNIT 02",
      "StreetAddress": "1800 S Kirkman Rd",
      "Latitude": 28.523206,
      "Longitude": -81.464349,
      "OpenDate": ""
    },
    {
      "StationName": "NCF HEISER BLDG 03",
      "StreetAddress": "500 College Drive",
      "Latitude": 27.385903,
      "Longitude": -82.559873,
      "OpenDate": ""
    },
    {
      "StationName": "NCF HEISER BLDG 02",
      "StreetAddress": "500 College Drive",
      "Latitude": 27.385915,
      "Longitude": -82.560134,
      "OpenDate": ""
    },
    {
      "StationName": "CAMDEN PIER DIS AER APTS 2ND FL",
      "StreetAddress": "330 3rd Street S",
      "Latitude": 27.767863,
      "Longitude": -82.636633,
      "OpenDate": ""
    },
    {
      "StationName": "SARASOTA PARK PALM AVE UNIT 1",
      "StreetAddress": "1287 North Palm Avenue",
      "Latitude": 27.336035,
      "Longitude": -82.543673,
      "OpenDate": ""
    },
    {
      "StationName": "SARASOTA PARK PALM AVE UNIT 3",
      "StreetAddress": "1287 N Palm Avenue",
      "Latitude": 27.335937,
      "Longitude": -82.543768,
      "OpenDate": ""
    },
    {
      "StationName": "HILLS COUNTY RP STEWART 2",
      "StreetAddress": "3629 Queen Palm Dr",
      "Latitude": 27.975476,
      "Longitude": -82.336168,
      "OpenDate": ""
    },
    {
      "StationName": "UNIV OF FLORIDA GARAGE 4 #4",
      "StreetAddress": "759 Newell Dr",
      "Latitude": 29.645548,
      "Longitude": -82.343155,
      "OpenDate": ""
    },
    {
      "StationName": "UNIV OF FLORIDA GARAGE 4 #2",
      "StreetAddress": "759 Newell Dr",
      "Latitude": 29.645579,
      "Longitude": -82.343152,
      "OpenDate": ""
    },
    {
      "StationName": "UNIV OF FLORIDA GARAGE 4 #1",
      "StreetAddress": "759 Newell Dr",
      "Latitude": 29.645579,
      "Longitude": -82.343205,
      "OpenDate": ""
    },
    {
      "StationName": "CITY BRADENTON JUDICIALGARAGE1",
      "StreetAddress": "615 12th St W",
      "Latitude": 27.493332,
      "Longitude": -82.573237,
      "OpenDate": ""
    },
    {
      "StationName": "OUC OUC OCCC 02",
      "StreetAddress": "9837 International Dr",
      "Latitude": 28.426549,
      "Longitude": -81.46399,
      "OpenDate": ""
    },
    {
      "StationName": "INTL PLAZA EV CHARGER 02",
      "StreetAddress": "2223 N Westshore Blvd",
      "Latitude": 27.966454,
      "Longitude": -82.520537,
      "OpenDate": ""
    },
    {
      "StationName": "INTL PLAZA EV CHARGER 04",
      "StreetAddress": "2223 N Westshore Blvd",
      "Latitude": 27.96646,
      "Longitude": -82.52041,
      "OpenDate": ""
    },
    {
      "StationName": "INTL PLAZA EV CHARGER 03",
      "StreetAddress": "2223 N Westshore Blvd",
      "Latitude": 27.966459,
      "Longitude": -82.520467,
      "OpenDate": ""
    },
    {
      "StationName": "OUC HARMONY UNIT 01",
      "StreetAddress": "7251 5 Oaks Dr",
      "Latitude": 28.191114,
      "Longitude": -81.145556,
      "OpenDate": ""
    },
    {
      "StationName": "OUC OUC RELIABLE 02",
      "StreetAddress": "100 W Anderson St",
      "Latitude": 28.535959,
      "Longitude": -81.379532,
      "OpenDate": ""
    },
    {
      "StationName": "OUC VCC UNIT 01",
      "StreetAddress": "1800 S Kirkman Rd",
      "Latitude": 28.523216,
      "Longitude": -81.464295,
      "OpenDate": ""
    },
    {
      "StationName": "OUC VCC UNIT 05",
      "StreetAddress": "1800 S Kirkman Rd",
      "Latitude": 28.518961,
      "Longitude": -81.465398,
      "OpenDate": ""
    },
    {
      "StationName": "UNIV OF FLORIDA GARAGE 7 UNIT 2",
      "StreetAddress": "226 Gale Lemerand Dr",
      "Latitude": 29.650728,
      "Longitude": -82.350981,
      "OpenDate": ""
    },
    {
      "StationName": "CITY OF ORLANDO GEICO UNIT 02",
      "StreetAddress": "400 W South St",
      "Latitude": 28.537663,
      "Longitude": -81.384246,
      "OpenDate": ""
    },
    {
      "StationName": "OUC AVALON PARK 2",
      "StreetAddress": "3680 Avalon Park E Blvd",
      "Latitude": 28.511715,
      "Longitude": -81.154662,
      "OpenDate": ""
    },
    {
      "StationName": "OUC AVALON PARK 3",
      "StreetAddress": "3680 Avalon Park E Blvd",
      "Latitude": 28.511815,
      "Longitude": -81.154492,
      "OpenDate": ""
    },
    {
      "StationName": "WHOLE FOODS APS STATION 1",
      "StreetAddress": "305 E Altamonte Dr 1000",
      "Latitude": 28.664081,
      "Longitude": -81.380961,
      "OpenDate": ""
    },
    {
      "StationName": "OUC COO JEFF 01",
      "StreetAddress": "62 W Washington St",
      "Latitude": 28.543732,
      "Longitude": -81.380461,
      "OpenDate": ""
    },
    {
      "StationName": "OUC OSC UNIT 2",
      "StreetAddress": "800 E Princeton St",
      "Latitude": 28.571065,
      "Longitude": -81.368019,
      "OpenDate": ""
    },
    {
      "StationName": "ALLABOARDFLORID FT LAUDERDALE 2",
      "StreetAddress": "320 NW 2nd St",
      "Latitude": 26.123863,
      "Longitude": -80.146955,
      "OpenDate": ""
    },
    {
      "StationName": "ALLABOARDFLORID FT LAUDERDALE 1",
      "StreetAddress": "320 NW 2nd St",
      "Latitude": 26.12382,
      "Longitude": -80.147022,
      "OpenDate": ""
    },
    {
      "StationName": "ANCORA APTS EV CHARGER 03",
      "StreetAddress": "11581 International Dr",
      "Latitude": 28.396222,
      "Longitude": -81.462979,
      "OpenDate": ""
    },
    {
      "StationName": "ANCORA APTS EV CHARGER 02",
      "StreetAddress": "11581 International Dr",
      "Latitude": 28.396146,
      "Longitude": -81.462839,
      "OpenDate": ""
    },
    {
      "StationName": "OBE POWER ROYAL CARIB 2",
      "StreetAddress": "1040 Caribbean Way",
      "Latitude": 25.776618,
      "Longitude": -80.179161,
      "OpenDate": ""
    },
    {
      "StationName": "OBE POWER ROYAL CARIB 3",
      "StreetAddress": "1040 Caribbean Way",
      "Latitude": 25.776599,
      "Longitude": -80.179106,
      "OpenDate": ""
    },
    {
      "StationName": "MUSEUM STATIONS MUSEUM ST4",
      "StreetAddress": "90 NE 41st St",
      "Latitude": 25.813962,
      "Longitude": -80.193601,
      "OpenDate": ""
    },
    {
      "StationName": "MUSEUM STATIONS MUSEUM ST5",
      "StreetAddress": "90 NE 41st St",
      "Latitude": 25.813952,
      "Longitude": -80.193588,
      "OpenDate": ""
    },
    {
      "StationName": "MUSEUM STATIONS MUSEUM ST1",
      "StreetAddress": "90 NE 41st St",
      "Latitude": 25.813894,
      "Longitude": -80.193612,
      "OpenDate": ""
    },
    {
      "StationName": "MUSEUM STATIONS MUSEUM ST2",
      "StreetAddress": "90 NE 41st St",
      "Latitude": 25.813913,
      "Longitude": -80.193591,
      "OpenDate": ""
    },
    {
      "StationName": "MIAMI-DADE DOLPHIN PR DUAL",
      "StreetAddress": "11897 NW 12th St",
      "Latitude": 25.783217,
      "Longitude": -80.389385,
      "OpenDate": ""
    },
    {
      "StationName": "MIAMI-DADE DOLPHIN SINGLE2",
      "StreetAddress": "11897 NW 12th St",
      "Latitude": 25.783331,
      "Longitude": -80.389907,
      "OpenDate": ""
    },
    {
      "StationName": "ROTO SOUTH TOWER 02",
      "StreetAddress": "6001 N Ocean Drive",
      "Latitude": 26.051492,
      "Longitude": -80.113251,
      "OpenDate": ""
    },
    {
      "StationName": "THE GREEN @ LWR WINNDIXIE 1",
      "StreetAddress": "11525 E State Rd 70",
      "Latitude": 27.433662,
      "Longitude": -82.427331,
      "OpenDate": ""
    },
    {
      "StationName": "THE GREEN @ LWR LA FITNESS 1",
      "StreetAddress": "11513 FL-70",
      "Latitude": 27.43369,
      "Longitude": -82.424818,
      "OpenDate": ""
    },
    {
      "StationName": "OBE POWER MYSTIC POINTE 2",
      "StreetAddress": "3560 Mystic Pointe Dr",
      "Latitude": 25.953307,
      "Longitude": -80.128856,
      "OpenDate": ""
    },
    {
      "StationName": "WINTER GARDEN BOYD GARAGE 2",
      "StreetAddress": "160 S Boyd St",
      "Latitude": 28.564504,
      "Longitude": -81.587078,
      "OpenDate": ""
    },
    {
      "StationName": "CITY OF TAMPA POE GARAGE 1",
      "StreetAddress": "120 N Ashley Dr",
      "Latitude": 27.950253,
      "Longitude": -82.462024,
      "OpenDate": ""
    },
    {
      "StationName": "ALLABOARDFLORID WPB 4",
      "StreetAddress": "591 Evernia St",
      "Latitude": 26.71176,
      "Longitude": -80.056673,
      "OpenDate": ""
    },
    {
      "StationName": "CITY OF TAMPA FT BROOKE 01",
      "StreetAddress": "Fort Brooke Parking Garage",
      "Latitude": 27.945993,
      "Longitude": -82.456955,
      "OpenDate": ""
    },
    {
      "StationName": "CITY OF TAMPA FT BROOKE 3",
      "StreetAddress": "Fort Brooke Parking Garage",
      "Latitude": 27.946129,
      "Longitude": -82.456764,
      "OpenDate": ""
    },
    {
      "StationName": "MASTER OFFICE HALLENDALE 2",
      "StreetAddress": "1850 S Ocean Dr",
      "Latitude": 25.984059,
      "Longitude": -80.118511,
      "OpenDate": ""
    },
    {
      "StationName": "OBE POWER ONE MIAMI 1",
      "StreetAddress": "325 S Biscayne Blvd",
      "Latitude": 25.771529,
      "Longitude": -80.186148,
      "OpenDate": ""
    },
    {
      "StationName": "ELAN ROSEMARY ELAN ROSEMARY 2",
      "StreetAddress": "710 N Lemon Ave",
      "Latitude": 27.342386,
      "Longitude": -82.540247,
      "OpenDate": ""
    },
    {
      "StationName": "R0177 STATION 01",
      "StreetAddress": "199 S Lake Destiny Dr",
      "Latitude": 28.616693,
      "Longitude": -81.387995,
      "OpenDate": ""
    },
    {
      "StationName": "R0177 SHOP 02",
      "StreetAddress": "199 S Lake Destiny Dr",
      "Latitude": 28.617283,
      "Longitude": -81.388233,
      "OpenDate": ""
    },
    {
      "StationName": "R0177 SHOP 01",
      "StreetAddress": "199 S Lake Destiny Dr",
      "Latitude": 28.61717,
      "Longitude": -81.387915,
      "OpenDate": ""
    },
    {
      "StationName": "USF CEDAR DR 02",
      "StreetAddress": "4103 USF Cedar Dr",
      "Latitude": 28.064011,
      "Longitude": -82.412431,
      "OpenDate": ""
    },
    {
      "StationName": "TOM BUSH BMW LEVEL3 FRONT",
      "StreetAddress": "9875 Atlantic Blvd",
      "Latitude": 30.322738,
      "Longitude": -81.542853,
      "OpenDate": ""
    },
    {
      "StationName": "TOM BUSH BMW BMW LVL2 FRONT",
      "StreetAddress": "9875 Atlantic Blvd",
      "Latitude": 30.323144,
      "Longitude": -81.542866,
      "OpenDate": ""
    },
    {
      "StationName": "OBE POWER 151 BISCAYNE BO",
      "StreetAddress": "15051 Royal Oak Ln",
      "Latitude": 25.914264,
      "Longitude": -80.152082,
      "OpenDate": ""
    },
    {
      "StationName": "OBE POWER NOVA LIBRARY BO",
      "StreetAddress": "5 SW 75th Ave",
      "Latitude": 26.081358,
      "Longitude": -80.243655,
      "OpenDate": ""
    },
    {
      "StationName": "SARASOTA PARK SARASOTA 1",
      "StreetAddress": "47 N Adams Dr",
      "Latitude": 27.319969,
      "Longitude": -82.576648,
      "OpenDate": ""
    },
    {
      "StationName": "GHON CHARGER STATION02",
      "StreetAddress": "3295 Pine Ridge Rd",
      "Latitude": 26.212709,
      "Longitude": -81.752257,
      "OpenDate": ""
    },
    {
      "StationName": "NCH STATION 2",
      "StreetAddress": "3100 SW 62nd Ave",
      "Latitude": 25.741451,
      "Longitude": -80.295018,
      "OpenDate": ""
    },
    {
      "StationName": "NCH STATION 1",
      "StreetAddress": "3100 SW 62nd Ave",
      "Latitude": 25.741453,
      "Longitude": -80.295025,
      "OpenDate": ""
    },
    {
      "StationName": "HYATT GRAND GRAND CYPRESS 2",
      "StreetAddress": "1 Grand Cypress Blvd",
      "Latitude": 28.382535,
      "Longitude": -81.509575,
      "OpenDate": ""
    },
    {
      "StationName": "REEDY CREEK GRAPEFRUIT 01",
      "StreetAddress": "1515 Buena Vista Dr",
      "Latitude": 28.369214,
      "Longitude": -81.513456,
      "OpenDate": ""
    },
    {
      "StationName": "JAA DAILY GARAGE",
      "StreetAddress": "2400 Yankee Clipper Dr",
      "Latitude": 30.491129,
      "Longitude": -81.68166,
      "OpenDate": ""
    },
    {
      "StationName": "JAA VALET LOT",
      "StreetAddress": "2400 Yankee Clipper Dr",
      "Latitude": 30.489964,
      "Longitude": -81.68177,
      "OpenDate": ""
    },
    {
      "StationName": "JAA SURFACE LOT 1",
      "StreetAddress": "2400 Yankee Clipper Dr",
      "Latitude": 30.490727,
      "Longitude": -81.680896,
      "OpenDate": ""
    },
    {
      "StationName": "HOLLYWOOD STUDIO 1",
      "StreetAddress": "351 S Studio Dr",
      "Latitude": 28.356845,
      "Longitude": -81.557128,
      "OpenDate": ""
    },
    {
      "StationName": "THE WHITNEY EV STATION 01",
      "StreetAddress": "120 NE 4th St",
      "Latitude": 26.125943,
      "Longitude": -80.141907,
      "OpenDate": ""
    },
    {
      "StationName": "CITYOFPALMETTO PALMETTO 2",
      "StreetAddress": "516 8th Ave W",
      "Latitude": 27.515775,
      "Longitude": -82.572724,
      "OpenDate": ""
    },
    {
      "StationName": "TOWER 10 VALET EV STATION 1",
      "StreetAddress": "8400 NW 53rd St",
      "Latitude": 25.819356,
      "Longitude": -80.334669,
      "OpenDate": ""
    },
    {
      "StationName": "OBE POWER BISCAYNE BEACH1",
      "StreetAddress": "2900 NE 7th Avenue",
      "Latitude": 25.804705,
      "Longitude": -80.1862,
      "OpenDate": ""
    },
    {
      "StationName": "SEAGLASS AT BB FIRST FLOOR",
      "StreetAddress": "4971 Bonita Bay Blvd",
      "Latitude": 26.362833,
      "Longitude": -81.834886,
      "OpenDate": ""
    },
    {
      "StationName": "FIELDS JAX DC FAST 02",
      "StreetAddress": "11217 Atlantic Blvd",
      "Latitude": 30.324831,
      "Longitude": -81.508358,
      "OpenDate": ""
    },
    {
      "StationName": "FIELDS JAX STATION 01",
      "StreetAddress": "11217 Atlantic Blvd",
      "Latitude": 30.32491,
      "Longitude": -81.508849,
      "OpenDate": ""
    },
    {
      "StationName": "SEMINOLEHD CT4021 STATION1",
      "StreetAddress": "620 Hickman Cir",
      "Latitude": 28.81825,
      "Longitude": -81.33204,
      "OpenDate": ""
    },
    {
      "StationName": "OBE POWER TURNBERRY E IN",
      "StreetAddress": "Turnberry Towers 19355 Turnberry Way",
      "Latitude": 25.95526,
      "Longitude": -80.12707,
      "OpenDate": ""
    },
    {
      "StationName": "OBE POWER ATLANTIC III GW",
      "StreetAddress": "21050 NE 38th Ave",
      "Latitude": 25.971416,
      "Longitude": -80.12511,
      "OpenDate": ""
    },
    {
      "StationName": "OBE POWER MPA MARLINS 3BG",
      "StreetAddress": "658 NW 14th Avenue",
      "Latitude": 25.779543,
      "Longitude": -80.21828,
      "OpenDate": ""
    },
    {
      "StationName": "RCS STATION 6",
      "StreetAddress": "6651 Gate Pkwy",
      "Latitude": 30.24775,
      "Longitude": -81.52045,
      "OpenDate": ""
    },
    {
      "StationName": "RCS STATION 5",
      "StreetAddress": "6651 Gate Pkwy",
      "Latitude": 30.247765,
      "Longitude": -81.52041,
      "OpenDate": ""
    },
    {
      "StationName": "RCS STATION 4",
      "StreetAddress": "6651 Gate Pkwy",
      "Latitude": 30.247833,
      "Longitude": -81.52053,
      "OpenDate": ""
    },
    {
      "StationName": "RCS STATION 3",
      "StreetAddress": "6651 Gate Pkwy",
      "Latitude": 30.247908,
      "Longitude": -81.52047,
      "OpenDate": ""
    },
    {
      "StationName": "OBE POWER PLAZA LAS OLAS1",
      "StreetAddress": "301 E Las Olas Blvd",
      "Latitude": 26.119864,
      "Longitude": -80.139595,
      "OpenDate": ""
    },
    {
      "StationName": "USF LOT 38F EVSE 02",
      "StreetAddress": "USF Banyan Circle Dr",
      "Latitude": 28.06632,
      "Longitude": -82.424446,
      "OpenDate": ""
    },
    {
      "StationName": "USF COLLINS EVSE 01",
      "StreetAddress": "12075 Leroy Collins Blvd",
      "Latitude": 28.061285,
      "Longitude": -82.4126,
      "OpenDate": ""
    },
    {
      "StationName": "USF BEARD GARAGE 04",
      "StreetAddress": "3800 USF Alumni Drive",
      "Latitude": 28.058704,
      "Longitude": -82.416794,
      "OpenDate": ""
    },
    {
      "StationName": "STADIUM ENCLAVE STATION 1",
      "StreetAddress": "901 Mosley St",
      "Latitude": 30.434179,
      "Longitude": -84.299437,
      "OpenDate": ""
    },
    {
      "StationName": "STADIUM ENCLAVE STATION 2",
      "StreetAddress": "901 Mosley St",
      "Latitude": 30.434219,
      "Longitude": -84.299468,
      "OpenDate": ""
    },
    {
      "StationName": "STADIUM ENCLAVE STATION 3",
      "StreetAddress": "901 Mosley St",
      "Latitude": 30.43425,
      "Longitude": -84.299489,
      "OpenDate": ""
    },
    {
      "StationName": "OBE POWER WYNWOOD GAR GW",
      "StreetAddress": "321 NW 26 Street",
      "Latitude": 25.80168,
      "Longitude": -80.2018,
      "OpenDate": ""
    },
    {
      "StationName": "CORONADO SPRING CS2",
      "StreetAddress": "Avenida Del Centro",
      "Latitude": 28.362729,
      "Longitude": -81.571598,
      "OpenDate": ""
    },
    {
      "StationName": "CORONADO SPRING CS1",
      "StreetAddress": "Avenida Del Centro",
      "Latitude": 28.362816,
      "Longitude": -81.571812,
      "OpenDate": ""
    },
    {
      "StationName": "ALTON TOWN CENT EAST 2",
      "StreetAddress": "5320 Donald Ross Rd",
      "Latitude": 26.881377,
      "Longitude": -80.115694,
      "OpenDate": ""
    },
    {
      "StationName": "ALTON TOWN CENT WEST 2",
      "StreetAddress": "5380 Donald Ross Rd",
      "Latitude": 26.88153,
      "Longitude": -80.116739,
      "OpenDate": ""
    },
    {
      "StationName": "DECORUM STATION 6",
      "StreetAddress": "Palm Drive",
      "Latitude": 26.601599,
      "Longitude": -81.80687,
      "OpenDate": ""
    },
    {
      "StationName": "DECORUM STATION 2",
      "StreetAddress": "9993 Stella Palm Way",
      "Latitude": 26.599354,
      "Longitude": -81.80705,
      "OpenDate": ""
    },
    {
      "StationName": "LAKE SQUARE MAL LSM CHARGE 1",
      "StreetAddress": "10401 NW US Hwy 441",
      "Latitude": 28.824214,
      "Longitude": -81.784244,
      "OpenDate": ""
    },
    {
      "StationName": "801 HEATHROW EV CHARGER 01",
      "StreetAddress": "801 International Pkwy",
      "Latitude": 28.776344,
      "Longitude": -81.35669,
      "OpenDate": ""
    },
    {
      "StationName": "UNIV OF FLORIDA GARAGE 14 LVL 5",
      "StreetAddress": "1104 Gale Lemerand Dr Garage 14",
      "Latitude": 29.641672,
      "Longitude": -82.35083,
      "OpenDate": ""
    },
    {
      "StationName": "UNIV OF FLORIDA GARAGE 14 LVL 4",
      "StreetAddress": "1104 Gale Lemerand Dr Garage 14",
      "Latitude": 29.642097,
      "Longitude": -82.350769,
      "OpenDate": ""
    },
    {
      "StationName": "UNIV OF FLORIDA GARAGE 14 LVL 3",
      "StreetAddress": "1104 Gale Lemerand Dr Garage 14",
      "Latitude": 29.64187,
      "Longitude": -82.350724,
      "OpenDate": ""
    },
    {
      "StationName": "UNIV OF FLORIDA GARAGE 14 LVL 1",
      "StreetAddress": "1104 Gale Lemerand Dr Garage 14",
      "Latitude": 29.641751,
      "Longitude": -82.350801,
      "OpenDate": ""
    },
    {
      "StationName": "UNIV OF FLORIDA GARAGE 14 LVL 2",
      "StreetAddress": "1104 Gale Lemerand Dr Garage 14",
      "Latitude": 29.641789,
      "Longitude": -82.350768,
      "OpenDate": ""
    },
    {
      "StationName": "UPOINTE UP 2",
      "StreetAddress": "6325 Robert Ln",
      "Latitude": 26.064008,
      "Longitude": -80.230532,
      "OpenDate": ""
    },
    {
      "StationName": "UPOINTE UP 1",
      "StreetAddress": "6325 Robert Ln",
      "Latitude": 26.064001,
      "Longitude": -80.230464,
      "OpenDate": ""
    },
    {
      "StationName": "NORTH TOWER STATION 3",
      "StreetAddress": "100 NW 6 St",
      "Latitude": 25.779809,
      "Longitude": -80.1955,
      "OpenDate": ""
    },
    {
      "StationName": "NORTH TOWER STATION 4",
      "StreetAddress": "100 NW 6 St",
      "Latitude": 25.77978,
      "Longitude": -80.195532,
      "OpenDate": ""
    },
    {
      "StationName": "NORTH TOWER STATION 1",
      "StreetAddress": "100 NW 6 St",
      "Latitude": 25.779799,
      "Longitude": -80.195575,
      "OpenDate": ""
    },
    {
      "StationName": "NORTH TOWER STATION 2",
      "StreetAddress": "100 NW 6 St",
      "Latitude": 25.77979,
      "Longitude": -80.195521,
      "OpenDate": ""
    },
    {
      "StationName": "WHOLE FOODS MKT DADE ST2",
      "StreetAddress": "7856 SW 104th St",
      "Latitude": 25.673642,
      "Longitude": -80.322885,
      "OpenDate": ""
    },
    {
      "StationName": "CITY BRADENTON CITY CTR GAR 02",
      "StreetAddress": "1000 3rd Ave W",
      "Latitude": 27.497496,
      "Longitude": -82.57242,
      "OpenDate": ""
    },
    {
      "StationName": "SAGE ON PALMER STATION 1",
      "StreetAddress": "12521 Honore Ave",
      "Latitude": 27.198065,
      "Longitude": -82.44399,
      "OpenDate": ""
    },
    {
      "StationName": "SAGE ON PALMER STATION 5",
      "StreetAddress": "12521 Honore Ave",
      "Latitude": 27.197187,
      "Longitude": -82.44443,
      "OpenDate": ""
    },
    {
      "StationName": "SAGE ON PALMER STATION 3",
      "StreetAddress": "12501 Honore Ave",
      "Latitude": 27.197506,
      "Longitude": -82.44271,
      "OpenDate": ""
    },
    {
      "StationName": "JTA 1111 WFORSYTH 1",
      "StreetAddress": "1111 W Forsyth Street",
      "Latitude": 30.329967,
      "Longitude": -81.67324,
      "OpenDate": ""
    },
    {
      "StationName": "LT LOT STATIONS STATION 1",
      "StreetAddress": "14700 Terminal Blvd",
      "Latitude": 27.906241,
      "Longitude": -82.692053,
      "OpenDate": ""
    },
    {
      "StationName": "MARY STREET EVCS KR #5",
      "StreetAddress": "3310 Mary St",
      "Latitude": 25.72968,
      "Longitude": -80.239629,
      "OpenDate": ""
    },
    {
      "StationName": "MARY STREET EVCS KR #1",
      "StreetAddress": "3310 Mary St",
      "Latitude": 25.729703,
      "Longitude": -80.239587,
      "OpenDate": ""
    },
    {
      "StationName": "MARY STREET CS PUBLIC #1",
      "StreetAddress": "3310 Mary St",
      "Latitude": 25.729599,
      "Longitude": -80.239617,
      "OpenDate": ""
    },
    {
      "StationName": "MARY STREET EVCS KR #2",
      "StreetAddress": "3310 Mary St",
      "Latitude": 25.729683,
      "Longitude": -80.239591,
      "OpenDate": ""
    },
    {
      "StationName": "RIDGELAKE EV CHARGER 02",
      "StreetAddress": "5671 Mauna Loa Blvd",
      "Latitude": 27.302382,
      "Longitude": -82.44251,
      "OpenDate": ""
    },
    {
      "StationName": "RIDGELAKE EV CHARGER 01",
      "StreetAddress": "5671 Mauna Loa Blvd",
      "Latitude": 27.303026,
      "Longitude": -82.44265,
      "OpenDate": ""
    },
    {
      "StationName": "FROST SCIENCE MUSEUM EVSE 02",
      "StreetAddress": "1101 Biscayne Blvd",
      "Latitude": 25.785582,
      "Longitude": -80.187562,
      "OpenDate": ""
    },
    {
      "StationName": "OBE POWER CARNIVAL #1",
      "StreetAddress": "3655 NW 87th Avenue",
      "Latitude": 25.806904,
      "Longitude": -80.334972,
      "OpenDate": ""
    },
    {
      "StationName": "OBE POWER CARNIVAL #3",
      "StreetAddress": "3655 NW 87th Avenue",
      "Latitude": 25.806385,
      "Longitude": -80.334981,
      "OpenDate": ""
    },
    {
      "StationName": "OBE POWER CARNIVAL #2",
      "StreetAddress": "3655 NW 87th Avenue",
      "Latitude": 25.806663,
      "Longitude": -80.334967,
      "OpenDate": ""
    },
    {
      "StationName": "ORLANDO CBD CAPITAL EV1",
      "StreetAddress": "301 E Pine St",
      "Latitude": 28.541163,
      "Longitude": -81.374065,
      "OpenDate": ""
    },
    {
      "StationName": "EW & WW EASTWOODS EV1",
      "StreetAddress": "2405 Lucien Way",
      "Latitude": 28.623381,
      "Longitude": -81.393841,
      "OpenDate": ""
    },
    {
      "StationName": "CITYOFKISSIMMEE PARKING GARAGE4",
      "StreetAddress": "205 E Dakin Ave",
      "Latitude": 28.293841,
      "Longitude": -81.403418,
      "OpenDate": ""
    },
    {
      "StationName": "CITYOFKISSIMMEE PARKING GARAGE3",
      "StreetAddress": "205 E Dakin Ave",
      "Latitude": 28.293793,
      "Longitude": -81.403428,
      "OpenDate": ""
    },
    {
      "StationName": "NEW GARAGE STATION 2",
      "StreetAddress": "19501 Biscayne Blvd",
      "Latitude": 25.957954,
      "Longitude": -80.14652,
      "OpenDate": ""
    },
    {
      "StationName": "HERMITAGE HERMITAGE1",
      "StreetAddress": "151 7th St S",
      "Latitude": 27.769779,
      "Longitude": -82.643358,
      "OpenDate": ""
    },
    {
      "StationName": "BEACH POMPANO 1",
      "StreetAddress": "20-98 N Pompano Beach Blvd",
      "Latitude": 26.232477,
      "Longitude": -80.089756,
      "OpenDate": ""
    },
    {
      "StationName": "REEDY CREEK LIME GARAGE 1",
      "StreetAddress": "1652 Buena Vista Dr",
      "Latitude": 28.369981,
      "Longitude": -81.515846,
      "OpenDate": ""
    },
    {
      "StationName": "SUNTRUST STFC #1",
      "StreetAddress": "401 E Jackson St",
      "Latitude": 27.946985,
      "Longitude": -82.45622,
      "OpenDate": ""
    },
    {
      "StationName": "ANIMAL KINGDOM STATION 1A",
      "StreetAddress": "2901 Osceola Pkwy",
      "Latitude": 28.35213,
      "Longitude": -81.589202,
      "OpenDate": ""
    },
    {
      "StationName": "UNIV OF FLORIDA GARAGE 13 1",
      "StreetAddress": "1273 Gale Lemerand Dr",
      "Latitude": 29.640552,
      "Longitude": -82.349871,
      "OpenDate": ""
    },
    {
      "StationName": "CORAL GABLES G2-220 ARAGON2",
      "StreetAddress": "220 Aragon Ave",
      "Latitude": 25.750232,
      "Longitude": -80.259271,
      "OpenDate": ""
    },
    {
      "StationName": "WHOLE FOODS MKT CORAL GABLES1",
      "StreetAddress": "6701 Red Rd",
      "Latitude": 25.706384,
      "Longitude": -80.28472,
      "OpenDate": ""
    },
    {
      "StationName": "BAPTIST HEALTH BHM EVSE 03",
      "StreetAddress": "8900 N Kendall Drive",
      "Latitude": 25.684588,
      "Longitude": -80.337111,
      "OpenDate": ""
    },
    {
      "StationName": "BAPTIST HEALTH BHM EVSE 02",
      "StreetAddress": "8900 N Kendall Drive",
      "Latitude": 25.684508,
      "Longitude": -80.337111,
      "OpenDate": ""
    },
    {
      "StationName": "USF BEARD GARAGE 01",
      "StreetAddress": "3800 USF Beard Drive",
      "Latitude": 28.058963,
      "Longitude": -82.417354,
      "OpenDate": ""
    },
    {
      "StationName": "STATION 1 CHEVY SALES 1",
      "StreetAddress": "43520 US Hwy 19 N",
      "Latitude": 28.168091,
      "Longitude": -82.741728,
      "OpenDate": ""
    },
    {
      "StationName": "SARASOTA PARK EV 1",
      "StreetAddress": "1538 State St",
      "Latitude": 27.33547,
      "Longitude": -82.540212,
      "OpenDate": ""
    },
    {
      "StationName": "OBE POWER MPA COURTHOUS1",
      "StreetAddress": "40 NW 3rd St",
      "Latitude": 25.776877,
      "Longitude": -80.194385,
      "OpenDate": ""
    },
    {
      "StationName": "PARKWAY#1 PARKWAY#1",
      "StreetAddress": "3123 Arabian Nights Blvd",
      "Latitude": 28.342398,
      "Longitude": -81.531704,
      "OpenDate": ""
    },
    {
      "StationName": "TAUBMAN UTC WEST LOT 03",
      "StreetAddress": "81 N Cattlemen Rd",
      "Latitude": 27.384582,
      "Longitude": -82.45419,
      "OpenDate": ""
    },
    {
      "StationName": "TAUBMAN UTC WEST LOT 01",
      "StreetAddress": "81 N Cattlemen Rd",
      "Latitude": 27.384588,
      "Longitude": -82.454145,
      "OpenDate": ""
    },
    {
      "StationName": "TAUBMAN UTC WEST LOT 02",
      "StreetAddress": "81 N Cattlemen Rd",
      "Latitude": 27.38459,
      "Longitude": -82.454169,
      "OpenDate": ""
    },
    {
      "StationName": "BMW SARASOTA SATATION SA05",
      "StreetAddress": "5151 Clark Rd",
      "Latitude": 27.269826,
      "Longitude": -82.467219,
      "OpenDate": ""
    },
    {
      "StationName": "BMW SARASOTA STATION SA04",
      "StreetAddress": "5151 Clark Rd",
      "Latitude": 27.269947,
      "Longitude": -82.46723,
      "OpenDate": ""
    },
    {
      "StationName": "BMW SARASOTA STATION SA03",
      "StreetAddress": "5151 Clark Rd",
      "Latitude": 27.270066,
      "Longitude": -82.467232,
      "OpenDate": ""
    },
    {
      "StationName": "EPCOT STATION 1",
      "StreetAddress": "200 Epcot Center Dr",
      "Latitude": 28.377995,
      "Longitude": -81.549648,
      "OpenDate": ""
    },
    {
      "StationName": "ACH EV CHARGER 02",
      "StreetAddress": "400-498 8th Ave S",
      "Latitude": 27.762019,
      "Longitude": -82.639673,
      "OpenDate": ""
    },
    {
      "StationName": "REEDY CREEK ORANGE GAR. 2",
      "StreetAddress": "1590 E Buena Vista Dr",
      "Latitude": 28.368854,
      "Longitude": -81.519833,
      "OpenDate": ""
    },
    {
      "StationName": "HIGHWOODS LAKEPOINTE 2-1",
      "StreetAddress": "3109 W Doctor M.L.K. Jr Blvd",
      "Latitude": 27.983649,
      "Longitude": -82.49621,
      "OpenDate": ""
    },
    {
      "StationName": "JACKSONVILLE FL WATER STREET 01",
      "StreetAddress": "541 Water St",
      "Latitude": 30.326862,
      "Longitude": -81.665223,
      "OpenDate": ""
    },
    {
      "StationName": "VISTA BMW STATION 02",
      "StreetAddress": "4401 W Sample Rd",
      "Latitude": 26.274944,
      "Longitude": -80.184189,
      "OpenDate": ""
    },
    {
      "StationName": "LAUDERDALE BMW STATION 01",
      "StreetAddress": "14800 Sheridan St",
      "Latitude": 26.02864,
      "Longitude": -80.345651,
      "OpenDate": ""
    },
    {
      "StationName": "PASCO COUNTY DATA CENTER 03",
      "StreetAddress": "38425 McDonald St",
      "Latitude": 28.338318,
      "Longitude": -82.182544,
      "OpenDate": ""
    },
    {
      "StationName": "PASCO COUNTY DATA CENTER 01",
      "StreetAddress": "38425 McDonald St",
      "Latitude": 28.338289,
      "Longitude": -82.182686,
      "OpenDate": ""
    },
    {
      "StationName": "PASCO COUNTY DATA CENTER 02",
      "StreetAddress": "38425 McDonald St",
      "Latitude": 28.338299,
      "Longitude": -82.1826,
      "OpenDate": ""
    },
    {
      "StationName": "CITY OF ST PETE S CORE GAR LVL3",
      "StreetAddress": "101 1st Ave S",
      "Latitude": 27.770521,
      "Longitude": -82.635239,
      "OpenDate": ""
    },
    {
      "StationName": "CITY OF ORLANDO LEU GARDENS 01",
      "StreetAddress": "1920 N Forest Ave",
      "Latitude": 28.569895,
      "Longitude": -81.355927,
      "OpenDate": ""
    },
    {
      "StationName": "FPL EVOLUTION FORTDRUM 3",
      "StreetAddress": "184 Florida's Turnpike",
      "Latitude": 27.600735,
      "Longitude": -80.822695,
      "OpenDate": ""
    },
    {
      "StationName": "FPL EVOLUTION FORTDRUM 4",
      "StreetAddress": "184 Florida's Turnpike",
      "Latitude": 27.600703,
      "Longitude": -80.822672,
      "OpenDate": ""
    },
    {
      "StationName": "FPL EVOLUTION FORTDRUM 6",
      "StreetAddress": "184 Florida's Turnpike",
      "Latitude": 27.600659,
      "Longitude": -80.822624,
      "OpenDate": ""
    },
    {
      "StationName": "FPL EVOLUTION FORTDRUM 5",
      "StreetAddress": "184 Florida's Turnpike",
      "Latitude": 27.600685,
      "Longitude": -80.822646,
      "OpenDate": ""
    },
    {
      "StationName": "FPL EVOLUTION FORTDRUM 1",
      "StreetAddress": "184 Florida's Turnpike",
      "Latitude": 27.600795,
      "Longitude": -80.822732,
      "OpenDate": ""
    },
    {
      "StationName": "OBE POWER PASEO RIV P2#5",
      "StreetAddress": "1350 S Dixie Hwy",
      "Latitude": 25.712542,
      "Longitude": -80.278285,
      "OpenDate": ""
    },
    {
      "StationName": "OBE POWER PASEO RIV P2#4",
      "StreetAddress": "1350 S Dixie Hwy",
      "Latitude": 25.712542,
      "Longitude": -80.278446,
      "OpenDate": ""
    },
    {
      "StationName": "OBE POWER PASEO RIV P1#7",
      "StreetAddress": "1350 S Dixie Hwy",
      "Latitude": 25.712417,
      "Longitude": -80.278103,
      "OpenDate": ""
    },
    {
      "StationName": "OBE POWER PASEO RIV P1#6",
      "StreetAddress": "1350 S Dixie Hwy",
      "Latitude": 25.712368,
      "Longitude": -80.278296,
      "OpenDate": ""
    },
    {
      "StationName": "OBE POWER PASEO RIV P3#2",
      "StreetAddress": "1350 S Dixie Hwy",
      "Latitude": 25.712783,
      "Longitude": -80.278506,
      "OpenDate": ""
    },
    {
      "StationName": "OBE POWER SOCIETY LA L4S",
      "StreetAddress": "301 SW 1st Ave",
      "Latitude": 26.119112,
      "Longitude": -80.144785,
      "OpenDate": ""
    },
    {
      "StationName": "OBE POWER SOCIETY LA L4N",
      "StreetAddress": "301 SW 1st Ave",
      "Latitude": 26.118946,
      "Longitude": -80.145065,
      "OpenDate": ""
    },
    {
      "StationName": "HARBOURW BLDG 2",
      "StreetAddress": "5342 S West Shore Blvd",
      "Latitude": 27.886672,
      "Longitude": -82.526819,
      "OpenDate": ""
    },
    {
      "StationName": "LAKE HOUSE ORL LAKE HOUSE #2",
      "StreetAddress": "7600 Majorca Pl",
      "Latitude": 28.452383,
      "Longitude": -81.478985,
      "OpenDate": ""
    },
    {
      "StationName": "GOVERNMENT CENT DUAL STATION",
      "StreetAddress": "3719 NW 97th Ave",
      "Latitude": 25.807295,
      "Longitude": -80.35154,
      "OpenDate": ""
    },
    {
      "StationName": "FPL EVOLUTION MIDTOWNPGA L2-2",
      "StreetAddress": "4801 PGA Boulevard",
      "Latitude": 26.839767,
      "Longitude": -80.108209,
      "OpenDate": ""
    },
    {
      "StationName": "FPL EVOLUTION MIDTOWN PGA DC2",
      "StreetAddress": "4801 PGA Boulevard",
      "Latitude": 26.839761,
      "Longitude": -80.108657,
      "OpenDate": ""
    },
    {
      "StationName": "FPL EVOLUTION MIDTOWN PGA DC3",
      "StreetAddress": "4801 PGA Boulevard",
      "Latitude": 26.839704,
      "Longitude": -80.108678,
      "OpenDate": ""
    },
    {
      "StationName": "FPL EVOLUTION MIDTOWNPGA L2-1",
      "StreetAddress": "4801 PGA Boulevard",
      "Latitude": 26.839677,
      "Longitude": -80.108191,
      "OpenDate": ""
    },
    {
      "StationName": "FPL EVOLUTION MIDTOWN PGA DC1",
      "StreetAddress": "4801 PGA Boulevard",
      "Latitude": 26.839739,
      "Longitude": -80.108673,
      "OpenDate": ""
    },
    {
      "StationName": "OBE POWER JACKSON MH RIGH",
      "StreetAddress": "1611 NW 12th Avenue",
      "Latitude": 25.789358,
      "Longitude": -80.21349,
      "OpenDate": ""
    },
    {
      "StationName": "FPL ST LUCIE 02",
      "StreetAddress": "6501 S Ocean Dr",
      "Latitude": 27.347721,
      "Longitude": -80.24295,
      "OpenDate": ""
    },
    {
      "StationName": "AHS CHARGE CELEBRATION 1",
      "StreetAddress": "380 Celebration Pl",
      "Latitude": 28.327514,
      "Longitude": -81.538649,
      "OpenDate": ""
    },
    {
      "StationName": "AHS CHARGE CELEBRATION 2",
      "StreetAddress": "380 Celebration Pl",
      "Latitude": 28.327603,
      "Longitude": -81.538966,
      "OpenDate": ""
    },
    {
      "StationName": "AHS CHARGE CELEBRATION 4",
      "StreetAddress": "380 Celebration Pl",
      "Latitude": 28.327509,
      "Longitude": -81.538617,
      "OpenDate": ""
    },
    {
      "StationName": "CH PARKING CHARGER #1",
      "StreetAddress": "10500 N Military Trl",
      "Latitude": 26.83207,
      "Longitude": -80.10447,
      "OpenDate": ""
    },
    {
      "StationName": "CH PARKING CHARGER #4",
      "StreetAddress": "10500 N Military Trail",
      "Latitude": 26.832111,
      "Longitude": -80.10429,
      "OpenDate": ""
    },
    {
      "StationName": "CH PARKING CHARGER #3",
      "StreetAddress": "10500 N Military Trl",
      "Latitude": 26.832098,
      "Longitude": -80.10435,
      "OpenDate": ""
    },
    {
      "StationName": "DANIA POINTE S BEARING RED G",
      "StreetAddress": "1801 NW 1st St",
      "Latitude": 26.052868,
      "Longitude": -80.159151,
      "OpenDate": ""
    },
    {
      "StationName": "FOREST STATION 001",
      "StreetAddress": "800 Forest Street",
      "Latitude": 30.321504,
      "Longitude": -81.676947,
      "OpenDate": ""
    },
    {
      "StationName": "FOREST STATION 002",
      "StreetAddress": "800 Forest Street",
      "Latitude": 30.321369,
      "Longitude": -81.676871,
      "OpenDate": ""
    },
    {
      "StationName": "FOREST STATION 003",
      "StreetAddress": "800 Forest Street",
      "Latitude": 30.321426,
      "Longitude": -81.676769,
      "OpenDate": ""
    },
    {
      "StationName": "FPL EVOLUTION OKEECHOBEE DC3",
      "StreetAddress": "55 US-98",
      "Latitude": 27.24348,
      "Longitude": -80.829462,
      "OpenDate": ""
    },
    {
      "StationName": "FPL EVOLUTION OKEECHOBEE DC2",
      "StreetAddress": "55 US-98",
      "Latitude": 27.243403,
      "Longitude": -80.829465,
      "OpenDate": ""
    },
    {
      "StationName": "FPL EVOLUTION OKEECHOBEE DC1",
      "StreetAddress": "55 US-98",
      "Latitude": 27.2434,
      "Longitude": -80.829476,
      "OpenDate": ""
    },
    {
      "StationName": "OBE POWER RIVLANDING L4RI",
      "StreetAddress": "1480 NW N River Dr",
      "Latitude": 25.785378,
      "Longitude": -80.220146,
      "OpenDate": ""
    },
    {
      "StationName": "OBE POWER RIVLANDING L4LE",
      "StreetAddress": "1480 NW N River Dr",
      "Latitude": 25.785441,
      "Longitude": -80.220258,
      "OpenDate": ""
    },
    {
      "StationName": "OBE POWER RIVLANDING L3WM",
      "StreetAddress": "1480 NW N River Dr",
      "Latitude": 25.785324,
      "Longitude": -80.2203,
      "OpenDate": ""
    },
    {
      "StationName": "OBE POWER RIVLANDING L4CE",
      "StreetAddress": "1480 NW N River Dr",
      "Latitude": 25.785488,
      "Longitude": -80.22133,
      "OpenDate": ""
    },
    {
      "StationName": "FPL EVOLUTION CITY OF COCOA 2",
      "StreetAddress": "17 Oleander St",
      "Latitude": 28.355111,
      "Longitude": -80.726862,
      "OpenDate": ""
    },
    {
      "StationName": "OBE POWER THE MAIN L2WMGW",
      "StreetAddress": "201 E Las Olas Blvd",
      "Latitude": 26.119324,
      "Longitude": -80.14123,
      "OpenDate": ""
    },
    {
      "StationName": "OBE POWER THE MAIN L4WMGW",
      "StreetAddress": "201 E Las Olas Blvd",
      "Latitude": 26.118887,
      "Longitude": -80.14109,
      "OpenDate": ""
    },
    {
      "StationName": "OBE POWER THE MAIN L5WMGW",
      "StreetAddress": "201 E Las Olas Blvd",
      "Latitude": 26.118582,
      "Longitude": -80.14107,
      "OpenDate": ""
    },
    {
      "StationName": "TWIN BLDGS EV STATION 1",
      "StreetAddress": "Unnamed Road",
      "Latitude": 26.371713,
      "Longitude": -80.122363,
      "OpenDate": ""
    },
    {
      "StationName": "FPL EVOLUTION SUNCOASTBANKDC1",
      "StreetAddress": "231 E Hickpochee Ave",
      "Latitude": 26.760944,
      "Longitude": -81.434782,
      "OpenDate": ""
    },
    {
      "StationName": "FPL EVOLUTION SUNCOASTBANKDC2",
      "StreetAddress": "231 E Hickpochee Ave",
      "Latitude": 26.761044,
      "Longitude": -81.434783,
      "OpenDate": ""
    },
    {
      "StationName": "FPL EVOLUTION MIRAMAR 2",
      "StreetAddress": "16805 Miramar Pkwy",
      "Latitude": 25.978654,
      "Longitude": -80.367236,
      "OpenDate": ""
    },
    {
      "StationName": "FPL EVOLUTION MIRAMAR 1",
      "StreetAddress": "6900 Miramar Pkwy",
      "Latitude": 25.982071,
      "Longitude": -80.225497,
      "OpenDate": ""
    },
    {
      "StationName": "PARKLAND PUBLIC LIBRARY",
      "StreetAddress": "6600 N University Dr",
      "Latitude": 26.311643,
      "Longitude": -80.251119,
      "OpenDate": ""
    },
    {
      "StationName": "KOHLS 11250LAKE WALES",
      "StreetAddress": "2803 Ridge Way",
      "Latitude": 27.960944,
      "Longitude": -81.621842,
      "OpenDate": ""
    },
    {
      "StationName": "KOHLS 10955 LAKELAND",
      "StreetAddress": "1401 Town Center Dr NW",
      "Latitude": 28.001652,
      "Longitude": -81.978776,
      "OpenDate": ""
    },
    {
      "StationName": "PARK PALM BEACH 312 NORTHWOOD",
      "StreetAddress": "304 23rd St Parkland Apts",
      "Latitude": 26.734162,
      "Longitude": -80.052175,
      "OpenDate": ""
    },
    {
      "StationName": "MDFR STATION 1",
      "StreetAddress": "9300 NW 41st Street Training Center Parking L",
      "Latitude": 25.808856,
      "Longitude": -80.34953,
      "OpenDate": ""
    },
    {
      "StationName": "MDFR STATION 2",
      "StreetAddress": "9300 NW 41st Street Training Center Parking L",
      "Latitude": 25.808725,
      "Longitude": -80.349527,
      "OpenDate": ""
    },
    {
      "StationName": "MDFR STATION 3",
      "StreetAddress": "9300 NW 41st Street Training Center Parking L",
      "Latitude": 25.808778,
      "Longitude": -80.349507,
      "OpenDate": ""
    },
    {
      "StationName": "KOHLS 11327 PALM BAY",
      "StreetAddress": "205 Palm Bay Rd NE",
      "Latitude": 28.037017,
      "Longitude": -80.665855,
      "OpenDate": ""
    },
    {
      "StationName": "KOHLS 11229 LADY LAKE",
      "StreetAddress": "492 US-27",
      "Latitude": 28.930027,
      "Longitude": -81.931569,
      "OpenDate": ""
    },
    {
      "StationName": "LCEV LUXOR CLUB",
      "StreetAddress": "13800 Egrets Nest Dr",
      "Latitude": 30.12691,
      "Longitude": -81.521111,
      "OpenDate": ""
    },
    {
      "StationName": "H-D OF P-COLA DCFAST HOG",
      "StreetAddress": "6385 Pensacola Blvd",
      "Latitude": 30.479425,
      "Longitude": -87.25373,
      "OpenDate": ""
    },
    {
      "StationName": "BERTS BARRACUDA DCFAST HOG",
      "StreetAddress": "10525 49th St N",
      "Latitude": 27.867773,
      "Longitude": -82.69942,
      "OpenDate": ""
    },
    {
      "StationName": "PETERSON HD MIA DCFAST HOG",
      "StreetAddress": "19400 NW 2nd Ave",
      "Latitude": 25.953245,
      "Longitude": -80.206248,
      "OpenDate": ""
    },
    {
      "StationName": "ICON GARAGE ICONBRICKELL 2",
      "StreetAddress": "465 Brickell Ave",
      "Latitude": 25.768858,
      "Longitude": -80.18945,
      "OpenDate": ""
    },
    {
      "StationName": "ICON GARAGE ICONBRICKELL 1",
      "StreetAddress": "465 Brickell Ave",
      "Latitude": 25.769943,
      "Longitude": -80.18927,
      "OpenDate": ""
    },
    {
      "StationName": "BEACH CBURRIE CENTER",
      "StreetAddress": "2669 N Federal Hwy",
      "Latitude": 26.263842,
      "Longitude": -80.099734,
      "OpenDate": ""
    },
    {
      "StationName": "First National Bank of Pasco",
      "StreetAddress": "23613 FL-54",
      "Latitude": 28.186723,
      "Longitude": -82.425695,
      "OpenDate": "1/18/2021"
    },
    {
      "StationName": "USF Federal Credit Union",
      "StreetAddress": "20610 Bruce B Downs Blvd",
      "Latitude": 28.16843,
      "Longitude": -82.354456,
      "OpenDate": "1/18/2021"
    },
    {
      "StationName": "LA QUINTA ORL LA QUINTA EV1",
      "StreetAddress": "11551 International Dr",
      "Latitude": 28.397141,
      "Longitude": -81.461286,
      "OpenDate": ""
    },
    {
      "StationName": "BLACK WIDOW DCFAST HOG",
      "StreetAddress": "2224 El Jobean Rd",
      "Latitude": 27.000103,
      "Longitude": -82.180176,
      "OpenDate": ""
    },
    {
      "StationName": "FPL EVOLUTION MUTUALAMERICA3",
      "StreetAddress": "1150 Broken Sound Pkwy NW",
      "Latitude": 26.399529,
      "Longitude": -80.112856,
      "OpenDate": ""
    },
    {
      "StationName": "FPL EVOLUTION MUTUALAMERICA2",
      "StreetAddress": "1150 Broken Sound Pkwy NW",
      "Latitude": 26.399491,
      "Longitude": -80.112835,
      "OpenDate": ""
    },
    {
      "StationName": "FPL EVOLUTION MUTUALAMERICA1",
      "StreetAddress": "1150 Broken Sound Pkwy NW",
      "Latitude": 26.400023,
      "Longitude": -80.112566,
      "OpenDate": ""
    },
    {
      "StationName": "TARGET CORP TITUSVILLE 2",
      "StreetAddress": "3055 Columbia Blvd",
      "Latitude": 28.551545,
      "Longitude": -80.841265,
      "OpenDate": ""
    },
    {
      "StationName": "TARGET CORP TITUSVILLE 1",
      "StreetAddress": "3055 Columbia Blvd",
      "Latitude": 28.551259,
      "Longitude": -80.841411,
      "OpenDate": ""
    },
    {
      "StationName": "TARGET CORP DAYTONA BEACH2",
      "StreetAddress": "2380 W International Speedway Blvd",
      "Latitude": 29.183863,
      "Longitude": -81.080156,
      "OpenDate": ""
    },
    {
      "StationName": "TARGET CORP DAYTONA BEACH1",
      "StreetAddress": "2380 W International Speedway Blvd",
      "Latitude": 29.183881,
      "Longitude": -81.080188,
      "OpenDate": ""
    },
    {
      "StationName": "Niido Orlando",
      "StreetAddress": "3100 Domain Circle",
      "Latitude": 28.3414,
      "Longitude": -81.6134,
      "OpenDate": ""
    },
    {
      "StationName": "City Place Tower",
      "StreetAddress": "525 Okeechobee Blvd",
      "Latitude": 26.7066534,
      "Longitude": -80.0561775,
      "OpenDate": ""
    },
    {
      "StationName": "AVION PARK AVION PARK 1",
      "StreetAddress": "5308 Avion Park Dr",
      "Latitude": 27.956709,
      "Longitude": -82.532627,
      "OpenDate": ""
    },
    {
      "StationName": "McDonalds NSN 92641 Lakeland, FL",
      "StreetAddress": "3150 Kathleen Road",
      "Latitude": 28.081724,
      "Longitude": -81.995439,
      "OpenDate": ""
    },
    {
      "StationName": "FPL EVOLUTION BOCARATONCITY5",
      "StreetAddress": "3940 N Ocean Blvd",
      "Latitude": 26.3811,
      "Longitude": -80.068097,
      "OpenDate": ""
    },
    {
      "StationName": "PASCO COUNTY CITIZENS DR. 1",
      "StreetAddress": "2080 Citizens Dr",
      "Latitude": 28.268368,
      "Longitude": -82.671653,
      "OpenDate": ""
    },
    {
      "StationName": "PASCO COUNTY CITIZENS DR. 3",
      "StreetAddress": "2080 Citizens Dr",
      "Latitude": 28.268397,
      "Longitude": -82.671665,
      "OpenDate": ""
    },
    {
      "StationName": "FPL EVOLUTION GULFSTREAMPARK4",
      "StreetAddress": "600 Silks Run",
      "Latitude": 25.979551,
      "Longitude": -80.141373,
      "OpenDate": ""
    },
    {
      "StationName": "FPL EVOLUTION GULFSTREAMPARK1",
      "StreetAddress": "600 Silks Run",
      "Latitude": 25.979631,
      "Longitude": -80.141293,
      "OpenDate": ""
    },
    {
      "StationName": "FPL EVOLUTION GULFSTREAMPARK3",
      "StreetAddress": "600 Silks Run",
      "Latitude": 25.979631,
      "Longitude": -80.141229,
      "OpenDate": ""
    },
    {
      "StationName": "FPL EVOLUTION GULFSTREAMPARK2",
      "StreetAddress": "600 Silks Run",
      "Latitude": 25.979631,
      "Longitude": -80.141357,
      "OpenDate": ""
    },
    {
      "StationName": "FPL EVOLUTION GULFSTREAMPARK6",
      "StreetAddress": "600 Silks Run",
      "Latitude": 25.979621,
      "Longitude": -80.141261,
      "OpenDate": ""
    },
    {
      "StationName": "FPL EVOLUTION GULFSTREAMPARK5",
      "StreetAddress": "600 Silks Run",
      "Latitude": 25.979596,
      "Longitude": -80.141297,
      "OpenDate": ""
    },
    {
      "StationName": "Dickeyâ€™s Barbecue Pit - Tesla Supercharger",
      "StreetAddress": "2070 FL-71",
      "Latitude": 30.715974,
      "Longitude": -85.184261,
      "OpenDate": "2/1/2021"
    },
    {
      "StationName": "Wawa - Tesla Supercharger",
      "StreetAddress": "25155 Maren Way",
      "Latitude": 28.189803,
      "Longitude": -82.400027,
      "OpenDate": "2/1/2021"
    },
    {
      "StationName": "SIMON TAMPA OULETS 1",
      "StreetAddress": "2300 Grand Cypress Dr",
      "Latitude": 28.189781,
      "Longitude": -82.391169,
      "OpenDate": ""
    },
    {
      "StationName": "PASCO COUNTY CITIZENS DR. 2",
      "StreetAddress": "2080 Citizens Dr",
      "Latitude": 28.268371,
      "Longitude": -82.671659,
      "OpenDate": ""
    },
    {
      "StationName": "FPL AICO 2",
      "StreetAddress": "2950 Aico Rd",
      "Latitude": 27.484381,
      "Longitude": -80.4363,
      "OpenDate": ""
    },
    {
      "StationName": "FPL AICO 1",
      "StreetAddress": "2950 Aico Rd",
      "Latitude": 27.484323,
      "Longitude": -80.436337,
      "OpenDate": ""
    },
    {
      "StationName": "Publix #1549",
      "StreetAddress": "1105 E Twiggs St",
      "Latitude": 27.9521,
      "Longitude": -82.4487,
      "OpenDate": "8/29/2019"
    },
    {
      "StationName": "Publix #1701",
      "StreetAddress": "250 Pine Lake Dr",
      "Latitude": 30.110088,
      "Longitude": -81.41571,
      "OpenDate": "6/20/2020"
    },
    {
      "StationName": "Publix #1702",
      "StreetAddress": "2175 Sembler Dr",
      "Latitude": 28.188673,
      "Longitude": -82.55116,
      "OpenDate": "6/18/2020"
    },
    {
      "StationName": "Publix #1653",
      "StreetAddress": "4900 W Kennedy Blvd",
      "Latitude": 27.944344,
      "Longitude": -82.5267,
      "OpenDate": "10/31/2020"
    },
    {
      "StationName": "GROVE RESORT REGISTRATION",
      "StreetAddress": "14501 Grove Resort Ave",
      "Latitude": 28.361181,
      "Longitude": -81.651347,
      "OpenDate": ""
    },
    {
      "StationName": "The Edison Apartments",
      "StreetAddress": "5015 Mina Circle",
      "Latitude": 26.61689,
      "Longitude": -81.87041,
      "OpenDate": ""
    },
    {
      "StationName": "200 Broward Parking Garage",
      "StreetAddress": "200 East Broward Boulevard",
      "Latitude": 26.12194,
      "Longitude": -80.140891,
      "OpenDate": ""
    },
    {
      "StationName": "Legacy at Stirling",
      "StreetAddress": "7350 Stirling Road",
      "Latitude": 26.0458005,
      "Longitude": -80.2360012,
      "OpenDate": ""
    },
    {
      "StationName": "Legacy Villa Vicenza",
      "StreetAddress": "9392 Northwest 120th Street",
      "Latitude": 25.8820444,
      "Longitude": -80.3510624,
      "OpenDate": ""
    },
    {
      "StationName": "Legacy Harbour Key",
      "StreetAddress": "11033 Southwest 88th Street",
      "Latitude": 25.6868092,
      "Longitude": -80.3727429,
      "OpenDate": ""
    },
    {
      "StationName": "Legacy at the Palms",
      "StreetAddress": "10771 Southwest 88th Street",
      "Latitude": 25.6871434,
      "Longitude": -80.3671341,
      "OpenDate": ""
    },
    {
      "StationName": "Legacy at Nob Hill",
      "StreetAddress": "9856 Southwest 88th Street",
      "Latitude": 25.6865976,
      "Longitude": -80.3553511,
      "OpenDate": ""
    },
    {
      "StationName": "Legacy at Pinecrest",
      "StreetAddress": "6763 Southwest 88th Street",
      "Latitude": 25.6898914,
      "Longitude": -80.303975,
      "OpenDate": ""
    },
    {
      "StationName": "Legacy Lake Vista",
      "StreetAddress": "8440 Sherman Circle North",
      "Latitude": 25.991964,
      "Longitude": -80.2566356,
      "OpenDate": ""
    },
    {
      "StationName": "THORNTON PARK EV STATION 1",
      "StreetAddress": "622 E Washington St",
      "Latitude": 28.543107,
      "Longitude": -81.369078,
      "OpenDate": ""
    },
    {
      "StationName": "Perry DCFC - 1",
      "StreetAddress": "110 N Washington St",
      "Latitude": 30.117416,
      "Longitude": -83.580931,
      "OpenDate": ""
    },
    {
      "StationName": "Perry DCFC - 2",
      "StreetAddress": "110 N Washington Street",
      "Latitude": 30.117416,
      "Longitude": -83.58081,
      "OpenDate": ""
    },
    {
      "StationName": "AAA - Port Charlotte",
      "StreetAddress": "21229 Olean Blvd",
      "Latitude": 26.98688,
      "Longitude": -82.099451,
      "OpenDate": ""
    },
    {
      "StationName": "Turnball Park",
      "StreetAddress": "4941 Turnbull Dr",
      "Latitude": 28.483291,
      "Longitude": -81.31172,
      "OpenDate": "8/20/2020"
    },
    {
      "StationName": "Legacy Las Palmas",
      "StreetAddress": "3505 West 10th Avenue",
      "Latitude": 25.8535118,
      "Longitude": -80.3012448,
      "OpenDate": ""
    },
    {
      "StationName": "THORNTON PARK EV STATION 2",
      "StreetAddress": "622 E Washington St",
      "Latitude": 28.54307,
      "Longitude": -81.369199,
      "OpenDate": ""
    },
    {
      "StationName": "KUA - Epoch Calirosa",
      "StreetAddress": "2920 Flora Ridge Circle",
      "Latitude": 28.335254,
      "Longitude": -81.424872,
      "OpenDate": ""
    },
    {
      "StationName": "NOHO Holdings",
      "StreetAddress": "1001 N Howard Ave",
      "Latitude": 27.952136,
      "Longitude": -82.482887,
      "OpenDate": ""
    },
    {
      "StationName": "FPL EVOLUTION BOCARATONCITY8",
      "StreetAddress": "2500 NW 1st Ave",
      "Latitude": 26.372614,
      "Longitude": -80.085384,
      "OpenDate": ""
    },
    {
      "StationName": "FPL EVOLUTION BOCARATONCITY9",
      "StreetAddress": "2550 NW 1st Ave",
      "Latitude": 26.372719,
      "Longitude": -80.085466,
      "OpenDate": ""
    },
    {
      "StationName": "Redstone Plaza - Tesla Supercharger",
      "StreetAddress": "2670 S Ferdon Blvd",
      "Latitude": 30.733767,
      "Longitude": -86.566706,
      "OpenDate": "2/15/2021"
    },
    {
      "StationName": "OBE POWER THE MAIN L4BOGW",
      "StreetAddress": "201 E Las Olas Blvd",
      "Latitude": 26.119507,
      "Longitude": -80.14078,
      "OpenDate": ""
    },
    {
      "StationName": "OBE POWER THE MAIN L5BOGW",
      "StreetAddress": "201 E Las Olas Blvd",
      "Latitude": 26.119522,
      "Longitude": -80.14084,
      "OpenDate": ""
    },
    {
      "StationName": "Legacy at Oakwood Landing",
      "StreetAddress": "2705 Bosque Circle",
      "Latitude": 28.2133764,
      "Longitude": -80.6712441,
      "OpenDate": ""
    },
    {
      "StationName": "Executive Airport- Administration Office",
      "StreetAddress": "6000 NW 21st Ave",
      "Latitude": 26.2005419,
      "Longitude": -80.1714589,
      "OpenDate": ""
    },
    {
      "StationName": "Wawa - Tesla Supercharger",
      "StreetAddress": "3637 34th St S",
      "Latitude": 27.734547,
      "Longitude": -82.680259,
      "OpenDate": "2/22/2021"
    },
    {
      "StationName": "ESSEX LUXE STATION 2",
      "StreetAddress": "8080 Essex Point Circle",
      "Latitude": 28.438821,
      "Longitude": -81.458337,
      "OpenDate": ""
    },
    {
      "StationName": "ESSEX LUXE STATION 3",
      "StreetAddress": "8080 Essex Point Circle",
      "Latitude": 28.438816,
      "Longitude": -81.458139,
      "OpenDate": ""
    },
    {
      "StationName": "FERMANCHEVY EV STATION 1",
      "StreetAddress": "9751 E Adamo Dr",
      "Latitude": 27.947093,
      "Longitude": -82.343987,
      "OpenDate": ""
    },
    {
      "StationName": "The Village Center at Viera Blvd - Tesla Supercharger",
      "StreetAddress": "5410 Murrell Rd",
      "Latitude": 28.266997,
      "Longitude": -80.71851,
      "OpenDate": "3/1/2021"
    },
    {
      "StationName": "550 W Cypress Creek Rd",
      "StreetAddress": "550 W Cypress Creek Rd",
      "Latitude": 26.202066,
      "Longitude": -80.151687,
      "OpenDate": ""
    },
    {
      "StationName": "8450 GB1 S BUILDING #2",
      "StreetAddress": "N.W. 102 2nd Ave",
      "Latitude": 25.849771,
      "Longitude": -80.36303,
      "OpenDate": ""
    },
    {
      "StationName": "3RD FL PARKING ONE NETANYA",
      "StreetAddress": "323 Sunny Isles Blvd",
      "Latitude": 25.930225,
      "Longitude": -80.12617,
      "OpenDate": ""
    },
    {
      "StationName": "Pinecrest Gardens",
      "StreetAddress": "11000 Red Road",
      "Latitude": 25.66929,
      "Longitude": -80.285594,
      "OpenDate": ""
    },
    {
      "StationName": "L5 STATION EV STATION 1",
      "StreetAddress": "2100 S Ocean Ln",
      "Latitude": 26.096492,
      "Longitude": -80.106536,
      "OpenDate": ""
    },
    {
      "StationName": "Walmart 2789 (Boynton Beach, FL)",
      "StreetAddress": "3200 Old Boynton Beach Rd",
      "Latitude": 26.530328,
      "Longitude": -80.096691,
      "OpenDate": ""
    },
    {
      "StationName": "FPL EVOLUTION TCPALMS1",
      "StreetAddress": "760 NW Enterprise Dr",
      "Latitude": 27.337314,
      "Longitude": -80.411461,
      "OpenDate": ""
    },
    {
      "StationName": "FPL EVOLUTION TCPALMS2",
      "StreetAddress": "760 NW Enterprise Dr",
      "Latitude": 27.337323,
      "Longitude": -80.411547,
      "OpenDate": ""
    },
    {
      "StationName": "Wawa - Tesla Supercharger",
      "StreetAddress": "901 N Orlando Ave",
      "Latitude": 28.60508,
      "Longitude": -81.366334,
      "OpenDate": "3/15/2021"
    },
    {
      "StationName": "PROMENADE PLAZA PROMENADE",
      "StreetAddress": "9880 Alt A1A",
      "Latitude": 26.82154,
      "Longitude": -80.084656,
      "OpenDate": ""
    },
    {
      "StationName": "IRVING PLACE CT4021 DUALPORT",
      "StreetAddress": "6211 Memorial Hwy",
      "Latitude": 27.991403,
      "Longitude": -82.574832,
      "OpenDate": ""
    },
    {
      "StationName": "Poverello",
      "StreetAddress": "2056 North Dixie Highway",
      "Latitude": 26.1556474,
      "Longitude": -80.1321289,
      "OpenDate": ""
    },
    {
      "StationName": "The Landings at Pembroke Lakes Apartments",
      "StreetAddress": "10650 Washington Street",
      "Latitude": 25.9996715,
      "Longitude": -80.2910142,
      "OpenDate": ""
    },
    {
      "StationName": "GIVE KIDS THE CT4021 DUALPRT1",
      "StreetAddress": "210 S Bass Rd",
      "Latitude": 28.290528,
      "Longitude": -81.457398,
      "OpenDate": ""
    },
    {
      "StationName": "OBE POWER GRAHAM 6600",
      "StreetAddress": "6600 Main St",
      "Latitude": 25.91276,
      "Longitude": -80.307205,
      "OpenDate": ""
    },
    {
      "StationName": "Resort at Longboat Key Club",
      "StreetAddress": "220 Sands Point Road",
      "Latitude": 27.3307383,
      "Longitude": -82.5899148,
      "OpenDate": ""
    },
    {
      "StationName": "VW NORTH FAST CHARGE",
      "StreetAddress": "1050 Lee Rd",
      "Latitude": 28.605234,
      "Longitude": -81.397095,
      "OpenDate": ""
    },
    {
      "StationName": "The Bradley Wynwood",
      "StreetAddress": "51 NW 26th St",
      "Latitude": 25.801341,
      "Longitude": -80.195574,
      "OpenDate": ""
    },
    {
      "StationName": "United Data Technologies",
      "StreetAddress": "2900 Monarch Lakes Blvd",
      "Latitude": 25.98204,
      "Longitude": -80.336595,
      "OpenDate": ""
    },
    {
      "StationName": "GANOT PLAZA STATION #1",
      "StreetAddress": "4601 Sheridan St",
      "Latitude": 26.033337,
      "Longitude": -80.190962,
      "OpenDate": ""
    },
    {
      "StationName": "GANOT PLAZA STATION #2",
      "StreetAddress": "4601 Sheridan St",
      "Latitude": 26.033318,
      "Longitude": -80.190759,
      "OpenDate": ""
    },
    {
      "StationName": "GANOT PLAZA STATION #3",
      "StreetAddress": "4601 Sheridan St",
      "Latitude": 26.033327,
      "Longitude": -80.190877,
      "OpenDate": ""
    },
    {
      "StationName": "Audi Jacksonville",
      "StreetAddress": "11401 Atlantic Blvd",
      "Latitude": 30.324227,
      "Longitude": -81.504428,
      "OpenDate": ""
    },
    {
      "StationName": "FPL EVOLUTION PBG DISTRICT PK",
      "StreetAddress": "5070 117th Ct N",
      "Latitude": 26.847514,
      "Longitude": -80.109243,
      "OpenDate": ""
    },
    {
      "StationName": "FPL EVOLUTION PBG SANDHILL CR",
      "StreetAddress": "11401 Northlake Blvd",
      "Latitude": 26.818566,
      "Longitude": -80.218765,
      "OpenDate": ""
    },
    {
      "StationName": "FPL EVOLUTION PBG PARK-TENNIS",
      "StreetAddress": "5110 117th Ct N",
      "Latitude": 26.847437,
      "Longitude": -80.110786,
      "OpenDate": ""
    },
    {
      "StationName": "JAX METRO SHCU KENDALL",
      "StreetAddress": "9580 Hutchinson Park Dr",
      "Latitude": 30.338603,
      "Longitude": -81.548526,
      "OpenDate": ""
    },
    {
      "StationName": "FPL EVOLUTION HALLANDALE BCH2",
      "StreetAddress": "400 N Federal Hwy",
      "Latitude": 25.980835,
      "Longitude": -80.142581,
      "OpenDate": ""
    },
    {
      "StationName": "FPL EVOLUTION HALLANDALE BCH1",
      "StreetAddress": "400 N Federal Hwy",
      "Latitude": 25.980782,
      "Longitude": -80.142584,
      "OpenDate": ""
    },
    {
      "StationName": "Oakwood Plaza - North",
      "StreetAddress": "3800 Oakwood Blvd",
      "Latitude": 26.04438,
      "Longitude": -80.16126,
      "OpenDate": ""
    },
    {
      "StationName": "Best Western Inn Wakulla L2-1",
      "StreetAddress": "3292 Coastal Hwy",
      "Latitude": 30.111665,
      "Longitude": -84.376525,
      "OpenDate": ""
    },
    {
      "StationName": "Best Western Inn Wakulla L2-2",
      "StreetAddress": "3292 Coastal Hwy",
      "Latitude": 30.111679,
      "Longitude": -84.376553,
      "OpenDate": ""
    },
    {
      "StationName": "Best Western Inn Wakulla L2-3",
      "StreetAddress": "3292 Coastal Hwy",
      "Latitude": 30.111693,
      "Longitude": -84.376577,
      "OpenDate": ""
    },
    {
      "StationName": "Best Western Inn Wakulla L2-4",
      "StreetAddress": "3292 Coastal Hwy",
      "Latitude": 30.111707,
      "Longitude": -84.376604,
      "OpenDate": ""
    },
    {
      "StationName": "The Falls (Miami, FL)",
      "StreetAddress": "8888 SW 136th St",
      "Latitude": 25.646219,
      "Longitude": -80.338305,
      "OpenDate": ""
    },
    {
      "StationName": "FPL EVOLUTION DELRAYBEACH1",
      "StreetAddress": "201 W Atlantic Ave",
      "Latitude": 26.461898,
      "Longitude": -80.075567,
      "OpenDate": ""
    },
    {
      "StationName": "FPL EVOLUTION DELRAYBEACH2",
      "StreetAddress": "201 W Atlantic Ave",
      "Latitude": 26.46195,
      "Longitude": -80.07532,
      "OpenDate": ""
    },
    {
      "StationName": "Wildlight - Tesla Supercharger",
      "StreetAddress": "20 Homegrown Way",
      "Latitude": 30.624023,
      "Longitude": -81.637401,
      "OpenDate": "4/5/2021"
    },
    {
      "StationName": "Zimmerman Building",
      "StreetAddress": "6600 North Andrews Avenue\nParking Garage",
      "Latitude": 26.1240789,
      "Longitude": -80.1398882,
      "OpenDate": ""
    },
    {
      "StationName": "PALMETTO BUILDING B",
      "StreetAddress": "333 E Palmetto Park Rd",
      "Latitude": 26.350619,
      "Longitude": -80.079017,
      "OpenDate": ""
    },
    {
      "StationName": "OBE POWER IVORY 214 LEFT",
      "StreetAddress": "2820 NE 214th St",
      "Latitude": 25.973097,
      "Longitude": -80.144852,
      "OpenDate": ""
    },
    {
      "StationName": "OBE POWER IVORY 214 RIGHT",
      "StreetAddress": "2820 NE 214th St",
      "Latitude": 25.973025,
      "Longitude": -80.145081,
      "OpenDate": ""
    },
    {
      "StationName": "SEACOAST BANK MOUNT DORA",
      "StreetAddress": "18251 US-441",
      "Latitude": 28.824636,
      "Longitude": -81.65443,
      "OpenDate": ""
    },
    {
      "StationName": "Elysian",
      "StreetAddress": "65 Sentosa Dr",
      "Latitude": 30.0770262,
      "Longitude": -81.4852708,
      "OpenDate": ""
    },
    {
      "StationName": "John H Jackson Community Cente",
      "StreetAddress": "1002 W Carter Street",
      "Latitude": 28.533944,
      "Longitude": -81.393724,
      "OpenDate": ""
    },
    {
      "StationName": "Callahan Community Center",
      "StreetAddress": "101 N Parramore Ave",
      "Latitude": 28.544391,
      "Longitude": -81.388657,
      "OpenDate": ""
    },
    {
      "StationName": "Central Parking Garage",
      "StreetAddress": "53 W Central Blvd",
      "Latitude": 28.542317,
      "Longitude": -81.380406,
      "OpenDate": ""
    },
    {
      "StationName": "Code Enforcement",
      "StreetAddress": "224 George DeSalvia Way",
      "Latitude": 28.542809,
      "Longitude": -81.319153,
      "OpenDate": ""
    },
    {
      "StationName": "Northwest Community Center",
      "StreetAddress": "3955 WD Judge Dr",
      "Latitude": 28.560962,
      "Longitude": -81.428042,
      "OpenDate": ""
    },
    {
      "StationName": "Mennello Museum",
      "StreetAddress": "2733 S Ferncreek Ave",
      "Latitude": 28.511362,
      "Longitude": -81.359577,
      "OpenDate": ""
    },
    {
      "StationName": "Primrose Center",
      "StreetAddress": "2733 S Ferncreek Ave",
      "Latitude": 28.511449,
      "Longitude": -81.359439,
      "OpenDate": ""
    },
    {
      "StationName": "Beardall Senior Center",
      "StreetAddress": "800 Delaney Ave",
      "Latitude": 28.5317,
      "Longitude": -81.375514,
      "OpenDate": ""
    },
    {
      "StationName": "CITY OF OCOEE OCOEE CITY HALL",
      "StreetAddress": "150 N Lakeshore Dr",
      "Latitude": 28.57209,
      "Longitude": -81.543144,
      "OpenDate": ""
    },
    {
      "StationName": "LAKE WORTH BCH BEACH COMPLEX",
      "StreetAddress": "10 S Ocean Blvd",
      "Latitude": 26.613991,
      "Longitude": -80.037859,
      "OpenDate": ""
    },
    {
      "StationName": "Creative Village",
      "StreetAddress": "600 W Amelia Street",
      "Latitude": 28.548781,
      "Longitude": -81.386912,
      "OpenDate": ""
    },
    {
      "StationName": "FPL EVOLUTION COLONIAL SQ DC6",
      "StreetAddress": "7949 Dani Dr",
      "Latitude": 26.603457,
      "Longitude": -81.81008,
      "OpenDate": ""
    },
    {
      "StationName": "HOTEL MELBY EV STATION 2",
      "StreetAddress": "801 E Strawbridge Ave",
      "Latitude": 28.079129,
      "Longitude": -80.607512,
      "OpenDate": ""
    },
    {
      "StationName": "HOTEL MELBY EV STATION 1",
      "StreetAddress": "801 E Strawbridge Ave",
      "Latitude": 28.079124,
      "Longitude": -80.607523,
      "OpenDate": ""
    },
    {
      "StationName": "FPL EVOLUTION COLONIAL SQ DC5",
      "StreetAddress": "7949 Dani Dr",
      "Latitude": 26.603448,
      "Longitude": -81.810047,
      "OpenDate": ""
    },
    {
      "StationName": "FPL EVOLUTION COLONIAL SQ DC4",
      "StreetAddress": "7949 Dani Dr",
      "Latitude": 26.603438,
      "Longitude": -81.810037,
      "OpenDate": ""
    },
    {
      "StationName": "FPL EVOLUTION COLONIAL SQ DC3",
      "StreetAddress": "7949 Dani Dr",
      "Latitude": 26.603476,
      "Longitude": -81.810047,
      "OpenDate": ""
    },
    {
      "StationName": "FPL EVOLUTION COLONIAL SQ DC2",
      "StreetAddress": "7949 Dani Dr",
      "Latitude": 26.603457,
      "Longitude": -81.810005,
      "OpenDate": ""
    },
    {
      "StationName": "FPL EVOLUTION COLONIAL SQ DC1",
      "StreetAddress": "7949 Dani Dr",
      "Latitude": 26.603467,
      "Longitude": -81.810026,
      "OpenDate": ""
    },
    {
      "StationName": "Addison Pointe Apartments",
      "StreetAddress": "3515 Delaney Drive",
      "Latitude": 28.160372,
      "Longitude": -80.673946,
      "OpenDate": ""
    },
    {
      "StationName": "Auto Nation Building",
      "StreetAddress": "200 SW 1st Ave",
      "Latitude": 26.12023926,
      "Longitude": -80.14433289,
      "OpenDate": ""
    },
    {
      "StationName": "AAA - Palm Harbor",
      "StreetAddress": "32050 U.S. Hwy 19 North",
      "Latitude": 28.06307,
      "Longitude": -82.739468,
      "OpenDate": ""
    },
    {
      "StationName": "Orlando Operations Center",
      "StreetAddress": "110 George DeSalvia Way",
      "Latitude": 28.543968,
      "Longitude": -81.320709,
      "OpenDate": ""
    },
    {
      "StationName": "Englewood Neighborhood Center",
      "StreetAddress": "6123 La Costa Dr",
      "Latitude": 28.528776,
      "Longitude": -81.30172,
      "OpenDate": ""
    }
  ]
};


// create groups to add the markers
var EVGroup = L.featureGroup().addTo(map);
var EVGroup = [];

// use the L.geoJSON to convert the geojson into layers
L.geoJSON(json,{
	onEachFeature: function (StationName) {
  	// create a marker and add them to the correct group
  	if(StationName === "*"){
    	L.marker(layer.getLatLng())
          .bindPopup("<h2>" + StationName + "<h2> <hr> <h3>Address " + StreetAddress + "</h3>")
          .addTo(EVGroup);
    }
  }
})

L.control.layers(null, overlayMaps).addTo(map)
};