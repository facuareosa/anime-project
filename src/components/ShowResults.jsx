import React, {useState, useEffect} from 'react'
import { useFetch } from './useFetch'
import splash from '../assets/images/splash.png'

function ShowResults({searchValue}) {
  const [animeReuslts, setAnimeResults] = useState(null);
  const [dataToFetch, setDataToFetch] = useState("https://api.jikan.moe/v4/top/anime?filter=favorite&type=tv")
  const {data} = useFetch(dataToFetch)

  useEffect(() => {
    console.log(searchValue)
    if (searchValue !== ""){ 
    const newUrl = `https://api.jikan.moe/v4/anime?q=${searchValue}&sfw`;
    setDataToFetch(newUrl);
    }
  }, [searchValue]);

  useEffect(() => {
    if (data && data.data) {
        console.log(data.data)
        setAnimeResults(data.data);
    }
  }, [data]);

  return (
    <div className='results__container'>
        {animeReuslts?.map((results) => (
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