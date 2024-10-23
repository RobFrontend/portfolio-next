"use client";
import ClientStrona1 from "@/public/ClientStrona1.webp";
import ClientStrona2 from "@/public/ClientStrona2.webp";
import ClientStrona3 from "@/public/ClientStrona3.webp";
import ClientStrona4 from "@/public/ClientStrona4.webp";
import ClientStrona5 from "@/public/ClientStrona5.webp";
import ClientStrona6 from "@/public/ClientStrona6.webp";
import ClientStrona7 from "@/public/ClientStrona7.webp";
import ClientStrona8 from "@/public/ClientStrona8.webp";
import JeszczeStrona from "@/public/JeszczeStrona.webp";
import Image from "next/image";
import { useEffect, useState } from "react";

function ClientProjectCarousel() {
  const [isNumber, setIsNumber] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isNumber === 1) setIsNumber(2);
      if (isNumber === 2) setIsNumber(1);
    }, 4000);
    return () => clearInterval(interval);
  }, [isNumber]);

  const img1 = isNumber === 1 ? "opacity-90" : "opacity-0";
  const img2 = isNumber === 2 ? "opacity-90" : "opacity-0";

  const trans1 = isNumber === 1 && "translate-x-[0%]";
  const trans2 = isNumber === 2 && "translate-x-[-50%]";

  return (
    <div className=" overflow-hidden ">
      <div
        className={`${trans1} ${trans2} $ flex w-[200%]  justify-items-center`}
      >
        <div className="w-screen">
          <Image
            src={ClientStrona6}
            alt="project"
            className={`${img1} transition-opacity duration-1000`}
          />
        </div>
        <div className="w-screen">
          <Image
            src={ClientStrona7}
            alt="project"
            className={`${img2} transition-opacity duration-1000`}
          />
        </div>
      </div>
    </div>
  );
}

export default ClientProjectCarousel;
