import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ScrollToTop } from 'react-router-scroll-to-top';
import './App.css';
import About from './pages/About';
import Home from './pages/Home';
import Package from './pages/Package';



function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>

        <Route path='/' exact element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/package' element={<Package />}></Route>


      </Routes>
    </Router >
  );
}





export default App;
