import { Painting } from "../model/painting";
import data from "../data/data.json";
import { useState } from "react";

type IProp = {
  painting: Painting;
};
const Card = () => {
  const [item, setItem] = useState(data);
  const [value, setValue] = useState(1);

  const { name, images, artist, year, description, source } = item[value];
  return (
    <>
      <h1>{name}</h1>
      <p>{description}</p>
      <small>{year}</small>
      <button onClick={() => setValue((cur) => cur + 1)}>Next</button>
    </>
  );
};

export default Card;
