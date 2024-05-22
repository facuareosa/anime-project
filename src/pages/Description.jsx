import { useEffect, useState } from "react";
import React from 'react'
import Header from '../components/Header'
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
      <>
      <Header/>
      <main className="main">
        {animeReuslts!==null ? (
        <article className="article article-description">
          <h2 className="description__title">{animeReuslts.title}</h2>
          <section className="description__side">
            <img className="description__side-img" src={animeReuslts.images.webp.image_url} alt={"imagen de " + animeReuslts.title} />
            <p className="description__side-animeStatus">{animeReuslts.status}</p>
          </section>
          <p className="description__synopsis">{animeReuslts.synopsis}</p>
        </article>
        ) : (
         <p>Loading</p>
        )}
      </main>
      </>
  )
}

export default Description