import { useEffect, useState } from "react";

export default function useWindowSize() {
  const [screenSize, getDimension] = useState({
    width: 782,
    height: 0,
  });

  const setDimension = () => {
    getDimension({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    if (screenSize.width === 782) {
      getDimension({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", setDimension);

    return () => {
      window.removeEventListener("resize", setDimension);
    };
  }, [screenSize]);

  return screenSize;
}
