import "./styles.scss";

import { IMenuItemsProps } from "@components/Layout/Header/MenuItem/interfaces";

const MenuItem = ({ icon, textField }: IMenuItemsProps): JSX.Element => {
  return (
    <div className="menu-item">
      {icon}
      <span>{textField}</span>
    </div>
  );
};

export default MenuItem;
