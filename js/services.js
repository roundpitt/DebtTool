'use strict';
module

.service( 'Data', ['$http', '$q', function( $http, $q ) {
  this.update = function() {
  	var maps = $http.get("maps.json");
  	var player = $http.get("player.json");
    return $q.all([maps, player]);
  }
}]);