var data = [{
  type: "pie",
      values: [28, 18, 19, 6, 20, 13],
      labels: ['Tesla', 'Nissan', 'Chevy', 'BMW', 'Toyota', 'Ford'],
      type: 'pie',
      textinfo: "label+percent",
      textposition: "inside",
      automargin: true
    }];
    
    var layout = {
      height: 400,
      width: 400,
      margin: {"t": 30, "b": 0, "l": 30, "r": 0},
      showlegend: false,
      animate: true
        
      }
    
    Plotly.newPlot('pieplot', data, layout)

