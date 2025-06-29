"use client"

import { Loan } from '@/src/entities';
import { Stack, Divider } from '@mui/material';

import { StyledCard, LenderTypography, BalanceTypography, AutomobileDetailsTypography, AutomobileMilesTypography, StyledImage } from './styles';
import { formatCurrency } from '@/src/utils';
import { CardSummary } from '../card-summary';

export const Card = ({ loan }: { loan: Loan }) => {
    return (
        <StyledCard variant="outlined" key={loan.id} data-testid="loan-card">
            <header>
                <LenderTypography data-testid="loan-lender">
                    {loan.lender}
                </LenderTypography>

                <BalanceTypography data-testid="loan-balance">
                    {formatCurrency(loan.balance)}/month 
                </BalanceTypography>
            </header>

            <Stack direction="row" gap={4}>
                <StyledImage 
                    src={loan.automobile.imageSource} 
                    alt={`${loan.automobile.make} ${loan.automobile.model}`} 
                    width={71} 
                    height={50} 
                    data-testid="loan-automobile-image"
                />

                <Stack direction="column" gap={1}>
                    <AutomobileDetailsTypography data-testid="loan-automobile-details">
                        {loan.automobile.year} {loan.automobile.make}
                    </AutomobileDetailsTypography>
                    <AutomobileMilesTypography data-testid="loan-automobile-miles">
                        Estimated {loan.automobile.estimatedListPrice ? `${formatCurrency(loan.automobile.estimatedListPrice)} mil` : '(no provided)'} 
                    </AutomobileMilesTypography>
                </Stack>
            </Stack>

            <Divider />

            <Stack gap={1}>
                <CardSummary label='APR' value={`${loan.apr}%`} />
                
                <CardSummary label='Time remaining' value={`${loan.originalMonths} mo`} />
            </Stack>
        </StyledCard>
    )
}