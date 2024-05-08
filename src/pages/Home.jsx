import React from 'react'
import Header from '../components/Header'
import ShowResults from '../components/ShowResults'
import TopAnime from '../components/TopAnime'


function Home() {
  return (
    <>
        <Header/>
        <main className='main'>
          <TopAnime/>
          <ShowResults/>
        </main>
    </>
  )
}

export default Home