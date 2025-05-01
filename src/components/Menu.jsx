"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, Coffee } from 'lucide-react'
import { FiCoffee } from "react-icons/fi"
import menu1 from "../assets/menu1.jpg"
import menu2 from "../assets/menu2.jpg"
import menu3 from "../assets/menu3.jpg"
import menu4 from "../assets/menu4.jpg"
import menu5 from "../assets/menu5.jpg"
import menu6 from "../assets/menu6.jpg"
import menu7 from "../assets/menu7.jpg"
import menu8 from "../assets/menu8.jpg"
import menu9 from "../assets/menu9.jpg"
import menu10 from "../assets/menu10.jpg"
import menu11 from "../assets/menu11.jpg"
import menu12 from "../assets/menu12.jpg"
import logorond from '../assets/logorond.png'

const Menu = () => {
  const coffees = [
    { name: "Café Latte", description: "Espresso et lait mousseux", price: "4.50", image: menu1 },
    { name: "Café Américano", description: "Espresso allongé à l'eau chaude", price: "3.80", image: menu2 },
    { name: "Macchiato", description: "Espresso tâché d'une touche de lait", price: "4.00", image: menu3 },
    { name: "Café Mocha", description: "Espresso, chocolat et lait mousseux", price: "5.20", image: menu4 },
    { name: "Cappuccino", description: "Espresso, lait chaud et mousse de lait", price: "4.50", image: menu5 },
    { name: "Café Glacé", description: "Espresso, lait froid et glaçons", price: "4.80", image: menu6 },
    { name: "Chocolat Mocha", description: "Chocolat chaud avec une touche d'espresso", price: "5.50", image: menu7 },
    { name: "Latte Vanille", description: "Café latte aromatisé à la vanille", price: "5.00", isNew: true, image: menu8 },
    { name: "Latte Glacé", description: "Latte servi avec des glaçons", price: "4.80", image: menu9 },
    { name: "Espresso", description: "L'essence pure du café", price: "2.80", image: menu10 },
    { name: "Latte Caramel", description: "Café latte avec sirop de caramel", price: "5.00", isNew: true, image: menu11 },
    { name: "Cortado", description: "Espresso équilibré avec du lait", price: "3.90", image: menu12 },
  ]

  const [showAll, setShowAll] = useState(false)
  const [hoveredCard, setHoveredCard] = useState(null)
  const displayedCoffees = showAll ? coffees : coffees.slice(0, 8)

  return (
    <section className="py-24 bg-gradient-to-b from-amber-50 to-amber-100/70 relative overflow-hidden" id="menu">
      {/* Éléments décoratifs */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>

      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMTAiIGN5PSIxMCIgcj0iMiIgZmlsbD0id2hpdGUiLz48L3N2Zz4=')] bg-repeat"></div>
      
      <div
        className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-amber-800/40 animate-pulse"
        style={{ animationDelay: "0.5s" }}
      ></div>
      <div
        className="absolute top-1/3 right-1/4 w-3 h-3 rounded-full bg-amber-800/30 animate-pulse"
        style={{ animationDelay: "1.2s" }}
      ></div>
      <div
        className="absolute bottom-1/4 left-1/3 w-2 h-2 rounded-full bg-amber-800/40 animate-pulse"
        style={{ animationDelay: "0.8s" }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="h-[2px] w-12 bg-amber-700 mr-3"></div>
            <p className="text-amber-800 font-medium text-sm uppercase tracking-[0.2em]">NOTRE CARTE</p>
            <div className="h-[2px] w-12 bg-amber-700 ml-3"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-amber-900 mb-6">
            Découvrez Nos{" "}
            <span 
              className="font-serif italic text-amber-700" 
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Cafés Signature
            </span>
          </h2>
          
          <div className="max-w-2xl mx-auto border-l-4 border-amber-200/70 pl-6 mb-8">
            <p className="text-amber-800/80 text-lg text-left">
              Dégustez notre sélection de cafés artisanaux, préparés avec passion par nos baristas experts
              pour une expérience gustative incomparable.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-500">
          {displayedCoffees.map((coffee, index) => (
            <div
              key={index}
              className="group relative backdrop-blur-sm bg-white/80 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-white/20"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {coffee.isNew && (
                <div className="absolute top-4 left-4 z-20">
                  <div className="bg-gradient-to-r from-amber-700 to-amber-600 text-white text-xs px-3 py-1 rounded-full font-medium shadow-md">
                    NOUVEAU
                  </div>
                </div>
              )}

              <div className="relative aspect-[4/3] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b"></div>
                <img
                  src={coffee.image}
                  alt={coffee.name}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6 relative">
                <div className="absolute -top-8 right-6 w-[60px] h-[60px] rounded-full bg-gradient-to-br from-amber-200 to-amber-100 flex items-center justify-center shadow-xl rotate-12 group-hover:rotate-0 transition-transform duration-500">
                  <div className="w-[56px] h-[56px] rounded-full border-2 border-dashed border-amber-700/30 flex items-center justify-center">
                    <div className="text-center transform -rotate-12 group-hover:rotate-0 transition-transform duration-500">
                      <span className="text-amber-800 font-bold">{coffee.price}€</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 
                    className="text-xl font-serif italic text-amber-700 mb-2"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {coffee.name}
                  </h3>
                  <div className="h-[2px] w-12 bg-amber-300 mb-3 transform origin-left scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                  <p className="text-amber-800/70 text-sm">{coffee.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <button
            onClick={() => setShowAll(!showAll)}
            className="group relative overflow-hidden bg-gradient-to-r from-amber-700 to-amber-600 text-white px-8 py-3.5 rounded-lg transition-all duration-300 font-medium shadow-lg hover:shadow-amber-900/30"
          >
            <span className="relative z-10 flex items-center">
              <span>{showAll ? "Voir moins" : "Voir tous nos cafés"}</span>
              {showAll ? (
                <ChevronUp className="w-5 h-5 ml-2 transition-transform group-hover:-translate-y-1" />
              ) : (
                <ChevronDown className="w-5 h-5 ml-2 transition-transform group-hover:translate-y-1" />
              )}
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
          </button>
        </div>

        {showAll && (
  <div className="mt-20 relative">
    <div className="backdrop-blur-md bg-amber-700/50 p-8 md:p-12 rounded-2xl border border-white/20 shadow-2xl bg-gradient-to-br from-white/10 to-white/5">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="flex flex-col justify-center">
          <div className="flex items-center mb-6">
            <div className="h-[2px] w-12 bg-white mr-3"></div>
            <p className="text-white font-medium text-sm uppercase tracking-[0.2em]">EXPÉRIENCE UNIQUE</p>
          </div>
          
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Savourez{" "}
            <span 
              className="font-serif italic text-amber-200"
              style={{ fontFamily: "'Playfair Display', serif", textShadow: "0 2px 10px rgba(0,0,0,0.2)" }}
            >
              l'Excellence
            </span>
          </h3>
          
          <div className="border-l-4 border-amber-200/70 pl-6 mb-8">
            <p className="text-white text-lg leading-relaxed">
              Découvrez notre collection complète de cafés et venez vivre une expérience gustative exceptionnelle dans notre établissement.
            </p>
          </div>
          
          <a
            href="https://www.instagram.com/dupondcafe/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden bg-gradient-to-r from-amber-700 to-amber-600 text-white px-8 py-3.5 rounded-lg transition-all duration-300 font-medium shadow-lg hover:shadow-amber-900/30 self-start"
          >
            <span className="relative z-10 flex items-center">
              <Coffee className="w-5 h-5 mr-2 transition-transform group-hover:rotate-12" />
              NOUS SUIVRE
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
          </a>
        </div>
        
        <div className="relative flex justify-center items-center">
          <div className="w-[220px] h-[220px] rounded-full bg-gradient-to-br from-amber-200 to-amber-100 flex items-center justify-center shadow-xl rotate-12 hover:rotate-0 transition-transform duration-500">
            <div className="w-[210px] h-[210px] rounded-full border-2 border-dashed border-amber-700/30 flex items-center justify-center overflow-hidden">
              <img
                src={logorond}
                alt="Logo Café"
                className="w-full h-full object-cover transform -rotate-12 hover:rotate-0 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)}

      </div>
    </section>
  )
}

export default Menu