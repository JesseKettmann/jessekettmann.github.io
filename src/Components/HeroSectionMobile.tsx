import HeroSectionContent from "./HeroSectionContent";

function HeroSectionMobile() {
  return (
    <div className="relative w-full flex flex-col justify-center p-global overflow-hidden">
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-full aspect-39/32 overflow-hidden">
        {/* Image */}
        <img
          src="/cover-image.png"
          alt="Man sitting in chair"
          className="
            absolute
            left-1/2
            bottom-0
            -translate-x-1/2
            translate-y-[35%]
            w-[90vw]
            h-auto
            object-contain
            z-0
          "
        />
        {/* Gradient fade */}
        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-[50%]
            bg-linear-to-b
            from-transparent
            to-background-mint
            z-10
          "
        />
      </div>

      <div className="w-full aspect-43/32" />

      {/* Content */}
      <div className="font-dm-sans text-center flex flex-col items-center z-10">
        <HeroSectionContent />
      </div>
    </div>
  );
}

export default HeroSectionMobile;
