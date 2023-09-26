import React from "react";
import { useState } from "react";
import NavBar from "./Components/Navbar/Navbar.js";
import Home from "./Components/Home/home";
import Footer from "./Components/Footer/Footer";
import Counter from "./Components/Counter/Counter";
import FAQ from "./Components/FrequentQuestion/FAQ";
import CounterUse from "./Components/CounterUse/CounterUse";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import dbData from "./Database/db.json";
import HelpCenter from "./Components/HelpCenter/HelpCenter";
import Article from "./Components/HelpCenter/Article";
import FAQ1 from "./Components/FrequentQuestion/FAQ";
import ContactUs from "./Components/HelpCenter/ContactUs";
import QuoteGenerator from "./Components/Home/QuoteGenerator.js";
import { Breadcrumb } from "react-bootstrap";
import Breadcrumbs from "./Components/BreadCrumps.js";
import PageNotFound from "./Pages/PageNotFound.js";
import CreateProduct from "./Components/Home/CreateProduct.js";

function App() {
  const [products, setProducts] = useState(dbData.products);

  // const onAddProduct = (newProduct) => {
  //   setProducts([...products, newProduct]);};

  return (
    <Router>
      <>
        <NavBar />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <Routes>
          <Route path="/" element={<Home products={dbData.products} />} />
          <Route
            path="/product/:productId"
            element={<ProductDetails products={dbData.products} />}
          />
          <Route path="/help-center" element={<HelpCenter />}>
            <Route path="articles" element={<Article />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="contactus" element={<ContactUs />} />
          </Route>
          <Route path="/" exact element={<Home products={products} />} />
          <Route path="/create-product" element={<CreateProduct />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>

        <QuoteGenerator></QuoteGenerator>
        <Footer />
        <Counter />
        <FAQ />
        <CounterUse />
      </>
    </Router>
  );
}

export default App;
