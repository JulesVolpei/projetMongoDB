import Map from "./Map";
import CompanyList from "./CompanyList";
import Grid from "@mui/material/Unstable_Grid2";
import CompaniesDetails from "../compagniesDetails/CompagniesDetails";
import {useState} from "react";

const CompaniesOverview = () => {
    const [companyName, setCompanyName] = useState('');
    console.log(companyName)
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
                    <CompanyList setCompanyName={setCompanyName}/>
                </Grid>
                <Grid item xs={9}>
                    <Map/>
                </Grid>
            </Grid>
            {companyName !== '' &&
                <CompaniesDetails companyName={companyName}/>
            }
        </>
    );
};

export default CompaniesOverview;