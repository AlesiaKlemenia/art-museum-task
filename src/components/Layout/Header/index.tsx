import "./styles.scss";

import MenuItem from "@components/Layout/Header/MenuItem";
import { Link, useLocation } from "react-router-dom";

import Bookmark from "@/assets/icons/bookmark.svg";
import Home from "@/assets/icons/home.svg";
import museumLogoDark from "@/assets/img/museum-logo-dark.png";
import paths from "@/constants/paths";

const Header = (): JSX.Element => {
  const location = useLocation();

  return (
    <header className="header">
      <div className="container">
        <img src={museumLogoDark as string} alt="Art Museum Logo" />
        <nav>
          <label className="menu-button" htmlFor="menu-toggle">
            <input id="menu-toggle" type="checkbox" />
            <span />
          </label>
          <ul className="menu-box">
            <li>
              {location.pathname !== "/" && (
                <Link to={paths.home}>
                  <MenuItem icon={<Home />} textField="Home" />
                </Link>
              )}
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
