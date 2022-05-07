import React, {useContext} from 'react';
import CounterContext from './store/counter-context';

const Banner = () => {
    const ctx = useContext(CounterContext);
  return (
    <div>
      <h1>{ctx.counter}</h1>
    </div>
  );
}

export default Banner;
