import { projects } from '../data/projects';
import AnimatedBackground from './ui/AnimatedBackground';
import ProjectCard from './ui/ProjectCard';

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <AnimatedBackground />

      <div className="container-width section-padding relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 mb-6 animate-gradient-x">
              Featured Projects
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
              A showcase of my recent work, from <span className="text-purple-600 font-semibold">blockchain research</span> to 
              <span className="text-blue-600 font-semibold"> professional client projects</span>, demonstrating technical excellence 
              and innovative solutions.
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mt-6"></div>
          </div>
          
          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          
          {/* Call to Action */}
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Interested in seeing more of my work or discussing a project?
            </p>
            <a
              href="#contact"
              className="btn-primary"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
