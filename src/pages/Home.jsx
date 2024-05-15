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
          <TopAnime/>
          <ShowResults searchValue={searchValue}/>
        </main>
    </>
  )
}

export default Home