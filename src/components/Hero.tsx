

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 sm:pt-8">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50"></div>
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 py-8 sm:py-0">
        <div className="max-w-5xl mx-auto">
          {/* Profile Section */}
          <div className="mb-8 sm:mb-12 relative pt-6 sm:pt-4">
            <div className="w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 lg:w-60 lg:h-60 xl:w-64 xl:h-64 mx-auto mb-6 sm:mb-8 relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full animate-spin-slow"></div>
              <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center shadow-2xl group-hover:shadow-blue-500/25 transition-all duration-500 overflow-hidden">
                <img 
                  src="/images/profile.jpg" 
                  alt="Gonçalo Frutuoso" 
                  className="w-full h-full object-cover rounded-full"
                  onError={(e) => {
                    console.log('Image failed to load:', (e.target as HTMLImageElement).src);
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 translate-y-1 sm:-translate-y-2">
              <div className="flex space-x-1 sm:space-x-2">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full animate-bounce"></div>
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-500 rounded-full animate-bounce animation-delay-200"></div>
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-pink-500 rounded-full animate-bounce animation-delay-400"></div>
              </div>
            </div>
          </div>

          {/* Name and Title */}
          <div className="mb-6 sm:mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mb-4 sm:mb-6 animate-gradient-x leading-tight px-4 sm:px-0">
              Gonçalo Frutuoso
            </h1>
            
            <div className="relative px-4 sm:px-0">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-700 mb-2">
                <span className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Computer & Software Engineering Student
                </span>
              </h2>
              <h3 className="text-base sm:text-lg md:text-xl text-gray-600 flex flex-col sm:flex-row items-center justify-center gap-2 text-center">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  Currently @ Sky Portugal Frontend Apprentice
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                </span>
              </h3>
            </div>
          </div>

          {/* Description */}
          <div className="mb-8 sm:mb-12 px-4 sm:px-0">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto font-medium text-center">
              Master's student in Computer Engineering at 
              <span className="text-blue-600 font-semibold"> Instituto Superior Técnico</span>, 
              specializing in Distributed Systems and Bio-Informatics. Currently gaining real-world experience as a Frontend Apprentice at 
              <span className="text-purple-600 font-semibold"> Sky Portugal </span> 
            working in Swift and CI/CD.
            </p>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4 sm:px-0 w-full sm:w-auto">
            <a
              href="#projects"
              className="group relative inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl overflow-hidden shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative flex items-center">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0l-4-4m4 4l-4 4" />
                </svg>
                View My Work
              </span>
            </a>
            
            <a
              href="https://github.com/Gongamax"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold text-white bg-gray-900 rounded-2xl overflow-hidden shadow-2xl hover:shadow-gray-500/25 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-gray-800 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative flex items-center">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </span>
            </a>
            
            <a
              href="/cv/Goncalo_Frutuoso_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl overflow-hidden shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-emerald-700 to-teal-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative flex items-center">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download CV
              </span>
            </a>
            
            <a
              href="#contact"
              className="group relative inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold text-gray-700 bg-white/80 backdrop-blur-sm border-2 border-gray-300 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-gray-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative flex items-center">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Get In Touch
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
