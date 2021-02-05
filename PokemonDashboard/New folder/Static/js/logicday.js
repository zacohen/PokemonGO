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
//console.log("string")
d3.json(link).then(function (data) {
    //console.log(data)
    // Create a new marker cluster group
    //**** doublecheck *
    var markers = L.marker();
    var layers = {
        //POKEMON: new L.LayerGroup(),
        MORNING: new L.LayerGroup(),
        AFTERNOON: new L.LayerGroup(),
        EVENING: new L.LayerGroup(),
        NIGHT: new L.LayerGroup()
    };
    var overlays = {
        //"Pokemon": layers.POKEMON,
        "Morning": layers.MORNING,
        "Afternoon": layers.AFTERNOON,
        "Evening": layers.EVENING,
        "Night": layers.NIGHT

    };
    //set count 
    var dayCount = {
        MORNING: 0,
        AFTERNOON: 0,
        EVENING: 0,
        NIGHT: 0,
    };
    //var randomData = sample(engine, data, 1000)
    //console.log(randomData)
    // Create a control for our layers, add our overlay layers to it
    L.control.layers(null, overlays).addTo(myMap);

    //create a legend
    var legend = L.control({
        position: "bottomright"
    });

    legend.onAdd = function () {
        var div = L.DomUtil.create("div", "legend");
        return div;
    };

    //add legend to map
    legend.addTo(myMap);
    const shuffled = data.sort(() => 0.5 - Math.random());
    // repeat shuffle as much as you like
    const selectedRecords = shuffled.slice(0, 1001);
    //console.log(selectedRecords)
      
    // Loop through data
    for (var i = 0; i < selectedRecords.length; i++) {
        //console.log(data[i])
        // Set the data location property to a variable
        var lat = selectedRecords[i].latitude;
        var long = selectedRecords[i].longitude;
        //Loop through data to pull 
        var time_of_day;
        var appearedTimeOfDay = selectedRecords[i].appearedTimeOfDay
        var dayMarker = L.marker([lat, long]);
        //if pokemon shows up during the morning
        console.log(appearedTimeOfDay)
        if (appearedTimeOfDay === "morning") {
            time_of_day = "MORNING";
        }
        //if pokemon shows up during the afternoon 
        else if (appearedTimeOfDay === "afternoon") {
            time_of_day = "AFTERNOON";
        }
        //if pokemon shows up during the evening
        else if (appearedTimeOfDay === "evening") {
            time_of_day = "EVENING";
        }
        //if pokemon shows up during the night
        else if (appearedTimeOfDay === "night") {
            time_of_day = "NIGHT";
        }
        //update counter
        dayCount[time_of_day]++;
        dayMarker.addTo(layers[time_of_day]);
    }

    //create a marker for time of day 

    //add marker to layer group 
    
    // Add a new marker to the cluster group and bind a pop-up
    //var Pokemarker = L.marker([lat, long])
    //.bindPopup(data[i].descriptor);
    // Pokemarker.addTo(myMap)

});




