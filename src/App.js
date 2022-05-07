import Banner from "./Banner";
import Counter from "./Counter";
import CounterProvider from "./store/CounterProvider";

function App() {
  return (
    <CounterProvider>
      <Banner/>
      <Counter/>
    </CounterProvider>
  );
}

export default App;
