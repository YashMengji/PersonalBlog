import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

function Navbar() {

  const showLogoutBtn = false;

  return (
    <div className="nav-div">
      <div className="div-nav-left">
        <div className="div-nav-logo">
          <img src="/images/logo_img.png" className="nav-logo" />
        </div>
        <div className="div-nav-name">
          BlogSphere
        </div>
      </div>
      <div className="div-nav-middle">
        <div className="div-home">  
          <Link className="section-link" to="/home">
            <i className="fa-solid fa-house fa-xl"></i>
          </Link>
        </div>
        <input className="search-bar" type="text" placeholder="Search" />
        <button className="search-icon-button" >
          <img className="search-icon" src="/images/search.svg" />
        </button>
      </div>
      <div className="div-nav-right">
        <div className="div-bell-icon">
          <Link className="section-link" to="/createBlog">
            <i className="fa-solid fa-pen-to-square fa-xl"></i>
          </Link>
        </div>
        <div className="div-profile">
          {
            (showLogoutBtn) ? (
              // <Link className="section-link" to="/login">
                <button className="sign-in-btn" >
                  Logout
                </button>
              // </Link>
            ) : (
              <Link to="/login" className="login-btn-link">
                <button className="sign-in-btn">
                  Sign In
                </button>
              </Link>
            )
          }
        </div>
      </div>
    </div>

  )
}

export default Navbar