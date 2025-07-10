let price = (GST, slab )=>{

    let ans;
    let x;
    switch(slab){
        case 1 : x = GST + (1+(5/100));
        ans = x;
        break;
        case 2 : x = GST + (1+(8/100));
        ans = x;
        break;
        case 3 : x = GST + (1+(12/100));
        ans = x;
        break;
        case 4 : x = GST + (1+(18/100));
        ans = x;
        break;
        case 5 : x = GST + (1+(28/100));
        ans = x;
        break;
    }
    console.log(ans);

}

price(12000,3)