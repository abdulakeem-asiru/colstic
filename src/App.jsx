import Home from "./pages/Home"
import { gsap } from "gsap";
import { SplitText, ScrollTrigger } from "gsap/all";
import { ReactLenis} from 'lenis/react'
import { useState } from "react";
import Preloader from "./components/common/Preloader";

function App() {
  const [loadingDone, setLoadingDone] = useState(false);

gsap.registerPlugin(ScrollTrigger, SplitText);
  return (
    <>
      <ReactLenis root />
      {!loadingDone && <Preloader onComplete={() => setLoadingDone(true)} />}
      <Home ready={loadingDone}/>
    </>
  )
}

export default App
