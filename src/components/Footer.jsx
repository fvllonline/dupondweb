import { FaFacebookF, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-amber-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* À propos */}
          <div className="space-y-6">
            <h3 className="text-2xl font-serif italic font-bold mb-6 text-amber-100">Café Dupond</h3>
            <p className="text-white/80 leading-relaxed">
              Un espace chaleureux où le café d'exception rencontre la convivialité.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebookF className="text-white text-lg" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="text-white text-lg" />
              </a>
            </div>
          </div>

          {/* Horaires */}
          <div>
            <h3 className="text-2xl font-serif italic font-bold mb-6 text-amber-100">Nos Horaires</h3>
            <ul className="space-y-4 text-white/80">
              <li className="flex justify-between items-center pb-2 border-b border-white/10">
                <span className="font-medium">7/7j</span>
                <span className="text-amber-100">7h30 - 00h00</span>
              </li>
              <li className="pt-2">
                <p className="text-sm italic">Fermé les jours fériés</p>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-2xl font-serif italic font-bold mb-6 text-amber-100">Contact</h3>
            <ul className="space-y-4 text-white/80">
              <li className="flex items-start">
                <div className="space-y-2">
                  <p className="font-sm">Marina Mall, Casablanca</p>
                  <p className="text-sm">Maarif Urban Square Bd d'Anfa, Casablanca</p>
                  <p className="text-sm">Bd de Ghandi angle Bd Ibnou Sina, Casablanca</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-2xl font-serif italic font-bold mb-6 text-amber-100">Newsletter</h3>
            <p className="mb-6 text-white/80">
              Recevez nos actualités et offres spéciales.
            </p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Votre email"
                className="w-full px-4 py-3 rounded-lg bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-1 focus:ring-amber-300 placeholder-white/50"
              />
              <button
                type="submit"
                className="w-full px-6 py-3 bg-amber-700 text-white rounded-lg font-medium hover:bg-amber-600 transition-colors"
              >
                S'INSCRIRE
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-8 text-center text-white/60 text-sm">
          <p>© {new Date().getFullYear()} Café Dupond. Tous droits réservés.</p>
          <p className="mt-1">Développé par <span className="text-amber-200">NAWFAL ADDAOUI</span></p>
        </div>
      </div>
    </footer>
  )
}

export default Footer