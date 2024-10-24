import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({ tab, setTab, products, carts , setToken}) {

  // {role === 'admin' && () }

  return (
    <div className="navbar-container ">
      {/* <h1>Navbar</h1> */}
      <Link to="/home">
        <button
          className={
            "btn " + (tab === "home" ? "btn-danger" : "btn-outline-danger")
          }
          onClick={() => setTab("home")}
        >
          Home
        </button>
      </Link>

      <Link to="/calculator">
        <button
          className={
            "btn " +
            (tab === "calculator" ? "btn-warning" : "btn-outline-warning")
          }
          onClick={() => setTab("calculator")}
        >
          Calculator
        </button>
      </Link>

      <Link to="/animation">
        <button
          className={
            "btn " +
            (tab === "Animation" ? "btn-warning" : "btn-outline-warning")
          }
          onClick={() => setTab("animation")}
        >
          Animation
        </button>
      </Link>

      <Link to="/components">
        <button
          className={
            "btn " +
            (tab === "components" ? "btn-warning" : "btn-outline-warning")
          }
          onClick={() => setTab("components")}
        >
          Components
        </button>
      </Link>

      <Link to="/todo">
        <button
          className={
            "btn " + (tab === "todo" ? "btn-warning" : "btn-outline-warning")
          }
          onClick={() => setTab("todo")}
        >
          Todo
        </button>
      </Link>

      <Link to="/products">
        <button
          className={
            "btn " + (tab === "products" ? "btn-warning" : "btn-outline-warning")
          }
          onClick={() => setTab("products")}
        >
          Products({products.length})
        </button>
      </Link>

      <Link to="/Carts">
        <button
          className={
            "btn " +
            (tab === "carts"
              ? "btn-warning position-relative"
              : "btn-outline-warning position-relative")
          }
          onClick={() => setTab("carts")}
        >
          Carts
          {carts.length > 0 && (
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {carts.length < 10 ? carts.length : '9+'}
              <span className="visually-hidden">unread messages</span>
            </span>
          )}
        </button>
      </Link>

          <button className="btn btn-success" style={{marginLeft: "0.5rem"}}
          onClick={() => {setToken('')}}>
            Logout
          </button>

    </div>
  );
}

export default Navbar;
