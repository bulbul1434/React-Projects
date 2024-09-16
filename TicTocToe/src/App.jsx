import React ,{useState} from 'react'

function App() {
  const[B1,setB1]=useState("")
  const[B2,setB2]=useState("")
  const[B3,setB3]=useState("")
  const[B4,setB4]=useState("")
  const[B5,setB5]=useState("")
  const[B6,setB6]=useState("")
  const[B7,setB7]=useState("")
  const[B8,setB8]=useState("")
  const[B9,setB9]=useState("")
  const[turn, setTurn]=useState(1)
  return (
    <div className='container'>
      <div className="div">
        <button onClick={()=>{
          if(B1===""){
            if(turn===1){
              setB1("X")
              setTurn(2)
             }else if(turn===2){
              setB1("O")
              setTurn(1)
             }
          }
        }} className='btn'><h3>{B1}</h3></button>

        <button onClick={()=>{
          if(B2===""){
           if(turn===1){
            setB2("X")
            setTurn(2)
           }else if(turn===2){
            setB2("O")
            setTurn(1)
           }}
        }} className='btn'><h3>{B2}</h3></button>

        <button onClick={()=>{
          if(B3===""){
           if(turn===1){
            setB3("X")
            setTurn(2)
           }else if(turn===2){
            setB3("O")
            setTurn(1)
           }}
        }} className='btn'><h3>{B3}</h3></button><br />

        <button onClick={()=>{
          if(B4===""){
           if(turn===1){
            setB4("X")
            setTurn(2)
           }else if(turn===2){
            setB4("O")
            setTurn(1)
           }}
        }} className='btn'><h3>{B4}</h3></button>

        <button onClick={()=>{
          if(B5===""){
           if(turn===1){
            setB5("X")
            setTurn(2)
           }else if(turn===2){
            setB5("O")
            setTurn(1)
           }}
        }} className='btn'><h3>{B5}</h3></button>

        <button onClick={()=>{
          if(B6===""){
           if(turn===1){
            setB6("X")
            setTurn(2)
           }else if(turn===2){
            setB6("O")
            setTurn(1)
           }}
        }} className='btn'><h3>{B6}</h3></button><br />

        <button onClick={()=>{
          if(B7===""){
           if(turn===1){
            setB7("X")
            setTurn(2)
           }else if(turn===2){
            setB7("O")
            setTurn(1)
           }}
        }} className='btn'><h3>{B7}</h3></button>

        <button onClick={()=>{
          if(B8===""){
           if(turn===1){
            setB8("X")
            setTurn(2)
           }else if(turn===2){
            setB8("O")
            setTurn(1)
           }}
        }} className='btn'><h3>{B8}</h3></button>

        <button onClick={()=>{
          if(B9===""){
           if(turn===1){
            setB9("X")
            setTurn(2)
           }else if(turn===2){
            setB9("O")
            setTurn(1)
           }}
        }} className='btn'><h3>{B9}</h3></button>
      </div>
      {/* {B1==B2 & B2==B3 & B1==""} */}
    {B1==B2 &B2==B3&B3=="X"?alert("x is winner"):null}
    {B1==B4&B4==B7&B7=="X"?alert("x is winner"):null}
    {B4==B5&B5==B6&B6=="X"?alert("x is winner"):null}
    {B7==B8&B8==B9&B9=="X"?alert("x is winner"):null}
    {B2==B5&B5==B8&B8=="X"?alert("x is winner"):null}
    {B3==B6&B6==B9&B9=="X"?alert("x is winner"):null}
    {B1==B5&B5==B9&B9=="X"?alert("x is winner"):null}
    {B3==B5&B5==B7&B7=="X"?alert("x is winner"):null}
    {B1==B2&B2==B3&B3=="O"?alert("x is winner"):null}
    {B1==B4&B4==B7&B7=="O"?alert("o is winner"):null}
    {B4==B5&B5==B6&B6=="O"?alert("o is winner"):null}
    {B7==B8&B8==B9&B9=="O"?alert("o is winner"):null}
    {B2==B5&B5==B8&B8=="O"?alert("o is winner"):null}
    {B3==B6&B6==B9&B9=="O"?alert("o is winner"):null}
    {B1==B5&B5==B9&B9=="O"?alert("o is winner"):null}
    {B3==B5&B5==B7&B7=="O"?alert("o is winner"):null}
    </div>
  )
}

export default App















