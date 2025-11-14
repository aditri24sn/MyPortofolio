import { useState } from "react";
import Navbar from "./UI/Navbar";
import MobileMenu from "./UI/MobileMenu";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Footer from "./UI/Footer";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main className="pt-24 pb-16 space-y-32">
        <Home />
        <About />
        <Project />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;