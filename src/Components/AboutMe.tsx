import { useMediaQuery } from "../useMediaQuery";
import AboutMeDesktop from "./AboutMeDesktop";
import AboutMeMobile from "./AboutMeMobile";

function AboutMe() {
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  return (
    <div className="w-full overflow-hidden bg-dull relative">
      {isDesktop ? <AboutMeDesktop /> : <AboutMeMobile />}
    </div>
  );
}

export default AboutMe;
