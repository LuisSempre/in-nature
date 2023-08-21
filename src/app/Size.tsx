import React, { useCallback, useEffect, useState } from "react";

interface ScrollValue {
  innerWidth: number;
}

export const SizeContext = React.createContext<ScrollValue>({
  innerWidth: 0,
});

const Size: React.FC = ({ children }) => {
  const [innerWidth, setInnerWidth] = useState(0);
  const handleResize = useCallback(() => {
    setInnerWidth(window.innerWidth);
  }, [handleResize]);

  return (
    <SizeContext.Provider value={{ innerWidth }}>
      {childrem}
    </SizeContext.Provider>
  );
};

export default Size;
