let CalculateEMI = (Principal, InterestRate, Years ) => {

    let MonthlyEmi = InterestRate/12/100;
    let NoOfMonths = Years*12;

    let formula=(Principal*MonthlyEmi*(1+MonthlyEmi)**NoOfMonths)/(((1+MonthlyEmi)**NoOfMonths)-1);

              return (formula);

}

let finalmonthlyEMI = CalculateEMI(500000, 9, 10);
console.log("Monthly EMI is : " + finalmonthlyEMI);