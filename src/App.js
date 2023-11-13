import "./styles.css";
import Images from "./images";
import { useEffect, useState } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);

  function Next() {
    counter < 2 ? setCounter(counter + 1) : setCounter(0);
  }

  function Prev() {
    counter > 0 ? setCounter(counter - 1) : setCounter(2);
  }

  useEffect(() => {
    const interval = setInterval(Next, 3000);
    return () => clearInterval(interval);
  }, [counter]);

  return (
    <div className="App">
      <div className="slider">
        <div
          className="slider_images"
          style={{
            transform: `translateX(${-counter * 100}%)`
          }}
        >
          {Images.map((url) => {
            return <img src={url} />;
          })}
        </div>
        <button onClick={Prev}>Prev</button>
        <button onClick={Next}>Next</button>
      </div>
    </div>
  );
}
