import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap'
import SplitText from 'gsap/SplitText';
import image1 from "../../assets/images/blog/image1.png";
import image2 from "../../assets/images/blog/image2.png";
import {Button} from "../ui/button"

const Blog = () => {

  const blog = [{
    image : image1,
    title : "How to design a world-class homepage"
  },
{
      image : image2,
    title : "Direct-to-consumer-to-retail: Planning for the Omnichannel Future"
},
{
      image : image1,
    title : "The future is Filtered: Key Considerations for your product"
}
]

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
    <section   ref={sectionRef} className="w-full flex flex-col items-center justify-around text-white my-16">
      <div className="container mx-auto px-6 py-12 flex flex-col gap-10 justify-center">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6">
          <h2  ref={setParagraphRef}  className="text-4xl md:text-5xl font-semibold leading-[120%] tracking-[-1px] max-w-[600px]">
         Latest stories Colstic©
          </h2>
          <p  ref={setParagraphRef} className="text-lg font-normal max-w-[380px] text-[#EDEDED]">
           Latest stories form Colstic and you must to know about stories Colstic    
          </p>
        </div>
        <ul className='flex justify-between items-center gap-8 mt-10 w-full'>
          {blog.map((item, i) => (
            <li key={i}  className='w-full h-[430px] flex flex-col gap-4'>
              <img src={item.image} alt="blog-img" className='rounded-ss-3xl w-full aspect-auto object-cover rounded-se-3xl h-[400px]'/>
              <h2 className='text-2xl font-semibold'>{item.title}</h2>
            </li>
          ))}
        </ul>
        <div className='w-[100px] mt-20 mx-auto'>
        <Button className=" py-8 px-10 rounded-4xl text-[16px] text-black font-medium hover:bg-[var(--primary-color)] cursor-pointer bg-[var(--primary-color)]">See more stories</Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
