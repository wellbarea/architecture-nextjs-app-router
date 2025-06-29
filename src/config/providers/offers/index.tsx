import React, { createContext, useContext, useState } from 'react';
import { OffersformationResponse } from "@/src/entities";
import { OffersContextProps, OffersProviderProps } from './types';

const OffersContext = createContext<OffersContextProps | undefined>(undefined);

export const OffersProvider = ({ children }: OffersProviderProps) => {
    const [offersSummary, setOffersSummary] = useState<OffersformationResponse | undefined>(undefined);

    return (
        <OffersContext.Provider value={{ offersSummary, setOffersSummary }}>
            {children}
        </OffersContext.Provider>
    );
};

export const useOffersContext = () => {
    const context = useContext(OffersContext);

    if (!context) {
        throw new Error('useLoanContext must be used within a LoanProvider');
    }

    return context;
};