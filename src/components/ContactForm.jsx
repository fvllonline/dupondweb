"use client"

import { useState } from "react"
import { Calendar, Clock, Users, ChevronDown, Coffee, Send } from 'lucide-react'
import contactbg from "../assets/contactbg.jpg"

const ContactForm = () => {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "2"
  })

  const handleChange = (e) => {
    const { id, value } = e.target
    setFormState(prev => ({ ...prev, [id]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Logique de soumission du formulaire
    console.log("Formulaire soumis:", formState)
  }

  return (
    <section className="py-24 relative overflow-hidden" id="contact">
      {/* Background Image with Enhanced Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${contactbg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed', // Effet de parallaxe simple
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-amber-900/70 via-amber-800/60 to-amber-900/80"></div>
        <div className="absolute inset-0 bg-black/30 mix-blend-multiply"></div>
        
        {/* Motif de grain de café subtil comme dans HeroSection */}
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMTAiIGN5PSIxMCIgcj0iMiIgZmlsbD0id2hpdGUiLz48L3N2Zz4=')] bg-repeat"></div>
      </div>

      {/* Éléments décoratifs - Particules comme dans HeroSection */}
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

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header Section avec style harmonisé */}
          <div className="text-center mb-16">
            {/* En-tête avec ligne décorative comme dans HeroSection et AboutUs */}
            <div className="flex items-center justify-center mb-6">
              <div className="h-[2px] w-12 bg-white mr-3"></div>
              <p className="text-white font-medium text-sm uppercase tracking-[0.2em]">RÉSERVATION</p>
              <div className="h-[2px] w-12 bg-white ml-3"></div>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
              Réservez Votre{" "}
              <span 
                className="font-serif italic text-amber-200 mt-2 block"
                style={{ 
                  fontFamily: "'Playfair Display', serif",
                  textShadow: "0 2px 10px rgba(0,0,0,0.2)" }}>Table</span>
            </h2>
            
            {/* Texte avec bordure subtile comme dans HeroSection */}
            <div className="border-l-4 border-amber-200/70 pl-6 mb-10 max-w-2xl mx-auto text-left">
              <p className="text-white text-lg leading-relaxed">
                Assurez-vous d'avoir la meilleure place pour déguster nos cafés d'exception et profiter pleinement de l'expérience Café Dupond.
              </p>
            </div>
          </div>

          {/* Form Card avec style amélioré */}
          <div className="backdrop-blur-md p-8 md:p-12 rounded-2xl border border-white/20 shadow-2xl bg-gradient-to-br from-white/10 to-white/5">
            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="group">
                  <label htmlFor="firstName" className="block text-white font-medium mb-2">
                    Prénom
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="firstName"
                      value={formState.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-200/50 focus:border-amber-200/50 transition-all duration-300 text-white placeholder-white/50"
                      placeholder="Votre prénom"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-focus-within:opacity-100 rounded-lg pointer-events-none transition-opacity duration-300"></div>
                  </div>
                </div>
                
                <div className="group">
                  <label htmlFor="lastName" className="block text-white font-medium mb-2">
                    Nom
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="lastName"
                      value={formState.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-200/50 focus:border-amber-200/50 transition-all duration-300 text-white placeholder-white/50"
                      placeholder="Votre nom"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-focus-within:opacity-100 rounded-lg pointer-events-none transition-opacity duration-300"></div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="group">
                  <label htmlFor="email" className="block text-white font-medium mb-2">
                    Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-200/50 focus:border-amber-200/50 transition-all duration-300 text-white placeholder-white/50"
                      placeholder="Votre email"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-focus-within:opacity-100 rounded-lg pointer-events-none transition-opacity duration-300"></div>
                  </div>
                </div>
                
                <div className="group">
                  <label htmlFor="phone" className="block text-white font-medium mb-2">
                    Téléphone
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      id="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-200/50 focus:border-amber-200/50 transition-all duration-300 text-white placeholder-white/50"
                      placeholder="Votre numéro"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-focus-within:opacity-100 rounded-lg pointer-events-none transition-opacity duration-300"></div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="group">
                  <label htmlFor="date" className="block text-white font-medium mb-2 items-center">
                    <Calendar className="w-4 h-4 mr-2 text-amber-200" />
                    Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      id="date"
                      value={formState.date}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-200/50 focus:border-amber-200/50 transition-all duration-300 text-white placeholder-white/50"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-focus-within:opacity-100 rounded-lg pointer-events-none transition-opacity duration-300"></div>
                  </div>
                </div>
                
                <div className="group">
                  <label htmlFor="time" className=" text-white font-medium mb-2 flex items-center">
                    <Clock className="w-4 h-4 mr-2 text-amber-200" />
                    Heure
                  </label>
                  <div className="relative">
                    <input
                      type="time"
                      id="time"
                      value={formState.time}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-200/50 focus:border-amber-200/50 transition-all duration-300 text-white placeholder-white/50"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-focus-within:opacity-100 rounded-lg pointer-events-none transition-opacity duration-300"></div>
                  </div>
                </div>
              </div>

              <div className="group">
                <label htmlFor="guests" className=" text-white font-medium mb-2 flex items-center">
                  <Users className="w-4 h-4 mr-2 text-amber-200" />
                  Nombre de personnes
                </label>
                <div className="relative">
                  <select
                    id="guests"
                    value={formState.guests}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-200/50 focus:border-amber-200/50 transition-all duration-300 text-white appearance-none"
                  >
                    <option value="1" className="bg-amber-900 text-white">1 personne</option>
                    <option value="2" className="bg-amber-900 text-white">2 personnes</option>
                    <option value="3" className="bg-amber-900 text-white">3 personnes</option>
                    <option value="4" className="bg-amber-900 text-white">4 personnes</option>
                    <option value="5" className="bg-amber-900 text-white">5 personnes</option>
                    <option value="6" className="bg-amber-900 text-white">6 personnes ou plus</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <ChevronDown className="h-5 w-5 text-amber-200" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-focus-within:opacity-100 rounded-lg pointer-events-none transition-opacity duration-300"></div>
                </div>
              </div>

              {/* Bouton avec effet comme dans HeroSection */}
              <div className="flex justify-center pt-6">
                <button
                  type="submit"
                  className="group relative overflow-hidden bg-gradient-to-r from-amber-700 to-amber-600 text-white px-8 py-3.5 rounded-lg transition-all duration-300 font-medium shadow-lg hover:shadow-amber-900/30 hover:shadow-xl"
                >
                  <span className="relative z-10 flex items-center">
                    <Send className="w-5 h-5 mr-2 transition-transform group-hover:translate-x-1" />
                    RÉSERVER MAINTENANT
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}

export default ContactForm