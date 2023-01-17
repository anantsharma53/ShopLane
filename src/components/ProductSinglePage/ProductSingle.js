import "./ProductSingle.css";
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { add, cartSelector, addFav, removeFromCart, removeFromFavCart, decreaseCart } from '../../reducers/cartReducer';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import { useState } from "react";
import { useDispatch } from 'react-redux';

function ProductSingle(props) {
    const items = useSelector(cartSelector).value;
    const location = useLocation();
    const { state } = useLocation(props);
    console.log(props);

    const [changeColor, setChangeColor] = useState(false);
    const [changeBtn, setchangeBtn] = useState(false);
    const dispatch = useDispatch();

    function handleAddToCartEvent() {
        // using dispatch to send add action and payload.
        dispatch(add());
        setchangeBtn(!changeBtn);

    }
    function handleAddToFavourite() {
        if (!changeColor) {
            setChangeColor(!changeColor)
            dispatch(addFav());
        } else {
            setChangeColor(!changeColor)
            dispatch(removeFromFavCart());
        }

        // using dispatch to send add action and payload.

    }
    function handleRemoveToCart() {

        setchangeBtn(!changeBtn);
        dispatch(removeFromCart());
    }
    const handelAddItemQuantity = () => {
        //console.log("Ready to Increement Quantity")
        dispatch(add(items))
    }
    const handelRemoveQuantity=()=>{
        //console.log("Ready to Reduce Quantity")
        // using dispatch to send remove action and payload.
    
        dispatch(decreaseCart(items));
      }


    return (
        <div>
            <Header></Header>
            <div class="container  md-5 ">
                <div class="row ">
                    <div class="col-md-10">
                        <div class="card">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="images p-3">
                                        <div class="text-center "> <img src="https://i.imgur.com/Dhebu4F.jpg" class="img-fluid" /> </div>

                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="product p-4">
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div class="d-flex align-items-center"> <i class="fa fa-long-arrow-left"></i> <span class="ml-1">Back</span> </div> <i class="fa fa-shopping-cart text-muted"></i>
                                        </div>
                                        <div class="mt-4 mb-3"> <span class="text-uppercase text-muted brand">Orianz</span>
                                            <h5 class="text-uppercase">Men's slim fit t-shirt</h5>
                                            <div class="price d-flex flex-row align-items-center"> <span class="act-price">$20</span>
                                                <div class="ml-2"> <small class="dis-price">$59</small> <span>40% OFF</span> </div>
                                            </div>
                                        </div>
                                        <p class="about">Shop from a wide range of t-shirt from orianz. Pefect for your everyday use, you could pair it with a stylish pair of jeans or trousers complete the look.</p>
                                        {/* <div class="sizes mt-5">
                                            <h6 class="text-uppercase">Size</h6>
                                             <label class="radio"> 
                                             <input type="radio" name="size" value="S" checked/> <span>S</span> </label> <label class="radio"> 
                                             <input type="radio" name="size" value="M"/> <span>M</span> </label> <label class="radio"> 
                                             <input type="radio" name="size" value="L"/> <span>L</span> </label> <label class="radio"> 
                                             <input type="radio" name="size" value="XL"/> <span>XL</span> </label> <label class="radio"> 
                                             <input type="radio" name="size" value="XXL"/> <span>XXL</span> </label>
                                        </div> */}
                                        <div class="cart mt-4 align-items-center">
                                            <div>
                                                <button onClick={handelAddItemQuantity} className="cart btn btn-success">+</button>{' '}
                                                <button onClick={handelRemoveQuantity} className="cart btn btn-success">-</button>
                                                {/* <p>{props.item.quantity}Pcs X {props.item.price} = {props.item.quantity * props.item.price}</p> */}
                                            </div>
                                            {/* <button class="btn btn-danger text-uppercase mr-2 px-4">Add to cart</button> */}
                                            {
                                                changeBtn === false ? (<button onClick={handleAddToCartEvent} className="btn btn-primary">
                                                    <i class="fa fa-shopping-cart fa-2x" aria-hidden="false"></i>  Add To Cart
                                                </button>) : (<button onClick={handleRemoveToCart} className="btn btn-primary">
                                                    <i class="fa fa-shopping-cart fa-2x" aria-hidden="true"></i> Remove From Cart
                                                </button>)

                                            }
                                            {
                                                changeColor === false ? (<i onClick={handleAddToFavourite} className="fa fa-heart"></i>) : (
                                                    <i onClick={handleAddToFavourite} className="bk fa fa-heart"></i>
                                                )
                                            } </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </div>
    )
}
export default ProductSingle;