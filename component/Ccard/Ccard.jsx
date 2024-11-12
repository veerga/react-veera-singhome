import React from "react";
import "./Ccard.css";
import mac1 from '../../assets/mac1.jpg'


const Ccard = (cardItem) => {
  const { item } = cardItem;
  // console.log("saas", item.item);
  // const mac = [
  //   {
  //     id: 1,
  //     img: mac1,
  //     name: "13 MacBook Air - Midnight",
  //     price: 89900,
  //     desc: "Apple M2 chip with 8core CPU, 8core GPU, 16core Neural Engine 8GB unified memory",
  //     stock: true,
  //   },
    // {
    //   id: 2,
    //   img: mac1,
    //   name: " 14 MacBook Pro - Space Grey",
    //   price: 158900,
    //   desc: "Apple M3 chip with 8-core CPU, 10-core GPU, 16-core Neural Engine",
    //   stock: false,
    // },
    // {
    //   id: 3,
    //   img: mac1,
    //   name: "Apple 2024 MacBook Air 13",
    //   price: 109155,
    //   desc: " Laptop with M3 chip: 34.46 cm (13.6″) Liquid",
    //   stock: true,
    // },
    // {
    //   id: 4,
    //   img: mac1,
    //   name: "Apple MacBook Pro A1502 13.3-inch ",
    //   price: 25990,
    //   desc: "5th Gen Intel Core i5/8GB/512GB SSD/Mac OS, Integrated",
    //   stock: false,
    // },
    // {
    //   id: 5,
    //   img: mac1,
    //   name: "Apple 2022 MacBook Air",
    //   price: 90990,
    //   desc: "Laptop with M2 chip: 34.46 cm (13.6-inch) Liquid Retina Display, 8GB RAM, 256GB SSD Storage,",
    //   stock: false,
    // },
    // {
    //   id: 6,
    //   img: mac1,
    //   name: "Apple Macbook Pro A2141",
    //   price: 49999,
    //   desc: "2019 Model core i7 9th Gen 16GB 512GB SSD 4GB GRAPHICS",
    //   stock: true,
    // },
  // ];

  return (
    <div className="ccimgnav">
      <div className="ccimgheader">
        <h3 className="cardh">{item}</h3>
        <div className="cardh1">{item}</div>
        <div className="cardh2">
          {item}
        </div>
        <div>
          <img className="ccimg" src={item} />
        </div>
      </div>
    </div>
  );
};

export default Ccard;
