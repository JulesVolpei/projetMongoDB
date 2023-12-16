import React from 'react';
import {Typography} from "@mui/material";

const Intro = () => {
    return (
        <header style={{
            backgroundColor: '#e2ac6c',
            padding: '15px',
            marginBottom: '1rem',
        }}>
            <Typography variant="h4" sx={{textAlign: "center"}}>
                MongoDBTP
            </Typography>
        </header>
    );
}

export default Intro;
