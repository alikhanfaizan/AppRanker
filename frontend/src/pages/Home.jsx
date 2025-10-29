import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import { SparklesCore } from '../components/ui/sparkles'

const Home = () => {
  return (
    // <Starrybg>
    <>
    {/* // < className="min-h-screen flex flex-col bg-gradient-to-br from-[#452c6d] via-[#189597] via-[#6ecac8] to-[#152d3a] text-white ">
    //   <div className="w-full absolute inset-0 h-screen">
    //     <SparklesCore
    //       id="tsparticlesfullpage"
    //       background="transparent"
    //       minSize={0.6}
    //       maxSize={1.4}
    //       particleDensity={50}
    //       className="w-full h-full"
    //       particleColor="#FFFFFF"
    //     />
    //   </div> */}
      <Navbar />
      <Hero />
      <Footer />
    </>
    
  )
}

export default Home