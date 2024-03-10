
import './App.css';
import HeadSection from './components/Navbar/HeadSection';
import { BrowserRouter, Routes } from 'react-router-dom';

import { Route } from 'react-router-dom';
//import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import ShopCategories from './pages/ShopCategories';
import Product from './pages/Product';
import LoginSignup from './pages/LoginSignup';
import Kart from './pages/Kart';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div>
      <BrowserRouter>
      <HeadSection/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/mens' element={<ShopCategories category="men"/>}/>
        <Route path='/womens' element={<ShopCategories category="women"/>}/>
        <Route path='/kids' element={<ShopCategories category="kid"/>}/>
        <Route path='/product' element={<Product/>} />
        <Route path='/productId' element={<Product/>}/>
        <Route path='/kart' element={<Kart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
       <Footer/>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
