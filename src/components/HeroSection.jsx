import herobg from "../assets/herobg.jpg"

const HeroSection = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
      {/* Image de fond avec overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={herobg}
          alt="Café chaud dans une tasse avec ambiance café chaleureuse"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#7B3F00]/60 mix-blend-multiply" />
      </div>

      {/* Contenu */}
      <div className="container mx-auto px-4 relative z-10">
  <div className="max-w-2xl bg-white/40 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-white/30 shadow-xl">
    {/* En-tête avec ligne décorative */}
    <div className="flex items-center mb-4">
      <div className="h-[2px] w-12 bg-[#F5F5DC] mr-3"></div>
      <p className="text-[#7B3F00] font-medium text-sm uppercase tracking-[0.2em]">
        BIENVENUE CHEZ NOUS
      </p>
    </div>

    {/* Titre avec effet de profondeur */}
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
      <span className="relative">
        <span className="absolute -inset-x-2 -inset-y-1 bg-[#7B3F00]/0 transform -skew-x-3"></span>
        <span className="relative">L'art du café</span>
      </span>
      <br />
      <span className="text-[#7B3F00] font-serif italic">à la française</span>
    </h1>

    {/* Texte avec bordure subtile */}
    <div className="border-l-4 border-[#F5F5DC] pl-4 mb-8">
      <p className="text-white text-lg max-w-lg">
        Torréfié avec passion, servi avec élégance. Découvrez nos grands crus de café préparés par nos maîtres torréfacteurs.
      </p>
    </div>

    {/* Boutons avec effet de profondeur */}
    <div className="flex flex-wrap gap-4">
      <button className="relative overflow-hidden group bg-[#7B3F00] hover:bg-[#7B3F00]/90 text-white px-8 py-3 rounded-lg transition-all duration-300 font-medium">
        <span className="relative z-10">RÉSERVER UNE TABLE</span>
        <span className="absolute inset-0 bg-black/10 group-hover:opacity-0 transition-opacity duration-300"></span>
      </button>
      
      <button className="relative overflow-hidden group border-2 border-[#7B3F00] text-[#7B3F00] hover:text-[#7B3F00]/90 px-8 py-3 rounded-lg transition-all duration-300 font-medium">
        <span className="relative z-10 flex items-center">
          NOTRE CARTE
          <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </span>
        <span className="absolute inset-0 bg-[#7B3F00]/5 group-hover:bg-[#7B3F00]/10 transition-colors duration-300"></span>
      </button>
    </div>
  </div>
</div>
      {/* Élément décoratif */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-[#7B3F00]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  )
}

export default HeroSection