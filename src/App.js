import { BrowserRouter, Routes, Route } from "react-router-dom";
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
                <Minting />
                <Team />
              </div>
            }
          />
          <Route path="whitepaper" element={<Whitepaper />} />
          <Route path="game" element={<Whitepaper />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
