import { createContext, useState } from "react";
import data from "../data/data.json";
import { Painting } from "../model/painting";

type Slider = {
  sliders: Painting[];
};

const SliderContext = createContext<Slider>({
  sliders: data,
});

export const SliderProvider = ({ children }: { children: JSX.Element }) => {
  const [sliders, setSlider] = useState(data);

  return (
    <SliderContext.Provider value={{ sliders }}>
      {children}
    </SliderContext.Provider>
  );
};
export default SliderContext;
