import React from "react";
import { calculateInvestmentResults, formatter } from "../util/investment";

export function ResultTable({ userInput }) {
  const results = calculateInvestmentResults(userInput);
  const initialInvestment =
    results[0].valueEndOfYear -
    results[0].interest -
    results[0].annualInvestment;
  console.log(results);
  return (
    <table id="result">
      <thead>
        <tr>
          <td>Year</td>
          <td>Investment Value</td>
          <td>Interest (Year)</td>
          <td>Total Interest</td>
          <td>Invest Capital</td>
        </tr>
      </thead>
      <tbody>
        {results.map((result) => {
          const totalInterest =
            result.valueEndOfYear -
            initialInvestment -
            result.annualInvestment * result.year;
          const totalCapitalInvested = result.valueEndOfYear - totalInterest;
          return (
            <tr key={result.year}>
              <td>{result.year} </td>
              <td>{formatter.format(result.valueEndOfYear)}</td>
              <td>{formatter.format(result.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalCapitalInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
