import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Game from "./Game";
import Whitepaper from "./Whitepaper";
import Hero from "./Hero";
import About from "./About";
import Rarity from "./Rarity";
import Roadmap from "./Roadmap";
import Team from "./Team";
import Showcase from "./Showcase";
import Footer from "./Footer";
import MintApp from "./mint/MintApp";
import "./App.scss";

function App() {
  return (
    <div className="container-fluid m-0 p-0 App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div className="container">
                <Hero />
                <About />
                <Rarity />
                <Roadmap />
                <Team />
              </div>
            }
          />
          <Route path="whitepaper" element={<Whitepaper />} />
          <Route path="game" element={<Game />} />
          <Route path="showcase" element={<Showcase />} />
          <Route path="mint" element={<MintApp />} />
        </Routes>
      </BrowserRouter>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
