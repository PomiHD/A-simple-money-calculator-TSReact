import React from "react";
import "../index.css";

export default function UserInput({
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration,
  onEnterIvValue,
  onEnterAiValue,
  onEnterErValue,
  onEnterDurValue,
}) {
  return (
    <section id="user-input">
      <div className={"input-group"}>
        <p>
          <label> initial Investment</label>
          <input
            id="user-input"
            type="number"
            required
            value={initialInvestment}
            onChange={onEnterIvValue}
          />
        </p>
        <p>
          <label>annual Investment </label>
          <input
            id="user-input"
            type="number"
            required
            value={annualInvestment}
            onChange={onEnterAiValue}
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
            value={expectedReturn}
            onChange={onEnterErValue}
          />
        </p>
        <p>
          <label>duration </label>
          <input
            id="user-input"
            type="number"
            required
            value={duration}
            onChange={onEnterDurValue}
          />
        </p>
      </div>
    </section>
  );
}
