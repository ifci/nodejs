/**
 * Created by Administrator on 2015/5/3 0003.
 */


var http = require('http');
var server = http.createServer(function(req, res){
    res.writeHeader(200, {"Content-Type" : "text/plain"});
    res.end("<h2>中国</h2>");
})

server.listen(8000);