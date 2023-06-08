import './App.css';
import Nav from './components/Nav';
import Socials from './components/Socials'
import './fonts/OMORI_GAME2.ttf';
import './fonts/OMORI_GAME.ttf';
import { useState } from 'react';
import DarkMode from './components/DarkMode/DarkMode'
import {ReactComponent as Signature} from "./icons/seraphim sig.svg";
// main components (unchanged)


// tabs for our navbar
const tabs = [
  {name: "About", url: "./about.js"},
  {name: "Home", url: "./home.js"},
  {name: "Projects", url: "./projects.js"}
]


// rendering function
function App() {
  return (
      <div className={"container"}>
        <Signature className={"signature"}/>
        <DarkMode/>
        <div className={"site-content"}>
        </div>
        <Nav tabs={tabs}/>
        <Socials/>
      </div>
  );
}

export default App;
