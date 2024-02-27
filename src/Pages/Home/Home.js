import React from 'react'
import Navbar from '../../Components/Navbar'
import Banner from './Banner'
import Features from './Features'
import Experience from './Experience'
import Discover from './Discover'

function Home() {
  return (
    <div>
        <Navbar />
        <Banner />
        <Features />
        <Experience />
        <Discover />
    </div>
  )
}

export default Home