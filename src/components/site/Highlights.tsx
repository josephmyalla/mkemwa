import lowlight from "../../assets/feature-lowlight.jpg";
import lens from "../../assets/feature-lens.jpg";

const features = [
  {
    img: lowlight,
    eyebrow: "Low-light mastery",
    title: "See what others can't.",
    body: "ISO sensitivity up to 409,600 and a stacked BSI sensor capture clean, cinematic frames where light barely exists.",
    stats: [
      { v: "409,600", l: "Max ISO" },
      { v: "−6 EV", l: "AF Sensitivity" },
    ],
  },
  {
    img: lens,
    eyebrow: "Optical precision",
    title: "Glass that defines a generation.",
    body: "Aspherical elements and nano-coated optics eliminate flare, distortion, and chromatic aberration — corner to corner.",
    stats: [
      { v: "0.02s", l: "AF Acquisition" },
      { v: "120 fps", l: "Tracking" },
    ],
    reverse: true,
  },
  {
    img: lowlight,
    eyebrow: "Cinema-grade video",
    title: "8K RAW. Internally recorded.",
    body: "Capture 8K 30p or 4K 120p in 16-bit ProRes RAW. Full V-Log, no compromises, no external recorder required.",
    stats: [
      { v: "8K 30p", l: "Internal RAW" },
      { v: "16-bit", l: "Color depth" },
    ],
  },
];

export function Highlights() {
  return (
    <section id="highlights" className="relative py-32 px-6 lg:px-10 space-y-32">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl mb-24">
          <p className="text-xs uppercase tracking-[0.3em] text-red-700 mb-4">
            Engineered details
          </p>
          <h2 className="text-4xl lg:text-6xl font-bold tracking-tight">
            Every pixel <em className="font-light text-red-700 not-italic">earned.</em>
          </h2>
        </div>

        <div className="space-y-32">
          {features.map((f, i) => (
            <div
              key={i}
              className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                f.reverse ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-card group">
                <img
                  src={f.img}
                  alt={f.title}
                  loading="lazy"
                  className="w-full aspect-4/3 object-cover transition-smooth group-hover:scale-105"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-border rounded-2xl pointer-events-none" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-red-700 mb-4">
                  {f.eyebrow}
                </p>
                <h3 className="font-display text-3xl lg:text-5xl font-bold tracking-tight mb-6 leading-tight">
                  {f.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-lg">
                  {f.body}
                </p>
                <div className="grid grid-cols-2 gap-8 max-w-md border-t border-border pt-8">
                  {f.stats.map((s) => (
                    <div key={s.l}>
                      <div className="font-display text-3xl font-bold text-red-700">
                        {s.v}
                      </div>
                      <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                        {s.l}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
