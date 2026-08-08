export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-xl font-bold text-cyan-400 tracking-wide">
          SUDEEP KUMAR
        </h1>
        <div className="hidden md:flex gap-8 text-gray-300 text-sm font-medium">
          <a href="#about" className="hover:text-cyan-400 transition">About</a>
          <a href="#skills" className="hover:text-cyan-400 transition">Skills</a>
          <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
          <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
        </div>
        <button className="border border-cyan-400 text-cyan-400 text-xs px-4 py-2 rounded-full flex items-center gap-2">
          <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
          OPEN TO WORK
        </button>
      </div>
    </nav>
  );
}