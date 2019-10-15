const http = require('http');
const os = require('os');
console.log("kubia server starting . . .");

var handler = function(request, response){
    console.log("Recieved request from "+ request.connection.remoteAddress);
    response.writeHead(200);
    response.end("You'he hit "+os.hostname()+"\n");
};

var wwww = http.createServrer(handler);
wwww.listen(8080)