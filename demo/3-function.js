function tinhtong(a, b) {
    return a + b;
}
var x = tinhtong(5, 8);
console.log(x);
////////////////////
function hello() {
    console.log("Welcome now..!")
}

function goiham(fn) {
    fn();
}

goiham(hello);
/////////////////
var tong = function() {
    console.log('lap trinh node');
}
tong();