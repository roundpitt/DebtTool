'use strict';
module

.controller('MainCtrl', ['$route', '$routeParams', '$location', '$scope',
  function MainCtrl($route, $routeParams, $location, $scope) {
    this.$route = $route;
    this.$location = $location;
    this.$routeParams = $routeParams;

}])
.controller('MapCtrl', ['$routeParams', '$scope', 'Data', function MapCtrl($routeParams, $scope, Data) {
  var self = this;
  this.name = 'MapCtrl';
  this.params = $routeParams;
  $scope.data = ''; // set to scope for usage as AngularJS expression
  this.error = '';
  Data.update().then(function(res){success(res);}, function(res){fail(res);});

  //Data.update().then(function(res){success(res);}, function(res){fail(res);});
  var success = function(response) {
    var data = {};
    if(typeof $scope.data == 'undefined') $scope.data = {};
    for(var i = 0; response.length > i; i++){
      data = Object.assign(data, response[i].data);
    }
    $scope.data = data;
  };
  var fail = function(error) {
    $scope.data = null;
    console.error("Failed to load data. Service unreachable. Check your network connection.");
    self.error = error;
  }

  // this is used to find the index of the mapId that the page is currently on.
  $scope.getDataMatch = function(myArray, searchTerm, property) { // set to scope for usage as AngularJS expression
    for(var i = 0, len = myArray.length; i < len; i++) {
        if (myArray[i][property] === searchTerm) return i;
    }
    return -1;
  }
}])
.controller('AccountActivityCtrl', ['$routeParams', '$rootScope', function AccountActivityCtrl($routeParams, $rootScope, $scope){
  this.name = 'AccountActivityCtrl';
  this.params = $routeParams;

}])
.controller('LoginCtrl', ['$http', '$routeParams', '$rootScope', function LoginCtrl($http, $routeParams, $rootScope, $scope){
  this.name = 'LoginCtrl';
  this.params = $routeParams;

    $http({
      method: 'GET',
      url: 'http://avocadotoaster2.azurewebsites.net/api/login?username=mayduncan193&password=mayduncan193'
    }).then(function successCallback(response) {
        console.log(response);
        $rootScope.data = response;
      }, function errorCallback(response) {
        console.log("error");
      });

  this.check = function() {
         var userid = document.getElementById("alternateSignon_userId");
        var password = document.getElementById("alternateSignon_password");
        var temp = false;
        if (userid.value != null && password.value != null 
                  && /\S/.test(userid.value) && /\S/.test(password.value)) {
            temp = true;
        }
        if(temp){
            document.getElementById("Signon").disabled = false;
            document.getElementById("Signon").className = "formButton";
        }else{
            document.getElementById("Signon").disabled = true;
            document.getElementById("Signon").className = "disabledButton";
        }
    };
}])
.controller('PlaceCtrl', ['$routeParams', function PlaceCtrl($routeParams) {
  this.name = 'PlaceCtrl';
  this.params = $routeParams;
}])
.controller('CombatCtrl', ['$routeParams', function CombatCtrl($routeParams) {
  this.name = 'CombatCtrl';
  this.params = $routeParams;
}])
.controller('VirtualWalletCtrl', ['$routeParams', function VirtualWalletCtrl($routeParams) {
  this.name = 'VirtualWalletCtrl';
  this.params = $routeParams;

}])
.controller('NavHeaderController', ['$routeParams', function NavHeaderController($routeParams) {
  this.name = 'NavHeaderController';
  this.params = $routeParams;
}])
.controller('balancesByTypeFilterProvider', ['$routeParams', function balancesByTypeFilterProvider($routeParams) {
  this.name = 'balancesByTypeFilterProvider';
  this.params = $routeParams;
}])
.controller('QuickViewDefaultController', ['$routeParams', function QuickViewDefaultController($routeParams) {
  this.name = 'QuickViewDefaultController';
  this.params = $routeParams;
}])
.controller('EditionBarController', ['$routeParams', function EditionBarController($routeParams) {
  this.name = 'EditionBarController';
  this.params = $routeParams;
}])
.controller('avocadoCtrl', ['$routeParams', '$scope', function avocadoCtrl($routeParams, $scope) {
  this.name = 'avocadoCtrl';
  this.params = $routeParams;
  $scope.cards = [];
  $scope.totalAmount = 1600;
  $scope.paymentSet = false;
  var data;
  var options;
  var donutChart;

  $scope.cards = [
    {name:'PNC Points X1234', payment:128, balance:2384, interest:20, nextPay:'OCT 1', color:'#9144DE' },
    {name:'Auto X9485', payment:64, balance:1000, interest:3, nextPay:'OCT 1', color:'#49E060' }, // green
    {name:'Student Loan', payment:640, balance:4084, interest:6, nextPay:'OCT 1', color:'#5AC8FA' },
    {name:'Personal Loan', payment:768, balance:20000, interest:9, nextPay:'OCT 1', color:'#D31C6A' }
  ];

  var chartData = [
          ['Debt', 'Payment per Month'],
          [$scope.cards[0].name,     128],
          [$scope.cards[2].name,      640],
          [$scope.cards[1].name,  64], // green
          [$scope.cards[3].name, 768]
        ];
        $scope.$watch('cards', function () {
              donutChart.clearChart();
              var data = new google.visualization.DataTable();

              data = [
          ['Debt', 'Payment per Month'],
          [$scope.cards[0].name,     document.getElementById('repeat1').value],
          [$scope.cards[2].name,      document.getElementById('repeat3').value], // green
          [$scope.cards[1].name,  document.getElementById('repeat2').value],
          [$scope.cards[3].name, document.getElementById('repeat4').value]
        ];



              chartData[1][1] = +document.getElementById('repeat1').value;
              chartData[2][1] = +document.getElementById('repeat3').value;
              chartData[3][1] = +document.getElementById('repeat2').value;
              chartData[4][1] = +document.getElementById('repeat4').value;

        $scope.totalAmount = parseInt(document.getElementById('repeat1').value) + parseInt(document.getElementById('repeat2').value) + parseInt(document.getElementById('repeat3').value) + parseInt(document.getElementById('repeat4').value);

              data = new google.visualization.arrayToDataTable(chartData);

              donutChart = new google.visualization.PieChart(document.getElementById('donutChart'));
              donutChart.draw(data, options);
        }, true); // true is for deep object equality checking

       // Load the Visualization API and the corechart package.
      google.charts.load('current', {'packages':['corechart']});
      // Set a callback to run when the Google Visualization API is loaded.
      google.charts.setOnLoadCallback(drawChart);
      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.


      function drawChart() {
        data = new google.visualization.arrayToDataTable(chartData);

        options = {
          pieHole: 0.75,
          tooltip: { trigger: 'none' },
          pieSliceText: 'none',
          pieSliceBorderColor : "transparent",
          slices: {
            0: { color: '#9144DE' },
            1: { color: '#5AC8FA' }, 
            2: { color: '#49E060' },//green
            3: { color: '#D31C6A' }
          },
          backgroundColor: { fill:'transparent' },
          pieStartAngle: -70,
          width: 475,
          height: 475,
          legend: 'none'
        };
        donutChart = new google.visualization.PieChart(document.getElementById('donutChart'));
        google.visualization.events.addListener(donutChart, 'ready', function() {
            
        });

        google.visualization.events.addListener(donutChart, 'select', function() {
          if(donutChart.getSelection()[0]){
            console.log(donutChart.getSelection()[0].row);
          }else{
            console.log("unselect");
          }
        });
        donutChart.draw(data, options);
      }
      //cwCalc(12300, 4000, 3, "months");

      $scope.scrollTop = function(){
        window.scrollTo(0, 300);
      }

      $scope.cwCalc = function(balance0, payment0, interest0, getWhat)
      {               

        /*interest0 = interest0/100;
                      var remainingBalance=balance0;
                      var minPayment=interest0*balance0;
                      var months=0;
                      var lastPayment;
                      if (minPayment>payment0) {alert ('Your monthly payment is less than the monthly interest charged by this card.');return;}
                      while (remainingBalance>0)
                      {
                                      months++;
                                      remainingBalance=remainingBalance*(1 + interest0)-payment0;
                      }
                      
                      if(getWhat == "months"){
                        return months;
                      }
                      if(getWhat == "totalCost"){
                        return (payment0*months).toFixed(2)
                      }
*/

                interest0 = interest0/100/12;
                var remainingBalance=balance0;
                var minPayment=interest0*balance0;
                var months=0;
                var lastPayment;
                if (minPayment>payment0) {return;}
                while (remainingBalance>0)
                {
                                months++;
                                remainingBalance=remainingBalance*(1 + interest0)-payment0;
                }
                if(getWhat == "months"){
                        return months;
                      }
                      if(getWhat == "totalCost"){
                        return (payment0*months).toFixed(2)
                      }





                      //alert("It will take " + months + " months to pay off this thing. " + "cost $" + (payment0*months).toFixed(2));
                      //cwResult.innerHTML="It will take " + months + " months to pay off this card and will cost you a total of $" + (cwMonthlyAmount.value*months).toFixed(2) + ".";
      }

}])
.controller('StartCtrl', ['$routeParams', function StartCtrl($routeParams) {
  this.name = 'StartCtrl';
  this.params = $routeParams;

var linkHandler = Plaid.create({
env: 'sandbox',
clientName: 'Plaid Sandbox',
  // Replace '<PUBLIC_KEY>' with your own `public_key`
key: '8d2f8eac7041f5cd1198bdb18df887',
product: ['auth'],
  // Use webhooks to get transaction and error updates
webhook: '<WEBHOOK_URL>',
onSuccess: function(public_token, metadata) {
  // Send the public_token to your app server here.
  // The metadata object contains info about the
  // institution the user selected and the
  // account_id, if selectAccount is enabled.
},
onExit: function(err, metadata) {
    // The user exited the Link flow.
  if (err != null) {
    // The user encountered a Plaid API error
    // prior to exiting.
  }
    // metadata contains information about the
    // institution that the user selected and the
    // most recent API request IDs. Storing this
    // information can be helpful for support.
  }
});
// Trigger the standard institution select view
document.getElementById('link-button').onclick = function() {
 linkHandler.open();
};
}]);