import CompanieDetail from "./CompanyDetail";
import ConstructionSiteDetails from "./ConstructionSiteDetails";
import CommentDetails from "./CommentDetails";
import {Button, Card, CardContent} from "@mui/material";
import Grid from "@mui/material/Grid";
import {useEffect, useState} from "react";
import useGET from "../../hooks/useGET";


const CompaniesDetails = (props) => {
    const [responseEnterprise, setUrlEnterprise] = useGET('');
    const [responseComments, setUrlComments] = useGET('');

    const [enterprise, setEntreprise] = useState({});
    const [constructionsSite, setConstructionsSite] = useState([]);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        setUrlEnterprise({api: `api/entreprise/${props.companyName}`})
        setUrlComments({api: `api/commentaire/${props.companyName}`})
    }, [props.companyName]);

    useEffect(() => {
        if (responseEnterprise !== undefined) {
            setEntreprise(responseEnterprise);
            setConstructionsSite(responseEnterprise.chantiers);
        } else {
            setEntreprise({});
            setConstructionsSite([]);
        }
        if (responseComments !== undefined) {
            setComments(responseComments);
        } else setComments([])
    }, [responseEnterprise, responseComments]);

    const [selectedComponent, setSelectedComponent] = useState('company');
    const renderComponent = () => {
        switch (selectedComponent) {
            case 'company':
                return <CompanieDetail enterprise={enterprise} />;
            case 'construction':
                return <ConstructionSiteDetails constructionsSite={constructionsSite} />;
            case 'comments':
                return <CommentDetails comments={comments} companyName={props.companyName}/>;
            default:
                return null;
        }
    };

    return (
        <Card sx={{ maxWidth: '90%', margin: 'auto', marginTop: 5 }}>
            <CardContent>
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={2}>
                        <Button variant="contained" sx={{margin: '0 0 1rem 0'}} onClick={() => setSelectedComponent('company')} fullWidth>
                            Entreprise
                        </Button>
                        <Button variant="contained" sx={{margin: '0 0 1rem 0'}}  onClick={() => setSelectedComponent('construction')} fullWidth>
                            Chantiers
                        </Button>
                        <Button variant="contained" sx={{margin: '0 0 1rem 0'}}  onClick={() => setSelectedComponent('comments')} fullWidth>
                            Commentaires
                        </Button>
                    </Grid>
                    <Grid item xs={12} sm={10} sx={{ display: 'flex', justifyContent: 'center' }}>
                        {Object.keys(enterprise).length > 0 && renderComponent()}
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}

export default CompaniesDetails;