import { styled } from "@mui/material/styles";
import { Typography, } from '@mui/material';

export const InfoLabelTypography = styled(Typography)(() => ({
    variant: 'body1',
    fontSize: 13,
    color: '#888888',
}));

export const InfoValueTypography = styled(Typography)(() => ({
    variant: 'body1',
    fontSize: 13,
    fontWeight: 700,
    color: '#121212',
}));