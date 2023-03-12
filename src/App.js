import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ScrollToTop } from 'react-router-scroll-to-top';
import './App.css';
import About from './pages/About';
import Home from './pages/Home';



function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>

        <Route path='/' exact element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>


      </Routes>
    </Router >
  );
}





export default App;
