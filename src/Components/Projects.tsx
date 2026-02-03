import { SwiperSlide } from "swiper/react";
import Carousel from "./Carousel";
import ProjectPage from "./ProjectPage";

function Projects() {
  return (
    <div className="w-full overflow-hidden bg-background-mint">
      <div className="relative mx-auto max-w-400 h-full items-center p-8">
        <div className="h-full w-full rounded shadow overflow-hidden bg-bright-500 flex flex-col">
          <div className="shadow-md z-10">
            <h2 className="text-4xl font-light my-4 text-dark z-10 text-center">
              Featured Projects
            </h2>
          </div>
          <div className="flex-1 min-h-0">
            <Carousel>
              <SwiperSlide>
                <ProjectPage
                  image="timeline-suspects"
                  title="Timeline Suspects"
                  year="(2023)"
                  tags={["React", "Tailwind CSS", "JavaScript", "SQL"]}
                >
                  <div className="space-y-4">
                    <p className="text-xl text-justify">
                      I completed my Bachelor’s degree with a software project
                      in which I worked on a ten-person team to develop a
                      prototype system for the Dutch police and KMar. This was
                      my first experience working with Scrum and building a
                      React web application, where I took on the role of
                      front-end supervisor.
                    </p>
                    <p className="text-xl text-justify">
                      The system combined multiple components, including a back
                      end responsible for managing security camera streams and
                      performing real-time analysis such as traffic monitoring
                      and passerby detection.
                    </p>
                    <p className="text-xl text-justify">
                      We built a web interface that allowed officers to describe
                      suspects using clothing attributes and filter results by
                      location. The system then generated timelines of relevant
                      camera footage. I was responsible for much of the UI
                      design and later helped connect the database.
                    </p>
                    <p className="text-xl text-justify">
                      A demo is available on{" "}
                      <a
                        href="https://www.youtube.com/watch?v=vV1JjrZjnxk&t=35s"
                        className="text-accent hover:text-accent-highlight"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        YouTube
                      </a>
                      , and the repositories can be found in our{" "}
                      <a
                        href="https://github.com/The-un-usual-suspects"
                        className="text-accent hover:text-accent-highlight"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub organization
                      </a>
                      .
                    </p>
                  </div>
                </ProjectPage>
              </SwiperSlide>
              <SwiperSlide>
                <ProjectPage
                  image="eye-tracking-pinball"
                  title="Eye-Tracking Pinball Research"
                  year="(2025)"
                  tags={[
                    "Python",
                    "Eye Tracking",
                    "Object Detection",
                    "Machine Learning",
                  ]}
                >
                  <div className="space-y-4">
                    <p className="text-xl text-justify">
                      For my Master’s thesis, I developed an integrated
                      application that combined eye-tracking data and object
                      tracking to study visual behavior during fast-paced
                      gameplay.
                    </p>
                    <p className="text-xl text-justify">
                      Participants wore eye-tracking glasses that recorded their
                      field of view and gaze position. Using gaze mapping and
                      homography, this gaze position was projected onto a static
                      representation of the playfield, removing head movement
                      and perspective distortion.
                    </p>
                    <p className="text-xl text-justify">
                      The playfield itself was recorded from above using another
                      camera. An object detection model was trained to identify
                      ball positions, and tracking was applied to preserve ball
                      identities over time. By transforming gaze and object
                      positions into field coordinates, visual strategies could
                      be analyzed.
                    </p>
                    <p className="text-xl text-justify">
                      The full thesis paper is available in the{" "}
                      <a
                        href="https://studenttheses.uu.nl/handle/20.500.12932/49766"
                        className="text-accent hover:text-accent-highlight"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        UU Theses Repository
                      </a>
                      . The application code can be found on{" "}
                      <a
                        href="https://github.com/JesseKettmann/EyeTrackingPinballPublic"
                        className="text-accent hover:text-accent-highlight"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub
                      </a>
                      , though the project cannot be run without participant
                      data.
                    </p>
                  </div>
                </ProjectPage>
              </SwiperSlide>
              <SwiperSlide>
                <ProjectPage
                  image="games"
                  title="Various Games"
                  year=""
                  tags={["C#", "Unity", "Godot", "MonoGame"]}
                >
                  <div className="space-y-4">
                    <p className="text-xl text-justify">
                      Throughout my life I've made dozens of small games and
                      prototypes. Through these experiences, I developed a
                      foundation across a broad range of areas like network
                      programming, memory management, and UI design.
                    </p>
                    <p className="text-xl text-justify">
                      In more recent years, I focused on producing more complete
                      projects through game jams and academic assignments. Such
                      environments are especially effective for practicing rapid
                      prototyping and prioritization, as tight deadlines require
                      strong collaboration and a clear focus on the most
                      impactful features.
                    </p>
                    <p className="text-xl text-justify">
                      Notable projects include Shenlong, which won the 8th Bored
                      Pixels Jam out of 133 entries, and Caribbean Climb, which
                      placed 91st in the GMTK Game Jam 2024 among 7,539 entries.
                      For both games, I was responsible for the art and the
                      majority of the programming.
                    </p>
                    <p className="text-xl text-justify">
                      These games are available on{" "}
                      <a
                        href="https://drepple.itch.io"
                        className="text-accent hover:text-accent-highlight"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        itch.io
                      </a>
                      .
                    </p>
                  </div>
                </ProjectPage>
              </SwiperSlide>
              <SwiperSlide>
                <ProjectPage
                  image="the-cycle"
                  title="The Cycle"
                  year="(2024)"
                  tags={["Blender", "Motion Capture"]}
                >
                  <div className="space-y-4">
                    <p className="text-xl text-justify">
                      “The Cycle” is a short film I worked on with three other
                      students as part of the Computer Animation course at
                      Utrecht University. We used a Vicon motion capture system
                      to record the movement of actors and objects, which was
                      then mapped onto 3D models within a virtual scene.
                    </p>
                    <p className="text-xl text-justify">
                      The three-minute film follows a robot mercenary tasked
                      with eliminating another robot. It placed second in the
                      film festival that concluded the course.
                    </p>
                    <p className="text-xl text-justify">
                      My responsibilities included modeling, animation, video
                      editing, and acting. While I already had extensive
                      experience with Blender and video editing, this was my
                      first time working with motion capture technology.
                    </p>
                    <p className="text-xl text-justify">
                      The film can be watched on{" "}
                      <a
                        href="https://youtu.be/rq4LM_uPvGA"
                        className="text-accent hover:text-accent-highlight"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        YouTube
                      </a>
                      .
                    </p>
                  </div>
                </ProjectPage>
              </SwiperSlide>
              <SwiperSlide>
                <ProjectPage
                  image="fluid-simulation"
                  title="Fluid Simulation Optimization"
                  year="(2024)"
                  tags={["C++", "OpenCL"]}
                >
                  <div className="space-y-4">
                    <p className="text-xl text-justify">
                      At university, I worked with another student on a
                      performance optimization project focused on improving a
                      third-party application. This project marked my first
                      in-depth experience with GPU programming.
                    </p>
                    <p className="text-xl text-justify">
                      The chosen application was a 2020 fluid simulation based
                      on the lattice Boltzmann method. Instead of solving
                      complex fluid equations directly, LBM represents fluid
                      behavior by modeling how simplified particles move and
                      interact across a grid.
                    </p>
                    <p className="text-xl text-justify">
                      We profiled frequently to identify performance
                      bottlenecks, and ended up porting most simulation steps to
                      the GPU, and using SIMD instructions to accelerate
                      rendering. These changes resulted in a 2.57× speedup,
                      though our implementation scaled significantly better for
                      larger simulation grids, where GPU data transfer overhead
                      becomes a smaller factor.
                    </p>
                    <p className="text-xl text-justify">
                      The project is available on{" "}
                      <a
                        href="https://github.com/JesseKettmann/Fluid-Simulation"
                        className="text-accent hover:text-accent-highlight"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub
                      </a>
                      . Additional notes on running the project are listed at
                      the bottom of{" "}
                      <a
                        href="/src/assets/download/fluid-sim-optimization.pdf"
                        download
                        className="text-accent hover:text-accent-highlight"
                      >
                        our report
                      </a>
                      .
                    </p>
                  </div>
                </ProjectPage>
              </SwiperSlide>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
