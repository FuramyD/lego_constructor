import React from 'react';
import './App.scss';
import {Header} from "./components/header/Header";
import {Footer} from "./components/footer/Footer";
import {Main} from "./components/main/Main";

function App() {
  return (
    <div className="app">
        <Header />
        <Main />
        <Footer />
    </div>
  );
}

export default App;
