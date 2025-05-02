"use client"

import { useState, useEffect, useRef } from "react"
import {
  X,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Volume2,
  VolumeX,
  ImageIcon,
  Film,
  Grid3X3,
  Facebook,
  Instagram,
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

// Import des fichiers depuis le dossier assets
import gal1 from "../assets/gal1.jpg"
import gal2 from "../assets/gal2.jpg"
import gal4 from "../assets/gal4.jpg"
import gal7 from "../assets/gal7.jpg"
import gal8 from "../assets/gal8.jpg"
import gal10 from "../assets/gal10.jpg"
import gal3vid from "../assets/gal3vid.mp4"
import gal5vid from "../assets/gal5vid.mp4"
import gal6vid from "../assets/gal6vid.mp4"
import gal9vid from "../assets/gal9vid.mp4"
import gal11vid from "../assets/gal11vid.mp4"
import gal12vid from "../assets/gal12vid.mp4"

// Données de la galerie avec les fichiers importés
const galleryItems = [
  {
    id: 1,
    type: "image",
    source: gal1,
    description: "Un environnement chaleureux pour déguster nos cafés d'exception",
    date: "15 Mars 2023",
  },
  {
    id: 2,
    type: "image",
    source: gal2,
    description: "Nos baristas experts préparent chaque café avec passion et précision",
    date: "22 Avril 2023",
  },
  {
    id: 3,
    type: "video",
    source: gal3vid,
    description: "Découvrez comment nos baristas créent de magnifiques motifs sur vos cafés",
    date: "5 Mai 2023",
  },
  {
    id: 4,
    type: "image",
    source: gal4,
    description: "Profitez de votre café en plein air dans notre espace extérieur aménagé",
    date: "18 Juin 2023",
  },
  {
    id: 5,
    type: "video",
    source: gal5vid,
    description: "Le processus minutieux de torréfaction qui donne à nos cafés leur saveur unique",
    date: "7 Juillet 2023",
  },
  {
    id: 6,
    type: "video",
    source: gal6vid,
    description: "Ambiance jazz lors de notre événement mensuel",
    date: "14 Août 2023",
  },
  {
    id: 7,
    type: "image",
    source: gal7,
    description: "Délicieuses créations qui accompagnent parfaitement nos cafés",
    date: "29 Septembre 2023",
  },
  {
    id: 8,
    type: "image",
    source: gal8,
    description: "Nos grains de café proviennent des meilleures régions productrices du monde",
    date: "10 Octobre 2023",
  },
  {
    id: 9,
    type: "video",
    source: gal9vid,
    description: "Apprenez à reconnaître les différentes notes aromatiques du café",
    date: "5 Novembre 2023",
  },
  {
    id: 10,
    type: "image",
    source: gal10,
    description: "Les passionnés qui font vivre le Café Dupond au quotidien",
    date: "12 Décembre 2023",
  },
  {
    id: 11,
    type: "video",
    source: gal11vid,
    description: "La technique pour un café filtre parfaitement équilibré",
    date: "8 Janvier 2024",
  },
  {
    id: 12,
    type: "video",
    source: gal12vid,
    description: "Retour sur l'ouverture de notre nouvel espace",
    date: "20 Février 2024",
  },
]

const Galerie = () => {
  const [selectedItem, setSelectedItem] = useState(null)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [filter, setFilter] = useState("all")
  const [isInView, setIsInView] = useState(false)
  const [hoveredItem, setHoveredItem] = useState(null)
  const videoRef = useRef(null)
  const sectionRef = useRef(null)

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

  // Filtrer les éléments selon le type sélectionné
  const filteredItems = filter === "all" ? galleryItems : galleryItems.filter((item) => item.type === filter)

  // Ouvrir la lightbox avec l'élément sélectionné
  const openLightbox = (item) => {
    setSelectedItem(item)
    setIsLightboxOpen(true)
    document.body.style.overflow = "hidden" // Empêcher le défilement de la page
  }

  // Fermer la lightbox
  const closeLightbox = () => {
    setIsLightboxOpen(false)
    setIsPlaying(false)
    document.body.style.overflow = "" // Réactiver le défilement de la page
  }

  // Navigation dans la lightbox
  const navigateLightbox = (direction) => {
    const currentIndex = filteredItems.findIndex((item) => item.id === selectedItem.id)
    let newIndex

    if (direction === "next") {
      newIndex = (currentIndex + 1) % filteredItems.length
    } else {
      newIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length
    }

    setSelectedItem(filteredItems[newIndex])
    setIsPlaying(false)
  }

  // Gérer la lecture/pause de la vidéo
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  // Gérer le son
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted
      setIsMuted(!isMuted)
    }
  }

  // Gérer les touches du clavier pour la navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isLightboxOpen) return

      switch (e.key) {
        case "Escape":
          closeLightbox()
          break
        case "ArrowLeft":
          navigateLightbox("prev")
          break
        case "ArrowRight":
          navigateLightbox("next")
          break
        case " ": // Espace
          if (selectedItem?.type === "video") {
            e.preventDefault()
            togglePlay()
          }
          break
        default:
          break
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isLightboxOpen, selectedItem, isPlaying])

  // Réinitialiser la vidéo lorsque l'élément sélectionné change
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0
      setIsPlaying(false)
    }
  }, [selectedItem])

  // Calculer le nombre d'éléments par type
  const imageCounts = {
    all: galleryItems.length,
    image: galleryItems.filter((item) => item.type === "image").length,
    video: galleryItems.filter((item) => item.type === "video").length,
  }

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-white to-amber-50 relative overflow-hidden"
      id="galerie"
    >
      {/* Motif de fond subtil */}
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMTAiIGN5PSIxMCIgcj0iMiIgZmlsbD0iIzdCM0YwMCIvPjwvc3ZnPg==')] bg-repeat"></div>

      {/* Éléments décoratifs */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-amber-50/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-amber-50/50 to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* En-tête avec badge */}
          <div className="inline-block rounded-full bg-amber-100 px-4 py-1.5 mb-6 border border-amber-200/50 transform hover:scale-105 transition-transform duration-300">
            <p className="text-amber-800 font-medium text-sm tracking-wider">NOTRE GALERIE</p>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-amber-900 mb-6">
            Découvrez Notre{" "}
            <span
              className="font-serif italic relative inline-block"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              <span className="relative z-10">Univers</span>
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-amber-300/50 rounded-full transform -rotate-1"></span>
            </span>
          </h2>

          <p className="text-amber-800/80 max-w-2xl mx-auto text-lg mb-8">
            Plongez dans l'atmosphère unique de notre café à travers notre collection de photos et vidéos.
          </p>
        </div>

        {/* Filtres */}
        <div 
  className={`flex justify-center mb-10 transition-all duration-700 ease-[cubic-bezier(0.33,1,0.68,1)] ${
    isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
  }`}
  style={{ transitionDelay: "200ms" }}
>
  <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-1.5 flex flex-wrap justify-center gap-1.5 border border-gray-100">
    <button
      onClick={() => setFilter("all")}
      className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
        filter === "all" 
          ? "bg-gradient-to-r from-amber-600 to-amber-500 text-white shadow-md shadow-amber-200/50" 
          : "text-amber-800 hover:bg-amber-50/70 hover:shadow-sm"
      }`}
    >
      <Grid3X3 className="w-4 h-4 flex-shrink-0" />
      <span className="whitespace-nowrap">Tout voir</span>
      <span className={`text-xs rounded-full px-2 py-1 ml-1 ${
        filter === "all" 
          ? "bg-white/20 text-white/90" 
          : "bg-amber-100/80 text-amber-800"
      }`}>
        {imageCounts.all}
      </span>
    </button>

    <button
      onClick={() => setFilter("image")}
      className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
        filter === "image" 
          ? "bg-gradient-to-r from-amber-600 to-amber-500 text-white shadow-md shadow-amber-200/50" 
          : "text-amber-800 hover:bg-amber-50/70 hover:shadow-sm"
      }`}
    >
      <ImageIcon className="w-4 h-4 flex-shrink-0" />
      <span className="whitespace-nowrap">Photos</span>
      <span className={`text-xs rounded-full px-2 py-1 ml-1 ${
        filter === "image" 
          ? "bg-white/20 text-white/90" 
          : "bg-amber-100/80 text-amber-800"
      }`}>
        {imageCounts.image}
      </span>
    </button>

    <button
      onClick={() => setFilter("video")}
      className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
        filter === "video" 
          ? "bg-gradient-to-r from-amber-600 to-amber-500 text-white shadow-md shadow-amber-200/50" 
          : "text-amber-800 hover:bg-amber-50/70 hover:shadow-sm"
      }`}
    >
      <Film className="w-4 h-4 flex-shrink-0" />
      <span className="whitespace-nowrap">Vidéos</span>
      <span className={`text-xs rounded-full px-2 py-1 ml-1 ${
        filter === "video" 
          ? "bg-white/20 text-white/90" 
          : "bg-amber-100/80 text-amber-800"
      }`}>
        {imageCounts.video}
      </span>
    </button>
  </div>
</div>
        {/* Grille de la galerie - Images et vidéos plus petites */}
        <div
          className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4 transform transition-all duration-1000 ${
            isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="aspect-square relative overflow-hidden rounded-lg shadow-md cursor-pointer group transform hover:scale-[1.03] transition-all duration-300 hover:shadow-lg border border-amber-100/50"
              onClick={() => openLightbox(item)}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {/* Media */}
              {item.type === "image" ? (
                <img
                  src={item.source || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              ) : (
                <div className="w-full h-full bg-amber-900/10">
                  <video
                    src={item.source}
                    className="w-full h-full object-cover"
                    muted
                    loop
                    playsInline
                    onMouseEnter={(e) => {
                      e.target.play().catch((err) => console.error("Erreur de lecture vidéo:", err))
                    }}
                    onMouseLeave={(e) => {
                      e.target.pause()
                      e.target.currentTime = 0
                    }}
                  />
                </div>
              )}

              {/* Overlay avec animation */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-amber-900/80 via-amber-800/40 to-transparent flex flex-col justify-end p-3 transition-all duration-300 ${
                  hoveredItem === item.id ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="transform transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
                  <h3 className="text-white font-medium text-sm md:text-base">{item.title}</h3>
                </div>
              </div>

              {/* Badge pour les vidéos (toujours visible) */}
              {item.type === "video" && (
                <div className="absolute top-2 right-2 bg-amber-700/90 text-white rounded-full p-1.5 shadow-lg">
                  <Play className="w-3 h-3 fill-white" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Message si aucun élément ne correspond au filtre */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16 bg-white/80 rounded-2xl shadow-md">
            <ImageIcon className="w-16 h-16 text-amber-300 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-amber-900 mb-2">Aucun élément trouvé</h3>
            <p className="text-amber-700">Aucun contenu ne correspond à ce filtre</p>
            <button
              onClick={() => setFilter("all")}
              className="mt-6 px-6 py-2 bg-amber-700 text-white rounded-full hover:bg-amber-600 transition-colors"
            >
              Voir tout
            </button>
          </div>
        )}
      </div>

      {/* Lightbox redesigné - Affichage très grand sans caption qui bloque les contrôles */}
      <AnimatePresence>
        {isLightboxOpen && selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center"
          >
            {/* Fond avec effet de flou */}
            <div
              className="absolute inset-0 bg-black/95 backdrop-blur-sm"
              onClick={closeLightbox}
              style={{ backdropFilter: "blur(10px)" }}
            ></div>

            {/* Conteneur principal */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative z-10 w-full h-full flex items-center justify-center"
            >
              {/* Barre supérieure avec titre et contrôles */}
              <div className="absolute top-0 left-0 z-20 bg-gradient-to-b from-black/80 to-transparent p-4 flex items-center">
                <button
                  onClick={closeLightbox}
                  className="ml-auto bg-white/10 hover:bg-white/20 rounded-full p-2 text-white transition-colors"
                  aria-label="Fermer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Contenu média - Taille maximisée */}
              <div className="w-full h-full flex items-center justify-center p-4">
                {selectedItem.type === "image" ? (
                  <img
                    src={selectedItem.source || "/placeholder.svg"}
                    alt={selectedItem.title}
                    className="max-w-full max-h-[90vh] object-contain"
                    style={{ objectFit: "contain" }}
                  />
                ) : (
                  <div className="relative w-full h-full flex items-center justify-center">
                    <video
                      ref={videoRef}
                      src={selectedItem.source}
                      className="max-w-full max-h-[90vh] object-contain"
                      controls={false}
                      muted={isMuted}
                      loop
                      playsInline
                      onPlay={() => setIsPlaying(true)}
                      onPause={() => setIsPlaying(false)}
                      onEnded={() => setIsPlaying(false)}
                      onClick={(e) => {
                        e.stopPropagation()
                        togglePlay()
                      }}
                    />

                    {/* Overlay de contrôle vidéo */}
                    <div
                      className="absolute inset-0 flex items-center justify-center cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation()
                        togglePlay()
                      }}
                    >
                      {!isPlaying && (
                        <motion.div
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0.8, opacity: 0 }}
                          className="bg-white/20 backdrop-blur-sm rounded-full p-6 text-white"
                        >
                          <Play className="w-12 h-12 fill-white" />
                        </motion.div>
                      )}
                    </div>

                    {/* Contrôles vidéo - Repositionnés pour ne pas être bloqués */}
                    <div className="absolute top-4 right-4 flex items-center gap-2 z-30">
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          toggleMute()
                        }}
                        className="bg-black/50 backdrop-blur-sm rounded-full p-2 text-white transition-colors"
                      >
                        {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          togglePlay()
                        }}
                        className="bg-black/50 backdrop-blur-sm rounded-full p-2 text-white transition-colors"
                      >
                        {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Navigation */}
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  navigateLightbox("prev")
                }}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 backdrop-blur-sm rounded-full p-3 text-white transition-colors z-30"
                aria-label="Précédent"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  navigateLightbox("next")
                }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 backdrop-blur-sm rounded-full p-3 text-white transition-colors z-30"
                aria-label="Suivant"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Galerie
