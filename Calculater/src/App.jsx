import React, { useState } from 'react'

function App() {
  const [eqution,setEquation] = useState("")
  return (
    <div className='outer'>

    
      <div className="container">
        <div className="input">
          <div>{eqution}</div>
        </div>
        <div className="button cal">
          <button onClick={()=>setEquation(" ")}>AC</button>
          <button onClick={()=>setEquation(eqution.slice(0,eqution.length-1))}>⌫</button>
          <button onClick={()=>setEquation("%")}>%</button>
          <button className='airth'>/</button>
        </div>
        <div className="button">
          <button onClick={()=>setEquation(eqution+"7")}>7</button>
          <button onClick={()=>setEquation(eqution+"8")}>8</button>
          <button onClick={()=>setEquation(eqution+"9")}>9</button>
          <button onClick={()=>setEquation(eqution+"*")} className='airth'>x</button>
        </div>
        <div className="button">
          <button onClick={()=>setEquation(eqution+"4")}>4</button>
          <button onClick={()=>setEquation(eqution+"5")}>5</button>
          <button onClick={()=>setEquation(eqution+"6")}>6</button>
          <button onClick={()=>setEquation(eqution+"-")} className='airth'>-</button>
        </div>
        <div className="button">
          <button onClick={()=>setEquation(eqution+"1")}>1</button>
          <button onClick={()=>setEquation(eqution+"2")}>2</button>
          <button onClick={()=>setEquation(eqution+"3")}>3</button>
          <button onClick={()=>setEquation(eqution+"+")} className='airth'>+</button>
        </div>
        <div className="button">
          <button onClick={()=>setEquation(eqution+"0")} id='zero'>0</button>
          <button onClick={()=>setEquation(eqution+".")}>.</button>
          <button onClick={()=>setEquation(eval)}  className='airth'>=</button>
        </div>
      </div>
    </div>
  )
}

export default App
