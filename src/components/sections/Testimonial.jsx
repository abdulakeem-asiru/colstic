import { useRef } from 'react';
import TestimonialSlider from '../common/TestimonialSlider';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap'
import SplitText from 'gsap/SplitText';


const Testimonial = () => {

    const paragraphRef = useRef([]);
    const sectionRef = useRef(null);
  
    // Callback to collect paragraph elements into paragraphRef
    const setParagraphRef = (element) => {
      if (element && !paragraphRef.current.includes(element)) {
        paragraphRef.current.push(element);
      }
    };

  useGSAP(
    () => {
      paragraphRef.current.forEach((paragraph, index) => {
        if (paragraph) {
          const split = new SplitText(paragraph, { type: "lines" });
          gsap.set(split.lines, { overflow: "hidden" });

          gsap.timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "100% 100%",
              toggleActions: "play none none reverse",
              scrub: 1,
            },
          }).from(split.lines, {
            yPercent: 100,
            opacity: 0,
            ease: "power2.out",
            stagger: {
              each: 0.1,
              from: "start",
            },
            duration: 1.5,
            delay: index * 0.5,
          });
        }
      });
    },
    { scope: sectionRef, dependencies: [] }
  );


  return (
    <section   ref={sectionRef} className="w-full flex flex-col items-center justify-around text-white bg-gradient-to-b from-[#101010] to-[#2B2B2B] mt-16 mb-0 ">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6">
          <h2  ref={setParagraphRef}  className="text-3xl md:text-5xl font-semibold leading-[120%] tracking-[-1px] max-w-[600px]">
            Words from clients & partnership testimonials.
          </h2>
          <p  ref={setParagraphRef} className="text-sm md:text-lg font-normal w-full md:max-w-[380px] text-[#EDEDED]">
            A short or long additional place of description or information goes in here.
          </p>
        </div>
      </div>

      <div className="w-full">
        <TestimonialSlider />
      </div>
    </section>
  );
};

export default Testimonial;
