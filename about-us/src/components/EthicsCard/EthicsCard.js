import React from "react";
import Card from "react-bootstrap/Card";
import "./EthicsCard.css";

const EthicsCard = props => {
  const imgStyle = {
    height: `${props.height}`,
    width: `${props.width}`
  };

  return (
    <Card className="ethics-card-container">
      <Card.Body>
        <Card.Text className="card-text">{props.ethicsText}</Card.Text>
        <div className="img-big-container">
          <Card.Img
            variant="bottom"
            className="img-container"
            src={props.image}
            style={imgStyle}
          />
        </div>
      </Card.Body>
    </Card>
  );
};

export default EthicsCard;
