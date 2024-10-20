"use client";

import Image from "next/image";
import Link from "next/link";
import JeszczeStrona from "@/public/JeszczeStrona.webp";
import BalanceBook from "@/public/BalanceBook.webp";
import Biceps from "@/public/Biceps.webp";
import Robson from "@/public/Robson.webp";
import { useEffect, useState } from "react";

function HomeClientCarousel() {
  const [isPercent, setIsPercent] = useState(0);
  const [isHover, setIsHover] = useState(false);

  const button1BG =
    isPercent === 0 ? `bg-[#575858]` : `bg-[#ababab] hover:bg-[#bbbcbc]`;
  const button2BG =
    isPercent === -25 ? `bg-[#575858]` : `bg-[#ababab] hover:bg-[#bbbcbc]`;
  const button3BG =
    isPercent === -50 ? `bg-[#575858]` : `bg-[#ababab] hover:bg-[#bbbcbc]`;
  const button4BG =
    isPercent === -75 ? `bg-[#575858]` : `bg-[#ababab] hover:bg-[#bbbcbc]`;

  useEffect(() => {
    if (!isHover) {
      const interval = setInterval(() => {
        if (isPercent > -75) setIsPercent((p) => p - 25);
        if (isPercent <= -75) setIsPercent((p) => (p = 0));
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isPercent, isHover]);

  return (
    <div className="overflow-x-hidden w-[75%] max-sm:w-[95%] ">
      <div
        className="flex w-[400%] transition-all duration-500 justify-center justify-items-center"
        style={{ transform: `translateX(${isPercent}%)` }}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <div className="w-screen grid p-4 max-sm:p-2">
          <h3 className="text-3xl opacity-90 text-center pb-6 max-sm:text-xl max-sm:pb-4">
            JeszczeStronaAlboSto
          </h3>
          <Link
            href="https://www.jeszczestronaalbosto.pl/"
            target="_blank"
            className="justify-self-center"
          >
            <Image
              src={JeszczeStrona}
              alt="Client page"
              className="justify-self-center transition-all duration-500 hover:scale-[1.02]"
            />
          </Link>
        </div>
        <div className=" w-screen grid p-4 max-sm:p-2">
          <h3 className="text-3xl opacity-90 text-center pb-6 max-sm:text-xl max-sm:pb-4">
            BalanceBook
          </h3>
          <Link
            href="https://www.balancebook.pl/"
            target="_blank"
            className="justify-self-center"
          >
            <Image
              src={BalanceBook}
              alt="Client page"
              className="justify-self-center transition-all duration-500 hover:scale-[1.02]"
            />
          </Link>
        </div>
        <div className=" w-screen grid p-4 max-sm:p-2">
          <h3 className="text-3xl opacity-90 text-center pb-6 max-sm:text-xl max-sm:pb-4">
            Biceps
          </h3>
          <Link
            href="https://www.odzywki-legionowo.pl/"
            target="_blank"
            className="justify-self-center"
          >
            <Image
              src={Biceps}
              alt="Client page"
              className="justify-self-center transition-all duration-500 hover:scale-[1.02]"
            />
          </Link>
        </div>
        <div className="w-screen grid p-4 max-sm:p-2">
          <h3 className="text-3xl opacity-90 text-center pb-6 max-sm:text-xl max-sm:pb-4">
            Photobooth360
          </h3>
          <Link
            href="https://robson-fotobudka360.pl/"
            target="_blank"
            className="justify-self-center"
          >
            <Image
              src={Robson}
              alt="Client page"
              className="justify-self-center transition-all duration-500 hover:scale-[1.02]"
            />
          </Link>
        </div>
      </div>
      <div className="p-8 flex gap-8 justify-center max-sm:gap-4 max-sm:p-3">
        <button
          className={`p-4 ${button1BG} rounded-full drop-shadow-sm transition-all duration-300 max-sm:p-3`}
          onClick={() => setIsPercent(0)}
        ></button>
        <button
          className={`p-4 ${button2BG} rounded-full drop-shadow-sm transition-all duration-300 max-sm:p-3`}
          onClick={() => setIsPercent(-25)}
        ></button>
        <button
          className={`p-4 ${button3BG} rounded-full drop-shadow-sm transition-all duration-300 max-sm:p-3`}
          onClick={() => setIsPercent(-50)}
        ></button>
        <button
          className={`p-4 ${button4BG} rounded-full drop-shadow-sm transition-all duration-300 max-sm:p-3`}
          onClick={() => setIsPercent(-75)}
        ></button>
      </div>
    </div>
  );
}

export default HomeClientCarousel;
