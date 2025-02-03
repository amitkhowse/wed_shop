import React from "react";
import './App.css';
import Header from './components/component/Header';
import Home from './components/pages/Home';
import Shop from './components/pages/Shop';
import Product from './components/pages/Product';
import Categories from './components/pages/Categories';
import Blog from './components/pages/Blog';
import Contact from './components/pages/Contact';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    // <Router>
    //   <Header />
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/shop" element={<Shop />} />
    //     <Route path="/product" element={<Product />} />
    //     <Route path="/categories" element={<Categories />} />
    //     <Route path="/blog" element={<Blog />} />
    //     <Route path="/contact" element={<Contact />} />
    //   </Routes>
    // </Router>
    <h1>App</h1>
  );
}

export default App;
