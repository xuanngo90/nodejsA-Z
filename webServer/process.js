var http = require("http");
var fs = require("fs");

http.createServer(function(req, res) {
    //- Ket noi voi 1 file html
    // res.writeHead(200, { "Content-Type": "text/html" });
    //1 var data = fs.readFileSync(__dirname + "/index.html", "utf-8");
    //2 data = data.replace("{NAME}", "KHOAPHAM")
    //3 res.end(data);

    //4 = 1+2+3 fs.createReadStream(__dirname + "/index.html").pipe(res);

    //- ket noi voi chuoi json
    res.writeHead(200, { "Content-Type": "application/json" });
    var obj = {
        ho: "ngo",
        ten: "xuan",
        namsinh: 1990
    };
    res.end(JSON.stringify(obj.ten));
}).listen(7777);