import React, { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Content from "./components/Content";
import Counter from "./components/Counter";
import Status from "./components/Status";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <Header title="Counter App" />
      <Content />
      <Counter count={count} increment={increment} />
      <Status count={count} />

      <Footer year="2024" />
    </div>
  );
}

export default App;
