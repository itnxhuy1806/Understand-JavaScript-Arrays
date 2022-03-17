var a1 = [1,2,3];
var a2 = [7,8,9];
console.log(a1);
a1.push(5,6);
console.log(a1);
a1.push.apply(a1,a2);
console.log(a1);
console.log(a2.push("a")); // Return the new length property of the object upon which the method was called.
const numbers = [5, 6, 2, 3, 7];

const max = Math.max.apply(0, numbers);

console.log(max);