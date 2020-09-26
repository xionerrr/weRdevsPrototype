import React from 'react';
import './App.css';
import Header from "./Header/Header";
import { Route } from "react-router-dom";
import InfoBlock from "./InfoBlock/InfoBlock";
import About from "./InfoBlock/About/about";


function App() {
  return (
    <div className='wrapper'>
        <Header />

        <div className='app-wrapper'>

            <Route exact path= '/' render = {() => <InfoBlock/> }/>
            <Route path= '/about' render = {() => <About/> } />

        </div>


    </div>
  );
}

export default App;
