import React from "react";
import CardImage from "./CardImage";
import CardBody from "./CardBody";


const Card2 = () => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <CardImage
        imgSrc="https://images.unsplash.com/photo-1498712964741-5d33ab9e5017?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=600"
        imgAlt=""
        imgStyle="card-img-top"
      />
      <CardBody
        cardTitle="Card 2"
        cardText="Some quick example text to build on the card title and make up the
          bulk of the card's content."
      />
    </div>
  );
};
export default Card2;