let demo = (a, b, c)=>{
    let x = a*b;
    let y = x/c;
    return {a: x, b: y};
}

let {a : j, b: h} = demo(1000, 20, 5);

console.log(j)
console.log(h)

