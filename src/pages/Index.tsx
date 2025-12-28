import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Rakesh </title>
        <meta
          name="description"
          content="Portfolio of Rakesh  Frontend Developer."
        />
        <meta name="keywords" content="web developer, frontend developer, UI/UX designer, React, TypeScript, portfolio, React Native , HTML ,CSS" />
      </Helmet>

      <main className="min-h-screen bg-background">
        <Navigation />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default Index;
