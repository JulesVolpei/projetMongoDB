import Grid from "@mui/material/Grid";
import {FormControl, InputLabel, MenuItem, Select, Typography} from "@mui/material";
import {useState} from "react";

const CompanySearch = (props) => {
    const [radiusChoice, setRadiusChoice] = useState('');

    const handleChange = (event) => {
        setRadiusChoice(event.target.value)
        props.setRadius(event.target.value);
    };

    return (
        <Grid container>
            <FormControl sx={{m: 1, width: '100%'}}>
                <InputLabel>Radius</InputLabel>
                <Select
                    value={radiusChoice}
                    label="radius"
                    onChange={handleChange}
                >
                    <MenuItem value="">
                        <em>Aucun</em>
                    </MenuItem>
                    <MenuItem value={1000}>1km</MenuItem>
                    <MenuItem value={10000}>10km</MenuItem>
                    <MenuItem value={100000}>100km</MenuItem>
                </Select>
            </FormControl>
        </Grid>
    );
}

export default CompanySearch;