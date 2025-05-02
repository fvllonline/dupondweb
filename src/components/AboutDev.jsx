"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Facebook, Instagram, Linkedin, Code, Cpu, Globe, Database, ChevronRight } from "lucide-react"
import dev from "../assets/dev.png"
import logorond from "../assets/logorond.png"

const AboutDev = () => {
  const [isInView, setIsInView] = useState(false)
  const sectionRef = useRef(null)
  const [activeSkill, setActiveSkill] = useState(0)

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

  // Compétences avec animation
  const skills = [
    {
      name: "Frontend",
      icon: <Code />,
      color: "from-amber-500 to-amber-600",
      items: ["React", "Next.js", "TailwindCSS", "JavaScript"],
    },
    {
      name: "Backend",
      icon: <Database />,
      color: "from-amber-700 to-amber-800",
      items: ["Node.js", "Laravel", "PHP", "Python"],
    },
    {
      name: "CMS",
      icon: <Cpu />,
      color: "from-amber-600 to-amber-700",
      items: ["WordPress","Shopify"],
    },
  ]

  // Animation pour les éléments
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section
      ref={sectionRef}
      id="about-dev"
      className="py-24 relative overflow-hidden bg-gradient-to-b from-amber-50 to-white"
    >
      {/* Motif de fond subtil */}
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMTAiIGN5PSIxMCIgcj0iMiIgZmlsbD0iIzdCM0YwMCIvPjwvc3ZnPg==')] bg-repeat"></div>

      {/* Éléments décoratifs */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* Contenu texte */}
            <motion.div variants={itemVariants} className="order-2 lg:order-1">
              {/* Ligne décorative et titre */}
              <div className="mb-6">
                <div className="h-1 w-16 bg-amber-500 mb-6"></div>
                <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-2">À propos du</h2>
                <h2 className="text-4xl md:text-5xl font-serif italic text-amber-500 font-bold">Développeur</h2>
              </div>
                <br />
                <br />
              {/* Nom du développeur */}
              <div className="flex items-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold">
                  <span className="text-amber-500">ADDAOUI</span>{" "}
                  <span className="font-serif italic text-amber-900">Nawfal</span>
                </h3>
              </div>

              {/* Description */}
              <div className="prose prose-lg text-amber-900/80 mb-8 max-w-2xl">
                <p>
                  20ans, développeur Web Full Stack passionné et toujours à l'affût de nouvelles technologies, je suis
                  prêt à relever de nouveaux défis ! Que ce soit pour créer des solutions innovantes, optimiser des
                  systèmes existants ou collaborer sur des projets ambitieux, je mets mes compétences et ma créativité
                  au service de votre entreprise.
                </p>
              </div>

              {/* Compétences */}
              <div className="mb-8">
                <div className="flex flex-wrap gap-3 mb-6">
                  {skills.map((skill, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveSkill(index)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                        activeSkill === index
                          ? `bg-gradient-to-r ${skill.color} text-white shadow-md`
                          : "bg-white text-amber-800 border border-amber-200 hover:border-amber-300"
                      }`}
                    >
                      <span className={activeSkill === index ? "text-white" : "text-amber-500"}>{skill.icon}</span>
                      <span>{skill.name}</span>
                    </button>
                  ))}
                </div>

                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-amber-100">
                  <h4 className="text-lg font-medium text-amber-800 mb-4 flex items-center">
                    {skills[activeSkill].icon}
                    <span className="ml-2">{skills[activeSkill].name}</span>
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {skills[activeSkill].items.map((item, i) => (
                      <div key={i} className="flex items-center">
                        <ChevronRight className="w-4 h-4 text-amber-500 mr-2" />
                        <span className="text-amber-900/80">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Réseaux sociaux */}
              <div>
                <p className="text-sm font-medium text-amber-800 mb-3">Réseaux sociaux</p>
                <div className="flex gap-3">
                  <a
                    href="https://facebook.com/nawfal.addaoui"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-amber-900 text-white rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook size={18} />
                  </a>
                  <a
                    href="https://instagram.com/nawfal.addaoui"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-amber-900 text-white rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram size={18} />
                  </a>
                  <a
                    href="https://linkedin.com/in/nawfal-addaoui"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-amber-900 text-white rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={18} />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Image du développeur */}
            <motion.div
              variants={itemVariants}
              className="order-1 lg:order-2 flex justify-center lg:justify-end relative"
            >
              <div className="relative">
                {/* Cercle de fond */}
                <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full bg-amber-900 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>

                {/* Image du développeur */}
                <img
                  src={dev || "/placeholder.svg"}
                  alt="Nawfal ADDAOUI - Développeur Web Full Stack"
                  className="w-[280px] md:w-[380px] relative z-10"
                />  

                {/* Badge d'expérience */}
                <div className="absolute top-0 left-0 md:-left-6 bg-white rounded-full p-3 shadow-lg z-20 flex items-center justify-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-dashed border-amber-500 flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-amber-900 font-bold text-xl md:text-2xl">2+</p>
                      <p className="text-amber-700 text-xs">ans d'exp.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        
      </div>
    </section>
  )
}

export default AboutDev
