import React, { useReducer } from 'react';
import './reduce.css';

const ReducerHookExample = () => {
  
  const initialState = 0;

  const reducer = (state, action) => {
    switch(action) {
      case 'Increment':
        return state + 1;
      case 'Decrement':
        return state - 1;
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);


  return (
    <div className="App">
      <header className="reduceHeader">
        Detail
      </header>
      <p>{state}</p>
      <div>
        <button onClick={() => dispatch('Increment')}>Increment</button>
        <button onClick={() => dispatch('Decrement')}>Decrement</button>
      </div>
    </div>
  )

}

export default ReducerHookExample;
