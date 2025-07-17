import { useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Preloader = ({onComplete}) => {
    const [count, setCount] = useState(0)

    useGSAP(() =>{
        let interval = setInterval(() =>{
            setCount((prev) => {
                if(prev >=100){
                clearInterval(interval);
                gsap.to("#preloader", {
                    opacity : 0,                    
                duration: 2,
                ease: "power1.inOut",
                onComplete: onComplete,
          });
          return 100;
        }
        return prev + 1;
            });
        }, 70);
    }, [onComplete])
  return (
    <section id="preloader"
    className="fixed inset-0 bg-black bg-[url('/noise.png')] text-white flex items-center justify-center z-50 font-bold">
           <h1 className=" text-5xl"   style={{ fontFamily: "'Orbitron', sans-serif" }}> {count}%</h1>
    </section>
  )
}

export default Preloader
