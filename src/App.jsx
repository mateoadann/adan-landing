import { Header, Hero, Marquee } from "./components/Hero";
import { SectionValor, SectionProceso, SectionClientes, SectionContacto, Footer } from "./components/Sections";

export default function App() {
  return (
    <>
      <div className="bg-layer bg-glow" />
      <div className="bg-layer bg-grid" />
      <div className="bg-layer bg-scan" />
      <div className="bg-layer bg-noise" />
      <div className="bg-layer bg-vignette" />

      <div style={{ position: "relative", zIndex: 1 }}>
        <Header />
        <main>
          <Hero />
          <Marquee />
          <SectionValor />
          <SectionProceso />
          <SectionClientes />
          <SectionContacto />
        </main>
        <Footer />
      </div>
    </>
  );
}
