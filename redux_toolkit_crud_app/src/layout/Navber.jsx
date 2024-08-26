import React from "react";
import { Link, NavLink } from "react-router-dom";
import '../styles/index.css'
const Navber = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to='/show-book'>Show Books</NavLink>
      <NavLink to="/add-book">Add Books</NavLink>
    </nav>
  );
};

export default Navber;
