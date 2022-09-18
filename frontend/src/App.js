import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { paths } from './utils/constants';
import { Home } from './view/Home';
import { Listing } from './view/Listing';

function App() {
  return (
    <>
    <Router>
        <Routes>
          <Route path={paths.HOME} element={<Home/>} />
          <Route path={paths.LISTING} element={<Listing/>} />
        </Routes>
    </Router>
    </>
  );
}

export default App;
