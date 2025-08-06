import { Route, Router, Routes } from "react-router-dom"

import Home from "./pages/home"
import About from "./pages/about"
import Contact from "./pages/contact"
import Header from "./header"
import Mainevents from "./mainevents"
import Footer from "./pages/footer"

function App(){
  return (
 <>
 <Header/>
 <Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/About" element={<About/>} />
  <Route path="/contact" element={<Contact/>} />
  <Route path="/events" element={<Mainevents/>} />

 </Routes>
    <Footer/>
 </>
  )
}
export default App