import React from "react";
import { remove } from "../store/cartSlice";
import { useSelector, useDispatch } from "react-redux";

const Cart = () => {
  const cartsItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleRemove =(id) => {
    dispatch(remove(id));
  };
  return (
   <>
    <br/>
    <h2>Carts</h2>
    <div className="cartProducts">
      {cartsItems.length !== 0 ?
        cartsItems.map((cartItem) => {
          return <div className="cartproduct" key={cartItem.id}>
        <div className="img-title">
        <img src={cartItem.image} alt="" />
        <div>
          <h2>{cartItem.title}</h2>
          <h4>Price: ${cartItem.price}</h4>
          <p>Description: {cartItem.description}</p>
        </div>
          </div>
        <button onClick={() => handleRemove(cartItem.id)} className="btn btn-del">X</button>
      </div>
        })
      : <>
      <div className="cartproduct" >
      <div>
        <h2>Carts Empty!!</h2>
      </div>
      </div>
      </>}
    </div>
   </>
  );
};

export default Cart;
