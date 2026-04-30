import Header from "../components/Header";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import About from "../components/About";
import TechStack from "../components/TechStack";
import Work from "../components/Work";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Marquee />
      <About />
      <TechStack />
      <Work />
      <Contact />
      <Footer />
    </>
  );
}
