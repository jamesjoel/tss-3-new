 let finalfees = (fees, marks, gender) => {
    let discount;

    if (marks>90){
        discount = 40;
    }
    else if (marks>80 && marks<=90){
        discount = 30;
    }
    else if (marks>70 && marks<=80){
        discount = 20;
    }
    else if (marks>60 && marks<=70){
        discount = 10;
    }
    else {
        discount;
    }

    switch (gender){
        case "female": 
            discount += 5;
            break;
        case "male" :
            discount;
            break;
        default :
        console.log("Invalid");  
    }

    let discount_amount = fees*(discount/100);
    let final_amount = fees - discount_amount;
    return final_amount;
}

let final_amount = finalfees(40000,82,"female");
console.log("final fees to be deposited is " + final_amount );
