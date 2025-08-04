import { useContactForm } from '../hooks/useContactForm';

const Contact = () => {
  const { 
    formData, 
    isLoading, 
    isSuccess, 
    error, 
    handleChange, 
    handleSubmit, 
  } = useContactForm();

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50"></div>
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 right-1/3 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 mb-4 sm:mb-6 animate-gradient-x">
              Let's Connect
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              I'm always interested in discussing <span className="text-blue-600 font-semibold">new opportunities</span>, 
              innovative projects, or simply connecting with fellow <span className="text-indigo-600 font-semibold">developers </span> 
              and technology enthusiasts.
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-4 sm:mt-6"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {/* Contact Information Column */}
            <div className="space-y-6 sm:space-y-8">
              {/* Contact Information Card */}
              <div className="group relative w-full max-w-none mx-auto">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/50">
                  <h3 className="text-xl sm:text-2xl font-black text-gray-900 mb-6 sm:mb-8 flex items-center justify-center sm:justify-start">
                    <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-4"></div>
                    Get In Touch
                  </h3>
                  
                  <div className="space-y-4 sm:space-y-6">
                    {/* Email */}
                    <div className="group/item flex items-center space-x-4 p-3 sm:p-4 rounded-2xl hover:bg-blue-50/50 transition-all duration-300">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300 shadow-lg flex-shrink-0">
                        <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-bold text-gray-900 text-base sm:text-lg">Email</p>
                        <a
                          href="mailto:goncasantacruz@gmail.com"
                          className="text-blue-600 hover:text-blue-700 transition-colors font-semibold text-sm sm:text-base break-all"
                        >
                          goncasantacruz@gmail.com
                        </a>
                      </div>
                    </div>

                    {/* LinkedIn */}
                    <div className="group/item flex items-center space-x-4 p-3 sm:p-4 rounded-2xl hover:bg-blue-50/50 transition-all duration-300">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300 shadow-lg flex-shrink-0">
                        <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-bold text-gray-900 text-base sm:text-lg">LinkedIn</p>
                        <a
                          href="https://linkedin.com/in/goncalo-frutuoso"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-700 transition-colors font-semibold text-sm sm:text-base break-all"
                        >
                          linkedin.com/in/goncalo-frutuoso
                        </a>
                      </div>
                    </div>

                    {/* GitHub */}
                    <div className="group/item flex items-center space-x-4 p-3 sm:p-4 rounded-2xl hover:bg-gray-50/50 transition-all duration-300">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-gray-700 to-gray-900 rounded-2xl flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300 shadow-lg flex-shrink-0">
                        <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-bold text-gray-900 text-base sm:text-lg">GitHub</p>
                        <a
                          href="https://github.com/Gongamax"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-700 hover:text-gray-900 transition-colors font-semibold text-sm sm:text-base break-all"
                        >
                          github.com/Gongamax
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Current Status Card */}
              <div className="group relative w-full max-w-none mx-auto">
                <div className="absolute -inset-1 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/50">
                  <h4 className="text-lg sm:text-xl font-black text-gray-900 mb-4 sm:mb-6 flex items-center justify-center sm:justify-start">
                    <div className="w-4 h-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mr-4"></div>
                    Current Status
                  </h4>
                  <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-2xl p-4 sm:p-6 border border-green-200">
                    <div className="flex items-center space-x-4 mb-3 sm:mb-4">
                      <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse flex-shrink-0"></div>
                      <span className="text-gray-900 font-bold text-base sm:text-lg">
                        Currently employed at Sky Portugal
                      </span>
                    </div>
                    <p className="text-green-700 font-medium text-sm sm:text-base">
                      Available for select freelance projects and interesting opportunities
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="group relative w-full max-w-none mx-auto">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/50">
                <h3 className="text-xl sm:text-2xl font-black text-gray-900 mb-6 sm:mb-8 flex items-center justify-center sm:justify-start">
                  <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-4"></div>
                  Send a Message
                </h3>
                
                {/* Success/Error Messages */}
                {isSuccess && (
                  <div className="mb-6 p-4 bg-green-100 border border-green-200 rounded-2xl">
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-green-700 font-bold">Message sent successfully!</p>
                        <p className="text-green-600 text-sm">I'll get back to you as soon as possible.</p>
                      </div>
                    </div>
                  </div>
                )}

                {error && (
                  <div className="mb-6 p-4 bg-red-100 border border-red-200 rounded-2xl">
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                      <p className="text-red-700 font-medium">{error}</p>
                    </div>
                  </div>
                )}
                
                <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2 sm:mb-3">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      disabled={isLoading}
                      className="w-full px-4 sm:px-6 py-3 sm:py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-white/70 backdrop-blur-sm font-medium text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2 sm:mb-3">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      disabled={isLoading}
                      className="w-full px-4 sm:px-6 py-3 sm:py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-white/70 backdrop-blur-sm font-medium text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-bold text-gray-700 mb-2 sm:mb-3">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      disabled={isLoading}
                      className="w-full px-4 sm:px-6 py-3 sm:py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-white/70 backdrop-blur-sm font-medium text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="What's this about?"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2 sm:mb-3">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      disabled={isLoading}
                      className="w-full px-4 sm:px-6 py-3 sm:py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-white/70 backdrop-blur-sm font-medium resize-none text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="Tell me about your project or just say hello!"
                      required
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full relative group overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-black py-3 sm:py-4 px-6 sm:px-8 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-base sm:text-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative flex items-center justify-center">
                      {isLoading ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <svg className="w-5 h-5 sm:w-6 sm:h-6 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                          </svg>
                        </>
                      )}
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
