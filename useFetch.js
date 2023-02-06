import { useEffect, useState } from "react";

export const useFetch = (url, counter) => {

  const [state, setState] = useState({
    data:null,
    isLoading:true,
    hasError:null,
  })
  
  const getFetch = async ()=>{
    setState({
      ...state,
      isLoading:true,
    });

    const resp = await fetch(url+counter);
    const data = await resp.json();
    
    setState({
      data:data,
      isLoading:false,
      hasError:null,
    });
  }

  useEffect(()=>{
    getFetch();
  }, [counter]);

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError:state.hasError,
  };    
}

export default useFetch
