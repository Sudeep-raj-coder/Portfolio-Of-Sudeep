import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-extrabold text-white mb-2">Projects</h2>
      <p className="text-gray-400 mb-10">Things I've built that I'm proud of</p>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p) => (
          <div key={p.title} className="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col">
            <div className="flex flex-wrap gap-2 mb-4">
              {p.tags.map((tag) => (
                <span key={tag} className="text-xs bg-cyan-400/10 text-cyan-400 px-2 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="text-white text-lg font-bold mb-2">{p.title}</h3>
            <p className="text-gray-400 text-sm mb-6 flex-1">{p.description}</p>
            <div className="flex gap-3">
              <a href={p.github} target="_blank" className="text-xs border border-cyan-400/40 text-cyan-400 px-3 py-1.5 rounded">
                GitHub ↗
              </a>
              <a href={p.live} target="_blank" className="text-xs border border-cyan-400/40 text-cyan-400 px-3 py-1.5 rounded">
                Live ↗
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}