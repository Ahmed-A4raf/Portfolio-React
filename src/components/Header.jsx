/**
 * @Copyright 2024 AhmedAshraf
 * @license Apache-2.0
 */

/**
 * Node Modules
 */
import { useState } from "react";

/**
 * components
 */
import Navbar from "./Navbar";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 w-full h-20 items-center z-40 bg-greadient-to-b from-zinc-900 to-zinc-900/0">
      <div className="max-w-screen-2xl w-full mx-auto px-4 flex items-center justify-between md:px-6 md:grid
      md:grid-cols-[1fr,3fr,1fr]">
        {/* LOGO */}
        <h1>
          <a href="/" className="logo">
            <img
              src="/images/logo.svg"
              width={40}
              height={40}
              alt=" Ahmed Ashraf"
            />
          </a>
        </h1>

        {/* NAVBAR */}
        <div className="relative md:justify-self-center">
          <button className="menu-btn md:hidden " onClick={() => setNavOpen((prev)=> !prev)}>
            <span className="material-symbols-rounded">
                {navOpen ? "close" : "menu"}
            </span>
          </button>
          <Navbar navOpen={navOpen} />
        </div>

        {/* CONTACT */}
        <a href="#contact" className="btn btn-secondary max-md:hidden md:justify-self-end">
          Contact Me
        </a>
      </div>
    </header>
  );
};

export default Header;