import React, { useState } from "react";
import "./App.css";
import "./index.css";
import { ResultTable } from "./Components/ResultTable";
import UserInput from "./Components/UserInput";
import { Header } from "./Components/Header/Header";

export type UserInputProps = {
  initialInvestment: number;
  annualInvestment: number;
  expectedReturn: number;
  duration: number;
};

function App() {
  const [userInput, setUserInput] = useState<UserInputProps>({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(inputIdentifier: string, newValue: string | number) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue, // FORCE CONVERT string to number: add "+" to PARSE string to NUMBER
      };
    });
  }

  const isDurationValid = userInput.duration >= 1;
  return (
    <>
      <body className={"App"}>
        <Header />
        <UserInput userInput={userInput} onChange={handleChange} />
        {!isDurationValid && (
          <p className="center">
            <strong>Opps!</strong> The duration should not be less than -1;
          </p>
        )}
        {isDurationValid ? (
          <ResultTable
            annualInvestment={userInput.annualInvestment}
            duration={userInput.duration}
            expectedReturn={userInput.expectedReturn}
            initialInvestment={userInput.initialInvestment}
          ></ResultTable>
        ) : (
          ""
        )}
      </body>
    </>
  );
}

export default App;
