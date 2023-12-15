import React from 'react';
import {makeStyles} from "@material-ui/core/styles";

const Footer = () => {
    const classes = useStyles();
    return(
        <footer className={classes.footer}>
            <div className={classes.footerBot}>
                <p>&copy; 2023 MongoDbtp - Tous droits réservés</p>
            </div>
        </footer>
    );
}

const useStyles = makeStyles({
    footer : {
        backgroundColor: '#e2ac6c',
        color: '#ab3833',
        padding: '15px 0',
        textAlign: 'center',
        marginTop: 'auto',
    },
    footerBot : {
        fontSize: '14px'
    },
})

export default Footer;
