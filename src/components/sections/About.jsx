import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import { useRef } from "react";
import { Button } from "../ui/button";
import Showcase from "../common/Showcase";

const About = () => {
  // Single ref to store all paragraph elements
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
              each: 0.3,
              from: "start",
            },
            duration: 1.5,
            delay: index * 0.5, // Optional: stagger paragraphs
          });
        }
      });
    },
    { scope: sectionRef, dependencies: [] }
  );

  return (
    <section
      ref={sectionRef}
      className="mx-auto container md:px-6 md:py-12 p-8 about-section bg-[#000] bg-[url('/noise.png')]"
    id="about">
      <h2 className="md:text-5xl text-2xl font-semibold leading-[120%] tracking-[-1px]">
        About Equinox©
      </h2>
      <div className="flex max-md:flex-col justify-between items-start gap-6">
        <div >
          <p
            ref={setParagraphRef}
            className="md:text-[18px] text-sm font-medium md:max-w-[400px] w-full mt-5 about"
          >
            AN INTERNATIONAL DIGITAL DESIGN STUDIO REIMAGINING HOW PEOPLE CONNECT
            WITH BRANDS.
          </p>
        </div>
        <div className="flex flex-col items-start justify-center gap-6">
          <p
            ref={setParagraphRef}
            className="md:text-[18px] text-sm max-md:tracking-wider font-normal max-w-[600px] mt-4 about"
          >
            We're a small team of curious humans who create work we’re proud of for
            people and brands we believe in. With collaboration at the heart of
            every project, we identify what skills are required and then bring the
            best people together to create something truly extraordinary.
          </p>
          <Button className="p-6 rounded-4xl text-[16px] font-normal border-2">
            Show details -- about us
          </Button>
        </div>
      </div>
      <div className="mt-10"><Showcase /></div>
    </section>
  );
};

export default About;