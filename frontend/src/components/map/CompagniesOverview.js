import Map from "./Map";
import CompanyList from "../screens/CompanyList";
import Grid from "@mui/material/Unstable_Grid2";

const CompaniesOverview = () => {

    return (
        <Grid container sx={{
            borderRadius: '15px',
            overflow: 'hidden',
            border: '1px solid #000',
            padding: '0.25rem'
        }}>
            <Grid item xs={3} sx={{
                padding: "0 0.25rem 0 !important",
                borderRight: 'solid black 0.1rem'
            }}>
                <CompanyList />
            </Grid>
            <Grid item xs={9}>
                <Map />
            </Grid>
        </Grid>
    );
};

export default CompaniesOverview;