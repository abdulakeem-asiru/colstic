import {useRef} from 'react'
import { Header } from './Header'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import SplitText from 'gsap/SplitText'
import heroVideo from "../../assets/video/hero-video.mp4"
import spring from "../../assets/images/spring.png"
import heroImage from "../../assets/images/hero-img.png"

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
        }, "-=2")

        tl.from('.hero-video',{
          scale : 0.8,
          opacity : 0,
          duration : 1.5,
          z : -10,
          ease : "back.out"
        }, "1.2")

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
    <div className='relative noisy'>
     <div className="absolute inset-0 bg-[url('/row.png')] bg-contain bg-center opacity-10 z-0"></div>
      <Header />
      <section className="hero-section mt-10 container mx-auto md:px-6 md:py-12 py-8 px-4">
        <div>
         <p className='md:text-xl text-sm  font-normal sub-heading'>WELCOME TO EQUINOX© — WE ARE BRANDING AGENCY FROM NIGERIA</p>
<h1 className='w-full hero-heading text-3xl md:text-[90px] font-semibold md:leading-[100%] leading-[120%] md:tracking-[-2px] mt-8'>
  WE REIMAGINE&nbsp;

  <div
    className="hero-video md:w-[350px] md:h-[70px] w-20 h-8 ml-2 rounded-full overflow-hidden inline-block md:align-middle ring-4 ring-white"
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
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
  </div>

  <br />
  VISIONS INTO &nbsp;
  <img
    src={heroImage}
    alt="Hero img"
    className='md:inline-block md:w-14 md:h-14 hidden rounded-full ring-8 mb-4 ring-white hero-img self-center'
  />&nbsp;
  INSIGHTS<br className='max-md:hidden' /> AND DIGITAL RESULTS
</h1>

        </div>
        <div className='md:mt-30 my-10 md:mb-15 flex justify-between items-center gap-4 animated-div'>
            <p className='max-w-[500px] paragraph text-sm md:text-xl font-medium leading-[150%]'>Provide the best service and without revision, we are ready to help your business grow more attractive and beauty visuals</p>
         <img src={spring} alt="spring" className='w-10 h-5' />
        </div>
      </section>

    </div>
  )
}

export default Hero
