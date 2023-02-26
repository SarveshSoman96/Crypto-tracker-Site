import React from 'react';
import { Link } from "react-router-dom";
import "./Header.css"

const Header = () => {
  return (
    <header>
      <div className='container header_flex header_container'>
        <div style={{marginBottom: "2rem"}}>
            <p style={{color: "#fff", fontStyle: "italic" , fontSize: "2rem"}}>Digi Tracker</p>
        </div>
        <nav>
            <ul className='header_flex nav_container'>
                <li>
                    <Link to={"/"} >Home</Link>
                </li>
                <li>
                    <Link to={"/news"} >News</Link>
                </li>
            </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header