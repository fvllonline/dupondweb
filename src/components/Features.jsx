"use client"

import { useState } from "react"
import { Coffee, Award, ShoppingBag, Cpu } from "lucide-react"
import feat1 from "../assets/feat1.jpg"
import feat2 from "../assets/feat2.jpg"
import feat3 from "../assets/feat3.jpg"
import feat4 from "../assets/feat4.jpg"

const Features = () => {
  const [hoveredCard, setHoveredCard] = useState(null)

  const features = [
    {
      title: "Café de Haute Qualité",
      description:
        "Nos grains sont soigneusement sélectionnés et torréfiés pour offrir une expérience gustative exceptionnelle.",
      icon: <Coffee className="w-6 h-6" />,
      imagePath: feat1,
    },
    {
      title: "Baristas Experts",
      description: "Notre équipe de baristas passionnés maîtrise l'art de la préparation du café à la perfection.",
      icon: <Award className="w-6 h-6" />,
      imagePath: feat2,
    },
    {
      title: "Boutique en Ligne",
      description: "Retrouvez nos cafés préférés et accessoires directement sur notre boutique en ligne.",
      icon: <ShoppingBag className="w-6 h-6" />,
      imagePath: feat3,
    },
    {
      title: "Machines à Café",
      description:
        "Nous utilisons uniquement des équipements de qualité professionnelle pour extraire le meilleur de chaque grain.",
      icon: <Cpu className="w-6 h-6" />,
      imagePath: feat4,
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-amber-50 to-amber-100/70 relative overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent z-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent z-10"></div>

      {/* Motif de grain de café subtil */}
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMTAiIGN5PSIxMCIgcj0iMiIgZmlsbD0iIzdCM0YwMCIvPjwvc3ZnPg==')] bg-repeat"></div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="text-center mb-16">
          <div className="inline-block rounded-full bg-amber-100 px-4 py-1.5 mb-4 border border-amber-200/50 transform hover:scale-105 transition-transform duration-300">
            <p className="text-amber-800 font-medium text-sm tracking-wider">NOS ATOUTS</p>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-amber-900 mb-6">
            Ce Que Nous Vous{" "}
            <span
              className="font-serif italic relative inline-block"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              <span className="relative z-10">Proposons</span>
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-amber-300/50 rounded-full transform -rotate-1"></span>
            </span>
          </h2>
          <p className="text-amber-800/80 max-w-2xl mx-auto text-lg">
            Découvrez ce qui rend le Café Dupond si spécial. Notre engagement envers la qualité et le service se reflète
            dans chaque aspect de notre établissement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Image de fond avec overlay */}
              <div className="absolute inset-0 opacity-40 group-hover:opacity-90 transition-opacity duration-700">
                <img
                  src={feature.imagePath || "/placeholder.svg"}
                  alt={feature.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/80 via-amber-800/60 to-amber-700/40"></div>
              </div>

              <div className="p-8 relative z-10 h-full flex flex-col">
                {/* Icône avec cercle décoratif */}
                <div className="relative mb-6 mx-auto">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-100 to-amber-50 flex items-center justify-center shadow-md group-hover:shadow-amber-300/30 transition-all duration-500">
                    <div className="w-16 h-16 rounded-full border border-amber-200 flex items-center justify-center bg-white group-hover:bg-amber-50 transition-colors duration-500">
                      <div className="text-amber-700 group-hover:text-amber-800 transform group-hover:scale-110 transition-all duration-500">
                        {feature.icon}
                      </div>
                    </div>
                  </div>
                  {/* Cercle décoratif */}
                  <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-amber-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                </div>

                {/* Titre avec ligne décorative */}
                <div className="relative mb-4 text-center">
                  <h3 className="text-xl font-serif italic text-amber-700 group-hover:text-white transition-colors duration-500">
                    {feature.title}
                  </h3>
                  <div className="h-0.5 w-12 bg-amber-300 mx-auto mt-3 transform origin-center scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                </div>

                {/* Description */}
                <p className="text-amber-800/70 group-hover:text-white/90 text-center mb-6 transition-colors duration-500">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
