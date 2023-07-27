import React from 'react';
import logo from './logo.svg';
import SearchTerm from "./components/SearchTerm";
import './App.css';

function App() {
  return (
    <div className="App">
      <header >
        <img src={logo} className="App-logo" alt="logo" />
      </header>
        <SearchTerm />
    </div>
  );
}

export default App;
