import React, {useRef} from 'react'
import { Button } from '../ui/button'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import SplitText from 'gsap/SplitText';


const Cta = () => {
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
 <section className='w-full flex items-center justify-around service' ref={sectionRef}>
    {/* <div className='left-vector'>
        <svg width="361" height="172" viewBox="0 0 361 172" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M271 50C294.869 50 317.761 59.4821 334.64 76.3604C351.518 93.2387 361 116.131 361 140C361 163.869 351.518 186.761 334.64 203.64C317.761 220.518 294.869 230 271 230L271 140V50Z" fill="#F4D452"/>
<path d="M180 50C203.869 50 226.761 59.4821 243.64 76.3604C260.518 93.2387 270 116.131 270 140C270 163.869 260.518 186.761 243.64 203.64C226.761 220.518 203.869 230 180 230L180 140V50Z" fill="#22242F"/>
<circle cx="90" cy="140" r="90" fill="#22242F"/>
<rect width="100" height="100" rx="50" fill="#6BB38D"/>
<path d="M49.3875 78.8125C52.6875 78.8125 54.6375 76.4125 54.6375 72.8125C54.6375 66.6625 50.8875 63.3625 50.4375 51.2125C60.7875 57.6625 61.6875 62.4625 66.9375 65.6125C68.2875 66.3625 69.3375 66.6625 70.5375 66.6625C72.3375 66.6625 73.8375 65.7625 74.8875 64.1125C75.3375 63.3625 75.4875 62.4625 75.4875 61.5625C75.4875 59.7625 74.2875 57.9625 72.1875 56.7625C66.7875 53.7625 61.8375 55.2625 51.1875 49.7125C61.8375 43.8625 66.7875 45.3625 72.1875 42.3625C74.2875 41.0125 75.4875 39.3625 75.4875 37.4125C75.4875 36.6625 75.3375 35.7625 74.8875 34.8625C73.8375 33.2125 72.3375 32.3125 70.5375 32.3125C69.3375 32.3125 68.2875 32.6125 66.9375 33.3625C61.6875 36.5125 60.7875 41.7625 50.4375 48.0625C50.7375 35.9125 54.6375 32.4625 54.6375 26.1625C54.6375 22.5625 52.6875 20.3125 49.3875 20.3125C46.2375 20.3125 44.2875 22.5625 44.2875 26.1625C44.2875 32.4625 48.4875 35.7625 48.7875 48.0625C38.1375 41.6125 37.2375 36.5125 31.8375 33.3625C30.6375 32.6125 29.5875 32.3125 28.3875 32.3125C26.5875 32.3125 25.0875 33.2125 24.0375 34.8625C23.5875 35.7625 23.4375 36.6625 23.4375 37.4125C23.4375 39.3625 24.6375 41.0125 26.7375 42.3625C32.1375 45.3625 36.7875 43.8625 47.7375 49.7125C37.0875 55.4125 31.9875 53.7625 26.7375 56.7625C24.6375 57.9625 23.4375 59.7625 23.4375 61.5625C23.4375 62.4625 23.5875 63.3625 24.0375 64.1125C25.0875 65.7625 26.5875 66.6625 28.3875 66.6625C29.5875 66.6625 30.6375 66.3625 31.8375 65.6125C37.2375 62.4625 38.1375 57.8125 48.6375 51.2125C48.1875 63.5125 44.2875 66.5125 44.2875 72.8125C44.2875 76.4125 46.2375 78.8125 49.3875 78.8125Z" fill="black"/>
</svg>
    </div> */}

    <div className='right-vector'>
       <svg width="215" height="311" viewBox="0 0 215 311" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M110 131C133.869 131 156.761 140.482 173.64 157.36C190.518 174.239 200 197.131 200 221C200 244.869 190.518 267.761 173.64 284.64C156.761 301.518 133.869 311 110 311L110 221V131Z" fill="#5A6DED"/>
<path d="M155 90C155 40.2944 195.294 0 245 0H335V90C335 139.706 294.706 180 245 180C195.294 180 155 139.706 155 90Z" fill="#B277CF"/>
<g clip-path="url(#clip0_710_358)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M70 20C70 8.9543 78.9543 0 90 0C101.046 0 110 8.95431 110 20V41.2792L125.137 26.1421C132.948 18.3316 145.611 18.3316 153.421 26.1421C161.232 33.9526 161.232 46.6159 153.421 54.4264L137.848 70H160C171.046 70 180 78.9543 180 90C180 101.046 171.046 110 160 110H138.284L153.421 125.137C161.232 132.948 161.232 145.611 153.421 153.421C145.611 161.232 132.948 161.232 125.137 153.421L110 138.284V160C110 171.046 101.046 180 90 180C78.9543 180 70 171.046 70 160V137.848L54.4264 153.421C46.6159 161.232 33.9526 161.232 26.1421 153.421C18.3316 145.611 18.3316 132.948 26.1421 125.137L41.2792 110H20C8.95431 110 0 101.046 0 90C0 78.9543 8.9543 70 20 70H41.7157L26.1421 54.4264C18.3316 46.616 18.3316 33.9527 26.1421 26.1422C33.9526 18.3317 46.6159 18.3317 54.4264 26.1422L70 41.7158V20Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_710_358">
<rect width="180" height="180" fill="white"/>
</clipPath>
</defs>
</svg>

    </div>
     <div className='container mx-auto px-6 py-12 flex flex-col justify-between items-center gap-15' >
        <Button className='rounded-2xl'>CONTACT ME</Button>
        <h2 className='text-5xl font-medium leading-[120%] max-w-[600px] text-center'  ref={setParagraphRef}>Let’s start building your branding, <span className='text-[var(--primary-color)]'>today.</span></h2>
        <div className='flex gap-4 items-center'>
            <Button className='hover:bg-[var(--primary-color)] cursor-pointer p-6 rounded-4xl text-[16px] text-black font-medium bg-[var(--primary-color)]'>Get started for free</Button>
            <Button className='hover:bg-black cursor-pointer p-6 rounded-4xl text-[16px] font-medium bg-black border-1 border-gray-500'>Contact sales</Button>
        </div>
     </div>
    </section>
  )
}

export default Cta
