import { Outlet, Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav>
        <ul className="nav-ul">
          <li><Link to="/">Products</Link></li>
          <li><Link to="/add">Add Product</Link></li>
          <li><Link to="/update">Update Product</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/logout">Logout</Link></li>
          <li><Link to="/signup">SignUp</Link></li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Nav;