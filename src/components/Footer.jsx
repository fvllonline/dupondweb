import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa"
import { Coffee, Mail, Phone, MapPin, ArrowRight } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-amber-900 to-amber-950 text-white relative overflow-hidden">
      {/* Motif de grain de café subtil */}
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMTAiIGN5PSIxMCIgcj0iMiIgZmlsbD0id2hpdGUiLz48L3N2Zz4=')] bg-repeat"></div>

      {/* Éléments décoratifs */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-amber-800/50 to-transparent"></div>

      {/* Particules décoratives */}
      <div
        className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-amber-300/20 animate-pulse"
        style={{ animationDelay: "0.5s" }}
      ></div>
      <div
        className="absolute bottom-1/3 right-1/4 w-3 h-3 rounded-full bg-amber-200/10 animate-pulse"
        style={{ animationDelay: "1.2s" }}
      ></div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Logo et tagline */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 pb-8 border-b border-amber-700/30">
          <div className="flex items-center mb-6 md:mb-0">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-300 to-amber-200 flex items-center justify-center shadow-lg mr-4">
              <Coffee className="w-6 h-6 text-amber-900" />
            </div>
            <div>
              <h2 className="text-2xl font-serif italic font-bold text-amber-100">Café Dupond</h2>
              <p className="text-amber-300/80 text-sm">L'art du café à la française</p>
            </div>
          </div>

          <div className="flex space-x-3">
            <a
              href="#"
              className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors transform hover:scale-110 duration-300"
              aria-label="Facebook"
            >
              <FaFacebookF className="text-white text-lg" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors transform hover:scale-110 duration-300"
              aria-label="Instagram"
            >
              <FaInstagram className="text-white text-lg" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors transform hover:scale-110 duration-300"
              aria-label="Twitter"
            >
              <FaTwitter className="text-white text-lg" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors transform hover:scale-110 duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="text-white text-lg" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* À propos */}
          <div className="space-y-6">
            <h3 className="text-xl font-serif italic font-bold mb-6 text-amber-100 relative inline-block">
              <span className="relative z-10">À Propos</span>
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-amber-500/50 rounded-full"></span>
            </h3>
            <p className="text-white/80 leading-relaxed">
              Un espace chaleureux où le café d'exception rencontre la convivialité. Notre passion pour le café nous
              pousse à rechercher l'excellence à chaque tasse.
            </p>
            <a
              href="#"
              className="inline-flex items-center text-amber-300 hover:text-amber-200 transition-colors group"
            >
              <span>En savoir plus</span>
              <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Horaires */}
          <div>
            <h3 className="text-xl font-serif italic font-bold mb-6 text-amber-100 relative inline-block">
              <span className="relative z-10">Nos Horaires</span>
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-amber-500/50 rounded-full"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex justify-between items-center pb-2 border-b border-white/10 group">
                <span className="font-medium text-white/80 group-hover:text-white transition-colors">
                  Lundi - Vendredi
                </span>
                <span className="text-amber-200 group-hover:text-amber-100 transition-colors">7h30 - 22h00</span>
              </li>
              <li className="flex justify-between items-center pb-2 border-b border-white/10 group">
                <span className="font-medium text-white/80 group-hover:text-white transition-colors">
                  Samedi - Dimanche
                </span>
                <span className="text-amber-200 group-hover:text-amber-100 transition-colors">8h00 - 00h00</span>
              </li>
              <li className="pt-2">
                <p className="text-sm italic text-white/60">Fermé les jours fériés</p>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-serif italic font-bold mb-6 text-amber-100 relative inline-block">
              <span className="relative z-10">Contact</span>
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-amber-500/50 rounded-full"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <MapPin className="w-5 h-5 text-amber-300 mt-1 group-hover:text-amber-200 transition-colors" />
                <div className="space-y-2">
                  <p className="font-medium text-white/90 group-hover:text-white transition-colors">
                    Localisation Casablanca
                  </p>
                  <p className="text-sm text-white/70">- Marina Mall</p>
                  <p className="text-sm text-white/70">- Maarif Urban Square Bd d'Anfa</p>
                  <p className="text-sm text-white/70">- Bd de Ghandi angle Bd Ibnou Sina</p>
                </div>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone className="w-5 h-5 text-amber-300 group-hover:text-amber-200 transition-colors" />
                <a href="tel:+212522000000" className="text-white/90 group-hover:text-white transition-colors">
                  +212 522 00 00 00
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail className="w-5 h-5 text-amber-300 group-hover:text-amber-200 transition-colors" />
                <a
                  href="mailto:contact@cafedupond.com"
                  className="text-white/90 group-hover:text-white transition-colors"
                >
                  contact@cafedupond.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-serif italic font-bold mb-6 text-amber-100 relative inline-block">
              <span className="relative z-10">Newsletter</span>
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-amber-500/50 rounded-full"></span>
            </h3>
            <p className="mb-6 text-white/80">
              Recevez nos actualités et offres spéciales directement dans votre boîte mail.
            </p>
            <form className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-amber-300/50 focus:border-transparent placeholder-white/50 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-focus-within:opacity-100 rounded-lg pointer-events-none transition-opacity duration-300"></div>
              </div>
              <button
                type="submit"
                className="group relative overflow-hidden w-full px-6 py-3 bg-gradient-to-r from-amber-700 to-amber-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-amber-900/20 transition-all duration-300 transform hover:-translate-y-1"
              >
                <span className="relative z-10 flex items-center justify-center">
                  S'INSCRIRE
                  <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-white/60 text-sm">
          <p>© {currentYear} Café Dupond. Tous droits réservés.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-amber-300 transition-colors">
              Mentions légales
            </a>
            <a href="#" className="hover:text-amber-300 transition-colors">
              Politique de confidentialité
            </a>
            <p>
              Développé par <span className="text-amber-300">NAWFAL ADDAOUI</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
