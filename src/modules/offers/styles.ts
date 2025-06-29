import { styled, Theme } from "@mui/material/styles";
import { Box, Button, Stack, Typography } from "@mui/material";

export const StyledForm = styled(Box)(({ theme }: { theme: Theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  paddingTop: "26px",
  marginBottom: "40px",

  [theme.breakpoints.up('md')]: {
    width: 458,
    marginBottom: 0,
  },
}));

export const Container = styled(Stack)(() => ({
  height: "100%",
  padding: "24px",
  justifyContent: "space-between",
}));

export const Section = styled(Box)(({ theme }: { theme: Theme }) => ({
  padding: "16px",
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,

  [theme.breakpoints.up('md')]: {
    border: "2px solid #E7E7E7",
    display: "flex",
    justifyContent: "center",
  },
}));

export const SummaryText = styled(Typography)(() => ({
  fontSize: "16px",
  color: "#424242",
}));

export const SummaryValue = styled(Typography)(() => ({
  fontSize: "16px",
  fontWeight: 700,
  color: "#121212",
}));

export const StyledButton = styled(Button)(({ theme }: { theme: Theme }) => ({
  marginTop: "16px",
  backgroundColor: "#7146B5",
  height: "57px",

  [theme.breakpoints.up('md')]: {
    width: 404,
  },
}));

export const DescriptionBox = styled(Box)(() => ({
  color: "#888888",
  fontSize: "14px",
}));