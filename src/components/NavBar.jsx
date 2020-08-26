import React from "react";

const NavBar = (props) => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="www.example.com">
          <span className="badge badge-pill badge-secondary">
            total : {props.totalCounters}{" "}
          </span>
        </a>
      </nav>
    </div>
  );
};

export default NavBar;
