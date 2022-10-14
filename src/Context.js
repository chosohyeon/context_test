import React, { useContext, useState } from 'react';
import { createContext } from 'react';
const Changebg = createContext();

//1. createContext로 context를 만든다.
//2. 이름.Provider로 하위 구조를 감씬디.
//3. value 값 지정한다.
//4. useContext(이름)으로 불러온다.

const Thedeepsub = () => {
  const changebg = useContext(Changebg)
  return <>
    Thedeepsub
  </>
}

const Deepsub = () => {
  return <Thedeepsub />
}

const Sub = (props) => {
  return <Deepsub />
}

const App = () => {
  const [state, setState] = useState("TADA!")
  return (
    <Changebg.Provider value={state}>
      <Sub />
    </Changebg.Provider >
  )
}

export default App