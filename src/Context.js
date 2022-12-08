import React from 'react'
import { createContext, useState } from 'react'

export const globalContext = createContext();
let mm = [ 
    [ 1, 1, 1, 1, 1 ],
    [ 1, 1, 1, 1, 1 ],
    [ 1, 1, 1, 1, 1 ],
    [ 1, 1, 1, 1, 1 ],
    [ 1, 1, 1, 1, 1 ],
  ];
export default function Context({children}) {
    const [flag,setFlag] = useState(true);
    const [animateTime, setAnimateTime] = useState(100);
  return (
    <globalContext.Provider value={{flag, setFlag, animateTime, setAnimateTime , mm}}>
        {children}
    </globalContext.Provider>
  )
}
