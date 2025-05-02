"use client"

import { useState } from "react"
import { Calendar, Clock, Users, ChevronDown, Send, MapPin, Phone, Mail, Check } from "lucide-react"
import contactbg from "../assets/contactbg.jpg"

const ContactForm = () => {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { id, value } = e.target
    setFormState((prev) => ({ ...prev, [id]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simuler un envoi de formulaire
    setTimeout(() => {
      console.log("Formulaire soumis:", formState)
      setIsSubmitting(false)
      setIsSubmitted(true)

      // Réinitialiser le formulaire après quelques secondes
      setTimeout(() => {
        setIsSubmitted(false)
        setFormState({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          date: "",
          time: "",
          guests: "2",
          message: "",
        })
      }, 5000)
    }, 1500)
  }

  return (
    <section className="py-24 relative overflow-hidden" id="contact">
      {/* Background Image with Enhanced Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${contactbg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed", // Effet de parallaxe simple
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
        <div className="max-w-6xl mx-auto">
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
                className="font-serif italic text-amber-200 relative inline-block"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  textShadow: "0 2px 10px rgba(0,0,0,0.2)",
                }}
              >
                <span className="relative z-10">Table</span>
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-amber-500/30 rounded-full transform -rotate-1"></span>
              </span>
            </h2>

            {/* Texte avec bordure subtile comme dans HeroSection */}
            <div className="border-l-4 border-amber-200/70 pl-6 mb-10 max-w-2xl mx-auto text-left">
              <p className="text-white text-lg leading-relaxed">
                Assurez-vous d'avoir la meilleure place pour déguster nos cafés d'exception et profiter pleinement de
                l'expérience Café Dupond.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Informations de contact */}
            <div className="lg:col-span-2">
              <div className="backdrop-blur-md p-8 rounded-2xl border border-white/20 shadow-2xl bg-gradient-to-br from-white/10 to-white/5 h-full">
                <h3 className="text-2xl font-serif italic text-amber-200 mb-6">Nous Contacter</h3>

                <div className="space-y-8">
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-amber-700/30 transition-colors">
                      <MapPin className="w-5 h-5 text-amber-200" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-2">Adresse</h4>
                      <p className="text-white/80">Marina Mall, Casablanca</p>
                      <p className="text-white/80">Maarif Urban Square Bd d'Anfa</p>
                      <p className="text-white/80">Casablanca, Maroc</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-amber-700/30 transition-colors">
                      <Phone className="w-5 h-5 text-amber-200" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-2">Téléphone</h4>
                      <p className="text-white/80">+212 522 00 00 00</p>
                      <p className="text-white/80">+212 661 00 00 00</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-amber-700/30 transition-colors">
                      <Mail className="w-5 h-5 text-amber-200" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-2">Email</h4>
                      <p className="text-white/80">contact@cafedupond.com</p>
                      <p className="text-white/80">reservation@cafedupond.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-amber-700/30 transition-colors">
                      <Clock className="w-5 h-5 text-amber-200" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-2">Horaires</h4>
                      <p className="text-white/80">Lun - Ven: 7h30 - 22h00</p>
                      <p className="text-white/80">Sam - Dim: 8h00 - 00h00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Card avec style amélioré */}
            <div className="lg:col-span-3">
              <div className="backdrop-blur-md p-8 md:p-10 rounded-2xl border border-white/20 shadow-2xl bg-gradient-to-br from-white/10 to-white/5 relative overflow-hidden">
                {/* Message de confirmation */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-amber-700/90 to-amber-600/90 backdrop-blur-md flex flex-col items-center justify-center p-8 transform transition-transform duration-500 ${isSubmitted ? "translate-y-0" : "translate-y-full"}`}
                >
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-6">
                    <Check className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Réservation Envoyée !</h3>
                  <p className="text-white/90 text-center mb-6">
                    Merci pour votre réservation. Nous vous contacterons rapidement pour confirmer votre table.
                  </p>
                  <div className="w-full max-w-xs h-1 bg-white/20 rounded-full overflow-hidden">
                    <div className="h-full bg-white animate-progress-bar"></div>
                  </div>
                </div>

                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                          required
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
                          required
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-focus-within:opacity-100 rounded-lg pointer-events-none transition-opacity duration-300"></div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                          required
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
                          required
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-focus-within:opacity-100 rounded-lg pointer-events-none transition-opacity duration-300"></div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group">
                      <label htmlFor="date" className=" text-white font-medium mb-2 flex items-center">
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
                          required
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
                          required
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
                        required
                      >
                        <option value="1" className="bg-amber-900 text-white">
                          1 personne
                        </option>
                        <option value="2" className="bg-amber-900 text-white">
                          2 personnes
                        </option>
                        <option value="3" className="bg-amber-900 text-white">
                          3 personnes
                        </option>
                        <option value="4" className="bg-amber-900 text-white">
                          4 personnes
                        </option>
                        <option value="5" className="bg-amber-900 text-white">
                          5 personnes
                        </option>
                        <option value="6" className="bg-amber-900 text-white">
                          6 personnes ou plus
                        </option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <ChevronDown className="h-5 w-5 text-amber-200" />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-focus-within:opacity-100 rounded-lg pointer-events-none transition-opacity duration-300"></div>
                    </div>
                  </div>

                  <div className="group">
                    <label htmlFor="message" className="block text-white font-medium mb-2">
                      Message (optionnel)
                    </label>
                    <div className="relative">
                      <textarea
                        id="message"
                        value={formState.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-3.5 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-200/50 focus:border-amber-200/50 transition-all duration-300 text-white placeholder-white/50 resize-none"
                        placeholder="Précisez vos demandes particulières..."
                      ></textarea>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-focus-within:opacity-100 rounded-lg pointer-events-none transition-opacity duration-300"></div>
                    </div>
                  </div>

                  {/* Bouton avec effet comme dans HeroSection */}
                  <div className="flex justify-center pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative overflow-hidden bg-gradient-to-r from-amber-700 to-amber-600 text-white px-8 py-3.5 rounded-lg transition-all duration-300 font-medium shadow-lg hover:shadow-amber-900/30 hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed transform hover:-translate-y-1"
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
                            TRAITEMENT EN COURS...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5 mr-2 transition-transform group-hover:translate-x-1" />
                            RÉSERVER MAINTENANT
                          </>
                        )}
                      </span>
                      <span className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
