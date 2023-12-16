import {Card, CardContent} from "@mui/material";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import CommentPost from "./CommentPost";

const CommentDetails = (props) => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
            {props.comments.map((comment, index) => (
                <Grid item xs={12} key={index}>
                    <Card sx={{ marginBottom: 2 }}>
                        <CardContent>
                            <Typography variant="h6">{comment.auteur}</Typography>
                            <Typography color="text.secondary">{comment.dateCreation.toLocaleString()}</Typography>
                            <Typography variant="body2">{comment.contenu}</Typography>
                            <Typography variant="caption">Note: {comment.note}/5</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
            </Grid>
            <Grid item xs={12}>
                <CommentPost companyName={props.companyName}/>
            </Grid>
        </Grid>
    );
}

export default CommentDetails;