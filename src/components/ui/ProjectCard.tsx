import type { Project } from '../../types';
import { projectGradients } from '../../data/projects';
import StatusBadge from '../ui/StatusBadge';
import TechnologyTags from '../ui/TechnologyTags';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const gradientClass = projectGradients[project.id as keyof typeof projectGradients];

  const renderProjectHeader = () => {
    if (project.videoDemo) {
      return (
        <div className="text-center group-hover:scale-110 transition-transform duration-500">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto backdrop-blur-sm border border-white/30 group-hover:bg-white/30 transition-all duration-300">
            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
              <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
            </svg>
          </div>
          <span className="text-lg font-bold">Watch Demo</span>
        </div>
      );
    }

    return (
      <div className="text-center group-hover:scale-110 transition-transform duration-500">
        <div className="text-3xl font-black mb-3">{project.title}</div>
        <div className="text-lg opacity-90 font-medium">{project.type}</div>
        {project.grade && (
          <div className="mt-3 inline-block bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full text-sm font-bold">
            Grade: {project.grade}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="group bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 overflow-hidden hover:shadow-purple-500/20 transition-all duration-500 transform hover:-translate-y-3 hover:scale-105">
      {/* Project Header */}
      <div className={`h-64 relative overflow-hidden bg-gradient-to-br ${gradientClass}`}>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 h-full flex items-center justify-center text-white p-6">
          {renderProjectHeader()}
        </div>
        
        {/* Status Badge */}
        <div className="absolute top-4 right-4 flex space-x-2">
          <StatusBadge status={project.status} />
        </div>
      </div>
      
      {/* Project Content */}
      <div className="p-8">
        {/* Title and Description */}
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-gray-600 leading-relaxed text-base">
            {project.description}
          </p>
        </div>
        
        {/* Key Features */}
        <div className="mb-6">
          <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
            <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
            Key Features
          </h4>
          <ul className="space-y-2">
            {project.features.slice(0, 3).map((feature, index) => (
              <li key={index} className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-sm text-gray-700 leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Technologies */}
        <div className="mb-6">
          <TechnologyTags technologies={project.technologies} />
        </div>
        
        {/* Action Buttons */}
        <div className="flex gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold px-6 py-3 rounded-2xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
            >
              <span>View Live</span>
              <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
          
          {project.videoDemo && project.demoVideoUrl && (
            <a
              href={project.demoVideoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn inline-flex items-center space-x-2 bg-gradient-to-r from-red-600 to-pink-600 text-white font-bold px-6 py-3 rounded-2xl hover:from-red-700 hover:to-pink-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
              </svg>
              <span>Watch Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
