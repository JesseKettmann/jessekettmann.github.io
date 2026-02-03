import AboutMeCard from "./AboutMeCard";
import AboutMeText from "./AboutMeText";

function AboutMeMobile() {
  return (
    <div className="flex flex-col">
      <AboutMeText />
      <div className="bg-dull relative overflow-hidden">
        <img
          src="/contours.png"
          alt="Contour map"
          className="absolute top-0 left-0 min-w-640 opacity-25 object-cover"
        />
        <AboutMeCard />
      </div>
    </div>
  );
}

export default AboutMeMobile;
