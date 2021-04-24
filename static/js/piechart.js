var data = [{
  type: "pie",
  values: [2, 3, 4, 4],
  labels: ["MODEL1", "MODEL2", "MODEL3", "MODEL4"],
  textinfo: "label+percent",
  textposition: "inside",
  automargin: true
}]

var layout = {
  height: 400,
  width: 400,
  margin: {"t": 0, "b": 0, "l": 0, "r": 0},
  showlegend: false
  }

Plotly.newPlot('pieplot', data, layout)