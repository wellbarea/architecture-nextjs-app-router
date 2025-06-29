"use client"

import { Header } from "../components/header";
import { OffersProvider } from "../config/providers/offers";
import ReactQueryProvider from "../config/react-query";
import { GlobalStyle } from "../config/styles/globalStyles";
import { NotificationsProvider } from '@toolpad/core/useNotifications';

type Props = {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<Props>) {
  return (
    <html lang="en">
      <body>
        <GlobalStyle />
        <ReactQueryProvider>
          <NotificationsProvider>
            <OffersProvider>
              <Header />
              {children}
            </OffersProvider>
          </NotificationsProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
