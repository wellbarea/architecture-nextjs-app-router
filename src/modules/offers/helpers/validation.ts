import { parseCurrencyToNumber } from "@/src/utils";
import { z } from "zod";

export const offersInformationSchema = z.object({
  loanPurpose: z.string().nonempty("Loan purpose is required"),
  amount: z
    .string()
    .refine(
      (value) => {
        const numberValue = parseCurrencyToNumber(value);
        return numberValue >= 0;
      },
      { message: "Amount must be a positive number" }
    )
    .refine(
      (value) => {
        const numberValue = parseCurrencyToNumber(value);
        return numberValue >= 0.01;
      },
      { message: "Amount is required" }
    ),
  terms: z.number().min(1, { message: "Loan term is required" }),
});

export type OffersInformationForm = z.infer<typeof offersInformationSchema>;
