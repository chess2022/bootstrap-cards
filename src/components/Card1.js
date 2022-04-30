import React from 'react'
import CardBody from './CardBody'
import CardImage from './CardImage'

//create the component
const Card1 = () => {
return (
  <div className="card" style={{ width: "18rem" }}>
    <CardImage
      imgSrc="https://images.unsplash.com/photo-1560703650-ef3e0f254ae0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
      imgAlt=""
      imgStyle="card-img-top"
    />
    <CardBody
      cardTitle="Card 1"
      cardText="Some quick example text to build on the card title and make up the
          bulk of the card's content."
    />
  </div>
);
};

//export the component 
export default Card1