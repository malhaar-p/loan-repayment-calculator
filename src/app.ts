const container: HTMLElement | any = document.getElementById("app");



export interface ILoan {
    id: number;
    type: string;

    // local values;
    amount: number;
    duration: number; // years or month or days? Need to check that based on the formulae.
    interestRate: number; 

}


const calculate = (): void => {

    let loanAmount:number = document.getElementById("loanAmount").value;
    let interestRate:number = document.getElementById("rate").value;
    let duration:number = document.getElementById("rate").value;



    
}


function calcInterestMonthly(loanAmount: number, interestRate: number) : number {

    let totalInterest = (interestRate*loanAmount)/12;
    return totalInterest;
}

function calcLoanAmountBalance(loanAmount: number, principalPaid: number) : number {
    return loanAmount-principalPaid;
}


