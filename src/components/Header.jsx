"use client"

import { useState } from "react"
import logo from "../assets/logobrun.png"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeItem, setActiveItem] = useState("Accueil")

  const navItems = ["Accueil", "À propos", "Menu", "Boutique", "Contact"]

  return (
    <header className="fixed w-full top-0 left-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a 
            href="#" 
            className="relative group"
            onClick={() => setActiveItem("Accueil")}
          >
            <img
              src={logo}
              alt="Logo Café Dupond"
              className="h-14 transition-all duration-300 group-hover:scale-105"
            />
            <div className="absolute -bottom-1 left-0 h-0.5 bg-[#7B3F00] transition-all duration-300 origin-left scale-x-0 group-hover:scale-x-100" />
          </a>

          {/* Navigation desktop */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 ${activeItem === item ? 'text-[#7B3F00]' : 'text-[#7B3F00] hover:opacity-80'}`}
                onClick={() => setActiveItem(item)}
                style={{ color: '#7B3F00' }} // CSS inline pour la couleur
              >
                {item}
                {activeItem === item && (
                  <span className="absolute left-1/2 bottom-0 h-0.5 w-6 bg-[#7B3F00] transform -translate-x-1/2" />
                )}
              </a>
            ))}
          </nav>

          {/* Bouton mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 -mr-2 rounded-md text-[#7B3F00] hover:opacity-80 focus:outline-none transition-colors"
            aria-expanded={isMenuOpen}
            aria-label="Menu"
          >
            <span className="sr-only">Menu</span>
            <div className="w-6 flex flex-col items-center">
              <span 
                className={`block h-0.5 w-6 bg-[#7B3F00] transform transition duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-0.5'}`} 
                style={{ backgroundColor: '#7B3F00' }}
              />
              <span 
                className={`block h-0.5 w-6 bg-[#7B3F00] transition duration-300 mt-1.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} 
                style={{ backgroundColor: '#7B3F00' }}
              />
              <span 
                className={`block h-0.5 w-6 bg-[#7B3F00] transform transition duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-0.5'}`} 
                style={{ backgroundColor: '#7B3F00' }}
              />
            </div>
          </button>
        </div>

        {/* Menu mobile */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-60 py-2' : 'max-h-0'}`}
        >
          <div className="pt-2 pb-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className={`block px-3 py-2 rounded-md text-base font-medium ${activeItem === item ? 'bg-[#F5F5DC] text-[#7B3F00]' : 'text-[#7B3F00] hover:bg-[#F5F5DC]'}`}
                style={{ color: '#7B3F00' }} // CSS inline pour la couleur
                onClick={() => {
                  setActiveItem(item)
                  setIsMenuOpen(false)
                }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header