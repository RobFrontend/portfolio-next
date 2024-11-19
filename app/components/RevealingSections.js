"use client";

import { useEffect, useRef, useState } from "react";

function RevealingSections({ children }) {
  const aboutEl = useRef(null);
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    if (aboutEl.current) {
      const about = aboutEl.current;
      const handleIntersection = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsShow(true);
          }
        });
      };

      const observer = new IntersectionObserver(handleIntersection, {
        root: null,
        threshold: 0.1,
      });

      observer.observe(about);

      return () => {
        observer.unobserve(about);
      };
    }
  }, [isShow]);
  return (
    <div
      ref={aboutEl}
      className={`${
        isShow ? "opacity-100" : "opacity-0 translate-y-6"
      } transition-all duration-1000`}
    >
      {children}
    </div>
  );
}

export default RevealingSections;
