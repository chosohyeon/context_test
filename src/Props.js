import React, { useState } from 'react';

const Thedeepsub = ({ state, setState }) => {
  return <>
    {state} Thedeepsub
    <button onClick={
      ()=> setState('JJAN!')
    }>CLICK</button>
  </>
}

const Deepsub = ({ state, setState }) => {
  return <Thedeepsub state={state} setState={setState} />
}

const Sub = ({ state, setState }) => {
  return (
    <>
      <Deepsub state={state} setState={setState} />
    </>
  )
}

const App = () => {
  const [state, setState] = useState("TADA!")

  return (
    <>
      <Sub state={state} setState={setState} />
    </>
  )
}

export default App