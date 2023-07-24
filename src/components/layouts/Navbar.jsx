import { useState } from "react";
import { Link } from "react-router-dom";
import searchButton from "../../assets/searchButton.svg";
import heart from "../../assets/heart.svg";

export const navItems = [
  "Home",
  "About",
  "Services",
  "Breeds",
  "Shop",
  "Gallery",
];
const Navbar = () => {
  const [activeNavItem, setActiveNavItem] = useState("Home");
  const navItemClickHandler = (item) => {
    setActiveNavItem(item);
  };
  const executeScroll = (e, value) => {
    e.preventDefault();
    console.log("value:", value);
    let id = value.toLowerCase();
    document
      .querySelector(`#${id}`)
      .scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <div className="header-container" id="home">
      <div className="header flex-center ">
        <span>Call us for Veterinary Support: +977-9861859764</span>
      </div>
      <div className="navbar-container">
        <div className="navbar flex-center">
          <div className="logo">YOUR LOGO HERE</div>
          <nav>
            <ul className="flex-center w-full">
              {navItems.map((item, index) => (
                <li
                  className={`${
                    item == activeNavItem && "nav-active"
                  }  nav-item`}
                  key={index}
                  onClick={(e) => {
                    navItemClickHandler(item);
                    executeScroll(e, item);
                  }}
                >
                  <Link className="custom-link" href="">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="search-box ">
            <span className="search-text">Search......</span>
            <div className="flex-center">
              <img className="search-button" src={searchButton} alt="" />
            </div>
          </div>
          <div className="flex-center heart">
            <img className="" src={heart} alt="" />
          </div>
          <div className="flex-center cart-box">
            <span className="cart"></span>
            <span className="cart-text">2 item</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
