import CompanieDetail from "./CompanyDetail";


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

    return (
        <>
            <p>dddd</p>
            <CompanieDetail enterprise={sampleEnterprise}/>
        </>
    );
}

export default CompaniesDetails;