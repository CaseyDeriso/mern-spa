import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/orderHistory">
              Orders
            </Link>
          </li>
          <li className="mx-1">
            {/* Trying To Utilize Link Logout Component And/or User And Then reRefreshs/Starts Application */}
            <a href="/" onClick={() => Auth.logout()}>
              LogoUT
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/signup">
              Prenup
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/login">
              Logn
            </Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header className="flex-row px-1">
      <h1>
        <Link to="/">
          <span role="img" aria-label="shopping bag">🛍️</span>
          -Chanel
        </Link>
      </h1>

      <nav>
        {showNavigation()}
      </nav>
    </header>
  );
}

export default Nav;