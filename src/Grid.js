import React, { useState, useEffect, useContext } from 'react';
import './App.css'
import { globalContext } from './Context';

const G =[];
for (let i = 0; i < 5; i++) {
  G[i] = [];
  for (let j = 0; j < 5; j++) {
    G[i][j] = 0;
  }
}


const Grid = ({res}) => {
  
  const [currentCell, setCurrentCell] = useState(0);
  const {flag, setFlag, animateTime, setAnimateTime} = useContext(globalContext)
  const [gr, setGr] = useState(0);
  const [gc, setGc] = useState(0);
  const [ind, setInd] =useState(0);
  let row = 5;
  let col = 5;
  
  useEffect(() => {
    const interval = setInterval(() => {
      if(currentCell <res[ind].length){
        setCurrentCell(currentCell + 1);
        if(res[ind][currentCell]==='D'){
          setGr(gr+1);
        }else if(res[ind][currentCell]==='R'){
          setGc(gc+1);
        }else if(res[ind][currentCell]==='U'){
          setGr(gr-1);
        }else{
          setGc(gc-1);
        }
        G[gr][gc] =1;
      }else {
        setCurrentCell(0);
        setInd(ind+1);
        setGr(0);
        setGc(0);
        for (let i = 0; i < 5; i++) {
          for (let j = 0; j < 5; j++) {
            G[i][j] = 0;
          }
        }
      }
      
    }, animateTime);
    
    console.log(gr,gc);
    return () => clearInterval(interval);
  }, [currentCell, ind]);

  

  const grid = [];
  for (let r = 0; r < row; r++) {
    for (let c = 0; c < col; c++) {
      const index = r * 5 + c;
      grid.push(
        <div
        key={`${r}-${c}`}
        style={{
          height: 70,
          width: 70,
          border:'1px solid black',
          backgroundColor: G[r][c] === 1 ? 'green' : 'white',
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
        <h2 className ="rath1">Tota Path Count :- <span style={{color:'red'}}>{ind+1}</span></h2>
        <div style={{display:'grid', width:'30%', margin:'auto'}}>
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

export default Grid;

