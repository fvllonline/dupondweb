"use client"

import { useState, useRef, useEffect } from "react"
import { Star, ChevronLeft, ChevronRight, Play, Pause, Volume2, VolumeX, Quote } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sophie Martin",
      role: "Cliente fidèle",
      text: "Le Café Dupond est devenu mon refuge quotidien. L'ambiance y est chaleureuse et le café est tout simplement exceptionnel. Je recommande particulièrement leur cappuccino qui est le meilleur de la ville.",
      videoUrl: "/videos/testimonial1.mp4", // Remplacez par vos URLs de vidéos
      rating: 5
    },
    {
      name: "Thomas Dubois",
      role: "Entrepreneur",
      text: "J'organise régulièrement des réunions professionnelles au Café Dupond. Le cadre est idéal, le service impeccable et leurs pâtisseries sont un vrai plus pour impressionner mes clients. Un lieu incontournable.",
      videoUrl: "/videos/testimonial2.mp4",
      rating: 5
    },
    {
      name: "Marie Leroy",
      role: "Blogueuse culinaire",
      text: "En tant que passionnée de gastronomie, je suis très exigeante sur la qualité. Le Café Dupond répond parfaitement à mes attentes avec leurs cafés d'origine soigneusement sélectionnés et leur service attentionné.",
      videoUrl: "/videos/testimonial3.mp4",
      rating: 5
    },
  ]

  const [activeIndex, setActiveIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const videoRef = useRef(null)
  const [isTransitioning, setIsTransitioning] = useState(false)

  // Gérer la lecture/pause de la vidéo
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
        setIsPlaying(false)
      } else {
        videoRef.current.play()
        setIsPlaying(true)
      }
    }
  }

  // Gérer le son
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted
      setIsMuted(!isMuted)
    }
  }

  // Naviguer vers le témoignage précédent
  const prevTestimonial = () => {
    if (!isTransitioning) {
      setIsTransitioning(true)
      setIsPlaying(false)
      const newIndex = (activeIndex - 1 + testimonials.length) % testimonials.length
      setActiveIndex(newIndex)
      
      // Réinitialiser l'état de transition après l'animation
      setTimeout(() => {
        setIsTransitioning(false)
      }, 600)
    }
  }

  // Naviguer vers le témoignage suivant
  const nextTestimonial = () => {
    if (!isTransitioning) {
      setIsTransitioning(true)
      setIsPlaying(false)
      const newIndex = (activeIndex + 1) % testimonials.length
      setActiveIndex(newIndex)
      
      // Réinitialiser l'état de transition après l'animation
      setTimeout(() => {
        setIsTransitioning(false)
      }, 600)
    }
  }

  // Réinitialiser la vidéo lorsque le témoignage actif change
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load()
      setIsPlaying(false)
    }
  }, [activeIndex])

  return (
    <section className="py-24 bg-gradient-to-b from-amber-900/90 via-amber-800/80 to-amber-900/90 relative overflow-hidden" id="temoignages">
      {/* Overlay et motifs */}
      <div className="absolute inset-0 bg-black/30 mix-blend-multiply"></div>
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMTAiIGN5PSIxMCIgcj0iMiIgZmlsbD0id2hpdGUiLz48L3N2Zz4=')] bg-repeat"></div>
      
      {/* Particules décoratives */}
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

      {/* Badge AVIS en haut à gauche */}
      <div className="hidden md:flex absolute top-8 left-8 z-20">
        <div className="w-[120px] h-[120px] rounded-full bg-gradient-to-br from-amber-200 to-amber-100 flex items-center justify-center shadow-xl rotate-12 hover:rotate-0 transition-transform duration-500">
          <div className="w-[112px] h-[112px] rounded-full border-2 border-dashed border-amber-700/30 flex items-center justify-center">
            <div className="text-center transform -rotate-12 hover:rotate-0 transition-transform duration-500">
              <Star className="w-6 h-6 fill-amber-800 text-amber-800 mx-auto mb-1" />
              <p className="text-amber-900 font-bold text-sm">AVIS</p>
              <p className="text-amber-800 text-lg font-serif">★★★★★</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          {/* En-tête avec ligne décorative */}
          <div className="flex items-center justify-center mb-6">
            <div className="h-[2px] w-12 bg-amber-200 mr-3"></div>
            <p className="text-amber-200 font-medium text-sm uppercase tracking-[0.2em]">TÉMOIGNAGES</p>
            <div className="h-[2px] w-12 bg-amber-200 ml-3"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ce Que Nos Clients{" "}
            <span 
              className="font-serif italic text-amber-200" 
              style={{ fontFamily: "'Playfair Display', serif", textShadow: "0 2px 10px rgba(0,0,0,0.2)" }}
            >
              Disent
            </span>
          </h2>
          
          {/* Texte avec bordure subtile */}
          <div className="max-w-2xl mx-auto border-l-4 border-amber-200/70 pl-6 mb-10">
            <p className="text-white/80 text-lg text-left">
              Découvrez les expériences de nos clients fidèles qui partagent leur amour pour notre café et nos services.
            </p>
          </div>
        </div>

        {/* Nouveau design de témoignage */}
        <div className="max-w-5xl mx-auto relative">
          {/* Guillemets décoratifs */}
          <div className="absolute -top-16 -left-8 md:-left-16 text-amber-200/20 z-0">
            <Quote className="w-24 h-24 md:w-32 md:h-32" />
          </div>
          
          {/* Conteneur principal */}
          <div className="backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl bg-gradient-to-br from-white/10 to-white/5 overflow-hidden relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 min-h-[500px]">
              {/* Vidéo */}
              <div className="relative h-[300px] md:h-full">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-900/30 to-transparent z-10"></div>
                
                <video
                  ref={videoRef}
                  src={testimonials[activeIndex].videoUrl || "/placeholder-video.mp4"}
                  className={`w-full h-full object-cover transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
                  muted={isMuted}
                  playsInline
                  loop
                  onError={(e) => console.error("Erreur vidéo:", e)}
                />
                
                {/* Contrôles vidéo */}
                <div className="absolute bottom-4 left-4 flex items-center gap-3 z-20">
                  <button 
                    onClick={togglePlay}
                    className="w-10 h-10 rounded-md bg-white/30 backdrop-blur-sm flex items-center justify-center hover:bg-white/50 transition-colors"
                  >
                    {isPlaying ? (
                      <Pause className="w-5 h-5 text-white" />
                    ) : (
                      <Play className="w-5 h-5 text-white" />
                    )}
                  </button>
                  
                  <button 
                    onClick={toggleMute}
                    className="w-10 h-10 rounded-md bg-white/30 backdrop-blur-sm flex items-center justify-center hover:bg-white/50 transition-colors"
                  >
                    {isMuted ? (
                      <VolumeX className="w-5 h-5 text-white" />
                    ) : (
                      <Volume2 className="w-5 h-5 text-white" />
                    )}
                  </button>
                </div>
              </div>
              
              {/* Contenu du témoignage */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className={`transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
                  {/* Étoiles */}
                  <div className="flex gap-1 mb-6">
                    {Array.from({ length: testimonials[activeIndex].rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  
                  {/* Texte du témoignage */}
                  <div className="mb-8">
                    <p className="text-white text-xl md:text-2xl italic leading-relaxed font-light">
                      "{testimonials[activeIndex].text}"
                    </p>
                  </div>
                  
                  {/* Informations sur l'auteur */}
                  <div className="flex items-center">
                    <div className="w-14 h-14 rounded-md bg-gradient-to-br from-amber-200 to-amber-100 flex items-center justify-center shadow-md mr-4">
                      <span className="text-amber-800 font-bold text-xl">{testimonials[activeIndex].name.charAt(0)}</span>
                    </div>
                    <div>
                      <h3 
                        className="font-serif italic text-xl text-amber-200"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        {testimonials[activeIndex].name}
                      </h3>
                      <p className="text-white/80 text-sm">{testimonials[activeIndex].role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation */}
          <div className="flex justify-center mt-8 gap-4">
            <button 
              onClick={prevTestimonial}
              className="group w-12 h-12 rounded-full bg-gradient-to-br from-amber-700 to-amber-600 flex items-center justify-center shadow-lg hover:shadow-amber-900/30 transition-all duration-300"
              disabled={isTransitioning}
            >
              <ChevronLeft className="w-6 h-6 text-white group-hover:-translate-x-0.5 transition-transform" />
            </button>
            
            {/* Indicateurs */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (!isTransitioning && index !== activeIndex) {
                      setIsTransitioning(true)
                      setIsPlaying(false)
                      setActiveIndex(index)
                      setTimeout(() => {
                        setIsTransitioning(false)
                      }, 600)
                    }
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === activeIndex 
                      ? 'bg-amber-200 w-8' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                  disabled={isTransitioning}
                  aria-label={`Voir le témoignage de ${testimonials[index].name}`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="group w-12 h-12 rounded-full bg-gradient-to-br from-amber-700 to-amber-600 flex items-center justify-center shadow-lg hover:shadow-amber-900/30 transition-all duration-300"
              disabled={isTransitioning}
            >
              <ChevronRight className="w-6 h-6 text-white group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials