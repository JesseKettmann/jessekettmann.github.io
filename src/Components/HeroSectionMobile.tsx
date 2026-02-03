import HeroSectionContent from "./HeroSectionContent";

function HeroSectionMobile() {
  return (
    <div className="relative mx-auto w-full aspect-18/16 flex justify-center items-end p-global">
      {/* Image */}
      <img
        src="/cover-image.png"
        alt="Man sitting in chair"
        className="
          absolute
          left-1/2
          bottom-0
          -translate-x-1/2
          translate-y-[28%]
          w-[90vw]
          max-w-[225]
          h-auto
          object-contain
          z-0
        "
      />

      {/* Gradient fade (top part) */}
      <div
        className="
          absolute
          inset-x-0
          bottom-[18%]
          h-[40%]
          bg-linear-to-b
          from-transparent
          to-background-mint
          z-10
        "
      />

      {/* Solid white bottom */}
      <div
        className="
          absolute
          inset-x-0
          bottom-0
          h-[18%]
          bg-background-mint
          z-10
        "
      />

      {/* Content */}
      <div className="font-dm-sans text-center z-10">
        <HeroSectionContent />
      </div>
    </div>
  );
}

export default HeroSectionMobile;
