import { useState, useEffect } from "react";


const useFetch = (url) => {
    const [data, setData]=useState(null);
    const [isLoading, setIsLoading]=useState(true);
    const [error, setError]=useState(null);


    useEffect(() => {
      const abortControl = new AbortController();
        fetch(url, { signal: abortControl.signal })
          .then(res => {
            if(!res.ok){
                throw Error('Could not fetch data  from that resource');
            }
            return res.json();
          })
          .then(data => {
            setData(data);
            setIsLoading(false);
            setError(null);
          })
          .catch(e => {
            if(e.name === 'AbortError'){
              console.log('fetch aborted')
            }else {
              setError(e.message);
              setIsLoading(false);
            }
            
          })
          return () => abortControl.abort();

    }, [url]);

    return {data, isLoading, error}
}
 
export default useFetch;