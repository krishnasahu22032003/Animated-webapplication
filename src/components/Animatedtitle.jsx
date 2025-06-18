import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import clsx from "clsx"; // Make sure you have this installed

gsap.registerPlugin(ScrollTrigger);

const AnimatedTitle = ({ title, containerClass = "" }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const titleAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "center 60%",
          toggleActions: "play none none reverse",
        },
      });

      titleAnimation.to(
        containerRef.current.querySelectorAll(".animated-word"),
        {
          opacity: 1,
          transform: "translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)",
          ease: "power2.inOut",
          stagger: 0.02,
        },
        0
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className={clsx("animated-title", containerClass)}>
      {title.split("<br />").map((line, lineIndex) => (
        <div
          key={lineIndex}
          className="flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3"
        >
          {line
            .split(" ")
            .filter(Boolean)
            .map((word, wordIndex) => (
              <span
                key={wordIndex}
                className="animated-word"
                style={{
                  opacity: 0,
                  transform:
                    "translate3d(0, 40%, 0) rotateY(60deg) rotateX(10deg)",
                  display: "inline-block",
                }}
                dangerouslySetInnerHTML={{ __html: word }}
              />
            ))}
        </div>
      ))}
    </div>
  );
};

export default AnimatedTitle;
