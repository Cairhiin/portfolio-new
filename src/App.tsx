import Hero from "./Components/Hero";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "./App.css";

function App(): JSX.Element {
  return (
    <div id="root">
      <Header />
      <main>
        <Hero />
        <Projects />
        <Skills />
      </main>
      <Footer />
    </div>
  );
}

export default App;
