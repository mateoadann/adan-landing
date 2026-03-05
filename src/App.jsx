import Header from "./components/Header";
import Hero from "./components/Hero";
import MarqueeBar from "./components/MarqueeBar";
import SectionValor from "./components/SectionValor";
import SectionProceso from "./components/SectionProceso";
import SectionClientes from "./components/SectionClientes";
import SectionContacto from "./components/SectionContacto";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen bg-ink text-cream font-body">
      {/* Film grain overlay */}
      <div className="grain" />

      <Header />
      <main className="relative">
        <Hero />
        <MarqueeBar />
        <SectionValor />
        <SectionProceso />
        <SectionClientes />
        <SectionContacto />
      </main>
      <Footer />
    </div>
  );
}
