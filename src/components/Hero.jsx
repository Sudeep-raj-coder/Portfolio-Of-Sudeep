export default function Hero() {
  const stats = [
    { value: "5+", label: "PROJECTS BUILT" },
    { value: "8+", label: "TECHNOLOGIES" },
    { value: "3+", label: "MONTHS EXP" },
    { value: "100%", label: "PASSION" },
  ];

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-24 max-w-6xl mx-auto">
      <span className="w-fit border border-cyan-400/40 text-cyan-400 text-xs px-4 py-1 rounded-full mb-6 flex items-center gap-2">
        <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
        FULL-STACK MERN DEVELOPER
      </span>

      <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6">
        Building <span className="text-cyan-400">Real-World</span><br />
        Web Experiences
      </h1>

      <p className="text-gray-400 max-w-xl mb-8">
        Frontend Developer with hands-on experience building full-stack applications
        using MongoDB, Express, React & Node.js. From FinOps dashboards to real-time
        chat apps — I ship things that work.
      </p>

      <div className="flex gap-4 mb-16">
        <a href="#projects" className="bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold px-6 py-3 rounded-lg">
          View Projects ↓
        </a>
        <a
          href="/SudeepCV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-white/20 text-white px-6 py-3 rounded-lg"
        >
          View Resume ↗
        </a>

        <a
          href="/SudeepCV.pdf"
          download="Sudeep_CV.pdf"
          className="border border-cyan-400/40 text-cyan-400 px-6 py-3 rounded-lg"
        >
          Download ↓
        </a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div key={s.label} className="bg-white/5 border border-white/10 rounded-xl py-6 text-center">
            <p className="text-3xl font-extrabold text-cyan-400">{s.value}</p>
            <p className="text-xs text-gray-400 mt-1 tracking-wide">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}