import { createContext, Dispatch, SetStateAction, useState } from "react";
import data from "../data/data.json";
import { Painting } from "../model/painting";

type Slider = {
  sliders: Painting[];
  currentIndex: number;
  setCurrentIndex: Dispatch<SetStateAction<number>>;
};

const SliderContext = createContext<Slider>({
  sliders: data,
  currentIndex: 0,
  setCurrentIndex: () => null,
});

export const SliderProvider = ({ children }: { children: JSX.Element }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliders] = useState(data);

  return (
    <SliderContext.Provider value={{ sliders, currentIndex, setCurrentIndex }}>
      {children}
    </SliderContext.Provider>
  );
};
export default SliderContext;
