import React, {useState, useEffect} from 'react'
import { useFetch } from './useFetch'

function ShowResults() {

    const {data} = useFetch("https://api.jikan.moe/v4/top/anime?filter=favorite&type=tv")
    const [topAnime, setTopAnime] = useState(null)
  

  useEffect(()=>{
    if (data && data.data) {
        setTopAnime(data.data);
    }
  },[])

  return (
    <div>
        {topAnime?.map((results)=>(
            <div>
                <h2>{results.titles[0].title}</h2>
                <img src={results.images.webp.image_url} alt="" />
            </div>
        ))}
    </div>
  )
}

export default ShowResults