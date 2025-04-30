const Footer = () => {
  return (
    <footer className="bg-[#7B3F00] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* À propos */}
          <div>
            <h3 className="text-xl font-bold mb-6">Café Dupond</h3>
            <p className="mb-6 text-white/80">
              Un espace chaleureux où le café d'exception rencontre la convivialité. Venez découvrir notre sélection de
              cafés artisanaux et nos pâtisseries maison.
            </p>
            <div className="flex space-x-4">
              {["facebook", "twitter", "instagram", "linkedin"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <span className="sr-only">{social}</span>
                  {/* Icon placeholder */}
                  <div className="w-5 h-5"></div>
                </a>
              ))}
            </div>
          </div>

          {/* Horaires */}
          <div>
            <h3 className="text-xl font-bold mb-6">Nos Horaires</h3>
            <ul className="space-y-3 text-white/80">
              <li className="flex justify-between">
                <span>Lundi - Vendredi</span>
                <span>7h30 - 19h00</span>
              </li>
              <li className="flex justify-between">
                <span>Samedi</span>
                <span>8h00 - 20h00</span>
              </li>
              <li className="flex justify-between">
                <span>Dimanche</span>
                <span>9h00 - 18h00</span>
              </li>
            </ul>
            <p className="mt-6 text-white/80">Fermé les jours fériés</p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact</h3>
            <ul className="space-y-3 text-white/80">
              <li className="flex items-start">
                
                <span>15 Rue des Cafetiers, 75001 Paris, France</span>
              </li>
              <li className="flex items-start">
                
                <span>+33 1 23 45 67 89</span>
              </li>
              <li className="flex items-start">
                
                <span>contact@cafedupond.fr</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-6">Newsletter</h3>
            <p className="mb-4 text-white/80">
              Inscrivez-vous à notre newsletter pour recevoir nos actualités et offres spéciales.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Votre email"
                className="px-4 py-2 rounded bg-white/10 text-white border border-white/20 focus:outline-none focus:border-white/40"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-white text-[#7B3F00] rounded font-medium hover:bg-white/90 transition-colors"
              >
                S'INSCRIRE
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center text-white/60">
          <p>© {new Date().getFullYear()} Café Dupond. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
