import {useRef} from 'react'
import { Header } from './Header'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import SplitText from 'gsap/SplitText'
import heroVideo from "../../assets/video/hero-video.mp4"
import spring from "../../assets/images/spring.png"
import heroImage from "../../assets/images/hero-img.jpg"

const Hero = () => {
  const videoRef = useRef(null);
  
   const handleMouseEnter = () => {
    videoRef.current?.play();
  };

  const handleMouseLeave = () => {
    videoRef.current?.pause();
    videoRef.current.currentTime = 0;
  };

  useGSAP(() => {
    const subHeading = new SplitText(".sub-heading", { type: "chars" });
    const heroHeading = new SplitText(".hero-heading", { type: "lines" });
    const paragraph = new SplitText(".paragraph", { type: "lines" });

    const tl = gsap.timeline({ defaults: { duration: 0.5 } });
     tl.from(subHeading.chars, {
            xPercent: '100',
            opacity: 0,
            ease: 'back.out(1.7)',
            stagger: 0.03
        });

        tl.from(heroHeading.lines, {
            yPercent: '50',
            opacity: 0,
            duration: 2,
            ease: 'slow(0.7, 0.7, false),',
            stagger: {
              each: 0.7,
              from: "start"
            }
        }, "-=2");

        gsap.from(".hero-img", {
          scale: 0.1,
          opacity: 0,
          duration: 2.5,
          rotation: 360,
          transformOrigin: "center",
          ease: "back.out(1.7)",
        })

        const animatedDiv = gsap.timeline({ defaults: { duration: 0.5 },
          scrollTrigger: {
            trigger: ".animated-div",
            start: "top bottom",
            end: "100 100%",
            toggleActions: "play none none reverse",
            scrub: 1,
          }
        })
        
        animatedDiv.from(paragraph.lines, {
          yPercent: '100',
          opacity: 0,
          ease: "slow(0.7, 0.7, false)",
          stagger: {
            each: 0.7,
            from: "start"
          },
          duration: 1.5
        });

  })
  return (
    <div className='relative'>
     <div className="absolute inset-0 bg-[url('./row.png')] bg-contain bg-center opacity-10 z-0"></div>
      <Header />
      <section className="hero-section mt-10 container mx-auto px-6 py-12">
        <div>
         <p className='text-xl italic font-normal sub-heading'>WELCOME TO COLSTIC© — WE ARE BRANDING AGENCY FROM LONDON</p>
         <h1 className='w-full hero-heading text-[90px] font-semibold leading-[100%] tracking-[-2px] mt-8  '>WE TRANSFROM &nbsp; 
          
          <div
          className="w-[350px] h-[70px] rounded-full overflow-hidden inline-block align-middle ring-4 ring-white"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={ handleMouseLeave}
        >
          <video
            ref={videoRef}
            src={heroVideo}
            className="object-cover w-full h-full"
            muted
            autoPlay
            preload="metadata"
            loop
            playsInline
          />
        </div> <br />IDEAS INTO  <img src={heroImage} alt="Hero img" className='inline-block w-16 h-16 rounded-full ring-6 ring-white hero-img my-auto align-middle' />&nbsp; THOUGHTS<br /> AND DIGITAL OUTCOMES</h1>
        </div>
        <div className='mt-30 mb-15 flex justify-between items-center gap-4 animated-div'>
          <p className='max-w-[500px] paragraph text-xl font-medium leading-[150%]'>Provide the best service and without revision, we are ready to help your business grow more attractive and beauty visuals</p>
        <img src={spring} alt="spring" className='w-10 h-5' />
        </div>
      </section>

    </div>
  )
}

export default Hero
