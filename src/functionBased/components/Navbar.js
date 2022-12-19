import { Outlet, Link } from 'react-router-dom';

const Navbar = () => (
  <>
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
      </ul>
    </nav>

    <Outlet />
  </>
);

export default Navbar;
