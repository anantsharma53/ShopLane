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
  const totalQuantity = useSelector(cartSelector).totalQuantity;
  //console.log(items.length);
  const dispatch = useDispatch();
  //dispatch(getTotal());
  useEffect(() => {
    dispatch(getTotal());
  }, [items, dispatch])
  //console.log(totaBill)
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  console.log()
  return (
    items.length === 0 ? (
      <div class="container-fluid  mt-80">
        <div><Header /></div>
        <div class="row">

          <div class="col-md-10">

            <div class="card">

              <div class="card-body cart">
                <div class="col-sm-12 empty-cart-cls text-center">
                  <img src="https://static.vecteezy.com/system/resources/previews/004/999/463/original/shopping-cart-icon-illustration-free-vector.jpg"
                    width="130" height="130" class="img-fluid mb-4 mr-3" />
                  <h3><strong>Your Cart is Empty</strong></h3>
                  <h4>Add something to make me happy :)</h4>
                  <Link to="/" class="btn btn-primary cart-btn-transform m-3" data-abc="true">continue shopping</Link>


                </div>
              </div>
            </div>


          </div>

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
          <div class="col-md-30">
            <div class="card mb-4">
              <div class="card-header py-3">
                <h5 class="mb-0">Summary</h5>
              </div>
              <div class="card-body">
                <ul class="list-group list-group-flush">
                  <li
                    class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                    Products ({totalQuantity} items)
                    <span>&#8377;{totaBill}</span>
                  </li>
                  <li
                    class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                    Shipping
                    <span>&#8377;200</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                    Tax
                    <span>&#8377;55</span>
                  </li>
                  <li
                    class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                    <div>
                      <strong>Total amount</strong>
                      <strong>
                        <p class="mb-0">(including Tax)</p>
                      </strong>
                    </div>
                    <span><strong>&#8377;{(totaBill + 200 + 55)}</strong></span>
                  </li>
                </ul>

                <button type="button" class="btn btn-primary btn-lg btn-block">
                  Go to checkout
                </button>
                <button onClick={handleClearCart} className="btn btn-primary btn-lg btn-block">
                  Clear Cart
                </button>
              </div>
            </div></div>



          {/* <div className="subtotal row">
          <div className="container">
          <span>Subtotal ({totalQuantity} items)</span>
          <span> &#8377;{totaBill}</span>
          </div>
          <div className="container">
          <span>GST 18 % </span>
        <span> &#8377;{totaBill+((totaBill*18)/100)}</span>
        </div>
          
        
        </div>
        
        
        <div>
        <button className="btn btn-warning subtotal-container">Proceed To Buy</button>
        </div>
        <button onClick={handleClearCart} className="btn btn-warning subtotal-container">
            Clear Cart
          </button> */}
        </div >

        <div><Footer /></div>

      </div>)

  );
}

export default Cart;
{/* <section class="h-100 gradient-custom">
  <div class="container py-5">
    <div class="row d-flex justify-content-center my-4">
      <div class="col-md-8">
        <div class="card mb-4">
          <div class="card-header py-3">
            <h5 class="mb-0">Cart - 2 items</h5>
          </div>
          <div class="card-body">
            <!-- Single item -->
            <div class="row">
              <div class="col-lg-3 col-md-12 mb-4 mb-lg-0">
                <!-- Image -->
                <div class="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/12a.webp"
                    class="w-100" alt="Blue Jeans Jacket" />
                  <a href="#!">
                    <div class="mask" style="background-color: rgba(251, 251, 251, 0.2)"></div>
                  </a>
                </div>
                <!-- Image -->
              </div>

              <div class="col-lg-5 col-md-6 mb-4 mb-lg-0">
                <!-- Data -->
                <p><strong>Blue denim shirt</strong></p>
                <p>Color: blue</p>
                <p>Size: M</p>
                <button type="button" class="btn btn-primary btn-sm me-1 mb-2" data-mdb-toggle="tooltip"
                  title="Remove item">
                  <i class="fas fa-trash"></i>
                </button>
                <button type="button" class="btn btn-danger btn-sm mb-2" data-mdb-toggle="tooltip"
                  title="Move to the wish list">
                  <i class="fas fa-heart"></i>
                </button>
                <!-- Data -->
              </div>

              <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
                <!-- Quantity -->
                <div class="d-flex mb-4" style="max-width: 300px">
                  <button class="btn btn-primary px-3 me-2"
                    onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                    <i class="fas fa-minus"></i>
                  </button>

                  <div class="form-outline">
                    <input id="form1" min="0" name="quantity" value="1" type="number" class="form-control" />
                    <label class="form-label" for="form1">Quantity</label>
                  </div>

                  <button class="btn btn-primary px-3 ms-2"
                    onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                    <i class="fas fa-plus"></i>
                  </button>
                </div>
                <!-- Quantity -->

                <!-- Price -->
                <p class="text-start text-md-center">
                  <strong>$17.99</strong>
                </p>
                <!-- Price -->
              </div>
            </div>
            <!-- Single item -->

            <hr class="my-4" />

            <!-- Single item -->
            <div class="row">
              <div class="col-lg-3 col-md-12 mb-4 mb-lg-0">
                <!-- Image -->
                <div class="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/13a.webp"
                    class="w-100" />
                  <a href="#!">
                    <div class="mask" style="background-color: rgba(251, 251, 251, 0.2)"></div>
                  </a>
                </div>
                <!-- Image -->
              </div>

              <div class="col-lg-5 col-md-6 mb-4 mb-lg-0">
                <!-- Data -->
                <p><strong>Red hoodie</strong></p>
                <p>Color: red</p>
                <p>Size: M</p>

                <button type="button" class="btn btn-primary btn-sm me-1 mb-2" data-mdb-toggle="tooltip"
                  title="Remove item">
                  <i class="fas fa-trash"></i>
                </button>
                <button type="button" class="btn btn-danger btn-sm mb-2" data-mdb-toggle="tooltip"
                  title="Move to the wish list">
                  <i class="fas fa-heart"></i>
                </button>
                <!-- Data -->
              </div>

              <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
                <!-- Quantity -->
                <div class="d-flex mb-4" style="max-width: 300px">
                  <button class="btn btn-primary px-3 me-2"
                    onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                    <i class="fas fa-minus"></i>
                  </button>

                  <div class="form-outline">
                    <input id="form1" min="0" name="quantity" value="1" type="number" class="form-control" />
                    <label class="form-label" for="form1">Quantity</label>
                  </div>

                  <button class="btn btn-primary px-3 ms-2"
                    onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                    <i class="fas fa-plus"></i>
                  </button>
                </div>
                <!-- Quantity -->

                <!-- Price -->
                <p class="text-start text-md-center">
                  <strong>$17.99</strong>
                </p>
                <!-- Price -->
              </div>
            </div>
            <!-- Single item -->
          </div>
        </div>
        <div class="card mb-4">
          <div class="card-body">
            <p><strong>Expected shipping delivery</strong></p>
            <p class="mb-0">12.10.2020 - 14.10.2020</p>
          </div>
        </div>
        <div class="card mb-4 mb-lg-0">
          <div class="card-body">
            <p><strong>We accept</strong></p>
            <img class="me-2" width="45px"
              src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
              alt="Visa" />
            <img class="me-2" width="45px"
              src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
              alt="American Express" />
            <img class="me-2" width="45px"
              src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
              alt="Mastercard" />
            <img class="me-2" width="45px"
              src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.webp"
              alt="PayPal acceptance mark" />
          </div>
        </div>
      </div>


      
      </section>

 */}
