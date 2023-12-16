import React, { useState, useEffect } from 'react';
import {MapContainer, TileLayer, Marker, Popup, useMapEvents, Circle} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';
import L from 'leaflet';
import mapMarkerIcon from './mapmarker.png';

const Map = (props) => {
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

    const customIcon = new L.Icon({
        iconUrl: mapMarkerIcon,
        iconSize: [32, 32],
    });

    const ClickCircle = ({ radius }) => {
        const [circleCenter, setCircleCenter] = useState(null);

        useMapEvents({
            click(e) {
                setCircleCenter(e.latlng);
                props.setLatlng({lat: e.latlng.lat, lng: e.latlng.lng});
            },
        });

        return circleCenter ? (
            <Circle center={circleCenter} radius={radius} />
        ) : null;
    };

    return (
        <>
            <MapContainer center={[47.23634959915227, -1.5672333293399752]} zoom={16} style={{ height: '26rem', width: 'auto' }}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <ClickCircle radius={props.radius} />

                {entrepriseData.map((entreprise, index) => (
                    <Marker
                        key={index}
                        position={[entreprise.localisation.coordinates[0], entreprise.localisation.coordinates[1]]}
                        icon={customIcon}
                    >
                        <Popup>
                            <a href={entreprise.nom}><strong>{entreprise.nom}</strong></a>
                            <br />
                            {`Directeur : ${entreprise.ressourcesHumaines.directeur}`}
                            <br />
                            {`Contacter : ${entreprise.contacts.telephone}`}
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </>
    );
}

export default React.memo(Map);