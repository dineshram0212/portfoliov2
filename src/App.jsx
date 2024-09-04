import "./App.css";
import Landingpage from "./components/Landingpage";
import About from "./components/About";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="w-screen h-screen no-scrollbar">
      <Landingpage />
      <About />
      <Profile />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
