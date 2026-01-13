import contoursImage from "../assets/contours.png";
import Badge from "./Badge";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  AcademicCapIcon,
  ArrowDownTrayIcon,
} from "@heroicons/react/24/outline";

function AboutMe() {
  return (
    <div className="w-full overflow-hidden bg-dull font-dm-sans relative">
      {/* <img
        src={contoursImage}
        alt="Contour map"
        className="
                    absolute top-0 left-1/2 -translate-x-1/2
                    h-full min-w-[2560px] opacity-60 object-cover
                  "
      /> */}

      {/* A — background split 50/50 */}
      <div className="absolute inset-0 grid grid-cols-2">
        <div className="bg-dull relative overflow-hidden">
          <img
            src={contoursImage}
            alt="Contour map"
            className="
                    absolute top-0 left-0 -translate-x-0
                    min-w-[2560px] opacity-25 object-cover
                  "
          />
        </div>
        <div className="bg-bright-400" />
      </div>

      {/* B — owns layout */}
      <div className="relative mx-auto max-w-400 grid grid-cols-[auto_1fr]">
        {/* C content */}
        <div className="relative z-10 p-6 text-dark">
          <div className="bg-background-mint shadow-md p-4 rounded flex flex-col items-center">
            <img
              className="h-24 w-24 rounded-full object-cover aspect-square mb-2"
              src="/src/assets/profile-picture.png"
              alt="Profile picture"
            />
            <h2 className="text-2xl font-medium">Jesse Kettmann</h2>
            <h2 className="text-xl font-light mb-8">Software Developer</h2>
            <ul className="list-none space-y-3 w-full">
              <li className="flex items-center gap-3">
                <EnvelopeIcon className="size-6" />
                jessekettmann@gmail.com
              </li>
              <li className="flex items-center gap-3">
                <PhoneIcon className="size-6" />
                +31 6 24554400
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
            <button className="bg-accent hover:bg-accent-highlight hover:cursor-pointer text-white font-medium py-2 px-4 flex items-center mt-8 gap-3 rounded shadow-md transition duration-200">
              Download CV
              <ArrowDownTrayIcon className="size-6" />
            </button>
          </div>
        </div>

        {/* D content */}
        <div className="flex flex-col justify-between z-10 p-6 text-dark bg-bright-400">
          <div>
            <h2 className="text-4xl font-light mb-2">About Me</h2>
            <div className="space-y-4">
              <p className="text-xl text-justify">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur."
              </p>
              <p className="text-xl text-justify">
                Section 1.10.32 of "de Finibus Bonorum et Malorum", written by
                Cicero in 45 BC "Sed ut perspiciatis unde omnis iste natus error
                sit voluptatem accusantium doloremque laudantium, totam rem
                aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed
                quia consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt.
              </p>
              <p className="text-xl text-justify">
                translation by H. Rackham "But I must explain to you how all
                this mistaken idea of denouncing pleasure and praising pain was
                born and I will give you a complete account of the system, and
                expound the actual teachings of the great explorer of the truth,
                the master-builder of human happiness. No one rejects, dislikes,
                or avoids pleasure itself, because it is pleasure, but because
                those who do not know how to pursue pleasure rationally
                encounter consequences that are extremely painful."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
