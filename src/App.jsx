import Home from "./pages/Home"
import { gsap } from "gsap";
import { SplitText, ScrollTrigger } from "gsap/all";
import { ReactLenis, useLenis } from 'lenis/react'
import { useState } from "react";
import Preloader from "./components/common/Preloader";

function App() {
  const [loadingDone, setLoadingDone] = useState(false);

   const lenis = useLenis((lenis) => {
    // called every scroll
    console.log(lenis)
  })

gsap.registerPlugin(ScrollTrigger, SplitText);
  return (
    <>
      <ReactLenis root />
      {!loadingDone && <Preloader onComplete={() => setLoadingDone(true)} />}
      <Home />
    </>
  )
}

export default App
