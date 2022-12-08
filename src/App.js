import './App.css';
import { useEffect, useState,useContext } from 'react';
import Grid from './Grid';
import { globalContext } from './Context';
import InitialPage from './InitialPage';
const MAX = 5;
let res = [];
 
function isValid(row, col, m, n)
{
    if (row >= 0 && row < n && col >= 0 && col < n
        && m[row][col] == 1) {
        return true;
    }
    return false;
}
 
function findPathHelper(m, n, x, y, dx, dy, path)
{
    if (x == n - 1 && y == n - 1) {
        res.push(path);
        return;
    }
    let dir = "DLRU";
    for (let i = 0; i < 4; i++) {
        let row = x + dx[i];
        let col = y + dy[i];
        if (isValid(row, col, m, n)) {
            m[row][col] = 2; // used to track visited cells
                             // of matrix
            findPathHelper(m, n, row, col, dx, dy,
                           path + dir[i]);
            m[row][col] = 1; // mark it unvisited yet explorable
        }
    }
}
 
function findPath(m, n)
{
 
    // dx, dy will be used to follow `DLRU` exploring
    // approach which is lexicographically sorted order
    let dx = [ 1, 0, 0, -1 ];
    let dy = [ 0, -1, 1, 0 ];
    if (m[0][0] == 1) {
        m[0][0] = 2;
        findPathHelper(m, n, 0, 0, dx, dy, "");
    }
    return res;
}
 
// driver code


function App() {
  
  const {flag, setFlag, mm} = useContext(globalContext);
  
  console.log(mm);
  findPath(mm, mm.length);
  
  return (

    <div className="App">
      {flag? <InitialPage/>
      :<Grid res ={res}/>}
    </div>

  );
}

export default App;
