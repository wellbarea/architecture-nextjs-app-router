"use client"

import { Feedback } from "@/src/modules/loans/components/feedback";

type Props = {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<Props>) {
  return (
    <>
      <Feedback />
      {children}
    </>
  );
}
