import React from 'react';
import {makeStyles} from "@material-ui/core/styles";

const Intro = () => {
    const classes = useStyles();
    return(
        <header className={classes.introHeader}>
            <h1 className={classes.logo}>MongoDbtp</h1>
            <nav className={classes.navLinks}>
                <ul className={classes.navLinksUl}>
                    <li className={classes.navLinksLi}><a className={classes.navLinksA} href="#">Accueil</a></li>
                    <li className={classes.navLinksLi}><a className={classes.navLinksA} href="#">Entreprises</a></li>
                    <li className={classes.navLinksLi}><a className={classes.navLinksA} href="#">Services</a></li>
                    <li className={classes.navLinksLi}><a className={classes.navLinksA} href="#">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

const useStyles = makeStyles({
    introHeader : {
        backgroundColor: '#e2ac6c',
        padding: '15px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '3rem',
    },

    logo : {
        color: '#ab3833',
        margin: '0',
        fontSize: '24px',
    },

    navLinksUl : {
        listStyle: 'none',
        display: 'flex',
    },

    navLinksLi : {
        marginRight: '20px',
    },

    navLinksA : {
        textDecoration: 'none',
        color: '#ab3833',
        fontWeight: 'bold',
        fontSize: '16px',
    },
})

export default Intro;
