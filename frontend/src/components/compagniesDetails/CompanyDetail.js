import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const CompanyDetail = ({enterprise}) => {
    const {
        nom,
        adresse,
        localisation,
        ressourcesHumaines,
        contacts,
        horaires,
        services,
    } = enterprise;

    return (
        <Paper elevation={3} sx={{padding: '20px', marginBottom: '20px'}}>
            <Typography variant="h4" gutterBottom>
                {nom}
            </Typography>
            <Typography gutterBottom>
                {services.join(', ')}
            </Typography>

            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h6" gutterBottom>
                        Adresse:
                    </Typography>
                    <Typography>{`${adresse.numero} ${adresse.voie}, ${adresse.codePostal} ${adresse.ville}`}</Typography>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Typography variant="h6" gutterBottom>
                        Localisation:
                    </Typography>
                    <Typography>{`Coordonées: ${localisation.coordinates}`}</Typography>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Typography variant="h6" gutterBottom>
                        Ressources humaines:
                    </Typography>
                    <Typography>{`Directeur: ${ressourcesHumaines.directeur}`}</Typography>
                    <Typography>{`Nombre d'employés: ${ressourcesHumaines.nombreEmployes}`}</Typography>
                    <Typography>{`Nombre d'ouvriés: ${ressourcesHumaines.nombreOuvriers}`}</Typography>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Typography variant="h6" gutterBottom>
                        Contact :
                    </Typography>
                    <Typography>{`Telephone: ${contacts.telephone}`}</Typography>
                    <Typography>{`Mail: ${contacts.mail}`}</Typography>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Typography variant="h6" gutterBottom>
                        Horaires :
                    </Typography>

                    <List sx={{
                        display: 'flex',
                        width: '100%',
                        flexWrap: 'wrap'
                    }}>
                        {horaires.map((horaire, index) => (
                            <ListItem key={index} sx={{
                                backgroundColor: '#f0f0f0',
                                width: '8rem',
                                flex: '0 0 40%',
                                margin: '0 0.5rem 0 0',
                                overflow: 'hidden',
                            }}>
                                <ListItemText
                                    primary={`${horaire.jour}: ${horaire.debut}h - ${horaire.fin}h`}
                                />
                            </ListItem>
                        ))}
                    </List>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default CompanyDetail;