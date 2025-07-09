function calculateEMI(principal, annualRate, months) {
    let monthlyRate = annualRate / 12 / 100;

    let emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
              (Math.pow(1 + monthlyRate, months) - 1);

    return emi.toFixed(2);
}

// Example :-
let loanAmount = 100000;   // ₹1,00,000
let interestRate = 10;     // 10% annual
let loanTenure = 12;       // 12 months

let emi = calculateEMI(loanAmount, interestRate, loanTenure);
console.log("Your EMI is ₹" + emi);
