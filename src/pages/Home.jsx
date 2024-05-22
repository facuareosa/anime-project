import React, { useState } from 'react'
import Header from '../components/Header'
import ShowResults from '../components/ShowResults'
import TopAnime from '../components/TopAnime'
import FilterInput from '../components/FilterInput'


function Home() {
  const [searchValue, setSearchValue] = useState("")
  const handleButtonClick = (inputValue) => {
    setSearchValue(inputValue) 
  };

  return (
    <>
        <Header/>
        <FilterInput onButtonClick={handleButtonClick}/>
        <main className='main'>
          <article className='article article-home'>
            <TopAnime/>
            <ShowResults searchValue={searchValue}/>
          </article>
        </main>
    </>
  )
}

export default Home