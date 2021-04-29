      // let svgWidth = d3.select('bar').clientWidth;
        // let svgHeight = svgWidth / 3.236;
        // console.log(svgWidth)
        let barData = barData
    
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
            .padding(0.5)
    
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





