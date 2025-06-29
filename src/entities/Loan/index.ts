export interface Automobile {
    isRefinanceable: boolean;
    id: string;
    vin: string;
    year: string;
    make: string;
    model: string;
    trim: string | null;
    mileage: number;
    estimatedListPrice: number | null;
    registrationDate: string;
    state: string | null;
    imageSource: string;
}

export interface Loan {
    id: string;
    lender: string;
    apr: string;
    balance: number;
    issueDate: string;
    monthlyPayments: number;
    originalAmount: number;
    originalMonths: number;
    remainingMonths: number;
    automobile: Automobile;
}

export interface LoanAvailableResponse {
    loansAvailable: Loan[];
}