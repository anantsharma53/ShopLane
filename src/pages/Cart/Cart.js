import "./Cart.css";
import Header from "../../components/Shared/Header/Header";
import CartItem from "../../components/CartItem/CartItem";
import { useSelector, useDispatch } from "react-redux";
import { cartSelector } from "../../reducers/cartReducer";
import { getTotal, clearCart } from "../../reducers/cartReducer";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from './../../components/Shared/Footer/Footer';
const Cart = (props) => {
  const items = useSelector(cartSelector).value;
  const totaBill = useSelector(cartSelector).totalPrice;
  const totalQuantity=useSelector(cartSelector).totalQuantity;
  //console.log(items.length);
  const dispatch = useDispatch();
  //dispatch(getTotal());
  useEffect(()=>{
    dispatch(getTotal());
  },[items,dispatch]) 
  //console.log(totaBill)
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  console.log()
  return (
    items.length === 0 ? (
      <div className="cart-empty">
        <div><Header /></div>
        <p className="lead fs-3">Your cart is empty!</p>
        <div className="start-shopping">
          <Link to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-arrow-left"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
              />
            </svg>
            <span>Start Shopping</span>
          </Link>
        </div>
        <div><Footer /></div>
      </div>
    ) : (
      <div className="cartDisplay">
      <Header />
      <div className="left">
        {items &&
          items.map((cartItem, i) => (
            <CartItem item={cartItem} key={i} />
          ))}
        
      </div>
     
      <div className="right">
        <div className="subtotal">
        <span>Subtotal ({totalQuantity} items)</span>
        <span> &#8377;{totaBill}</span>
        </div>
        
        <div>
        <button className="btn btn-warning subtotal-container">Proceed To Buy</button>
        </div>
        <button onClick={handleClearCart} className="btn btn-warning subtotal-container">
            Clear Cart
          </button>
      </div>
      
      <div><Footer /></div>

    </div>)
      
  );
}

export default Cart;


