import React from "react";
import { Header } from "./components/Header";
import { Title } from "./components/Title";
import { MortgageResult } from "./components/MortgageResult";
import { Banks } from "./components/Banks";
import { Loader } from "./components/Loader";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div className="Wrapper">
        <div className="body-main__upper-components">
          <Header />
          <Title />
          <MortgageResult />
          <Banks />
          <Loader />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
