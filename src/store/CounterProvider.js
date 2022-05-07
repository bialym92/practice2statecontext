import React, { useState } from 'react';
import CounterContext from './counter-context';





const CounterProvider = (props) => {
    const [counter, setCounter] = useState(()=> {
        console.log("useState"); 
        return 1
    });
    const lowerCounter = () => { 
        setCounter((prevCount)=> prevCount - 1 )};
    
    const riseCounter = () => {
        setCounter((prevCount)=> prevCount + 1 )};

    const counterContext = {
        counter: counter,
        lowerCounter: lowerCounter,
        riseCounter: riseCounter,
    };

  return (
    <CounterContext.Provider value={counterContext}>
        {props.children}
    </CounterContext.Provider>
  );
}

export default CounterProvider;
