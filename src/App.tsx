import Hero from "./Components/Hero";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "./App.css";

function App(): JSX.Element {
  return (
    <div>
      <Hero />
      <Header />
      <main>
        <Projects />
        <Skills />
      </main>
      <Footer />
    </div>
  );
}

export default App;
