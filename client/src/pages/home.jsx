import React from 'react'
import Navbar from '../components/navbar'
import Plans from '../components/plans'
import Hero from './hero';
import Solutions from "./solutions";
import Footer from "../components/footer";
const Home = () => {
  return (
    <>
        <Navbar/>
        <Hero/>
        {/* <Solutions/> */}
        <Plans/>
        <Footer/>
    </>
  )
}

export default Home