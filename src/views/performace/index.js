import React, { useState } from 'react';
import '../useReducerExample/reduce.css';
import ChildComponent from './child';

const Performance = () => {

  console.log('I am here');

  const [count, setCount] = useState(0);
  const [childCount, setChildCount] = useState(0);
  const obj1 = {
    name: "Ankit"
  }
  const title = "Child Component";

  const setCounter = () => {
    setCount(count + 1);
  }

  const enhancedChildCounter = React.useCallback(() => setChildCounter(), ([childCount]));
  
  const setChildCounter = () => {
    setChildCount(childCount + 2);
  }

  return (
    <div className="App">
      <header className="reduceHeader">
        Performance
      </header>
      <p> Parent Component </p>
      <div>
        <p>{count}</p>
      </div>
      <div>
        <button onClick={() => setCounter()}>Increment</button>
      </div>
      <div>
        <ChildComponent childCount={childCount} increase={enhancedChildCounter} title={title}/>
      </div>
    </div>
  )
}

export default Performance;
