//ADDRESSNAMN FÖRSTA TEXTRUTAN

/*
let text = "södra ringvägen ka aa 52352 tidaholm";
let text = "";

const txtProcessWS = text.split(" "); /*en tolower behövs 
console.log(txtProcessWS);

//får inte vara kortare än kortast möjliga format (teåker 20 66840 bäckefors)
const txtProcessTemp = [];

//itererar genom arrayen. Om det inte är en tom sträng>lägg värdet i en ny array 
for (let i = 0; i < txtProcessWS.length; i++) {
    if (txtProcessWS[i] !== "") {
        txtProcessTemp.push(txtProcessWS[i].trim());
    }
}

const errorCollect = [];
found = false;

while(found == false) {

//Om den första karaktären i en av strängarna är ett nummer
//och kortare än 5 siffor
houseNumberIndex = 0;
for (let i = 1; i < txtProcessTemp.length; i++) {
    
    if (!isNaN(txtProcessTemp[i].charAt(0)) && txtProcessTemp[i].length < 5 ) {
        houseNumberIndex = i;
        found = true;
        break;
    } 
}
if (found == false) {
    errorCollect.push("no house number found");
}

//POSTNUMMER ANDRA TEXTRUTAN

//Hitta postnummer
postalNumberIndex = 0;
for (let i = 1; i < txtProcessTemp.length; i++) {

    if (txtProcessTemp[i].length == 5 && !isNaN(txtProcessTemp[i])) {
        postalNumberIndex = i;
        found = true;
        break;
    }
}
if (found == false) {
    errorCollect.push("no postal code found");
}

//Avgöra ortsnamn. Kollar just nu bara om det är ett nummer eller inte
//Väldigt osäker
if(isNaN(txtProcessTemp[postalNumberIndex + 1])) {
    townName = txtProcessTemp[postalNumberIndex + 1];
    found = true;
};
if (found == false) {
    errorCollect.push("no town found");
}

for (let i = 0; i < errorCollect.length; i++) {
    console.log(errorCollect[i]);
}}

//KOLLA ÖVER. Idiotsäkra input redan ovan

//Avgör gatunamn - mest troligt 1 - 2 strings men kan vara fler?
streetName = "";
for (let i = houseNumberIndex; i > 0; i--) {
    
    streetName = streetName.concat(txtProcessTemp[houseNumberIndex-i],"+");
}
//Husnummer
streetName = streetName.concat(txtProcessTemp[houseNumberIndex], "," );


let postalCode =
//Postkod
streetName = streetName.concat(txtProcessTemp[postalNumberIndex], "+");
//Ortsnamnet
streetName = streetName.concat(townName);
//Land
streetName = streetName.concat(",+Sverige");


console.log(streetName);


//betyder att formatet är Teåker 20
if(houseNumberIndex - 1 == 0) {
    
    
}
//betyder att formatet är gamla bruksgatan 43
/*
if(houseNumberIndex - 1 === 1) {
    
    result = txtProcessTemp[0].concat("+", txtProcessTemp[1], "+", txtProcessTemp[2], ",", txtProcessTemp[3], "+", txtProcessTemp[4], ",+Sverige" );
    
    let result = "";
    console.log(result);
}*/
