function createMap(bikeStations) {

  d3.json("http://localhost:5000/getData", (data) => {

    var parsedData = JSON.parse(data);

    var firstDataPointLatLon = [parsedData[0].latitude,parsedData[0].longitude];

    var map = L.map("map-id", {
      center: firstDataPointLatLon,
      zoom: 12
    });
    
    // Create the tile layer that will be the background of our map
    L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token={accessToken}", {
      attribution: "Map data &copy; <a href=\"http://openstreetmap.org\">OpenStreetMap</a> contributors, <a href=\"http://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"http://mapbox.com\">Mapbox</a>",
      maxZoom: 18,
      id: "mapbox.light",
      accessToken: API_KEY
    }).addTo(map);


    parsedData.forEach(element => {
      var title = `${element.name}\n${element.address}\n${element.price}`;
      new L.Marker([element.latitude, element.longitude]).bindPopup(title).addTo(map);

      // var title = "<h3>" + element.name + "</h3></h3>Capacity" + element.address + element.price + "</h3>";
      // new L.Marker([element.latitude, element.longitude]).bindPopup("<h3>" + element.name + "</h3></h3>Capacity" + element.address + element.price + "</h3>").addTo(map);

    })
  });
}






createMap();
//   // Create a layer control, pass in the baseMaps and overlayMaps. Add the layer control to the map
//   L.control.layers(baseMaps, overlayMaps, {
//     collapsed: false
//   }).addTo(map);
// }

// function createMarkers(response) {

//   // Pull the "stations" property off of response.data
//   var stations = response.data.stations;

//   // Initialize an array to hold bike markers
//   var bikeMarkers = [];

//   // Loop through the stations array
//   for (var index = 0; index < stations.length; index++) {
//     var station = stations[index];

//     // For each station, create a marker and bind a popup with the station's name
//     var bikeMarker = L.marker([station.lat, station.lon])
//       .bindPopup("<h3>" + station.name + "<h3><h3>Capacity: " + station.capacity + "<h3>");

//     // Add the marker to the bikeMarkers array
//     bikeMarkers.push(bikeMarker);
//   }

//   // Create a layer group made from the bike markers array, pass it into the createMap function
//   createMap(L.layerGroup(bikeMarkers));
// }


// // Perform an API call to the Citi Bike API to get station information. Call createMarkers when complete
// d3.json("https://gbfs.citibikenyc.com/gbfs/en/station_information.json", createMarkers);
