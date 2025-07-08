    let calculatefinalfees = (fees, marks, gender) => {
    let discountpercent;

    if (marks>90){
        discountpercent = 40;
    }
    else if (marks>80 && marks<=90){
        discountpercent = 30;
    }
    else if (marks>70 && marks<=80){
        discountpercent = 20;
    }
    else if (marks>60 && marks<=70){
        discountpercent = 10;
    }
    else {
        discountpercent;
    }

    switch (gender){
        case "female": 
            discountpercent += 5;
            break;
        case "male" :
            discountpercent;
            break;
        default :
        console.log("Invalid gender input");  
    }

    let discountamount = fees*(discountpercent/100);
    let finalfee = fees - discountamount;
    return finalfee;
}

let finalamount = calculatefinalfees(40000,82,"female");
console.log("final fee : " + finalamount );
