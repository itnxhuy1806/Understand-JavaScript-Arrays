let a = [1, 2, 3, 4, 5];
let sum = a.reduce((prev, item) => { //prev = a[0]
     return item;
})
console.log(sum);
let users = [
     { 'id': '01', 'name': 'A' },
     { 'id': '02', 'name': 'B' }
]
let getobj = users.reduce((obj, user) => { //obj ={}
     obj[user.id] = user.name;
     return obj;
},{})
console.log(getobj);