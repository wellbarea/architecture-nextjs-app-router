import { styled, Theme } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

export const Section = styled(Box)(({ theme }: { theme: Theme }) => ({
  paddingTop: "16px",

  [theme.breakpoints.up('md')]: {
    width: 458,
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