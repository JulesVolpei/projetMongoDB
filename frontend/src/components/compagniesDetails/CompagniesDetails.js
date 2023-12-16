import CompanieDetail from "./CompanyDetail";
import ConstructionSiteDetails from "./ConstructionSiteDetails";
import CommentDetails from "./CommentDetails";
import {Button, Card, CardContent} from "@mui/material";
import Grid from "@mui/material/Grid";
import {useState} from "react";


const CompaniesDetails = () => {
    const enterprise = {
        nom: 'chez moi',
        adresse: { "numero": 3, "voie": "Route de la Garenne", "codePostal": 44700, "ville": "Nantes"},
        localisation: [6.4896, 3.646464],
        ressourcesHumaines: {directeur: 'moi evidement', nombreEmployes: 12, nombreOuvriers: 5},
        contacts: {telephone: '0645478998', mail: 'raf@tg.com'},
        horaires: [{"jour": "lundi", "debut": 9, "fin": 19}, {"jour": "mardi", "debut": 9, "fin": 19}],
        services: ["Rénovation de salles de bain", "Terrasses et patios", "Fondations et béton", "Toiture", "Rénovation de cuisines"],
    };

    const constructionsSite = [
        {
            chef: "Bernard Beaucoupdemarteau",
            coutTotal: 3000,
            facturation: 12000,
            nombreOuvriers: 5,
            dateDebut: "2020-02-21T00:00:00",
            dateFin: "2020-04-28T00:00:00",
            services: ["Toitures", "Rénovation de salles de bain"]
        },
        {
            chef: "Henry Guillaume",
            coutTotal: 7000,
            facturation: 40000,
            nombreOuvriers: 11,
            dateDebut: "2020-07-11T00:00:00",
            dateFin: null,
            services: ["Toitures", "Terrasses et patios", "Fondations et béton"]
        }
    ]

    const comments = [{
            "entrepriseNom": "Lihon BTP Corporation",
            "auteur": "Adam Pacool",
            "contenu": "Ma femme a fait appel à cette entreprise pour de simples problèmes de toiture ... Bonjour les dégâts !",
            "dateCreation": new Date("2020-05-11"),
            "note": 1
        },
        {
            "entrepriseNom": "Lihon BTP Corporation",
            "auteur": "François Lihon",
            "contenu": null,
            "dateCreation": new Date("2020-02-10"),
            "note": 5
        }
    ]

    const [selectedComponent, setSelectedComponent] = useState('company');

    const renderComponent = () => {
        switch (selectedComponent) {
            case 'company':
                return <CompanieDetail enterprise={enterprise} />;
            case 'construction':
                return <ConstructionSiteDetails constructionsSite={constructionsSite} />;
            case 'comments':
                return <CommentDetails comments={comments} />;
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
                        {renderComponent()}
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}

export default CompaniesDetails;