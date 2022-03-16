var a1 = [1, 2];
var a2 = [3, 4];
var a3 = a1.concat(a2, 4, 5, [[7, 8]]); // return array
console.log(a3);
console.log("--------------");
a1.forEach((e) => console.log(e));
a2.forEach((e) => console.log(e));
console.log("--------------");
a1.concat(a2).forEach((e) => console.log(e));