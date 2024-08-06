import "./styles.scss";

import ModsenLogo from "@/assets/icons/logo-modsen.svg";
import museumLogoLight from "@/assets/img/museum-logo-light.png";

const Footer = (): JSX.Element => {
  return (
    <footer className="Footer">
      <div className="container">
        <img src={museumLogoLight as string} alt="Art Museum Logo" />
        <ModsenLogo />
      </div>
    </footer>
  );
};

export default Footer;
