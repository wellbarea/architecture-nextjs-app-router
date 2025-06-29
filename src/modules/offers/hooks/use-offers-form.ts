"use client";

import { useForm } from "react-hook-form";
import {
  OffersInformationForm,
  offersInformationSchema,
} from "../helpers/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback, useEffect, useState } from "react";
import { useOffersApplication } from "@/src/services/refinance";
import { useOffersContext } from "@/src/config/providers/offers";
import { useNotifications } from "@toolpad/core";
import { parseCurrencyToNumber } from "@/src/utils";
import { useRouter } from "next/navigation";

export const useOffersForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const notifications = useNotifications();
  const { mutate } = useOffersApplication();
  const { offersSummary, setOffersSummary } = useOffersContext();

  const router = useRouter();

  const form = useForm({
    defaultValues: {
      loanPurpose: "",
      amount: "",
      terms: 0,
    },
    resolver: zodResolver(offersInformationSchema),
    mode: "onChange",
  });

  const { handleSubmit } = form;

  useEffect(() => {
    setOffersSummary({ apr: 0, id: "", monthlyPayments: 0 });
  }, [setOffersSummary]);

  const sendToLoansPage = useCallback(() => {
    router.push("/loans");
  }, [router]);

  const onSubmitHandle = useCallback(
    (data: OffersInformationForm) => {
      setSubmitted(true);

      const params = { ...data, amount: parseCurrencyToNumber(data.amount) };

      mutate(params, {
        onSuccess: ({ data }) => {
          setOffersSummary(data);
        },
        onError: () => {
          notifications.show(
            "An unexpected error has occurred, please try again later!",
            {
              severity: "error",
              autoHideDuration: 3000,
            }
          );
        },
      });
    },
    [mutate, notifications, setOffersSummary]
  );

  return {
    form,
    offersSummary,
    submitted,
    sendToLoansPage,
    handleSubmit: handleSubmit(onSubmitHandle),
  };
};
