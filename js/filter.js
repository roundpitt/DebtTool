'use strict';
module

.filter('gold', ['$sce', function($sce) {
	return function(number) {
		if(isNaN(number) || number < 0){
			return number;	
		}else{
			var coin = '<div class="coinText"> ';
			var coin = coin + number + '</div><img src="/img/goldCrown.png" class="coin">';
			return $sce.trustAsHtml(coin);
		}
	}

}]);