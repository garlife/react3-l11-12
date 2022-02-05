import React, { useState, useMemo, useCallBack } from 'react';
import './style.css';

function createDisplayName(_name, _surName){
  const user = { name: _name, surName: _surName };
  console.log(user);
  return user;
  
}

export default function App() {
  const [name, setName] = useState('Саша');
  const [surName, setSurName] = useState('Романов');
  const [age, setAge] = useState('34');
  const displayName = useMemo(
    () => createDisplayName(name, surName), [name, surName]
    );
 

  //memoization - возвращает те же самые значения функции
  //ниже поломанное решение, требует фикса
  return (
    <>
      <h1>
        Привет, {name} {surName}
      </h1>
      <input type="text" value={name} onChange={
        // setName(() => {event.target.value})
        } />

      <h3>Возраст: {age}</h3>
      <p>
        <button onClick={() => setAge((a) => a + 1)}>+</button>
      </p>
      {JSON.stringify(displayName, null, 2)}
    </>
  );
}
