var http = require("http");
//http là chuẩn giao tiếp browser, phải khai báo như này để browser nhận diện dc

http.createServer(function(req, res) {
    //req: thông tin khách hàng gửi lên
    //res: dữ liệu trả về khách hàng

    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("KhoaPham.Vn");
    /*res.writeHead(a, b)
         - a là mã trả về client - ví dụ 404 là page notfound
         - b là texxt hay max html hay link html
    */
}).listen(8888);
//nếu gõ localhost:8888 nó sẽ trả về giá trị KhoaPham.Vn