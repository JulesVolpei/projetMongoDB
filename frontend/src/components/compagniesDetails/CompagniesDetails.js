import CompanieDetail from "./CompanyDetail";
import ConstructionSiteDetails from "./ConstructionSiteDetails";


const CompaniesDetails = () => {
    const sampleEnterprise = {
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
    return (
        <>
            <p>dddd</p>
            <CompanieDetail enterprise={sampleEnterprise}/>
            <ConstructionSiteDetails constructionsSite={constructionsSite}/>
        </>
    );
}

export default CompaniesDetails;