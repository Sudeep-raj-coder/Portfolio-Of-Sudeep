import { techStack } from "../data/techstack";

export default function TechStack() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-extrabold text-white mb-2">Tech Stack</h2>
      <p className="text-gray-400 mb-10">Technologies I work with regularly</p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {techStack.map((tech) => (
          <div key={tech.name} className="bg-white/5 border border-white/10 rounded-xl p-5 text-center">
            <p className="text-white font-medium mb-3">{tech.name}</p>
            <div className="h-1 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-cyan-400"
                style={{ width: `${tech.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}