import Home from "./pages/Home"
import { gsap } from "gsap";
import { SplitText, ScrollTrigger } from "gsap/all";
import { ReactLenis, useLenis } from 'lenis/react'

function App() {
   const lenis = useLenis((lenis) => {
    // called every scroll
    console.log(lenis)
  })

gsap.registerPlugin(ScrollTrigger, SplitText);
  return (
    <>
      <ReactLenis root />
      <Home />
    </>
  )
}

export default App
