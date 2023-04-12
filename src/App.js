import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/home';
import Header from './components/header';
import Error from './components/error';
import { Technology, Destination, Crew } from './pages/index'


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' index element={<Home />} />
        <Route path='technology' element={<Technology />} />
        <Route path='destination' element={<Destination />} />
        <Route path='crew' element={<Crew />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
