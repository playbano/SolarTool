
console.log("Outside listener");

document.addEventListener("DOMContentLoaded", function () {
  let streetNameOutput = "";

  const form = document.getElementById("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const inputX = document.getElementById('street-name').value;
    const inputY = document.getElementById('postal-code').value;

    const tempX = sanitizeInput(inputX);
    const tempY = sanitizeInput(inputY);
    
    streetNameOutput = assembleString(tempX, tempY);
    
    
    //const apiKey = "AIzaSyA8nvS2xwJfPMmUOujBs3Gqu7UtMCdM__g";
    const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${streetNameOutput},+Sverige&key=${config.gKey}`;
    
    //const apiUrl ="https://maps.googleapis.com/maps/api/geocode/json?address=gamla+bruksgatan+43,66840+bäckefors,+Sverige&key="+apiKey;
    
    
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
    
      .then((data) => {
        jsonData = data;
    
        var jsonString = JSON.stringify(jsonData, null, 2);
    
        const jsonObj = JSON.parse(jsonString);
        console.log(jsonObj.results[0].geometry.location);
        //console.log(jsonString);
    
        let srcLat = jsonObj.results[0].geometry.location.lat;
        let srcLng = jsonObj.results[0].geometry.location.lng;
        map.setView([srcLat, srcLng], 20);
      })
      .catch((error) => {
        console.error("Error:", error);

      });
});
});

console.log("Beneath listener");

