import { styled, Theme } from "@mui/material/styles";
import { Box, Stack } from "@mui/material";

export const ScreenContainer = styled(Stack)(({ theme }: { theme: Theme }) => ({
    width: "100%",
    
    [theme.breakpoints.up('md')]: {
        display: "flex",
        alignItems: "center",
    },
}));

export const ScreenWrapper = styled(Stack)(({ theme }: { theme: Theme }) => ({
    padding: `${theme.spacing(0)} ${theme.spacing(3)} ${theme.spacing(8)}`,
    marginTop: theme.spacing(2),
    flexDirection: "column",
    gap: theme.spacing(2),
    
    [theme.breakpoints.up('md')]: {
        width: 980,
        padding: 0,
    },
}));

export const SavingsBox = styled(Box)(({ theme }: { theme: Theme }) => ({
    width: 136,
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(),
    backgroundColor: "#EBF5EB",
}));

export const LoansContainer = styled(Stack)(({ theme }: { theme: Theme }) => ({
    width: "100%",
    flexDirection: "row",
    gap: theme.spacing(2),
    flexWrap: "wrap",
}));
