import React from "react";
import CardEdit from "./CardEdit";
import CardView from "./CardView";

const Card = (props) => {
  return props.editing ? <CardEdit {...props} /> : <CardView {...props} />;
};

export default Card;