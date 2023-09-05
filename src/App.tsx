import React from 'react';
import logo from './logo.svg';
import './App.css';

import Navbar from "./components/Navbar";
import About from "./components/About";
import InputData from "./components/InputData";
import MapData from "./components/MapData";

function App() {
  return (
    <main className="text-rose-50 bg-emerald-900 body-font">
        <Navbar />
        <About />
        <InputData />
        <MapData />
    </main>
  );
}

export default App;
