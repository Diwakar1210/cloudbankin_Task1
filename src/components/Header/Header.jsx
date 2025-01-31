import React from "react";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <h1>CB</h1>
        <h2>Cloudbankin</h2>
      </div>
      <button className="menu">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M3 4H21V6H3V4ZM3 11H15V13H3V11ZM3 18H21V20H3V18Z"></path>
        </svg>
      </button>
      <div className="user_Login">
        <div>
          <span>GC</span>
          <span>Gregory Clark</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;
