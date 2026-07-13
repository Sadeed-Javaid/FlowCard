function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-paper/90 backdrop-blur border-b border-ink/10">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <span className="font-display text-xl font-semibold text-ink tracking-tight">
          Flowcard
        </span>
        <a
          href="#board"
          className="font-mono text-xs uppercase tracking-wider bg-coral text-white px-4 py-2 rounded-full hover:opacity-90 transition"
        >
          Open Board
        </a>
      </div>
    </nav>
  );
}

export default Navbar;