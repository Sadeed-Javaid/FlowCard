const steps = [
  { number: '01', title: 'Add a task', description: 'Type what needs doing and it lands in To Do.', color: '#E3A33E' },
  { number: '02', title: 'Drag when you start', description: 'Pick up the card and drop it in In Progress.', color: '#3E7CB1' },
  { number: '03', title: "Drop when it's finished", description: 'Move it to Done. No checkbox, no ceremony.', color: '#4C9A6A' },
];

function StepIcon({ color, showArrow }) {
  return (
    <svg viewBox="0 0 64 64" className="w-12 h-12">
      <rect x="8" y="10" width="48" height="30" rx="6" fill="white" stroke={color} strokeWidth="2" />
      <rect x="16" y="18" width="28" height="5" rx="2.5" fill={color} fillOpacity="0.35" />
      <rect x="16" y="27" width="18" height="5" rx="2.5" fill={color} fillOpacity="0.2" />
      {showArrow && <path d="M8 50 L56 50" stroke={color} strokeWidth="2" strokeDasharray="4 5" />}
    </svg>
  );
}

function HowItWorks() {
  return (
    <section className="bg-white border-y border-ink/10">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="font-display text-3xl font-semibold text-ink text-center mb-14">
          How it works
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <div key={step.number} className="text-center">
              <div className="flex justify-center mb-4">
                <StepIcon color={step.color} showArrow={index !== 0} />
              </div>
              <span className="font-mono text-xs" style={{ color: step.color }}>{step.number}</span>
              <h3 className="font-display text-xl font-semibold text-ink mt-2">{step.title}</h3>
              <p className="font-body text-ink/60 text-sm mt-2 max-w-xs mx-auto">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;