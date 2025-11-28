import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { PainPoints } from "./components/PainPoints";
import { Solutions } from "./components/Solutions";
import { DeepDive } from "./components/DeepDive";
import { HardwareCarousel } from "./components/HardwareCarousel";
import { Authority } from "./components/Authority";
import { LeadForm } from "./components/LeadForm";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <PainPoints />
      <Solutions />
      <DeepDive />
      <HardwareCarousel />
      <Authority />
      <LeadForm />
      <Footer />
    </main>
  );
}
