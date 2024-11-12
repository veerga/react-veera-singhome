import React from "react";

function Productlist(props) {
  return (
    <div class="col-4">
      <div>
        <img src={props.e.img} />

        <h4>{props.e.name}</h4>
        

        <p>{props.e.desc}</p>

        <h2>{props.e.price}</h2>
        <p>{props.e.stock === true ? "Availble" : "sold out"}</p>
        <button
          disabled={!props.e.stock}
          onClick={() => {
            props.submittocart(props.e);
          }}
        >
          submit
        </button>
      </div>
    </div>
  );
}

export default Productlist;
