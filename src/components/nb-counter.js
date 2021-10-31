import { useState, useEffect } from "react";
import NbCount from "./nb-count";
import NbButton from "./nb-button";

function Counter(props) {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const isDisabled = count >= 12;

  return (
    <div>
      <NbCount>
        <div>{count}</div>
      </NbCount>
      <NbButton handleClick={increment} isDisabled={isDisabled}></NbButton>
    </div>
  );
}

export default Counter;
