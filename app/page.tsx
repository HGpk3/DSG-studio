import {
  Cases,
  FAQ,
  FinalCTA,
  Footer,
  Header,
  Hero,
  Process,
  Services,
  StatsStrip,
  TechApproach,
} from "./components/sections";

export default function Home() {
  return (
    <div className="bg-[color:var(--bg)] text-[color:var(--text)]">
      <Header />
      <main>
        <Hero />
        <StatsStrip />
        <Services />
        <Cases />
        <Process />
        <TechApproach />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
