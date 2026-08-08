export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-extrabold text-white mb-2">About Me</h2>
      <p className="text-gray-400 mb-8">A little about my journey</p>

      <div className="bg-white/5 border border-white/10 rounded-xl p-8">
        <p className="text-gray-300 leading-relaxed">
          I'm a recent B.Tech CSE graduate, passionate about building full-stack
          web applications. During my internship at Habilelabs, I worked on a
          FinOps dashboard using React, Vite, FastAPI, and Azure AD authentication —
          gaining hands-on experience with real-world production systems.
        </p>
        <p className="text-gray-300 leading-relaxed mt-4">
          Currently, I'm deepening my skills in the MERN stack (MongoDB, Express,
          React, Node.js) by building projects like real-time chat apps, news
          aggregators, and CRUD applications. I love turning ideas into working
          products.
        </p>
      </div>
    </section>
  );
}