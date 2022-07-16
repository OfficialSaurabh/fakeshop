import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetails from "./component/ProductDetails";
import Home from "./Home";
import NavBar from "./component/NavBar";

function App() {
  // const [filter, setFilter] = useState('all')
  // console.log(filter);
  return (
    <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
