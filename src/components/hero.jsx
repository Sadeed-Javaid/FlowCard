function Hero() {
  return (
    <section className="bg-paper">
      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-azure">
            Task board, no login required
          </span>
          <h1 className="font-display text-5xl md:text-6xl font-semibold text-ink mt-4 leading-[1.05]">
            Move work forward,
            <br />
            one drag at a time.
          </h1>
          <p className="font-body text-ink/70 text-lg mt-6 max-w-md">
            Write down what needs doing. Drag it to In Progress when you start.
            Drag it to Done when you finish. That's the whole app.
          </p>
          <a
            href="#board"
            className="inline-block mt-8 font-mono text-sm uppercase tracking-wider bg-ink text-paper px-6 py-3 rounded-full hover:opacity-90 transition"
          >
            Start a task ↓
          </a>
        </div>

        <div className="relative h-72 flex items-center justify-center">
          <svg viewBox="0 0 320 260" className="w-full max-w-sm">
            <path
              d="M40 200 C 100 40, 220 40, 280 90"
              fill="none"
              stroke="#17203A"
              strokeOpacity="0.25"
              strokeWidth="2"
              strokeDasharray="6 8"
            />
            <rect x="20" y="180" width="90" height="56" rx="8" fill="#17203A" fillOpacity="0.06" />
            <g transform="translate(230,60) rotate(8)">
              <rect width="100" height="62" rx="10" fill="white" stroke="#17203A" strokeOpacity="0.15" />
              <rect x="14" y="16" width="60" height="8" rx="4" fill="#3E7CB1" />
              <rect x="14" y="32" width="40" height="8" rx="4" fill="#17203A" fillOpacity="0.15" />
            </g>
            <circle cx="280" cy="90" r="5" fill="#E4572E" />
          </svg>
        </div>
      </div>
    </section>
  );
}

export default Hero;