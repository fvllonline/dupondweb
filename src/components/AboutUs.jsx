const AboutUs = () => {
  return (
    <section className="py-20 bg-white" id="à-propos">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            {/* Image ici */}
            <div className="bg-[#F5F5DC] h-80 md:h-96 rounded-lg flex items-center justify-center">
              <span className="text-[#7B3F00]">&lt;!-- Ajoute ton image ici --&gt;</span>
            </div>
          </div>

          <div className="md:w-1/2 md:pl-12">
            <p className="text-[#7B3F00] font-medium mb-2">À PROPOS DE NOUS</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#7B3F00] mb-6">
              Aimeriez-Vous
              <br />
              Un Délicieux Café?
            </h2>
            <p className="text-gray-700 mb-4">
              Fondé en 2010, le Café Dupond est devenu une institution dans le quartier. Notre mission est simple :
              offrir un café d'exception dans un cadre chaleureux et convivial.
            </p>
            <p className="text-gray-700 mb-6">
              Nos grains sont soigneusement sélectionnés auprès de producteurs respectueux de l'environnement. Chaque
              tasse raconte une histoire, celle d'un savoir-faire artisanal et d'une passion pour le café de qualité.
            </p>
            <p className="text-[#7B3F00] font-medium italic mb-6">
              "Le café est une affaire sérieuse qui mérite d'être traitée avec respect et créativité."
            </p>
            <p className="text-[#7B3F00] font-medium mb-8">- Vincent Dupond</p>
            <button className="bg-[#7B3F00] text-white px-6 py-3 rounded hover:bg-[#7B3F00]/90 transition-colors">
              EN SAVOIR PLUS
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
