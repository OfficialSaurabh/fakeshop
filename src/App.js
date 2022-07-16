import React from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetails from "./component/ProductDetails";
import Home from "./Home";
import { useEffect, useState } from "react";
import NavBar from "./component/NavBar";

const baseURL = "https://fakestoreapi.com/products";
function App() {
  // API
  const [allProduct, setAllProduct] = useState(null);
  useEffect(() => {
    axios.get(baseURL).then(({ data }) => {
      setAllProduct(data);
      // console.log(data);
    });
  }, []);

  // const filterResult = cat => {
  //   const result = allProduct.filter(curData => {
  //     return curData.category === cat;
  //   });
  //   setAllProduct(result);
  // };

  if (!allProduct) return null;
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home items={allProduct} />} />
        <Route
          path="/product/:id"
          element={ <ProductDetails />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
