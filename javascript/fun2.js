let demo = (a, b, c = 1)=>{
   
    let x = a*b;
    let y = x/c;

    console.log(y);
}

demo(1000, 5, 10);
demo(500, 6, 5);
demo(370, 10);