import { useMediaQuery } from "../useMediaQuery";
import HeroSectionDesktop from "./HeroSectionDesktop";
import HeroSectionMobile from "./HeroSectionMobile";

function HeroSection() {
  const isDesktop = useMediaQuery("(min-width: 1280px)");

  return (
    <div className="w-full overflow-hidden bg-background-mint">
      {isDesktop ? <HeroSectionDesktop /> : <HeroSectionMobile />}
    </div>
  );
}

export default HeroSection;
