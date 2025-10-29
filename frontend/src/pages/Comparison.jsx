import React from 'react'
import ProductComparisonPage from '../components/ProductComparison'
import { SparklesCore } from '../components/ui/sparkles'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Comparison = () => {
  return (
    <>
    {/* <div className=" flex flex-col bg-gradient-to-br from-[#452c6d] via-[#189597] via-[#6ecac8] to-[#152d3a] text-white ">
          <div className="w-full  absolute inset-0 h-full">
            <SparklesCore
              id="tsparticlesfullpage"
              background="transparent"
              minSize={0.6}
              maxSize={1.4}
              particleDensity={50}
              className="w-full h-full"
              particleColor="#FFFFFF"
            />
          </div> */}
          <Navbar/>
        <ProductComparisonPage/>
        <Footer/>
    </>
  )
}

export default Comparison