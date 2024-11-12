import React from 'react'

function Cardlist(props) {
  return (
    <div>
        <img src={props.e.img}/>
        <div>{props.e.name}</div>
        <h2>{props.e.price}</h2>
        <button onClick={()=>{props.removetocart(props.e)}}>Remove</button>
    </div>
  )
}

export default Cardlist