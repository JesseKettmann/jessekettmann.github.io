import contoursImage from "../assets/contours.png";
import AboutMeText from "./AboutMeText";
import AboutMeCard from "./AboutMeCard";

function AboutMeDesktop() {
  return (
    <>
      <div className="absolute inset-0 grid grid-cols-2">
        <div className="bg-dull relative overflow-hidden">
          <img
            src={contoursImage}
            alt="Contour map"
            className="absolute top-0 left-0 min-w-640 opacity-25 object-cover"
          />
        </div>
        <div className="bg-bright-400" />
      </div>

      <div className="relative mx-auto max-w-400 grid grid-cols-[auto_1fr]">
        <AboutMeCard />
        <AboutMeText />
      </div>
    </>
  );
}

export default AboutMeDesktop;
