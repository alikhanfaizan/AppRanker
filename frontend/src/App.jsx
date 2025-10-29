import React from "react";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Comparison from "./pages/Comparison";
import { SparklesCore } from "./components/ui/sparkles";
import ImpactPage from "./pages/ImpactPage";

const App = () => {

  return (
<div className=" min-h-screen flex flex-col bg-gradient-to-br from-[#452c6d] via-[#189597] via-[#6ecac8] to-[#152d3a] text-white ">
      <div className="w-full absolute inset-0 h-auto">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={50}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>

    <Router>
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/comparison" element={<Comparison />} />
        <Route path="/impact" element={<ImpactPage />} />
      </Routes>
    </Router>
    </div>
  );
};

export default App;
