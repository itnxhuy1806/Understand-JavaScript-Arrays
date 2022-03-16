var a = [1,2,3];
console.log(a.indexOf(1)); // Returns the order of the elements in the array
console.log(a.indexOf(4)); // return -1 if not exist
console.log(a.indexOf(1,2)); //
if (!(a.indexOf(4) >-1)){
     a.push(4);
}
console.log(a);