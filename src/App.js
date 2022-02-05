import React, { useState, useReducer } from 'react';
import './style.css';

const initialState = { age: 34 };

// action - спец объект вида { type: "increment", age: #TODO}
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { age: state.age + 1 };
  }
  return initialState;
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  // const [age, setAge] = useState(34);

  return (
    <div>
      <h3>Возраст: {state.age}</h3>
      <p>
        <button onClick={() => dispatch({type: "increment"})}>+</button>
      </p>
    </div>
  );
}
