import contoursImage from "../assets/contours.png";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  AcademicCapIcon,
  ArrowDownTrayIcon,
} from "@heroicons/react/24/outline";
import { EMAIL, PHONE } from "../constants";

function AboutMe() {
  return (
    <div className="w-full overflow-hidden bg-dull relative">
      <div className="absolute inset-0 grid grid-cols-2">
        <div className="bg-dull relative overflow-hidden">
          <img
            src={contoursImage}
            alt="Contour map"
            className="absolute top-0 left-0 min-w-640 opacity-25 object-cover"
          />
        </div>
        <div className="bg-bright-400" />
      </div>

      {/* B — owns layout */}
      <div className="relative mx-auto max-w-400 grid grid-cols-[auto_1fr]">
        {/* C content */}
        <div className="relative z-10 p-8 text-dark">
          <div className="bg-background-mint shadow p-4 rounded flex flex-col items-center">
            <img
              className="h-24 w-24 rounded-full object-cover aspect-square mb-2"
              src="/src/assets/profile-picture.png"
              alt="Profile picture"
            />
            <h2 className="text-2xl font-medium">Jesse Kettmann</h2>
            <h2 className="text-xl font-light mb-8">Software Engineer</h2>
            <ul className="list-none space-y-3 w-full">
              <li className="flex items-center gap-3">
                <EnvelopeIcon className="size-6" />
                {EMAIL}
              </li>
              <li className="flex items-center gap-3">
                <PhoneIcon className="size-6" />
                {PHONE}
              </li>
              <li className="flex items-center gap-3">
                <MapPinIcon className="size-6" />
                Veenendaal, Netherlands
              </li>
              <li className="flex items-center gap-3">
                <AcademicCapIcon className="size-6" />
                Computing Science
              </li>
              <li className="flex items-center gap-3">
                <AcademicCapIcon className="size-6" />
                Game and Media Technology
              </li>
            </ul>
            <button
              className="bg-accent hover:bg-accent-highlight cursor-pointer text-white font-medium
            py-2 px-4 flex items-center mt-8 gap-3 rounded shadow transition duration-200"
            >
              Download CV
              <ArrowDownTrayIcon className="size-6" />
            </button>
          </div>
        </div>

        {/* D content */}
        <div className="flex flex-col justify-between z-10 p-8 text-dark bg-bright-400">
          <div>
            <h2 className="text-4xl font-light mb-2">About Me</h2>
            <div className="space-y-4">
              <p className="text-xl text-justify">
                My name is Jesse Kettmann, and I'm a Dutch software engineer.
                I've always been fascinated by what can be built with code, and
                I started programming games in GameMaker Studio around the age
                of ten. During high school, I continued teaching myself
                technical skills alongside broader design fundamentals such as
                UX and color theory.
              </p>
              <p className="text-xl text-justify">
                At university, I was formally introduced to core programming
                concepts like software design patterns and different programming
                paradigms. I worked with a variety of languages and had the
                opportunity to collaborate with a real client as part of a Scrum
                team. Altogether, this experience helped shape me into a
                versatile developer.
              </p>
              <p className="text-xl text-justify">
                I enjoy challenging myself and constantly expanding my skill
                set. My goal is to work on projects I'm proud of, learn along
                the way, and keep building things that have an impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
