import "./Favourite.css";
import Header from "../../components/Shared/Header/Header";
import { useSelector, useDispatch } from "react-redux";
import { cartSelector } from "../../reducers/cartReducer";
import { Link } from "react-router-dom";
import Footer from './../../components/Shared/Footer/Footer';
import FavouriteItem from "../../components/Favourite/FavouriteItem";
const FavCart = (props) => {
  const items = useSelector(cartSelector).Favourite;

  return (
    items.length === 0 ? (
      <div className="cart-empty">
        <div><Header /></div>
        <p className="lead fs-3">Your Favourit cart is empty!</p>
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
        <div>
      <Header  />
      <div className="container mt-3">
        
        <div className="row">
          {items.map((p, i) => (
            <div key={i} className="col-md-3">
              <FavouriteItem 
              item={p} 
              key={i}/>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
    
      )
  );
}

export default FavCart;


