import React from "react";
import data from "../data/data.json";
import Card from "../components/Card";

function Slideshow() {
  return (
    <div>
      {/*  {data.map((painting, index) => (
        <Card {...painting} key={index} />
      ))} */}
      <Card />
    </div>
  );
}

export default Slideshow;
