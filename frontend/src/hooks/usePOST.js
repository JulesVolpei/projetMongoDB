import {useState, useEffect} from 'react'
import axios from 'axios'
/**
 * Hook personaliser : Pour tous les requete post vers les apis.
 * @param {*} resource  Uri de l'api
 * @param {*} data Data body si necessaire
 */
function usePOST(resource, data) {

    const [initialRequest, setInitialRequest] = useState({url : resource, data: data});
    const [response, setResponse] = useState();
    let result ;

    useEffect(() => {
        const callApi = async ()  =>{
            try {
                if(initialRequest.url !== ''){
                    console.log(initialRequest.url, initialRequest.data);
                    result = await axios.post('http://127.0.0.1:8000/' + initialRequest.url , initialRequest.data);
                    setResponse(result.data);
                }
            } catch (error) {
                console.log("erreur", error.response);
                setResponse(undefined);
            }
        }

        callApi();

    }, [initialRequest])

    return [response, setInitialRequest];
}

export default usePOST
