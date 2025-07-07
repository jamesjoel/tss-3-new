let gst2 =(price,slab) => {
let ans; 
let x;
switch (slab) {
        case 1: x=price*5/100;
                ans=price + x;
        break;
        case 2:x=price+price*8/100;
                ans=price + x;
        break;
        case 3:x=price+price*18/100;
                ans=price + x;
        break;
        case 4:x=price+price*28/100;
                ans=price + x;
        break;

    default:
        break;
}
console.log (ans);
}
gst2(9523,1);



let gst =(sp,slab) => {
let price; 
switch (slab) {
        case 1:price= sp/(1+(5/100));
        break;
        case 2:price= sp/(1+(8/100));
        break;
        case 3:price= sp/(1+(12/100))
        break;
        case 4:price= sp/(1+(28/100))
        break;

    default:
        break;
}
console.log (price);
}
// gst(1800,1);
/*
10000/1+0.05;

10000/1.05


9523
477
5
*/