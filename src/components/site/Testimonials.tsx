const reviews = [
  {
    quote:
      "The dynamic range is unreal. I shot a full editorial in candlelight and didn't lose a single detail in the highlights.",
    name: "Saidi Navalonge",
    role: "Editorial Photographer · DSTV",
    initials: "SN",
  },
  {
    quote:
      "Switching to Lumen Cine X cut our post-production color work in half. The internal RAW pipeline is a game-changer.",
    name: "Manifield Michungwani",
    role: "Director of Photography",
    initials: "MM",
  },
  {
    quote:
      "Autofocus that just works — even tracking dancers in low light. It feels like the camera reads my mind.",
    name: "Fagason Mboma",
    role: "Wedding & cooporates",
    initials: "FM",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-32 px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-red-700 mb-4">
            Trusted by professionals
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
            Words from the field.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="relative rounded-2xl border border-border bg-card p-8 transition-smooth hover:border-red-700/40 hover:-translate-y-1"
            >
              <div className="text-red-700 mb-6 font-display text-4xl leading-none">"</div>
              <blockquote className="text-foreground/90 leading-relaxed mb-8">
                {r.quote}
              </blockquote>
              <figcaption className="flex items-center gap-3 pt-6 border-t border-border">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-red-700 text-white font-display font-semibold text-sm">
                  {r.initials}
                </span>
                <div>
                  <div className="font-medium text-sm">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
