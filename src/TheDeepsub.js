import React, { useContext } from 'react';
import { DarkTheme } from './App'

const TheDeepsub = () => {
    const { dark, setDark } = useContext(DarkTheme);
    console.log(dark)

    return (
        <>
            <div className='dark_btn'>
                <label htmlFor='btn' className={`Btn ${dark ? "on" : ""}`}>
                    dark
                </label>
                <button id="btn" onClick={
                    () => setDark(!dark)
                }>
                    mode
                </button>
            </div>
            <div>
                test now..! test now..! test now..! test now..! test now..! test now..! test now..! test now..! test now..! test now..! 
            </div>
        </>
    )
}

export default TheDeepsub