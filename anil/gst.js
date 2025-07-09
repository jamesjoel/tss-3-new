// GST calculator code here 
let gst = (sp, slab) => {
    let price; 
    switch (slab) {
        case 1:
            price = sp / (1 + 0.05);
            break;
        case 2:
            price = sp / (1 + 0.08);
            break;
        case 3:
            price = sp / (1 + 0.12);
            break;
        case 4:
            price = sp / (1 + 0.28);
            break;
        default:
            console.log("Invalid GST slab");
            return;
    }
    console.log("Price before GST: ₹" + price.toFixed(2));
}

gst(18000, 1);  // Output: ₹17142.86
