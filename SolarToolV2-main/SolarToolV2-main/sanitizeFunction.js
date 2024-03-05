function sanitizeInput(input) {
    //Adressradstringen från formen till lower case
    string = input.toLowerCase();
  
    //Skapar en array av de ord som finns i strängen
    const split = string.split(" ");
  
    const cleanList = [];
  
    //itererar genom arrayen. Om det inte är en tom sträng>
    //lägg värdet i en ny array
    for (let i = 0; i < split.length; i++) {
      if (split[i] !== "") {
        cleanList.push(split[i].trim());
      }
    }
    return cleanList;
  }
////
function assembleString(addressRowArr, postalRowArr) {
    //Om den första karaktären i en av strängarna är ett nummer
    //och kortare än 5 siffor
    let houseNumIndex = 0;
    for (let i = 0; i < addressRowArr.length; i++) {
        
        if (!isNaN(addressRowArr[i].charAt(0)) && addressRowArr[i].length < 5 ) {
            houseNumIndex = i;
            break;
        } 
    }
    
    //Avgör gatunamn - mest troligt 1 - 2 strings men kan vara fler?
    //Börjar på indexet av husnumret och "backar".
    //konstant minus i gör ordning 0 - 1 - 2
    let streetName = "";
    let postalNum = "";
    let townName = "";
    
    for (let i = houseNumIndex; i > 0; i--) {    
      streetName = streetName.concat(addressRowArr[houseNumIndex-i],"+");
    }
  
    //Husnummer
    streetName = streetName.concat(addressRowArr[houseNumIndex], ",");
  
    //Avgör postnummer (om strängen är 5 och inte innehåller bokstäver)
    for (let i = 0; i < postalRowArr.length; i++) {
    
        if (postalRowArr[i].length == 5 && !isNaN(postalRowArr[i])) {
            postalNum = postalRowArr[i];
            break;
        }
    }
    //Avgöra ortsnamn. Kollar just nu bara om det är ett nummer eller inte
    //Väldigt osäker. kolla av om det är mer än två strängar i arrayen?
    for (let i = 0; i < postalRowArr.length; i++) {
        if(isNaN(postalRowArr[i])) {
            townName = postalRowArr[i];
        };   
    }
  
    streetName = streetName.concat(postalNum, "+");
    streetName = streetName.concat(townName)
    return streetName;
    };