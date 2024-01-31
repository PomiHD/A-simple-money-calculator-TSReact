import React, { useState } from "react";
import "./App.css";
import "./index.css";
import { ResultTable } from "./Components/ResultTable";
import UserInput from "./Components/UserInput";
import { Header } from "./Components/Header/Header";
import { calculateInvestmentResults } from "./util/investment";
import ErrorDuration from "./Components/ErrorDuration";

function App() {
  const [initialInvestValue, setInitialInvestValue] = useState(0);
  const [annualInvestValue, setAnnualInvestValue] = useState(0);
  const [expectedReturnValue, setExpectedReturnValue] = useState(0);
  const [durationValue, setDurationValue] = useState(0);
  const results = calculateInvestmentResults({
    initialInvestment: Number(initialInvestValue),
    annualInvestment: Number(annualInvestValue),
    expectedReturn: Number(expectedReturnValue),
    duration: Number(durationValue),
  });

  function handleIVestmentChange(event: { target: { value: any } }) {
    setInitialInvestValue(event.target.value);
  }

  function handleAInvestmentChange(event: { target: { value: any } }) {
    setAnnualInvestValue(event.target.value);
  }

  function handleEReturnChange(event: { target: { value: any } }) {
    setExpectedReturnValue(event.target.value);
  }

  function handleDurationChange(event: { target: { value: any } }) {
    setDurationValue(event.target.value);
  }

  function handleDurationError() {
    setDurationValue(0);
  }

  return (
    <>
      <body className={"App"}>
        <Header />
        <UserInput
          initialInvestment={initialInvestValue}
          annualInvestment={annualInvestValue}
          expectedReturn={expectedReturnValue}
          duration={durationValue}
          onEnterIvValue={handleIVestmentChange}
          onEnterAiValue={handleAInvestmentChange}
          onEnterErValue={handleEReturnChange}
          onEnterDurValue={handleDurationChange}
        ></UserInput>
        {durationValue < -1 && (
          <ErrorDuration onShowError={handleDurationError} />
        )}
        <ResultTable results={results}></ResultTable>
      </body>
    </>
  );
}

export default App;
