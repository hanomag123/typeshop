import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Busket } from './Components/Busket/Busket';
import { Catalog } from './Components/Catalog/Catalog';
import { Contacts } from './Components/Contacts/Contacts';
import { Favorites } from './Components/Favorites/Favorites';
import { Footer } from './Components/Footer/Footer';
import { Header } from './Components/Header/Header';
import { Oops } from './Components/Oops/Oops';
import { OrderComplete } from './Components/Ordering/OrderComplete/OrderComplete';
import { Ordering } from './Components/Ordering/Ordering';
import { Product } from './Components/Product/Product';
import { TermsOfCervice } from './Components/TermsOfCervice/TermsOfCervice';

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
        <Route path='/terms' element={<TermsOfCervice />} />
        <Route path='/order' element={<Ordering />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/order/:num' element={<OrderComplete />}/>
        <Route path='*' element={<Oops />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
