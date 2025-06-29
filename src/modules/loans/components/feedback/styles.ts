import { styled } from "@mui/material/styles";
import { Stack, Theme, Typography } from "@mui/material";

export const FeedbackContainer = styled(Stack)(({ theme }: { theme: Theme }) => ({
    component: 'section',
    padding: theme.spacing(3),
    backgroundColor: "#7146B5",
    alignItems: "center",
}));

export const FeedbackContent = styled(Stack)(({ theme }) => ({
    gap: theme.spacing(2),
    alignItems: "start",
    width: "100%",

    [theme.breakpoints.up('md')]: {
        width: 980,
        padding: 0,
    },
}));

export const FeedbackText = styled(Typography)(() => ({
    color: "#FFFFFF",
    fontWeight: 500,
    fontSize: 16,
}));

export const FeedbackTitle = styled(Typography)(({ theme }: { theme: Theme }) => ({
    color: "#FFFFFF",
    fontWeight: 500,
    fontSize: theme.typography.h6.fontSize,
}));