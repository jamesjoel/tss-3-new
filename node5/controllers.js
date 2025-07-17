let data = [
    {
        name : "rohit",
        age : 25,
        city : "indore"
    },
    {
        name : "amar",
        age : 21,
        city : "indore"
    },
    {
        name : "jaya",
        age : 20,
        city : "mumbai"
    },
    {
        name : "nilesh",
        age : 26,
        city : "indore"
    }
]

let product = [
    {
        id : 1,
        title : "I-Phone",
        image : "1.jpg",
        price : 5000,
        category : "mobiles"
    },
    {
        id : 2,
        title : "Fridge",
        image : "2.jpg",
        price : 5300,
        category : "Home Appliance"
    }
]
let city = [
        {
            name : "indore"
        },
        {
            name : "mumbai"
        },
        {
            name : "pune"
        }

    ]


let User = (req, res)=>{
    res.send(data);
}

let City = (req, res)=>{
    res.send(city);
}

let Product = (req, res)=>{
    res.send(product);
}

let Student = (req, res)=>{
    res.send({ message : "hello" })
}


export { User, City, Product, Student }