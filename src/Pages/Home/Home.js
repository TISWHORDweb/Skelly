import React from 'react'
import Navbar from '../../Components/Navbar'
import Banner from './Banner'
import Features from './Features'
import Experience from './Experience'

function Home() {
  return (
    <div>
        <Navbar />
        <Banner />
        <Features />
        <Experience />
    </div>
  )
}

export default Home