import { useEffect, useState } from "react";
import React from 'react'
import { useFetch } from "../components/useFetch";
import { useParams } from "react-router-dom";

function Description() {
    const [animeReuslts, setAnimeResults] = useState(null);
    const [dataToFetch, setDataToFetch] = useState(null)
    const {data} = useFetch(dataToFetch)
    
    const params = useParams()
    
    useEffect(() => {
        const newUrl = `https://api.jikan.moe/v4/anime/${params.animeid}/full`;
        setDataToFetch(newUrl);
      }, []);
    
      useEffect(() => {
        if (data && data.data) {
            setAnimeResults(data.data);
        }
      }, [data]);
    return (
    <div>{animeReuslts!==null ? 
      <h1>{animeReuslts.title}</h1>:<p>Loading</p>
    }</div>
  )
}

export default Description