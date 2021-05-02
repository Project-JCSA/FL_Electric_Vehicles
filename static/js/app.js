function init(){
    
    let yearSelect = d3.select("#selYear");
    
    let countySelect = d3.select("#selCounty");
    
    let dataLink = "http://127.0.0.1:5000/data"
    let stationLink = "http://127.0.0.1:5000/stations"
    var countyBoundaries = "static/data/flo.geojson";


    getData(dataLink, stationLink, yearSelect, countySelect)
    // d3.json(dataLink).then(function(evData,err){
        
        
    //     if (err) throw err;
    //     console.log(evData)
    //     // Parse Data to make sure all are integers
    //     evData.forEach(function(data){
    //         data.population = parseInt(data.population);
    //         data.income = parseInt(data.income)
    //     });
    
    //     // // Get distinct Years from data
    //     let years = [... new Set(evData.map(d => d.year))];

    //     // // Append years to dropdown
    //     years.forEach(year => {
    //         yearSelect.append("option").attr("value", year).text(year);
    //     })

    //     // // Get distinct Counties from data
    //     let counties = [... new Set(evData.map(d => d.county))]
            
    //     // // Append counties to dropdown
    //     counties.forEach(county => {
    //         countySelect.append("option").attr("value", county).text(county);
    //     })

    //     // // Establish Year ID and County ID
    //     yearID = getIDS(yearSelect, countySelect)[0];
    //     countyID = getIDS(yearSelect, countySelect)[1];

    //     getData(evData, yearID, countyID)


    //     yearSelect.on("change", () => yearChanged(evData));
    //     countySelect.on("change", () => countyChanged(evData));
        
    
    // });
    
};

function getData(dataLink, stationLink, yearSelect, countySelect){
    // Promise.all(links.map(d => d3.json(d))).then((alldata) => {
    //     alldata.forEach(data => {
    //         // console.log(alldata)
    //       data.forEach(e => {
    //         var obj = {
    //           Title: dataDesc,
    //           Value: e
    //         }
    //         selectedData.push(obj);
    //       });
    //     });
    //   }).then(callback)

    //   Promise.all([
    //     csv('/data/stations.csv'),
    //     json('data/svg_data.json')
    //   ])
    //   .then(([stations, svg]) =>  {
    //     // Do your stuff. Content of both files is now available in stations and svg
    //   });

    Promise.all([
        fetch(dataLink),
        fetch(stationLink)
    ]).then(function (responses) {
        // Get a JSON object from each of the responses
        return Promise.all(responses.map(function (response) {
            return response.json();
        }));
        }).then(function (evData) {
            // Log the data to the console
            // You would do something with both sets of data here
           
            // // Get distinct Years from data
            let years = [... new Set(evData[0].map(d => d.year))];
            // // Append years to dropdown
            years.forEach(year => {
                yearSelect.append("option").attr("value", year).text(year);
            })

            // // Get distinct Counties from data
            let counties = [... new Set(evData[0].map(d => d.county))]
                
            // // Append counties to dropdown
            counties.forEach(county => {
                countySelect.append("option").attr("value", county).text(county);
            })

            // // Establish Year ID and County ID
            yearID = getIDS(yearSelect, countySelect)[0];
            countyID = getIDS(yearSelect, countySelect)[1];

            filterData(evData, yearID, countyID)


            yearSelect.on("change", () => yearChanged(evData));
            countySelect.on("change", () => countyChanged(evData));
        }).catch(function (error) {
        // if there's an error, log it
        console.log(error);
    });
};



function filterData(evData, yearID, countyID){

    let countyData = evData[0];
    let stationData = evData[1];

    // Filter and Sort Metadata
    
    let yearFilter = countyData.filter(d => d["year"] === yearID);

    // Establish variabls for charts
    let pieData = yearFilter.filter(d => d["county"] === countyID);
    
    let barData = Array.from(new Set(yearFilter.map(d => d.county)))
                            .map(county => {
                                return {
                                    year: yearFilter.find(d => d.county === county).year,
                                    county: county,
                                    registration: yearFilter.find(d => d.county === county).county_reg_count,
                                    population: yearFilter.find(d => d.county === county).population,
                                    income: yearFilter.find(d => d.county === county).income,
                                };
                            });
    let stationInfo = stationData.filter(d => d["year"] === yearID);      
    
    // let mapData = stations
    // let mapData = Array.from(new Set(stations.map(d => d.county)))
    //                         .map(county => {
    //                             return {
    //                                 year: stations.find(d => d.county === county).year,
    //                                 county: county,
    //                                 latitude: stations.find(d => d.county === county).latitude,
    //                                 longitude: stations.find(d => d.county === county).longitude,
    //                                 open_date: stations.find(d => d.county === county).open_date,
    //                                 station: stations.find(d => d.county === county).station,
    //                                 street_address: stations.find(d => d.county === county).street_address,
    //                             };
    //                         });
    // console.log(stationInfo)
    // console.log(barData)

    // Run initial charts
    barChart(barData, yearID)
    pieChart(pieData, countyID, yearID)
    map(stationInfo)
}

function getIDS(yearSelect, countySelect){

    // Establish Year ID and County ID
    let yearID = yearSelect.property("value");
    let countyID = countySelect.property("value");

    yearID = parseInt(yearID)

    return [yearID, countyID]

}

function yearChanged(evData){

    evData = evData
    let yearID = d3.select("#selYear").property("value");
    let countyID = d3.select("#selCounty").property("value");
    yearID = parseInt(yearID)
    filterData(evData, yearID, countyID)
    
}

function countyChanged(evData){
    evData = evData
    let yearID = d3.select("#selYear").property("value");
    let countyID = d3.select("#selCounty").property("value");
    yearID = parseInt(yearID)
    filterData(evData, yearID, countyID)
}
    
// function to change Y Axis Scale
function yScale(barData, chosenYAxis, height) {
    // create scales
    let yScale = d3.scaleLinear()
        .domain([0, d3.max(barData, d => d[chosenYAxis])])
        .range([height, 0]);
    
    return yScale;
    
}

// function to change Y Axis
function changeYAxes(newYScale, yAxis) {
    let leftAxis = d3.axisLeft(newYScale).ticks(10);
    
    yAxis.transition()
        .duration(500)
        .call(leftAxis);
    
    return yAxis;
}

function changeToolTip(chosenYAxis, barGroup) {

    let ylabel;

    if (chosenYAxis === "registration") {
        ylabel = "EV Registration";
    }
    else if(chosenYAxis === "population") {
        ylabel = "Population";
    }
    else {
        ylabel = "Income";
    }

    let toolTip = d3.tip()
        .attr("class", "tooltip")
        .offset([0, -20])
        .html(function(d) {
        return (`${d.year} ${d.county}<br>
            ${ylabel} ${d[chosenYAxis]}`);
        });

        var tip = d3.tip()
        .attr('class', 'd3-tip')
        .offset([-10, 0])
        .html(function(d) {
            return "<strong>Frequency:</strong> <span style='color:red'>" + d.frequency + "</span>";
        })

    barGroup.call(toolTip);

    // Create event listners on the bar for tooltip
    barGroup.on("mouseover", function(data){
        toolTip.show(data,this);
    })
    .on("mouseout", function(data,index){
        toolTip.hide(data);
    })


    

    return barGroup;
}

// function to change circles from Y Axis
function changeBar(barGroup, newYScale, chosenYAxis, height) {

    barGroup.transition()
        .duration(500)
        .attr("y", d => newYScale(d[chosenYAxis]))
        .attr("height", d => height - newYScale(d[chosenYAxis]))

    return barGroup;
    }

// Function to create barChart
function barChart(barData){
    //  let svgWidth = parseInt(d3.select('bar').style('width'), 10);
    // parseInt(d3.select('#my_dataviz').style('width'), 10)
    // let svgHeight = svgWidth / 3.236;
    // console.log(svgWidth)
    d3.selectAll("svg").remove()

    let svgWidth = 1100;
    let svgHeight = 400;

    var margin = {
        top:25,
        right:25,
        bottom:100,
        left:100
    };

    // Create an SVG wrapper, append an SVG group that will hold our chart,
    // and shift the latter by left and top margins.
    let svg = d3.select("#bar")
        .append("svg")
        .attr("width", svgWidth)
        .attr("height", svgHeight);
        // .attr("viewBox", `0 0 300 200`);

    

    // Append an SVG group
    let chartGroup = svg.append("g")
        .attr("transform", `translate(${margin.left}, ${margin.top})`);

    // Establish height and width
    let width = svgWidth - margin.left - margin.right;
    let height = svgHeight - margin.top - margin.bottom;


    // Initial Paramaters
    let chosenYAxis = "registration";

    // set xLinearScale
    // let xLinearScale = xScale(censusData, chosenXAxis);
    let xScale = d3.scaleBand()
        .domain(barData.map(d => d.county))
        .range([0,width])
        .padding(0.5)

    // set yLinearScale
    let yLinearScale = yScale(barData, chosenYAxis, height);
    // let yScale = d3.scaleLinear()
    //     .domain([0, d3.max(barData, d => d[chosenYAxis]) + 2])
    //     .range([height, 0]);

    
    // create initial axis
    let bottomAxis = d3.axisBottom(xScale);
    let leftAxis = d3.axisLeft(yLinearScale).ticks(10);

    // append x axis
    let xAxis = chartGroup.append("g")
        .classed("x-axis", true)
        .attr("transform", `translate(0,${height})`)
        .call(bottomAxis)
        .selectAll("text")  
        .style("text-anchor", "end")
        .attr("dx", "-.6em")
        .attr("dy", "-.2em")
        .attr("transform", "rotate(-65)");
            

    // append y axis
    let yAxis = chartGroup.append("g")
        .classed("y-axis", true)
        .attr("transform", `translate (0)`)
        .call(leftAxis);

    // Create code to build the bar chart using the barData.
    barGroup = chartGroup.selectAll(".bar")
        .data(barData)
        .enter()
        .append("rect")
        .classed("class", "bar")
        .attr("x", d => xScale(d.county))
        .attr("y", d => yLinearScale(d[chosenYAxis]))
        .attr("width", xScale.bandwidth())
        .attr("height", d => height - yLinearScale(d[chosenYAxis]))
        .attr("fill", "green");
        // .attr("x", (d, i) => i * (barWidth + barSpacing))
        // .attr("y", d => height - d.registration * scaleY);


    // Setup tooltips
    changeToolTip(chosenYAxis, barGroup)

    // Establish Y Labels
    let YaxisLabels = chartGroup.append("g")
    .attr("transform", `translate(${width - width}, ${height / 2})`);

    let registrationLabel = YaxisLabels.append("text")
        .attr("transform", "rotate(-90)")
        .attr("x", 0)
        .attr("y", -50)
        .attr("value", "registration")
        .classed("active", true)
        .text("EV Registrations")

    let populationLabel = YaxisLabels.append("text")
        .attr("transform", "rotate(-90)")
        .attr("x", 0)
        .attr("y", -70)
        .attr("value", "population")
        .classed("inactive", true)
        .text("Population")

    let incomeLabel = YaxisLabels.append("text")
        .attr("transform", "rotate(-90)")
        .attr("x", 0)
        .attr("y", -90)
        .attr("value", "income")
        .classed("inactive", true)
        .text("Household Income")

    

    // y axis labels event listener
    YaxisLabels.selectAll("text")
    .on("click", function(){

    // get value of selection
    let yvalue = d3.select(this).attr("value");
    if (yvalue !== chosenYAxis) {

    // replaces chosenYAxis with value
    chosenYAxis = yvalue;

    // updates Y scale for new data
    yLinearScale = yScale(barData, chosenYAxis, height);

    // updates y axis with transition
    yAxis = changeYAxes(yLinearScale, yAxis);

    // updates bar with new y values
    barGroup = changeBar(barGroup, yLinearScale, chosenYAxis, height);

    // updates tooltips with new info
    barGroup = changeToolTip(chosenYAxis, barGroup);

    // changes classes to change bold text
    if (chosenYAxis === "registration") {
        registrationLabel
            .classed("active", true)
            .classed("inactive", false);
        populationLabel
            .classed("active", false)
            .classed("inactive", true);
        incomeLabel
            .classed("active", false)
            .classed("inactive", true);
    }
    else if (chosenYAxis === "population") {
        registrationLabel
            .classed("active", false)
            .classed("inactive", true);
        populationLabel
            .classed("active", true)
            .classed("inactive", false);
        incomeLabel
            .classed("active", false)
            .classed("inactive", true);
    }
    else {
        registrationLabel
            .classed("active", false)
            .classed("inactive", true);
        populationLabel
            .classed("active", false)
            .classed("inactive", true);
        incomeLabel
            .classed("active", true)
            .classed("inactive", false);
        }
    }
    });
    
}



// Function to create PieChart
function pieChart(pieData, countyID, yearID){
    // Isolate values and labels for chart
    let model_reg = pieData.map(d => d.reg_count)
    let makemodel = pieData.map(d => { return d. make + " " + d.model});

    
    // Create Data
    let data = 
    [{
        values: model_reg,
        labels: makemodel,
        domain:{column:0},
        hoverinfo: 'label+percent',
        hole: .4,
        type: 'pie',
        textposition: 'inside'
    }];
        
    let layout = {
        title: `${yearID} ${countyID} Model Registrations`,
        annotations: 
        [{
            font: {
                size: 14
            },
            showarrow: false,
            text: 'Models',
            x: .5,
            y:  0.5
        }],
        automargin: true,
        height: 400,
        width: 400,
        // width: d3.select('pie').clientWidth,
        showlegend: false,
        // grid: {rows: 1, columns: 2}
        };

        
        Plotly.newPlot('pie', data, layout, {displayModeBar: false});
};
    
    
    
//Function to create Map
function map(stationInfo){
    
    // console.log(stationInfo)
        // Creating map object
        // let myMap = L.map("map", {
        //     center: [28.0000, -83.7000],
        //     zoom: 7
        // });
      
        // Adding tile layer
        let streetMap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
            attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
            tileSize: 512,
            maxZoom: 18,
            zoomOffset: -1,
            id: "mapbox/streets-v11",
            accessToken: API_KEY
        })//.addTo(myMap);
        let satelliteeMap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
            attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
            tileSize: 512,
            maxZoom: 18,
            zoomOffset: -1,
            id: "mapbox/satellite-v9",
            accessToken: API_KEY
        })
        
        // Use this link to get the geojson data.
        var link = "static/data/flo.geojson";
        // var link2 ="static/data/stations.json";
      
        // Function that will determine the color of a neighborhood based on the county it belongs to
        function chooseColor(county) {
            switch (county) {
            default:
            return "#6699FF";
            }
        }
      
        // Grabbing our GeoJSON data..
        let countyBoundary = new L.LayerGroup();

        d3.json(link).then(function(data) {
            // Creating a geoJSON layer with the retrieved data
            L.geoJson(data, {
            // Style each feature (in this case a neighborhood)
            style: function(feature) {
                return {
                color: "black",
                // Call the chooseColor function to decide which color to color our neighborhood (color based on county)
                fillColor: chooseColor(feature.properties.county),
                fillOpacity: 0.5,
                weight: 1.0
                };
            },
            // Called on each feature
            onEachFeature: function(feature, layer) {
                // Set mouse events to change map styling
                layer.on({
                // When a user's mouse touches a map feature, the mouseover event calls this function, that feature's opacity changes to 90% so that it stands out
                mouseover: function(event) {
                    layer = event.target;
                    layer.setStyle({
                    fillOpacity: .8
                    });
                },
                // When the cursor no longer hovers over a map feature - when the mouseout event occurs - the feature's opacity reverts back to 50%
                mouseout: function(event) {
                    layer = event.target;
                    layer.setStyle({
                    fillOpacity: 0.5
                    });
                },
                // When a feature (neighborhood) is clicked, it is enlarged to fit the screen
                click: function(event) {
                    evMap.fitBounds(event.target.getBounds());
                }
                });
                // Giving each feature a pop-up with information pertinent to it
                layer.bindPopup("<h1>" + feature.properties.namelsad + "</h1> <hr> <h2>" + feature.properties.state_name + "</h2>").addTo(countyBoundary);
            }
    
        });
        });
    
        let stationGroup = new L.LayerGroup();
        console.log(stationInfo)

        stationInfo.forEach(station => {
            let latitude = station.latitude;
            let longitude = station.longitude;
            let streetAddress = station.street_address;
            let stationName = station.station;
            let openDate = station.open_date;

            L.marker([latitude,longitude])
            .bindPopup(`<h5> ${station.station}</h5> <hr> Address: ${station.street_address}`).addTo(stationGroup)
        
        });
    

        let baseMaps = {
            Street: streetMap,
            Satellite: satelliteeMap
        };

        let overlayMaps = {
            "Counties" : countyBoundary,
            "Stations" : stationGroup
        };

        let evMap = L.map("map", {
            center: [28.0000, -83.7000],
            zoom: 7,
            layers: [streetMap, countyBoundary, stationGroup]
        });

        // L.countrol.layers(baseMaps, overlayMaps, {
        //     collapsed: false
        // }).addTo(evMap)

                // console.log(maData)
                // console.log(mapData.county)
            //     d3.json(link2).then(function(response) {
            //         var markers = L.marker();
            //         // Loop through data
            //         for (var i = 0; i < response.length; i++) {
            
            //             // Set the data location property to a variable
            //             var location = response[i].location;
            
            //             // Check for location property
            //             if (location) {
                
            //                 // Add a new marker to the cluster group and bind a pop-up
            //                 markers.addLayer(L.marker([location.coordinates[1], location.coordinates[0]])
            //                 .bindPopup(response[i].descriptor));
            //             }
            
            //         }
            
            //         // Add our marker cluster layer to the map
            //         myMap.addLayer(markers);
            // })
            


}
init()