import React, {useContext} from "react";
import CounterContext from "./store/counter-context";

const Counter = () => {
    const ctx = useContext(CounterContext);
  return (
    <div>
      <button onClick={ctx.lowerCounter}>-</button>
      <span>{ctx.counter}</span>
      <button onClick={ctx.riseCounter}>+</button>
    </div>
  );
};

export default Counter;
