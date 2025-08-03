import { useState } from 'react'

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { href: '#hero', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#education', label: 'Education' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md border-b border-white/20 z-50 shadow-lg">
      <div className="container-width section-padding">
        <div className="flex items-center justify-between h-16">
          {/* Enhanced Logo */}
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-xl blur opacity-0 group-hover:opacity-20 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative font-black text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-gradient-x">
              Gonçalo
            </div>
          </div>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative group px-4 py-2 text-gray-700 hover:text-gray-900 transition-all duration-300 font-semibold"
              >
                <span className="relative z-10">{item.label}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
              </a>
            ))}
            
            {/* CV Download Button */}
            <a
              href="/cv/Goncalo_Frutuoso_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 group relative inline-flex items-center justify-center px-4 py-2 text-sm font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-600 rounded-lg overflow-hidden shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 transform hover:-translate-y-0.5 hover:scale-105"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-emerald-700 to-teal-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative flex items-center">
                <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                CV
              </span>
            </a>
          </div>

          {/* Enhanced Mobile menu button */}
          <button
            className="md:hidden p-3 rounded-xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 hover:from-blue-500/20 hover:via-purple-500/20 hover:to-pink-500/20 transition-all duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <span
                className={`block h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-1' : ''
                }`}
              />
              <span
                className={`block h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block h-0.5 bg-gradient-to-r from-pink-600 to-blue-600 transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 -translate-y-1' : ''
                }`}
              />
            </div>
          </button>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-white/20 bg-white/95 backdrop-blur-sm rounded-b-2xl shadow-2xl">
            <div className="space-y-2">
              {navItems.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="group relative block py-3 px-4 text-gray-700 hover:text-gray-900 transition-all duration-300 font-semibold rounded-xl"
                  onClick={() => setIsMenuOpen(false)}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="relative z-10 flex items-center">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    {item.label}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              ))}
              
              {/* Mobile CV Download Button */}
              <a
                href="/cv/Goncalo_Frutuoso_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block mt-4 mx-4 py-3 px-4 text-white bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl font-semibold text-center transition-all duration-300 transform hover:scale-105"
                onClick={() => setIsMenuOpen(false)}
                style={{ animationDelay: `${navItems.length * 100}ms` }}
              >
                <span className="relative flex items-center justify-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download CV
                </span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
