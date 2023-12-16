import React from 'react';

const Intro = () => {
    return(
        <header style={styles.introHeader}>
            <a href="" style={styles.navLinksA}><h1 style={styles.logo}>MongoDbtp</h1></a>
            <nav style={styles.navLinks}>
                <ul style={styles.navLinksUl}>
                    <li style={styles.navLinksLi}><a style={styles.navLinksA} href="entreprise">Entreprises</a></li>
                    <li style={styles.navLinksLi}><a style={styles.navLinksA} href="services">Services</a></li>
                    <li style={styles.navLinksLi}><a style={styles.navLinksA} href="contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

const styles = {
    introHeader : {
        backgroundColor: '#e2ac6c',
        padding: '15px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '1rem',
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
}

export default Intro;
