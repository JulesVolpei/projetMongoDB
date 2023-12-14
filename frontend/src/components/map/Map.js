import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';
import L from 'leaflet';
import mapMarkerIcon from './mapmarker.png'; // Assurez-vous que le chemin est correct

const Map = () => {
    const [entrepriseData, setEntrepriseData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/entreprise');
                setEntrepriseData(response.data);
            } catch (error) {
                console.error('Erreur lors de la récupération des données :', error);
            }
        };

        fetchData();
    }, []);

    // Définir l'icône du marqueur avec l'image personnalisée
    const customIcon = new L.Icon({
        iconUrl: mapMarkerIcon,
        iconSize: [32, 32], // Spécifiez la taille de votre image
    });

    return (
        <div className="App">
            <MapContainer center={[47.23634959915227, -1.5672333293399752]} zoom={16} style={{ height: '26rem', width: 'auto' }}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {/* Afficher les marqueurs pour chaque entreprise */}
                {entrepriseData.map((entreprise, index) => (
                    <Marker
                        key={index}
                        position={[entreprise.localisation.coordinates[0], entreprise.localisation.coordinates[1]]}
                        icon={customIcon}
                    >
                        <Popup>
                            <a><strong>{entreprise.nom}</strong></a>
                            <br />
                            {`Directeur : ${entreprise.ressourcesHumaines.directeur}`}
                            <br />
                            {`Contacter : ${entreprise.contacts.telephone}`}
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
}

export default Map;