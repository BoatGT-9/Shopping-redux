import React from "react";
import {removeFromCart , increaseQuantity , decreaseQuantity} from '../Redux/cart/action'
import {addQuantity , removeQuantity} from '../Redux/product/action'
import { useDispatch } from 'react-redux'
import Bill from './Bill'


const CartItem = ({ product }) => {
  const {id , name, ImageURL, Quantity, category, price , productId } = product;
  const dispatch = useDispatch();
  const handleQuantityChange = (change) => {
    // Implement the logic to handle quantity change
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(id))
    dispatch(addQuantity(productId , Quantity))
  };

  if (Quantity === 0) {
    handleRemoveFromCart()
  }
  const handleIncreaseQuantity = () =>{
    dispatch(increaseQuantity(id))
    dispatch(removeQuantity(productId))
  }
  const handleDecreaseQuantity = () =>{
    dispatch(decreaseQuantity(id))
    dispatch(addQuantity(productId,1))
  }
  

  return ( 
    <div>

    <div className="rounded-lg mb-4 p-6 bg-white shadow-md sm:flex sm:justify-start relative">
      <img
        src={ImageURL}
        alt={name}
        className="w-full h-28 rounded sm:w-40"
        />

      <div className="absolute top-0 right-0 mt-4 mr-4">
        <div className="flex items-center border border-gray-100">
          <button
            className="py-1 px-3.5 bg-gray-100 hover:bg-blue-400 hover:text-gray-100"
            onClick={() => handleDecreaseQuantity(-1)}
            >
            -
          </button>
          <input
            type="number"
            min="1"
            value={Quantity}
            className="h-8 w-16 border bg-white text-center text-sm outline-none"
            readOnly
            />
          <button
            className="py-1 px-3.5 bg-gray-100 hover:bg-blue-400 hover:text-gray-100"
            onClick={() => handleIncreaseQuantity(1)}
          >
            +
          </button>
        </div>
      </div>

      <div className="mt-4 sm:mt-0 sm:ml-4 sm:w-full">
        <h3 className="text-lg font-bold text-gray-800">{name}</h3>
        <p className="mt-1 text-sm text-gray-700">Price: {price}฿</p>
        <p className="mt-1 text-sm text-gray-700">Category: {category}</p>

        <div className="flex items-center mt-4 space-x-4">
          <div className="flex items-center space-x-4">
            <p className="text-sm">Total: {price * Quantity}฿</p>
            <button
              className="text-red-500 hover:underline"
              onClick={handleRemoveFromCart}
              >
              Remove
            </button>
          </div>
          
        </div>
      </div>
    </div>
    
      </div>
    
  );
};

export default CartItem;