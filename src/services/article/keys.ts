import { StateEnum } from "@/src/entities";
import { QueryKey } from "@tanstack/react-query";

export const createArticleListKey = (state: StateEnum | undefined, tags: string[], username: string): QueryKey => ['articles', { state, tags, username }];
export const createTagistKey = (): QueryKey => [`tag`, `list`];