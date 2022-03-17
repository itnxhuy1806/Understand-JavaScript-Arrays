let a = [" a", "b ", " c ", "d", "e",]
console.log(a.map(e=>e));  // return arrray
console.log(a.map(e=>e.trim()));
console.log(a.map(e=>{return {name: e.trim()} }));