import "./FavouriteItem.css";
import { Link } from "react-router-dom";
import { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { add,removeFromFavCart,cartSelector } from "../../reducers/cartReducer";

function FavouriteItem(props) {
  
  let items = props.item;
  const[changeBtn,setchangeBtn]=useState(false);
  

  const dispatch = useDispatch()
  const handelRemoveFromFavCart = (item) => {
    dispatch(removeFromFavCart(items.id));
    setchangeBtn(!changeBtn);
  }
  function handleAddToCartEvent() {
    // using dispatch to send add action and payload.
    dispatch(add(items));
    setchangeBtn(!changeBtn);

  }


  return (
    <div >

      <div class="thumb-wrapper">

        <div className="img-box">
          <img src={items.image} class="img-fluid" alt="iPhone" />
        </div>
        <div className="thumb-content">
          <p>{items.title}</p>
          <p class="item-price"><strike>&#8377;369.00</strike> <span>&#8377;{items.price}</span></p>
          <div class="star-rating">
            <ul class="list-inline">
              <li class="list-inline-item"><i class="fa fa-star"></i></li>
              <li class="list-inline-item"><i class="fa fa-star"></i></li>
              <li class="list-inline-item"><i class="fa fa-star"></i></li>
              <li class="list-inline-item"><i class="fa fa-star"></i></li>
              <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
            </ul>
          </div>

        {changeBtn === false?( <button onClick={handleAddToCartEvent} className="btn btn-primary">
          Add To Cart
        </button>):(<h4 onClick={handelRemoveFromFavCart} className="navbar-brand removeBtn" >Remove From Cart</h4>)}
         
          

          
        </div> </div>

    </div>


  );
}

export default FavouriteItem;
