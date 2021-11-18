import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Rarity from "./Rarity";
import Minting from "./Minting";
import "./App.scss";
import Footer from "./Footer";
import Team from "./Team";

function App() {
  return (
    <div className="container-fluid m-0 App">
      <Header />
      <div className="container">
        <Hero />
        <About />
        <Rarity />
        <Minting />
        <Team />
      </div>
      <Footer />
    </div>
  );
}

export default App;
