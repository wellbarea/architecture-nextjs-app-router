"use client"

import { Card, CardContent, CardMedia, Typography, Grid, CardActions } from "@mui/material";
import { Props } from "./types";

const List = ({ data }: Props) => {
    return (
        <Grid container spacing={3}>
            {data.map((item) => (
                <Grid item xs={12} sm={6} md={4} key={item.id}>
                    <Card>
                        <CardMedia
                            component="img"
                            height="140"
                            image={item.social_image}
                            alt={item.title}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {item.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {item.description}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Typography variant="body2" color="primary">
                                {item.user.username}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {item.tags}
                            </Typography>
                        </CardActions>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}

export default List;