"use client"

import { useState, useRef, useEffect } from "react"
import { Star, ChevronLeft, ChevronRight, Play, Pause, Volume2, VolumeX, Quote, User } from "lucide-react"

// Import des images et vidéos depuis le dossier assets
import pdpRym from "../assets/pdprym.jpg"
import pdpPeche from "../assets/pdppeche.jpg"
import pdpRita from "../assets/pdprita.jpg"
import vidRym from "../assets/vidrym.mp4"
import vidPeche from "../assets/vidpeche.mp4"
import vidRita from "../assets/vidrita.mp4"

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ghita Akesbi",
      role: "Consultante RH , Owner TrendyLab",
      text: "Le Café Dupond est devenu mon refuge quotidien. L'ambiance y est chaleureuse et le café est tout simplement exceptionnel. Je recommande particulièrement leur cappuccino qui est le meilleur de la ville.",
      videoUrl: vidRita, // Vidéo de Rita importée
      profileImage: pdpRita, // Photo de Rita importée
      rating: 5,
    },
    {
      name: "Rym Fadel",
      role: "Décoratrice",
      text: "J'organise régulièrement des réunions professionnelles au Café Dupond. Le cadre est idéal, le service impeccable et leurs pâtisseries sont un vrai plus pour impressionner mes clients. Un lieu incontournable.",
      videoUrl: vidRym, // Vidéo de Rym importée
      profileImage: pdpRym, // Photo de Rym importée
      rating: 5,
    },
    {
      name: "Malika Bennani",
      role: "Personnalité publique",
      text: "En tant que passionnée de gastronomie, je suis très exigeante sur la qualité. Le Café Dupond répond parfaitement à mes attentes avec leurs cafés d'origine soigneusement sélectionnés et leur service attentionné.",
      videoUrl: vidPeche, // Vidéo de Peche importée
      profileImage: pdpPeche, // Photo de Peche importée
      rating: 5,
    },
  ]

  const [activeIndex, setActiveIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [videoError, setVideoError] = useState(false)
  const [profileImageError, setProfileImageError] = useState({})
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const sectionRef = useRef(null)
  const videoRef = useRef(null)

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

  // Gérer la lecture/pause de la vidéo
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
        setIsPlaying(false)
      } else {
        videoRef.current.play().catch((err) => {
          console.error("Erreur de lecture vidéo:", err)
          setVideoError(true)
        })
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

  // Gérer l'erreur de chargement d'image de profil
  const handleProfileImageError = (index) => {
    setProfileImageError((prev) => ({ ...prev, [index]: true }))
  }

  // Réinitialiser la vidéo lorsque le témoignage actif change
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load()
      setIsPlaying(false)
      setVideoError(false)
    }
  }, [activeIndex])

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-amber-50 to-white relative overflow-hidden"
      id="testimonials"
    >
      {/* Motif de fond subtil */}
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMTAiIGN5PSIxMCIgcj0iMiIgZmlsbD0iIzdCM0YwMCIvPjwvc3ZnPg==')] bg-repeat"></div>

      {/* Éléments décoratifs */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-amber-100/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* En-tête avec ligne décorative */}
          <div className="inline-block rounded-full bg-amber-100 px-4 py-1.5 mb-6 border border-amber-200/50 transform hover:scale-105 transition-transform duration-300">
            <p className="text-amber-800 font-medium text-sm tracking-wider">TÉMOIGNAGES</p>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-amber-900 mb-6">
            Ce Que Nos Clients{" "}
            <span
              className="font-serif italic relative inline-block"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              <span className="relative z-10">Adorent</span>
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-amber-300/50 rounded-full transform -rotate-1"></span>
            </span>
          </h2>

          <p className="text-amber-800/80 max-w-2xl mx-auto text-lg mb-8">
            Découvrez les expériences de nos clients fidèles qui partagent leur amour pour notre café et nos services.
          </p>
        </div>

        {/* Carousel de témoignages */}
        <div
          className={`max-w-6xl mx-auto transform transition-all duration-1000 ${
            isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
          style={{ transitionDelay: "300ms" }}
        >
          <div className="relative">
            {/* Guillemets décoratifs */}
            <div className="absolute -top-15 -left-5 md:-left-10 text-amber-900 opacity-60 z-0">
              <Quote className="w-20 h-20 md:w-28 md:h-28" />
            </div>

            {/* Carte principale */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden relative z-10 transform hover:scale-[1.01] transition-transform duration-500">
              <div className="grid grid-cols-1 lg:grid-cols-5">
                {/* Vidéo (2/5 de l'espace) */}
                <div className="lg:col-span-2 relative h-[300px] lg:h-auto">
                  {!videoError ? (
                    <video
                      ref={videoRef}
                      src={testimonials[activeIndex].videoUrl}
                      className={`w-full h-full object-cover transition-opacity duration-500 ${
                        isTransitioning ? "opacity-0" : "opacity-100"
                      }`}
                      // muted={isMuted}
                      playsInline
                      loop
                      onError={() => setVideoError(true)}
                    />
                  ) : (
                    <div className="w-full h-full bg-amber-100 flex items-center justify-center">
                      <div className="text-center p-6">
                        <User className="w-16 h-16 text-amber-700 mx-auto mb-4" />
                        <p className="text-amber-800">Vidéo non disponible</p>
                      </div>
                    </div>
                  )}

                  {/* Overlay dégradé */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                  {/* Contrôles vidéo */}
                  <div className="absolute bottom-6 left-6 flex items-center gap-3 z-20">
                    <button
                      onClick={togglePlay}
                      className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/40 transition-all duration-300 border transform hover:scale-110"
                      disabled={videoError}
                    >
                      {isPlaying ? (
                        <Pause className="w-9 h-9 text-white" />
                      ) : (
                        <Play className="w-9 h-9 text-white ml-0.5" />
                      )}
                    </button>

                    {/* <button
                      onClick={toggleMute}
                      className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/40 transition-all duration-300 border border-white/30 transform hover:scale-110"
                      disabled={videoError}
                    >
                      {isMuted ? (
                        <VolumeX className="w-4 h-4 text-white" />
                      ) : (
                        <Volume2 className="w-4 h-4 text-white" />
                      )}
                    </button> */}
                  </div>

                  {/* Badge de notation */}
                  <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center shadow-lg">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400 mr-1" />
                    <span className="text-amber-900 font-medium text-sm">{testimonials[activeIndex].rating}.0</span>
                  </div>
                </div>

                {/* Contenu du témoignage (3/5 de l'espace) */}
                <div className="lg:col-span-3 p-8 md:p-12 flex flex-col justify-center bg-gradient-to-br from-amber-50/50 to-white">
                  <div className={`transition-opacity duration-500 ${isTransitioning ? "opacity-0" : "opacity-100"}`}>
                    {/* Texte du témoignage */}
                    <div className="mb-10">
                      <p className="text-amber-900 text-xl md:text-2xl italic leading-relaxed font-light">
                        "{testimonials[activeIndex].text}"
                      </p>
                    </div>

                    {/* Informations sur l'auteur avec photo de profil */}
                    <div className="flex items-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-200 to-amber-100 flex items-center justify-center shadow-md mr-5 border-2 border-white overflow-hidden">
                        {testimonials[activeIndex].profileImage && !profileImageError[activeIndex] ? (
                          <img
                            src={testimonials[activeIndex].profileImage || "/placeholder.svg"}
                            alt={`Photo de ${testimonials[activeIndex].name}`}
                            className="w-full h-full object-cover"
                            onError={() => handleProfileImageError(activeIndex)}
                          />
                        ) : (
                          <span className="text-amber-800 font-bold text-xl">
                            {testimonials[activeIndex].name.charAt(0)}
                          </span>
                        )}
                      </div>
                      <div>
                        <h3
                          className="font-serif text-xl text-amber-800 font-medium"
                          style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                          {testimonials[activeIndex].name}
                        </h3>
                        <p className="text-amber-700/80">{testimonials[activeIndex].role}</p>

                        {/* Étoiles */}
                        <div className="flex gap-0.5 mt-1">
                          {Array.from({ length: testimonials[activeIndex].rating }).map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-8">
              <button
                onClick={prevTestimonial}
                className="group w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 border border-amber-100 transform hover:-translate-x-1"
                disabled={isTransitioning}
              >
                <ChevronLeft className="w-6 h-6 text-amber-700 group-hover:-translate-x-0.5 transition-transform" />
              </button>

              {/* Indicateurs avec photos de profil miniatures */}
              <div className="flex items-center gap-3">
                {testimonials.map((testimonial, index) => (
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
                    className={`relative transition-all duration-300 ${
                      index === activeIndex ? "opacity-100 scale-110" : "opacity-60 hover:opacity-80"
                    }`}
                    disabled={isTransitioning}
                    aria-label={`Voir le témoignage de ${testimonial.name}`}
                  >
                    <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-amber-200 shadow-sm">
                      {testimonial.profileImage && !profileImageError[index] ? (
                        <img
                          src={testimonial.profileImage || "/placeholder.svg"}
                          alt={`Photo de ${testimonial.name}`}
                          className="w-full h-full object-cover"
                          onError={() => handleProfileImageError(index)}
                        />
                      ) : (
                        <div className="w-full h-full bg-amber-100 flex items-center justify-center">
                          <span className="text-amber-800 font-bold text-xs">{testimonial.name.charAt(0)}</span>
                        </div>
                      )}
                    </div>
                    {index === activeIndex && (
                      <div className="absolute -inset-1 border-2 border-amber-300 rounded-full animate-ping opacity-0"></div>
                    )}
                  </button>
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="group w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 border border-amber-100 transform hover:translate-x-1"
                disabled={isTransitioning}
              >
                <ChevronRight className="w-6 h-6 text-amber-700 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* Badges décoratifs */}
          <div className="hidden lg:block">
            {/* Badge 1 */}
            <div className="absolute top-2/4 -right-12 z-20">
              <div className="w-[100px] h-[100px] rounded-full bg-gradient-to-br from-amber-100 to-white flex items-center justify-center shadow-xl rotate-12 hover:rotate-0 transition-transform duration-500 border border-amber-200/50">
                <div className="text-center">
                  <Star className="w-6 h-6 fill-amber-400 text-amber-400 mx-auto" />
                  <p className="text-amber-800 text-xs font-bold mt-1">EXCELLENTS</p>
                </div>
              </div>
            </div>

            {/* Badge 2 */}
            <div className="absolute bottom-2/4 -left-20 z-20">
              <div className="w-[120px] h-[120px] rounded-full bg-gradient-to-br from-amber-200 to-amber-100 flex items-center justify-center shadow-xl -rotate-12 hover:rotate-0 transition-transform duration-500 border border-amber-300/50">
                <div className="text-center">
                  <p className="text-amber-900 text-xs font-bold">CLIENTS</p>
                  <p className="text-amber-800 text-xl font-serif">Satisfaits</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
