/*Adressök 
var addressString = document.getElementById("address");
const apiKey = "AIzaSyA8nvS2xwJfPMmUOujBs3Gqu7UtMCdM__g";
const apiUrl =
"https://maps.googleapis.com/maps/api/geocode/json?address="+addressString+"&key="+apiKey;

var inputField = document.getElementById("address");
inputField.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();


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


        //const jsonObj = JSON.parse(jsonString);
        console.log(jsonObj.results[0].geometry.location.lat);
        console.log(jsonString);

      })
      .catch((error) => {
        console.error("Error:", error);
      });
    }});
    */
