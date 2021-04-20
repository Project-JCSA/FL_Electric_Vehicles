# FL_Electric_Vehicles

## Project Members
* Altricia Latimer
* Christina Gangi
* JJ Williams
* Sam Azhari

## Project Summary
A survey of EV vehicles, charging stations in the State of Florida.
* we will be plotting charging stations locations on an interactive map, statewide and it could be zoomed by click down to the County.
* We will be counting the number of registered EV in the State of Florida, and we'll narrow it down also by County & Model of EV.


## Data Sources
* [Florida Electric Vehicle Registrations](https://www.atlasevhub.com/) - csv file
* [Charging Station Locations](https://developer.nrel.gov/docs/api-key/) - json api
* [County Boundaries](https://github.com/johan/world.geo.json/tree/master/countries/USA/FL) - github repo
* [Alternate County Boundaries](https://public.opendatasoft.com/explore/dataset/us-county-boundaries/table/?disjunctive.[…]junctive.state_name&sort=stusab&refine.state_name=Florida) - github repo

## Vision Board
![Vision of final page](https://github.com/Project-JCSA/FL_Electric_Vehicles/blob/main/Images/VisionBoard.jpg)

## Project Plan
1) Clean registration data in Python and load to a SQLite database
2) Use Java Script to build an interractive map (using the leaflet library)
3) We will also use plotly to build our interactive chart 
4) There will also be a Bar Chart (for registration by county) 
5) A Pie Chart will be also built for market share of variable EV models
6) We will build a website that will include all our findings and will host it localy (deploy it if needed)
