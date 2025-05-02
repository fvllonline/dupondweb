"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Send, Check, AlertCircle, Coffee, Code, Mail, Phone, MapPin } from "lucide-react"
import logorond from "../assets/logorond.png"

const ContactDev = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    projectType: "website",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState(null)
  const [isInView, setIsInView] = useState(false)
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

  const handleChange = (e) => {
    const { id, value } = e.target
    setFormState((prev) => ({ ...prev, [id]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    // Simuler un envoi de formulaire
    setTimeout(() => {
      console.log("Formulaire soumis:", formState)
      setIsSubmitting(false)
      setIsSubmitted(true)

      // Réinitialiser le formulaire après quelques secondes
      setTimeout(() => {
        setIsSubmitted(false)
        setFormState({
          name: "",
          email: "",
          subject: "",
          message: "",
          projectType: "website",
        })
      }, 5000)
    }, 1500)
  }

  // Types de projets
  const projectTypes = [
    { id: "website", label: "Site Web", icon: <Globe className="w-4 h-4" /> },
    { id: "webapp", label: "Application Web", icon: <Code className="w-4 h-4" /> },
    { id: "ecommerce", label: "E-commerce", icon: <ShoppingCart className="w-4 h-4" /> },
    { id: "other", label: "Autre", icon: <Coffee className="w-4 h-4" /> },
  ]

  // Animation pour les éléments
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
      id="contact-dev"
      className="py-24 relative overflow-hidden bg-gradient-to-b from-white to-amber-50"
    >
      {/* Motif de fond subtil */}
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMTAiIGN5PSIxMCIgcj0iMiIgZmlsbD0iIzdCM0YwMCIvPjwvc3ZnPg==')] bg-repeat"></div>

      {/* Éléments décoratifs */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-amber-50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-amber-50 to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          {/* En-tête */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="inline-block rounded-full bg-amber-100 px-4 py-1.5 mb-6 border border-amber-200/50">
              <p className="text-amber-800 font-medium text-sm tracking-wider">CONTACTEZ-MOI</p>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-amber-900 mb-6">
              Discutons de Votre{" "}
              <span
                className="font-serif italic relative inline-block"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                <span className="relative z-10">Projet</span>
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-amber-300/50 rounded-full transform -rotate-1"></span>
              </span>
            </h2>

            <p className="text-amber-800/80 max-w-2xl mx-auto text-lg">
              Vous avez un projet en tête ou une question ? N'hésitez pas à me contacter pour en discuter.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Informations de contact */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <div className="backdrop-blur-md p-8 rounded-2xl border border-amber-200/20 shadow-xl bg-gradient-to-br from-white to-amber-50/70 h-full">
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-amber-400 flex items-center justify-center shadow-lg mr-4">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif italic font-bold text-amber-800">Nawfal ADDAOUI</h3>
                    <p className="text-amber-700/80 text-sm">Développeur Web Full Stack</p>
                  </div>
                </div>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center group-hover:bg-amber-200 transition-colors">
                      <MapPin className="w-5 h-5 text-amber-700" />
                    </div>
                    <div>
                      <h4 className="text-amber-900 font-medium mb-1">Adresse</h4>
                      <p className="text-amber-800/70">Casablanca, Maroc</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center group-hover:bg-amber-200 transition-colors">
                      <Mail className="w-5 h-5 text-amber-700" />
                    </div>
                    <div>
                      <h4 className="text-amber-900 font-medium mb-1">Email</h4>
                      <a
                        href="mailto:naoufaladdaoui@gmail.com"
                        className="text-amber-800/70 hover:text-amber-600 transition-colors"
                      >
                        naoufaladdaoui@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center group-hover:bg-amber-200 transition-colors">
                      <Phone className="w-5 h-5 text-amber-700" />
                    </div>
                    <div>
                      <h4 className="text-amber-900 font-medium mb-1">Téléphone</h4>
                      <a href="tel:+212600000000" className="text-amber-800/70 hover:text-amber-600 transition-colors">
                        +212 631-108355
                      </a>
                    </div>
                  </div>
                </div>

                {/* Logo */}
                <div className="flex justify-center mt-12">
                  <div className="w-24 h-24 relative">
                    <img
                      src={logorond || "/placeholder.svg"}
                      alt="Logo Café Dupond"
                      className="w-full h-full object-contain animate-pulse"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Formulaire de contact */}
            <motion.div variants={itemVariants} className="lg:col-span-3">
              <div className="backdrop-blur-md p-8 rounded-2xl border border-amber-200/20 shadow-xl bg-gradient-to-br from-white to-amber-50/70 relative overflow-hidden">
                {/* Message de confirmation */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-amber-700/90 to-amber-600/90 backdrop-blur-md flex flex-col items-center justify-center p-8 transform transition-transform duration-500 ${
                    isSubmitted ? "translate-y-0" : "translate-y-full"
                  }`}
                >
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-6">
                    <Check className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message Envoyé !</h3>
                  <p className="text-white/90 text-center mb-6">
                    Merci pour votre message. Je vous répondrai dans les plus brefs délais.
                  </p>
                  <div className="w-full max-w-xs h-1 bg-white/20 rounded-full overflow-hidden">
                    <div className="h-full bg-white animate-progress-bar"></div>
                  </div>
                </div>

                {/* Message d'erreur */}
                {error && (
                  <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 rounded-md">
                    <div className="flex items-center">
                      <AlertCircle className="w-5 h-5 text-red-500 mr-2" />
                      <p className="text-red-700">{error}</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Type de projet */}
                  <div>
                    <label className="block text-amber-900 font-medium mb-2">Type de projet</label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {projectTypes.map((type) => (
                        <label
                          key={type.id}
                          className={`flex items-center justify-center gap-2 p-3 rounded-lg border cursor-pointer transition-all ${
                            formState.projectType === type.id
                              ? "bg-amber-700 text-white border-amber-700"
                              : "bg-white text-amber-800 border-amber-200 hover:border-amber-400"
                          }`}
                        >
                          <input
                            type="radio"
                            name="projectType"
                            value={type.id}
                            checked={formState.projectType === type.id}
                            onChange={() => setFormState({ ...formState, projectType: type.id })}
                            className="sr-only"
                          />
                          <span className={formState.projectType === type.id ? "text-white" : "text-amber-500"}>
                            {type.icon}
                          </span>
                          <span>{type.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Nom */}
                    <div className="group">
                      <label htmlFor="name" className="block text-amber-900 font-medium mb-2">
                        Nom complet
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="name"
                          value={formState.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all duration-300 text-amber-900 placeholder-amber-400/50"
                          placeholder="Votre nom"
                          required
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="group">
                      <label htmlFor="email" className="block text-amber-900 font-medium mb-2">
                        Email
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          id="email"
                          value={formState.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all duration-300 text-amber-900 placeholder-amber-400/50"
                          placeholder="Votre email"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Sujet */}
                  <div className="group">
                    <label htmlFor="subject" className="block text-amber-900 font-medium mb-2">
                      Sujet
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="subject"
                        value={formState.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all duration-300 text-amber-900 placeholder-amber-400/50"
                        placeholder="Sujet de votre message"
                        required
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="group">
                    <label htmlFor="message" className="block text-amber-900 font-medium mb-2">
                      Message
                    </label>
                    <div className="relative">
                      <textarea
                        id="message"
                        value={formState.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full px-4 py-3 bg-white border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all duration-300 text-amber-900 placeholder-amber-400/50 resize-none"
                        placeholder="Votre message..."
                        required
                      ></textarea>
                    </div>
                  </div>

                  {/* Bouton d'envoi */}
                  <div className="flex justify-center pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative overflow-hidden bg-gradient-to-r from-amber-700 to-amber-600 text-white px-8 py-3.5 rounded-lg transition-all duration-300 font-medium shadow-lg hover:shadow-amber-500/30 disabled:opacity-70 disabled:cursor-not-allowed transform hover:-translate-y-1"
                    >
                      <span className="relative z-10 flex items-center">
                        {isSubmitting ? (
                          <>
                            <svg
                              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            ENVOI EN COURS...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5 mr-2 transition-transform group-hover:translate-x-1" />
                            ENVOYER LE MESSAGE
                          </>
                        )}
                      </span>
                      <span className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Composant d'icône manquant
const Globe = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="2" y1="12" x2="22" y2="12"></line>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
    </svg>
  )
}

// Composant d'icône manquant
const ShoppingCart = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="9" cy="21" r="1"></circle>
      <circle cx="20" cy="21" r="1"></circle>
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
    </svg>
  )
}

export default ContactDev
