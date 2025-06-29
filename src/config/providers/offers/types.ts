import { OffersformationResponse } from "@/src/entities";
import { ReactNode } from "react";

export interface OffersContextProps {
    offersSummary?: OffersformationResponse;
    setOffersSummary: (data: OffersformationResponse) => void;
}

export type OffersProviderProps = {
    children: ReactNode;
}