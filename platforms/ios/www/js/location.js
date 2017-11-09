var rendererOptions = {
  draggable: false
};
  var directionsDisplay = new google.maps.DirectionsRenderer(rendererOptions);
  var directionsService = new google.maps.DirectionsService();
  var map;

  function initialize(latDestino, lngDestino) {

    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 17.989456, lng: -92.9475061},
        zoom: 15
      });

    if (navigator.geolocation) {

      navigator.geolocation.getCurrentPosition(
         function (position)  {

            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
            calcRoute(pos.lat, pos.lng, latDestino, lngDestino);
            map.setCenter(pos);

        },
        function (error) {

            navigator.geolocation.getCurrentPosition(function(position) {
              var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
              };
              calcRoute(pos.lat, pos.lng, latDestino, lngDestino);
              map.setCenter(pos);
            }, function(error){
              alert('code: '+error.code+ ' error: '+ error.message)
            });

        },
        {
          enableHighAccuracy: true, 
          timeout: 10000, 
          maximumAge: 20000
        });
    }
    directionsDisplay.setMap(map);
  }

  function calcRoute(lat, lng, latDestino, lngDestino) {
    var destino = new google.maps.LatLng(latDestino, lngDestino);
    var origen = new google.maps.LatLng(lat, lng);
    var request = {
      origin: origen,
      destination: destino,
      travelMode: google.maps.TravelMode.DRIVING
    };
    directionsService.route(request, function(response, status) {
      if (status == google.maps.DirectionsStatus.OK) {
        directionsDisplay.setDirections(response);
      }
    });
  }