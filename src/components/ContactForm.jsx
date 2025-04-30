const ContactForm = () => {
  return (
    <section className="py-20 bg-white" id="contact">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-[#F5F5DC] rounded-lg shadow-lg overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-[#7B3F00] mb-4">Réservez Votre Table Maintenant !</h2>
              <p className="text-[#7B3F00]/80">
                Complétez le formulaire ci-dessous pour réserver une table dans notre café.
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-[#7B3F00] font-medium mb-2">
                    Prénom
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-3 border border-[#7B3F00]/20 rounded focus:outline-none focus:ring-2 focus:ring-[#7B3F00]/50"
                    placeholder="Votre prénom"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-[#7B3F00] font-medium mb-2">
                    Nom
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-3 border border-[#7B3F00]/20 rounded focus:outline-none focus:ring-2 focus:ring-[#7B3F00]/50"
                    placeholder="Votre nom"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-[#7B3F00] font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-[#7B3F00]/20 rounded focus:outline-none focus:ring-2 focus:ring-[#7B3F00]/50"
                    placeholder="Votre email"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-[#7B3F00] font-medium mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 border border-[#7B3F00]/20 rounded focus:outline-none focus:ring-2 focus:ring-[#7B3F00]/50"
                    placeholder="Votre numéro"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="date" className="block text-[#7B3F00] font-medium mb-2">
                    Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    className="w-full px-4 py-3 border border-[#7B3F00]/20 rounded focus:outline-none focus:ring-2 focus:ring-[#7B3F00]/50"
                  />
                </div>
                <div>
                  <label htmlFor="time" className="block text-[#7B3F00] font-medium mb-2">
                    Heure
                  </label>
                  <input
                    type="time"
                    id="time"
                    className="w-full px-4 py-3 border border-[#7B3F00]/20 rounded focus:outline-none focus:ring-2 focus:ring-[#7B3F00]/50"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="guests" className="block text-[#7B3F00] font-medium mb-2">
                  Nombre de personnes
                </label>
                <select
                  id="guests"
                  className="w-full px-4 py-3 border border-[#7B3F00]/20 rounded focus:outline-none focus:ring-2 focus:ring-[#7B3F00]/50"
                >
                  <option value="1">1 personne</option>
                  <option value="2">2 personnes</option>
                  <option value="3">3 personnes</option>
                  <option value="4">4 personnes</option>
                  <option value="5">5 personnes</option>
                  <option value="6">6 personnes ou plus</option>
                </select>
              </div>

              <div className="text-center pt-4">
                <button
                  type="submit"
                  className="bg-[#7B3F00] text-white px-8 py-3 rounded font-medium hover:bg-[#7B3F00]/90 transition-colors"
                >
                  RÉSERVER MAINTENANT
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
