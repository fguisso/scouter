var fb_data = {};
function retriveJson (data) {
	//console.log(data);
	fb_data = data;
}
var js = document.createElement('SCRIPT');
js.src = 'https://api.blinktrade.com/api/v1/BRL/ticker?callback=retriveJson';
var head = document.getElementsByTagName('head')[0];
head.insertBefore(js, head.childNodes[0]);
window.onload = function (){
	document.getElementById('low').innerHTML = fb_data.low;
	document.getElementById('high').innerHTML = fb_data.high;
	document.getElementById('last').innerHTML = fb_data.last;
	document.getElementById('buy').innerHTML = fb_data.buy;
	document.getElementById('sell').innerHTML = fb_data.sell;
	document.getElementById('vol').innerHTML = fb_data.vol;
};