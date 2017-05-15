var map; var infowindow;
        
        
        function initialize() {
        var center = new google.maps.LatLng(40.752260, -73.978020);
        map = new google.maps.Map(document.getElementById('map'),{
        center: center,
        zoom: 13
       });
        
       
       var request = {
            
            location: center,
            radius: 8047,
            types: ['cafe']
        };
        
        infowindow = new google.maps.InfoWindow();
        var service = new google.maps.places.PlacesService(map);
        service.nearbySearch(request,callback);
        
        }
        
        function callback (results, status) {
            if(status == google.maps.places.PlacesServiceStatus.OK) {
                for (var i = 0; i < results.length; i++)  {
                    createMarker(results[i]);
                }
            }
        }
        
        
        function createMarker(place) {
            var placeLoc = place.geometry.location;
            var marker = new google.maps.Marker({
                map: map,
                position: place.geometry.location
            });
            
            google.maps.event.addListener(marker, 'click', function() {
                infowindow.setContent(place.name);
                infowindow.open(map, this);
            });
       
       
       
       
       
       
        var bikeLayer = new google.maps.BicyclingLayer();
        bikeLayer.setMap(map);



    var styles = [
        {
            stylers: [
                {hue: "#33ccff"},
                {saturation: -10}
            ]
        }, {
            featureType: "road",
            elementType: "geometry",
            stylers: [
                {lightness: 10},
                {visibility: "simplified"}
            ]
        }, {
            featureType: "road",
            elementType: "labels",
            stylers: [
                {visibility: "on"}
            ]
        }
        
        ,{
        featureType: 'water',
        stylers: [{color: '#99ff99'}]
      }
  
    ];

    map.setOptions({styles: styles});
       
       
   }
        