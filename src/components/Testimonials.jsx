const Testimonials = () => {
  const testimonials = [
    {
      name: "Sophie Martin",
      role: "Cliente fidèle",
      text: "Le Café Dupond est devenu mon refuge quotidien. L'ambiance y est chaleureuse et le café est tout simplement exceptionnel. Je recommande particulièrement leur cappuccino qui est le meilleur de la ville.",
    },
    {
      name: "Thomas Dubois",
      role: "Entrepreneur",
      text: "J'organise régulièrement des réunions professionnelles au Café Dupond. Le cadre est idéal, le service impeccable et leurs pâtisseries sont un vrai plus pour impressionner mes clients. Un lieu incontournable.",
    },
    {
      name: "Marie Leroy",
      role: "Blogueuse culinaire",
      text: "En tant que passionnée de gastronomie, je suis très exigeante sur la qualité. Le Café Dupond répond parfaitement à mes attentes avec leurs cafés d'origine soigneusement sélectionnés et leur service attentionné.",
    },
  ]

  return (
    <section className="py-20 bg-[#F5F5DC]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-[#7B3F00] font-medium mb-2">TÉMOIGNAGES</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#7B3F00] mb-6">Ce Que Nos Clients Disent</h2>
          <p className="text-[#7B3F00]/80 max-w-2xl mx-auto">
            Découvrez les expériences de nos clients fidèles qui partagent leur amour pour notre café et nos services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#7B3F00]/20 rounded-full flex items-center justify-center mr-4">
                  {/* Avatar placeholder */}
                  <span className="text-[#7B3F00] font-bold">{testimonial.name.charAt(0)}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-[#7B3F00]">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.text}"</p>
              <div className="mt-4 flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-yellow-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
