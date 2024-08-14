import "./styles.scss";

import { IArtworkOverview } from "@/pages/DetailInfo/ArtworkOverview/interfaces";
import OverviewField from "@/pages/DetailInfo/ArtworkOverview/OverviewField";

const ArtworkOverview = ({
  nacionality,
  dimensions,
  creditLine,
  isPublic,
}: IArtworkOverview): JSX.Element => {
  return (
    <div className="artwork-overview-wrapper">
      <h2>Overview</h2>
      <div className="artwork-overview">
        <OverviewField field="Artist nacionality: " value={nacionality} />
        <OverviewField field="Dimensions: " value={dimensions} />
        <OverviewField field="Credit Line: " value={creditLine} />
        <OverviewField field="" value={isPublic ? "Public" : "Not Public"} />
      </div>
    </div>
  );
};

export default ArtworkOverview;
