let a = [1, 2, 3];
let a2 = [-1, 2, 3];
console.log(a.every(e => e > 0)); // 1>0 & 2>0 & 3>0 = true 
console.log(a.every(e => e > 1)); // 1>1 & 2>1 & 3>1 = false
isPositiveNumbers = (a)=>{
     if(a.every(e => e > 0))
          return "yes";
     return "no";
};
console.log(isPositiveNumbers(a));
console.log(isPositiveNumbers(a2));