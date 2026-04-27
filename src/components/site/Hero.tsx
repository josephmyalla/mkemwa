import { useEffect, useState } from "react";
import heroImg from "@/assets/hero-camera.jpg";

export function Hero() {
  const [y, setY] = useState(0);
  useEffect(() => {
    const onScroll = () => setY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden grain">
      {/* Parallax background */}
      <div
        className="absolute inset-0 -z-10 will-change-transform"
        style={{ transform: `translate3d(0, ${y * 0.25}px, 0) scale(1.05)` }}
      >
        <img
          src={heroImg}
          alt="Professional cinema camera in dramatic lighting"
          width={1920}
          height={1080}
          className="h-full w-full object-cover animate-fade-in"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-radial-gold opacity-60" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col justify-end pb-24 pt-40 px-6 lg:px-10 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <p className="animate-fade-up inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-red-700 mb-6">
            <span className="h-px w-10 bg-red-700" />
            New Series · 2026
          </p>
          <h1
            className="animate-fade-up text-5xl sm:text-6xl lg:text-8xl font-bold leading-[0.95] tracking-tight"
            style={{ animationDelay: "0.1s" }}
          >
            Capture Perfection.
            <br />
            <span className="text-red-700 italic font-light">Frame</span>{" "}
            Every Detail.
          </h1>
          <p
            className="animate-fade-up mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed"
            style={{ animationDelay: "0.25s" }}
          >
            Engineered for those who see beyond the frame. Cinema-grade sensors,
            uncompromising optics, and the precision professionals trust.
          </p>
          <div
            className="animate-fade-up mt-10 flex flex-wrap items-center gap-4"
            style={{ animationDelay: "0.4s" }}
          >
            <a
              href="#products"
              className="group inline-flex items-center gap-3 rounded-full bg-red-700 px-8 py-4 text-sm font-semibold text-white shadow-gold transition-smooth hover:scale-105 hover:shadow-glow"
            >
              Shop Now
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#highlights"
              className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-4 text-sm font-medium text-foreground/90 backdrop-blur transition-smooth hover:border-red-700 hover:text-gold"
            >
              Explore Cameras
            </a>
          </div>

          {/* Stats strip */}
          <div
            className="animate-fade-up mt-20 grid grid-cols-3 gap-8 max-w-2xl border-t border-border/50 pt-8"
            style={{ animationDelay: "0.55s" }}
          >
            {[
              { v: "8K", l: "RAW Video" },
              { v: "61MP", l: "Full Frame" },
              { v: "−6 EV", l: "Low-light AF" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-3xl lg:text-4xl font-bold text-foreground">
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

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2 text-muted-foreground">
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <span className="h-10 w-px bg-linear-to-b from-red-700 to-transparent animate-float-slow" />
      </div>
    </section>
  );
}
