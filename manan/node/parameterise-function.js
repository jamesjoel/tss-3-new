// let gst =(price,slab) => {
// let ans; 
// let x;
// switch (slab) {
//         case 1: x=price+price*5/100;
//                 ans=price + x;
//         break;
//         case 2:x=price+price*8/100;
//                 ans=price + x;
//         break;
//         case 3:x=price+price*18/100;
//                 ans=price + x;
//         break;
//         case 4:x=price+price*28/100;
//                 ans=price + x;
//         break;

//     default:
//         break;
// }
// console.log (ans);
// }
// gst(1800,3);



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
gst(1800,1);