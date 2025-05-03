"use client"

import { useState, useEffect } from "react"
import { Coffee, Menu, X } from "lucide-react"
import logo from "../assets/logoblanc.png"
import { Link } from "react-router-dom"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeItem, setActiveItem] = useState("Accueil")
  const [scrolled, setScrolled] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  // Détecte le défilement pour changer l'apparence du header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Fermer le dropdown lorsqu'on clique en dehors
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isDropdownOpen && !event.target.closest(".relative.group")) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isDropdownOpen])

  return (
    <header
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-amber-900/90 backdrop-blur-md shadow-lg py-1" : "bg-black/40 py-1"
      }`}
      style={{ height: "auto" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12 sm:h-14 md:h-16">
          {/* Logo */}
          <a href="#accueil" className="relative flex items-center group" onClick={() => setActiveItem("Accueil")}>
            <div className="relative h-8 sm:h-10 md:h-12 w-auto mr-2 transition-transform duration-300 group-hover:scale-105">
              <img src={logo || "/placeholder.svg"} alt="Logo Café Dupond" className="h-full object-contain" />
            </div>
          </a>

          {/* Navigation desktop */}
          <nav className="hidden md:flex items-center space-x-1">
            {/* Accueil avec dropdown */}
            <div className="relative group">
              <Link
                to="/"
                className="relative px-4 py-2 text-base font-medium transition-all duration-300 rounded-full hover:bg-white/10 flex items-center"
                onClick={() => {
                  setIsDropdownOpen(!isDropdownOpen)
                  setActiveItem("Accueil")
                }}
                style={{
                  color: "white",
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "1.05rem",
                  letterSpacing: "0.02em",
                  opacity: activeItem === "Accueil" ? 1 : 0.85,
                }}
              >
                Accueil
                {activeItem === "Accueil" && (
                  <span className="absolute left-[0%] right-0 bottom-0 mx-auto h-0.5 w-[60%] bg-amber-300 rounded-full transition-all duration-300" />
                )}
              </Link>

              {/* Dropdown pour Accueil */}
              {isDropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-amber-900/95 backdrop-blur-md border border-amber-800 z-50">
                  <div className="py-1">
                    <a
                      href="#à-propos"
                      className="block px-4 py-2 text-sm text-white hover:bg-white/10"
                      onClick={() => {
                        setActiveItem("À propos")
                        setIsDropdownOpen(false)
                      }}
                    >
                      À propos
                    </a>
                    <a
                      href="#nosatouts"
                      className="block px-4 py-2 text-sm text-white hover:bg-white/10"
                      onClick={() => {
                        setActiveItem("Nos atous")
                        setIsDropdownOpen(false)
                      }}
                    >
                      Nos atouts
                    </a>
                    <a
                      href="#testimonials"
                      className="block px-4 py-2 text-sm text-white hover:bg-white/10"
                      onClick={() => {
                        setActiveItem("Témoignage")
                        setIsDropdownOpen(false)
                      }}
                    >
                      Témoignage
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Menu */}
            <div className="relative group">
              <Link
                to="/menu"
                className="relative px-4 py-2 text-base font-medium transition-all duration-300 rounded-full hover:bg-white/10 flex items-center"
                onClick={() => {
                  setActiveItem("menu")
                  setIsDropdownOpen(false)
                }}
                style={{
                  color: "white",
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "1.05rem",
                  letterSpacing: "0.02em",
                  opacity: activeItem === "menu" ? 1 : 0.85,
                }}
              >
                Menu
                {activeItem === "menu" && (
                  <span className="absolute left-[0%] right-0 bottom-0 mx-auto h-0.5 w-[60%] bg-amber-300 rounded-full transition-all duration-300" />
                )}
              </Link>
            </div>

            {/* Galerie */}
            <div className="relative group">
              <Link
                to="/galerie"
                className="relative px-4 py-2 text-base font-medium transition-all duration-300 rounded-full hover:bg-white/10 flex items-center"
                onClick={() => {
                  setActiveItem("Galerie")
                  setIsDropdownOpen(false)
                }}
                style={{
                  color: "white",
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "1.05rem",
                  letterSpacing: "0.02em",
                  opacity: activeItem === "Galerie" ? 1 : 0.85,
                }}
              >
                Galerie
                {activeItem === "Galerie" && (
                  <span className="absolute left-[0%] right-0 bottom-0 mx-auto h-0.5 w-[60%] bg-amber-300 rounded-full transition-all duration-300" />
                )}
              </Link>
            </div>

            {/* Développeur */}
            <div className="relative group">
              <Link
                to="/developer"
                className="relative px-4 py-2 text-base font-medium transition-all duration-300 rounded-full hover:bg-white/10 flex items-center"
                onClick={() => {
                  setActiveItem("developer")
                  setIsDropdownOpen(false)
                }}
                style={{
                  color: "white",
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "1.05rem",
                  letterSpacing: "0.02em",
                  opacity: activeItem === "developer" ? 1 : 0.85,
                }}
              >
                Développeur
                {activeItem === "developer" && (
                  <span className="absolute left-[0%] right-0 bottom-0 mx-auto h-0.5 w-[60%] bg-amber-300 rounded-full transition-all duration-300" />
                )}
              </Link>
            </div>
          </nav>

          {/* Bouton mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-full bg-gradient-to-r from-black to-black text-white hover:bg-white/20 focus:outline-none transition-colors active:scale-95"
            aria-expanded={isMenuOpen}
            aria-label="Menu"
          >
            <span className="sr-only">Menu</span>
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Menu mobile */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out mt-1 ${
            isMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-3 px-2 bg-amber-900/95 backdrop-blur-md rounded-xl shadow-lg border border-amber-800">
            {/* Accueil - Mobile */}
            <div>
              <Link
                to="/"
                style={{
                  color: activeItem === "Accueil" ? "white" : "rgba(255, 255, 255, 0.85)",
                  transform: isMenuOpen ? "translateX(0)" : "translateX(-20px)",
                  opacity: isMenuOpen ? 1 : 0,
                  transition: `all 0.3s ease ${0.1}s`,
                  fontSize: "1rem",
                  fontFamily: "'Montserrat', sans-serif",
                  letterSpacing: "0.02em",
                  width: "100%",
                  textAlign: "left",
                  display: "block",
                }}
                className="flex items-center justify-between px-4 py-2.5 my-1 rounded-lg text-base font-medium transition-all hover:bg-white/5 hover:text-white"
                onClick={() => {
                  setIsDropdownOpen(!isDropdownOpen)
                  setActiveItem("Accueil")
                }}
              >
                <div className="flex items-center">
                  <Coffee
                    className="mr-3 h-4 w-4"
                    style={{ color: activeItem === "Accueil" ? "white" : "rgba(255, 255, 255, 0.7)" }}
                  />
                  Accueil
                </div>
              </Link>

              {/* Sous-menu Accueil - Mobile */}
              {isDropdownOpen && (
                <div className="ml-8 border-l border-amber-800/50 pl-2 mt-1">
                  <a
                    href="#à-pro"
                    className="flex items-center px-4 py-2 text-sm text-white/90 hover:text-white hover:bg-white/5 rounded-lg"
                    onClick={() => {
                      setActiveItem("À propos")
                      setIsMenuOpen(false)
                      setIsDropdownOpen(false)
                    }}
                  >
                    À propos
                  </a>
                  <a
                    href="#nosatouts"
                    className="flex items-center px-4 py-2 text-sm text-white/90 hover:text-white hover:bg-white/5 rounded-lg"
                    onClick={() => {
                      setActiveItem("Nos atous")
                      setIsMenuOpen(false)
                      setIsDropdownOpen(false)
                    }}
                  >
                    Nos atouts
                  </a>
                  <a
                    href="#testimonials"
                    className="flex items-center px-4 py-2 text-sm text-white/90 hover:text-white hover:bg-white/5 rounded-lg"
                    onClick={() => {
                      setActiveItem("Témoignage")
                      setIsMenuOpen(false)
                      setIsDropdownOpen(false)
                    }}
                  >
                    Témoignage
                  </a>
                </div>
              )}
            </div>

            {/* Menu - Mobile */}
            <div>
              <Link
                to="/menu"
                style={{
                  color: activeItem === "menu" ? "white" : "rgba(255, 255, 255, 0.85)",
                  transform: isMenuOpen ? "translateX(0)" : "translateX(-20px)",
                  opacity: isMenuOpen ? 1 : 0,
                  transition: `all 0.3s ease ${0.2}s`,
                  fontSize: "1rem",
                  fontFamily: "'Montserrat', sans-serif",
                  letterSpacing: "0.02em",
                }}
                className="flex items-center justify-between px-4 py-2.5 my-1 rounded-lg text-base font-medium transition-all hover:bg-white/5 hover:text-white"
                onClick={() => {
                  setActiveItem("menu")
                  setIsMenuOpen(false)
                  setIsDropdownOpen(false)
                }}
              >
                <div className="flex items-center">
                  <Coffee
                    className="mr-3 h-4 w-4"
                    style={{ color: activeItem === "menu" ? "white" : "rgba(255, 255, 255, 0.7)" }}
                  />
                  Menu
                </div>
              </Link>
            </div>

            {/* Galerie - Mobile */}
            <div>
              <Link
                to="/galerie"
                style={{
                  color: activeItem === "Galerie" ? "white" : "rgba(255, 255, 255, 0.85)",
                  transform: isMenuOpen ? "translateX(0)" : "translateX(-20px)",
                  opacity: isMenuOpen ? 1 : 0,
                  transition: `all 0.3s ease ${0.25}s`,
                  fontSize: "1rem",
                  fontFamily: "'Montserrat', sans-serif",
                  letterSpacing: "0.02em",
                }}
                className="flex items-center justify-between px-4 py-2.5 my-1 rounded-lg text-base font-medium transition-all hover:bg-white/5 hover:text-white"
                onClick={() => {
                  setActiveItem("Galerie")
                  setIsMenuOpen(false)
                  setIsDropdownOpen(false)
                }}
              >
                <div className="flex items-center">
                  <Coffee
                    className="mr-3 h-4 w-4"
                    style={{ color: activeItem === "Galerie" ? "white" : "rgba(255, 255, 255, 0.7)" }}
                  />
                  Galerie
                </div>
              </Link>
            </div>

            {/* Développeur - Mobile */}
            <div>
              <Link
                to="/developer"
                style={{
                  color: activeItem === "developer" ? "white" : "rgba(255, 255, 255, 0.85)",
                  transform: isMenuOpen ? "translateX(0)" : "translateX(-20px)",
                  opacity: isMenuOpen ? 1 : 0,
                  transition: `all 0.3s ease ${0.3}s`,
                  fontSize: "1rem",
                  fontFamily: "'Montserrat', sans-serif",
                  letterSpacing: "0.02em",
                }}
                className="flex items-center justify-between px-4 py-2.5 my-1 rounded-lg text-base font-medium transition-all hover:bg-white/5 hover:text-white"
                onClick={() => {
                  setActiveItem("developer")
                  setIsMenuOpen(false)
                  setIsDropdownOpen(false)
                }}
              >
                <div className="flex items-center">
                  <Coffee
                    className="mr-3 h-4 w-4"
                    style={{ color: activeItem === "developer" ? "white" : "rgba(255, 255, 255, 0.7)" }}
                  />
                  Développeur
                </div>
              </Link>
            </div>

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
