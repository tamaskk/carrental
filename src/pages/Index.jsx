import React from 'react'
import Benefits from '../components/Benefits'
import Testimonialcards from '../components/Testimonialcards'
import Home from '../components/Home'
import Book from '../components/Book'
import { useMainContext } from '../utils/Maincontext'
import Overlay from '../components/Overlay'
import Models from '../components/Models'
import Banner1 from '../components/Banner1'
import Whychooseus from '../components/Whychooseus'
import Download from '../components/Download'

function Index() {

  const { overlay } = useMainContext()



  return (
    <>
      {overlay &&
        <Overlay />
      }

      <Home />

      <Book />

      <Benefits />

      <Models />

      <Banner1 />

      <Whychooseus />

      <Testimonialcards />

      <Download />

    </>
  )
}

export default Index