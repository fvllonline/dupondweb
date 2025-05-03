import './App.css'
import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import AboutUs from "./components/AboutUs"
import Features from "./components/Features"
import Menu from "./components/Menu"
import ContactForm from "./components/ContactForm"
import Testimonials from "./components/Testimonials"
import Footer from "./components/Footer"
import Galerie from './components/Galerie'
import { Routes , Route } from 'react-router-dom'
import MenuPage from '../src/components/pages/menu-page'
import HomePage from '../src/components/pages/home-page'
import GaleriePage from '../src/components/pages/galerie-page'
import Reservation from '../src/components/pages/reservation-page'

function App() {
  return (
    <div className="font-sans">
      <Header />
      
      <Routes>
        <Route path='/' element={<HomePage /> } ></Route>
        <Route path='/menu' element={<MenuPage/>} ></Route>
        <Route path='/galerie' element={<GaleriePage /> } ></Route>
        <Route path='/Réservation' element={<Reservation /> } ></Route>
      </Routes>
      <Footer />
      
      
      
      

              
    </div>
  )
}

export default App

