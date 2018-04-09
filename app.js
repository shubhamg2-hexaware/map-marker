// var request = require("request");
var result = require("./results.json");
var arr = [];
result.data.forEach(function(element) {
  arr.push("markers=" + element.latitude + "," + element.longitude + "&");
})

var fs = require('fs');
fs.writeFile("test.txt", arr, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
});
console.log(arr);
// var options = { method: 'GET',
//   url: 'https://maps.googleapis.com/maps/api/staticmap',
//   qs: 
//    { zoom: '13',
//      size: '600x300',
//      maptype: 'roadmap',
//      markers: 
//       [ '40.702147,-74.015794',
//         '40.711614,-74.012318',
//         '40.718217,-73.998284' ],
//      key: 'AIzaSyCFpm1Bcj2qh2Hf6rRQ8PRZ0kvRBREgycc' },
//   headers: 
//    { 'postman-token': '70df3925-312d-c3cd-1140-6c545b7d2062',
//      'cache-control': 'no-cache' } };

// request(options, function (error, response, body) {
//   if (error) throw new Error(error);

//   console.log(body);
// });
