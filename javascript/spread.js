// let arr = [10, 20, 50];

// let [a, b, ...c, d] = arr;

// console.log(a, b, c, d);

let user = {name : "rohit", age : 25, city : "indore", gender : "male"};

let {name:x, ...a} = user;

console.log(x, a);