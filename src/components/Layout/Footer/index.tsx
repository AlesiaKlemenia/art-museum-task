import "./styles.scss";

import ModsenLogo from "@/assets/icons/logo-modsen.svg";
import { images } from "@/constants/images";

const Footer = (): JSX.Element => {
  return (
    <footer>
      <div className="container">
        <img src={images.lightLogo} alt="Art Museum Logo" />
        <ModsenLogo />
      </div>
    </footer>
  );
};

export default Footer;
