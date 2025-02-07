import Explore from "./components/Explore";
import Faq from "./components/Faq/Faq";
import Home from "./components/Home";
import LazyBenefits from "./components/Benefits/LazyBenefitsWrapper";
import HowItWorks from "./components/HowItWorks";

export default function Furnify() {
  return (
    <>
    <Home />
    <Explore />
    <LazyBenefits />
    <HowItWorks />
    <Faq />
    </>
  )
} 