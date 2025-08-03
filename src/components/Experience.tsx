import { experiences } from '../data/experience';
import ExperienceCard from './ui/ExperienceCard';

const Experience = () => {
  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-green-50"></div>
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container-width section-padding relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-green-600 to-teal-600 mb-6 animate-gradient-x">
              Professional Experience
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Building expertise through hands-on experience in <span className="text-blue-600 font-semibold">enterprise development</span> 
              and <span className="text-green-600 font-semibold">innovative projects</span>.
            </p>
            <div className="w-28 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-12 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 rounded-full shadow-lg"></div>
            
            {/* Experience Cards */}
            {experiences.map((experience) => (
              <ExperienceCard 
                key={experience.id} 
                experience={experience} 
                timelinePosition={experience.current ? 'current' : 'past'} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
