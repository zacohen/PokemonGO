// Creating map object
var myMap = L.map("map", {
    center: [39.0119, -98.4842],
    zoom: 5
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
 
  var link = "Static/data/Pokemon.json";
  

// Grab the data with d3
console.log("string")
d3.json(link).then(function(data) {
console.log(data)
  // Create a new marker cluster group
  var markers = L.marker();
  var layers = {
    POKEMON: new L.LayerGroup()
  };
  var overlays = {
    "Pokemon": layers.POKEMON,
  };
  
const shuffled = data.sort(() => 0.5 - Math.random());
// repeat shuffle as much as you like
const selectedRecords = shuffled.slice(0, 1001);
//console.log(selectedRecords)
  
  // Create a control for our layers, add our overlay layers to it
  L.control.layers(null, overlays).addTo(myMap);
  // Loop through data
  for (var i = 0; i < selectedRecords.length; i++) {
console.log(selectedRecords[i])
    // Set the data location property to a variable
    var lat = selectedRecords[i].latitude;
    var long = selectedRecords[i].longitude;

      // Add a new marker to the cluster group and bind a pop-up
      var Pokemarker = L.marker([lat, long])
        .bindPopup(selectedRecords[i].descriptor);
        Pokemarker.addTo(myMap)

  }
});
