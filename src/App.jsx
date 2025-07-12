import Home from "./pages/Home"
import { gsap } from "gsap";
import { SplitText, ScrollTrigger } from "gsap/all";

function App() {
gsap.registerPlugin(ScrollTrigger, SplitText);
  return (
    <>
     <Home />
     {/* You can add more components or routes here as needed */}
    </>
  )
}

export default App
