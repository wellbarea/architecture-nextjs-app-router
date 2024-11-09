import { StateEnum } from "@/src/entities";

export type ArticleParams = {
    username?: string;
    tags?: string[];
    state?: StateEnum;
}