import { QueryKey } from "@tanstack/react-query";

export const createAvailableLoansKey = (id: string): QueryKey => ['availableLoans', id];