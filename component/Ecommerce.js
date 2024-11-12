import React, { createContext, useState } from "react";
import Productlist from "../Pages/Productlist";
import Cardlist from "./Cardlist";
import mac1 from "../assets/mac1.webp";
import mac2 from "../assets/mac2.webp";
import mac3 from "../assets/mac3.webp";
import mac4 from "../assets/mac4.webp";
import mac5 from "../assets/mac5.webp";
import mac6 from "../assets/mac6.webp";
import About from "../Pages/About";

export const eusercontext=createContext();
function Ecommerce() {

  const text={
    name: "13 MacBook Air - Midnight",
      price: 89900,
      desc: "Apple M2 chip with 8core CPU, 8core GPU, 16core Neural Engine 8GB unified memory",
      stock: true,
  }
  const mac = [
    {
      id: 1,
      img: mac1,
      name: "13 MacBook Air - Midnight",
      price: 89900,
      desc: "Apple M2 chip with 8core CPU, 8core GPU, 16core Neural Engine 8GB unified memory",
      stock: true,
    },
    {
      id: 2,
      img: mac2,
      name: " 14 MacBook Pro - Space Grey",
      price: 158900,
      desc: "Apple M3 chip with 8-core CPU, 10-core GPU, 16-core Neural Engine",
      stock: false,
    },
    {
      id: 3,
      img: mac3,
      name: "Apple 2024 MacBook Air 13",
      price: 109155,
      desc: " Laptop with M3 chip: 34.46 cm (13.6″) Liquid",
      stock: true,
    },
    {
      id: 4,
      img: mac4,
      name: "Apple MacBook Pro A1502 13.3-inch ",
      price: 25990,
      desc: "5th Gen Intel Core i5/8GB/512GB SSD/Mac OS, Integrated",
      stock: false,
    },
    {
      id: 5,
      img: mac5,
      name: "Apple 2022 MacBook Air",
      price: 90990,
      desc: "Laptop with M2 chip: 34.46 cm (13.6-inch) Liquid Retina Display, 8GB RAM, 256GB SSD Storage,",
      stock: false,
    },
    {
      id: 6,
      img: mac6,
      name: "Apple Macbook Pro A2141",
      price: 49999,
      desc: "2019 Model core i7 9th Gen 16GB 512GB SSD 4GB GRAPHICS",
      stock: true,
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
    <eusercontext.Provider value={text}>
    <div className="container-fluid">
      <div className="row">
        <div className="col-9">
          <div className="row d-flex">
            {mac.map((e) => {
              return <Productlist e={e} submittocart={submittocart} />;
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
    <h1><About/> </h1>
</eusercontext.Provider>
  );
}

export default Ecommerce;
