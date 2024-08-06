import { IOverviewFieldProps } from "@/pages/DetailInfo/ArtworkOverview/OverviewField/interfaces";

const OverviewField = ({ field, value }: IOverviewFieldProps): JSX.Element => {
  return (
    <div>
      <span className="pale-orange">{field}</span>
      <span className="dark-gray">{value}</span>
    </div>
  );
};

export default OverviewField;
