// let svgWidth = d3.select('bar').clientWidth;
// let svgHeight = svgWidth / 3.236;
// console.log(svgWidth)

let svgWidth = 900;
let svgHeight = 500;

var margin = {
    top:25,
    right:25,
    bottom:50,
    left:50
};

// Establish height and width
let width = svgWidth - margin.left - margin.right;
let height = svgHeight - margin.top - margin.bottom;


// Create an SVG wrapper, append an SVG group that will hold our chart,
// and shift the latter by left and top margins.
let svg = d3.select("#bar")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight);


// Append an SVG group
let chartGroup = svg.append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

// Initial Paramaters
let chosenXAxis = "county";
let chosenYAxis = "county_reg_count";


// function to change X Axis Scale
function xScale(censusData, chosenXAxis) {
    // create scales
    let xLinearScale = d3.scaleLinear()
    .domain([d3.min(censusData, d => d[chosenXAxis]) *.5,
    d3.max(censusData, d => d[chosenXAxis]) * 1.5])
    .range([0, width]);
  
    return xLinearScale;
  
  }


// function to change Y Axis Scale
function yScale(barData, chosenYAxis) {
    // create scales
    let yLinearScale = d3.scaleLinear()
    .domain([d3.min(barData, d => d[chosenYAxis]) *.5,
    d3.max(barData, d => d[chosenYAxis]) * 1.5])
    .range([height,0]);
  
    return yLinearScale;
  
  }

// function to change Y Axis
function changeYAxes(newYScale, yAxis) {
    let leftAxis = d3.axisLeft(newYScale);
  
    yAxis.transition()
      .duration(500)
      .call(leftAxis);
  
    return yAxis;
  }
// // function to change circles from Y Axis
// function changeYCircles(barData, newYScale, chosenYAxis) {

//     circlesGroup.transition()
//         .duration(500)
//         .attr("cy", d => newYScale(d[chosenYAxis]))
//         .attr("dy", d => newYScale(d[chosenYAxis])+3)

//     return circlesGroup;
//   }

let yearSelect = d3.select("#selYear");

let countySelect = d3.select("#selectCounty");

let datalink = "http://127.0.0.1:5000/data"

d3.json(datalink).then(function(evData,err){
    

    if (err) throw err;

    console.log(evData)
    // console.log(evData[].year)
    
    let years = evData.map(d => d.year);
    let dist_years = [... new Set(years)];

    let counties = evData.map(d => d.county);
    let dist_counties = [... new Set(counties)];
    
    // [...new Set(evData.year)]
    console.log(dist_counties)
    
    // // Establish Dropdown for Sample ID's
    // years.forEach(d => {
    //     yearSelect.append("option").attr("value", d).text(d);
    // })

    // Establish Year ID and County ID
    // let yearID = yearSelect.property("value");
    let yearID = 2018

    // Filter and Sort Metadata
    let filterData = evData.filter(d => d["year"] === yearID);

    // console.log(filterData)

    // Establish Subject ID and Meta ID
    // Filter and Sort Metadata
    // let filterMeta = data.metadata.filter(meta => meta["id"] === metaID);
    
    
    
    
    // data_18 = []
    // data.forEach(function(data){
    //     data.year = parseInt(data.year);
    //     data.population = parseInt(data.population);
    //     data.income = parseInt(data.income);
    //     data.station_count = parseInt(data.station_count);
    //     data.county_reg_count = parseInt(data.county_reg_count);
    //     if (data.year === 2018){
    //         data_18
    //     }
    //     // reg_count.push(data.reg_count = parseInt(data.reg_count));
    // })
    // // console.log(county_name)
    // // num_of_counties = d3.count(barData , d => d.county)
    // // console.log(num_of_counties)
    // // set xLinearScale
    // // let xLinearScale = xScale(censusData, chosenXAxis);
    // let xLinearScale = d3.scaleBand()
    //     .domain([d3.map(barData, d => d.county)])
    //     .range([0,width])
    //     .padding(0.4)

    // // set yLinearScale
    // // let yLinearScale = yScale(censusData, chosenYAxis);
    // let yLinearScale = d3.scaleLinear()
    //     .domain([0, d3.max(barData, d => d.county_reg_count) + 2])
    //     .range([height, 0]);


    // // create initial axis
    // let bottomAxis = d3.axisBottom(xLinearScale);
    // let leftAxis = d3.axisLeft(yLinearScale);

    // // append x axis
    // let xAxis = chartGroup.append("g")
    //     .classed("x-axis", true)
    //     .attr("transform", `translate(0,${height})`)
    //     .call(bottomAxis);

    // chartGroup.append("g")
    //     .attr("transform", `translate(0, ${height})`)
    //     .call(bottomAxis);

    // // append y axis
    // let yAxis = chartGroup.append("g")
    //     .classed("y-axis", true)
    //     .attr("transform", `translate (0)`)
    //     .call(leftAxis);

    // chartGroup.append("g")
    //     .call(leftAxis);

    //     let circlesGroup = chartGroup.selectAll("circle")
    //     .data(censusData)
    //     .enter()

    // circlesGroup.append("circle")
    //     .attr("cx", d => xLinearScale(d.poverty)) // x&y for radius
    //     .attr("cy", d => yLinearScale(d.healthcareLow))
    //     .attr("r", "10")  // r = radius
    //     .attr("fill", "blue")
    //     .attr("stroke", "white")
    //     .attr("opacity", ".75")

    // circlesGroup.append("text")
    //     .attr("dx", d => xLinearScale(d[chosenXAxis])-5)
    //     .attr("dy", d => yLinearScale(d[chosenYAxis])+3)
    //     .text(d => d.abbr)
    //     .attr("font-family", "sans-serif")
    //     .attr("font-size", ".5em")
    //     .attr("fill", "white");

})





