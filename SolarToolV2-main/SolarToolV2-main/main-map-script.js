
//Map initialization
    
//STARTVY
    var map = L.map('map').setView([60.23, 15.25], 5);//nollad 26/2

    
    //Grå kartan
    var Stadia_AlidadeSmooth = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.{ext}', {
	minZoom: 0,
	maxZoom: 20,
	attribution: '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	ext: 'png'
    });
    Stadia_AlidadeSmooth.addTo(map);

    //Satellit
    var satellit = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    });
    satellit.addTo(map);

    map.zoomControl.remove(); //tar bort zoomknappen

    //Draw 
    var drawnItems = new L.FeatureGroup();
    map.addLayer(drawnItems);

    var drawControl = new L.Control.Draw({
      edit: {
        featureGroup: drawnItems,
      },
      draw: {
        polygon: {
          shapeOptions: {
            color: '#6A2E35', //Red wine röd
            weight: 2,
            opacity: 2,
          },
        },
        polyline: false,
        circle: false,
        marker: false,
        rectangle: false,
        circlemarker: false,
        },
    });
    
    map.addControl(drawControl);


    map.on('draw:created', function (e) {
        var type = e.layerType;
        if (type === 'polygon') {
            var polygon = e.layer;
            drawnItems.addLayer(polygon);

            // Calculate and display the area
            var area = L.GeometryUtil.geodesicArea(polygon.getLatLngs()[0]);
            document.getElementById('result').innerHTML = 'Area: ' + area.toFixed(2) + 'm²';
          }
    });

    // FEATURE: På dubbelklick görs en "flyg"-animation som zoomar in max
    map.on('dblclick', function(event){
        var clickedCoords = event.latlng;
        var flyToOptions = {
            duration:0.5,
            easeLinearity: 0.5
        };
        map.flyTo(clickedCoords, 20, flyToOptions);
    });

    
   
    /*ARKIV*/

    //Radioknappsval bortkommenterade
    /*var layerControl = L.control.layers(baseMaps, overlayMaps,{collapsed: false}).addTo(map);
    //Layer controller
        //Kan ha massor av olika, väljs med radioknappar
    var baseMaps = {
        "Base" : Stadia_AlidadeSmooth,
        "Satellite" : satellit
    };
        //Kan nu togglas i samma meny
    var overlayMaps = {
        "Marker" : singleMarker,
    };
    

    // FEATURE: Visar skalan av aktuella inzoomningen
    //(Vill kunna använda värdena, returnerar den?)
    /*var scaleMeter = L.control.scale().addTo(map);*/

    /*//TEST - Musevent
    map.on('mouseover', function(){
        console.log('mouse on map')
    })
    */
    map.on('click', function(e){
        console.log('Lat ' + e.latlng.lat, 'Long: ' + e.latlng.lng);
    })
/*
    //Markör
    var myIcon = L.icon({
        iconSize: [40,40]
    })
    var singleMarker = L.marker([58.80780835675813, 12.168806791305544], 20, {draggable: true});
    var popup = singleMarker.bindPopup('' + singleMarker.getLatLng()).openPopup()

 */
