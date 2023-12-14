import Grid from "@mui/material/Unstable_Grid2";
import Box from '@mui/material/Box';
import {makeStyles} from "@material-ui/core/styles";
import useGET from "../../hooks/useGET";
import {useEffect, useState} from "react";

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

    return (
        <>
            {dummy.map((item) => (
                <Grid key={item.id} xs={12} className={classes.elementsBox}>
                    <div className={classes.lineSep}></div>
                    <Box sx={{textTransform: 'uppercase'}}>
                        {item.name}
                    </Box>
                    <Box xs={12} className={classes.activityStyle}>
                        {item.activity}
                    </Box>
                    <Box xs={12}>
                        {item.address}
                    </Box>
                    <div className={classes.lineSep}></div>
                </Grid>
            ))}
        </>
    );
}

const useStyles = makeStyles({
    container : {
        padding: "0 0.25rem 0",
    },
    elementsBox: {
        backgroundColor: '#fff',
        '&:hover': {
            backgroundColor: '#dcdcdc',
            opacity: [0.9, 0.8, 0.7],
        },
    },
    lineSep: {
        display: 'block',
        height: '1px',
        border: '0',
        borderTop: '1px solid black',
        margin: '0.25em 0',
        padding: '0',
    },
    activityStyle: {
        fontSize: '0.75rem'
    },
})

export default CompanyList;