import { StateEnum } from "@/src/entities";

export type Props = {
    setState: (_enum: StateEnum) => void;
    state: StateEnum;
}