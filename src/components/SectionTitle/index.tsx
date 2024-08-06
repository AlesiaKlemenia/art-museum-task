import "./styles.scss";

import { ISectionTitleProps } from "@components/SectionTitle/interfaces";

const SectionTitle = ({
  smallOrangeText,
  bigGrayText,
}: ISectionTitleProps): JSX.Element => {
  return (
    <div className="section-title-wrapper">
      <h3 className="small-title">{smallOrangeText}</h3>
      <h2 className="big-title">{bigGrayText}</h2>
    </div>
  );
};

export default SectionTitle;
