import React, { useState } from "react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleTheme = () => {
    const nextMode = !darkMode;
    setDarkMode(nextMode);
    document.body.style.backgroundColor = darkMode ? "white" : "#1a1a1a";
    document.body.style.color = darkMode ? "black" : "white";
  };
  return (
    <div class="container" style={{maxWidth:"900px",marginTop:"20px"}}>
      {" "}
      <header class="d-flex flex-wrap justify-content-center py-3 mb-4 " style={{ fontSize: "1.75rem", fontWeight: "600" }}>
        {" "}
        <a
          href="/"
          class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          {" "}
          <span className="fw-bold" style={{ fontSize: "2.35rem" , color: darkMode ? "white" : "black"}}>
            🛒 Product Vault
          </span>
        </a>{" "}
        <ul class="nav nav-pills">
          <li class="nav-item">
            <a href="/create" class="nav-link">
              <i class="bi bi-plus-square" style={{color: darkMode ? "white" : "black" }}></i>
            </a>
          </li>{" "}
          <li class="nav-item">
            <button
              className="btn btn-link nav-link"
              onClick={toggleTheme}
              style={{ textDecoration: "none", color: darkMode ? "white" : "black" }}
            >
              {darkMode ? (
                <i className="bi bi-brightness-high-fill" style={{ fontSize: "1.8rem" }}></i>
              ) : (
                <i className="bi bi-moon-fill" style={{ fontSize: "1.8rem" }}></i>
              )}
            </button>
          </li>{" "}
        </ul>{" "}
      </header>{" "}
    </div>
  );
};

export default Navbar;
