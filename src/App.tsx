import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import "./App.css";

interface CounterState {
  count: number;
}

const Counter: React.FC = () => {
  const [state, setState] = useState<CounterState>({
    count: Number(Cookies.get("count")) || 0,
  });

  const handleIncrement = (): void => {
    setState({ ...state, count: state.count + 1 });
  };

  const handleDecrement = (): void => {
    setState({ ...state, count: state.count - 1 });
  };

  const handleButtonClick = () => {
    window.open("https://www.youtube.com/watch?v=PXqcHi2fkXI", "_blank");
  };

  useEffect(() => {
    Cookies.set("count", state.count.toString());
  }, [state.count]);

  return (
    <div>
      <nav className="navbar">
        <a className="home-btn" href="/">
          o:loaf
        </a>
        <a className="wipbutton" href="#">
          WIP
        </a>
        <a href="/contact.html">Contact</a>
      </nav>
      <p>o:loaf, the best Minecraft network</p>
      <button onClick={handleButtonClick}>Click for IP</button>
    </div>
  );
};

export default Counter;
