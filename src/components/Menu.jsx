const Menu = () => {
  const coffees = [
    { name: "Café Latte", description: "Espresso et lait mousseux", price: "4.50" },
    { name: "Café Américano", description: "Espresso allongé à l'eau chaude", price: "3.80" },
    { name: "Macchiato", description: "Espresso tâché d'une touche de lait", price: "4.00" },
    { name: "Café Mocha", description: "Espresso, chocolat et lait mousseux", price: "5.20" },
    { name: "Cappuccino", description: "Espresso, lait chaud et mousse de lait", price: "4.50" },
    { name: "Café Glacé", description: "Espresso, lait froid et glaçons", price: "4.80" },
    { name: "Chocolat Mocha", description: "Chocolat chaud avec une touche d'espresso", price: "5.50" },
    { name: "Latte Vanille", description: "Café latte aromatisé à la vanille", price: "5.00" },
    { name: "Latte Glacé", description: "Latte servi avec des glaçons", price: "4.80" },
    { name: "Espresso", description: "L'essence pure du café", price: "2.80" },
    { name: "Latte Caramel", description: "Café latte avec sirop de caramel", price: "5.00" },
    { name: "Cortado", description: "Espresso équilibré avec du lait", price: "3.90" },
  ]

  return (
    <section className="py-20 bg-white" id="menu">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-[#7B3F00] font-medium mb-2">NOTRE MENU</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#7B3F00] mb-6">Découvrez Nos Cafés</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Notre carte propose une sélection de cafés préparés avec soin par nos baristas. Des classiques aux créations
            originales, il y en a pour tous les goûts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {coffees.map((coffee, index) => (
            <div key={index} className="flex justify-between group">
              <div>
                <h3 className="text-xl font-semibold text-[#7B3F00] mb-2 group-hover:text-[#7B3F00]/80 transition-colors">
                  {coffee.name}
                </h3>
                <p className="text-gray-600 mb-1">{coffee.description}</p>
              </div>
              <div className="text-[#7B3F00] font-bold">{coffee.price}€</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Menu
