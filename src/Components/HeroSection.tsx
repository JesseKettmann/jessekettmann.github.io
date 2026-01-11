function HeroSection() {
  return (
    <section className="w-full h-[600px] bg-background-mint overflow-hidden">
      <div className="max-w-5xl mx-auto h-full flex items-center px-6">
        <div className="flex w-full justify-between items-start">
          {/* Text Box */}
          <div className="flex-1 font-quicksand text-left">
            <h1 className="text-5xl font-semibold text-bright-500 mb-4">
              Hey, I'm Jesse.
            </h1>
            <p className="text-xl font-medium text-bright-500 max-w-md">
              I'm a software engineer from Veenendaal in the Netherlands. I work
              across various domains, from enterprise systems to web
              development.
            </p>
          </div>

          {/* Image Container */}
          <div className="flex-1 flex justify-center">
            <img
              src="/src/assets/cover-image.png"
              alt="Man sitting in chair"
              className="relative top-16 max-w-sm object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
