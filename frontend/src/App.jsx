import React from "react";
import Home from "./pages/Home";
import { Test } from "./components/test";
import ProductPage from "./pages/ProductPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Comparison from "./pages/Comparison";

const App = () => {

  return (
    // <div className="dark:bg-black h-screen w-screen overflow-auto">
    //   <Home/>
    //   {/* <Test/> */}
    //   {/* <ProductPage /> */}
    // </div>

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/comparison" element={<Comparison />} />
      </Routes>
    </Router>
  );
};

export default App;
