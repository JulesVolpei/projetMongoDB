import Grid from "@mui/material/Unstable_Grid2";
import Box from '@mui/material/Box';
import {makeStyles} from "@material-ui/core/styles";
import useGET from "../../hooks/useGET";
import {useEffect, useState} from "react";
import axios from "axios";

const CompanyList = () => {
    const [response, setUrl] = useGET("");
    const [companiesOverview, setCompaniesOverview] = useState([]);

    useEffect(() => {
        if(response !== undefined){
            let tempTab = [];
            response.map((item) => {
                const companyObj = {
                    id: item.id_company,
                    name: item.nom,
                    activity: item.activite,
                    address: item.adresse,
                };

                tempTab.push(companyObj);
            });

            setCompaniesOverview(tempTab);
        }
    }, [response]);

    const classes = useStyles();
    const dummy = [{name: 'heelo', activity: "bois", address: 'la bas'}, {name: 'coucocu', activity: "plombier", address: 'pas loin'}];

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

    return (
        <>
            {entrepriseData.map((entreprise, index) => (
                <a href={entreprise.nom} className={classes.navLinksA}><Grid key={entreprise.nom} xs={12} className={classes.elementsBox}>
                    <div className={classes.lineSep}></div>
                    <Box sx={{textTransform: 'uppercase'}}>
                        {entreprise.nom}
                    </Box>
                    <Box xs={12} className={classes.activityStyle}>
                        {entreprise.ressourcesHumaines.directeur}
                    </Box>
                    <Box xs={12}>
                        {entreprise.contacts.telephone}
                    </Box>
                    <div className={classes.lineSep}></div>
                </Grid></a>
            ))}
        </>
    );
}

const useStyles = makeStyles({
    container : {
        padding: "0 0.25rem 0",
    },
    elementsBox: {
        backgroundColor: '#e2ac6c',
        color: '#ab3833',
        borderRadius: '7px',
        '&:hover': {
            backgroundColor: '#bd905b',
            opacity: [0.9, 0.8, 0.7],
        },
        '&.css-16fnxy3-MuiGrid2-root' : {
            padding: '0 0 0 0.5rem',
        },
    },
    navLinksA: {
        textDecoration: 'none',
    },
    lineSep: {
        display: 'block',
        height: '1px',
        border: '0',
        borderTop: '0px solid #fff',
        margin: '0.25em 0',
        padding: '0',
    },
    activityStyle: {
        fontSize: '0.75rem'
    },
})

export default CompanyList;