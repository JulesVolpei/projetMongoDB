import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const CompanyDetail = ({enterprise}) => {
    console.log('eeeeeeeeeeeeeeeeeee')
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
        <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
            <Typography variant="h4" gutterBottom>
                {nom}
            </Typography>
            <Typography gutterBottom>
                <p>{services.join(', ')}</p>
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
                    <Typography>{`Coordinates: ${localisation}`}</Typography>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Typography variant="h6" gutterBottom>
                        Ressources humaines:
                    </Typography>
                    <Typography>{`Director: ${ressourcesHumaines.directeur}`}</Typography>
                    <Typography>{`Employees: ${ressourcesHumaines.nombreEmployes}`}</Typography>
                    <Typography>{`Ouvriers: ${ressourcesHumaines.nombreOuvriers}`}</Typography>
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

                    <List style={{ width: '100%', display: 'flex', flexWrap: 'wrap' }}>
                        {horaires.map((horaire, index) => (
                            <ListItem
                                key={index}
                                style={{
                                    backgroundColor: '#f0f0f0',
                                    marginBottom: '8px',
                                    width: 'auto',
                                    flex: '0 0 50%', // Adjust the flex value based on your preference
                                    overflow: 'hidden', // Hide overflow content
                                }}
                            >
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