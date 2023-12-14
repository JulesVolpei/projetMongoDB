import Map from "./Map";
import CompanyList from "../screens/CompanyList";
import Grid from "@mui/material/Unstable_Grid2";
import {makeStyles} from "@material-ui/core/styles";

const CompaniesOverview = () => {
    const classes = useStyles();

    return (
        <Grid container className={classes.container}>
            <Grid item xs={3} className={classes.companiesList}>
                <CompanyList />
            </Grid>
            <Grid item xs={9}>
                <Map />
            </Grid>
        </Grid>
    );
};

const useStyles = makeStyles({
    container: {
        borderRadius: '15px',
        overflow: 'hidden',
        border: '1px solid #000',
        padding: '0.25rem',
    },
    companiesList: {
        padding: "0 0.25rem 0 !important",
        borderRight: 'solid black 0.1rem',
    }
});

export default CompaniesOverview;