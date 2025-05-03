"use client"

import { useRef, useEffect, useState } from "react"
import { Coffee, Award, Star } from "lucide-react"
import vidAbt from "../assets/vidabt.mp4" // Assurez-vous que le chemin est correct

const AboutUs = () => {
  const videoRef = useRef(null)
  const [videoError, setVideoError] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const sectionRef = useRef(null)

  // Gestion améliorée de la vidéo
  useEffect(() => {
    if (videoRef.current) {
      // Configuration de la vidéo
      videoRef.current.loop = true
      videoRef.current.muted = true

      // Tentative de lecture automatique
      const playVideo = async () => {
        try {
          await videoRef.current.play()
        } catch (error) {
          console.error("Erreur de lecture vidéo:", error)
          setVideoError(true)
        }
      }

      playVideo()
    }

    return () => {
      // Nettoyage lors du démontage du composant
      if (videoRef.current) {
        videoRef.current.pause()
        videoRef.current.src = ""
        videoRef.current.load()
      }
    }
  }, [])

  // Observer pour les animations au défilement
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  // Gestionnaire d'erreur pour la vidéo
  const handleVideoError = () => {
    console.error("Erreur de chargement de la vidéo")
    setVideoError(true)
  }

  return (
    <section
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-b from-white to-amber-50 overflow-hidden"
      id="à-propos"
    >
      {/* Éléments décoratifs inspirés du HeroSection */}
      <div className="absolute top-20 left-10 w-2 h-2 rounded-full bg-amber-800/40 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-3 h-3 rounded-full bg-amber-700/30 animate-pulse"></div>

      {/* Motif de grain de café subtil */}
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMTAiIGN5PSIxMCIgcj0iMiIgZmlsbD0iIzdCM0YwMCIvPjwvc3ZnPg==')] bg-repeat"></div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Vidéo 1:1 en boucle avec gestion d'erreur */}
          <div
            className={`w-full lg:w-1/2 aspect-square rounded-2xl overflow-hidden shadow-2xl border-2 border-amber-100 relative bg-amber-50 transform transition-all duration-1000 ${
              isInView ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            }`}
          >
            {!videoError ? (
              <video
                ref={videoRef}
                autoPlay
                muted
                playsInline
                loop
                className="w-full h-full object-cover"
                onError={handleVideoError}
              >
                <source src={vidAbt} type="video/mp4" />
                Votre navigateur ne supporte pas les vidéos HTML5
              </video>
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-amber-50 p-6 text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 text-amber-700 mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
                <p className="text-amber-800 font-medium">Impossible de charger la vidéo</p>
                <button
                  onClick={() => {
                    setVideoError(false)
                    if (videoRef.current) {
                      videoRef.current.load()
                      videoRef.current.play()
                    }
                  }}
                  className="mt-4 px-4 py-2 bg-amber-700 text-white rounded-lg hover:bg-amber-600 transition-colors"
                >
                  Réessayer
                </button>
              </div>
            )}

            {/* Indicateur de lecture */}
            {/* <div className="absolute bottom-4 right-4 bg-black/50 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
              Lecture automatique
            </div> */}
          </div>

          {/* Contenu texte - Style inspiré du HeroSection */}
          <div
            className={`w-full lg:w-1/2 lg:pl-8 transform transition-all duration-1000 ${
              isInView ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            {/* En-tête avec ligne décorative */}
            <div className="flex items-center mb-6">
              <div className="h-[2px] w-12 bg-amber-700 mr-3"></div>
              <p className="text-amber-800 font-medium text-sm uppercase tracking-[0.2em]">À PROPOS DE NOUS</p>
            </div>

            {/* Titre avec typographie harmonisée */}
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              <span className="block">Aimeriez-Vous</span>
              <span
                className="font-serif italic text-amber-700 relative inline-block"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                <span className="relative z-10">Un Délicieux Café?</span>
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-amber-300/50 rounded-full transform -rotate-1"></span>
              </span>
            </h2>

            {/* Texte avec bordure subtile comme HeroSection */}
            <div className="border-l-4 border-amber-200/70 pl-6 mb-8">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Fondé en 2010, le Café Dupond est devenu une institution dans le quartier. Notre mission est simple :
                offrir un café d'exception dans un cadre chaleureux et convivial.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Nos grains sont soigneusement sélectionnés auprès de producteurs respectueux de l'environnement. Chaque
                tasse raconte une histoire, celle d'un savoir-faire artisanal et d'une passion pour le café de qualité.
              </p>
            </div>

            {/* Badges de qualité */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 bg-amber-100/70 px-4 py-2 rounded-full">
                <Award className="w-5 h-5 text-amber-700" />
                <span className="text-amber-800 font-medium">Café Premium</span>
              </div>
              <div className="flex items-center gap-2 bg-amber-100/70 px-4 py-2 rounded-full">
                <Star className="w-5 h-5 text-amber-700" />
                <span className="text-amber-800 font-medium">Service 5 étoiles</span>
              </div>
              <div className="flex items-center gap-2 bg-amber-100/70 px-4 py-2 rounded-full">
                <Coffee className="w-5 h-5 text-amber-700" />
                <span className="text-amber-800 font-medium">Torréfaction Artisanale</span>
              </div>
            </div>

            {/* Citation avec style amélioré */}
            {/* <blockquote className="relative bg-gradient-to-r from-amber-100/50 to-transparent p-6 rounded-lg my-8 border-l-4 border-amber-700/50">
              <div className="absolute top-2 left-2 text-amber-300/20 transform -rotate-12">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.9999 9.00001C11.9999 12.5 9.49994 10.5 9.49994 13.5C9.49994 14.9 10.5999 16 11.9999 16C13.3999 16 14.4999 14.9 14.4999 13.5C14.4999 12.1 13.3999 11 11.9999 11V9.00001ZM11.9999 7.00001V9.00001C14.2099 9.00001 15.9999 11.01 15.9999 13.5C15.9999 15.99 14.2099 18 11.9999 18C9.78994 18 7.99994 15.99 7.99994 13.5C7.99994 8.50001 11.9999 9.50001 11.9999 7.00001ZM17.9999 13.5C17.9999 15.5 16.5 16 16.5 16C16.5 16 18 15.5 18 13.5C18 11.5 16.5 11 16.5 11C16.5 11 17.9999 11.5 17.9999 13.5ZM6.49994 13.5C6.49994 15.5 4.99994 16 4.99994 16C4.99994 16 6.49994 15.5 6.49994 13.5C6.49994 11.5 4.99994 11 4.99994 11C4.99994 11 6.49994 11.5 6.49994 13.5Z" />
                </svg>
              </div>
              <p className="text-amber-800/90 text-lg italic font-medium relative z-10">
                "Le café est une affaire sérieuse qui mérite d'être traitée avec respect et créativité."
              </p>
              <footer className="text-amber-700 font-medium mt-2 text-right">— Vincent Dupond</footer>
            </blockquote> */}

            {/* Bouton avec effet comme HeroSection */}
            <a href="https://www.instagram.com/dupondcafe/" target="_blank">
            <button className="group relative overflow-hidden bg-gradient-to-r from-amber-700 to-amber-600 text-white px-8 py-3.5 rounded-lg transition-all duration-300 font-medium shadow-lg hover:shadow-amber-900/30 transform hover:-translate-y-1">
              <span className="relative z-10 flex items-center">
                <Coffee className="w-5 h-5 mr-2 transition-transform group-hover:rotate-12" />
                EN SAVOIR PLUS
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
            </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
