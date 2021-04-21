# FL_Electric_Vehicles

## Project Members
* Altricia Latimer
* Christina Gangi
* JJ Williams
* Sam Azhari

## Project Summary
Our project will look at why electric vehicle registrations have increased over the last 3 years. We are going to review  population, income, demographic, vehicle cost, charging stations access, and environmental data to see if any trends can be seen.  We will plot charging stations locations on a statewide interactive map that will zoom down to county level.  In addition, a bar chart of registrations by county and pie chart to display share of EV models. 

![image](https://user-images.githubusercontent.com/74847091/115482229-2d6f8780-a21c-11eb-9339-ad355290b7bf.png)



## Data Sources
* [Florida Electric Vehicle Registrations](https://www.atlasevhub.com/) - csv file
* [Charging Station Locations](https://developer.nrel.gov/docs/api-key/) - json api
* [County Boundaries](https://github.com/johan/world.geo.json/tree/master/countries/USA/FL) - github repo
* [Alternate County Boundaries](https://public.opendatasoft.com/explore/dataset/us-county-boundaries/table/?disjunctive.[…]junctive.state_name&sort=stusab&refine.state_name=Florida) - GeoJson

## Vision Board
![Vision of final page](https://github.com/Project-JCSA/FL_Electric_Vehicles/blob/main/Images/VisionBoard.jpg)

## Project Plan
1) Clean registration data in Python and load to a SQLite database
2) Use Java Script to build an interractive map (using the leaflet library)
3) We will also use plotly to build our interactive chart 
4) There will also be a Bar Chart (for registration by county) 
5) A Pie Chart will be also built for market share of variable EV models
6) We will build a website that will include all our findings and will host it localy (deploy it if needed)
