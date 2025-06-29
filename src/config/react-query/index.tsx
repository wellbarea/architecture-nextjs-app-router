"use client";

import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Props } from "./types";
import { customLogger, defaultOptions } from "@/src/constants";

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error, query) => {
      customLogger.error(`[query]: ${query.queryKey} failed:`, error);
    },
    onSuccess: (data, query) => {
      customLogger.log(`[query]: ${query.queryKey} succeeded:`, data);
    },
    onSettled: (data, error, query) => {
      if (error) {
        customLogger.warn(
          `[query]: ${query.queryKey} settled with error:`,
          error
        );
        return;
      }

      customLogger.log(
        `[query]: ${query.queryKey} settled successfully:`,
        data
      );
    },
  }),
  defaultOptions,
});

const ReactQueryProvider = ({ children }: Props) => (
  <QueryClientProvider client={queryClient}>
    {children}
    <ReactQueryDevtools initialIsOpen={false} position="bottom" />
  </QueryClientProvider>
);

export default ReactQueryProvider;
