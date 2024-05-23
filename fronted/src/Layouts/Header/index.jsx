import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import'./index.scss'
import { IoSearch } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <div className='container'>
      <header>
        <div className="logo"><span>Colo</span><span className='shop'>Shop</span></div>
        <nav>
          <ul>
            <li>
              <NavLink to={"/Home"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/AddProducts"}>Addpage</NavLink>
            </li>
            <li>
              <NavLink to={"/ProductDetails"}>ProducDetails</NavLink>
            </li>
            <li>
              <NavLink>Pages</NavLink>
            </li>
            <li>
              <NavLink>Contact</NavLink>
            </li>

          </ul>
        </nav>
        <div className="icons">
        <IoSearch />
        <Link to={"/favorits"}><FaUsers /></Link>
        <Link to={"/basket"}><sup><FaShoppingCart /></sup></Link>
        </div>
      </header>
    </div>
  );
};

export default Header