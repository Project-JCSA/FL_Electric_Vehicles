// Stations Layer
let myMap = new L.LayerGroup();
d3.json(datalink).then(function(mapData) {
    mapData = mapData.features
    mapData.forEach(station => {
        let latitude = mapData.geometry.coordinates[1];
        let longitude = mapData.geometry.coordinates[0];
        let StreetAddress = mapData.StreetAddress;
        let name = mapData.StationName;
        let opendate = mapData.OpenDate;
    // console.log(mapData);
        L.marker([latitude,longitude]
          ).bindPopup("<h3>" + station.StationName + "<h3><h3>Capacity: " + station.StreetAddress + "</h3>" + station.OpenDate + "</h3>").addTo(myMap)

 })
});
