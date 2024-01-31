import React, { useState } from "react";
import "../index.css";

export default function UserInput() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  /**
   * A generic function to handel input value change based on different inputIdentifier.
   * @param inputIdentifier - The first input number.
   * @param newValue - The second input number.
   * @returns an object of userInput.
   */
  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: newValue,
      };
    });
  }

  return (
    <section id="user-input">
      <div className={"input-group"}>
        <p>
          <label> initial Investment</label>
          <input
            id="user-input"
            type="number"
            required
            value={userInput.initialInvestment}
            onChange={(event) =>
              handleChange("initialInvestment", event.target.value)
            }
          />
        </p>
        <p>
          <label>annual Investment </label>
          <input
            id="user-input"
            type="number"
            required
            value={userInput.annualInvestment}
            onChange={(event) =>
              handleChange("annualInvestment", event.target.value)
            }
          />
        </p>
      </div>
      <div className={"input-group"}>
        <p>
          <label>expected Return </label>
          <input
            id="user-input"
            type="number"
            required
            value={userInput.expectedReturn}
            onChange={(event) =>
              handleChange("expectedReturn", event.target.value)
            }
          />
        </p>
        <p>
          <label>duration </label>
          <input
            id="user-input"
            type="number"
            required
            value={userInput.duration}
            onChange={(event) => handleChange("duration", event.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
