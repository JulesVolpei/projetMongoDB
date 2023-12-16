import Map from "./Map";
import CompanyList from "./CompanyList";
import Grid from "@mui/material/Unstable_Grid2";
import CompaniesDetails from "../compagniesDetails/CompagniesDetails";
import {useEffect, useState} from "react";
import useGET from "../../hooks/useGET";

const CompaniesOverview = () => {
    const [response, setUrl] = useGET('api/entreprise');

    const [companyName, setCompanyName] = useState('');
    const [radius, setRadius] = useState(0);
    const [latlng, setLatlng] = useState({});

    useEffect(() => {
        if (radius !== 0) {
            setUrl({api: `api/entreprises/${latlng.lat}/${latlng.lng}/${radius/1000}`});
            console.log('tt')
        }
        else setUrl({api: 'api/entreprise'});
        console.log(radius, latlng)
    }, [radius, latlng]);

    return (
        <>
            <Grid container sx={{
                borderRadius: '15px',
                height: '26rem',
                border: '0px solid #000',
                margin: '2rem',
                '&.css-1pi8xg4-MuiGrid2-root': {
                    margin: '2rem',
                },
                boxShadow: '0px 0px 50px 2px rgba(0,0,0,0.35)',
            }}>
                <Grid item xs={3} sx={{
                    padding: "0 0.25rem 0 !important",
                    borderRight: 'solid black 0.1rem',
                }}>
                    <CompanyList setCompanyName={setCompanyName} response={response} setRadius={setRadius}/>
                </Grid>
                <Grid item xs={9}>
                    <Map radius={radius} setLatlng={setLatlng}/>
                </Grid>
            </Grid>
            {companyName !== '' &&
                <CompaniesDetails companyName={companyName}/>
            }
        </>
    );
};

export default CompaniesOverview;