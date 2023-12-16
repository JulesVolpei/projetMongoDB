import React from 'react';

const Intro = () => {
    return (
        <header style={{
            backgroundColor: '#e2ac6c',
            padding: '15px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '1rem',
        }}>
            <a href="" style={{
                textDecoration: 'none',
                color: '#ab3833',
                fontWeight: 'bold',
                fontSize: '16px',
            }}>
                <h1 style={{
                    color: '#ab3833',
                    margin: '0',
                    fontSize: '24px',
                }}>MongoDBTP</h1>
            </a>
            <nav>
                <ul style={{
                    listStyle: 'none',
                    display: 'flex',
                }}>
                    <li style={{marginRight: '20px',}}>
                        <a style={{
                            textDecoration: 'none',
                            color: '#ab3833',
                            fontWeight: 'bold',
                            fontSize: '16px',
                        }} href="entreprise">Entreprises</a>
                    </li>
                    <li style={{marginRight: '20px',}}>
                        <a style={{
                            textDecoration: 'none',
                            color: '#ab3833',
                            fontWeight: 'bold',
                            fontSize: '16px',
                        }} href="services">Services</a>
                    </li>
                    <li style={{marginRight: '20px',}}>
                        <a style={{
                            textDecoration: 'none',
                            color: '#ab3833',
                            fontWeight: 'bold',
                            fontSize: '16px',
                        }} href="contact">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Intro;
