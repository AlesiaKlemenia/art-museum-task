import "./styles.scss";

import { ISortToggleProps } from "@/pages/Home/SearchInput/SortToggle/interfaces";

const SortToggle = ({ value, setValue }: ISortToggleProps): JSX.Element => {
  return (
    <label
      role="presentation"
      className="switch"
      htmlFor="sort-toggle"
      onClick={setValue}
    >
      <input id="sort-checkbox" type="checkbox" checked={value} readOnly />
      <span className="slider" />
    </label>
  );
};

export default SortToggle;
