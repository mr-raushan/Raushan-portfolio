import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="bg-[#050505] text-white min-h-screen">
      <Navbar />
      <main className="py-16 md:px-12">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <ScrollToTop />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
