import { createContext, Dispatch, SetStateAction, useState } from "react";
import data from "../data/data.json";
import { Painting } from "../model/painting";

type Slider = {
  sliders: Painting[];
  currentIndex: number;
  slider: Painting;
  setCurrentIndex: Dispatch<SetStateAction<number>>;
};

const SliderContext = createContext<Slider>({
  sliders: data,
  currentIndex: 0,
  slider: data[0],
  setCurrentIndex: () => null,
});

export const SliderProvider = ({ children }: { children: JSX.Element }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliders] = useState(data);
  const [slider] = useState(data[currentIndex]);

  return (
    <SliderContext.Provider
      value={{ sliders, slider, currentIndex, setCurrentIndex }}
    >
      {children}
    </SliderContext.Provider>
  );
};
export default SliderContext;
