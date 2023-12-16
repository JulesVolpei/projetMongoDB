import React, {useState} from 'react';
import {Button, TextField, Typography, Box, Rating} from '@mui/material';
import Grid from "@mui/material/Grid";

const CommentPost = () => {
    const [comment, setComment] = useState('');
    const [author, setAuthor] = useState('');
    const [stars, setStars] = useState(0);

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle the form submission logic here
        console.log({comment, author, stars});
    };

    return (
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{mt: 1}}>
            <Typography variant="h6">Post a Comment</Typography>
            <TextField
                margin="normal"
                required
                fullWidth
                id="comment"
                label="Commentaire"
                name="comment"
                autoComplete="comment"
                autoFocus
                value={comment}
                onChange={(e) => setComment(e.target.value)}
            />
            <Grid container justifyContent="space-between">
                <Grid item sm={4}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="author"
                        label="Auteur"
                        name="author"
                        autoComplete="author"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                </Grid>
                <Grid item xs={4}>
                    <Typography component="legend">Note</Typography>
                    <Rating
                        name="simple-controlled"
                        value={stars}
                        onChange={(event, newValue) => {
                            setStars(newValue);
                        }}
                    />
                </Grid>
            </Grid>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{mt: 3, mb: 2}}
            >
                Post Commentaire
            </Button>
        </Box>
    );
}

export default CommentPost;
