import { useArticles } from "@/src/services";
import { ArticleListParams } from "./types";

export const useArticlesList = (params: ArticleListParams) => {
    const { data, isLoading, refetch, fetchNextPage, isFetchingNextPage } = useArticles(params);

    return {
        data,
        isLoading,
        isFetchingNextPage,
        fetchNextPage,
        refetch
    }
}
