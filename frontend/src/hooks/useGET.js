import {useState, useEffect} from 'react'
/**
 * Hook personaliser : Pour tous les requete Get vers les apis.
 * @param {*} url  Uri de l'api
 * @param {*} data Data body si necessaire
 * @param {*} type Type pour
 */
function useGET(url, data, headers, api) {

    const [initialRequest, setInitialRequest] = useState({url : url,data: data, headers: headers, api: api});
    const [response, setResponse] = useState();
    let result ;


    useEffect(() => {
        const callApi = async ()  =>{
            try {
                if (initialRequest.url !== ''){
                    console.log(initialRequest.url)
                    result = await initialRequest.api.get(initialRequest.url, {
                        headers: initialRequest.headers
                    })
                    setResponse(result.data)
                }
            } catch (error) {
                console.log("ERRRRRRRRRRRR",error)
                localStorage.removeItem('userReducer')
            }

        }

        callApi();

    }, [initialRequest])

    return [response, setInitialRequest];
}

export default useGET
