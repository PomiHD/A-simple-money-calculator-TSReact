import React, { useState } from "react";
import "../index.css";

export default function UserInput({ onChange, userInput }) {
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
              onChange("initialInvestment", event.target.value)
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
              onChange("annualInvestment", event.target.value)
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
            onChange={(event) => onChange("expectedReturn", event.target.value)}
          />
        </p>
        <p>
          <label>duration </label>
          <input
            id="user-input"
            type="number"
            required
            value={userInput.duration}
            onChange={(event) => onChange("duration", event.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
