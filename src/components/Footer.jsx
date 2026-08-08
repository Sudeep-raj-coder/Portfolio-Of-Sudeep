export default function Footer() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 pb-20">
      <div className="bg-white/5 border border-white/10 rounded-2xl text-center py-16">
        <h2 className="text-3xl font-extrabold text-white mb-2">Let's Work Together</h2>
        <p className="text-gray-400 mb-8">Open to internships, freelance projects, and full-time roles.</p>
        <div className="flex justify-center gap-4">
          <a href="https://linkedin.com/in/yourprofile" className="border border-cyan-400/40 text-cyan-400 px-5 py-2 rounded-lg text-sm">
            LinkedIn ↗
          </a>
          <a href="https://github.com/Sudeep-raj-coder" className="border border-cyan-400/40 text-cyan-400 px-5 py-2 rounded-lg text-sm">
            GitHub ↗
          </a>
          <a href="mailto:youremail@gmail.com" className="border border-cyan-400/40 text-cyan-400 px-5 py-2 rounded-lg text-sm">
            Email ↗
          </a>
        </div>
      </div>
      <p className="text-center text-gray-600 text-xs mt-8">
        Built with React + Tailwind · © 2026 Sudeep
      </p>
    </section>
  );
}