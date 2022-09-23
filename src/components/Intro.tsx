import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Intro: React.FC<{ done: () => void }> = ({ done }) => {
  const wrapperRef = useRef<HTMLDivElement>(null!);
  const textRef = useRef<HTMLHeadingElement>(null!);

  useEffect(() => {
    if (wrapperRef.current && textRef.current) {
      gsap
        .timeline()
        .to(textRef.current, {
          opacity: 1,
          translateY: 0,
          duration: 2,
        })
        .to(wrapperRef.current, {
          opacity: 0,
          duration: 1,
          onComplete: done,
        });
    }
  }, [textRef, wrapperRef, gsap]);

  return (
    <div
      ref={wrapperRef}
      className="bg-white w-full h-screen fixed z-50 uppercase flex justify-center items-center"
    >
      <h3 ref={textRef} className="opacity-0 translate-y-[300px]">
        Idea by: tympanus.net -- Made by Mohamed Refaay
      </h3>
    </div>
  );
};

export default Intro;
