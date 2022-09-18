import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import { paths } from './utils/constants';
import { Home } from './view/Home';
import { Listing } from './view/Listing';
import { SignIn } from './view/SignIn';
import { SignUp } from './view/SignUp';

function App() {
  return (
    <>
    <Router>
        <NavBar/>
        <Routes>
          <Route path={paths.HOME} element={<Home/>} />
          <Route path={paths.LISTING} element={<Listing/>} />
          <Route path={paths.SIGNIN} element={<SignIn/>} />
          <Route path={paths.SIGNUP} element={<SignUp/>} />
        </Routes>
    </Router>
    </>
  );
}

export default App;
