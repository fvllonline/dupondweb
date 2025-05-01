import { useState } from "react"
import contactbg from "../assets/contactbg.jpg"

const ContactForm = () => {
  return (
    <section className="py-24 relative" id="contact">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${contactbg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-amber-900/40 backdrop-blur-sm"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-block rounded-full bg-amber-100 px-4 py-1.5 mb-4 border border-amber-200/50">
              <p className="text-amber-800 font-medium text-sm tracking-wider">RÉSERVATION</p>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Réservez Votre{" "}
              <span className="font-serif italic" style={{ fontFamily: "'Playfair Display', serif" }}>
                Table
              </span>
            </h2>
            <p className="text-amber-50/90 max-w-2xl mx-auto text-lg">
              Assurez-vous d'avoir la meilleure place pour déguster nos cafés d'exception
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-amber-100">
            <div className="p-8 md:p-12">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-amber-800 font-medium mb-2">
                      Prénom
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-3 bg-white border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-shadow duration-200"
                      placeholder="Votre prénom"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-amber-800 font-medium mb-2">
                      Nom
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-3 bg-white border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-shadow duration-200"
                      placeholder="Votre nom"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-amber-800 font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 bg-white border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-shadow duration-200"
                      placeholder="Votre email"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-amber-800 font-medium mb-2">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 bg-white border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-shadow duration-200"
                      placeholder="Votre numéro"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="date" className="block text-amber-800 font-medium mb-2">
                      Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      className="w-full px-4 py-3 bg-white border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-shadow duration-200"
                    />
                  </div>
                  <div>
                    <label htmlFor="time" className="block text-amber-800 font-medium mb-2">
                      Heure
                    </label>
                    <input
                      type="time"
                      id="time"
                      className="w-full px-4 py-3 bg-white border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-shadow duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="guests" className="block text-amber-800 font-medium mb-2">
                    Nombre de personnes
                  </label>
                  <select
                    id="guests"
                    className="w-full px-4 py-3 bg-white border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-shadow duration-200"
                  >
                    <option value="1">1 personne</option>
                    <option value="2">2 personnes</option>
                    <option value="3">3 personnes</option>
                    <option value="4">4 personnes</option>
                    <option value="5">5 personnes</option>
                    <option value="6">6 personnes ou plus</option>
                  </select>
                </div>

                <div className="text-center pt-6">
                  <button
                    type="submit"
                    className="group relative overflow-hidden bg-gradient-to-r from-amber-700 to-amber-600 text-white px-8 py-3.5 rounded-lg transition-all duration-300 font-medium shadow-lg hover:shadow-amber-900/30"
                  >
                    <span className="relative z-10">RÉSERVER MAINTENANT</span>
                    <span className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm