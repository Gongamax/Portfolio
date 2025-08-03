import { aboutContent } from '../data/about';

const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30"></div>
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container-width section-padding relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mb-6 animate-gradient-x">
              {aboutContent.title}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className="space-y-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 border border-white/50">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-3 animate-pulse"></div>
                  Professional Journey
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
                  {aboutContent.profileText}
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 border border-white/50">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mr-3 animate-pulse"></div>
                  Personal Highlights
                </h3>
                <div className="grid gap-3">
                  {aboutContent.personalHighlights.map((highlight, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-purple-50/50 rounded-xl">
                      <span className="text-lg">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 text-white shadow-2xl">
                <h3 className="text-3xl font-bold mb-8 text-center">
                  Core Technologies
                </h3>
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {aboutContent.technologies.map((tech) => (
                    <div 
                      key={tech} 
                      className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105 border border-white/20"
                    >
                      <span className="text-sm font-semibold">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Core Skills */}
              {/* <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/50">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <div className="w-3 h-3 bg-pink-500 rounded-full mr-3 animate-pulse"></div>
                  Core Skills
                </h3>
                <div className="grid gap-4">
                  {aboutContent.coreSkills.map((skill, index) => (
                    <div key={index} className="flex items-center space-x-3 p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl border border-pink-100 hover:from-pink-100 hover:to-purple-100 transition-all duration-300">
                      <div className="w-2 h-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></div>
                      <span className="font-semibold text-gray-800">{skill}</span>
                    </div>
                  ))}
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
