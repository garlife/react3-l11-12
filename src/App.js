import React, { useState, useCallback, useEffect, useDebugValue } from 'react';
import './style.css';

function useAddConsoleLog(value){
  const [msg, setMsg] = useState(value);
  // для dev tools debugging
  const addLog = useCallback( (_msg) => (console.log(_msg)))
  useEffect(() =>{addLog(msg)}, [msg, addLog] );
  useDebugValue("Это моя функция, возвращает имя");
  return;
  
}

export default function App() {
  const [age, setAge] = useState(34);
  useAddConsoleLog("Hi!");

  
 
  return (
    <>
      <h3>Возраст: {age}</h3>
      <p>
        <button onClick={() => setAge((a) => a + 1)}>+</button>
      </p>
    </>
  );
}
