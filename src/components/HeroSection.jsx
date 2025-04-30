"use client"

import { useState, useEffect } from "react"
import { ChevronDown, Coffee, CupSoda } from "lucide-react"
import herobg from "../assets/herobg.jpg"
import { FiClock, FiCoffee } from "react-icons/fi";
import { GiChocolateBar } from "react-icons/gi";

const HeroSection = () => {
  const [scrolled, setScrolled] = useState(0)

  // Effet de parallaxe au défilement
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const scrollPercentage = Math.min(scrollY / 1000, 0.5)
      setScrolled(scrollPercentage)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Image de fond avec overlay et effet parallaxe */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-[120%] absolute top-0 left-0"
          style={{
            transform: `translateY(${scrolled * 15}%)`,
            transition: "transform 0.1s ease-out",
          }}
        >
          <img
            src={herobg || "/placeholder.svg"}
            alt="Café chaud dans une tasse avec ambiance café chaleureuse"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-amber-900/70 via-amber-800/60 to-amber-900/80" />
        <div className="absolute inset-0 bg-black/30 mix-blend-multiply" />

        {/* Motif de grain de café subtil */}
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMTAiIGN5PSIxMCIgcj0iMiIgZmlsbD0id2hpdGUiLz48L3N2Zz4=')] bg-repeat" />
      </div>

      {/* Contenu */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16">
          <div className="max-w-2xl backdrop-blur-md p-8 md:p-12 rounded-2xl border border-white/20 shadow-2xl bg-gradient-to-br from-white/10 to-white/5">
            {/* En-tête avec ligne décorative */}
            <div className="flex items-center mb-6">
              <div className="h-[2px] w-12 bg-white mr-3"></div>
              <p className="text-white font-medium text-sm uppercase tracking-[0.2em]">Bienvenue chez nous</p>
            </div>

            {/* Titre avec animation */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              <span className="relative inline-block ">
                <span className="">
                  L'art du café
                </span>
              </span>
              <br />
              <span
                className="font-serif italic text-amber-200 mt-2 block"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  textShadow: "0 2px 10px rgba(0,0,0,0.2)",
                }}
              >
                à la française
              </span>
            </h1>

            {/* Texte avec bordure subtile */}
            <div className="border-l-4 border-amber-200/70 pl-6 mb-10">
              <p className="text-white text-lg max-w-lg leading-relaxed">
                Torréfié avec passion, servi avec élégance. Découvrez nos grands crus de café préparés par nos maîtres
                torréfacteurs.
              </p>
            </div>

            {/* Boutons avec effets améliorés */}
            <div className="flex flex-wrap gap-4">
              <button className="group relative overflow-hidden bg-gradient-to-r from-amber-700 to-amber-600 text-white px-8 py-3.5 rounded-lg transition-all duration-300 font-medium shadow-lg hover:shadow-amber-900/30 hover:shadow-xl">
                <span className="relative z-10 flex items-center">
                  <CupSoda className="w-5 h-5 mr-2 transition-transform group-hover:rotate-12" />
                  RÉSERVER UNE TABLE
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              </button>

              <button className="group relative overflow-hidden border-2 border-white/70 hover:border-white text-white px-8 py-3.5 rounded-lg transition-all duration-300 font-medium backdrop-blur-sm">
                <span className="relative z-10 flex items-center">
                  NOTRE CARTE
                  <ChevronDown className="w-4 h-4 ml-2 transition-transform group-hover:translate-y-1" />
                </span>
                <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </button>
            </div>
          </div>

          {/* Élément décoratif - Badge */}
          <div className="hidden md:flex relative">
            <div className="w-[180px] h-[180px] rounded-full bg-gradient-to-br from-amber-200 to-amber-100 flex items-center justify-center shadow-xl rotate-12 hover:rotate-0 transition-transform duration-500">
              <div className="w-[170px] h-[170px] rounded-full border-2 border-dashed border-amber-700/30 flex items-center justify-center">
                <div className="text-center transform -rotate-12 hover:rotate-0 transition-transform duration-500">
                  <Coffee className="w-10 h-10 text-amber-800 mx-auto mb-2" />
                  <p className="text-amber-900 font-bold">DEPUIS</p>
                  <p className="text-amber-800 text-2xl font-serif">2022</p>
                </div>
              </div>
            </div>
          </div>
{/* Badge - Horaires */}
<div className="hidden md:flex relative">
  <div className="w-[180px] h-[180px] rounded-full bg-gradient-to-br from-amber-200 to-amber-100 flex items-center justify-center shadow-xl rotate-12 hover:rotate-0 transition-transform duration-500">
    <div className="w-[170px] h-[170px] rounded-full border-2 border-dashed border-amber-700/30 flex items-center justify-center">
      <div className="text-center transform -rotate-12 hover:rotate-0 transition-transform duration-500">
        <FiClock className="w-10 h-10 text-amber-800 mx-auto mb-2" /> {/* Icône horloge */}
        <p className="text-amber-900 font-bold">HORAIRES</p>
        <p className="text-amber-800 text-xl font-serif">7h30 - 00h</p>
      </div>
    </div>
  </div>
</div>

{/* Badge - Spécialité Chocolat */}
<div className="hidden md:flex relative">
  <div className="w-[180px] h-[180px] rounded-full bg-gradient-to-br from-amber-200 to-amber-100 flex items-center justify-center shadow-xl rotate-12 hover:rotate-0 transition-transform duration-500">
    <div className="w-[170px] h-[170px] rounded-full border-2 border-dashed border-amber-700/30 flex items-center justify-center">
      <div className="text-center transform -rotate-12 hover:rotate-0 transition-transform duration-500">
        <GiChocolateBar className="w-10 h-10 text-amber-800 mx-auto mb-2" /> {/* Nouvelle icône chocolat */}
        <p className="text-amber-900 font-bold">NOTRE FIERTÉ</p>
        <p className="text-amber-800 text-xl font-serif">Chocolat <br />Artisanal</p>
      </div>
    </div>
  </div>
</div>        
        </div>
      </div>

      {/* Élément décoratif - Flèche de défilement */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center animate-bounce backdrop-blur-sm">
            <ChevronDown className="h-5 w-5 text-white" />
          </div>
        </div>
      </div>

      {/* Éléments décoratifs - Particules */}
      <div
        className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-white/40 animate-pulse"
        style={{ animationDelay: "0.5s" }}
      ></div>
      <div
        className="absolute top-1/3 right-1/4 w-3 h-3 rounded-full bg-white/30 animate-pulse"
        style={{ animationDelay: "1.2s" }}
      ></div>
      <div
        className="absolute bottom-1/4 left-1/3 w-2 h-2 rounded-full bg-white/40 animate-pulse"
        style={{ animationDelay: "0.8s" }}
      ></div>
    </section>
  )
}

export default HeroSection