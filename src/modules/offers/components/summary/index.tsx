"use client"

import { Divider, Stack } from "@mui/material"
import { Section, SummaryText, SummaryValue } from "./styles"
import { formatCurrency } from "@/src/utils"

type Props = {
    monthlyPayments?: number
    apr?: number;
}

export const Summary = ({ apr, monthlyPayments }: Props) => {
    return (
        <Section>
            <Stack direction="row" justifyContent="space-between" paddingY={1}>
                <SummaryText>Monthly payment</SummaryText>
                <SummaryValue data-testid="monthly-payments">{monthlyPayments ? `${formatCurrency(monthlyPayments)}` : "-"}</SummaryValue>
            </Stack>
            
            <Divider />

            <Stack direction="row" justifyContent="space-between" paddingY={1}>
                <SummaryText>APR</SummaryText>
                <SummaryValue data-testid="loan-apr">{apr ? `${apr}%` : "-"}</SummaryValue>
            </Stack>
        </Section>
    )
}