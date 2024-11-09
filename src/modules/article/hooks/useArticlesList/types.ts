import { StateEnum } from "@/src/entities";

export type ArticleListParams = {
    username?: string;
    tags?: string[];
    state?: StateEnum;
}