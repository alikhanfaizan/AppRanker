import React from "react";
import Product from "../components/Product";
import { SparklesCore } from "../components/ui/sparkles";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function ProductPage() {
  return (
    <div>
      <Navbar />
      <Product />
      <Footer/>
    </div>
  );
}

export default ProductPage;
