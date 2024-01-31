import React, { useState } from "react";
import "./App.css";
import "./index.css";
import { ResultTable } from "./Components/ResultTable";
import UserInput from "./Components/UserInput";
import { Header } from "./Components/Header/Header";
import { calculateInvestmentResults } from "./util/investment";
import ErrorDuration from "./Components/ErrorDuration";

function App() {
  const results = calculateInvestmentResults({
    initialInvestment: Number(initialInvestValue),
    annualInvestment: Number(annualInvestValue),
    expectedReturn: Number(expectedReturnValue),
    duration: Number(durationValue),
  });

  return (
    <>
      <body className={"App"}>
        <Header />
        <UserInput />

        <ResultTable results={results}></ResultTable>
      </body>
    </>
  );
}

export default App;
