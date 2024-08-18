import "./styles.scss";

import MenuItem from "@components/Layout/Header/MenuItem";
import { Link, useLocation } from "react-router-dom";

import Bookmark from "@/assets/icons/bookmark.svg";
import Home from "@/assets/icons/home.svg";
import { images } from "@/constants/images";
import paths from "@/constants/paths";

const Header = (): JSX.Element => {
  const location = useLocation();

  return (
    <header>
      <div className="container">
        <img src={images.darkLogo} alt="Art Museum Logo" />
        <nav>
          <div className="hamburger-menu">
            <input id="menu-toggle" type="checkbox" />
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label className="menu-button" htmlFor="menu-toggle">
              <span />
            </label>
          </div>
          <ul className="menu-box">
            {location.pathname !== "/" && (
              <li>
                <Link to={paths.home}>
                  <MenuItem icon={<Home />} textField="Home" />
                </Link>
              </li>
            )}
            <li>
              <Link to={paths.favorites}>
                <MenuItem icon={<Bookmark />} textField="Your favorites" />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
