var fs = require("fs");
//fs là module có sẵn của node dùng để đọc một file bất kỳ

var noidung = fs.readFileSync(__dirname + "/danhsach.txt");
console.log(noidung);
console.log(noidung.toString());