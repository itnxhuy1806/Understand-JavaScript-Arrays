var a =[1,2,3];
console.log(a[0] + ' ' + a[1] + ' ' + a[2]); // return string
console.log(a.join(' '));
console.log(a.join());
var str = "1 2 3";
function addChar(a) {
     return str.split(' ').map(e=> e +a).join(" ");
}
console.log(addChar("0"))