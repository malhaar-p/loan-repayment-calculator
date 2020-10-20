const container: HTMLElement | any = document.getElementById("app");



export interface ILoan {
    id: number;
    type: string;

    // local values;
    amount: number;
    duration: number; // years or month or days? Need to check that based on the formulae.
    interestRate: number; 

}


function calcInterestMonthly(loanAmount: number, interestRate: number) : number {

    let totalInterest = (interestRate*loanAmount)/12;
    return totalInterest;
}

function calcLoanAmountBalance(loanAmount: number, principalPaid: number) : number {
    return loanAmount-principalPaid;
}


