import React from "react";
import CardEdit from '../edit/CardEdit';
import CardView from '../view/CardView';

const Card = (props) => {
  return props.editing ? <CardEdit {...props} /> : <CardView {...props} />;
};

export default Card;