import React, {useState, useEffect} from 'react'
import { useFetch } from './useFetch'
import splash from '../assets/images/splash.png'

function ShowResults() {

    const {data} = useFetch("https://api.jikan.moe/v4/top/anime?filter=favorite&type=tv")
    const [topAnime, setTopAnime] = useState(null);

  useEffect(()=>{
    if (data && data.data) {
        setTopAnime(data.data);
    }
  },[data])

  return (
    <div className='results__container'>
        {topAnime?.map((results) => (
            <div className='card' key={results.mal_id}>
              <div className='card__imgContainer'>
                <h2 className='card__title'>{results.title}</h2>
                <img className='card__img-hover' src={splash}/>
                <img className='card__img' src={results.images.webp.image_url} alt={"imagen de portada de " + results.title} />
              </div>
            </div>
        ))}
    </div>
  )
}

export default ShowResults