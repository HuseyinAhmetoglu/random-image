import React from "react";
import Bird from "../images/bird.jpg";
import Cat from "../images/cat.jpg";
import Dog from "../images/dog.jpg";
import Fish from "../images/fish.jpg";

export default function Image(props) {
  const imageList = {
    Bird,
    Cat,
    Dog,
    Fish,
  };
  const { image } = props;
  return (
    <div>
      <img src={imageList[image]} alt="" />
    </div>
  );
}
