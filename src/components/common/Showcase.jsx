import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const Showcase = () => {
  const ringRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    gsap.to(ringRef.current, {
      rotate: 360,
      repeat: -1,
      ease: 'linear',
      duration: 10,
    });
  }, []);

  return (
    <>
      {/* Poster section */}
      <div className="relative w-full h-[600px] rounded-2xl overflow-hidden bg-black">
        <img
          src="src/assets/images/poster.png"
          alt="Poster collage"
          className="w-full h-full object-cover rounded-4xl"
        />

        {/* Play button */}
        <button
          onClick={() => setIsOpen(true)}
          className="absolute inset-0 flex items-center justify-center z-10"
        >
          <div className="relative w-50 h-50">
            {/* Rotating ring */}
            <div
              ref={ringRef}
              className="absolute inset-0 w-full h-full flex items-center justify-center"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <defs>
                  <path
                    id="circlePath"
                    d="M50,50 m-35,0 a35,35 0 1,1 70,0 a35,35 0 1,1 -70,0"
                  />
                </defs>
                <text fill="#ADFF2F" fontSize="6" fontWeight="bold" color='#ADFF2F' className='z-10'> 
                  <textPath xlinkHref="#circlePath" startOffset="0%">
                    PLAY VIDEO – PLAY VIDEO – PLAY VIDEO –
                  </textPath>
                </text>
              </svg>
            </div>

            {/* Center triangle */}
            <div className="absolute inset-0 flex items-center justify-center bg-black rounded-full">
              <svg viewBox="0 0 100 100" className="w-20 h-20 fill-[#ADFF2F]">
                <polygon points="40,30 70,50 40,70" />
              </svg>
            </div>
          </div>
        </button>
      </div>
      
        {/* Footer */}
        <div className="text-white text-xl mt-4 flex items-center justify-between">
          <p>Showcase Work Colstics ©</p>
          <p>Showcase Project 2016-2023</p>
        </div>
      {/* Video Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
          <div className="relative w-full max-w-4xl aspect-video">
            <video controls autoPlay muted className="w-full h-full object-contain">
              <source src="/videos/demo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-white text-2xl"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Showcase;
