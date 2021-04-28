function init(){
    
    let yearSelect = d3.select("#selYear");
    
    let countySelect = d3.select("#selCounty");
    
    let datalink = "http://127.0.0.1:5000/data"
    
    d3.json(datalink).then(function(evData,err){
        
    
        if (err) throw err;
    
        // Establish Dropdowns
    
        // Get distinct Years from data
        let years = [... new Set(evData.map(d => d.year))];
    
        // Append years to dropdown
        years.forEach(year => {
            yearSelect.append("option").attr("value", year).text(year);
        })
    
        // Get distinct Counties from data
        let counties = [... new Set(evData.map(d => d.county))]
        
        // Append counties to dropdown
        counties.forEach(county => {
            countySelect.append("option").attr("value", county).text(county);
        })
    
        // Establish Year ID and County ID
        let yearID = yearSelect.property("value");
        let countyID = countySelect.property("value");
        console.log(yearID)
        console.log(countyID)
        
        // yearID = 2018
        // countyID = "Alachua"
    
        // Filter and Sort Metadata
        let filterData = evData.filter(d => d["year"] === yearID);
    
        let pieData = filterData.filter(d => d["county"] === countyID);
    
        let barData = Array.from(new Set(filterData.map(d => d.county)))
                                .map(county => {
                                    return {
                                        county: county,
                                        registration: filterData.find(d => d.county === county).county_reg_count,
                                        population: filterData.find(d => d.county === county).population,
                                        income: filterData.find(d => d.county === county).income,
                                    };
                                });
    
    
    
        
        console.log(filterData)
        console.log(barData)
        console.log(pieData)
    
        
        yearSelect.on("change", () => yearChanged(yearSelect));
        countySelect.on("change", () => countyChanged(countySelect));
        
    
        barChart(barData)
        pieChart()
        map()

        
    
    });
    
};
    
    
    // function to change Y Axis Scale
    function yScale(barData, height, chosenYAxis) {
        // create scales
        let yScale = d3.scaleLinear()
            .domain([0, d3.max(barData, d => d[chosenYAxis]) + 10])
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
            return (`${d.county}<br>
                ${ylabel} ${d[chosenYAxis]}`);
            });
    
        circlesGroup.call(toolTip);
    
        // Create event listners on the bar for tooltip
        barGroup.on("mouseover", function(data){
            toolTip.show(data,this);
        })
        .on("mouseout", function(data,index){
            toolTip.hide(data);
        })
        // Create event listners on the text for tooltip  
        barGroup.selectAll("text").on("mouseover", function(data){
            toolTip.show(data,this);
        })
        .on("mouseout", function(data,index){
            toolTip.hide(data);
        })
    
        return barGroup;
    }
    
    // function to change circles from Y Axis
    function changeBar(barGroup, newYScale, chosenYAxis) {
    
        barGroup.transition()
            .duration(500)
            .attr("y", d => newYScale(d[chosenYAxis]))
    
        return barGroup;
      }
    
    // Function to create barChart
    function barChart(barData){
        // let svgWidth = d3.select('bar').clientWidth;
        // let svgHeight = svgWidth / 3.236;
        // console.log(svgWidth)
    
        let svgWidth = 1100;
        let svgHeight = 500;
    
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
            .padding(0.1)
    
        // set yLinearScale
        let yLinearScale = yScale(barData, height, chosenYAxis);
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
            .attr("dx", "-.8em")
            .attr("dy", ".15em")
            .attr("transform", "rotate(-90)");
                
    
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
    
        // Establish Y Labels
        let YaxisLabels = chartGroup.append("g")
        .attr("transform", `translate(${width - width}, ${height / 1.5})`);
    
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
        yLinearScale = yScale(barData, chosenYAxis);

        // updates y axis with transition
        yAxis = changeYAxes(yLinearScale, yAxis);

        // updates circles with new y values
        // barGroup = changeBar(barGroup, yLinearScale, chosenYAxis);

        // updates tooltips with new info
        // circlesGroup = changeToolTip(chosenXAxis, chosenYAxis, circlesGroup);

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
    function pieChart(){
        var data = [{
            values: [19, 26, 55],
            labels: ['Residential', 'Non-Residential', 'Utility'],
            type: 'pie'
          }];
          
          var layout = {
            height: 500,
            width: d3.select('pie').clientWidth
          };
          
          Plotly.newPlot('pie', data, layout);
    };
    
    
    
    //Function to create Map
    function map(){
    
        // Creating map object
        let myMap = L.map("map", {
            center: [28.0000, -83.7000],
            zoom: 7
        });
      
        // Adding tile layer
        L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
            attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
            tileSize: 512,
            maxZoom: 18,
            zoomOffset: -1,
            id: "mapbox/streets-v11",
            accessToken: API_KEY
        }).addTo(myMap);
        
        // Use this link to get the geojson data.
        var link = "static/data/flo.geojson";
      
        // Function that will determine the color of a neighborhood based on the county it belongs to
        function chooseColor(county) {
            switch (county) {
            default:
            return "#6699FF";
            }
        }
      
        // Grabbing our GeoJSON data..
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
                    myMap.fitBounds(event.target.getBounds());
                }
                });
                // Giving each feature a pop-up with information pertinent to it
                layer.bindPopup("<h1>" + feature.properties.namelsad + "</h1> <hr> <h2>" + feature.properties.state_name + "</h2>");
        
            }
            }).addTo(myMap);
        });
    
    }
    
function yearChanged(){
    let yearID = d3.select("#selYear").property("value");
    init(yearID)
}

function countyChanged(){
    let countyID = d3.select("selCounty").property("value");
    init(countyID)
}



init()