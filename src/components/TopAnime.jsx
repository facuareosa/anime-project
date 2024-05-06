import React, { useEffect, useState } from 'react'
import { useFetch } from './useFetch'

function App() {

  const {data} = useFetch("https://api.jikan.moe/v4/top/anime?filter=favorite&type=tv")
  const [topAnime, setTopAnime] = useState(null)
  

  useEffect(()=>{
    if (data && data.data) {
      const limitedData = data.data.slice(0, 5);
      setTopAnime(limitedData);
    }
  },[data])

  return (
    <div>
      <p>App</p>
      { <ul>
      {topAnime?.map((info)=> (<li>{info.title}{info.score}</li>))}
      </ul>}
    </div>

  )
}

export default App
