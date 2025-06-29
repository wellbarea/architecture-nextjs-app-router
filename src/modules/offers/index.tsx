"use client";

import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  Container,
} from "@mui/material";
import { Controller } from "react-hook-form";
import { useOffersForm } from "./hooks/use-offers-form";
import { offersPurposeOptions, offersTermOptions } from "@/src/constants";
import { useEffect } from "react";
import { Section, StyledButton, StyledForm } from "./styles";
import { Summary } from "./components/summary";
import { formatCurrency } from "@/src/utils";
import { ErrorMessage } from "@/src/components/error-message";

const Screen = () => {
  const {
    form: {
      control,
      formState: { errors, isValid },
      watch,
    },
    offersSummary,
    submitted,
    handleSubmit,
    sendToLoansPage,
  } = useOffersForm();

  const formValues = watch();

  useEffect(() => {
    const allFieldsFilled = Object.values(formValues).every((value) => value);

    if (
      allFieldsFilled &&
      !submitted &&
      !errors.amount &&
      !errors.loanPurpose &&
      !errors.terms
    ) {
      handleSubmit();
    }
  }, [errors, formValues, handleSubmit, submitted]);

  return (
    <>
      <Container data-testid="offers-application-screen">
        <StyledForm aria-labelledby="offers-application-form">
          <Typography
            variant="h4"
            id="offers-application-form"
            color="#000000"
            fontWeight={500}
          >
            Loan Application
          </Typography>

          <Controller
            name="loanPurpose"
            control={control}
            render={({ field }) => (
              <>
                <FormControl fullWidth margin="normal">
                  <InputLabel htmlFor="offers-purpose-select">
                    Loan Purpose
                  </InputLabel>
                  <Select
                    {...field}
                    id="offers-purpose-select"
                    label="Loan Purpose"
                    value={field.value || ""}
                    displayEmpty
                  >
                    {offersPurposeOptions.map(({ label, value }) => (
                      <MenuItem
                        key={value}
                        value={value}
                        data-testid={`offers-purpose-option-${value}`}
                      >
                        {label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                {errors.loanPurpose && (
                  <ErrorMessage
                    message={errors.loanPurpose.message}
                    testId="offers-purpose-error"
                  />
                )}
              </>
            )}
          />

          <Controller
            name="amount"
            control={control}
            render={({ field }) => (
              <>
                <TextField
                  {...field}
                  id="offers-amount-input"
                  label="Total Loan Amount"
                  fullWidth
                  margin="normal"
                  type="text"
                  value={field.value}
                  onChange={({ target }) => {
                    field.onChange(formatCurrency(target.value));
                  }}
                />
                {errors.amount && (
                  <ErrorMessage
                    message={errors.amount.message}
                    testId="offers-amount-error"
                  />
                )}
              </>
            )}
          />

          <Controller
            name="terms"
            control={control}
            render={({ field }) => (
              <>
                <FormControl fullWidth margin="normal">
                  <InputLabel htmlFor="offers-terms-select">
                    Total Loan Amount
                  </InputLabel>
                  <Select
                    {...field}
                    id="offers-terms-select"
                    label="Total Loan Amount"
                    value={field.value || ""}
                    displayEmpty
                  >
                    {offersTermOptions.map(({ label, value }) => (
                      <MenuItem
                        key={value}
                        value={value}
                        data-testid={`offers-terms-option-${value}`}
                      >
                        {label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                {errors.terms && (
                  <ErrorMessage
                    message={errors.terms.message}
                    testId="offers-terms-error"
                  />
                )}
              </>
            )}
          />
        </StyledForm>

        <Typography
          sx={{ display: { xs: "none", md: "block" } }}
          width={458}
          textAlign="start"
          variant="body1"
          marginTop={2}
          marginBottom={4}
          fontSize={12}
          data-test-id="offtersd"
          color="#888888"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sagittis
          dictum dignissim. In hac habitasse platea dictumst. Duis at efficitur
          dolor. Nulla id venenatis lectus, vitae laoreet magna. Etiam tincidunt
          ipsum sapien, sed convallis dui mollis eget. Vestibulum a cursus eros,
          et tempor odio. Integer ut lobortis metus. Curabitur elementum sapien
          quam, lobortis blandit ipsum varius at.
        </Typography>

        {offersSummary && (
          <Summary
            apr={offersSummary?.apr}
            monthlyPayments={offersSummary?.monthlyPayments}
          />
        )}
      </Container>

      <Section>
        <Typography
          sx={{ display: { xs: "block", md: "none" } }}
          variant="body1"
          marginBottom={2}
          fontSize={12}
          data-test-id="offtersd"
          color="#888888"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sagittis
          dictum dignissim. In hac habitasse platea dictumst. Duis at efficitur
          dolor. Nulla id venenatis lectus, vitae laoreet magna. Etiam tincidunt
          ipsum sapien, sed convallis dui mollis eget. Vestibulum a cursus eros,
          et tempor odio. Integer ut lobortis metus. Curabitur elementum sapien
          quam, lobortis blandit ipsum varius at.
        </Typography>

        <StyledButton
          fullWidth
          onClick={sendToLoansPage}
          type="button"
          size="large"
          variant="contained"
          disabled={!(isValid && offersSummary)}
          color="primary"
          data-testid="submit-offers-application"
        >
          SUBMIT APPLICATION
        </StyledButton>
      </Section>
    </>
  );
};

export default Screen;
