import "./App.css";
import About from "./components/About";
import Contacts from "./components/Contacts";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
