const Shop = () => {
  const products = [
    { name: "Café Arabica", originalPrice: "20", salePrice: "15" },
    { name: "Café Robusta", originalPrice: "22", salePrice: "17" },
    { name: "Café Vanille", originalPrice: "20", salePrice: "15" },
    { name: "Café Caramel", originalPrice: "20", salePrice: "15" },
  ]

  return (
    <section className="py-20 bg-[#F5F5DC]" id="boutique">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-[#7B3F00] font-medium mb-2">NOTRE BOUTIQUE EN LIGNE</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#7B3F00] mb-6">Achetez Nos Produits Phares</h2>
          <p className="text-[#7B3F00]/80 max-w-2xl mx-auto">
            Retrouvez nos cafés préférés et accessoires directement sur notre boutique en ligne. Livraison rapide et
            emballage éco-responsable.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-shadow"
            >
              <div className="h-48 bg-[#7B3F00]/10 relative">
                {/* Image ici */}
                <div className="absolute inset-0 flex items-center justify-center text-[#7B3F00]">
                  {/* Ajoute ton image ici */}
                </div>
                <div className="absolute top-4 right-4 bg-[#7B3F00] text-white text-sm font-medium px-2 py-1 rounded">
                  Promo
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#7B3F00] mb-2">{product.name}</h3>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-gray-400 line-through">{product.originalPrice}€</span>
                  <span className="text-[#7B3F00] font-bold text-xl">{product.salePrice}€</span>
                </div>
                <button className="w-full bg-[#7B3F00] text-white py-2 rounded hover:bg-[#7B3F00]/90 transition-colors">
                  Ajouter au panier
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Shop
