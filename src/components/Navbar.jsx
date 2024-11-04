/**
 * @Copyright 2024 AhmedAshraf
 * @license Apache-2.0
 */

/**
 * Node Modules
 */
import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Navbar = ({ navOpen }) => {
  const activeBox = useRef();
  
  const navItems = [
    { label: "Home", link: "#home", section: "home" },
    { label: "About", link: "#about", section: "about" },
    { label: "Work", link: "#work", section: "work" },
    { label: "Reviews", link: "#reviews", section: "reviews" }
  ];

  const initActiveBox = (target) => {
    if (target) {
      activeBox.current.style.top = target.offsetTop + "px";
      activeBox.current.style.left = target.offsetLeft + "px";
      activeBox.current.style.width = target.offsetWidth + "px";
      activeBox.current.style.height = target.offsetHeight + "px";
    }
  };

  useEffect(() => {
    navItems.forEach(({ section }) => {
      const linkSelector = `a[href="#${section}"]`;

      ScrollTrigger.create({
        trigger: `[data-section="${section}"]`,
        start: "top center",
        end: "bottom center",
        onEnter: () => {
          const link = document.querySelector(linkSelector);
          document.querySelectorAll(".nav-link").forEach((el) => el.classList.remove("active"));
          link.classList.add("active");
          initActiveBox(link);
        },
        onEnterBack: () => {
          const link = document.querySelector(linkSelector);
          document.querySelectorAll(".nav-link").forEach((el) => el.classList.remove("active"));
          link.classList.add("active");
          initActiveBox(link);
        },
      });
    });

    // Initialize active state for the Home link
    const homeLink = document.querySelector(`a[href="#home"]`);
    if (homeLink) {
      homeLink.classList.add("active");
      initActiveBox(homeLink);
    }

    return () => ScrollTrigger.getAll().forEach((st) => st.kill());
  }, []);

  return (
    <nav className={`navbar ${navOpen ? "active" : ""}`}>
      {navItems.map(({ label, link }, key) => (
        <a
          href={link}
          className="nav-link"
          key={key}
          onClick={(e) => {
            e.preventDefault();
            document.querySelector(link).scrollIntoView({ behavior: "smooth" });
          }}
        >
          {label}
        </a>
      ))}
      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
};

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
};

export default Navbar;
