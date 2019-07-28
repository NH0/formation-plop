import React from 'react';
import {BrowserRouter } from 'react-router-dom';
import { Routes } from './routes';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img className="Logo" src={logo} alt="logo"/>
        <div className="Text">
          Easy recipes
          <div className="Subtitle">Learn to cook with delicious and simple recipes</div>
        </div>
      </div>
      <BrowserRouter>
      <div className="App-body">
        <div className="Menu">
          Recipes
        </div>
        <div className="Recipe">
            <Routes />
        </div>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
