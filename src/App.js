import './App.css';
import Nav from './components/Nav';
import Socials from './components/Socials'
import './fonts/OMORI_GAME2.ttf';
import './fonts/OMORI_GAME.ttf';
import { useState } from 'react';
import DarkMode from './components/DarkMode/DarkMode'
import {ReactComponent as Signature} from "./icons/seraphim sig.svg";
import Render from './components/Render'
// main components (unchanged)


// tabs for our navbar
const tabs = [
  {name: "About", url: "./about.js"},
  {name: "Home", url: "./home.js"},
  {name: "Projects", url: "./projects.js"}
]


// rendering function
function App() {
  const [activePage, setPage] = useState(localStorage.getItem('activePage') || 'Home')
  const handleNav = (page) => {
      setPage(page)
      localStorage.setItem('activePage', page);
  }

  return (
      <div className={"container"}>
        <a href={"#"}
           onClick={function () {
            handleNav('Home')
           }}
           id={"signature-wrapper"}
        >
        <Signature className={"signature"}/>
        </a>
        <DarkMode/>
        <Render page={activePage}/>
        <Nav tabs={tabs} onPageChange={handleNav} currPage={activePage}/>
        <Socials/>
      </div>
  );
}

export default App;
