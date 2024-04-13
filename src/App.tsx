import Intro from "./Intro";
import Portfolio from "./Portfolio";
import Footer from "./Footer";
import Contact from "./Contact";
import Timeline from "./Timeline";
import Navbar from "./NavBar";

function App() {
  return (
    <div className="App bg-cream">
      <Navbar/>
      <Intro />
      <Portfolio />
      <Timeline />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
