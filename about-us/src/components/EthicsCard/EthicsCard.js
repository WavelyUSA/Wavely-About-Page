import React from "react";
import Card from "react-bootstrap/Card";
import "./EthicsCard.css";

const EthicsCard = props => {
  return (
    <Card className="ethics-card-container">
      <Card.Body className="ethics-card-body">
        <Card.Text className="ethics-card-text">{props.ethicsText}</Card.Text>
        <div className="img-big-container">
          <Card.Img className="img-container" src={props.image} />
        </div>
      </Card.Body>
    </Card>
  );
};

export default EthicsCard;
