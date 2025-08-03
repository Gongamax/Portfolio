import type { ExperienceCardProps } from '../../types';
import { experienceGradients } from '../../data/experience';

const ExperienceCard = ({ experience, timelinePosition }: ExperienceCardProps) => {
  const styles = experienceGradients[experience.id as keyof typeof experienceGradients];
  
  return (
    <div className="relative pl-20 md:pl-28 pb-16 last:pb-0">
      {/* Timeline dot */}
      <div className={`absolute left-6 md:left-10 w-8 h-8 bg-gradient-to-r ${styles.bg} rounded-full border-4 border-white shadow-2xl ${timelinePosition === 'current' ? 'animate-pulse' : ''}`}></div>
      
      <div className={`group bg-white/90 backdrop-blur-sm border-2 ${styles.border} rounded-3xl p-8 shadow-2xl ${styles.hover} transition-all duration-500 transform hover:-translate-y-2`}>
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
          <div>
            <h3 className={`text-2xl md:text-3xl font-black text-gray-900 mb-2 group-hover:${styles.text} transition-colors duration-300`}>
              {experience.title}
            </h3>
            <p className={`text-xl ${styles.text} font-bold flex items-center`}>
              {experience.type === 'apprentice' ? (
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              )}
              {experience.company}
            </p>
          </div>
          <div className="mt-4 lg:mt-0">
            <span className={`inline-flex items-center bg-gradient-to-r ${styles.bg} text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg`}>
              {experience.current && (
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              )}
              {experience.period} {experience.current && '(Current)'}
            </span>
          </div>
        </div>
        
        {/* Description */}
        <p className="text-gray-700 mb-6 leading-relaxed text-lg">
          {experience.description}
        </p>
        
        {/* Responsibilities */}
        <div className="mb-6">
          <h4 className="font-bold text-gray-900 mb-4 text-lg flex items-center">
            <div className={`w-3 h-3 ${styles.bg.includes('blue') ? 'bg-blue-500' : 'bg-green-500'} rounded-full mr-3`}></div>
            {experience.type === 'apprentice' ? 'Key Responsibilities' : 'Key Achievements'}
          </h4>
          <div className="grid md:grid-cols-2 gap-4">
            {experience.responsibilities.map((item, index) => (
              <div key={index} className={`flex items-start space-x-3 p-3 ${styles.bg.includes('blue') ? 'bg-blue-50/50' : 'bg-green-50/50'} rounded-xl`}>
                <div className={`w-2 h-2 bg-gradient-to-r ${styles.bg} rounded-full mt-2 flex-shrink-0`}></div>
                <span className="text-gray-700 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-3">
          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className={`px-4 py-2 ${styles.bg.includes('blue') ? 'bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 border-blue-200 hover:from-blue-200 hover:to-purple-200' : 'bg-gradient-to-r from-green-100 to-teal-100 text-green-700 border-green-200 hover:from-green-200 hover:to-teal-200'} rounded-full text-sm font-bold border transition-all duration-300`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
