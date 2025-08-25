let arr = ["indore", "pune", "delhi", "bhopal", "ujjain", "jaipur"];

let arr2 =arr.map((item, index, curr)=>{
    return item=="pune" ? "udaipur" : item;
})
console.log(arr)
console.log(arr2)