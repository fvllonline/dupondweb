"use client"

import { useState, useEffect } from "react"
import { ChevronDown, ChevronUp, Coffee, Search, X } from "lucide-react"
import menu1 from "../assets/menu1.jpg"
import menu2 from "../assets/menu2.jpg"
import menu3 from "../assets/menu3.jpg"
import menu4 from "../assets/menu4.jpg"
import menu5 from "../assets/menu5.jpg"
import menu6 from "../assets/menu6.jpg"
import menu7 from "../assets/menu7.jpg"
import menu8 from "../assets/menu8.jpg"
import menu9 from "../assets/menu9.jpg"
import menu10 from "../assets/menu10.jpg"
import menu11 from "../assets/menu11.jpg"
import menu12 from "../assets/menu12.jpg"
import logorond from "../assets/logorond.png"

const Menu = () => {
  const coffees = [
    { name: "Café Latte", description: "Espresso et lait mousseux", price: "4.50", image: menu1, category: "chaud" },
    {
      name: "Café Américano",
      description: "Espresso allongé à l'eau chaude",
      price: "3.80",
      image: menu2,
      category: "chaud",
    },
    {
      name: "Macchiato",
      description: "Espresso tâché d'une touche de lait",
      price: "4.00",
      image: menu3,
      category: "chaud",
    },
    {
      name: "Café Mocha",
      description: "Espresso, chocolat et lait mousseux",
      price: "5.20",
      image: menu4,
      category: "chaud",
    },
    {
      name: "Cappuccino",
      description: "Espresso, lait chaud et mousse de lait",
      price: "4.50",
      image: menu5,
      category: "chaud",
    },
    {
      name: "Café Glacé",
      description: "Espresso, lait froid et glaçons",
      price: "4.80",
      image: menu6,
      category: "froid",
    },
    {
      name: "Chocolat Mocha",
      description: "Chocolat chaud avec une touche d'espresso",
      price: "5.50",
      image: menu7,
      category: "chaud",
    },
    {
      name: "Latte Vanille",
      description: "Café latte aromatisé à la vanille",
      price: "5.00",
      isNew: true,
      image: menu8,
      category: "chaud",
    },
    {
      name: "Frappuccino",
      description: "Latte servi avec des glaçons",
      price: "4.80",
      image: menu9,
      category: "froid",
    },
    { name: "Espresso", description: "L'essence pure du café", price: "2.80", image: menu10, category: "chaud" },
    {
      name: "Caramel Latte",
      description: "Café latte avec sirop de caramel",
      price: "5.00",
      isNew: true,
      image: menu11,
      category: "chaud",
    },
    {
      name: "Flat White",
      description: "Espresso équilibré avec du lait",
      price: "3.90",
      image: menu12,
      category: "chaud",
    },
  ]

  const [showAll, setShowAll] = useState(false)
  const [hoveredCard, setHoveredCard] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [activeFilter, setActiveFilter] = useState("tous")
  const [filteredCoffees, setFilteredCoffees] = useState(coffees)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  // Filtrer les cafés en fonction de la recherche et du filtre
  useEffect(() => {
    let result = coffees

    // Appliquer le filtre de catégorie
    if (activeFilter !== "tous") {
      result = result.filter((coffee) => coffee.category === activeFilter)
    }

    // Appliquer la recherche
    if (searchTerm) {
      result = result.filter(
        (coffee) =>
          coffee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          coffee.description.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    setFilteredCoffees(result)
  }, [searchTerm, activeFilter])

  const displayedCoffees = showAll ? filteredCoffees : filteredCoffees.slice(0, 8)

  return (
    <section className="py-24 bg-gradient-to-b from-amber-50 to-amber-100/70 relative overflow-hidden" id="menu">
      {/* Éléments décoratifs */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent z-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent z-10"></div>

      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMTAiIGN5PSIxMCIgcj0iMiIgZmlsbD0id2hpdGUiLz48L3N2Zz4=')] bg-repeat"></div>

      <div
        className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-amber-800/40 animate-pulse"
        style={{ animationDelay: "0.5s" }}
      ></div>
      <div
        className="absolute top-1/3 right-1/4 w-3 h-3 rounded-full bg-amber-800/30 animate-pulse"
        style={{ animationDelay: "1.2s" }}
      ></div>
      <div
        className="absolute bottom-1/4 left-1/3 w-2 h-2 rounded-full bg-amber-800/40 animate-pulse"
        style={{ animationDelay: "0.8s" }}
      ></div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="h-[2px] w-12 bg-amber-700 mr-3"></div>
            <p className="text-amber-800 font-medium text-sm uppercase tracking-[0.2em]">NOTRE CARTE</p>
            <div className="h-[2px] w-12 bg-amber-700 ml-3"></div>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-amber-900 mb-6">
            Découvrez Nos{" "}
            <span
              className="font-serif italic relative inline-block"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              <span className="relative z-10">Cafés Signature</span>
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-amber-300/50 rounded-full transform -rotate-1"></span>
            </span>
          </h2>

          <div className="max-w-2xl mx-auto border-l-4 border-amber-200/70 pl-6 mb-8">
            <p className="text-amber-800/80 text-lg text-left">
              Dégustez notre sélection de cafés artisanaux, préparés avec passion par nos baristas experts pour une
              expérience gustative incomparable.
            </p>
          </div>
        </div>

        {/* Barre de recherche et filtres */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            <button
              onClick={() => setActiveFilter("tous")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === "tous"
                  ? "bg-gradient-to-r from-amber-700 to-amber-700 text-white shadow-lg"
                  : "bg-gradient-to-r from-amber-500 to-amber-500 text-amber-800 hover:bg-amber-100"
              }`}
            >
              Tous
            </button>
            <button
              onClick={() => setActiveFilter("chaud")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === "chaud"
                ? "bg-gradient-to-r from-amber-700 to-amber-700 text-white shadow-lg"
                : "bg-gradient-to-r from-amber-500 to-amber-500 text-amber-800 hover:bg-amber-100"
            }`}
            >
              Cafés Chauds
            </button>
            <button
              onClick={() => setActiveFilter("froid")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === "froid"
                ? "bg-gradient-to-r from-amber-700 to-amber-700 text-white shadow-lg"
                : "bg-gradient-to-r from-amber-500 to-amber-500 text-amber-800 hover:bg-amber-100"
            }`}
            >
              Cafés Froids
            </button>
          </div>

          <div className="relative">
            {isSearchOpen ? (
              <div className="flex items-center bg-white/90 rounded-full shadow-md overflow-hidden pl-4 pr-1 py-1">
                <Search className="w-4 h-4 text-amber-700 mr-2" />
                <input
                  type="text"
                  placeholder="Rechercher un café..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="bg-transparent border-none outline-none text-amber-900 placeholder-amber-900 w-40 md:w-60"
                />
                <button
                  onClick={() => {
                    setIsSearchOpen(false)
                    setSearchTerm("")
                  }}
                  className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-amber-100 transition-colors"
                >
                  <X className="w-4 h-4 text-amber-700" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => setIsSearchOpen(true)}
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-500 rounded-full text-amber-800 hover:bg-white transition-colors shadow-md"
              >
                <Search className="w-4 h-4" />
                <span className="text-sm font-medium">Rechercher</span>
              </button>
            )}
          </div>
        </div>

        {filteredCoffees.length === 0 ? (
          <div className="text-center py-16 bg-white/80 rounded-2xl shadow-md">
            <Coffee className="w-16 h-16 text-amber-300 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-amber-900 mb-2">Aucun café trouvé</h3>
            <p className="text-amber-700">Essayez d'autres termes de recherche ou filtres</p>
            <button
              onClick={() => {
                setSearchTerm("")
                setActiveFilter("tous")
              }}
              className="mt-6 px-6 py-2 bg-amber-700 text-white rounded-full hover:bg-amber-600 transition-colors"
            >
              Réinitialiser
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-500">
            {displayedCoffees.map((coffee, index) => (
              <div
                key={index}
                className="group relative backdrop-blur-sm bg-white/90 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/20 transform hover:-translate-y-2"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {coffee.isNew && (
                  <div className="absolute top-4 left-4 z-20">
                    <div className="bg-gradient-to-r from-amber-700 to-amber-600 text-white text-xs px-3 py-1 rounded-full font-medium shadow-md">
                      NOUVEAU
                    </div>
                  </div>
                )}

                <div className="relative aspect-[4/3] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-amber-900/30 group-hover:opacity-70 transition-opacity duration-500 z-10"></div>
                  <img
                    src={coffee.image || "/placeholder.svg"}
                    alt={coffee.name}
                    className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-amber-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                <div className="p-6 relative">
                  <div className="absolute -top-10 right-6 w-[60px] h-[60px] rounded-full bg-gradient-to-br from-amber-200 to-amber-100 flex items-center justify-center shadow-xl rotate-12 group-hover:rotate-0 transition-transform duration-500 z-20">
                    <div className="w-[56px] h-[56px] rounded-full border-2 border-dashed border-amber-700/30 flex items-center justify-center">
                      <div className="text-center transform -rotate-12 group-hover:rotate-0 transition-transform duration-500">
                        <span className="text-amber-800 font-bold">{coffee.price}€</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3
                      className="text-xl font-serif italic text-amber-700 mb-2 group-hover:text-amber-600 transition-colors duration-300"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {coffee.name}
                    </h3>
                    <div className="h-[2px] w-12 bg-amber-300 mb-3 transform origin-left scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                    <p className="text-amber-800/70 text-sm">{coffee.description}</p>
                  </div>

                  <div className="mt-4 pt-4 border-t border-amber-100 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <span className="text-xs text-amber-600 font-medium uppercase tracking-wider">
                      {coffee.category === "chaud" ? "Chaud" : "Froid"}
                    </span>
                    <button className="text-amber-700 hover:text-amber-900 transition-colors">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {filteredCoffees.length > 8 && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="group relative overflow-hidden bg-gradient-to-r from-amber-700 to-amber-600 text-white px-8 py-3.5 rounded-lg transition-all duration-300 font-medium shadow-lg hover:shadow-amber-900/30"
            >
              <span className="relative z-10 flex items-center">
                <span>{showAll ? "Voir moins" : "Voir tous nos cafés"}</span>
                {showAll ? (
                  <ChevronUp className="w-5 h-5 ml-2 transition-transform group-hover:-translate-y-1" />
                ) : (
                  <ChevronDown className="w-5 h-5 ml-2 transition-transform group-hover:translate-y-1" />
                )}
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
            </button>
          </div>
        )}

        {showAll && (
          <div className="mt-20 relative">
            <div className="backdrop-blur-md bg-amber-700/50 p-8 md:p-12 rounded-2xl border border-white/20 shadow-2xl bg-gradient-to-br from-white/10 to-white/5 transform hover:scale-[1.02] transition-transform duration-500">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex flex-col justify-center">
                  <div className="flex items-center mb-6">
                    <div className="h-[2px] w-12 bg-white mr-3"></div>
                    <p className="text-white font-medium text-sm uppercase tracking-[0.2em]">EXPÉRIENCE UNIQUE</p>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    Savourez{" "}
                    <span
                      className="font-serif italic text-amber-200 relative inline-block"
                      style={{ fontFamily: "'Playfair Display', serif", textShadow: "0 2px 10px rgba(0,0,0,0.2)" }}
                    >
                      <span className="relative z-10">l'Excellence</span>
                      <span className="absolute -bottom-2 left-0 w-full h-1 bg-amber-500/30 rounded-full"></span>
                    </span>
                  </h3>

                  <div className="border-l-4 border-amber-200/70 pl-6 mb-8">
                    <p className="text-white text-lg leading-relaxed">
                      Découvrez notre collection complète de cafés et venez vivre une expérience gustative
                      exceptionnelle dans notre établissement.
                    </p>
                  </div>

                  <a
                    href="https://www.instagram.com/dupondcafe/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden bg-white/20 backdrop-blur-sm text-white px-8 py-3.5 rounded-lg transition-all duration-300 font-medium shadow-lg hover:shadow-amber-900/30 self-start border border-white/30"
                  >
                    <span className="relative z-10 flex items-center">
                      <Coffee className="w-5 h-5 mr-2 transition-transform group-hover:rotate-12" />
                      NOUS SUIVRE
                    </span>
                    <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                  </a>
                </div>

                <div className="relative flex justify-center items-center">
                  <div className="w-[220px] h-[220px] rounded-full bg-gradient-to-br from-amber-200 to-amber-100 flex items-center justify-center shadow-xl rotate-12 hover:rotate-0 transition-transform duration-500">
                    <div className="w-[210px] h-[210px] rounded-full border-2 border-dashed border-amber-700/30 flex items-center justify-center overflow-hidden">
                      <img
                        src={logorond || "/placeholder.svg"}
                        alt="Logo Café"
                        className="w-full h-full object-cover transform -rotate-12 hover:rotate-0 transition-transform duration-500"
                      />
                    </div>
                  </div>

                  {/* Élément décoratif */}
                  <div className="absolute -bottom-10 -right-10 w-20 h-20 rounded-full bg-amber-300/30 animate-pulse"></div>
                  <div
                    className="absolute -top-5 -left-5 w-16 h-16 rounded-full bg-amber-200/20 animate-pulse"
                    style={{ animationDelay: "0.5s" }}
                  ></div>
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
