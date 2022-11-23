import { createContext, Dispatch, SetStateAction, useState } from "react";

type LightBox = {
  isLightBoxOpen: boolean;
  setIsLightBoxOpen: Dispatch<SetStateAction<boolean>>;
};

const LightBoxContext = createContext<LightBox>({
  isLightBoxOpen: false,
  setIsLightBoxOpen: () => null,
});

export const LightBoxProvider = ({ children }: { children: JSX.Element }) => {
  const [isLightBoxOpen, setIsLightBoxOpen] = useState(false);

  return (
    <LightBoxContext.Provider value={{ isLightBoxOpen, setIsLightBoxOpen }}>
      {children}
    </LightBoxContext.Provider>
  );
};

export default LightBoxContext;
