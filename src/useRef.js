import React from 'react';
import './style.css';

export default function App() {
  const name = React.useRef(null);
  function save() {
    const inputElement = name.current;
    console.log(inputElement.value);
    console.log('name: ' + inputElement.value);
  }

  return (
    <>
      <input type="text" ref={name} />
      <button onClick={() => save()}>Save</button>
    </>
  );
}
