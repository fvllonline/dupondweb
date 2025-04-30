const Features = () => {
  const features = [
    {
      title: "Café de Haute Qualité",
      description:
        "Nos grains sont soigneusement sélectionnés et torréfiés pour offrir une expérience gustative exceptionnelle.",
    },
    {
      title: "Baristas Experts",
      description: "Notre équipe de baristas passionnés maîtrise l'art de la préparation du café à la perfection.",
    },
    {
      title: "Boutique en Ligne",
      description: "Retrouvez nos cafés préférés et accessoires directement sur notre boutique en ligne.",
    },
    {
      title: "Machines à Café Premium",
      description:
        "Nous utilisons uniquement des équipements de qualité professionnelle pour extraire le meilleur de chaque grain.",
    },
  ]

  return (
    <section className="py-20 bg-[#F5F5DC]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-[#7B3F00] font-medium mb-2">NOS ATOUTS</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#7B3F00] mb-6">Ce Que Nous Vous Proposons</h2>
          <p className="text-[#7B3F00]/80 max-w-2xl mx-auto">
            Découvrez ce qui rend le Café Dupond si spécial. Notre engagement envers la qualité et le service se reflète
            dans chaque aspect de notre établissement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#7B3F00]/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                {/* Icon placeholder */}
                <div className="text-[#7B3F00] text-2xl">{index + 1}</div>
              </div>
              <h3 className="text-xl font-semibold text-[#7B3F00] mb-4 text-center">{feature.title}</h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
              <div className="mt-6 text-center">
                <a href="#" className="text-[#7B3F00] font-medium hover:underline">
                  En savoir plus
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
