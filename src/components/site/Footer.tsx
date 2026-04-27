import { useState } from "react";
import Logo from "../Logo"
export function Footer() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const groups = [
    {
      title: "Shop",
      links: ["Mirrorless", "DSLR", "Cinema", "Lenses", "Accessories"],
    },
    {
      title: "Support",
      links: ["Contact", "Warranty", "Repair Center", "Firmware", "FAQ"],
    },
    {
      title: "Company",
      links: ["About", "Press", "Careers", "Sustainability", "Stories"],
    },
  ];

  return (
    <footer className="relative px-6 lg:px-10 pt-24 pb-10 border-t border-border">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-12 pb-16 border-b border-border">
          <div className="lg:col-span-5">
            <a href="#" className="flex items-center gap-2 mb-6">
             <Logo/>
            </a>
            <p className="text-muted-foreground max-w-sm mb-8 leading-relaxed">
              Cinema-grade cameras and optics, engineered for those who frame the
              world with intention.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (email) setDone(true);
              }}
              className="flex max-w-md gap-2"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="flex-1 rounded-full bg-input border border-border px-5 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:border-red-700 transition-colors"
              />
              <button
                type="submit"
                className="rounded-full bg-red-700 px-6 py-3 text-sm font-semibold text-gold-foreground transition-smooth hover:scale-105"
              >
                {done ? "✓ Subscribed" : "Notify Me"}
              </button>
            </form>
          </div>

          {groups.map((g) => (
            <div key={g.title} className="lg:col-span-2">
              <h4 className="font-display text-sm uppercase tracking-widest text-red-700 mb-5">
                {g.title}
              </h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {g.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="hover:text-foreground transition-colors">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="lg:col-span-1">
            <h4 className="font-display text-sm uppercase tracking-widest text-red-700 mb-5">
              Follow
            </h4>
            <ul className="flex lg:flex-col gap-4 text-sm text-muted-foreground">
              {["IG", "YT"].map((s) => (
                <li key={s}>
                  <a
                    href="#"
                    className="grid h-9 w-9 place-items-center rounded-full border border-border hover:border-red-700/40 hover:text-red-700 transition-colors text-xs"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 text-xs text-muted-foreground">
          <p>© 2026 Camera used Tz. All rights reserved.</p>
    
            <p className="text-2xl">Call & Whatsapp:{"  "}<span className="text-2xl">+255 0625 805 055</span></p>
           
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
