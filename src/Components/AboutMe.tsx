import contoursImage from "../assets/contours.png";

function AboutMe() {
  return (
    <div className="w-full h-[800px] overflow-hidden bg-army-400">
      <div className="relative w-full h-full overflow-hidden">
        {/* A */}
        <div className="relative mx-auto w-full">
          {/* Full-bleed background layers */}
          <div className="absolute inset-0 grid grid-cols-5 pointer-events-none">
            {/* C background — white to the left edge */}
            <div className="bg-army-400 col-span-1" />

            {/* D background — image to the right edge */}
            <div className="col-span-4 bg-cover bg-center bg-army-500">
              <div className="absolute top-0 h-full overflow-hidden">
                <img
                  src={contoursImage}
                  className="opacity-10 min-w-640"
                  alt="Contour map"
                />
              </div>
            </div>
          </div>

          {/* B — constrained content */}
          <div className="relative mx-auto max-w-460 grid grid-cols-5">
            {/* C content */}
            <div className="col-span-1 p-8 bg-army-400">
              <div className="bg-army-500 shadow-md p-4 rounded-lg">
                <h2 className="text-xl font-bold">Column C</h2>
                <p>
                  Content stays constrained. It is a long established fact that
                  a reader will be distracted by the readable content of a page
                  when looking at its layout. The point of using Lorem Ipsum is
                  that it has a more-or-less normal distribution of letters, as
                  opposed to using 'Content here, content here', making it look
                  like readable English.
                </p>
              </div>
            </div>

            {/* D content */}
            <div className="col-span-4 p-8">
              <h2 className="text-xl font-bold">Column D</h2>
              <p>This content is also constrained.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
