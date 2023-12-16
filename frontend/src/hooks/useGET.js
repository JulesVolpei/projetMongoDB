import {useState, useEffect} from 'react'
import axios from "axios";
/**
 * Hook personaliser : Pour tous les requete Get vers les apis.
 * @param {*} resource  resource cible
 */
function useGET(resource) {
    const [initialRequest, setInitialRequest] = useState({api : resource});
    const [response, setResponse] = useState();
    let result ;


    useEffect(() => {
        const callApi = async ()  =>{
            try {
                if (initialRequest.api !== ''){
                    console.log(initialRequest.api)
                    result = await axios.get('http://127.0.0.1:8000/' + initialRequest.api)
                    console.log(result.data)
                    setResponse(result.data)
                }
            } catch (error) {
                console.log("ERRRRRRRRRRRR",error)
                setResponse(undefined)
            }

        }

        callApi();

    }, [initialRequest])

    return [response, setInitialRequest];
}

export default useGET
