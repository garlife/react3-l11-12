import React from 'react';
import './style.css';

export default function App() {
  const [age, setAge] = React.useState(34);

  return (
    <div>
      <h3>Возраст: {age}</h3>
      <p>
        <button onClick={() => setAge(age + 1)}>+</button>
      </p>
    </div>
  );
}
