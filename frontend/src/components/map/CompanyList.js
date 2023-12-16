import Grid from "@mui/material/Unstable_Grid2";
import Box from '@mui/material/Box';
import useGET from "../../hooks/useGET";
import {useEffect, useState} from "react";
import axios from "axios";
import CompanySearch from "./CompanySearch";

const CompanyList = (props) => {
    const [response, setUrl] = useGET("api/entreprise");
    const [companiesOverview, setCompaniesOverview] = useState([]);

    useEffect(() => {
        if (response !== undefined) {
            let tempTab = [];
            response.map((item) => {
                const address = item.adresse.numero + ' ' + item.adresse.voie + ' ' + item.adresse.codePostal + ' ' + item.adresse.ville;

                let services = item.services.slice(0, 2).join(' ');
                if (item.services.length > 2) services += '...';

                const companyObj = {
                    name: item.nom,
                    activity: services,
                    address: address,
                };

                tempTab.push(companyObj);
            });

            setCompaniesOverview(tempTab);
        }
    }, [response]);

    return (
        <Box sx={{height: '26rem', overflow: 'auto'}}>
            <Grid container>
                <CompanySearch/>
            </Grid>
            <Grid container>
                {companiesOverview.map((entreprise, index) => (
                    <Grid item key={index} xs={12} sx={{
                        backgroundColor: '#fff',
                        '&:hover': {
                            backgroundColor: '#dcdcdc',
                            opacity: [0.9, 0.8, 0.7],
                        },
                    }}
                          onClick={() => props.setCompanyName(entreprise.name)}
                    >
                        <div style={{
                            display: 'block',
                            height: '1px',
                            border: '0',
                            borderTop: '1px solid black',
                            margin: '0.25em 0',
                            padding: '0',
                        }}></div>
                        <Box sx={{textTransform: 'uppercase'}}>
                            {entreprise.name}
                        </Box>
                        <Box sx={{fontSize: '0.75rem'}}>
                            {entreprise.activity}
                        </Box>
                        <Box>
                            {entreprise.address}
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