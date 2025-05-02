"use client"

import { useState, useEffect } from "react"
import { Coffee, Menu, X, ChevronDown } from "lucide-react"
import logo from "../assets/logoblanc.png"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeItem, setActiveItem] = useState("Accueil")
  const [scrolled, setScrolled] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const navItems = [
    { name: "Accueil", link: "#accueil" },
    { name: "À propos", link: "#à-propos" },
    {
      name: "Menu",
      link: "#menu",
      hasDropdown: true,
      dropdownItems: [
        { name: "Cafés Chauds", link: "#cafes-chauds" },
        { name: "Cafés Froids", link: "#cafes-froids" },
        { name: "Pâtisseries", link: "#patisseries" },
      ],
    },
    { name: "Boutique", link: "#boutique" },
    { name: "Contact", link: "#contact" },
  ]

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
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-amber-900/90 backdrop-blur-md shadow-lg py-1" : "bg-black/20 py-1"
      }`}
      style={{ height: "auto" }} // Forcer une hauteur automatique
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12 sm:h-14 md:h-16">
          {" "}
          {/* Hauteur fixe pour le contenu du header */}
          {/* Logo */}
          <a href="#accueil" className="relative flex items-center group" onClick={() => setActiveItem("Accueil")}>
            <div className="relative h-8 sm:h-10 md:h-12 w-auto mr-2 transition-transform duration-300 group-hover:scale-105">
              <img src={logo || "/placeholder.svg"} alt="Logo Café Dupond" className="h-full object-contain" />
            </div>
          </a>
          {/* Navigation desktop */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <a
                  href={item.link}
                  className="relative px-4 py-2 text-base font-medium transition-all duration-300 rounded-full hover:bg-white/10 flex items-center"
                  onClick={(e) => {
                    if (item.hasDropdown) {
                      e.preventDefault()
                      setIsDropdownOpen(!isDropdownOpen)
                    } else {
                      setActiveItem(item.name)
                      setIsDropdownOpen(false)
                    }
                  }}
                  style={{
                    color: "white",
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "1.05rem",
                    letterSpacing: "0.02em",
                    opacity: activeItem === item.name ? 1 : 0.85,
                  }}
                >
                  {item.name}
                  {item.hasDropdown && (
                    <ChevronDown className="w-4 h-4 ml-1 transition-transform group-hover:rotate-180" />
                  )}
                  {activeItem === item.name && (
                    <span className="absolute left-[0%] right-0 bottom-0 mx-auto h-0.5 w-[60%] bg-amber-300 rounded-full transition-all duration-300" />
                  )}
                </a>

                {/* Dropdown menu */}
                {item.hasDropdown && (
                  <div className="absolute left-0 mt-2 w-48 bg-amber-900/95 backdrop-blur-md rounded-lg shadow-lg overflow-hidden transform origin-top scale-0 group-hover:scale-100 transition-transform duration-300 z-50">
                    {item.dropdownItems.map((dropdownItem) => (
                      <a
                        key={dropdownItem.name}
                        href={dropdownItem.link}
                        className="block px-4 py-3 text-white hover:bg-amber-800/50 transition-colors"
                        onClick={() => {
                          setActiveItem(item.name)
                          setIsDropdownOpen(false)
                        }}
                      >
                        {dropdownItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
          {/* Bouton réservation (desktop) */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center px-5 py-2 bg-amber-700 hover:bg-amber-600 text-white rounded-full text-sm font-medium transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5 duration-300"
          >
            <Coffee className="w-4 h-4 mr-2" />
            Réserver
          </a>
          {/* Bouton mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-full bg-white/10 text-white hover:bg-white/20 focus:outline-none transition-colors active:scale-95"
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
            {navItems.map((item, index) => (
              <div key={item.name}>
                <a
                  href={item.link}
                  style={{
                    color: activeItem === item.name ? "white" : "rgba(255, 255, 255, 0.85)",
                    transform: isMenuOpen ? "translateX(0)" : "translateX(-20px)",
                    opacity: isMenuOpen ? 1 : 0,
                    transition: `all 0.3s ease ${0.1 + index * 0.05}s`,
                    fontSize: "1rem",
                    fontFamily: "'Montserrat', sans-serif",
                    letterSpacing: "0.02em",
                  }}
                  className="flex items-center justify-between px-4 py-2.5 my-1 rounded-lg text-base font-medium transition-all hover:bg-white/5 hover:text-white"
                  onClick={(e) => {
                    if (item.hasDropdown) {
                      e.preventDefault()
                      setIsDropdownOpen((prev) => (item.name === activeItem ? !prev : true))
                      setActiveItem(item.name)
                    } else {
                      setActiveItem(item.name)
                      setIsMenuOpen(false)
                      setIsDropdownOpen(false)
                    }
                  }}
                >
                  <div className="flex items-center">
                    <Coffee
                      className="mr-3 h-4 w-4"
                      style={{ color: activeItem === item.name ? "white" : "rgba(255, 255, 255, 0.7)" }}
                    />
                    {item.name}
                  </div>
                  {item.hasDropdown && (
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
                        isDropdownOpen && activeItem === item.name ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </a>

                {/* Dropdown items for mobile */}
                {item.hasDropdown && isDropdownOpen && activeItem === item.name && (
                  <div className="ml-8 border-l border-amber-700/50 pl-4 py-1">
                    {item.dropdownItems.map((dropdownItem) => (
                      <a
                        key={dropdownItem.name}
                        href={dropdownItem.link}
                        className="block py-2 px-3 text-white/80 hover:text-white transition-colors text-sm"
                        onClick={() => {
                          setIsMenuOpen(false)
                          setIsDropdownOpen(false)
                        }}
                      >
                        {dropdownItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div
              className="mt-3 pt-3 border-t border-amber-800/50"
              style={{
                opacity: isMenuOpen ? 1 : 0,
                transition: "opacity 0.3s ease 0.3s",
              }}
            >
              <a
                href="#contact"
                className="flex items-center justify-center px-4 py-2.5 bg-amber-700 hover:bg-amber-600 text-white rounded-lg text-sm font-medium transition-colors shadow-md"
                onClick={() => setIsMenuOpen(false)}
              >
                <Coffee className="w-4 h-4 mr-2" />
                Réserver une table
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
