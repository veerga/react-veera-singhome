import React,{useState} from 'react'
import Productlist from './Productlist';
import Cardlist from '../component/Cardlist';
import airpod1 from "../assets/airpod1.webp"
import airpod2 from "../assets/airpod2.webp"
import airpod3 from "../assets/airpod3.webp"
import airpod4 from "../assets/airpod4.webp"
import airpod5 from "../assets/airpod5.jpg"
import airpod6 from "../assets/airpod6.jpg"

function Airpod() {
    const iphone = [
        {
          id: 1,
          img: airpod1,
          name: "iPhone 16 Pro",
          price: 119900,
          desc: "iPhone 16 Pro 128GB Desert Titanium",
          stock: true,
        },
        {
          id: 2,
          img: airpod2,
          name: "new iPhone 16 Pro Max.",
          price: 144900,
          desc: "iPhone 16 Pro Max 256GB Natural Titanium",
          stock: false,
        },
        {
          id: 3,
          img: airpod3,
          name: "iPhone 16 128GB Ultramarine",
          price: 79900,
          desc: "iPhone 16 128GB Ultramarine",
          stock: true,
        },
        {
          id: 4,
          img: airpod4,
          name: "Apple iPhone 15",
          price: 65900,
          desc: "Apple iPhone 15 (128 GB) - Blue",
          stock: false,
        },
        {
          id: 5,
          img: airpod5,
          name: "new iPhone 16.",
          price: 85900,
          desc: "iPhone 16 128GB Pink",
          stock: true,
        },
        {
          id: 6,
          img: airpod6,
          name: "iPhone 16 Pro.",
          price: 119900,
          desc: "iPhone 16 Pro 128GB Black Titanium",
          stock: false,
        },
      ];
    
      const [cardlist, setcardlist] = useState([]);
      const [total, settotal] = useState(0);
    
      const submittocart = (e) => {
        setcardlist([...cardlist, e]);
        settotal(total + e.price);
      };
    
      const removetocart = (e) => {
        let temp = cardlist.filter((clist) => clist.id != e.id);
        setcardlist(temp);
        settotal(total - e.price);
      };
  return (
    <div className="container-fluid">
    <div className="row">
      <div className="col-10">
        <div className="row d-flex">
          {iphone.map((e) => {
            return <Productlist e={e}  submittocart={submittocart} />;
          })}
        </div>
      </div>
      <div className="col-2">
      <h4>Payment details</h4>
        <h3>count:{cardlist.length}</h3>
        {cardlist.map((e) => {
          return <Cardlist e={e} removetocart={removetocart} />;
        })}
        <h2>total:{total}</h2>
      </div>
    </div>
  </div>
);
}
  
  

export default Airpod