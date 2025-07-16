import React, { useRef, useState, useEffect } from 'react'; 
import image1 from "../../assets/images/testimonial/images.png";
import image2 from "../../assets/images/testimonial/images-1.png";
import avatar from "../../assets/images/featured/image-3.png";
import { ArrowLeft } from '../../assets/icons/ArrowLeft';
import { ArrowRight } from '../../assets/icons/ArrowRight';

const TestimonialSlider = () => {
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

const testimonials = [
  {
    images: [image2, image1],
    quote:
      "Colstic© has been like an extension of our own team. Their expertise, transparency, and willingness to build new and exciting digital experiences has been critical to the growth of Erbology.",
    name: "Neil Diamond Brantz.",
    title: "Founder",
    avatar: avatar,
  },
  {
    images: [image1, image2],
    quote:
      "Colstic© has been like an extension of our own team. Their expertise, transparency, and willingness to build new and exciting digital experiences has been critical to the growth of Erbology.",
    name: "Olusa Tobi",
    title: "Founder",
    avatar: avatar,
  },
  {
    images: [image1, image2],
    quote:
      "Colstic© has been like an extension of our own team. Their expertise, transparency, and willingness to build new and exciting digital experiences has been critical to the growth of Erbology.",
    name: "Olawale Balogun",
    title: "Designer",
    avatar: avatar,
  },
];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      const width = slider.offsetWidth;
      slider.scrollTo({
        left: currentIndex * width,
        behavior: 'smooth',
      });
    }
  }, [currentIndex]);

  return (
    <div className="relative w-full md:container mx-auto p-6 md:py-12 text-white rounded-xl">
  {/* Header Text — stays static */}
  <div className="flex flex-col md:flex-row items-center justify-between gap-8">
    {/* Left: Static Images */}
    <div className="flex gap-4 md:w-[700px] w-full justify-center">
      {testimonials[currentIndex].images.map((image, j) => (
        <img
          key={j}
          src={image}
          alt={`testimonial-img-${j}`}
          className="w-[60%] h-auto object-cover"
        />
      ))}
    </div>

    {/* Right: Title + Quote + Controls */}
    <div className="w-[600px] space-y-10 flex flex-col items-start  p-6" >
      <h2 className="text-3xl font-semibold">Best Partnership</h2>

      {/* Slider Text Content */}
      <div
        ref={sliderRef}
        className="w-full overflow-hidden scroll-smooth"
      >
        <div className="flex" >
          {testimonials.map((item, i) => (
            <div key={i} className="min-w-full">
              <p className="text-gray-300 w-[500px] text-md leading-[150%]">
                “{item.quote}”
              </p>
            </div>
          ))}
        </div>  
        <div className="h-px w-[400px] mt-10 bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

      </div>

      {/* User Info & Buttons */}
      <div className="flex justify-between items-center md:w-[500px]">
        <div className="flex items-center gap-3">
          <img
            src={testimonials[currentIndex].avatar}
            className="w-10 h-10 rounded-full object-cover"
            alt={testimonials[currentIndex].name}
          />
          <div>
            <p className="font-medium">{testimonials[currentIndex].name}</p>
            <p className="text-xs text-gray-400">{testimonials[currentIndex].title}</p>
          </div>
        </div>

        <div className="flex gap-2">
          <button
            onClick={handlePrev}
            className="text-white text-xl bg-gray-800 hover:bg-gray-700 h-10 w-18 p-3 py-1 rounded-full"
          >
           <ArrowLeft fill="#fff" />
          </button>
          <button
            onClick={handleNext}
            className="text-black text-xl h-10 w-18 bg-[var(--primary-color)] hover:bg-[var(--primary-color)] px-3 py-1 rounded-full"
          >
          <ArrowRight fill="#101010" className=""/>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default TestimonialSlider;
