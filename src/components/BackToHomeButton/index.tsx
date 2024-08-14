import "./styles.scss";

import { Link } from "react-router-dom";

import paths from "@/constants/paths";

const BackToHomeButton = (): JSX.Element => {
  return (
    <Link
      to={`${paths.home}`}
      className="back-home-link"
      data-testid="back-to-home-link"
    >
      Back Home
    </Link>
  );
};
export default BackToHomeButton;
