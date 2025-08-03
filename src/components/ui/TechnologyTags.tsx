import type { TechnologyTagProps } from '../../types';

const TechnologyTags = ({ technologies, maxVisible = 4 }: TechnologyTagProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      {technologies.slice(0, maxVisible).map((tech) => (
        <span
          key={tech}
          className="px-3 py-1 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 rounded-full text-sm font-semibold border border-purple-200 hover:from-purple-200 hover:to-blue-200 transition-all duration-300"
        >
          {tech}
        </span>
      ))}
    </div>
  );
};

export default TechnologyTags;
