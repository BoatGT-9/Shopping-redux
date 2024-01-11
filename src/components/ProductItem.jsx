import React from "react";
import { useDispatch } from "react-redux";
import { addTOCart } from "../Redux/cart/action";
import { removeQuantity } from "../Redux/product/action";
const ProductItem = ({ product }) => {
  const dispatch = useDispatch;
  const { id, ImageURL, name, Category, price, Quantity } = product;
  const handleAddToCart = () => {
    dispatch(addTOCart(product));
    dispatch(removeQuantity(id));
  };
  return (
    <div className="card w-96 glass">
      <figure>
        <img src={ImageURL} alt={name} />
        <div className="badge badge-secondary absolute top-3 right-3">
          {Category}
        </div>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Van oskull</p>
        <p className="w-full">Available: {Quantity}</p>
        <p className="text-left"> ราคา {price}฿</p>
        <div className="card-actions justify-end">
        <button className="btn btn-sm btn-primary" disabled={Quantity === 0 }
           onClick={handleAddToCart}>
            Buy Now
           </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
