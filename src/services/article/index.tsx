import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { createArticleListKey, createTagistKey } from "./keys";
import { AxiosError, AxiosResponse } from "axios";
import { IArticle, ITag } from "@/src/entities";
import { api } from "@/src/config/axios";
import { ArticleParams } from "./types";
import { LIMIT } from "@/src/constants/article";

export const useArticles = ({ state, tags = [], username = '' }: ArticleParams) => {
    return useInfiniteQuery<AxiosResponse<IArticle[], AxiosError>>({
        queryKey: createArticleListKey(state, tags, username),
        queryFn: ({ pageParam = 1 }) => api.get<IArticle[]>(`/articles`, { params: { per_page: LIMIT, page: pageParam, state: state, tag: tags?.join(`,`), username: username } }),
        getNextPageParam: (_, pages) => pages.length + 1,
        initialPageParam: 1,
    });
}

export function useTagsQuery() {
    return useQuery(
        {
            queryKey: createTagistKey(),
            queryFn: async () => {
                const { data } = await api.get<ITag[]>(`/tags`);
                return data;
            }
        }
    );
  }
  