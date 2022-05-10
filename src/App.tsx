import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Catalog } from './Components/Catalog/Catalog';
import { Footer } from './Components/Footer/Footer';
import { Header } from './Components/Header/Header';
import { Product } from './Components/Product/Product';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Catalog />}/>
        <Route path='/catalog/:id' element={<Product />}/>
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
