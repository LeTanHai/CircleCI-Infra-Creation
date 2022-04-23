var http = require("http");
var server = http.createServer(function (req, res) {
    res.writeHead(200);
    res.end("Welcometo CICD Server!");
});
server.listen(3000);