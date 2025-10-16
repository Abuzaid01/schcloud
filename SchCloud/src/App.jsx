import React from 'react';
import Home from './pages/Home';
import { Routes, Router, Route } from 'react-router';
import Login from './pages/Login';

const App = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={<Home />}
      />
      <Route
        path='/Login'
        element={<Login />}
      />
    </Routes>
  );
};

export default App;
