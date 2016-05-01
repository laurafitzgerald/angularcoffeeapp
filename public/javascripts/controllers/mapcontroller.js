
var app = angular.module('CoffeeMateWebApp');


app.controller('mapController', ['$http', '$interval', 'NgMap', function($http, $interval, NgMap) {
    var vm =this;
    NgMap.getMap().then(function(map) {

        for (var i=0; i<1000; i++) {
            var latLng = new google.maps.LatLng(markers[i].position[0], markers[i].position[1]);
            vm.dynMarkers.push(new google.maps.Marker({position:latLng}));
        }
        vm.markerClusterer = new MarkerClusterer(map, vm.dynMarkers, {});


        vm.showCustomMarker= function(evt) {
            map.customMarkers.foo.setVisible(true);
            map.customMarkers.foo.setPosition(this.getPosition());
        };
        vm.closeCustomMarker= function() {
            console.log("marker should close");
            this.style.display = 'none';
        };

    });
}]);
