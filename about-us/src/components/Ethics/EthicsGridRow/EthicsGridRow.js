import React from "react";
import "./EthicsGridRow.css";
import EthicsCard from "../EthicsCard/EthicsCard";

const EthicsGridRow = props => {
  return (
    <div className="ethics-grid-row-small">
      <EthicsCard
        ethicsText={props.ethicsText1}
        image={props.image1}
        // height={props.height1}
        // width={props.width1}
      />
      <EthicsCard
        ethicsText={props.ethicsText2}
        image={props.image2}
        // height={props.height2}
        // width={props.width2}
      />
    </div>
  );
};

export default EthicsGridRow;
