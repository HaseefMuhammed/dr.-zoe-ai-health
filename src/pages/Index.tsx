import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { Stats } from "@/components/Stats";
import { Gallery } from "@/components/Gallery";
import { Team } from "@/components/Team";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <Features />
      <HowItWorks />
      <Gallery />
      <Team />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
