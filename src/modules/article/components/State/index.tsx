"use client"

import { Grid, Chip } from "@mui/material";
import { Props } from "./types";
import { StateEnum, StateMapper } from "@/src/entities";

const State = ({ state, setState }: Props) => {

    const enumValues = Object.values(StateEnum);

    return (
        <Grid container spacing={2}>
            {enumValues.map((enumValue) => (
                <Grid item key={enumValue}>
                    <Chip
                        label={StateMapper[enumValue]}
                        clickable
                        color={state === enumValue ? "primary" : "default"}
                        onClick={() => setState(enumValue)}
                    />
                </Grid>
            ))}
        </Grid>
    )
}

export default State;