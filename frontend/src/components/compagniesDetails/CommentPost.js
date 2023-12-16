import React, {useState} from 'react';
import {Button, TextField, Typography, Box, Rating} from '@mui/material';
import Grid from "@mui/material/Grid";
import usePOST from "../../hooks/usePOST";

const CommentPost = (props) => {
    const [response, setUrl] = usePOST()
    const [comment, setComment] = useState('');
    const [author, setAuthor] = useState('');
    const [stars, setStars] = useState(0);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({comment, author, stars});
        setUrl({
            url: 'api/commentaire/',
            data:
                {
                    entrepriseNom: props.companyName,
                    auteur: author,
                    contenu: comment,
                    dateCreation: new Date(),
                    note: stars,
                }
        })
        console.log(response)
    };

    return (
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{mt: 1}}>
            <Typography variant="h6">Commente l'entreprise</Typography>
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
                <Grid item xs={3} container alignItems="center">
                    <Typography component="legend">Note : </Typography>
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
