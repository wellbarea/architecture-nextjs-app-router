"use client"

import React from 'react';
import { ErrorMessageTypography } from './styles';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

type Props = {
    message?: string;
    testId?: string;
}

export const ErrorMessage = ({ message, testId }: Props) => {
    return (
        <ErrorMessageTypography data-testid={testId}>
            <ErrorOutlineIcon fontSize='small' />
            {message}
        </ErrorMessageTypography>
    );
};