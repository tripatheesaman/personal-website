import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Home from "./Home";

const Main = () => {
  const content = (
    <main>
      <Home />
      <About />
      <Projects />
      <Contact />
    </main>
  );
  return content;
};

export default Main;
