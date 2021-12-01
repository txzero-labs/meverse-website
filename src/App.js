import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Whitepaper from "./Whitepaper";
import Rarity from "./Rarity";
import Minting from "./Minting";
import Footer from "./Footer";
import Team from "./Team";
import "./App.scss";

function App() {
  return (
    <div className="container-fluid m-0 App">
      <Header />
      <div className="container">
        <Hero />
        <About />
        <Rarity />
        <Minting />
        <Whitepaper />
        <Team />
      </div>
      <Footer />
    </div>
  );
}

export default App;
