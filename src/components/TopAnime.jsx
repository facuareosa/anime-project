import React, { useEffect, useState } from 'react'
import { useFetch } from './useFetch'

function App() {

  const {data} = useFetch("https://api.jikan.moe/v4/top/anime?filter=favorite&type=tv")
  const [topAnime, setTopAnime] = useState(null)
  

  useEffect(()=>{
    if (data && data.data) {
      const limitedData = data.data.slice(0, 10);
      setTopAnime(limitedData);
    }
  },[data])

  return (
    <div className='top'>
      <p className='top__title'>TOP 10 ANIME</p>
      { <ul className='top__list'>
      {topAnime?.map((info)=> (<li key={info.mal_id} className='top__listItem'>{info.title}</li>))}
      </ul>}
    </div>

  )
}

export default App
