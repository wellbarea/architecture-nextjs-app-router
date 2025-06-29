export interface OffersformationResponse {
    apr: number;
    id: string;
    monthlyPayments: number;
}

export interface OffersInformationRequest {
    loanPurpose: string;
    amount: number;
    terms: number;
}