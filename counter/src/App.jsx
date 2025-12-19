import { useState, useEffect } from "react";
import "./index.css";

function Usestate() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");
  const [Tobutton, setTobutton] = useState(true);

  const handlePlus = () => {
    setCount(count + 1);
    setMessage("Increment (+)");
    setTimeout(() => setMessage(""), 500);
  };

  const handleMinus = () => {
    if (count > 0) {
      setCount(count - 1);
      setMessage("Decrement (-)");
      setTimeout(() => setMessage(""), 500);
    }
  };

  const handleremove = () => {
    setTobutton(false);
    setMessage("Component Unmounted");
    setTimeout(() => setMessage(""), 500);
  };

  useEffect(() => {
    console.log("component updated:", count);
  }, [count]);

  return (
    <div className="container">
      <div className="counter-box">
        <h1 className="title">Premium Counter</h1>

        <div className="buttons-row">
          <button className="btn minus" onClick={handleMinus}>
            -
          </button>
          <div className="count-display">{count}</div>
          <button className="btn plus" onClick={handlePlus}>
            +
          </button>
        </div>

        <button className="btn didunmount" onClick={handleremove}>didunmount</button>

        <p className="message">{message}</p>
      </div>
    </div>
  );
}

export default Usestate;
