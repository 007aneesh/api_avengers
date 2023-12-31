import React from 'react'
import Navbar from '../components/navbar'
import Hero from './hero';
import Solutions from "./solutions";
import Footer from "../components/footer";

const Home = ({ isAuthenticated, isAdmin }) => {
  return (
    <>
      <Navbar isAuthenticated={isAuthenticated} isAdmin={isAdmin} />
      <Hero />
      <Solutions />
      <Footer />
    </>
  );
};

export default Home