import { experiences } from "../data/experience";
import ExperienceCard from "./ui/ExperienceCard";

const Experience = () => {
  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white"></div>

      <div className="container-width section-padding relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">
              Professional Experience
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Building expertise through hands-on experience in{" "}
              <span className="text-blue-600 font-semibold">
                enterprise development
              </span>
              and{" "}
              <span className="text-green-600 font-semibold">
                innovative projects
              </span>
              .
            </p>
            <div className="w-28 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-12 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-indigo-500 to-emerald-500 rounded-full shadow"></div>

            {/* Experience Cards */}
            {experiences.map((experience) => (
              <ExperienceCard
                key={experience.id}
                experience={experience}
                timelinePosition={experience.current ? "current" : "past"}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
