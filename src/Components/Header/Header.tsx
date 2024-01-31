import React from "react";

export function Header() {
  return (
    <>
      <img
        id={"header"}
        className={"App-logo"}
        src={"investment-calculator-logo.png"}
        alt={"logo"}
      />
      <h1 id={"header"} className={"App-header"}>
        React Investment Calculator
      </h1>
    </>
  );
}
