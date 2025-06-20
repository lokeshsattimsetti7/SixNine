import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const LoadingScreen = ({ onComplete }) => {
  const leftDoor = useRef(null);
  const rightDoor = useRef(null);
  const container = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        if (onComplete) onComplete();
      },
    });

    tl.to(leftDoor.current, {
      x: "-100%",
      duration: 1.2,
      ease: "power4.inOut",
    })
      .to(
        rightDoor.current,
        {
          x: "100%",
          duration: 1.2,
          ease: "power4.inOut",
        },
        "<"
      )
      .to(container.current, {
        opacity: 0,
        pointerEvents: "none",
        duration: 0.3,
      });
  }, []);

  return (
    <div ref={container} className="fixed inset-0 z-50 flex">
      <div ref={leftDoor} className="w-1/2 h-full bg-[#1a1a1a]"></div>
      <div ref={rightDoor} className="w-1/2 h-full bg-[#1a1a1a]"></div>
    </div>
  );
};

export default LoadingScreen;
