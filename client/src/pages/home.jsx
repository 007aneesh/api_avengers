import React from 'react'
import Navbar from '../components/navbar'
import Plans from '../components/plans'
import Hero from './hero'
const Home = () => {
  return (
    <>
        <Navbar/>
        <Hero/>
        <Plans/>
    </>
  )
}

export default Home