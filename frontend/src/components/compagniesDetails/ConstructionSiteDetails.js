import MUIDataTable from 'mui-datatables';

const ConstructionSiteDetails = ({constructionsSite}) => {
    const columns = [
        'Chef',
        'Cout Total',
        'Facturation',
        'Nombre Ouvriers',
        'Date Debut',
        'Date Fin',
        'Services',
    ];

    const options = {
        filter: true,
        selectableRows: 'none',
    };

    const data = constructionsSite.map(construction => [
        construction.chef,
        construction.coutTotal,
        construction.facturation,
        construction.nombreOuvriers,
        construction.dateDebut,
        construction.dateFin,
        construction.services.join(', '),
    ]);

    return (
        <MUIDataTable
            title={'Chantiers réalisé'}
            data={data}
            columns={columns}
            options={options}
        />
    );
}

export default ConstructionSiteDetails;