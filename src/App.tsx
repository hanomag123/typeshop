import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Busket } from './Components/Busket/Busket';
import { Catalog } from './Components/Catalog/Catalog';
import { Favorites } from './Components/Favorites/Favorites';
import { Footer } from './Components/Footer/Footer';
import { Header } from './Components/Header/Header';
import { Oops } from './Components/Oops/Oops';
import { Product } from './Components/Product/Product';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Catalog />}/>
        <Route path='/catalog/:id' element={<Product />}/>
        <Route path='/busket' element={<Busket />} />
        <Route path='/favore' element={<Favorites />} />
        <Route path='*' element={<Oops />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
