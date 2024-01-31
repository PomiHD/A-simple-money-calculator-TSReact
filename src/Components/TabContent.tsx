import React from "react";
import "../index.css";

export default function TabContent({
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration,
  onEnterIvValue,
  onEnterAiValue,
  onEnterErValue,
  onEnterDurValue,
}) {
  let iv = (
    <input
      id="user-input"
      type="number"
      required
      value={initialInvestment}
      onChange={onEnterIvValue}
    />
  );

  let ai = (
    <input
      id="user-input"
      type="number"
      required
      value={annualInvestment}
      onChange={onEnterAiValue}
    />
  );
  let er = (
    <input
      id="user-input"
      type="number"
      required
      value={expectedReturn}
      onChange={onEnterErValue}
    />
  );
  let D = (
    <input
      id="user-input"
      type="number"
      required
      value={duration}
      onChange={onEnterDurValue}
    />
  );

  // Alert user if duration is less than or equal to -1

  return (
    <>
      <ul className={"input-group"}>
        <li>
          <label id="user-input"> initial Investment</label>
          {iv}
        </li>
        <li>
          <label id="user-input">annual Investment </label>
          {ai}
        </li>
        <li>
          <label id="user-input">expected Return </label>
          {er}
        </li>
        <li>
          <label id="user-input">duration </label>
          {D}
        </li>
        <li></li>
      </ul>
    </>
  );
}
