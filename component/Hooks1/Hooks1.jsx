import React, { useRef, useState, useEffect, useLayoutEffect } from "react";
// import Test from "./component/Test/Test";

const Hooks1 = () => {
    const emailfield = useRef("");
    const passwfield = useRef("");

    const [lpage, setlpage] = useState("");
    useEffect(() => {}, [setlpage]);

    const alogin = () => {
      setlpage(emailfield.current.value);
      setlpage(passwfield.current.value);

      console.log(emailfield.current.value);
      console.log(passwfield.current.value);
    };

  const [item, setItem] = useState(0);
  // const testdata = useRef("bhuvan");
  //   const [visible, setvisible] = useState();

  // useEffect(()=>{
  // // componemnt didmount

  // },[])

  // useEffect(()=>{
  // // component did update
  // },[item])

  // useEffect(()=>{
  // //
  // return ()=>{
  //  //component willunmount
  // }

  // },[])

  useEffect(() => {
    fetch("https://dummyjson.com/carts")
      .then((res) => res.json())
      .then((res) => {
        console.log("res", res);
        setItem(res);
      });
  }, []);

  useEffect(() => {
    console.log("use effect", item?.carts);
  }, [item]);

  // useEffect(() => {
  //   fetch("https://dummyjson.com/users")
  //     .then((res) => res.json())
  //     .then((res) => {
  //       console.log("res", res);
  //       setItem(res);
  //     });
  // }, []);

  // useEffect(() => {
  //   console.log("useEffect", item?.users);
  //   // console.log("useEffect", item.firstname);
  // }, [item]);

  //   const vee = () => {
  //     return <div>hghg</div>;
  //   };
  //   const addOne = () => {
  //     // console.log('11111 ---->', item)
  //     if (item <= 10) {
  //       console.log("item---->", item);
  //       setItem(item + 1);
  //     }
  //   };
  //   const removeOne = () => {
  //     if (item > 0) {
  //       setItem(item - 1);

  //     }
  // console.log(testdata.current.value)
  //   };
  return (
    // <>
    //   <input ref={testdata} placeholder="enter name" />
    //   <div>{vee()}</div>
    //   <div>{item}</div>
    //   <button onClick={addOne}>add</button>
    //   <button onClick={removeOne}>Reduce</button>
    // </>
    <div>
      {/* <div>
    //       EmaiID{" "}
    //       <input type="text" ref={emailfield} placeholder="Enter your EmailID" />
    //     </div>
    //     <div>
    //       PASSWORD{" "}
    //       <input type="text" ref={passwfield} placeholder="Enter your password" />
    //     </div>
    //     <div>
    //       <button onClick={alogin}>LOGIN</button>
    // </div> */}

      {item?.carts?.map((e) => {
        {
          e.products.map((vv) => {
            console.log()
            return <div>{vv.price}</div>;
          });
        }
        if (e.id < 5)
          return (
            <div>
              <div> Userid:{e.id} </div><br></br>
              <div>total:{e.total}</div><br></br>
              <div>Discounted total:{e.discountedTotal}</div>
              
            </div>
          );
        // console.log("test link------------>", e.products);
        // e.products.map((tt) => <div>{tt.title}</div>);
      })}

      {/*       
      {item?.users.map((_e) => {
        if (_e.age < 25) {
          return (
            <div>
              {_e.firstName} --- {_e.age}
              <img src={_e.image} />
            </div>
          );
        }
      })} */}
    </div>
  );
};

export default Hooks1;
