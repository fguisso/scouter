//without Angular

// var ticker = {}, bids = {}, asks = {}, ob = {};
// function retriveTicker (data) {
// 	//console.log(data);
// 	ticker = data;
// };
// function retriveBook(data){
// 	bids = data.bids;
// 	asks = data.asks;
// 	console.log(bids);
// 	//console.log(asks);
// 	ob = data;
// 	//console.log(ob.asks[0]);
// };
// var tickerJs = document.createElement('SCRIPT');
// tickerJs.src = 'https://api.blinktrade.com/api/v1/BRL/ticker?callback=retriveTicker';
// var bookJs = document.createElement('SCRIPT');
// bookJs.src = 'https://api.blinktrade.com/api/v1/BRL/orderbook?callback=retriveBook';
// var head = document.getElementsByTagName('head')[0];
// head.insertBefore(tickerJs, head.childNodes[0]);
// head.insertBefore(bookJs, head.childNodes[0]);
// window.onload = function (){
// 	document.getElementById('low').innerHTML = ticker.low;
// 	document.getElementById('high').innerHTML = ticker.high;
// 	document.getElementById('last').innerHTML = ticker.last;
// 	document.getElementById('buy').innerHTML = ticker.buy;
// 	document.getElementById('sell').innerHTML = ticker.sell;
// 	document.getElementById('vol').innerHTML = ticker.vol;
// };

var app = angular.module("myApp", []);
app.controller('jsonController', function($scope, $http){
		var url = 'https://api.blinktrade.com/api/v1/BRL/orderbook?callback=JSON_CALLBACK';
		$http.jsonp(url)
			.success(function(data){
				$scope.bids = data.bids;
				$scope.asks = data.asks;
			})
			.error(function(err){
				console.log("API orderbook: " + err);
			});
		var url = 'https://api.blinktrade.com/api/v1/BRL/ticker?callback=JSON_CALLBACK';
		$http.jsonp(url)
			.success(function(data){
				$scope.ticker = data;
			})
			.error(function(err){
				console.log("API ticker: " + err);
			});

});