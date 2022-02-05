import React from 'react';
import './style.css';

const ChildComponent = React.forwardRef((props, ref) => {
  const [count, setCount] = React.useState(0)
  const inputRef = React.useRef();
  React.useImperativeHandle(
    ref,
    () => {
      console.log('useImperativeHandle' + count);
      return {
        myFocus: () => {
          inputRef.current.focus();
        },
      };
    }, [count]
  );
  return (
  <>
  <input type="text" ref={inputRef} />
  <button onClick={() => setCount(count + 1)}>+</button>
  </>
);
});

export default function App() {
  const name = React.useRef(null);
  function save() {
    const inputElement = name.current;
    inputElement.myFocus();
    console.log(inputElement);
  }

  return (
    <>
      <ChildComponent ref={name} />
      <button onClick={() => save()}>Save</button>
    </>
  );
}
