import { styled, Theme } from "@mui/material/styles";
import { Stack } from "@mui/material";

type BaseProps = {
    theme: Theme;
}

export const HeaderContainer = styled(Stack)(({ theme }: BaseProps) => ({
    component: 'header',
    
    padding: theme.spacing(2),
    borderBottom: "2px solid #F5F5F5",

    justifyContent: "center",
    alignItems: "center",

    [theme.breakpoints.up('md')]: {
        padding: theme.spacing(3),
    },
}));