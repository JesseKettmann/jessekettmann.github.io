function HeroSection() {
  return (
    <div className="w-full h-200 overflow-hidden bg-background-mint">
      <div className="relative mx-auto max-w-338 h-full flex items-center px-8">
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
          <h1 className="text-6xl font-light text-bright-500 mb-4">
            Hey, I'm Jesse.
          </h1>
          <p className="text-2xl font-light text-bright-500 max-w-lg">
            I'm a software engineer from Veenendaal in the Netherlands. I work
            across various domains, from enterprise systems to web development.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
