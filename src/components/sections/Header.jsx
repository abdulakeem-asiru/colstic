import {Button} from "../ui/button"
import {SideNav} from "../common/sideNav"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"


export const Header = () => {
  useGSAP(() =>{

  const tl = gsap.timeline({ defaults: { duration: 2 } });

  tl.from(".header", {
    y: -50,
  scale: 0.3,
  opacity: 0,
  ease: "back.out(1.7)"
  })

     const navTween = gsap.timeline(
        {
            scrollTrigger : {trigger : '.header',
            start : 'bottom top',
            end : 'bottom 100',
            scrub : 1,
            }
        }
    );
    navTween.to('.header',  {
        backgroundColor : "#000000",
        position : 'sticky',
        top : 0,
        opacity : 0.9,
        backgroundFilter : 'blur(10px)',
        duration : 0.5,
        ease : 'power1.inOut'
    })

  });

  return (
    <header className="py-4 header z-50 bg-transparent ">
        <nav className="flex items-center justify-between px-6 container mx-auto">
        <a href="/"><img src="/logo.png" alt="Logo" className="w-[123px] h-[53px]"/></a>
        <div className="flex items-center gap-4">
            <Button className="p-5 rounded-4xl text-[16px] font-medium border-2 border-white">Let's talk</Button>
            <SideNav Hamburger={<Button className="bg-transparent flex-col flex hamburger-button items-center justify-center gap-2 p-0">
              <span className="w-15 h-[6px] bg-white rounded-4xl"></span>
              <span className="w-15 h-[6px] bg-white rounded-4xl"></span>
            </Button>}/>
        </div>
        </nav>
    </header>
  )

}