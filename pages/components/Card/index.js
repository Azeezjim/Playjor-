import React from "react";
import Cardfooter from "./Cardfooter";
import Cardbody from "./Cardbody";
import Cardtop from "./Cardtop";

const Card = ({card}) => {
  console.log('this are the cards' , card);
  return (
    <div>
      <Cardtop personname={card.name} apersont={card.at} persondate={card.date} personimage={card.image}/>
      <Cardbody bodyimage={card.bodyimage} body={card.body} />
      <Cardfooter likes={card.likes} comments={card.comment}/>
    </div>
  );
};

export default Card;
