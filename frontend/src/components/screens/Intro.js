// Intro.js

import React from 'react';
import './Intro.css'; // Assure-toi de créer un fichier Intro.css pour y définir les styles

const Intro = () => {
    return (
        <header className="intro-header">
            <h1 className="logo">MongoDbtp</h1>
            <nav className="nav-links">
                <ul>
                    <li><a href="#">Accueil</a></li>
                    <li><a href="#">Entreprises</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Intro;
