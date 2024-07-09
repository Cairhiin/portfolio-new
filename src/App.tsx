import Hero from "./Components/Hero";
import Header from "./Components/Header";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App(): JSX.Element {
  return (
    <div>
      <Hero />
      <Header />
      <main>
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
