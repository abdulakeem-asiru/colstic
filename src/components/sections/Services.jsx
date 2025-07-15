import { useGSAP } from '@gsap/react';
import React, { useRef } from 'react'
import gsap from 'gsap';    

const Services = () => {
  const containerRef = useRef(null);

      useGSAP(
        () => {
         const tl = gsap.timeline({
            defaults: { duration: 1, ease: 'slow' },
            scrollTrigger: {
              trigger: ".service",
              start: "top 100%",
              end: "bottom 60%",
              scrub: 2,
            },
         })

         tl.from('.service', { 
            borderRadius: '20px',
            scale: 0.8,

});

gsap.to(('.service-item'), {
      scrollTrigger: {
        trigger: containerRef.current,   
        start: "top 80%",
        scrub: 1,
      },
      position : 'sticky',
      top : 0,
      boxShadow : "box-shadow: -3px -54px 20px -18px rgba(239,239,239,0.75)",
      padding : "20px",
      stagger: 0.2,
      duration: 0.6,
      ease: "slow",
    })
      });

    const services = [
  {
    number: '01.',
    title: 'Strategy and consultancy',
    description:
      'Because we have a global vision, we can see the project as a whole. This enables us to understand its needs, identify opportunities, define and map process, and effectively to guide each stage of the project to deliver the best results.',
  },
  {
    number: '02.',
    title: 'Digital branding',
    description:
      'We define and create digital brands with soul that transmit those intangible values that make the brand recognizable and remember in many different ways.',
  },
  {
    number: '03.',
    title: 'Video production',
    description:
      'Video production is the process of producing video content for video. It is the equivalent of filmmaking.',
  },
];

  return (
    <section className='w-full flex items-center justify-around bg-white text-black mt-4 service '>
     <div className='container mx-auto px-6 py-12 flex justify-between items-start'>
        <div className='flex flex-col items-center justify-center gap-6'>
            <h2 className='text-5xl text-[#101010] font-semibold leading-[120%] tracking-[-1px] max-w-[500px]'>Our services from Colstic©</h2>
            <img src='src/assets/images/brick.png' alt='services' className='w-[250px] h-auto '/>
        </div>
        <div className='max-w-[600px]' ref={containerRef}>
            {services.map((service, index) => (
            <div className='flex items-start justify-center gap-6 pb-10 service-item bg-white' key={index}>
                <span className='text-2xl font-medium text-[#1D1D21]'>{service.number}</span>
                <div className='flex flex-col justify-center items-start
                 border-gray-200
                 gap-3 leading-[40px]'><h2 className='text-2xl font-medium text-[#1D1D21]'>{service.title}</h2>
                <p className='text-[16px] font-normal leading-[150%] text-[#1D1D21] max-w-[450px]'>{service.description}</p>
                </div>
            </div>
            
            ))}
        </div>
     </div>
    </section>
  )
}

export default Services
