import Footer from "../../components/Shared/Footer/Footer";
import Header from "../../components/Shared/Header/Header";
import "./Login.css";

function Login() {
  return (
    <div>
      <Header></Header>
    <div className="login-container">
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
          Email address
        </label>
        <input
          type="email"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"></input>
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">
          Password
        </label>
        <input
          type="password"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"></input>
      </div>
      <input className="btn btn-primary" value="Login" type="submit" />
    </div>
    <Footer></Footer>
    </div>
  );
}

export default Login;
