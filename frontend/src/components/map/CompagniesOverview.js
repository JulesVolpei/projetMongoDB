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
        border: '0px solid #000',
        marginLeft: '2rem',
        '&.css-1pi8xg4-MuiGrid2-root': {
            margin: '2rem', // Remplace le style généré par @material-ui/core
        },
        boxShadow: '0px 0px 50px 2px rgba(0,0,0,0.35)',
    },
    companiesList: {
        padding: "0 0.25rem 0 !important",
        borderRight: 'solid black 0.1rem',
    }
});

export default CompaniesOverview;