import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "./components/site/Navbar";
import { Hero } from "./components/site/Hero";
import { Products } from "./components/site/Products";
import { WhyUs } from "./components/site/WhyUs";
import { Highlights } from "./components/site/Highlights";
import { Testimonials } from "./components/site/Testimonials";
import { CtaBanner } from "./components/site/CtaBanner";
import { Footer } from "./components/site/Footer";

export const Route = createFileRoute("/")({
  
  head: () => ({
    meta: [
      { title: "Lumen — Professional Cameras & Cinema Optics" },
      {
        name: "description",
        content:
          "Cinema-grade mirrorless, DSLR, and cinema cameras engineered for professional photographers and filmmakers. 8K RAW, full-frame precision, trusted by experts.",
      },
      { property: "og:title", content: "Lumen — Capture Perfection. Frame Every Detail." },
      {
        property: "og:description",
        content:
          "Premium professional cameras and lenses. 8K RAW video, 61MP full-frame sensors, and uncompromising optics.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
});



export default function App() {
  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Products />
        <WhyUs />
        <Highlights />
        <Testimonials />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}
