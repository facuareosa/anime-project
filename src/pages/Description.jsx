import { useEffect, useState } from "react";
import React from 'react'
import { useFetch } from "../components/useFetch";

function Description() {
    const [animeReuslts, setAnimeResults] = useState(null);
    const [dataToFetch, setDataToFetch] = useState("https://api.jikan.moe/v4/anime/25/full")
    const {data} = useFetch(dataToFetch)
    const [prueba, setPrueba] = useState(null)
    
    // useEffect(() => {
    //     const newUrl = `https://api.jikan.moe/v4/anime/${id}/full`;
    //     setDataToFetch(newUrl);
    //   }, []);
    
      useEffect(() => {
        if (data && data.data) {
            setAnimeResults(data.data);
        }
      }, [data]);

      useEffect (()=>{
        if(animeReuslts && animeReuslts.title){
            setPrueba(animeReuslts.title)
        }
      }),[]
    return (
    <div>{prueba}</div>
  )
}

export default Description