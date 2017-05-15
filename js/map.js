
function initialise()
{


    mapOptions = {
        center: new google.maps.LatLng(40.752260, -73.978020),
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROAD,
    };


    map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

    var markerOptions = ({
        draggable: true, 
        animation: google.maps.Animation.DROP, 
        position: new google.maps.LatLng(40.752260, -73.978020),
        icon:'money.png'
    });


    function toggleBounce() {
        if (marker.getAnimation() !== null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
    }
    marker = new google.maps.Marker(markerOptions);
    marker.setMap(map);

    marker.addListener('click', toggleBounce);

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
        }, 
        {
            featureType: "road",
            elementType: "labels",
            stylers: [
                {visibility: "on"}
            ]
        },
        {
            featureType: 'water',
            stylers: [{color: '#99ff99'}]
        }
  

    ];

    map.setOptions({styles: styles});


    var infoWindowOptions = {
        content: 'hello'

    };

    var infoWindow = new google.maps.InfoWindow(infoWindowOptions);
    google.maps.event.addListener(marker, 'click', function (e) {

        infoWindow.open(map, marker);

    });

};

