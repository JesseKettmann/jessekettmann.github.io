import HeroSectionContent from "./HeroSectionContent";

function HeroSectionMobile() {
  return (
    <div className="relative w-full flex flex-col justify-center p-global overflow-hidden">
      <div className="absolute w-full h-full left-0 top-0 flex flex-col">
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-full aspect-39/32 overflow-hidden">
          <div className="absolute bg-bright-500 top-0 h-full right-0 w-1/3" />
          {/* Image */}
          <img
            src="/cover-image.png"
            alt="Man leaning against wall"
            className="
            absolute
            left-1/2
            top-0
            -translate-x-10/25
            w-auto
            h-full
            object-cover
            z-0
          "
          />
        </div>

        {/* Gradient fade */}
        <div className="w-full aspect-2/1" />
        <div className="w-full aspect-39/13 bg-linear-to-b from-transparent to-background-mint z-10" />
        <div className="flex-1 bg-background-mint z-10" />
      </div>

      {/*<div className=" absolute w-full h-[calc(100%-calc(100vw*39/32))] bottom-0 bg-background-mint" />*/}

      <div className="w-full aspect-50/32" />

      {/* Content */}
      <div className="font-dm-sans text-center flex flex-col items-center z-10">
        <HeroSectionContent />
      </div>
    </div>
  );
}

export default HeroSectionMobile;
