// let arr = [20, 23, 14, 60, 3, 80, 64, 73, 19];

// let arr2 = arr.filter((item, index, curr)=> item%2==0)

// console.log(arr2)

let user = [
    {
        id : 1,
        name : "rohit",
        gender : "male"
    },
    {
        id : 2, 
        name : "jaya",
        gender : "female"
    },
    {
        id : 3,
        name : "vijay",
        gender : "male"
    },
    {
        id : 4,
        name : "amit",
        gender : "male"
    },
    {
        id : 5, 
        name : "nilesh",
        gender : "male"
    },
    {
        id : 6,
        name : "nidhi",
        gender : "female"
    }
]

// let user2 = user.map(item=>{
//     if(item.gender=="male"){
//         item.name = "mr. "+item.name;
//     }else{
//         item.name = "ms. "+item.name;
//     }
//     return item;
// });

let f_user = user.filter(item=>{
    return item.gender=="female";
})


// let user3 = user.map(item=>{
//     if(item.id == 3){
//         item.name = "ajay";
//     }
//     return item;
// })
// console.log(user3)

let user4 = user.filter(item=>item.id != 3);
console.log(user4)