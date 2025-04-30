import './App.css'
import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import AboutUs from "./components/AboutUs"
import Features from "./components/Features"
import Menu from "./components/Menu"
import Shop from "./components/Shop"
import ContactForm from "./components/ContactForm"
import Testimonials from "./components/Testimonials"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="font-sans">
      <Header />
        <HeroSection />
        <AboutUs /><Features />
        {/* 
        <Menu />
        <Shop />
        <ContactForm />
        <Testimonials /> */}
      {/* <Footer /> */}
    </div>
  )
}

export default App

