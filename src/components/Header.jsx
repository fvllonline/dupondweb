"use client"

import { useState, useEffect } from "react"
import { Coffee } from "lucide-react"
import logo from "../assets/logoblanc.png"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeItem, setActiveItem] = useState("Accueil")
  const [scrolled, setScrolled] = useState(false)

  const navItems = ["Accueil", "À propos", "Menu", "Boutique", "Contact"]

  // Détecte le défilement pour changer l'apparence du header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-amber-900/90 backdrop-blur-md shadow-md py-2" : "bg-black/20 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="relative flex items-center group" onClick={() => setActiveItem("Accueil")}>
            <div className="relative h-12 w-auto mr-2 transition-transform duration-300 hover:scale-105">
              <img src={logo || "/placeholder.svg"} alt="Logo Café Dupond" className="h-full object-contain" />
            </div>
          </a>

          {/* Navigation desktop */}
          <nav className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="relative px-4 py-2 text-base font-medium transition-all duration-200 rounded-full hover:translate-y-[-2px]"
                onClick={() => setActiveItem(item)}
                style={{
                  color: "white",
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "1.05rem",
                  letterSpacing: "0.02em",
                  opacity: activeItem === item ? 1 : 0.85,
                }}
              >
                {item}
                {activeItem === item && (
                  <span className="absolute left-[0%] right-0 bottom-0 mx-auto h-0.5 w-[60%] bg-white rounded-full transition-all duration-300" />
                )}
              </a>
            ))}
          </nav>

          {/* Bouton mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-full bg-white/10 text-white hover:bg-white/20 focus:outline-none transition-colors active:scale-90"
            aria-expanded={isMenuOpen}
            aria-label="Menu"
          >
            <span className="sr-only">Menu</span>
            <div className="w-6 flex flex-col items-center justify-center">
              <span
                className={`block h-0.5 w-6 bg-white rounded-full transition-transform duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-[6px]" : "-translate-y-1"
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-white rounded-full my-1 transition-opacity duration-300 ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-white rounded-full transition-transform duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-[6px]" : "translate-y-1"
                }`}
              />
            </div>
          </button>
        </div>

        {/* Menu mobile */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out mt-2 ${
            isMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-3 px-2 bg-amber-900/95 backdrop-blur-md rounded-xl shadow-lg border border-amber-800">
            {navItems.map((item, index) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                style={{
                  color: activeItem === item ? "white" : "rgba(255, 255, 255, 0.85)",
                  transform: isMenuOpen ? "translateX(0)" : "translateX(-20px)",
                  opacity: isMenuOpen ? 1 : 0,
                  transition: `all 0.3s ease ${0.1 + index * 0.05}s`,
                  fontSize: "1.1rem",
                  fontFamily: "'Montserrat', sans-serif",
                  letterSpacing: "0.02em",
                }}
                className="flex items-center px-4 py-3 my-1 rounded-lg text-base font-medium transition-all hover:bg-white/5 hover:text-white"
                onClick={() => {
                  setActiveItem(item)
                  setIsMenuOpen(false)
                }}
              >
                <Coffee
                  className="mr-3 h-4 w-4"
                  style={{ color: activeItem === item ? "white" : "rgba(255, 255, 255, 0.7)" }}
                />
                {item}
              </a>
            ))}
            <div
              className="mt-3 pt-3 border-t border-amber-800/50"
              style={{
                opacity: isMenuOpen ? 1 : 0,
                transition: "opacity 0.3s ease 0.3s",
              }}
            ></div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
