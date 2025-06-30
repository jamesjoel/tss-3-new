let data = ["red", "green", "blue"];
let [...temp_data] = data;

data[0] = "yellow";

console.log(data)
console.log(temp_data)

