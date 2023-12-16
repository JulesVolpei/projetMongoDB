import Grid from "@mui/material/Unstable_Grid2";
import Box from '@mui/material/Box';
import useGET from "../../hooks/useGET";
import {useEffect, useState} from "react";
import axios from "axios";
import CompanySearch from "./CompanySearch";

const CompanyList = () => {

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

    const [response, setUrl] = useGET("");
    const [companiesOverview, setCompaniesOverview] = useState([]);

    useEffect(() => {
        if (response !== undefined) {
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

    return (
        <Box sx={{height: '26rem', overflow: 'auto'}}>
            <Grid container>
                <CompanySearch />
            </Grid>
            <Grid container>
                {entrepriseData.map((entreprise, index) => (
                    <Grid item key={index} xs={12} sx={{
                        backgroundColor: '#fff',
                        '&:hover': {
                            backgroundColor: '#dcdcdc',
                            opacity: [0.9, 0.8, 0.7],
                        },
                    }}>
                        <div style={{
                            display: 'block',
                            height: '1px',
                            border: '0',
                            borderTop: '1px solid black',
                            margin: '0.25em 0',
                            padding: '0',
                        }}></div>
                        <Box sx={{textTransform: 'uppercase'}}>
                            {entreprise.nom}
                        </Box>
                        <Box sx={{fontSize: '0.75rem'}}>
                            {entreprise.ressourcesHumaines.directeur}
                        </Box>
                        <Box>
                            {entreprise.contacts.telephone}
                        </Box>
                        <div style={{
                            display: 'block',
                            height: '1px',
                            border: '0',
                            borderTop: '1px solid black',
                            margin: '0.25em 0',
                            padding: '0',
                        }}></div>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default CompanyList;