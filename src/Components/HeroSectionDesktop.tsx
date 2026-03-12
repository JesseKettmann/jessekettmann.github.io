import HeroSectionContent from "./HeroSectionContent";

function HeroSectionDesktop() {
  return (
    <>
      <div className="absolute bg-wall top-0 h-190 right-0 w-[calc((100vw-60rem)/2)]" />
      <div className="relative mx-auto max-w-260 h-190 flex items-center px-global">
        {/* Image */}
        <img
          src="/cover-image.png"
          alt="Man leaning against wall"
          className="
          absolute
          -right-134
          top-0
          h-190
          max-w-none
          object-contain
          z-0
        "
        />

        {/* Content */}
        <div className="font-dm-sans text-left z-10">
          <HeroSectionContent />
        </div>
      </div>
    </>
  );
}

export default HeroSectionDesktop;
