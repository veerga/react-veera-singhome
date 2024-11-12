import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    const stylemodule={display:"flex",gap:"10px"}
  return (
    <div>
        <div style={stylemodule}>
        <div> <Link to={"/"}>Grocery</Link> </div>
        <div><Link to={"/a"}>About</Link> </div>
        <div><Link to={"/c"}>Contact</Link></div>
        <div><Link to={"/careers"}>Careers</Link></div>
        </div>
     
    </div>

  )
}

export default Navbar