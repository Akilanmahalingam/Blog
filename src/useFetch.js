import { useState,useEffect } from 'react'


const useFetch = (url) => {
    const [data,setData]=useState(null);
    const [error,setError]=useState(null);
    const [isPending,setisPending]=useState(true);


    useEffect( () => {
        const abortCont = new AbortController();
        setTimeout( () => {
            fetch(url,{ signal:abortCont.signal })
            
            .then( res => {
                console.log(res);
                if(!res.ok)
                {
                    throw Error('Could not fetch the data for that resourse');
                }
                console.log(res);
                return res.json()
            })
            .then(data => {
                console.log(data);
                
                setData(data);
                setisPending(false);
                setError(null);
            })
            .catch( err => {
                if(err.name==='AbortError')
                {
                    console.log("Fetch Aborted");
                }
                else{
                    setError(err.message);
                    setisPending(false);
                    console.log(err.message);
                }
            })
        },1000);

        return () => abortCont.abort();

    },[url]);

    return { data,isPending,error}
}

export default useFetch;