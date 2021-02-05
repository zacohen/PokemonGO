var loc = ["Urban", "Midurban","Suburban", "Rural"];
var count = [66224, 110964, 97209, 40630];
var trace1 = {
    x: loc,
    y: count,
    marker: {
      color: ['rgb(220,20,60)',
      'rgb(128,0,0)',
      'rgb(178,34,34)',
      'rgb(205,92,92)']
    },
    type: "bar"
  };
  var data = [trace1];
  var layout = {
    title: "Areas where Pokemon appear",
    font: {family: "Arial", 
          size: 14,
        },
    xaxis: {title: "Type of location", 
  tickangle: -45},
    yaxis: { title: "Pokemon Count"},
    width: 500,
  height: 500,
  margin: {
    l: 50,
    r: 50,
    b: 100,
    t: 100,
    pad: 4
  },
  };
  Plotly.newPlot("plot", data, layout);


  