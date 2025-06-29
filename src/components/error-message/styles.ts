import { styled, Theme } from "@mui/material/styles";
import { Typography } from "@mui/material";

export const ErrorMessageTypography = styled(Typography)(({ theme }: { theme: Theme }) => ({
    role: 'alert',
    
    color: theme.palette.error.main,
    marginTop: theme.spacing(-2),
    fontSize: theme.typography.body1.fontSize,

    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1)
}));