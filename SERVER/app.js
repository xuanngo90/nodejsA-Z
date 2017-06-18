const express = require("express");
const app = express();
const server = require("http").createServer(app);

var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: false });

server.listen(3000);

app.get("/", function(req, res) {
    //tra ve chuoi
    // res.send("<font color=red>Hello</font>")
    //tra ve 1 file html
    res.sendFile(__dirname + "/index.html")

});

app.get("/hello", function(req, res) {
    res.send("<font color=red>GETTING HELLO</font>")
})

app.post("/login", urlencodedParser, function(req, res) {
    //username password
    // res.send("<font color=red>POSTTING HELLO</font>");
    let u = req.body.username,
        p = req.body.password;
    res.send("Username: " + u + " Password: " + p);
})

app.get("/tinhtong/:so1/:so2", function(req, res) {
    let n = req.params.so1;
    n = parseInt(n);

    let m = req.params.so2;
    m = parseInt(m);

    let tong = m + n;
    res.send("<h1>" + tong + "</h1>")
})

app.get("/tinhtong/:id", function(req, res) {
    let i = req.params.id;
    res.send("Server nhan dc id: " + i)
})

// app.post('/login', urlencodedParser, function(req, res) {
//     if (!req.body) return res.sendStatus(400);
//     res.send('Welcome, ' + req.body.username)
// })