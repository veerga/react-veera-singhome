import axios from 'axios'
import { useState } from 'react';
const  Datalist = ()=> {

  const[user,setuser]=useState([]);

  const getdata= async () =>{
    let userdata= await axios.get(
      "https://670e654f3e7151861654576f.mockapi.io/datalist"
    );
    console.log(setuser(userdata))
  }
  return (
    <div>data list</div>
  )
}

export default Datalist