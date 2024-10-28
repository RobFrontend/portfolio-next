"use client";
import { useEffect, useState } from "react";

function OpacityH1() {
  const [isOpacity, setIsOpacity] = useState(80);
  useEffect(() => {
    const interval = setInterval(() => {
      setIsOpacity((op) => (op === 80 ? 50 : 80));
    }, 2000);
    return () => clearInterval(interval);
  }, [isOpacity]);
  const opacityClass = isOpacity === 80 ? "opacity-80" : "opacity-50";
  return (
    <h1
      className={`${opacityClass} text-4xl uppercase tracking-[-4px] font-[300] transition-all duration-1000 headingPrimary`}
    >
      Robert Grabowski
    </h1>
  );
}

export default OpacityH1;
