// [P x R x (1+R)^N] / [(1+R)^N
const emi = (p, r, t)=>{
    let N = t*12;
    let R = r/(1200);
    let i = (p * R * ((1+R)**N))/ (((1+R)**N)-1);
    return i;

}

let ans = emi(500000, 9, 10);
console.log(ans);