import React from 'react';
import { Route, Routes, Router } from 'react-router-dom';
import './App.css';


import Header from './components/Header/Header';
import Service from './Pages/Service/Service';
import Home from './Pages/Home/Home';
import AboutUs from './Pages/AboutUs/AboutUs';
import Contact from './Pages/Contact/Contact';



function App() {
  return (
    <div className="App">
      <Header />
     <Routes>
        <Route exact path='/' element={<Home />} />
        <Route  path='/service' element={<Service />} />
        <Route  path='/about' element={<AboutUs />} />
        <Route  path='/contact' element={<Contact />} />
     </Routes>
      
    </div>
  );
}

export default App;
