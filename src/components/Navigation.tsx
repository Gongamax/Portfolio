import { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "#hero", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#education", label: "Education" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-slate-200 z-50 shadow-sm">
      <div className="container-width section-padding">
        <div className="flex items-center justify-between h-16">
          <div className="relative">
            <div className="relative font-black text-2xl text-slate-900">
              Gonçalo
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative group px-4 py-2 text-gray-700 hover:text-gray-900 transition-colors duration-200 font-semibold"
              >
                <span className="relative z-10">{item.label}</span>
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-600 group-hover:w-full group-hover:left-0 transition-all duration-200"></div>
              </a>
            ))}

            {/* CV Download Button */}
            <a
              href="/cv/Goncalo_Frutuoso_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 group relative inline-flex items-center justify-center px-4 py-2 text-sm font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-600 rounded-lg overflow-hidden shadow hover:shadow-md transition-all duration-200"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-emerald-700 to-teal-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative flex items-center">
                <svg
                  className="w-4 h-4 mr-1.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                CV
              </span>
            </a>
          </div>

          <button
            className="md:hidden p-3 rounded-xl bg-slate-100 hover:bg-slate-200 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <span
                className={`block h-0.5 bg-slate-700 transition-all duration-200 ${
                  isMenuOpen ? "rotate-45 translate-y-1" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-slate-700 transition-all duration-200 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-slate-700 transition-all duration-200 ${
                  isMenuOpen ? "-rotate-45 -translate-y-1" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-slate-200 bg-white rounded-b-2xl shadow-lg">
            <div className="space-y-2">
              {navItems.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="group relative block py-3 px-4 text-gray-700 hover:text-gray-900 transition-colors duration-200 font-semibold rounded-xl"
                  onClick={() => setIsMenuOpen(false)}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="relative z-10 flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                    {item.label}
                  </span>
                  <div className="absolute inset-0 bg-blue-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                </a>
              ))}

              {/* Mobile CV Download Button */}
              <a
                href="/cv/Goncalo_Frutuoso_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block mt-4 mx-4 py-3 px-4 text-white bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl font-semibold text-center transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
                style={{ animationDelay: `${navItems.length * 100}ms` }}
              >
                <span className="relative flex items-center justify-center">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Download CV
                </span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
