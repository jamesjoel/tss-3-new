let gst=(price,slab)=>{
    let ans;
    let x;
    switch(slab){
        case 1 : x = price*5/100;
                ans=price+x;
                break;
        case 2 : x = price*8/100;
                ans=price+x;
                break;
        case 3 : x = price*18/100;
                ans=price+x;
                break;
        case 4 : x = price*28/100;
                ans=price+x;
                break;
    }
    console.log(ans);
}

gst(12000,3);