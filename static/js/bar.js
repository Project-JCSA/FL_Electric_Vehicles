let svgWidth = d3.select('bar').clientWidth;
let svgHeight = svgWidth / 3.236;

var margin = {
    top:25,
    right:25,
    bottom:25,
    left:25
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
let chosenYAxis = "registration";


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
let link = "http://127.0.0.1:5000/data"

d3.json(link).then(function(barData,err){
    
    if (err) throw err;

        console.log(barData);

//     barData.forEach(function(data){
//         data.population = parseInt(data.population);
//         data.income = parseInt(data.income);
//         data.station_count = parseInt(data.station_count);
//         data.year = parseInt(data.year);
//     })

//     // set xLinearScale
//     let xLinearScale = xScale(barData, chosenXAxis);

//     // set yLinearScale
//     let yLinearScale = yScale(barData, chosenYAxis);


//     // create initial axis
//     let bottomAxis = d3.axisBottom(xLinearScale);
//     let leftAxis = d3.axisLeft(yLinearScale);

//     // append x axis
//     let xAxis = chartGroup.append("g")
//         .classed("x-axis", true)
//         .attr("transform", `translate(0,${height})`)
//         .call(bottomAxis);


//     // append y axis
//     let yAxis = chartGroup.append("g")
//         .classed("y-axis", true)
//         .attr("transform", `translate (0)`)
//         .call(leftAxis);


//     let barGroup = chartGroup.selectAll('bar')
//         .data(barData)
//         .enter()
//         .append("bar")
})





