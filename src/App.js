import React from "react";
import { Header } from "./conponents/Header";
import { Title } from "./conponents/Title";
import { MortgageResult } from "./conponents/MortgageResult";
import { Banks } from "./conponents/Banks";
import { Loader } from "./conponents/Loader";
import { Footer } from "./conponents/Footer";

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
