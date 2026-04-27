import { useEffect, useState } from "react";
import Logo from "../Logo"
const links = [
  { label: "Cameras", href: "#products" },
  { label: "Features", href: "#highlights" },
  { label: "Why Us", href: "#why" },
  { label: "Reviews", href: "#testimonials" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        scrolled
          ? "backdrop-blur-xl bg-background/70 border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="#" className="flex items-center gap-2 group">
          <Logo/>
        </a>

        <ul className="hidden md:flex items-center gap-10 text-sm text-muted-foreground">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative transition-colors hover:text-foreground after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="#products"
            className="rounded-full bg-red-700 px-5 py-2 text-sm font-medium text-gold-foreground shadow-gold transition-smooth hover:scale-105"
          >
            Shop Now
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-foreground"
          aria-label="Menu"
        >
          <span className="block h-px w-6 bg-current mb-1.5" />
          <span className="block h-px w-6 bg-current mb-1.5" />
          <span className="block h-px w-4 bg-current ml-auto" />
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <ul className="flex flex-col px-6 py-4 gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-1 text-muted-foreground hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <a
              href="#products"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-red-700 px-5 py-2.5 text-center text-sm font-medium text-gold-foreground"
            >
              Shop Now
            </a>
          </ul>
        </div>
      )}
    </header>
  );
}
