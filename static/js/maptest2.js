function createMap(evstation) {

    // Create the tile layer that will be the background of our map
    var lightmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
      attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
      maxZoom: 18,
      id: "light-v10",
      accessToken: API_KEY
    });
  
    // Create an overlayMaps object to hold the evstation layer
    var overlayMaps = {
      "EV Stations": evstation
    };
  
    // Create the map object with options
    var map = L.map("map-id", {
            center: [28.0000, -83.7000],
            zoom: 7
    });
  

  
    // Create a layer control, pass in the baseMaps and overlayMaps. Add the layer control to the map
    L.control.layers(baseMaps, overlayMaps, {
      collapsed: false
    }).addTo(map);
  }
  
  function createMarkers(response) {
  
    // Pull the "stations" property off of response
    var stations = response.StationName;
  
    console.log(stations)

    // Initialize an array to hold EV markers
    var EVMarkers = [];
  
    // Loop through the stations array
    for (var index = 0; index < stations.length; index++) {
      var station = stations[index];
  
      // For each station, create a marker and bind a popup with the station's name
      var EVMarker = L.marker([station.latitude, station.longitude])
        .bindPopup("<h3>" + station.StationName + "<h3><h3>Capacity: " + station.StreetAddress + "</h3>" + station.OpenDate + "</h3>");
  
      // Add the marker to the EVMarkers array
      EVMarkers.push(EVMarker);
    }
  
    // Create a layer group made from the EV markers array, pass it into the createMap function
    createMap(L.layerGroup(EVMarkers));
  }
  
  
  // Perform an API call to the EV API to get station information.
  d3.json("static/data/stations.json").then(createMarkers);
  