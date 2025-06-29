import { Stack } from "@mui/material";
import { InfoLabelTypography, InfoValueTypography } from "./styles";

type Props = {
    label: string;
    value: string;
}

export const CardSummary = ({ label, value }: Props) => {
    return (
        <Stack direction="row" justifyContent="space-between">
            <InfoLabelTypography data-testid="loan-summary-label">
                {label}
            </InfoLabelTypography>
            <InfoValueTypography data-testid="loan-summary-value">
                {value}
            </InfoValueTypography>
        </Stack>
    )
}