import { useState } from "react"
import { ChevronDown, ChevronUp, Coffee } from "lucide-react"

const Menu = () => {
  const coffees = [
    { 
      name: "Café Latte", 
      description: "Espresso et lait mousseux", 
      price: "4.50",
      imagePath: "/coffee-placeholder.jpg" 
    },
    { 
      name: "Café Américano", 
      description: "Espresso allongé à l'eau chaude", 
      price: "3.80",
      imagePath: "/coffee-placeholder.jpg" 
    },
    { 
      name: "Macchiato", 
      description: "Espresso tâché d'une touche de lait", 
      price: "4.00",
      imagePath: "/coffee-placeholder.jpg" 
    },
    { 
      name: "Café Mocha", 
      description: "Espresso, chocolat et lait mousseux", 
      price: "5.20",
      imagePath: "/coffee-placeholder.jpg" 
    },
    { 
      name: "Cappuccino", 
      description: "Espresso, lait chaud et mousse de lait", 
      price: "4.50",
      imagePath: "/coffee-placeholder.jpg" 
    },
    { 
      name: "Café Glacé", 
      description: "Espresso, lait froid et glaçons", 
      price: "4.80",
      imagePath: "/coffee-placeholder.jpg" 
    },
    { 
      name: "Chocolat Mocha", 
      description: "Chocolat chaud avec une touche d'espresso", 
      price: "5.50",
      imagePath: "/coffee-placeholder.jpg" 
    },
    { 
      name: "Latte Vanille", 
      description: "Café latte aromatisé à la vanille", 
      price: "5.00", 
      isNew: true,
      imagePath: "/coffee-placeholder.jpg" 
    },
    { 
      name: "Latte Glacé", 
      description: "Latte servi avec des glaçons", 
      price: "4.80",
      imagePath: "/coffee-placeholder.jpg" 
    },
    { 
      name: "Espresso", 
      description: "L'essence pure du café", 
      price: "2.80",
      imagePath: "/coffee-placeholder.jpg" 
    },
    { 
      name: "Latte Caramel", 
      description: "Café latte avec sirop de caramel", 
      price: "5.00", 
      isNew: true,
      imagePath: "/coffee-placeholder.jpg" 
    },
    { 
      name: "Cortado", 
      description: "Espresso équilibré avec du lait", 
      price: "3.90",
      imagePath: "/coffee-placeholder.jpg" 
    },
  ]

  const [showAll, setShowAll] = useState(false)
  const [hoveredCard, setHoveredCard] = useState(null)
  const displayedCoffees = showAll ? coffees : coffees.slice(0, 8)

  return (
    <section className="py-24 bg-gradient-to-b from-amber-50 to-amber-100/70 relative overflow-hidden" id="menu">
      {/* Éléments décoratifs */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>

      {/* Motif de grain de café subtil */}
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMTAiIGN5PSIxMCIgcj0iMiIgZmlsbD0iIzdCM0YwMCIvPjwvc3ZnPg==')] bg-repeat"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block rounded-full bg-amber-100 px-4 py-1.5 mb-4 border border-amber-200/50">
            <p className="text-amber-800 font-medium text-sm tracking-wider">NOTRE CARTE</p>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-amber-900 mb-6">
            Découvrez Nos{" "}
            <span className="font-serif italic" style={{ fontFamily: "'Playfair Display', serif" }}>
              Cafés Signature
            </span>
          </h2>
          <p className="text-amber-800/80 max-w-2xl mx-auto text-lg">
            Dégustez notre sélection de cafés artisanaux, préparés avec passion par nos baristas experts
            pour une expérience gustative incomparable.
          </p>
        </div>

        {/* Cartes produits */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-500">
          {displayedCoffees.map((coffee, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Badge NOUVEAU */}
              {coffee.isNew && (
                <div className="absolute top-4 left-4 z-20">
                  <div className="bg-gradient-to-r from-amber-600 to-amber-500 text-white text-xs px-3 py-1 rounded-full font-medium shadow-sm">
                    NOUVEAU
                  </div>
                </div>
              )}

              {/* Image avec overlay */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <div className="absolute inset-0 bg-amber-900/10 group-hover:bg-amber-900/0 transition-all duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/30 to-transparent opacity-70"></div>
                <div className="h-full w-full bg-amber-100 flex items-center justify-center">
                  <Coffee className="w-12 h-12 text-amber-700/40" />
                </div>
              </div>

              <div className="p-6 relative">
                {/* Prix avec style distinctif */}
                <div className="absolute -top-5 right-6 bg-white rounded-full h-10 w-10 shadow-md flex items-center justify-center border border-amber-100">
                  <span className="text-amber-800 font-bold text-sm">{coffee.price}€</span>
                </div>

                {/* Contenu */}
                <div>
                  <h3 className="text-xl font-serif italic text-amber-700 mb-2">{coffee.name}</h3>
                  <div className="h-0.5 w-12 bg-amber-300 mb-3 transform origin-left scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                  <p className="text-amber-800/70 text-sm">{coffee.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bouton Voir Plus/Moins */}
        <div className="flex justify-center mt-12">
          <button
            onClick={() => setShowAll(!showAll)}
            className="group relative overflow-hidden px-8 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-amber-100 to-amber-50 border border-amber-200"></div>
            <div className="relative flex items-center space-x-2 text-amber-800 font-medium z-10">
              <span>{showAll ? "Voir moins" : "Voir tous nos cafés"}</span>
              <div className="bg-white rounded-full p-1 group-hover:bg-amber-50 transition-colors duration-200">
                {showAll ? (
                  <ChevronUp className="w-4 h-4 transform group-hover:-translate-y-0.5 transition-transform duration-200" />
                ) : (
                  <ChevronDown className="w-4 h-4 transform group-hover:translate-y-0.5 transition-transform duration-200" />
                )}
              </div>
            </div>
          </button>
        </div>

        {/* Section décorative avec CTA */}
        {showAll && (
          <div className="mt-20 relative">
            <div className="absolute inset-0 bg-amber-900/5 rounded-3xl"></div>
            
            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden border border-amber-100">
              <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-amber-50/50 to-transparent"></div>
              
              <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
                <div className="flex flex-col justify-center">
                  <h3 className="text-2xl md:text-3xl font-bold text-amber-900 mb-4">
                    Une Expérience{" "}
                    <span className="font-serif italic" style={{ fontFamily: "'Playfair Display', serif" }}>
                      Unique
                    </span>
                  </h3>
                  <p className="text-amber-800/80 mb-6">
                    Découvrez notre collection complète de cafés et venez vivre une expérience gustative exceptionnelle dans notre établissement.
                  </p>
                  <div className="flex space-x-4">
                    <a
                      href="https://www.instagram.com/dupondcafe/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative overflow-hidden bg-gradient-to-r text-white from-amber-700 to-amber-600  px-6 py-3 rounded-lg transition-all duration-300 font-medium shadow-lg hover:shadow-amber-900/30"
                    >
                      <span className="relative z-10">NOUS SUIVRE</span>
                      <span className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                    </a>
                  </div>
                </div>
                
                <div className="relative aspect-square md:aspect-auto rounded-xl overflow-hidden bg-amber-100 flex items-center justify-center">
                  <div className="text-amber-700/40 flex flex-col items-center">
                    <Coffee className="w-16 h-16 mb-2" />
                    <span className="font-medium">Image du café</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Menu