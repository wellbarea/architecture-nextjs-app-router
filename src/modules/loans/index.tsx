"use client";

import React from 'react';
import { Typography } from "@mui/material";
import { useLoan } from "./hooks/use-loan";
import { Card } from './components/card';
import { ScreenContainer, ScreenWrapper, SavingsBox, LoansContainer } from './styles';

const Screen = () => {
    const { loansAvailable } = useLoan();

    return (
        <ScreenContainer data-testid="screen-container">
            <ScreenWrapper>
                <SavingsBox data-testid="savings-box">
                    <Typography variant="body1" fontSize={12} fontWeight={700} color="#008000">SAVINGS AVAILABLE</Typography>
                </SavingsBox>

                <Typography variant="body1" color="#585858" data-testid="savings-message">
                    <span style={{ fontWeight: 700, color: '#585858' }}>You could be saving money</span> on your existing loans
                </Typography>
                
                <LoansContainer data-testid="loans-container">
                    {loansAvailable?.map((loan) => <Card loan={loan} key={loan.id} />)}
                </LoansContainer>
            </ScreenWrapper>
        </ScreenContainer>
    );
}

export default Screen;