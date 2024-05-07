import React, {useState, useEffect} from 'react'
import { useFetch } from './useFetch'

function ShowResults() {

    const {data} = useFetch("https://api.jikan.moe/v4/top/anime?filter=favorite&type=tv")
    const [topAnime, setTopAnime] = useState(null);

  useEffect(()=>{
    if (data && data.data) {
        setTopAnime(data.data);
    }
  },[data])

  return (
    <div style={{display:'grid', gridTemplateColumns:'repeat 4(1fr)'}}>
        {topAnime?.map((results) => (
            <div className='card' key={results.mal_id}>
                <h2 className='card__title'>{results.title}</h2>
                <img className='card__img' src={results.images.webp.image_url} alt={"imagen de portada de " + results.title} />
                {results.airing === true
                    ? <p className='card__status'>al aire</p>
                    : <p className='card__status'>Finalizado</p>
                }
            </div>
        ))}
    </div>
  )
}

export default ShowResults