import React from "react";
import { Link, useLocation } from "react-router-dom";
import Jumbotron from "./Jumbotron";
function NavTabs() {
  // We'll go into the Hooks API later, for now, we are just using some code
  // from the react-router docs (https://reacttraining.com/react-router/web/api/Hooks/uselocation)
  // This allows the component to check the route any time the user uses a link to navigate.
  const location = useLocation();

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <ul className="nav navbar-nav">
      <li className="nav-item">
        <Link to="/" className={location.pathname === "/" ? "navbar-brand" : "nav-link"}>
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/placebooks"
          className={location.pathname === "/placebooks" ? "nav-link active" : "nav-link"}
        >
          Bookshelf
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/blog"
          className={location.pathname === "/books/:id" ? "nav-link active" : "nav-link"}
        >
           Specific Book
        </Link>
      </li>
      </ul>
      </nav>
      <Jumbotron/>
   </div>
  );
}

export default NavTabs;
