import React from "react";
import "../../index.css";
export function Header() {
  return (
    <header>
      <img
        src={"investment-calculator-logo.png"}
        alt={"logo showing a money bag"}
        style={{ width: "100px", height: "auto" }}
      />
      <h1>React Investment Calculator</h1>
    </header>
  );
}
