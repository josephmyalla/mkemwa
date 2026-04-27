const items = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7">
        <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.8 5.8 21.3l2.4-7.4L2 9.4h7.6L12 2z" />
      </svg>
    ),
    title: "Pro-Grade Quality",
    body: "Hand-assembled in Japan with weather-sealed magnesium alloy bodies built to last decades.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7">
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="4" />
        <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
      </svg>
    ),
    title: "Advanced Imaging",
    body: "Stacked BSI sensors and 5th-gen processors deliver true-to-life color and astonishing detail.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7">
        <path d="M20 7L9 18l-5-5" />
      </svg>
    ),
    title: "Trusted by Experts",
    body: "Used by award-winning photographers, cinematographers, and major studios worldwide.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "5-Year Warranty",
    body: "Lifetime sensor cleaning and dedicated pro-line support, anytime, anywhere.",
  },
];

export function WhyUs() {
  return (
    <section id="why" className="relative py-32 px-6 lg:px-10 border-y border-border">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <p className="text-xs uppercase tracking-[0.3em] text-red-700 mb-4">Why me Mkemwa</p>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
            Precision is not optional.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden">
          {items.map((it) => (
            <div
              key={it.title}
              className="group bg-background p-10 transition-smooth hover:bg-card"
            >
              <div className="text-red-700 mb-6 transition-transform group-hover:scale-110 origin-left">
                {it.icon}
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">{it.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
