let emi=(principle_amount,annual_interest_rate,years)=>{
    let Monthly_interest_rate= annual_interest_rate/12/100;
    let loan_tenure=years*12;


    let n= (1+Monthly_interest_rate)**loan_tenure
    let formula= (principle_amount*Monthly_interest_rate*n)/(n-1);

    return formula;
} 

let monthly_emi=emi(200000,10,5);
console.log("monthly emi is"+ monthly_emi);