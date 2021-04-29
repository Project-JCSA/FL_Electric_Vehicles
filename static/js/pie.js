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