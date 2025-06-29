import { useMutation, useQuery } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";
import { api } from "@/src/config/axios";
import { createAvailableLoansKey } from "./keys";
import { LoanAvailableResponse, OffersformationResponse, OffersInformationRequest } from "@/src/entities";

const useOffersApplication = () => {
    return useMutation<AxiosResponse<OffersformationResponse>, AxiosError, OffersInformationRequest>({
        mutationFn: (loanData) => api.post('/offers', loanData),
    });
};

const useAvailableLoans = (userId: string) => {
    return useQuery<LoanAvailableResponse>({
        queryKey: createAvailableLoansKey(userId),
        queryFn: async () => {
            const { data } = await api.get<LoanAvailableResponse>(`/loans?userId=${userId}`);
            
            return data;
        }
    });
};

export { useOffersApplication, useAvailableLoans };