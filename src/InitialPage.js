import React, {  useContext, useState } from 'react';
import './App.css'
import { globalContext } from './Context';



const InitialPage = () => {
  const {flag, setFlag ,animateTime, setAnimateTime, mm} = useContext(globalContext);
  
  let row = 5;
  let col = 5;
  const grid = [];
  for (let r = 0; r < row; r++) {
    for (let c = 0; c < col; c++) {
      const index = r * 5 + c;
      grid.push(
        <div onClick={()=>{mm[r][c]=0}}
        key={`${r}-${c}`}
        style={{
          cursor: 'pointer',
          height: 70,
          width: 70,
          border:'1px solid black',
          backgroundColor: 'white',
          transition: 'background-color .2s',
        }}
        />
        );
        
    }
  }
  

  return (
    <>
      <div style={{width:'100%'}}>
        <h2 className ="rath1">RAT IN A MAZE</h2>
        <div style={{display:'grid', width:'30%', margin:'auto', paddintLeft:'300px'}}>
          <div>
          <button onClick={()=>setFlag(!flag)} className='button'>START</button>
          <button className='button'>STOP</button>
          <button onClick ={()=>{window.location.reload()}} className='button'>RESET</button></div>
          <div><input className='input' type="text" placeholder="Set Animation time : ms" onChange = {(e)=>{setAnimateTime(Number(e.target.value))}}/></div>
        </div>
      </div>
      
      <br></br>
      <div
        style={{
          height: 360,
          width: 360,
          display: 'flex',
          flexWrap: 'wrap',
          border:"2px solid red",
        }}
      >
        {grid}
      </div>
    </>
  );
};

export default InitialPage;

