import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import poster from "../../assets/images/poster.png";
import { useGSAP } from "@gsap/react";

const Showcase = () => {
  const ringRef = useRef(null);
  const buttonRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  useGSAP(() => {
    // Continuous rotation of the ring
    gsap.to(ringRef.current, {
      rotate: 360,
      repeat: -1,
      ease: "linear",
      duration: 20,
    });

    // Hover animation for the button
    gsap.to(buttonRef.current, {
      scale: 1.1,
      duration: 0.3,
      ease: "power1.out",
    });

  }, []); // 

  return (
    <>
      {/* Poster section */}
      <div className="relative w-full md:h-[600px] h-[400px] rounded-2xl overflow-hidden bg-black">
        <img
          src={poster}
          alt="Poster collage"
          className="w-full h-full object-cover rounded-2xl"
        />

        {/* Play button */}
        <button
          ref={buttonRef}
          onClick={() => setIsOpen(true)}
          className="absolute inset-0 flex items-center justify-center z-10 "
        >
          <div className="relative w-50 h-50">
            {/* Rotating ring with text */}
            <div
              ref={ringRef}
              className="absolute inset-0 w-full h-full flex items-center justify-center"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <defs>
                  <path
                    id="circlePath"
                    d="M 10 50 a 40 40 0 1 1 80 0 a 40 40 0 1 1 -80 0"
                    
                  />
                </defs>
                <text
                  fill="#ADFd50"
                  opacity={0.8}
                  fontSize="6"
                  fontWeight="bold"
                >
                  <textPath xlinkHref="#circlePath" startOffset="0%">
                    PLAY VIDEO – PLAY VIDEO – PLAY VIDEO – – PLAY VIDEO – – PLAY VIDEO – – PLAY VIDEO 
                  </textPath>
                </text>
              </svg>
            </div>

            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-[#2B2B2B] to-[#101010] z-[-100] rounded-full">
              <svg
                viewBox="0 0 100 100"
                className="w-20 h-20 fill-[#ADFF2F] filter drop-shadow([0_0_10px_#ADFF2F])"
              >
                <polygon points="40,30 70,50 40,70" />
              </svg>
            </div>
          </div>
        </button>
      </div>

      {/* Footer */}
      <div className="text-white text-sm md:text-xl mt-4 flex items-center gap-10 justify-between">
        <p>Showcase Work Colstics ©</p>
        <p>Showcase Project 2016-2023</p>
      </div>

      {/* Video Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black  flex items-center justify-center">
          <div className="relative w-full max-w-4xl aspect-video">
            <video controls autoPlay muted className="w-full h-full object-contain">
              <source src="/videos/demo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-white text-2xl"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Showcase;