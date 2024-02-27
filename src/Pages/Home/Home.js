import React from 'react'
import Navbar from '../../Components/Navbar'
import Banner from './Banner'
import Features from './Features'
import Experience from './Experience'
import Discover from './Discover'
import Customers from '../../Components/Customers'
import ContactCard from '../../Components/ContactCard'

function Home() {
  return (
    <div>
        <Navbar />
        <Banner />
        <Features />
        <Experience />
        <Discover />
        <Customers />
        <ContactCard />
    </div>
  )
}

export default Home