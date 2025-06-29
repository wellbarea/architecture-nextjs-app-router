import { styled, Theme } from "@mui/material/styles";
import { Card as MuiCard, Typography, } from '@mui/material';
import Image from 'next/image';

export const StyledCard = styled(MuiCard)(({ theme }: { theme: Theme }) => ({
    width: '100%',
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    borderRadius: '16px',
    border: '2px solid #e7e7e7',

    [theme.breakpoints.up('md')]: {
        maxWidth: '447px',
    },
}));

export const LenderTypography = styled(Typography)(() => ({
    variant: 'body1',
    fontWeight: 500,
    color: '#424242',
}));

export const BalanceTypography = styled(Typography)(() => ({
    variant: 'body1',
    fontSize: 16,
    fontWeight: 500,
    color: '#424242',
}));

export const AutomobileDetailsTypography = styled(Typography)(() => ({
    variant: 'body1',
    fontSize: 16,
    fontWeight: 700,
    color: '#121212',
}));

export const AutomobileMilesTypography = styled(Typography)(() => ({
    variant: 'body1',
    fontSize: 12,
    color: '#888888',
}));

export const StyledImage = styled(Image)(() => ({
    borderRadius: '4px',
}));