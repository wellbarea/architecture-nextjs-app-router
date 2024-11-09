"use client"

import React, { useEffect, useMemo, useRef, useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import { useTagsQuery } from "@/src/services";
import { StateEnum } from "@/src/entities";
import { useArticlesList } from "./hooks/useArticlesList";
import Tag from "./components/Tag";
import State from "./components/State";
import List from "./components/List";

const ArticleScreen = () => {
  const [state, setState] = useState(StateEnum.FRESH);
  const [search, setSearch] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const inputRef = useRef<HTMLInputElement>(null);

  const { data: tags = [] } = useTagsQuery();
  const { data, isLoading, isFetchingNextPage, fetchNextPage, refetch } = useArticlesList({ state, username: search, tags: selectedTags });

  const items = useMemo(() => data?.pages.flatMap((page) => page.data) ?? [], [data]);

  useEffect(() => {
    refetch();
  }, [search, state, selectedTags, refetch]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleLoadMoreClick = () => {
    fetchNextPage();
  };

  return (
    <Box p={3} width="100%" display="flex" flexDirection="column" gap={2}>
      <Box display="flex" flexDirection="column" gap={2} width="100%">

        <Tag 
          tags={tags} 
          selectedTags={selectedTags} 
          setSelectedTags={setSelectedTags} />
        
        <Box width="100%">
          <TextField
            type="text"
            placeholder="Digite aqui..."
            inputRef={inputRef}
            value={search}
            onChange={handleInputChange}
            fullWidth
          />
        </Box>

        <Box width="100%">
          <State state={state} setState={(value: StateEnum) => setState(value)} />
        </Box>
      </Box>

      <List data={items} />

      {items.length ? (
        <Box width="100%" paddingTop={2} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
          <Button
            variant="contained"
            color="primary"
            onClick={handleLoadMoreClick}
            disabled={isFetchingNextPage && isLoading}
          >
            Carregar mais
          </Button>
        </Box>
      ) : (
        <Typography> Não contém informações para serem exibidas. </Typography>
      )}
    </Box>
  );
}

export default ArticleScreen;