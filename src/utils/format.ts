export const formatCurrency = (value: number | string) => {
  if (!value) return `$0.00`;

  const numericValue = parseFloat(String(value).replace(/\D/g, "")) / 100;

  return numericValue.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};

export const parseCurrencyToNumber = (value: string): number => {
  const normalizedValue = parseFloat(value.replace(/[^\d.-]/g, ""));

  return isNaN(normalizedValue) ? 0 : normalizedValue;
};
