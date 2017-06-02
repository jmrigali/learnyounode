const http = require('http');
// const path = require('path');
// const fs = require('fs');
const port = process.argv[2];
const url = require('url');

function parsetime (time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  }
}

function unixtime (time) {
  return { unixtime: time.getTime() }
}

var server = http.createServer(function (req, res){
  var result;
if(req.method !== 'GET'){
  return res.send('bye');
}
var poop = url.parse(req.url, true);
var poopie = new Date(poop.query.iso);
if(poop.pathname === '/api/parsetime'){
  result = parsetime(poopie)
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(result));
} else if (poop.pathname === '/api/unixtime'){
  result = unixtime(poopie);
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(result));
} else {
  res.writeHead(404);
  res.end();
}
});

server.listen(port, function(){
  console.log('listening');
});
// const net = require('net');
// const strftime = require('strftime');
//
//
// var server = net.createServer(function (socket){
//   socket.write(strftime('%Y-%m-%d %H:%M'));
//
//   socket.end('\n');
//
// });
//
// server.listen(process.argv[2]);

// var server = net.createrServer(function listen(process.argv[2], function(){
//   var date = strftime('%Y-%m-%d, %H:%M');
//   console.log(date);
// });

// const bl = require('bl');

// var arg= process.argv;
// var index = 2;
// var counter = 0;
// var results = [];
//
// function resultsFun (argument){
//   counter++
//   if(counter === 4){
//     results.forEach(function(result){
//       console.log(result);
//     });
//     return;
//   }
//   var string ='';
//     http.get(argument, function (response){
//       response.on('data', function( data){
//
//         string += data.toString();
//       });
//       response.on('end', function(fun){
//         results.push(string);
//         index += 1
//         resultsFun(arg[index]);
//       });
//     });
//   };
//
//
// resultsFun(arg[index]);

// var callback = function (err, fileArray) {
//   if(err) {
//     console.log(err);
//   }
//   fileArray.forEach(function(file){
//     console.log(file);
//   });
// }
//
// myModule(process.argv[2], process.argv[3], callback);


// console.log("HELLO WORLD");
// console.log(total);
//
// // function sum (array) {
//   var total = 0;
//   for(var i = 2; i < array.length; i++) {
//     total += parseInt(array[i]);
//   }
//   return total;
// }
// var fs = require('fs');
// var docs = fs.readFileSync(process.argv[2], 'utf8');
// var str = docs.split('\n').length - 1;
// console.log(str);
// var fs = require('fs');
// var file = fs.readFile(process.argv[2], 'utf8', function callback (err, data) {
//   if(err) {
//     throw err;
//   }
//   console.log(data.split('\n').length - 1);
// });
//
