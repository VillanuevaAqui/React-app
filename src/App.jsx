import './App.css';
import Astros from './Components/Astros/Astros.jsx';
import MyNavbar from './Components/Mynavbar/MyNavbar.jsx';
import About from './Components/About/About.jsx';
import Home from './Components/Home/Home.jsx';
import Apod from './Components/Apod/Apod.jsx';

import { Routes, Route, BrowserRouter } from "react-router-dom";


function App() {

  const links = [
    {href: "/", text: "Home"},
    {href: "/Astros", text: "Astros"},
    {href: "/Apod", text: "Apod"},
    {href: "/About", text: "About"}
  ]

  return (

    <>
      <BrowserRouter>
          <MyNavbar links = {links} />
          <Routes>
          <Route element = {<Astros />} path='/Astros'/>
          <Route element = {<About />} path='/About' />
          <Route element = {<Home />} path="/" />
          <Route element = {<Apod />} path='/Apod' />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;

