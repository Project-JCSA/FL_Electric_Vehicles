
function init(){
    
let yearSelect = d3.select("#selYear");

let countySelect = d3.select("#selectCounty");

let datalink = "http://127.0.0.1:5000/data"

d3.json(datalink).then(function(evData,err){
    

    if (err) throw err;

    console.log(evData)
    
    
    let years = [... new Set(evData.map(d => d.year))];
    

    let counties = [... new Set(evData.map(d => d.county))]
   

    // Establish Year ID and County ID
    // let yearID = yearSelect.property("value");
    let yearID = 2018
    let countyID = "Dade"

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

    let pieData = Array.from(new Set(filterData.map(d => d.county)))
                            .map(county => {
                                return {
                                    county: county,
                                    county_registration: filterData.find(d => d.county === county).county_reg_count,
                                    make: filterData.find(d => d.county === county).make,
                                    model: filterData.find(d => d.county === county).model,
                                    ev_reg_count: filterData.find(d => d.county === county).reg_count,
                                };
                            });

    
    console.log(filterData)
    console.log(barData)
    console.log(pieData)

    // Establish Subject ID and Meta ID
    // Filter and Sort Metadata
    // let filterMeta = data.metadata.filter(meta => meta["id"] === metaID);
    

    barChart(barData)
    pieChart()

})

}


function barChart(){
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
}




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


init()