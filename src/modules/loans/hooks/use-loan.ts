"use client";

import { useOffersContext } from "@/src/config/providers/offers";
import { useAvailableLoans } from "@/src/services/refinance";
import { useNotifications } from "@toolpad/core";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const useLoan = () => {
  const { offersSummary } = useOffersContext();
  const { data, isError } = useAvailableLoans(offersSummary?.id ?? "");
  const notifications = useNotifications();
  const router = useRouter();

  useEffect(() => {
    if (!offersSummary?.id) {
      router.push("/");
      return;
    }

    if (isError) {
      notifications.show(
        "An unexpected error has occurred, please try again later!",
        {
          severity: "error",
          autoHideDuration: 3000,
        }
      );
    }
  }, [isError, notifications, offersSummary?.id, router]);

  return {
    loansAvailable: data?.loansAvailable,
  };
};
