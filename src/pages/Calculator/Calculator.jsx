import React, { useState, useEffect } from "react";

import "./Calculator.css";

function App() {
  const [currentValue, setCurrentValue] = useState("");
  const [firstOperand, setFirstOperand] = useState("");
  const [secondOperand, setSecondOperand] = useState("");
  const [operator, setOperator] = useState("");

  const addToDisplay = (value) => {
    setCurrentValue((prev) => (prev === "" || prev === "0" ? value : prev + value));
  };

  const calculate = () => {
    if (operator === "-") {
      setCurrentValue(parseFloat(firstOperand) - parseFloat(secondOperand));
    } else if (operator === "+") {
      setCurrentValue(parseFloat(firstOperand) + parseFloat(secondOperand));
    }
  };

  const clearDisplay = () => {
    setCurrentValue("0");
    setSecondOperand("");
  };

  const handlePlus = () => {
    setFirstOperand(currentValue);
    setCurrentValue("");
    setOperator("+");
  };

  const handleMinus = () => {
    setFirstOperand(currentValue);
    setCurrentValue("");
    setOperator("-");
  };

  const checkKeyboard = (e) => {
    if (e.key === "Escape") clearDisplay();
    else if (e.key === "Enter") calculate();
    else if (e.key === "+") handlePlus();
    else if (e.key === "-") handleMinus();
    else if (e.key >= "0" && e.key <= "9") addToDisplay(e.key);
  };

  useEffect(() => {
    document.addEventListener("keydown", checkKeyboard);
    return () => {
      document.removeEventListener("keydown", checkKeyboard);
    };
  }, []);

  return (
    <div className="calculator-container">
      <div className="calculator-wrapper">
        <div className="calc-display">
          <span className="calc-display-text">{currentValue}</span>
        </div>
        <div className="calc-keypad">
          <button className="calc-button" disabled>MC</button>
          <button className="calc-button" disabled>MR</button>
          <button className="calc-button" disabled>M+</button>
          <button className="calc-button" disabled>M-</button>
          <button className="calc-button" onClick={clearDisplay}>CE</button>
        </div>
        <div>
          <button className="calc-button" onClick={() => addToDisplay("7")}>7</button>
          <button className="calc-button" onClick={() => addToDisplay("8")}>8</button>
          <button className="calc-button" onClick={() => addToDisplay("9")}>9</button>
          <button className="calc-button" disabled>÷</button>
          <button className="calc-button" disabled>√</button>
        </div>
        <div>
          <button className="calc-button" onClick={() => addToDisplay("4")}>4</button>
          <button className="calc-button" onClick={() => addToDisplay("5")}>5</button>
          <button className="calc-button" onClick={() => addToDisplay("6")}>6</button>
          <button className="calc-button" disabled>*</button>
          <button className="calc-button" disabled>%</button>
        </div>
        <div>
          <button className="calc-button" onClick={() => addToDisplay("1")}>1</button>
          <button className="calc-button" onClick={() => addToDisplay("2")}>2</button>
          <button className="calc-button" onClick={() => addToDisplay("3")}>3</button>
          <button className="calc-button" onClick={handleMinus}>-</button>
          <button className="calc-button" disabled>1/x</button>
        </div>
        <div>
          <button className="calc-button" onClick={() => addToDisplay("0")}>0</button>
          <button className="calc-button" onClick={() => addToDisplay(".")}>.</button>
          <button className="calc-button" disabled>+/-</button>
          <button className="calc-button" onClick={handlePlus}>+</button>
          <button className="calc-button" onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
