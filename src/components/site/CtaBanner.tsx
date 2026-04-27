export function CtaBanner() {
  return (
    <section className="relative px-6 lg:px-10 py-20">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl border border-border bg-card p-14 lg:p-24 text-center grain">
        <div className="absolute inset-0 bg-radial-gold opacity-80 pointer-events-none" />
        <div className="relative z-10">
          <p className="text-xs uppercase tracking-[0.3em] text-red-700 mb-6">
            Limited 2026 release
          </p>
          <h2 className="font-display text-4xl lg:text-7xl font-bold tracking-tight max-w-3xl mx-auto leading-none">
            Upgrade your
            <br />
            <span className="text-red-700 italic font-light">vision today.</span>
          </h2>
          <p className="mt-8 text-muted-foreground max-w-xl mx-auto text-lg">
            Free expedited shipping and a complimentary 5-year pro warranty on all
            flagship bodies through May.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#products"
              className="group inline-flex items-center gap-3 rounded-full bg-red-700 px-10 py-4 text-sm font-semibold text-gold-foreground shadow-gold transition-smooth hover:scale-105"
            >
              Browse Collection
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full border border-border px-10 py-4 text-sm font-medium text-foreground/90 transition-smooth hover:border-red-700 hover:text-red-700"
            >
              Talk to a specialist
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
