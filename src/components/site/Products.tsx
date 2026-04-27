import cam1 from "../../assets/camera-1.jpg";
import cam2 from "../../assets/camera-2.jpg";
import cam3 from "../../assets/camera-3.jpg";

const products = [
  {
    img: cam1,
    name: "Lumen Pro M1",
    tag: "Mirrorless · Flagship",
    specs: ["61 MP Full-Frame", "8K 30p RAW", "Dual CFexpress"],
    price: "Sh 2,500,000",
  },
  {
    img: cam2,
    name: "Lumen DSR Mark V",
    tag: "DSLR · Studio",
    specs: ["50 MP Sensor", "4K 120p", "EF/RF Mount"],
    price: "Sh 2,500,000",
  },
  {
    img: cam3,
    name: "Lumen Cine X",
    tag: "Cinema · Pro Video",
    specs: ["Super 35 Sensor", "ProRes 4444", "16-stop DR"],
    price: "Sh 3,500,000",
  },
];

export function Products() {
  return (
    <section id="products" className="relative py-32 px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-red-700 mb-4">
              Featured collection
            </p>
            <h2 className="text-4xl lg:text-6xl font-bold tracking-tight max-w-2xl">
              Built for those who <em className="font-light text-red-700 not-italic">demand more.</em>
            </h2>
          </div>
          <a
            href="#"
            className="text-sm text-muted-foreground hover:text-gold transition-colors inline-flex items-center gap-2"
          >
            View all cameras →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <article
              key={p.name}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-smooth hover:border-red-700/40 hover:-translate-y-1"
            >
              <div className="relative aspect-square overflow-hidden bg-black">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  width={800}
                  height={800}
                  className="h-full w-full object-cover transition-smooth group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-card via-transparent to-transparent" />
                <span className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.25em] text-red-700 border border-red-700/40 rounded-full px-3 py-1 backdrop-blur">
                  {p.tag}
                </span>
              </div>
              <div className="p-7">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="font-display text-2xl font-semibold leading-tight">
                    {p.name}
                  </h3>
                  <span className="font-display text-xl font-extrabold text-red-100/80 whitespace-nowrap">
                    {p.price}
                  </span>
                </div>
                <ul className="space-y-1.5 text-sm text-muted-foreground mb-6">
                  {p.specs.map((s) => (
                    <li key={s} className="flex items-center gap-2">
                      <span className="h-px w-3 bg-red-700/60" />
                      {s}
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-medium text-red-700 border-b border-border pb-1 transition-colors group-hover:text-red-600 group-hover:border-red-700"
                >
                  View Details <span>→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
