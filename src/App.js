import React, { useState, useReducer, useEffect, useLayoutEffect } from 'react';
import './style.css';

const initialState = {
  age: 34,
};

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
  const [name, setName] = useState('Саша');
  // const [age, setAge] = useState(34);

  useLayoutEffect(() => {
    document.title = `Привет, ${name}`;
    // for(let i=0, i < 200000000; i++) {};
    console.log('App', 'useEffect');
  }, [name]);

  useEffect(() => {
    //код инициилизации/подписки на ресурсы componentDidMount, хук будет вызван один раз
    return () => {
      // освобождение ресурсов
      //это событие componentWillUnmunt
    }
  }, [])

  const handlerChangeName = (event) => {
    setName(event.target.value);
  };

  return (
    <>
      <h1>Привет, {name}</h1>
      <input type="text" value={name} onChange={(e) => handlerChangeName(e)} />
      <h3>Возраст: {state.age}</h3>
      <p>
        <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      </p>
    </>
  );
}
