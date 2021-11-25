// this is src/components/navbar
import { NavLink } from "react-router-dom";
import "./navbar.css"
import nlogo from "../../../files/Images/nlogo.png";
import { VscAccount } from "react-icons/vsc";


export const Navbar = () => {
  return (
      <nav className="navbar navbar-expand-lg navbar-dark ">
      <div class="container-fluid">
      <NavLink className="navbar-brand" to="/"><img src={nlogo} alt="" id="nlogo" width="80" /></NavLink>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">

          <li class="nav-item">
            <NavLink className="nav-link" to="/home">Home</NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/tvshows">TV Shows</NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/movies">Movies</NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/mylist">My List</NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/homeout">Welcome</NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/login">Login</NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/logout">LogOut</NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/login">Account</NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/login">
              <VscAccount size='20px' style={{ color: 'white' }} />
            </NavLink>
          </li>


        </ul>

      </div>

    </div>
    </nav>
  );
};

