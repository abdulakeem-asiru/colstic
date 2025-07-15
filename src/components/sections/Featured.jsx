import React, {useRef} from 'react'
import {Button} from '../ui/Button'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Featured = () => {
const containerRef = useRef(null);

  useGSAP(() =>{
    gsap.from(('.featured-item'), {
      scrollTrigger: {
        trigger: containerRef.current,   
        start: "top 80%",
        scrub: 1,
      },
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 0.6,
      ease: "power2.out",
    })

    gsap.timeline({scrollTrigger: {
      trigger: '.featured-image',
      scrub: 1,
      start: 'top center',
      end: 'bottom center',
    }, ease: 'slow(0.7, 0.7, false)'})
    .to('.featured-image', {
      rotateX: 20,
      rotateY: 20,
      scaleX: 1.02,

    })
  })

      const featured = [
  {
    imagePath: 'src/assets/images/featured/image.png',
    caption:
      'Hitachi Digital Brand Ecosystem.',
  },
  {
    imagePath: 'src/assets/images/featured/image-1.png',
    caption:
      'Stråbe',
  },
  {
    imagePath: 'src/assets/images/featured/image-2.png',
    caption:
      'Commons.',
  },
  {
    imagePath: 'src/assets/images/featured/image-3.png',
    caption:
      'Aeizei',
  },
  {
    imagePath: 'src/assets/images/featured/image-4.png',
    caption:
      'Zvurçyk Fashion',
  },
  {
    imagePath: 'src/assets/images/featured/image-5.png',
    caption:
      'Lancome',
  },
  
];

  return (
   <section className='w-full flex items-center justify-around border-y-1 border-gray-600 text-white my-15'>
     <div className='container mx-auto px-6 py-12 flex justify-between items-start '>
        <div className='flex flex-col items-center justify-center gap-20'>
            <div>
            <h2 className='text-5xl font-semibold leading-[120%] tracking-[-1px] max-w-[500px]'>Featured works from Colstic©</h2>
            <p className='mt-2'>All featured works from Colstic and you can see more the projects</p>

            <Button className="hover:bg-[var(--primary-color)] cursor-pointer p-6 rounded-4xl text-[16px] text-black mt-8 font-medium bg-[var(--primary-color)]">See detail — our works</Button>
            </div>
            <img src='src/assets/images/brick-white.png' alt='services' className='w-[450px] h-auto mt-5 featured-image'/>
        </div>
        <div ref={containerRef} className='max-w-[600px] grid grid-cols-2 gap-6'>
            {featured.map((featured, index) => (
           <div key={index} className='flex flex-col items-start gap-2 featured-item'>
               <img src={featured.imagePath} alt={featured.caption} className='w-full h-auto rounded-lg'/>
               <p className='mt-2 text-center'>{featured.caption}</p>
           </div>
            ))}
        </div>
     </div>
    </section>
  )
}

export default Featured
