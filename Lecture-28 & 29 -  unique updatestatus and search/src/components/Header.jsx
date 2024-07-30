import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {

  let location = useLocation();

  const record = [
    {id : 1,task:'reading'},
    {id:2,task:'writting'}
  ]

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
  
         
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                to={`/`}
                state={{ record }}
                className={`nav-link ${location.pathname === '/' ? 'active':''}`}
                aria-current="page"
              >
                Add
              </Link>
            </li>
            <li className="nav-item">
              <Link to={`/view`} className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
                View
              </Link>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
