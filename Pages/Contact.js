import React, { createContext } from 'react'
import About from './About';

export const usercontext=createContext();

const Contact=()=> {

  const fruit={
       fruitname:"apple",
       price:50,
       des:"simla apple"
  }
  return (
      <usercontext.Provider value={fruit}>  

    
        <h1><About/></h1>
  
      </usercontext.Provider>
  )
}

export default Contact