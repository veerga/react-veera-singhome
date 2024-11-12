import React, { useContext } from 'react'
import { usercontext } from './Contact'

function Careers() {
  const value=useContext(usercontext)
  return (
    <div>p2 {value.fruitname}
    
    </div>
  )
}

export default Careers