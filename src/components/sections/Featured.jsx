import React, { useRef, useLayoutEffect } from 'react';
import { Button } from '../ui/button';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import image1 from "../../assets/images/featured/image.png";
import image2 from "../../assets/images/featured/image-1.png";
import image3 from "../../assets/images/featured/image-2.png";
import image4 from "../../assets/images/featured/image-3.png";
import image5 from "../../assets/images/featured/image-4.png";
import image6 from "../../assets/images/featured/image-5.png";
import brick from "../../assets/images/brick-white.png";

gsap.registerPlugin(ScrollTrigger);

const Featured = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.from('.featured-item', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          scrub: 1,
        },
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 0.6,
        ease: 'power2.out',
      });

      gsap.timeline({
        scrollTrigger: {
          trigger: imageRef.current,
          scrub: 1,
          start: 'top center',
          end: 'bottom center',
        },
        ease: 'slow(0.7, 0.7, false)',
      }).to(imageRef.current, {
        rotateX: 20,
        rotateY: 20,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  useLayoutEffect(() => {
    // Force refresh after DOM is painted
    ScrollTrigger.refresh();
  }, []);

  const featured = [
    { imagePath: image1, caption: 'Hitachi Digital Brand Ecosystem.' },
    { imagePath: image2, caption: 'Stråbe' },
    { imagePath: image3, caption: 'Commons.' },
    { imagePath: image4, caption: 'Aeizei' },
    { imagePath: image5, caption: 'Zvurçyk Fashion' },
    { imagePath: image6, caption: 'Lancome' },
  ];

  return (
    <section className="w-full h-full flex items-center justify-around border-y border-gray-600 text-white my-15">
      <div className="container mx-auto px-6 py-12 flex max-lg:flex-col max-lg:gap-20 justify-between items-start">
        <div className="flex flex-col items-center justify-center gap-20">
          <div>
            <h2 className="md:text-5xl text-3xl font-semibold leading-[120%] tracking-[-1px] max-w-[500px]">
              Featured works from Equinox©
            </h2>
            <p className="mt-2">All featured works from Equinox and you can see more the projects</p>
            <Button className="hover:bg-[var(--primary-color)] cursor-pointer p-6 rounded-4xl text-[16px] text-black mt-8 font-medium bg-[var(--primary-color)]">
              See detail — our works
            </Button>
          </div>
          <img
            ref={imageRef}
            src={brick}
            alt="services"
            className="w-[450px] mt-5 featured-image"
          />
        </div>

        <div ref={containerRef} className="max-w-[600px] grid grid-cols-2 gap-6">
          {featured.map((item, index) => (
            <div key={index} className="flex flex-col items-start gap-2 featured-item">
              <img src={item.imagePath} alt={item.caption} className="w-full h-auto rounded-lg" />
              <p className="mt-2 text-center">{item.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
