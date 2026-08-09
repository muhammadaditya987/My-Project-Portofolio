import Navbar from "./components/layout/Navbar"
import Footer from "./components/common/Footer";

import Hero from "./sections/Hero"
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import About from "./sections/About";
import Contact from "./sections/Contact";

import FloatingCursor from "./components/effects/FloatingCursor";
import SmoothScroll from "./components/effects/SmoothScroll";

const App = () => {
  return (
    <>
    <div className=" min-h-screen bg-black text-white overflow-x-hidden ">
      <SmoothScroll />
      <FloatingCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
    </>
  )
}

export default App
