const Education = () => {
  return (
    <section id="education" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white"></div>

      <div className="container-width section-padding relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">
              Education & Achievements
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Academic journey in{" "}
              <span className="text-indigo-600 font-semibold">
                Computer Engineering
              </span>{" "}
              with focus on
              <span className="text-blue-600 font-semibold">
                {" "}
                Distributed Systems and Computational Biology
              </span>
              .
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="space-y-12">
            <div className="group relative">
              <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
                  <div className="flex items-center mb-4 lg:mb-0">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mr-6">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 14l9-5-9-5-9 5 9 5z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-black text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
                        Master's in Computer Engineering
                      </h3>
                      <p className="text-xl text-indigo-600 font-bold">
                        Instituto Superior Técnico
                      </p>
                      <p className="text-gray-600 font-medium">
                        Current Grade: 16/20 • Double Major in Distributed
                        Systems & Computational Biology
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="inline-flex items-center bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-full text-lg font-bold shadow">
                      <div className="w-3 h-3 bg-green-300 rounded-full mr-2 animate-pulse"></div>
                      Current
                    </span>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <div className="w-3 h-3 bg-indigo-500 rounded-full mr-3"></div>
                      Areas of Interest
                    </h4>
                    <div className="space-y-3">
                      {[
                        "Master’s Thesis: large-scale trees and networks exploratory analysis and visualization (ongoing)",
                        "Distributed Systems and scalable software architectures",
                        "Computational Biology and phylogenetic analysis",
                        "Cross-major electives aligned with research interests",
                      ].map((area, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-3 p-3 bg-indigo-50/50 rounded-xl"
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
                          <span className="text-gray-700 font-medium">
                            {area}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                      Achievement
                    </h4>
                    <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-2xl p-6 border border-yellow-200">
                      <h5 className="text-lg font-bold text-orange-800 mb-2">
                        🏆 Deloitte Merit Award
                      </h5>
                      <p className="text-orange-700 mb-4 text-sm leading-relaxed">
                        Awarded for best group performance in the Software
                        Architecture course (Apr 2025).
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
                  <div className="flex items-center mb-4 lg:mb-0">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mr-6">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-black text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                        Bachelor's in Computer Engineering
                      </h3>
                      <p className="text-xl text-blue-600 font-bold">
                        Instituto Superior de Engenharia de Lisboa (ISEL)
                      </p>
                      <p className="text-gray-600 font-medium">
                        Final Grade: 14/20 • 180.5 ECTS (EQF Level 6)
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="inline-block bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-full text-lg font-bold shadow">
                      Completed
                    </span>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-2xl p-6 border border-blue-200 text-center">
                    <div className="text-2xl mb-2">🎓</div>
                    <div className="text-blue-800 font-bold text-sm">
                      Final Project
                    </div>
                    <div className="text-blue-700 text-xs">
                      SCAR - Smart Contract Academic Registry
                    </div>
                    <div className="mt-2">
                      <span className="text-lg font-black text-blue-800">
                        18/20
                      </span>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-2xl p-6 border border-green-200 text-center">
                    <div className="text-2xl mb-2">✅</div>
                    <div className="text-green-800 font-bold text-sm">
                      Academic Foundation
                    </div>
                    <div className="text-green-700 text-xs">
                      Strong skills in Computer & Software Engineering
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
