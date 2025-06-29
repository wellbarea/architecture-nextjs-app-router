import { DefaultOptions } from "@tanstack/react-query";

const isDevelopment = process.env.NODE_ENV === "development";

const DEFAULT_LOG_FUNCTION = () => {};

export const customLogger = {
  log: isDevelopment ? console.log : DEFAULT_LOG_FUNCTION,
  warn: isDevelopment ? console.warn : DEFAULT_LOG_FUNCTION,
  error: isDevelopment ? console.error : DEFAULT_LOG_FUNCTION,
};

export const defaultOptions: DefaultOptions<Error> | undefined = {
  queries: {
    retry: 3,
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: true,
    refetchOnMount: true,
    refetchOnReconnect: true,
    placeholderData: true,
  },
};
