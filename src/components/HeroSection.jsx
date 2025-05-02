"use client"

import { useState, useEffect } from "react"
import { ChevronDown, Coffee, CupSoda, Clock, CandyIcon, MapPin, ArrowRight } from "lucide-react"
import herobg from "../assets/herobg.jpg"

const HeroSection = () => {
  const [scrolled, setScrolled] = useState(0)
  const [activeInfo, setActiveInfo] = useState(null)
  const [isVisible, setIsVisible] = useState(false)

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

  // Animation d'entrée
  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="accueil" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Div pour créer un espace entre le header et le contenu - SOLUTION POUR LE RESPONSIVE */}
      <div className="absolute top-0 left-0 w-full h-16 md:h-0"></div>

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

        {/* Overlay amélioré avec plusieurs couches */}
        <div className="absolute inset-0 bg-gradient-to-b from-amber-700/30 via-amber-700/40 to-amber-550/90" />
        <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />

        {/* Motif de grain de café subtil */}
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMTAiIGN5PSIxMCIgcj0iMiIgZmlsbD0id2hpdGUiLz48L3N2Zz4=')] bg-repeat" />
      </div>

      {/* Contenu principal */}
      <div className="container mx-auto px-4 relative z-10 pt-20 md:pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Contenu texte (occupe 7 colonnes sur grand écran) */}
          <div className="lg:col-span-7">
            <div
              className={`backdrop-blur-md p-6 md:p-12 rounded-3xl border border-white/10 shadow-2xl bg-gradient-to-br from-black/20 to-black/5 max-w-3xl transform transition-all duration-1000 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              {/* En-tête avec ligne décorative */}
              <div className="flex items-center mb-4 md:mb-6">
                <div className="h-[2px] w-8 md:w-12 bg-amber-300 mr-2 md:mr-3"></div>
                <p className="text-amber-200 font-medium text-xs md:text-sm uppercase tracking-[0.2em]">
                  Bienvenue chez nous
                </p>
              </div>

              {/* Titre avec animation */}
              <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 md:mb-8 leading-tight">
                <span className="relative inline-block overflow-hidden">
                  <span className="relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-0 after:bg-amber-300 after:transition-all after:duration-1000 hover:after:w-full">
                    L'art du café
                  </span>
                </span>
                <br />
                <span
                  className="font-serif italic text-amber-200 mt-1 md:mt-2 block relative"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    textShadow: "0 2px 10px rgba(0,0,0,0.3)",
                  }}
                >
                  <span className="relative z-10">à la française</span>
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-amber-500/30 rounded-full transform -rotate-1"></span>
                </span>
              </h1>

              {/* Texte avec bordure subtile */}
              <div className="border-l-4 border-amber-300/70 pl-4 md:pl-6 mb-6 md:mb-10">
                <p className="text-white text-sm sm:text-base md:text-lg max-w-lg leading-relaxed">
                  Torréfié avec passion, servi avec élégance. Découvrez nos grands crus de café préparés par nos maîtres
                  torréfacteurs et notre chocolat artisanal primé.
                </p>
              </div>

              {/* Boutons avec effets améliorés */}
              <div className="flex flex-wrap gap-3 md:gap-4">
                <button className="group relative overflow-hidden bg-gradient-to-r from-amber-600 to-amber-500 text-white px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-xl transition-all duration-300 font-medium shadow-lg hover:shadow-amber-600/30 hover:shadow-xl transform hover:-translate-y-1 text-sm sm:text-base">
                  <span className="relative z-10 flex items-center">
                    <CupSoda className="w-4 h-4 md:w-5 md:h-5 mr-2 transition-transform group-hover:rotate-12" />
                    RÉSERVER UNE TABLE
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                </button>

                <button className="group relative overflow-hidden border-2 border-amber-200/50 hover:border-amber-200 text-white px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-xl transition-all duration-300 font-medium backdrop-blur-sm transform hover:-translate-y-1 text-sm sm:text-base">
                  <span className="relative z-10 flex items-center">
                    NOTRE CARTE
                    <ArrowRight className="w-3 h-3 md:w-4 md:h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </button>
              </div>
            </div>
          </div>

          {/* Badges et informations (occupe 5 colonnes sur grand écran) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            {/* Badges en disposition triangulaire */}
            <div
              className={`relative h-[400px] w-[300px] hidden lg:block transition-all duration-1000 ${
                isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              {/* Badge principal - Depuis 2021 */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-[200px] h-[200px] rounded-full bg-gradient-to-br from-amber-300 to-amber-200 flex items-center justify-center shadow-xl rotate-12 hover:rotate-0 transition-transform duration-500 border border-amber-400/30">
                  <div className="w-[190px] h-[190px] rounded-full border-2 border-dashed border-amber-700/30 flex items-center justify-center">
                    <div className="text-center transform -rotate-12 hover:rotate-0 transition-transform duration-500">
                      <Coffee className="w-12 h-12 text-amber-800 mx-auto mb-2" />
                      <p className="text-amber-900 font-bold">DEPUIS</p>
                      <p className="text-amber-800 text-3xl font-serif">2021</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Badge secondaire - Horaires */}
              <div className="absolute top-0 right-0">
                <div className="w-[150px] h-[150px] rounded-full bg-gradient-to-br from-amber-200 to-amber-100 flex items-center justify-center shadow-xl -rotate-6 hover:rotate-6 transition-transform duration-500 border border-amber-300/30">
                  <div className="w-[140px] h-[140px] rounded-full border-2 border-dotted border-amber-700/30 flex items-center justify-center">
                    <div className="text-center transform rotate-6 hover:-rotate-6 transition-transform duration-500">
                      <Clock className="w-8 h-8 text-amber-800 mx-auto mb-1" />
                      <p className="text-amber-900 font-bold text-sm">HORAIRES</p>
                      <p className="text-amber-800 text-lg font-serif">7h30 - 00h</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Badge tertiaire - Chocolat Artisanal */}
              <div className="absolute bottom-0 left-0">
                <div className="w-[160px] h-[160px] rounded-full bg-gradient-to-br from-amber-100 to-amber-50 flex items-center justify-center shadow-xl rotate-[-12deg] hover:rotate-[12deg] transition-transform duration-500 border border-amber-200/30">
                  <div className="w-[150px] h-[150px] rounded-full border-2 border-solid border-amber-700/20 flex items-center justify-center">
                    <div className="text-center transform rotate-[12deg] hover:rotate-[-12deg] transition-transform duration-500">
                      <CandyIcon className="w-9 h-9 text-amber-800 mx-auto mb-1" />
                      <p className="text-amber-900 font-bold text-sm">SPÉCIALITÉ</p>
                      <p className="text-amber-800 text-base font-serif">
                        Chocolat
                        <br />
                        Artisanal
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Éléments décoratifs - Particules améliorées */}
      <div
        className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-amber-300/40 animate-pulse"
        style={{ animationDelay: "0.5s" }}
      ></div>
      <div
        className="absolute top-1/3 right-1/4 w-4 h-4 rounded-full bg-amber-200/30 animate-pulse"
        style={{ animationDelay: "1.2s" }}
      ></div>
      <div
        className="absolute bottom-1/3 left-1/3 w-2 h-2 rounded-full bg-amber-100/40 animate-pulse"
        style={{ animationDelay: "0.8s" }}
      ></div>
      <div
        className="absolute top-2/3 right-1/3 w-3 h-3 rounded-full bg-amber-400/20 animate-pulse"
        style={{ animationDelay: "1.5s" }}
      ></div>
    </section>
  )
}

export default HeroSection
