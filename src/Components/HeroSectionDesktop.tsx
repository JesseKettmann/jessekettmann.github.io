import HeroSectionContent from "./HeroSectionContent";

function HeroSectionDesktop() {
  return (
    <div className="relative mx-auto max-w-338 h-200 flex items-center px-8">
      {/* Image */}
      <img
        src="/src/assets/cover-image.png"
        alt="Man sitting in chair"
        className="
          absolute
          right-8
          -bottom-100
          w-225
          h-auto
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
  );
}

export default HeroSectionDesktop;
