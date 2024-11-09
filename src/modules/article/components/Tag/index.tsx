"use client"

import { Grid, Chip } from '@mui/material';
import { Props } from './types';

const Tag = ({ tags, selectedTags, setSelectedTags }: Props) => {

  const handleTagClick = (tagName: string) => {
    setSelectedTags(prev => {
        if (prev.includes(tagName)) {
          return prev.filter((tag) => tag !== tagName);
        }
    
      return [...prev, tagName];
    })
  };

  return (
    <Grid container spacing={1}>
      {tags?.map((item) => (
        <Grid item key={item.id}>
          <Chip
            label={item.name}
            onClick={() => handleTagClick(item.name)}
            clickable
            color={selectedTags.includes(item.name) ? "primary" : "default"}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default Tag;